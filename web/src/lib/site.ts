const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://data-monitor.avesh.tech"
).replace(/\/+$/, "");

export const site = {
  name: "Data Monitor",
  shortName: "Data Monitor",
  version: "0.1",
  url: siteUrl,
  title:
    "Data Monitor — network speed & per-app data usage for Windows 11",
  description:
    "A local-only Windows 11 network monitor. Live speed in your taskbar, plus per-app data usage, daily history and a monthly forecast. No account, no telemetry.",
  longDescription:
    "Data Monitor is a local-only network monitor for Windows 11. It pins live download and upload speed into the taskbar and opens a dashboard that shows where the data went: daily usage, a per-app ranking, a weekday × hour heatmap, a month-end forecast and an optional monthly cap.",
  author: {
    name: "Avesh Pathak",
    portfolio: "https://avesh.tech",
    portfolioLabel: "avesh.tech",
    linkedin: "https://www.linkedin.com/in/avesh-pathak",
    linkedinLabel: "avesh-pathak",
    github: "https://github.com/avesh-pathak/datamonitor",
  },
  locale: "en_US",
  keywords: [
    "Windows 11 network monitor",
    "taskbar network speed",
    "per-app data usage Windows",
    "data usage monitor",
    "network speed widget",
    "local-only network monitor",
    "Windows data usage dashboard",
    "Electron taskbar widget",
    "upload download speed taskbar",
    "monthly data cap tracker",
    "hourly network usage heatmap",
    "no telemetry network monitor",
  ],
} as const;

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Architecture", href: "#architecture" },
  { label: "Stack", href: "#stack" },
  { label: "FAQ", href: "#faq" },
] as const;

export const footerColumns = [
  {
    label: "Product",
    links: [
      { label: "Overview", href: "#what" },
      { label: "Screenshots", href: "#screenshots" },
      { label: "Features", href: "#features" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    label: "Project",
    links: [
      { label: "Architecture", href: "#architecture" },
      { label: "Privacy", href: "#privacy" },
      { label: "Tech stack", href: "#stack" },
      { label: "Install", href: "#install" },
    ],
  },
  {
    label: "Connect",
    links: [
      { label: "GitHub", href: site.author.github },
      { label: "LinkedIn", href: site.author.linkedin },
      { label: "avesh.tech", href: site.author.portfolio },
    ],
  },
] as const;

export const heroSpecs = [
  { label: "Runs on", value: "Windows 11" },
  { label: "Runtime", value: "Electron 45" },
  { label: "Sampling", value: "1 Hz" },
  { label: "History", value: "58 days" },
  { label: "Network calls", value: "Zero" },
] as const;

export const heroProof = [
  "No account",
  "No telemetry",
  "No admin required",
  "Starts at login",
] as const;
