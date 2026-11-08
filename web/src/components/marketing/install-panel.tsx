"use client";

import { useState } from "react";
import { Check, Copy, LockKeyhole, Terminal } from "lucide-react";

import { installSteps, requirements } from "@/lib/content";

const command = "cd app\nnpm install\nnpm start";

export function InstallPanel() {
  const [copied, setCopied] = useState(false);

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div>
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <h2 className="font-display text-[clamp(2rem,3.8vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.035em] text-ink">
            Running in three commands.
          </h2>
          <p className="mt-4 max-w-[420px] text-[14.5px] leading-7 text-ink-muted">
            Clone the repository and start. Runs natively on Windows 11 with no administrative elevation or cloud account needed.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {requirements.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11.5px] font-medium text-ink-soft"
              >
                <Check className="size-3 text-brand" strokeWidth={2.4} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-[12px] border border-emerald-600/15 bg-emerald-50/60 p-4">
            <LockKeyhole
              className="mt-0.5 size-4 shrink-0 text-emerald-700"
              aria-hidden="true"
            />
            <p className="text-[12px] leading-5 text-emerald-900/80">
              <span className="font-medium text-emerald-950">No admin. No service.</span>{" "}
              The only file written outside the folder is{" "}
              <code className="rounded bg-card/70 px-1 py-0.5 font-mono text-[10.5px]">
                %APPDATA%\taskbar-data-monitor\settings.json
              </code>
              .
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-[16px] border border-white/[0.08] bg-[#0b0b0f] shadow-elevated">
            <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] px-4 py-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-white/30">
                <Terminal className="size-3" aria-hidden="true" />
                PowerShell
              </span>
              <button
                type="button"
                onClick={copyCommand}
                className="inline-flex h-11 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 text-[10.5px] font-medium text-white/60 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white md:h-7"
                aria-label="Copy install commands"
              >
                {copied ? (
                  <Check className="size-3 text-[#7fd6a4]" aria-hidden="true" />
                ) : (
                  <Copy className="size-3" aria-hidden="true" />
                )}
                <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <div className="overflow-x-auto p-5">
              <pre className="font-mono text-[12.5px] leading-8">
                <code>
                  <span className="mr-3 select-none text-white/20">1</span>
                  <span className="select-none text-[#7cc4ff]">$ </span>
                  <span className="text-white/85">cd app</span>
                  {"\n"}
                  <span className="mr-3 select-none text-white/20">2</span>
                  <span className="select-none text-[#7cc4ff]">$ </span>
                  <span className="text-white/85">npm install</span>
                  {"\n"}
                  <span className="mr-3 select-none text-white/20">3</span>
                  <span className="select-none text-[#7cc4ff]">$ </span>
                  <span className="text-white/85">npm start</span>
                </code>
              </pre>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/[0.07] px-4 py-3 font-mono text-[9.5px] text-white/30">
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-[#28c567]" />
                readout appears immediately
              </span>
              <span>Windows 11 · no admin</span>
              <span className="ml-auto">v0.1</span>
            </div>
          </div>

          <p className="mt-3 text-[11px] leading-5 text-ink-faint">
            Not packaged as an installer yet. The readout auto-starts at login
            only after you add a Startup shortcut — the full steps are in the
            README.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
        {installSteps.map((step) => (
          <div key={step.number} className="flex gap-3.5">
            <span className="font-mono text-[10px] tabular-nums text-brand">
              {step.number}
            </span>
            <div>
              <h3 className="text-[13.5px] font-medium text-ink">
                {step.title}
              </h3>
              <p className="mt-1 max-w-[280px] text-[12px] leading-5 text-ink-muted">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
