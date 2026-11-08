import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { Faq } from "@/components/marketing/faq";
import { InstallPanel } from "@/components/marketing/install-panel";
import { PrivacyAndArchitecture } from "@/components/marketing/privacy-architecture";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { Reveal } from "@/components/marketing/reveal";
import { TechStack } from "@/components/marketing/tech-stack";
import { JsonLd } from "@/components/json-ld";
import { heroSpecs } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <JsonLd />

      {/* 1. HERO SECTION */}
      <section
        id="top"
        className="hero-field relative overflow-hidden text-white"
        aria-labelledby="hero-title"
      >
        <div className="relative z-10 mx-auto max-w-[1144px] px-6 pb-16 pt-[124px] md:pb-24 md:pt-[160px]">
          <div className="mx-auto max-w-[900px] text-center">
            <h1
              id="hero-title"
              className="rise font-display text-[clamp(2.75rem,6vw,4.75rem)] font-semibold leading-[0.96] tracking-[-0.045em] max-[359px]:text-[2.35rem]"
              style={{ animationDelay: "70ms" }}
            >
              See where your data goes.
              <span className="mt-1 block font-normal text-white/95">
                Right in the taskbar.
              </span>
            </h1>

            <p
              className="rise mx-auto mt-6 max-w-[560px] text-[16px] font-medium leading-relaxed text-white/95 drop-shadow-[0_1px_1px_rgba(0,0,0,0.12)] md:text-[18px]"
              style={{ animationDelay: "140ms" }}
            >
              Live network speed pinned to Windows 11. Click for per-app data usage, daily history, and month-end forecast — 100% local, zero telemetry.
            </p>

            <div
              className="rise mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
              style={{ animationDelay: "210ms" }}
            >
              <a
                href="#install"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-[14.5px] font-medium text-primary-foreground transition-[background-color,transform] duration-150 hover:bg-primary/80 active:scale-[0.98] sm:w-auto"
              >
                Run locally
                <ArrowRight
                  className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#showcase"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 text-[14.5px] font-medium text-white backdrop-blur-sm transition-[background-color,transform] duration-150 hover:bg-white/20 active:scale-[0.98] sm:w-auto"
              >
                Explore features
                <ArrowDown
                  className="size-4 transition-transform duration-150 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* Dashboard Preview in Hero */}
          <div
            className="rise relative mx-auto mt-14 max-w-[1040px] md:mt-16"
            style={{ animationDelay: "280ms" }}
          >
            <div className="relative rounded-[20px] border border-white/20 bg-card/10 p-1.5 shadow-elevated backdrop-blur-sm">
              <div className="overflow-hidden rounded-[14px] bg-background">
                <Image
                  src="/screenshots/dashboard-light.png"
                  alt="Data Monitor dashboard in light mode showing 30-day usage, daily bars, per-app data and an hourly heatmap."
                  width={1450}
                  height={998}
                  priority
                  sizes="(max-width: 1144px) 100vw, 1040px"
                  className="theme-light-only h-auto w-full"
                />
                <Image
                  src="/screenshots/dashboard-dark.png"
                  alt="Data Monitor dashboard in dark mode showing 30-day total usage, a daily usage chart, apps ranked by bytes and a weekday by hour heatmap."
                  width={1450}
                  height={998}
                  priority
                  sizes="(max-width: 1144px) 100vw, 1040px"
                  className="theme-dark-only h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS RIBBON */}
      <section aria-label="System specifications" className="border-b border-border bg-background">
        <div className="container-page">
          <dl className="grid grid-cols-2 gap-y-5 py-6 sm:grid-cols-3 md:grid-cols-5">
            {heroSpecs.map((spec, index) => (
              <div
                key={spec.label}
                className={cn(
                  "flex flex-col gap-1",
                  index > 0 && "md:border-l md:border-border md:pl-6"
                )}
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                  {spec.label}
                </dt>
                <dd className="text-[13.5px] font-medium tracking-[-0.01em] text-ink">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 2. PRODUCT SHOWCASE */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-page">
          <ProductShowcase />
        </div>
      </section>

      {/* 3. PRIVACY & ARCHITECTURE */}
      <section className="border-y border-border bg-muted/40 py-20 md:py-28">
        <div className="container-page">
          <PrivacyAndArchitecture />
        </div>
      </section>

      {/* 4. TECH STACK */}
      <section id="stack" className="bg-background py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-[640px]">
            <h2 className="font-display text-[clamp(2rem,3.8vw,3.2rem)] font-medium leading-[1.05] tracking-[-0.035em] text-ink">
              Small surface. Nothing hidden.
            </h2>
            <p className="mt-3 text-[14.5px] leading-7 text-ink-muted">
              The app is deliberately lightweight: Electron, Node, PowerShell, and WinRT. No external telemetry, no background daemons.
            </p>
          </div>
          <TechStack />
        </div>
      </section>

      {/* 5. INSTALLATION */}
      <section id="install" className="border-t border-border bg-muted/20 py-20 md:py-28">
        <div className="container-page">
          <InstallPanel />
        </div>
      </section>

      {/* 6. FAQ */}
      <section id="faq" className="border-t border-border bg-muted/40 py-20 md:py-28">
        <div className="container-page">
          <Faq />
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION CARD */}
      <section
        aria-label="Get Data Monitor"
        className="bg-background py-16 md:py-24"
      >
        <div className="container-page">
          <div className="hero-field relative overflow-hidden rounded-[28px] border border-white/20 p-8 text-center text-white shadow-elevated sm:p-12 md:p-16 dark:border-border dark:bg-card dark:text-foreground">
            {/* Subtle ambient glow / grid */}
            <div
              aria-hidden="true"
              className="dark-grid pointer-events-none absolute inset-0 opacity-20 dark:opacity-10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-[420px] rounded-full bg-white/10 blur-3xl dark:bg-brand/10"
            />

            <div className="relative mx-auto max-w-[680px]">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-medium text-white/95 backdrop-blur-sm dark:border-border dark:bg-muted dark:text-ink">
                  <Sparkles className="size-3.5 text-white/90 dark:text-brand" aria-hidden="true" />
                  Windows 11 · Local Only
                </div>
                <h2 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-white dark:text-ink">
                  Stop guessing where the data went.
                </h2>
                <p className="mx-auto mt-4 max-w-[460px] text-[15px] font-medium leading-7 text-white/90 dark:text-ink-muted">
                  A live speedometer in your taskbar. An on-demand dashboard when you need answers. Nothing ever leaves your machine.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="#install"
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-[14.5px] font-medium text-ink transition-[background-color,transform] duration-150 hover:bg-white/90 active:scale-[0.98] dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90 sm:w-auto"
                  >
                    Run it locally
                    <ArrowRight
                      className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href="https://github.com/avesh-pathak/data-monitor"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 text-[14.5px] font-medium text-white backdrop-blur-sm transition-colors duration-150 hover:bg-white/20 dark:border-border dark:bg-card dark:text-ink dark:hover:bg-muted sm:w-auto"
                  >
                    View on GitHub
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
