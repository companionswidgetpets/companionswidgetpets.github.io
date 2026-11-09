#!/usr/bin/env python3
"""Pull what the website shows out of the Companions app repo.

    python3 tools/sync-from-app.py [path to the app repo]      (default: ../companions)

Copies every fish and prop picture into src/assets/, and reads the app's own source for
the facts the pages are built from, so the site can never drift from the app:

  src/data/species.json   every species: its pack, picture, tank scale, swim style and
                          its name in all 12 languages (from Localizable.xcstrings)
  src/data/packs.json     the packs in the app's order, with names, taglines and which
                          come free
  src/data/styles.json    the tank styles with their names and GlassPalette numbers
  src/data/props.json     the props with names and the opaque footprint of each picture
                          (measured by tools/footprints.swift, as the app does)
  src/data/premade.json   the Explore page's ready-made tanks, per widget size
  src/data/sync.json      when this ran and from which app commit

The Swift sources are read with small, deliberate regular expressions that match the
app's house style; if the app changes shape the asserts below fail loudly rather than
writing a wrong site.
"""
import json
import pathlib
import re
import shutil
import subprocess
import sys
import tempfile
from datetime import date

ROOT = pathlib.Path(__file__).resolve().parents[1]
APP = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else ROOT.parent / "companions").resolve()
SRC = APP / "companions"
LANGS = ["en", "ar", "de", "es", "fr", "it", "ja", "ko", "pt", "ru", "zh-Hans", "zh-Hant"]
DATA = ROOT / "src" / "data"
ASSETS = ROOT / "src" / "assets"

if not (SRC / "Models" / "FishSpecies.swift").exists():
    sys.exit(f"No Companions app at {APP}: pass the path to the app repo")


def read(relative: str) -> str:
    return (SRC / relative).read_text(encoding="utf-8")


def block(text: str, start: str, open_: str = "{", close: str = "}") -> str:
    """The body of the first `{ … }` (or `[ … ]`) that follows the regex `start`, balanced."""
    match = re.search(start, text)
    assert match, f"no match for {start!r}"
    i = text.index(open_, match.end())
    depth = 0
    for j in range(i, len(text)):
        if text[j] == open_:
            depth += 1
        elif text[j] == close:
            depth -= 1
            if depth == 0:
                return text[i + 1 : j]
    raise AssertionError(f"unbalanced brackets after {start!r}")


def cases(enum_body: str) -> list[tuple[str, str]]:
    """(case name, raw value) for every `case` line of an enum body."""
    found = []
    for line in enum_body.splitlines():
        m = re.match(r"\s*case (\w+)(?: = \"([^\"]+)\")?\s*(//.*)?$", line)
        if m:
            found.append((m.group(1), m.group(2) or m.group(1)))
    return found


def localized_switch(body: str) -> dict[str, str]:
    """{case: English key} from a switch of `case .x: String(localized: "…")` lines."""
    return dict(re.findall(r'case \.(\w+): String\(localized: "([^"]+)"\)', body))


def grouped_switch(body: str) -> dict[str, str]:
    """{case: value} from a switch whose lines read `case .a, .b: value` (one value per line)."""
    out = {}
    for line in body.splitlines():
        m = re.match(r"\s*case ((?:\.\w+(?:, )?)+): (.+?)\s*$", line)
        if m:
            for name in re.findall(r"\.(\w+)", m.group(1)):
                out[name] = m.group(2).strip()
    return out


# ---- names in every language ---------------------------------------------------------
catalog = json.loads((SRC / "Localizable.xcstrings").read_text(encoding="utf-8"))["strings"]


def names(key: str) -> dict[str, str]:
    entry = catalog.get(key, {}).get("localizations", {})
    out = {"en": key}
    for lang in LANGS[1:]:
        value = entry.get(lang, {}).get("stringUnit", {}).get("value")
        out[lang] = value if value else key
    return out


# ---- packs and species ----------------------------------------------------------------
species_src = read("Models/FishSpecies.swift")
pack_body = block(species_src, r"enum FishPack\b")
pack_cases = cases(pack_body)
pack_names = localized_switch(block(pack_body, r"var displayName: String"))
pack_taglines = localized_switch(block(pack_body, r"var tagline: String"))
free_packs = set(re.findall(r"self == \.(\w+)", block(pack_body, r"var comesWithApp: Bool")))
assert len(pack_cases) == 12, pack_cases
assert free_packs == {"stock", "freshwater"}, free_packs

