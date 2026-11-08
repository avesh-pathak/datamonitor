import { ArrowUpRight, CircleDot } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/marketing/icons";
import { LogoMark } from "@/components/marketing/logo";
import { footerColumns, site } from "@/lib/site";

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export function SiteFooter() {
  return (
    <footer className="gradient-footer relative overflow-hidden border-t border-border">
      <h2 className="sr-only">Site footer</h2>

      <div className="container-page pb-0 pt-10 sm:pt-14">
        <div className="flex flex-col justify-between gap-7 border-b border-border pb-8 sm:gap-10 sm:pb-12 lg:flex-row">
          <div className="max-w-[380px]">
            <a
              href="#top"
              aria-label="Data Monitor — back to top"
              className="inline-flex min-h-11 items-center gap-2.5 rounded-lg"
            >
              <LogoMark className="size-9 rounded-[10px]" />
              <span className="text-[21px] font-semibold leading-none tracking-[-0.03em] text-ink">
                Data Monitor
              </span>
            </a>
            <p className="mt-4 text-[14.5px] leading-6 text-ink-muted sm:mt-5">
              A local-only network monitor for Windows 11. Live speed in the
              taskbar, and a dashboard that answers where today&apos;s data
              went.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-600/15 bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold text-emerald-800 dark:border-emerald-500/20 dark:bg-emerald-950/40 dark:text-emerald-400 sm:mt-5">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inline-flex size-full rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              No account · no telemetry
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-8 lg:gap-x-14">
            {footerColumns.map((column) => (
              <div
                key={column.label}
                className={column.label === "Connect" ? "col-span-2 border-t border-border pt-5 sm:col-span-1 sm:border-0 sm:pt-0" : undefined}
              >
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                  {column.label}
                </h3>
                <ul
                  className={column.label === "Connect"
                    ? "mt-2 flex flex-wrap gap-x-1 sm:mt-4 sm:flex-col sm:gap-3"
                    : "mt-2 flex flex-col sm:mt-4 sm:gap-3"}
                >
                  {column.links.map((link) => {
                    const external = isExternal(link.href);

                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noreferrer" : undefined}
                          className="group inline-flex items-center gap-1 text-[14.5px] leading-6 text-ink-soft transition-colors hover:text-ink max-lg:min-h-11 max-lg:px-3"
                        >
                          {link.label}
                          {external ? (
                            <ArrowUpRight
                              className="size-3 text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                              aria-hidden="true"
                            />
                          ) : null}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border py-6">
          <div className="flex min-w-0 max-w-full flex-wrap items-center gap-2">
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-medium text-ink-soft">
              <CircleDot
                className="size-3 shrink-0 text-emerald-600"
                aria-hidden="true"
              />
              Real captures · Windows 11
            </span>
            <span className="inline-flex max-w-full items-center rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-medium text-ink-soft">
              1 Hz sampling · 58-day history · 0 network calls
            </span>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <a
              href={site.author.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Data Monitor on GitHub"
              className="grid size-11 place-items-center rounded-full border border-border bg-card text-ink-soft transition hover:-translate-y-px hover:bg-paper-2 hover:text-ink lg:size-9"
            >
              <GitHubIcon className="size-4" />
            </a>
            <a
              href={site.author.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Avesh Pathak on LinkedIn"
              className="grid size-11 place-items-center rounded-full border border-border bg-card text-ink-soft transition hover:-translate-y-px hover:bg-paper-2 hover:text-ink lg:size-9"
            >
              <LinkedInIcon className="size-4" />
            </a>
            <a
              href={site.author.portfolio}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-1.5 rounded-full border border-border bg-card px-3.5 text-xs font-semibold text-ink-soft transition hover:-translate-y-px hover:bg-paper-2 hover:text-ink lg:h-9"
            >
              {site.author.portfolioLabel}
              <ArrowUpRight className="size-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-page">
        <div className="[container-type:inline-size]">
          <div
            aria-hidden="true"
            className="text-gradient-ink select-none whitespace-nowrap pt-4 text-center text-[min(18cqw,236px)] font-semibold leading-[0.74] tracking-[-0.06em]"
          >
            Data Monitor
          </div>
        </div>
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-border py-5 text-[11px] tracking-[0.02em] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <span>
          © 2026 Data Monitor. A local-only network monitor for Windows 11.
        </span>
        <span>
          Built by{" "}
          <a
            href={site.author.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center font-medium text-ink-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            {site.author.name}
          </a>
          {" · "}
          <a
            href={site.author.portfolio}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center font-medium text-ink-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            {site.author.portfolioLabel}
          </a>
        </span>
      </div>
    </footer>
  );
}
