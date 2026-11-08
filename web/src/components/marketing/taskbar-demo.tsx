"use client";

import { useState } from "react";
import {
  BatteryFull,
  ChevronUp,
  MousePointer2,
  Search,
  Volume2,
  Wifi,
} from "lucide-react";

import { cn } from "@/lib/utils";

const topApps = [
  { name: "Brave", value: "5.10 GB" },
  { name: "Chrome", value: "757.6 MB" },
  { name: "OpenCode", value: "280.5 MB" },
];

function WindowsGlyph() {
  return (
    <span
      aria-hidden="true"
      className="grid size-3.5 grid-cols-2 gap-[2px] text-white/80"
    >
      <span className="bg-current" />
      <span className="bg-current" />
      <span className="bg-current" />
      <span className="bg-current" />
    </span>
  );
}

export function TaskbarDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-20 mx-auto mt-8 w-full max-w-[900px]">
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div
          id="taskbar-popover"
          role="dialog"
          aria-label="Today's usage, hover preview"
          aria-hidden={!open}
          className={cn(
            "absolute bottom-[calc(100%+12px)] left-1/2 z-30 w-[312px] max-w-[calc(100vw-48px)] -translate-x-1/2 rounded-[14px] border border-white/10 bg-[#141419]/[0.98] p-4 text-white shadow-[0_18px_44px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-150 md:left-[32%]",
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-1.5 opacity-0"
          )}
        >
          <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">
            Today
          </div>
          <div className="mt-1 text-[28px] font-semibold leading-none tracking-[-0.035em] tabular-nums">
            6.38 GB
          </div>
          <div className="mt-1.5 text-[11px] tabular-nums text-white/45">
            6.05 GB down · 326.2 MB up
          </div>
          <div className="mt-3 grid gap-1.5 border-t border-white/10 pt-3 text-[12px]">
            {topApps.map((app) => (
              <div key={app.name} className="flex items-baseline justify-between gap-4">
                <span className="truncate text-white/85">{app.name}</span>
                <span className="shrink-0 tabular-nums text-white/45">
                  {app.value}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 text-[10px] text-white/30">
            Click the readout for the full dashboard
          </div>
          <span
            aria-hidden="true"
            className="absolute -bottom-[5px] left-1/2 size-2.5 -translate-x-1/2 rotate-45 border-b border-r border-white/10 bg-[#141419]"
          />
        </div>

        <div className="flex h-[58px] items-center gap-2 rounded-[14px] border border-white/10 bg-[#1b1b1f] px-2.5 shadow-[0_24px_60px_-18px_rgba(5,20,45,0.55)] sm:px-3">
          <span className="grid size-8 shrink-0 place-items-center rounded-[6px] bg-white/[0.06]">
            <WindowsGlyph />
          </span>
          <span className="hidden size-8 shrink-0 place-items-center rounded-[6px] bg-white/[0.06] text-white/55 sm:grid">
            <Search className="size-3.5" aria-hidden="true" />
          </span>
          <span className="hidden h-5 w-px bg-white/10 sm:block" />

          <button
            type="button"
            aria-expanded={open}
            aria-controls="taskbar-popover"
            aria-label="Preview the hover summary for today's usage"
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            onClick={() => setOpen((value) => !value)}
            onKeyDown={(event) => {
              if (event.key === "Escape") setOpen(false);
            }}
            className="ml-0.5 inline-flex h-11 shrink-0 items-center gap-1.5 rounded-[8px] border border-white/10 bg-white/[0.06] px-2.5 text-[13px] outline-none sm:h-9 transition-colors hover:border-white/20 hover:bg-white/[0.1] focus-visible:border-white/40 focus-visible:ring-2 focus-visible:ring-white/30"
          >
            <span aria-hidden="true" className="text-[13px] leading-none text-[#7cc4ff]">
              ↓
            </span>
            <span className="font-semibold tabular-nums text-white">28.8</span>
            <span className="text-[9px] uppercase tracking-[0.02em] text-white/45">
              Kbps
            </span>
            <span aria-hidden="true" className="ml-0.5 text-[13px] leading-none text-[#7fd6a4]">
              ↑
            </span>
            <span className="font-semibold tabular-nums text-white">8.4</span>
            <span className="text-[9px] uppercase tracking-[0.02em] text-white/45">
              Kbps
            </span>
          </button>

          <div className="ml-auto flex shrink-0 items-center gap-2 text-white/55">
            <Wifi className="hidden size-3.5 sm:block" aria-hidden="true" />
            <Volume2 className="hidden size-3.5 sm:block" aria-hidden="true" />
            <BatteryFull className="hidden size-4 sm:block" aria-hidden="true" />
            <span className="ml-1 hidden text-right text-[10.5px] leading-[1.25] tabular-nums text-white/80 min-[360px]:block">
              7:12 PM
              <br />
              <span className="text-[9.5px] text-white/40">10/29/2026</span>
            </span>
            <ChevronUp className="size-3 text-white/30" aria-hidden="true" />
          </div>
        </div>
      </div>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-[12px] text-ink-muted">
        <MousePointer2 className="size-3.5" aria-hidden="true" />
        Hover the readout. That&apos;s the whole interaction.
      </p>
    </div>
  );
}
