export type Feature = {
  id: string;
  icon:
    | "apps"
    | "heatmap"
    | "forecast"
    | "search"
    | "cap"
    | "theme"
    | "keyboard";
  title: string;
  body: string;
  span: "half" | "wide";
  note?: string;
};

export const features: Feature[] = [
  {
    id: "apps",
    icon: "apps",
    title: "Per-app, not per-guess",
    body: "Every app ranked by bytes across the visible range — with an explicit unattributed row instead of spreading the remainder across apps. Double-click to rename, × to hide.",
    span: "wide",
    note: "Brave · OpenCode · unattributed · python",
  },
  {
    id: "heatmap",
    icon: "heatmap",
    title: "The hourly pattern",
    body: "A weekday × hour heatmap makes “I burn data every evening at nine” visible at a glance.",
    span: "half",
    note: "busiest Thu 20:00",
  },
  {
    id: "forecast",
    icon: "forecast",
    title: "A forecast, not a surprise",
    body: "See where the month lands before it does: “at this rate: 672 GB by 30 Nov.”",
    span: "half",
  },
  {
    id: "search",
    icon: "search",
    title: "Search, rename, hide",
    body: "Filter the app list, alias a device path to a name you recognise, and hide the rows you never want to see.",
    span: "half",
  },
  {
    id: "cap",
    icon: "cap",
    title: "A monthly cap, calmly",
    body: "An optional progress bar against your own limit. No alerts, no popups — just a line you can read.",
    span: "half",
  },
  {
    id: "theme",
    icon: "theme",
    title: "Dark and light, both first class",
    body: "The readout, the dashboard and the hover summary switch together. The choice survives restarts.",
    span: "wide",
  },
  {
    id: "keyboard",
    icon: "keyboard",
    title: "Out of the way, until needed",
    body: "Ctrl+Alt+D opens the dashboard from anywhere. The tray carries theme, pause and quit. It never steals focus.",
    span: "half",
    note: "Ctrl + Alt + D",
  },
];

export type Shot = {
  id: string;
  label: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  panel: "dark" | "light" | "stage";
  display: "dashboard" | "taskbar" | "popover";
};

