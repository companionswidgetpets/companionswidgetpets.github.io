---
title: "Animated widgets on iPhone: how the fish really swim"
description: "iPhone widgets can't run code, so how do the fish in the Companions widget swim? The same way a clock widget's hands sweep, which is also why it costs no battery."
published: 2026-11-09
category: guides
order: 9
tank: { style: reed, size: medium, fish: [trout, catfish, minnow] }
related: ["iphone-widget-not-updating", "best-aquarium-widget-apps-iphone", "add-the-widget"]
---
People often ask whether the fish in the widget really move, or whether that is a video in the App Store preview. They really move, continuously, with the app closed. Here is how, in plain words.

## Widgets are pictures, mostly

An iOS Home Screen widget isn't a running app. The app prepares a **timeline**: a list of pictures and the times to show them, and iOS draws the right one. Between those times nothing runs; the app isn't allowed to. That is why widgets cost so little battery, and why most of them are still.

## The one thing iOS animates itself

There is one kind of motion iOS performs on its own inside a widget: it can turn a view at a steady rate, the way a clock widget's seconds hand sweeps round the face. The app says "this hand turns once a minute, starting from here", and iOS keeps it turning, smoothly, for as long as the widget is on screen, without the app.

## A fish is a few clock hands

Companions describes every fish's swim as a small sum of such hands. In the app, a fish's path is built from three to-and-fro motions:

- a **glide** across most of the tank, there and back in a few dozen seconds;
- a slower **drift** across the rest, which carries the glide's turning points about so the fish wanders rather than ping-pongs;
- a little **bob** up and down.

Each of those is exactly what a turning hand gives you if you watch only one of its coordinates. So the widget sets up a hand for each, at the fish's own rates and starting angles, and lets iOS turn them. Added together, they put the fish where the app's own tank would put it at that moment.

Facing is handled the same way: a fish mirrors to face the way it is moving, and in the widget a shutter driven by the glide hand shows the left-facing or right-facing picture at the right times. The starfish, which looks the same either way round, leans a little with its way instead.

## What this gives you

- **No battery.** Nothing of Companions runs behind the Home Screen. iOS draws the widget as it draws a clock. The app does its work only when you change something, and then asks iOS to redraw once.
- **The same fish everywhere.** A fish's rates and starting angles come from its identity, so the widget, the app's tank and the Apple Watch all show it in the same place at the same time. Open the app from the widget and the fish are where you left them.
- **No network, no updates to wait for.** The tank is read from storage the app and the widget share. The widget doesn't fetch anything (the weather complication is fetched by the app, three times a day).

## What stays in the app

Two things need code to run while you watch: the splash when a new fish drops into the water, and feeding, where the fish chase the flakes. Both happen in the app only. And on the Mac, iPhone widgets are mirrored as pictures from the phone, so how smoothly the fish move there is up to macOS.

## For the curious

The same idea is how the drop of a new fish, the bubbles and the feeding are built in the app: every position is a pure function of time and a few numbers fixed at the start, so the tank just redraws each frame with nothing to keep track of. It is also what lets the promo film, the widget and the app agree on where every fish is to the second.
