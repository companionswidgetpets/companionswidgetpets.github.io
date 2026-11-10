---
title: "Clock, weather, steps and Moon phase in your fish tank widget"
description: "Put the time, the date, the weather, your step goal or tonight's Moon in a corner of your aquarium widget: the five complications, how to set them up and what they need."
published: 2026-11-09
category: guides
order: 6
tank: { style: pumpkin, size: medium, fish: [clownfish, moorish_idol, regal_tang], complication: time }
related: ["design-a-tank", "best-widget-apps-iphone", "iphone-widget-not-updating"]
---
Borrowed from watch faces, a complication is a small, useful thing in a corner of the glass: white text or a glyph over the water, with a soft shadow so it reads on any style. A tank has one, in the corner you choose, and it shows wherever the tank does: on the app's pages, in the widget, and in a tank you share. Complications come with **All Fish**, lifetime or monthly.

## The five

- **Time** shows the time of day in your device's own style, twelve- or twenty-four-hour.
- **Date** shows the weekday, the day and the month, in your region's order.
- **Weather** shows the conditions and the temperature where you are, under a symbol for the weather. Long condition names wrap onto two lines.
- **Step Goal** shows today's steps from Health, with a bar filling towards the goal you set.
- **Moon Phase** draws tonight's Moon, lit as it really is, and names it: new, waxing crescent, first quarter and so on through the month. It is drawn the right way up for your hemisphere.

## Setting one up

<ol class="steps">
<li>Open the tank: <strong>⋯ › Edit this tank</strong>, or from My Tanks.</li>
<li>Tap <strong>Complications</strong> under the actions.</li>
<li>Choose a kind. Its preview appears in the tank at the top of the sheet.</li>
<li>Choose a corner: top left, top right, bottom left or bottom right. Pick one the fish and props don't crowd.</li>
<li>Close the sheet, then <strong>Close</strong> the Edit Tank page. The tank saves itself.</li>
</ol>

To take a complication off, choose **None**.

## Permissions

Companions asks only when a complication needs something, and works without any of it.

- **Weather** needs your **location while you use the app**, asked for when you tap **Location** under Settings on the Complications sheet. Your approximate position goes to Apple's weather service for the forecast and nowhere else; the app itself keeps only which hemisphere you're in.
- **Step Goal** needs to **read your steps from Health**, asked for the first time you choose it. The app reads today's count only, never writes to Health, and keeps the count and your goal on your device so the widget can draw them.
- **Moon Phase** uses your location, if you've allowed it, only to tell which way up the Moon appears where you are. Without it, the Moon is drawn as seen from the northern hemisphere.

## How the weather stays fresh

A Home Screen widget can't fetch anything itself, so the app does the fetching: three times a day, around six in the morning, noon and six in the evening, it asks Apple Weather for the current conditions and the next thirty-six hours, hour by hour. The widget then follows that forecast through the day, changing its symbol and temperature on the hour, until the next fetch. The temperature unit follows your region, or set it under **Temperature** on the Complications sheet. Weather data is provided by Apple Weather; the legal attribution is linked beside the setting.

If the corner stays empty, see [why is the weather complication empty?](/help/weather-not-showing/)

## Where complications don't go

- The **Apple Watch** leaves the complication off; the watch has a clock of its own.
- A tank **shared** with someone who doesn't have All Fish arrives without its complication, with a note saying so.
- Each tank has one complication. For the time and the date together, use two tanks in two widgets.