export const shots: Shot[] = [
  {
    id: "dashboard-dark",
    label: "Dashboard · dark",
    src: "/screenshots/dashboard-dark.png",
    width: 1450,
    height: 998,
    alt: "Data Monitor dashboard in dark mode: 672.83 GB over the last 30 days, a daily usage bar chart, apps in range ranked by bytes, an hourly pattern heatmap and busiest-day statistics.",
    caption:
      "Thirty days at a glance: daily bars, the per-app ranking, the weekday × hour heatmap and the busiest day, average and peak hour in one window.",
    panel: "dark",
    display: "dashboard",
  },
  {
    id: "dashboard-light",
    label: "Dashboard · light",
    src: "/screenshots/dashboard-light.png",
    width: 1450,
    height: 998,
    alt: "The same Data Monitor dashboard in light mode, with white cards, blue bars and the same per-app and hourly views.",
    caption:
      "The same data in light mode. Both themes are first class, and the tray toggle keeps every surface in step.",
    panel: "light",
    display: "dashboard",
  },
  {
    id: "drilldown",
    label: "App drill-down",
    src: "/screenshots/app-drilldown-dark.png",
    width: 1450,
    height: 998,
    alt: "An app drill-down modal in Data Monitor showing a daily usage chart for Brave across the last 30 days.",
    caption:
      "Click any app for its own daily chart. The drill-down stays inside the range that is on screen, so the numbers always agree.",
    panel: "dark",
    display: "dashboard",
  },
  {
    id: "popover",
    label: "Hover summary",
    src: "/screenshots/popover-dark.png",
    width: 760,
    height: 524,
    alt: "The Data Monitor hover popover: today's total of 6.38 GB, a down/up split and the top three apps, Brave, Chrome and OpenCode.",
    caption:
      "Hover the taskbar readout: today's total, the down/up split and the top three apps. No click, no window.",
    panel: "stage",
    display: "popover",
  },
  {
    id: "taskbar",
    label: "Taskbar readout",
    src: "/screenshots/taskbar-readout-cropped.png",
    width: 920,
    height: 75,
    alt: "A Windows 11 taskbar with the Data Monitor readout showing 28.8 Kbps down and 8.4 Kbps up, next to the system tray and clock.",
    caption:
      "The whole point: a 210 × 34 DIP readout pinned into the taskbar. Adaptive units, smoothed values, no window to find.",
    panel: "stage",
    display: "taskbar",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Is anything sent off my machine?",
    answer:
      "No. Data Monitor makes no network calls of any kind: no account, no sync, no analytics and no crash reporting. It reads adapter counters and Windows' own usage store, and writes one settings file under %APPDATA%\\taskbar-data-monitor.",
  },
  {
    question: "The readout isn't visible. What happened?",
    answer:
      "Your taskbar is probably auto-hiding, or a fullscreen app owns the display. The widget deliberately hides with the bar rather than floating over your work. Move the mouse to the bottom edge, or leave the fullscreen app, and it comes back.",
  },
  {
    question: "Why don't the numbers match Settings → Data usage exactly?",
    answer:
      "They measure different layers. The dashboard total comes from the adapter's byte counter; Settings shows Windows' own estimate. Agreement within a few percent is expected. The Apps view is explicitly not the same number as the total, and it says so.",
  },
  {
    question: "What does “unattributed” mean?",
    answer:
      "Some traffic has no process behind it: kernel, driver-level, or short-lived processes that exited before they could be named. It is shown as its own row rather than quietly spread across your apps.",
  },
  {
    question: "Do per-app numbers update live?",
    answer:
      "Not yet. Per-app figures are Windows' daily aggregates. Live per-app attribution needs the elevated ETW collector on the roadmap. Live total speed is still sampled once a second.",
  },
  {
    question: "Do I need admin rights, or an installer?",
    answer:
      "No admin rights. The app is not packaged as an installer yet: run npm install and npm start from the app folder. Uninstall is quitting from the tray, deleting the Startup shortcut and removing the folder — nothing is written to the registry.",
  },
  {
    question: "Does it work on Windows 10 or a second monitor?",
    answer:
      "Windows 11 is the tested target. The readout is placed on the primary display only today; multi-monitor placement is a known gap, tracked in the README's status table.",
  },
];

export const techStack = [
  {
    name: "Electron 45",
    icon: "devicon-electron-original colored",
    role: "Window lifecycle, geometry, theme and IPC.",
    tag: "main process",
  },
  {
    name: "Node.js 18+",
    icon: "devicon-nodejs-plain colored",
    role: "Runs the app and the single preload bridge.",
    tag: "runtime",
  },
  {
    name: "PowerShell 5.1",
    icon: "devicon-powershell-plain colored",
    role: "Adapter counters and WinRT usage queries.",
    tag: "sampler + usage",
  },
  {
    name: "Windows 11 · WinRT",
    icon: "devicon-windows11-original colored",
    role: "The same usage store behind Settings → Data usage.",
    tag: "history",
  },
  {
    name: "koffi · C++",
    icon: "devicon-cplusplus-plain colored",
    role: "Win32 calls for Shell_TrayWnd and fullscreen state.",
    tag: "native",
  },
  {
    name: "HTML · CSS · JS",
    icon: "devicon-javascript-plain colored",
    role: "Three renderers, no bundler. The widget stays tiny.",
    tag: "renderers",
  },
] as const;

export const pageStack = [
  { name: "Next.js 16", icon: "devicon-nextjs-plain colored" },
  { name: "React 19", icon: "devicon-react-original colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "Tailwind CSS 4", icon: "devicon-tailwindcss-original colored" },
] as const;

export const requirements = [
  "Windows 11",
  "Node.js 18+",
  "PowerShell 5.1",
  "Any active adapter",
] as const;

export const installSteps = [
  {
    number: "01",
    title: "Run it",
    body: "Clone the folder, run the three commands, and the readout appears in the taskbar immediately.",
  },
  {
    number: "02",
    title: "Start at login",
    body: "Point a Startup shortcut at Electron with the app folder as its argument. Full steps are in the README.",
  },
  {
    number: "03",
    title: "Uninstall cleanly",
    body: "Quit from the tray, delete the shortcut and the folder. Nothing is written to the registry.",
  },
] as const;
