import { Blocks, Code2 } from "lucide-react";

import { Reveal } from "@/components/marketing/reveal";
import { pageStack, techStack } from "@/lib/content";
import { cn } from "@/lib/utils";

export function TechStack() {
  return (
    <div>
      <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {techStack.map((tech, index) => (
          <Reveal
            key={tech.name}
            delay={Math.min(index * 45, 225)}
            className="group flex items-start gap-4 rounded-[14px] border border-border bg-card p-5 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-ring hover:shadow-hover"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-[10px] border border-border bg-muted">
              <i
                className={cn(tech.icon, "text-[26px] leading-none")}
                aria-hidden="true"
              />
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <h3 className="text-[14px] font-medium tracking-[-0.01em] text-ink">
                  {tech.name}
                </h3>
                <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.06em] text-ink-faint">
                  {tech.tag}
                </span>
              </div>
              <p className="mt-1.5 text-[12.5px] leading-5 text-ink-muted">
                {tech.role}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal
        delay={120}
        className="mt-3 flex flex-col gap-5 rounded-[16px] border border-border bg-card p-5 md:flex-row md:items-center md:justify-between md:gap-8 md:p-6"
      >
        <div className="flex items-start gap-3.5">
          <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-primary text-primary-foreground">
            <Code2 className="size-[18px]" strokeWidth={1.6} aria-hidden="true" />
          </span>
          <div>
            <p className="text-[13px] font-medium text-ink">
              The page you&apos;re reading
            </p>
            <p className="mt-0.5 max-w-[330px] text-[12px] leading-5 text-ink-muted">
              The same design system, on a modern React stack. Server-rendered,
              statically generated, no client-side data.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          {pageStack.map((item) => (
            <span
              key={item.name}
              className="inline-flex items-center gap-2 text-[12px] font-medium text-ink-soft"
            >
              <i
                className={cn(item.icon, "text-[19px] leading-none")}
                aria-hidden="true"
              />
              {item.name}
            </span>
          ))}
          <span className="inline-flex items-center gap-2 text-[12px] font-medium text-ink-soft">
            <span className="grid size-[19px] place-items-center rounded-[4px] border border-border bg-card">
              <Blocks
                className="size-2.5 text-ink"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </span>
            shadcn/ui
          </span>
        </div>
      </Reveal>


    </div>
  );
}
