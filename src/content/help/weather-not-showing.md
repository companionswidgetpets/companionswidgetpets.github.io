---
question: "Why is the weather complication empty?"
summary: "The weather needs your location once: open the Complications sheet and tap Location under Settings, then allow it. Give it a moment to fetch the forecast. Indoors with no fix, or with Location Services off, it stays blank."
category: troubleshooting
order: 2
updated: 2026-11-09
related: ["what-are-complications", "/guides/complications/"]
---
The Weather complication asks Apple's weather service for the forecast where you are, so it needs two things: permission to know your location, and a moment to fetch.

<ol class="steps">
<li>Open the tank's <strong>Edit Tank</strong> page, then <strong>Complications</strong>.</li>
<li>Under <strong>Settings</strong> on that sheet, tap <strong>Location</strong> and allow Companions to use your location while you use the app. The app keeps only which hemisphere you are in; the forecast request carries your approximate position and nothing else.</li>
<li>Wait a few seconds. The sheet's preview shows the weather as soon as it arrives, and the widget follows.</li>
</ol>

If it stays empty:

- Check **Settings › Privacy &amp; Security › Location Services** on your iPhone: both the main switch and Companions' own must be on.
- Make sure the iPhone has a connection; the forecast comes from the internet, three times a day.
- A brand-new tank from Explore or a shared code reads the weather the first time you choose it.

The temperature unit follows your region, or set it yourself under **Temperature** on the same sheet. Weather data is provided by Apple Weather; the attribution and legal notice are linked beside the setting.
