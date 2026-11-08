import {
  Command,
  Gauge,
  Grid3X3,
  LayoutGrid,
  Search,
  SunMoon,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/marketing/reveal";
import { features, type Feature } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons: Record<Feature["icon"], LucideIcon> = {
  apps: LayoutGrid,
  heatmap: Grid3X3,
  forecast: TrendingUp,
  search: Search,
  cap: Gauge,
  theme: SunMoon,
  keyboard: Command,
};

const appBars = [
  { name: "Brave", value: "511.97 GB", width: "100%" },
  { name: "OpenCode", value: "84.92 GB", width: "17%" },
  { name: "unattributed", value: "14.66 GB", width: "4%" },
];

function AppBars() {
  return (
    <div className="mt-6 space-y-2.5" aria-hidden="true">
      {appBars.map((app) => (
        <div key={app.name}>
          <div className="flex items-baseline justify-between gap-4 text-[11.5px]">
            <span className="text-ink-soft">{app.name}</span>
            <span className="tabular-nums text-ink-muted">{app.value}</span>
          </div>
          <div className="mt-1 h-1 overflow-hidden rounded-full bg-black/[0.055]">
            <span
              className="block h-full rounded-full bg-brand"
              style={{ width: app.width }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function MiniHeatmap() {
  const values = Array.from({ length: 168 }, (_, index) => {
    const hour = index % 24;
    const day = Math.floor(index / 24);
    const evening = hour >= 18 ? 0.6 : hour >= 9 ? 0.26 : 0.08;
    return Math.min(0.95, evening + ((day * 11 + hour * 7) % 6) / 20);
  });

  return (
    <div className="mt-6" aria-hidden="true">
      <div className="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-[3px]">
        {values.map((value, index) => (
          <span
            key={index}
            className="aspect-square rounded-[2px] bg-brand"
            style={{ opacity: value }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between font-mono text-[9px] text-ink-faint">
        <span>Mon</span>
        <span>24 h</span>
        <span>Sun</span>
      </div>
    </div>
  );
}

function ThemePreview() {
  return (
    <div className="mt-6 grid max-w-[430px] grid-cols-2 gap-2" aria-hidden="true">
      <div className="rounded-[9px] border border-white/10 bg-[#141419] p-3 text-white">
        <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.14em] text-white/40">
          <span>Today</span>
          <span className="size-1.5 rounded-full bg-[#7fd6a4]" />
        </div>
        <div className="mt-2 text-[17px] font-semibold tracking-[-0.02em]">
          6.38 GB
        </div>
        <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/10">
          <span className="block h-full w-[64%] rounded-full bg-[#5b8cff]" />
        </div>
      </div>
      <div className="rounded-[9px] border border-black/[0.08] bg-[#f5f6f8] p-3 text-[#14141a]">
        <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.14em] text-black/35">
          <span>Today</span>
          <span className="size-1.5 rounded-full bg-[#148f5b]" />
        </div>
        <div className="mt-2 text-[17px] font-semibold tracking-[-0.02em]">
          6.38 GB
        </div>
        <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-black/10">
          <span className="block h-full w-[64%] rounded-full bg-[#2f6bff]" />
        </div>
      </div>
      <div className="col-span-2 mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-ink-faint">
        tray → theme → match windows / dark / light
      </div>
    </div>
  );
}

export function FeatureGrid() {
  return (
    <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-6">
      {features.map((feature, index) => {
        const Icon = icons[feature.icon];
        return (
          <Reveal
            key={feature.id}
            delay={Math.min(index * 45, 225)}
            className={cn(
              "group relative flex min-h-[238px] flex-col rounded-[14px] border border-border bg-card p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-ring hover:shadow-hover",
              feature.span === "wide"
                ? "md:col-span-2 lg:col-span-4"
                : feature.id === "keyboard"
                  ? "md:col-span-2 lg:col-span-2"
                  : "lg:col-span-2"
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="grid size-9 place-items-center rounded-[10px] bg-brand-50 text-brand">
                <Icon className="size-[18px]" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <span className="font-mono text-[10px] tabular-nums text-ink-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-5 text-[19px] font-medium leading-[1.25] tracking-[-0.02em] text-ink">
              {feature.title}
            </h3>
            <p className="mt-2 max-w-[520px] text-[13.5px] leading-[1.65] text-ink-muted">
              {feature.body}
            </p>

            {feature.id === "apps" ? <AppBars /> : null}
            {feature.id === "heatmap" ? <MiniHeatmap /> : null}
            {feature.id === "theme" ? <ThemePreview /> : null}

            {feature.note && feature.id !== "apps" ? (
              <div className="mt-auto pt-5">
                <span className="inline-flex items-center rounded-full border border-black/[0.07] bg-paper px-2.5 py-1 font-mono text-[10px] text-ink-muted">
                  {feature.note}
                </span>
              </div>
            ) : null}
          </Reveal>
        );
      })}
    </div>
  );
}
