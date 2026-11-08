"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Activity,
  CalendarDays,
  Clock,
  Eye,
  Filter,
  Flame,
  LayoutGrid,
  MousePointer2,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ShowcaseView {
  id: string;
  label: string;
  shortLabel: string;
  title: string;
  description: string;
  bullets: {
    icon: typeof Activity;
    title: string;
    text: string;
  }[];
  mediaType: "dashboard" | "popover" | "taskbar";
}

const views: ShowcaseView[] = [
  {
    id: "dashboard",
    label: "Analytics Dashboard",
    shortLabel: "Dashboard",
    title: "Deep history, per-app breakdown, and forecast.",
    description:
      "Press Ctrl+Alt+D or click the taskbar readout to open the full dashboard. Inspect exactly where your gigabytes went across the last 30 to 58 days.",
    bullets: [
      {
        icon: Filter,
        title: "Per-app accounting",
        text: "Every app ranked by bytes with custom friendly aliases and 1-click row hiding.",
      },
      {
        icon: Flame,
        title: "Weekday × Hour heatmap",
        text: "Spot habitual download times and heavy evening usage at a single glance.",
      },
      {
        icon: TrendingUp,
        title: "Month-end forecast & cap",
        text: "Project where your month lands before it ends, with an optional calm quota indicator.",
      },
    ],
    mediaType: "dashboard",
  },
  {
    id: "taskbar",
    label: "Taskbar Readout",
    shortLabel: "Taskbar",
    title: "Live speed, always in your line of sight.",
    description:
      "A 210 × 34 DIP widget embedded right next to the Windows 11 system clock. Instant visual feedback whenever a download starts or your connection stalls.",
    bullets: [
      {
        icon: MousePointer2,
        title: "Pinned into Windows 11",
        text: "Sits seamlessly alongside your system tray and hides automatically in fullscreen apps.",
      },
      {
        icon: Activity,
        title: "Smart adaptive units",
        text: "Scales dynamically from B/s to Kbps, Mbps, and Gbps without flickering or shifting layout.",
      },
      {
        icon: Clock,
        title: "1 Hz native sampling",
        text: "Reads Windows adapter counters every second with virtually zero CPU footprint (<0.5%).",
      },
    ],
    mediaType: "taskbar",
  },
  {
    id: "popover",
    label: "Hover Summary",
    shortLabel: "Summary",
    title: "Today's numbers without opening a window.",
    description:
      "Hover over the taskbar readout to peek at your current day total, download/upload split, and the top three apps consuming your bandwidth.",
    bullets: [
      {
        icon: Eye,
        title: "Zero-click convenience",
        text: "Glance at your bandwidth usage anytime without interrupting your active workflow.",
      },
      {
        icon: LayoutGrid,
        title: "Top 3 bandwidth hogs",
        text: "Immediately spot if a browser tab, game update, or background sync is eating your data.",
      },
      {
        icon: Sparkles,
        title: "Vanishes on mouseout",
        text: "Lightweight overlay that never steals focus or creates an icon in your Alt+Tab switcher.",
      },
    ],
    mediaType: "popover",
  },
];

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div id="showcase" className="relative">
      <div id="screenshots" className="absolute -top-24" />
      <div id="features" className="absolute -top-24" />
      <div id="what" className="absolute -top-24" />

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full space-y-10"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-[clamp(2rem,3.8vw,3.2rem)] font-medium leading-[1.08] tracking-[-0.035em] text-ink text-balance">
              Three surfaces.
              <br />
              The complete picture.
            </h2>
            <p className="mt-3 max-w-[560px] text-[14.5px] leading-7 text-ink-muted">
              Live speed in your taskbar, quick glance on hover, and full analytics when you need the whole story.
            </p>
          </div>

          <div className="w-full overflow-x-auto no-scrollbar sm:w-auto">
            <TabsList className="group-data-horizontal/tabs:h-10 h-10 w-full min-w-max rounded-lg bg-muted p-1 sm:w-auto">
              {views.map((view) => (
                <TabsTrigger
                  key={view.id}
                  value={view.id}
                  className="px-3.5 py-1.5 text-[13px] font-medium sm:px-4 sm:text-[13.5px]"
                >
                  <span className="sm:hidden">{view.shortLabel}</span>
                  <span className="hidden sm:inline">{view.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        {views.map((view) => (
          <TabsContent
            key={view.id}
            value={view.id}
            className="mt-0 outline-none focus-visible:outline-none"
          >
            <div className="grid items-center gap-10 rounded-[24px] border border-border bg-card p-6 shadow-card lg:grid-cols-12 lg:gap-12 lg:p-8">
              {/* Left Column: Visual Media */}
              <div className="overflow-hidden rounded-[16px] border border-border bg-muted lg:col-span-7">
                {view.mediaType === "dashboard" ? (
                  <div className="relative">
                    <Image
                      src="/screenshots/dashboard-light.png"
                      alt="Data Monitor dashboard in light mode showing 30-day usage, daily bars, and per-app ranking."
                      width={1450}
                      height={998}
                      priority
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="theme-light-only h-auto w-full"
                    />
                    <Image
                      src="/screenshots/dashboard-dark.png"
                      alt="Data Monitor dashboard in dark mode showing 30-day total usage and hourly pattern heatmap."
                      width={1450}
                      height={998}
                      priority
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="theme-dark-only h-auto w-full"
                    />
                  </div>
                ) : null}

                {view.mediaType === "popover" ? (
                  <div className="flex min-h-[380px] flex-col items-center justify-center gap-6 bg-background px-6 py-10 md:min-h-[420px]">
                    <Image
                      src="/screenshots/popover-light.png"
                      alt="Data Monitor hover summary in light mode showing today's usage and top apps."
                      width={760}
                      height={524}
                      sizes="(max-width: 640px) 90vw, 360px"
                      className="theme-light-only h-auto w-[340px] max-w-full drop-shadow-xl"
                    />
                    <Image
                      src="/screenshots/popover-dark.png"
                      alt="Data Monitor hover summary in dark mode showing today's usage and top apps."
                      width={760}
                      height={524}
                      sizes="(max-width: 640px) 90vw, 360px"
                      className="theme-dark-only h-auto w-[340px] max-w-full drop-shadow-xl"
                    />
                    <div className="w-full max-w-[480px]">
                      <Image
                        src="/screenshots/taskbar-readout-cropped.png"
                        alt="Windows 11 taskbar showing Data Monitor readout"
                        width={920}
                        height={75}
                        sizes="(max-width: 640px) 90vw, 480px"
                        className="h-auto w-full rounded-[8px] border border-black/10 opacity-90 dark:border-white/10"
                      />
                    </div>
                  </div>
                ) : null}

                {view.mediaType === "taskbar" ? (
                  <div className="flex min-h-[340px] flex-col items-center justify-center bg-background px-6 py-12 md:min-h-[400px]">
                    <div className="w-full max-w-[680px]">
                      <Image
                        src="/screenshots/taskbar-readout-cropped.png"
                        alt="Windows 11 taskbar showing live 28.8 Kbps download and 8.4 Kbps upload speed."
                        width={920}
                        height={75}
                        sizes="(max-width: 768px) 95vw, 680px"
                        className="h-auto w-full rounded-[9px] border border-black/10 shadow-[0_16px_40px_rgba(0,0,0,0.18)] dark:border-white/10 dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                      />
                    </div>
                    <p className="mt-5 font-mono text-[11px] text-ink-muted">
                      210 × 34 DIP · Native DPI scaling · Pinned next to clock
                    </p>
                  </div>
                ) : null}
              </div>

              {/* Right Column: Punchy Benefits */}
              <div className="flex flex-col justify-center space-y-6 lg:col-span-5">
                <div>
                  <h3 className="font-display text-[22px] font-medium tracking-[-0.02em] text-ink">
                    {view.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                    {view.description}
                  </p>
                </div>

                <div className="space-y-4 border-t border-border pt-6">
                  {view.bullets.map((b) => {
                    const Icon = b.icon;
                    return (
                      <div key={b.title} className="flex items-start gap-3.5">
                        <span className="grid size-8 shrink-0 place-items-center rounded-[8px] bg-brand-50 text-brand dark:bg-brand/10">
                          <Icon className="size-4" strokeWidth={2} aria-hidden="true" />
                        </span>
                        <div>
                          <h4 className="text-[13.5px] font-semibold text-ink">
                            {b.title}
                          </h4>
                          <p className="mt-0.5 text-[12.5px] leading-5 text-ink-muted">
                            {b.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
