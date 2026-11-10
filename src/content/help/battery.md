---
question: "Does Companions drain my battery?"
summary: "No. The widget runs no code of its own: iOS draws the fish from a description the app hands it, the same way it sweeps a clock widget's hands. Nothing runs in the background."
category: widgets
order: 2
featured: true
updated: 2026-11-09
related: ["do-fish-move-in-widget", "/blog/how-the-widget-animates/"]
---
No more than any other widget. A Home Screen widget isn't allowed to run code while it is on screen, and Companions doesn't try to. The app hands iOS a description of the tank, including a small set of turning "clock hands" for each fish's path, and iOS draws it, in the same way it draws the sweeping seconds hand of a clock widget. There is no process of Companions' running behind your Home Screen, no timer waking it up and no network connection.

The app itself only does work while it is open: when you add, rename or remove a fish, change a tank's style or props, or adjust a setting, it saves the tank and asks iOS to redraw the widgets once.

Two complications fetch something: **Weather** asks Apple's weather service for a forecast three times a day, and **Step Goal** reads today's steps from Health. Both are brief, and both are only on if you chose them.

Like any animated content, the widget does ask the screen to redraw while it is visible, which is the same cost as watching a clock face. If you use StandBy overnight on an iPhone with an always-on display, iOS dims and slows the screen as it does for every widget.
