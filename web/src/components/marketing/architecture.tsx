import {
  AppWindow,
  Cpu,
  Info,
  Layers,
  MousePointerClick,
  SquareTerminal,
} from "lucide-react";

import { Reveal } from "@/components/marketing/reveal";

function Step({
  index,
  icon: Icon,
  title,
  badge,
  body,
  code,
  last = false,
}: {
  index: string;
  icon: typeof AppWindow;
  title: string;
  badge: string;
  body: string;
  code?: string;
  last?: boolean;
}) {
  return (
    <li className="relative pl-12 pb-7 last:pb-0">
      <span className="absolute left-0 top-0 grid size-9 place-items-center rounded-[9px] border border-white/10 bg-white/[0.05] text-[#8fc6ff]">
        <Icon className="size-4" strokeWidth={1.6} aria-hidden="true" />
      </span>
      {!last ? (
        <span
          aria-hidden="true"
          className="absolute left-[17px] top-10 h-[calc(100%-2.5rem)] border-l border-dashed border-white/15"
        />
      ) : null}

      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
        <span className="font-mono text-[9px] tabular-nums text-white/25">
          {index}
        </span>
        <h3 className="text-[13.5px] font-medium text-white/90">{title}</h3>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.08em] text-white/40">
          {badge}
        </span>
      </div>
      <p className="mt-1.5 max-w-[430px] text-[12px] leading-[1.65] text-white/45">
        {body}
      </p>
      {code ? (
        <code className="mt-2 inline-block rounded-[5px] border border-white/[0.06] bg-white/[0.04] px-2 py-1 font-mono text-[10px] text-[#9ecbff]">
          {code}
        </code>
      ) : null}
    </li>
  );
}

function ScriptCard({
  name,
  call,
  detail,
  icon: Icon,
}: {
  name: string;
  call: string;
  detail: string;
  icon: typeof AppWindow;
}) {
  return (
    <div className="rounded-[10px] border border-white/10 bg-white/[0.035] p-3.5">
      <div className="flex items-center gap-2">
        <Icon className="size-3.5 text-white/35" aria-hidden="true" />
        <span className="font-mono text-[10.5px] text-white/70">{name}</span>
        <span className="ml-auto size-1.5 rounded-full bg-[#28c567]/80" />
      </div>
      <code className="mt-2 block truncate font-mono text-[10px] text-[#7cc4ff]">
        {call}
      </code>
      <p className="mt-1.5 text-[10.5px] leading-4 text-white/35">{detail}</p>
    </div>
  );
}