species_body = block(species_src, r"enum FishSpecies\b")
species_cases = cases(species_body)
species_pack = grouped_switch(block(species_body, r"var pack: FishPack"))
species_scale = grouped_switch(block(species_body, r"var tankScale: CGFloat"))
species_swim = grouped_switch(block(species_body, r"var swimStyle: SwimStyle"))
species_footing = grouped_switch(block(species_body, r"var footing: CGFloat"))
species_names = localized_switch(block(species_body, r"var displayName: String"))
assert len(species_cases) == 58, len(species_cases)  # 11 packs of five and the three stock fish

image_dirs = [d for d in (SRC / "Images").iterdir() if d.is_dir()]


def find_picture(raw: str) -> pathlib.Path:
    hits = [d / f"{raw}.png" for d in image_dirs if (d / f"{raw}.png").exists()]
    assert len(hits) == 1, f"{raw}: {hits}"
    return hits[0]


shutil.rmtree(ASSETS / "fish", ignore_errors=True)
(ASSETS / "fish").mkdir(parents=True)
species = []
for name, raw in species_cases:
    picture = find_picture(raw)
    shutil.copy2(picture, ASSETS / "fish" / f"{raw}.png")
    species.append(
        {
            "id": raw,
            "case": name,
            "pack": species_pack[name].lstrip("."),
            "image": f"fish/{raw}.png",
            "tankScale": float(species_scale.get(name, "1")),
            "swimStyle": species_swim.get(name, ".swimmer").lstrip("."),
            "footing": float(species_footing.get(name, "0")),
            "names": names(species_names[name]),
        }
    )

packs = []
for name, raw in pack_cases:
    packs.append(
        {
            "id": name,
            "names": names(pack_names[name]),
            "taglines": names(pack_taglines[name]),
            "comesWithApp": name in free_packs,
            "species": [s["id"] for s in species if s["pack"] == name],
        }
    )
assert all(len(p["species"]) in (3, 5) for p in packs), [(p["id"], len(p["species"])) for p in packs]

# ---- styles and palettes ---------------------------------------------------------------
style_body = block(read("Models/TankStyle.swift"), r"enum TankStyle\b")
style_cases = cases(style_body)
style_names = localized_switch(block(style_body, r"var displayName: String"))
assert len(style_cases) == 8, style_cases

glass_src = read("Views/Tank/GlassBackground.swift")
rgb = r"GlassRGB\(r: ([\d.]+), g: ([\d.]+), b: ([\d.]+)\)"


def parse_rgb(text: str) -> list[float]:
    if text.strip() == ".white":
        return [1.0, 1.0, 1.0]
    m = re.fullmatch(rgb, text.strip())
    assert m, text
    return [float(m.group(i)) for i in (1, 2, 3)]


palettes = {}
for m in re.finditer(r"static let (\w+) = GlassPalette\(\n(.*?)\n    \)", glass_src, re.S):
    body = m.group(2)
    water = [
        {"at": float(a), "rgb": [float(r), float(g), float(b)]}
        for a, r, g, b in re.findall(r"GlassStop\(([\d.]+), r: ([\d.]+), g: ([\d.]+), b: ([\d.]+)\)", body)
    ]
    bed = re.search(r"bed: (\.white|GlassRGB\([^)]*\))", body).group(1)
    shadow = re.search(r"shadow: (GlassRGB\([^)]*\))", body).group(1)
    highlight = re.search(r"highlight: ([\d.]+)", body)
    shadow_opacity = re.search(r"shadowOpacity: ([\d.]+)", body)
    button = re.search(r"buttonTint: (GlassRGB\([^)]*\))", body).group(1)
    palettes[m.group(1)] = {
        "water": water,
        "bed": parse_rgb(bed),
        "shadow": parse_rgb(shadow),
        "shadowOpacity": float(shadow_opacity.group(1)) if shadow_opacity else 0.35,
        "highlight": float(highlight.group(1)) if highlight else 1.0,
        "buttonTint": parse_rgb(button),
    }
haze_src = re.search(r"static let hazeRamp[^\[]*\[(.*?)\n    \]", glass_src, re.S).group(1)
haze = [(float(a), float(o)) for a, o in re.findall(r"\(([\d.]+), ([\d.]+)\),", haze_src)]
assert len(haze) == 5, haze

