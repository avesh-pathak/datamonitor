"use client";

import { useState } from "react";
import {
  ChevronDown,
  Cpu,
  FileCode2,
  LockKeyhole,
  Network,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { cn } from "@/lib/utils";

const metrics = [
  {
    value: "0",
    label: "Network calls",
    description: "Zero external traffic. No telemetry, no crash reporter, no cloud sync, no tracking.",
    icon: Network,
  },
  {
    value: "1",
    label: "Settings file",
    description: "Writes solely to %APPDATA%\\taskbar-data-monitor\\settings.json. No registry modifications.",
    icon: FileCode2,
  },
  {
    value: "<0.5%",
    label: "CPU usage",
    description: "Extremely lightweight 1 Hz sampling via native OS counters with automatic pause on fullscreen.",
    icon: Cpu,
  },
];

const technicalSteps = [
  {
    title: "1. Sampling live adapter speed",
    detail: "Queries Get-NetAdapterStatistics once every second. Computes the delta across 1000ms intervals.",
    code: "Get-NetAdapterStatistics -Name <active>",
  },
  {
    title: "2. Querying historical usage",
    detail: "Reads Windows' built-in usage store behind Settings → Data usage for per-app totals.",
    code: "[Windows.Networking.Connectivity.NetworkInformation]",
  },
  {
    title: "3. Taskbar embedding",
    detail: "Inspects Shell_TrayWnd to pin the frameless 210 × 34 DIP window directly next to the system clock.",
    code: "FindWindowExW(Shell_TrayWnd, ..., TrayNotifyWnd)",
  },
];

export function PrivacyAndArchitecture() {
  const [techDetailsOpen, setTechDetailsOpen] = useState(false);

  return (
    <div id="privacy" className="relative space-y-12">
      <div id="architecture" className="absolute -top-24" />

      {/* Main Privacy Value Proposition */}
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            100% Local · Zero Telemetry
          </div>
          <h2 className="mt-4 font-display text-[clamp(2rem,3.8vw,3.2rem)] font-medium leading-[1.05] tracking-[-0.035em] text-ink">
            Your data never leaves your computer.
          </h2>
          <p className="mt-4 text-[14.5px] leading-7 text-ink-muted">
            Data Monitor is local-only by architecture. There is no account to create, no sync server to trust, and no analytics SDK installed. It reads what Windows already measures.
          </p>
        </div>

        {/* 3 Bold Metric Cards */}
        <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="flex flex-col justify-between rounded-[18px] border border-border bg-card p-5 shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[32px] font-semibold tracking-[-0.03em] text-brand">
                      {m.value}
                    </span>
                    <Icon className="size-4 text-ink-muted" aria-hidden="true" />
                  </div>
                  <h3 className="mt-2 text-[13px] font-semibold uppercase tracking-[0.06em] text-ink">
                    {m.label}
                  </h3>
                </div>
                <p className="mt-3 text-[12px] leading-5 text-ink-muted">
                  {m.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Collapsible Architecture Specs for Engineers */}
      <div className="rounded-[18px] border border-border bg-card/60 p-5 shadow-sm">
        <button
          type="button"
          onClick={() => setTechDetailsOpen(!techDetailsOpen)}
          className="flex w-full items-center justify-between text-left"
          aria-expanded={techDetailsOpen}
        >
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-[8px] border border-border bg-muted text-ink">
              <Terminal className="size-4" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-[14px] font-medium text-ink">
                Technical Architecture & Win32 Integration
              </h3>
              <p className="text-[12px] text-ink-muted">
                How Electron, WinRT, and native Windows APIs coordinate under the hood.
              </p>
            </div>
          </div>
          <ChevronDown
            className={cn(
              "size-4 text-ink-muted transition-transform duration-200",
              techDetailsOpen && "rotate-180"
            )}
            aria-hidden="true"
          />
        </button>

        {techDetailsOpen ? (
          <div className="mt-6 space-y-4 border-t border-border pt-6">
            <div className="grid gap-4 md:grid-cols-3">
              {technicalSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-[12px] border border-border bg-muted/60 p-4"
                >
                  <h4 className="text-[13px] font-medium text-ink">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-[11.5px] leading-5 text-ink-muted">
                    {step.detail}
                  </p>
                  <code className="mt-2 block truncate rounded border border-border bg-background px-2 py-1 font-mono text-[10px] text-brand">
                    {step.code}
                  </code>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-[11px] text-ink-muted">
              <span>Stack: Electron 45 · Node.js 18+ · PowerShell 5.1 · Koffi C++</span>
              <a
                href="https://github.com/avesh-pathak/datamonitor"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-brand hover:underline"
              >
                Inspect source on GitHub →
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

