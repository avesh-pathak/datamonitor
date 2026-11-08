"use client";

import { useState } from "react";
import { Check, Copy, Download, ExternalLink, FileText, LockKeyhole, Terminal } from "lucide-react";

import { installSteps, requirements } from "@/lib/content";

const sourceCommands = `git clone https://github.com/avesh-pathak/datamonitor.git
cd datamonitor
npm start`;

export function InstallPanel() {
  const [activeTab, setActiveTab] = useState<"exe" | "source">("exe");
  const [copied, setCopied] = useState(false);

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(sourceCommands);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div>
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Heading, Specs & Trust */}
        <div className="lg:col-span-5">
          <h2 className="font-display text-[clamp(2rem,3.8vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.035em] text-ink">
            Install in one click or three commands.
          </h2>
          <p className="mt-4 max-w-[420px] text-[14.5px] leading-7 text-ink-muted">
            Download the standalone Windows 11 executable or run directly from the open-source repository. Zero cloud accounts, zero telemetry, no admin rights required.
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

          <div className="mt-6 flex items-start gap-3 rounded-[12px] border border-emerald-600/15 bg-emerald-50/60 p-4 dark:border-emerald-500/20 dark:bg-emerald-950/20">
            <LockKeyhole
              className="mt-0.5 size-4 shrink-0 text-emerald-700 dark:text-emerald-400"
              aria-hidden="true"
            />
            <p className="text-[12px] leading-5 text-emerald-900/80 dark:text-emerald-200/80">
              <span className="font-medium text-emerald-950 dark:text-emerald-100">No admin. No service.</span>{" "}
              The only file written outside the folder is{" "}
              <code className="rounded bg-card/70 px-1 py-0.5 font-mono text-[10.5px]">
                %APPDATA%\taskbar-data-monitor\settings.json
              </code>
              .
            </p>
          </div>
        </div>

        {/* Right Column: Tabbed Download (.exe / .txt) & Source */}
        <div className="lg:col-span-7">
          {/* Surface Mode Switcher Tabs */}
          <div className="mb-3 flex items-center justify-between gap-2">
            <div className="inline-flex rounded-full border border-border bg-muted/60 p-1">
              <button
                type="button"
                onClick={() => setActiveTab("exe")}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-medium transition-all ${
                  activeTab === "exe"
                    ? "bg-card text-ink shadow-sm"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                <Download className="size-3.5" aria-hidden="true" />
                Download .exe
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("source")}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-medium transition-all ${
                  activeTab === "source"
                    ? "bg-card text-ink shadow-sm"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                <Terminal className="size-3.5" aria-hidden="true" />
                Run from Source
              </button>
            </div>

            {/* Direct .txt guide button */}
            <a
              href="/INSTALL.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-brand hover:underline"
              title="View plain-text installation guide"
            >
              <FileText className="size-3.5" aria-hidden="true" />
              <span>INSTALL.txt</span>
            </a>
          </div>

          {activeTab === "exe" ? (
            /* EXECUTABLE DOWNLOAD CARD */
            <div className="overflow-hidden rounded-[20px] border border-border bg-card p-6 shadow-elevated md:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-2.5 py-0.5 text-[11px] font-medium text-brand">
                    <span>Windows 11 · 64-bit</span>
                    <span className="size-1 rounded-full bg-brand/40" />
                    <span>v0.1.0</span>
                  </div>
                  <h3 className="mt-3 text-[19px] font-semibold text-ink">
                    Data-Monitor-Setup.exe
                  </h3>
                  <p className="mt-1 max-w-[360px] text-[13px] leading-5 text-ink-muted">
                    Official Windows installer with automatic taskbar integration, tray controls, and optional startup shortcut.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 sm:items-end">
                  <a
                    href="https://github.com/avesh-pathak/datamonitor/releases/latest/download/Data-Monitor-Setup.exe"
                    className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-[13.5px] font-medium text-primary-foreground shadow-sm transition-[background-color,transform] duration-150 hover:bg-primary/90 active:scale-[0.98]"
                  >
                    <Download className="size-4" aria-hidden="true" />
                    Download Installer (.exe)
                  </a>

                  <a
                    href="/INSTALL.txt"
                    download="INSTALL.txt"
                    className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-border bg-card px-4 text-[12px] font-medium text-ink-soft transition-colors hover:bg-muted hover:text-ink"
                  >
                    <FileText className="size-3.5 text-ink-muted" aria-hidden="true" />
                    Download Guide (.txt)
                  </a>
                </div>
              </div>

              {/* Quick Options / Portable & Checksums */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-5 text-[11.5px] text-ink-muted">
                <span className="inline-flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  Self-contained · No admin required
                </span>
                <a
                  href="https://github.com/avesh-pathak/datamonitor/releases/latest/download/Data-Monitor-Portable.exe"
                  className="font-medium text-ink-soft hover:text-brand hover:underline"
                >
                  Portable version (.exe)
                </a>
                <a
                  href="https://github.com/avesh-pathak/datamonitor/releases"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto inline-flex items-center gap-1 font-medium text-brand hover:underline"
                >
                  GitHub Releases
                  <ExternalLink className="size-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          ) : (
            /* TERMINAL SOURCE BOX */
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
                    <span className="text-white/85">git clone https://github.com/avesh-pathak/datamonitor.git</span>
                    {"\n"}
                    <span className="mr-3 select-none text-white/20">2</span>
                    <span className="select-none text-[#7cc4ff]">$ </span>
                    <span className="text-white/85">cd datamonitor</span>
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
          )}

          <p className="mt-3 text-[11px] leading-5 text-ink-faint">
            Looking for offline documentation? Read the plain-text guide at{" "}
            <a href="/INSTALL.txt" target="_blank" rel="noopener noreferrer" className="font-mono text-brand hover:underline">
              INSTALL.txt
            </a>
            .
          </p>
        </div>
      </div>

      {/* 3 Step Cards */}
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