styles = []
for name, raw in style_cases:
    assert name in palettes, f"no palette for {name}"
    styles.append({"id": name, "names": names(style_names[name]), "palette": palettes[name]})

# ---- props ----------------------------------------------------------------------------
prop_src = read("Support/Image+Prop.swift")
prop_body = block(prop_src, r"enum Prop\b")
prop_cases = cases(prop_body)
prop_names = localized_switch(block(prop_body, r"var displayName: String"))
decorations = re.findall(r"\.(\w+)", block(prop_body, r"static let decorations: \[Prop\] = presets \+"))
presets = re.findall(r"\.(\w+)", re.search(r"static let presets: \[Prop\] = \[([^\]]*)\]", prop_body).group(1))
assert len(prop_cases) == 20, prop_cases
fit_allowance = grouped_switch(block(prop_src, r"private var fitAllowance: CGFloat"))

shutil.rmtree(ASSETS / "props", ignore_errors=True)
(ASSETS / "props").mkdir(parents=True)
prop_pictures = []
for name, raw in prop_cases:
    picture = SRC / "Images" / "props" / f"{raw}.png"
    assert picture.exists(), picture
    shutil.copy2(picture, ASSETS / "props" / f"{raw}.png")
    prop_pictures.append(ASSETS / "props" / f"{raw}.png")

footprints = {}
swiftc = shutil.which("xcrun")
if swiftc:
    with tempfile.TemporaryDirectory() as tmp:
        exe = pathlib.Path(tmp) / "footprints"
        subprocess.run(["xcrun", "swiftc", "-O", str(ROOT / "tools" / "footprints.swift"), "-o", str(exe)], check=True)
        out = subprocess.run([str(exe), *map(str, prop_pictures)], check=True, capture_output=True, text=True).stdout
        footprints = json.loads(out)
else:
    print("warning: no Swift toolchain, props will be placed by their whole picture", file=sys.stderr)

props = []
for name, raw in prop_cases:
    measured = footprints.get(raw)
    if measured is None:
        measured = {"size": [300, 300], "footprint": [0, 0, 300, 300]}
    props.append(
        {
            "id": name,
            "raw": raw,
            "image": f"props/{raw}.png",
            "names": names(prop_names[name]),
            "size": measured["size"],
            "footprint": measured["footprint"],
            "fitAllowance": float(fit_allowance.get(name, "1")),
            "isDecoration": name in decorations or name in presets,
        }
    )

# ---- the ready-made tanks -------------------------------------------------------------
premade_src = read("Models/PremadeTanks.swift")
premade = {}
for size in ("small", "medium", "large"):
    body = block(premade_src, rf"private static let {size}: \[TankDesign\] =", "[", "]")
    tanks = []
    for m in re.finditer(r"tank\(\.(\w+), \[(.*?)\]\)", body, re.S):
        placed = [
            {"prop": p, "x": float(x), "y": float(y), "side": float(s), "flipped": bool(f)}
            for p, x, y, s, f in re.findall(
                r"standing\(\.(\w+), x: ([\d.]+), y: ([\d.]+), side: ([\d.]+)(, flipped: true)?\)", m.group(2)
            )
        ]
        tanks.append({"style": m.group(1), "props": placed})
    assert len(tanks) == 6, (size, len(tanks))
    premade[size] = tanks

# ---- write ------------------------------------------------------------------------------
DATA.mkdir(parents=True, exist_ok=True)


def write(name: str, value) -> None:
    (DATA / name).write_text(json.dumps(value, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")


write("species.json", species)
write("packs.json", packs)
write("styles.json", styles)
write("props.json", props)
write("premade.json", premade)
write("glass.json", {"hazeRamp": [{"at": a, "opacity": o} for a, o in haze]})
commit = subprocess.run(["git", "-C", str(APP), "rev-parse", "--short", "HEAD"], capture_output=True, text=True).stdout.strip()
write("sync.json", {"date": date.today().isoformat(), "appCommit": commit or None, "languages": LANGS})
print(
    f"{len(species)} species in {len(packs)} packs, {len(styles)} styles, {len(props)} props, "
    f"{sum(len(v) for v in premade.values())} ready-made tanks, from app commit {commit or '?'}"
)
