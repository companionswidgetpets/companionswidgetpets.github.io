---
question: "Do the fish actually move in the widget?"
summary: "Yes. The fish swim continuously in the Home Screen widget, smoothly, without the app running, because their paths are built from the same kind of motion iOS uses to sweep a clock widget's hands."
category: widgets
order: 1
featured: true
updated: 2026-11-09
related: ["battery", "/blog/how-the-widget-animates/", "widget-not-updating", "/blog/aquarium-live-wallpaper-iphone/"]
---
Yes, and that is the whole point. Your fish glide back and forth, rise and fall, turn to face the way they are going and let out the odd bubble, right on the Home Screen, with the app closed.

Home Screen widgets normally can't animate: iOS draws them from a list of snapshots an app prepares in advance, and the app isn't allowed to run while the widget is on screen. The one thing iOS does animate on its own is the hands of a clock, which is how the Clock widget's seconds hand sweeps.

Companions describes every fish's swim as a handful of those turning hands: one for the glide across the tank, a slower one for the drift that carries it about, a quicker one for the little bob up and down. Added together, the hands trace exactly the path the fish swims in the app. Each fish's hands are set from its own identity, so a fish swims the same way in the app, in the widget and on your Apple Watch, and the fish you see in the widget are where they would be in the app at that moment.

The fish are drawn at the speed and size chosen in Settings, in whatever style the tank has. Two things are only in the app: the splash when a fish drops in, and feeding.

On the Mac, your iPhone's widgets are mirrored from the phone, so what you see depends on how often macOS asks for a fresh picture.