export function Architecture() {
  return (
    <div>
      <div className="max-w-[760px]">
        <span className="eyebrow">Under the hood</span>
        <h2 className="mt-5 font-display text-[clamp(2.1rem,4.2vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.04em] text-ink">
          Where the numbers come from.
        </h2>
        <p className="mt-5 max-w-[600px] text-[14.5px] leading-7 text-ink-muted">
          Live speed from the adapter&apos;s byte counters. History from the
          same Windows usage store behind Settings → Data usage. The interesting
          part is where the readout lives.
        </p>
      </div>

      <div className="mt-14 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <h3 className="max-w-[420px] font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.06] tracking-[-0.035em] text-ink">
              The taskbar is a XAML island. So is the problem.
            </h3>
            <p className="mt-5 max-w-[430px] text-[14px] leading-7 text-ink-muted">
              A child window inside the Windows 11 taskbar reports
              IsWindowVisible() = true and paints nothing. So the readout is a
              topmost overlay positioned over the bar instead — visually
              indistinguishable, and it survives an Explorer restart because it
              was never a child.
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-8 space-y-5">
            <div className="flex gap-3.5">
              <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-brand-50 font-mono text-[10px] font-medium text-brand">
                1
              </span>
              <div>
                <p className="text-[13.5px] font-medium text-ink">
                  Overlay, not child
                </p>
                <p className="mt-1 text-[12.5px] leading-5 text-ink-muted">
                  Re-raised every 500 ms, never focusable, no taskbar button. It
                  looks embedded because it sits exactly over the bar.
                </p>
              </div>
            </div>
            <div className="flex gap-3.5">
              <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-brand-50 font-mono text-[10px] font-medium text-brand">
                2
              </span>
              <div>
                <p className="text-[13.5px] font-medium text-ink">
                  Two visibility signals
                </p>
                <p className="mt-1 text-[12.5px] leading-5 text-ink-muted">
                  The bar&apos;s rect and SHQueryUserNotificationState. The
                  readout shows only when both agree, so auto-hide and
                  fullscreen apps behave.
                </p>
              </div>
            </div>
            <div className="flex gap-3.5">
              <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-brand-50 font-mono text-[10px] font-medium text-brand">
                3
              </span>
              <div>
                <p className="text-[13.5px] font-medium text-ink">
                  One primary display
                </p>
                <p className="mt-1 text-[12.5px] leading-5 text-ink-muted">
                  The readout follows the primary monitor today. Multi-monitor
                  placement is the honest next gap.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140} className="mt-8">
            <div className="flex gap-3 rounded-[12px] border border-border bg-card p-4 shadow-card">
              <Info
                className="mt-0.5 size-4 shrink-0 text-brand"
                aria-hidden="true"
              />
              <p className="text-[12px] leading-5 text-ink-muted">
                <span className="font-medium text-ink">
                  Measured, not assumed.
                </span>{" "}
                A magenta probe window rendered normally as a normal window, and
                was invisible as a child of the taskbar. That measurement
                settled the overlay.
              </p>
            </div>
          </Reveal>
        </div>

      <Reveal delay={100} className="lg:col-span-7">
        <figure
          aria-label="Data Monitor architecture diagram"
          className="overflow-hidden rounded-[20px] border border-black/[0.06] bg-[#0b0b0f] text-white shadow-elevated"
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] px-5 py-4 md:px-6">
            <div className="flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-[0.16em] text-white/35">
              <span className="size-1.5 rounded-full bg-[#28c567]" />
              pipeline / windows 11
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[9px] text-white/40">
              no network
            </span>
          </div>

          <div className="p-5 md:p-6">
            <ol>
              <Step
                index="01"
                icon={AppWindow}
                title="Windows 11 taskbar"
                badge="XAML island"
                body="A child window parented into the bar reports IsWindowVisible() = true and paints nothing. The taskbar is not a container you can embed into."
                code="Shell_TrayWnd"
              />
              <Step
                index="02"
                icon={Layers}
                title="Topmost overlay"
                badge="re-raised every 500 ms"
                body="The readout is positioned over the bar instead: never focusable, no taskbar button, hidden with auto-hide and over fullscreen apps."
                code="210 × 34 DIP"
              />
              <Step
                index="03"
                icon={Cpu}
                title="Electron main"
                badge="IPC"
                body="Geometry, visibility, theme and settings. One preload bridge is the only path to the dashboard, the popover and the widget."
                code="preload.js"
                last
              />
            </ol>

            <div className="mt-4 flex items-center gap-2 pl-12 font-mono text-[9.5px] uppercase tracking-[0.12em] text-white/25">
              <MousePointerClick className="size-3" aria-hidden="true" />
              click → dashboard · hover → popover
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <ScriptCard
                name="sampler.ps1"
                call="Get-NetAdapterStatistics"
                detail="Adapter counters → bytes/s → Kbps / Mbps. 1 Hz."
                icon={SquareTerminal}
              />
              <ScriptCard
                name="usage.ps1"
                call="GetNetworkUsageAsync"
                detail="WinRT · days · hours · per-app. Unelevated."
                icon={SquareTerminal}
              />
            </div>
          </div>

          <figcaption className="border-t border-white/[0.07] px-5 py-3 font-mono text-[9.5px] text-white/25 md:px-6">
            the measurement that decided the architecture → docs/ARCHITECTURE.md
          </figcaption>
        </figure>
      </Reveal>
      </div>
    </div>
  );
}
