import {
  LayoutDashboard,
  MessageSquare,
  MousePointer2,
  PanelTop,
} from "lucide-react";

import { Reveal } from "@/components/marketing/reveal";
import { cn } from "@/lib/utils";

function WidgetVisual() {
  return (
    <div className="flex h-[176px] flex-col justify-center rounded-[10px] border border-border bg-muted px-4">
      <div className="rounded-[9px] border border-white/10 bg-[#1b1b1f] px-3 py-2.5 shadow-[0_12px_30px_rgba(6,22,46,0.18)]">
        <div className="flex items-center gap-2.5">
          <span aria-hidden="true" className="grid size-3 grid-cols-2 gap-[1.5px] text-white/60">
            <span className="bg-current" />
            <span className="bg-current" />
            <span className="bg-current" />
            <span className="bg-current" />
          </span>
          <span className="h-3.5 w-px bg-white/10" />
          <span className="inline-flex items-baseline gap-1.5 text-[11.5px]">
            <span aria-hidden="true" className="text-[#7cc4ff]">↓</span>
            <span className="font-semibold tabular-nums text-white">28.8</span>
            <span className="text-[8px] uppercase text-white/40">Kbps</span>
            <span aria-hidden="true" className="ml-0.5 text-[#7fd6a4]">↑</span>
            <span className="font-semibold tabular-nums text-white">8.4</span>
            <span className="text-[8px] uppercase text-white/40">Kbps</span>
          </span>
          <span className="ml-auto hidden items-center gap-1.5 text-[9px] text-white/35 min-[360px]:flex">
            <span className="size-1 rounded-full bg-[#7fd6a4]" />
            7:12 PM
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[10px] text-ink-faint">
        <MousePointer2 className="size-3" aria-hidden="true" />
        pinned in the Windows 11 taskbar
      </div>
    </div>
  );
}

function DashboardVisual() {
  const bars = [28, 44, 32, 52, 38, 66, 40, 74, 46, 58, 70, 88];
  return (
    <div className="flex h-[176px] flex-col rounded-[10px] border border-border bg-muted p-3.5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-ink-faint">
          Last 30 days
        </span>
        <span className="flex gap-1" aria-hidden="true">
          <span className="h-1 w-4 rounded-full bg-black/10" />
          <span className="h-1 w-4 rounded-full bg-black/10" />
        </span>
      </div>
      <div className="mt-1 text-[22px] font-semibold tracking-[-0.03em] text-ink">
        672.83 GB
      </div>
      <div className="mt-auto flex items-end gap-1.5 pt-2" aria-hidden="true">
        {bars.map((height, index) => (
          <span
            key={index}
            className={cn(
              "w-full rounded-[2px] bg-brand",
              index === bars.length - 1 ? "opacity-100" : "opacity-45"
            )}
            style={{ height: `${height * 0.5}px` }}
          />
        ))}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2 border-t border-black/[0.06] pt-2 text-[8.5px]">
        <span className="flex justify-between text-ink-soft">
          <span>Brave</span>
          <span className="tabular-nums text-ink-faint">511.97 GB</span>
        </span>
        <span className="flex justify-between text-ink-soft">
          <span>OpenCode</span>
          <span className="tabular-nums text-ink-faint">84.92 GB</span>
        </span>
      </div>
    </div>
  );
}

function PopoverVisual() {
  return (
    <div className="relative flex h-[176px] items-center justify-center overflow-hidden rounded-[10px] border border-border bg-muted pb-8">
      <div className="absolute inset-x-4 bottom-2.5 h-5 rounded-[5px] border-t border-white/[0.06] bg-[#232329]" />
      <div className="relative w-[200px] rounded-[10px] border border-white/10 bg-[#141419] p-3 text-white shadow-[0_18px_40px_rgba(10,20,40,0.28)]">
        <div className="font-mono text-[7px] uppercase tracking-[0.14em] text-white/40">
          Today
        </div>
        <div className="mt-0.5 text-[18px] font-semibold leading-none tracking-[-0.03em]">
          6.38 GB
        </div>
        <div className="mt-1 text-[8px] text-white/40">
          6.05 GB down · 326.2 MB up
        </div>
        <div className="mt-2 grid gap-1 border-t border-white/10 pt-2 text-[8.5px]">
          <span className="flex justify-between">
            <span className="text-white/75">Brave</span>
            <span className="tabular-nums text-white/40">5.10 GB</span>
          </span>
          <span className="flex justify-between">
            <span className="text-white/75">Chrome</span>
            <span className="tabular-nums text-white/40">757.6 MB</span>
          </span>
        </div>
      </div>
    </div>
  );
}

const surfaces = [
  {
    icon: PanelTop,
    kicker: "Taskbar",
    title: "The readout",
    body: "Live down and up speed, pinned where you already look. Adaptive units, smoothed over two samples, hidden over fullscreen apps.",
    visual: <WidgetVisual />,
  },
  {
    icon: LayoutDashboard,
    kicker: "One click",
    title: "The dashboard",
    body: "Four ranges, a daily chart, a per-app ranking, an hourly heatmap and a forecast. The whole month in one window.",
    visual: <DashboardVisual />,
  },
  {
    icon: MessageSquare,
    kicker: "No click",
    title: "The hover",
    body: "Today's total, the down/up split and the top three apps — the “should I care?” answer without opening anything.",
    visual: <PopoverVisual />,
  },
];

export function Surfaces() {
  return (
    <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {surfaces.map((surface, index) => {
        const Icon = surface.icon;
        return (
          <Reveal
            key={surface.title}
            delay={index * 70}
            className="group flex flex-col rounded-[16px] border border-border bg-card p-3.5 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-ring hover:shadow-hover md:p-4"
          >
            {surface.visual}
            <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
              <div className="flex items-center gap-2">
                <span className="grid size-7 place-items-center rounded-[7px] bg-brand-50 text-brand">
                  <Icon className="size-3.5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                  {surface.kicker}
                </span>
              </div>
              <h3 className="mt-3 text-[19px] font-medium tracking-[-0.02em] text-ink">
                {surface.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-[1.65] text-ink-muted">
                {surface.body}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
