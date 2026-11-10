---
title: "iPhone widget not updating? 10 fixes that work"
description: "Widgets stuck on old information, blank or black? Why iPhone widgets stop updating, and ten things to try, in order, on iOS 26 and iOS 27."
published: 2026-11-09
category: troubleshooting
order: 1
tank: { style: minimal, size: small, fish: [puffer, sardine, tang] }
related: ["standby-not-working", "iphone-widget-sizes", "how-the-widget-animates"]
---
A widget that shows yesterday's weather, a calendar that missed your new meeting, a blank grey square where a photo should be: widgets go stale more often than they should. Most of the time the cause is simple, and so is the fix. Start at the top and work down.

## Why widgets don't update instantly

A widget isn't an app running on your Home Screen. The app prepares what the widget should show, and iOS draws it. To save battery, iOS gives every widget a budget: a widget you look at often gets roughly 40 to 70 updates a day, about one every 15 to 60 minutes. Updates while the app itself is open don't count against that budget.

So a widget a few minutes behind is normal. One that is hours behind, blank or wrong needs one of the fixes below.

## The 10 fixes

### 1. Open the app

Opening an app lets it refresh its widgets at once, outside the daily budget. If the widget catches up, the problem was just timing.

### 2. Give it a minute

After you change something in an app, iOS may take a moment to redraw. Go back to the Home Screen, wait a few seconds, and look again.

### 3. Check Low Power Mode

**Low Power Mode** turns off Background App Refresh, so apps that update their widgets in the background may fall behind until it's off. Look for a yellow battery icon, and turn it off in **Settings › Battery**.

### 4. Turn on Background App Refresh

In **Settings › General › Background App Refresh**, make sure the setting at the top isn't **Off** (choose **Wi-Fi** or **Wi-Fi & Mobile Data**), and that the app's own switch further down is on.

### 5. Allow location for weather widgets

Weather widgets need your location. In **Settings › Privacy & Security › Location Services**, check that Location Services is on and that the app is allowed to use your location.

### 6. Check your connection

Widgets that show news, weather or friends' photos need the internet. Try Wi-Fi off and on, or switch between Wi-Fi and mobile data.

### 7. Remove the widget and add it again

Touch and hold the widget, choose **Remove Widget**, then add it back: touch and hold the Home Screen, tap **Edit**, then **Add Widget**. This clears a stuck snapshot more often than anything else.

### 8. Restart your iPhone

iOS sometimes holds on to an old picture of a widget until it restarts. Turn the iPhone off and on again.

### 9. Update iOS and the app

**Settings › General › Software Update** for iOS, and the App Store for the app. Widget bugs are often fixed in updates.

### 10. Check it's the widget you think it is

In a **Smart Stack**, iOS rotates between widgets through the day, so the one you expected may simply be underneath. Touch and hold the stack and tap **Edit Stack** to see what's in it, and turn off **Smart Rotate** to keep one on top. And some apps keep a different set of content per widget: in Companions, for example, each widget size has its own tank, so the small widget shows the small tank, not the large one.

## Why is my widget black?

- **Dark icons.** If the Home Screen is set to **Dark** (touch and hold, **Edit**, **Customise**), many widgets turn dark to match. Set it back to **Default** if you'd rather have colour.
- **Clear or Tinted.** These looks draw widgets as glass, see-through or washed in a tint. Well-made widgets keep their pictures in colour on top.
- **Nothing loaded.** A black or grey square that should show something has failed to draw. Remove it and add it again (fix 7), then restart (fix 8).

## A widget that never needs updating to move

Most widgets are still pictures that change when they update. Companions is different: its fish swim continuously on your Home Screen using the same animation iOS uses to sweep a clock widget's hands, so the swimming never waits for an update and nothing runs in the background. The widget only needs updating when you change the tank, and the app asks iOS to redraw it as soon as you do. [How the fish really swim](/blog/how-the-widget-animates/) explains the trick, and our help page covers [what to do if the tank isn't showing your latest fish](/help/widget-not-updating/).

## Questions people ask

### Why is my widget not updating on iPhone?

Usually timing: iOS updates widgets on a budget, every 15 to 60 minutes or so for one you look at often. If it's hours behind, check Low Power Mode and Background App Refresh, open the app once, then remove and re-add the widget.

### How do I force a widget to refresh?

Open its app; that refreshes its widgets at once. If that doesn't work, remove the widget and add it again, or restart your iPhone.

### Does Low Power Mode stop widgets updating?

It turns off Background App Refresh, which many apps use to keep their widgets current, so widgets can fall behind while it's on.

### Why are my widgets blank after an update?

iOS sometimes keeps an empty snapshot after an update. Restart the iPhone, then remove and re-add any widget that's still blank.
