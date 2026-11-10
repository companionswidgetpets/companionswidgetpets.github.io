---
question: "Why does the widget look lighter than the tank in the app?"
summary: "iOS lays a translucent white highlight and a bright rim over every Home Screen widget. Companions draws its widget slightly darker in advance so that, once iOS adds its glass, it matches the app."
category: troubleshooting
order: 3
updated: 2026-11-09
related: ["change-tank-style", "/styles/", "/blog/aesthetic-iphone-home-screen-ideas/"]
---
Every widget on an iOS 26 Home Screen is shown through the system's glass: a wash of white that is strongest at the top and fades towards the bottom, plus a bright specular rim along the edges. It is what makes widgets look like they sit on the wallpaper rather than being cut out of it, and no app can turn it off.

Companions measures that wash and draws its widget darker by the same amount, so that once iOS adds its glass the water lands on the colours the app shows. In practice the widget and the app's tank should look the same at a glance. Two things are impossible to cancel:

- **The rim.** The bright edge is drawn after the widget, so it is always there. The app's own tank draws a similar, thinner rim, which is why the two still read as the same glass.
- **Very dark water.** Nothing can be drawn darker than black, so the darkest styles come out a touch lighter at the top of the widget than in the app. The **Dark** style is designed with this in mind: its surface sits a hair above the wash so the widget and the app can agree, and it is as black as the Home Screen allows.

If the widget looks very different, not just lighter, check that it is showing the same tank: each widget size is its own tank, with its own style.
