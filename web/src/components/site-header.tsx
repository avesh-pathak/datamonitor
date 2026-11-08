"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, Terminal } from "lucide-react";

import { Wordmark } from "@/components/marketing/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkTone = scrolled
    ? "text-foreground hover:bg-muted"
    : "text-white hover:bg-white/[0.14] hover:text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]";

  const brandTone = scrolled ? "text-foreground" : "text-white";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-200",
        scrolled
          ? "border-b border-border bg-background/90 text-foreground shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent text-white"
      )}
    >
      <div className="container-page flex h-[64px] items-center justify-between gap-4 px-8 xl:grid xl:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          aria-label="Data Monitor — home"
          className={cn(
            "inline-flex min-h-11 shrink-0 items-center justify-self-start rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current",
            brandTone
          )}
        >
          <Wordmark markClassName="size-6 rounded-[6px]" />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 xl:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-2 text-[14px] font-semibold tracking-[-0.01em] transition-colors duration-150",
                linkTone
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-self-end gap-1 md:flex">
          <ThemeToggle />
          <a
            href={site.author.portfolio}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "rounded-full px-2.5 py-2 text-[13px] font-semibold transition-colors duration-150",
              linkTone
            )}
          >
            {site.author.portfolioLabel}
          </a>
          <a
            href={site.author.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={cn(
              "inline-flex size-11 shrink-0 items-center justify-center rounded-full transition-colors duration-150",
              linkTone
            )}
          >
            <i className="devicon-linkedin-plain text-[20px]" aria-hidden="true" />
          </a>

          <span
            aria-hidden="true"
            className={cn(
              "mx-1.5 h-4 w-px transition-colors duration-200",
              scrolled ? "bg-border" : "bg-white/25"
            )}
          />

          <a
            href="#install"
            className={cn(
              "inline-flex h-[34px] items-center gap-2 rounded-full px-4 text-[13.5px] font-medium transition-colors duration-150",
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/80"
                : "bg-white text-[#171717] hover:bg-white/90"
            )}
          >
            <Terminal className="size-4" aria-hidden="true" />
            Install
          </a>

          <div className="ml-1.5 xl:hidden">
            <MobileMenu triggerTone={scrolled} />
          </div>
        </div>

        <div className="flex items-center justify-self-end gap-2 md:hidden">
          <ThemeToggle />
          <a
            href={site.author.portfolio}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "hidden min-[480px]:inline-flex rounded-full px-2.5 py-2 text-[13px] font-semibold",
              linkTone
            )}
          >
            avesh.tech
          </a>
          <MobileMenu triggerTone={scrolled} />
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ triggerTone }: { triggerTone: boolean }) {
  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          "inline-flex size-11 items-center justify-center rounded-full transition-colors",
          triggerTone
            ? "bg-muted text-foreground hover:bg-accent"
            : "bg-background text-foreground hover:bg-muted"
        )}
        aria-label="Open menu"
      >
        <Menu className="size-[18px]" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent
        side="right"
        data-lenis-prevent
        className="w-[88%] max-w-sm gap-0 border-l border-border bg-background p-0"
      >
        <SheetHeader className="border-b border-border px-5 py-4">
          <SheetTitle className="flex items-center">
            <Wordmark />
          </SheetTitle>
          <SheetDescription className="sr-only">
            Site navigation and contact links.
          </SheetDescription>
        </SheetHeader>

        <nav aria-label="Mobile" className="flex flex-col gap-1 px-3 py-4">
          {navLinks.map((link) => (
            <SheetClose key={link.href} asChild>
              <a
                href={link.href}
                className="rounded-xl px-3 py-3 text-[17px] font-medium tracking-[-0.01em] text-ink transition-colors hover:bg-paper"
              >
                {link.label}
              </a>
            </SheetClose>
          ))}
        </nav>

        <div className="mx-5 border-t border-border" />

        <div className="flex flex-col gap-1 px-3 py-4">
          <a
            href={site.author.portfolio}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-xl px-3 py-3 text-[14px] text-ink-body transition-colors hover:bg-paper"
          >
            <span>Portfolio</span>
            <span className="inline-flex items-center gap-1 text-ink-muted">
              avesh.tech
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </span>
          </a>
          <a
            href={site.author.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-xl px-3 py-3 text-[14px] text-ink-body transition-colors hover:bg-paper"
          >
            <span>LinkedIn</span>
            <span className="inline-flex items-center gap-1 text-ink-muted">
              avesh-pathak
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </span>
          </a>
        </div>

        <div className="mt-auto border-t border-border p-5">
          <SheetClose asChild>
            <a
              href="#install"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary text-[14px] font-medium text-primary-foreground transition-colors hover:bg-primary/80"
            >
              <Terminal className="size-4" aria-hidden="true" />
              Install Data Monitor
            </a>
          </SheetClose>
          <p className="mt-3 text-center text-[11px] text-ink-faint">
            Local-only · Windows 11 · No account
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
