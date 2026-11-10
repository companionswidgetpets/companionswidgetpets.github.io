---
title: "Animierte iPhone-Widgets: So schwimmen die Fische wirklich"
description: "iPhone-Widgets können keinen Code ausführen. Wie schwimmen dann die Fische im Companions-Widget? Wie die Zeiger eines Uhr-Widgets – und deshalb kostet es keinen Akku."
---
Oft werden wir gefragt, ob sich die Fische im Widget wirklich bewegen oder ob das nur ein Video in der Vorschau im App Store ist. Sie bewegen sich wirklich, ununterbrochen und bei geschlossener App. Hier erklären wir in einfachen Worten, wie das geht.

## Widgets sind meistens Bilder

Ein Widget auf dem Home-Bildschirm von iOS ist keine laufende App. Die App bereitet eine **Timeline** vor: eine Liste von Bildern und den Zeitpunkten, zu denen sie erscheinen sollen, und iOS zeichnet jeweils das richtige. Dazwischen läuft nichts; die App darf es gar nicht. Deshalb kosten Widgets so wenig Akku, und deshalb stehen die meisten still.

## Das Einzige, was iOS selbst animiert

Eine einzige Art von Bewegung übernimmt iOS in einem Widget selbst: Es kann eine Ansicht gleichmäßig drehen, so wie der Sekundenzeiger eines Uhr-Widgets übers Zifferblatt kreist. Die App sagt: „Dieser Zeiger dreht sich einmal pro Minute, und zwar von hier aus“, und iOS lässt ihn flüssig weiterkreisen, solange das Widget zu sehen ist, ganz ohne die App.

## Ein Fisch besteht aus ein paar Uhrzeigern

Companions beschreibt das Schwimmen jedes Fisches als kleine Summe solcher Zeiger. In der App setzt sich die Bahn eines Fisches aus drei Hin-und-her-Bewegungen zusammen:

- einem **Gleiten** quer durch den größten Teil des Aquariums, hin und zurück in ein paar Dutzend Sekunden;
- einem langsameren **Treiben** über den Rest, das die Wendepunkte des Gleitens verschiebt, sodass der Fisch umherzieht, statt wie ein Pingpongball hin und her zu springen;
- einem kleinen **Auf und Ab**.

Jede dieser Bewegungen ist genau das, was ein kreisender Zeiger ergibt, wenn man nur eine seiner Koordinaten betrachtet. Das Widget richtet deshalb für jede einen Zeiger ein, mit den eigenen Geschwindigkeiten und Startwinkeln des Fisches, und lässt iOS sie drehen. Zusammengenommen setzen sie den Fisch genau dorthin, wo ihn das Aquarium in der App in diesem Moment zeigen würde.

Die Blickrichtung funktioniert genauso: Ein Fisch spiegelt sich, damit er in seine Bewegungsrichtung schaut, und im Widget zeigt eine Blende, die vom Zeiger des Gleitens gesteuert wird, zur richtigen Zeit das Bild, das nach links oder nach rechts schaut. Der Seestern, der von beiden Seiten gleich aussieht, neigt sich stattdessen ein wenig in seine Richtung.

## Was du davon hast

- **Kein Akkuverbrauch.** Hinter dem Home-Bildschirm läuft nichts von Companions. iOS zeichnet das Widget so, wie es eine Uhr zeichnet. Die App arbeitet nur, wenn du etwas änderst, und bittet iOS dann ein einziges Mal, neu zu zeichnen.
- **Überall dieselben Fische.** Geschwindigkeiten und Startwinkel eines Fisches ergeben sich aus seiner Kennung. Widget, Aquarium in der App und Apple Watch zeigen ihn deshalb zur selben Zeit an derselben Stelle. Öffnest du die App über das Widget, sind die Fische genau da, wo du sie verlassen hast.
- **Kein Netz, kein Warten auf Updates.** Das Aquarium wird aus einem Speicher gelesen, den sich App und Widget teilen. Das Widget ruft nichts ab (das Wetter für die Komplikation holt die App, dreimal am Tag).

## Was der App vorbehalten bleibt

Zwei Dinge brauchen Code, der läuft, während du zusiehst: der Platsch, wenn ein neuer Fisch ins Wasser fällt, und das Füttern, bei dem die Fische den Flocken hinterherjagen. Beides gibt es nur in der App. Und auf dem Mac werden iPhone-Widgets als Bilder vom iPhone gespiegelt; wie flüssig sich die Fische dort bewegen, entscheidet also macOS.

## Für Neugierige

Nach derselben Idee sind in der App auch das Eintauchen eines neuen Fisches, die Bläschen und das Füttern gebaut: Jede Position ist eine reine Funktion der Zeit und einiger weniger Zahlen, die zu Beginn festgelegt werden. Das Aquarium zeichnet sich also einfach Bild für Bild neu, ohne sich irgendetwas merken zu müssen. Genau deshalb sind sich auch der Werbefilm, das Widget und die App auf die Sekunde einig, wo jeder Fisch gerade ist.
