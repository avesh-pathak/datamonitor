"use client";

import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { shots } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ScreenshotGallery() {
  const { resolvedTheme } = useTheme();
  const [selected, setSelected] = useState(
    resolvedTheme === "dark" ? "dashboard-dark" : "dashboard-light"
  );
  const activeTab = selected;

  return (
    <Tabs
      value={activeTab}
      onValueChange={(value) => {
        setSelected(value);
      }}
      className="gap-6"
    >
      <TabsList className="no-scrollbar h-auto w-full justify-start gap-1 overflow-x-auto rounded-full border border-border bg-muted p-1 md:w-fit">
        {shots.map((shot) => (
          <TabsTrigger
            key={shot.id}
            value={shot.id}
            className="h-11 flex-none rounded-full px-3.5 md:h-9"
          >
            {shot.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {shots.map((shot, index) => (
        <TabsContent key={shot.id} value={shot.id} className="outline-none">
          <figure>
            <div className="rounded-[22px] border border-border bg-card p-2 shadow-card md:p-2.5">
              <div
                className={cn(
                  "relative overflow-hidden rounded-[15px]",
                  shot.panel === "dark" && "bg-[#0b0b0f]",
                  shot.panel === "light" && "bg-[#f5f6f8]",
                  shot.panel === "stage" &&
                    "bg-background"
                )}
              >
                {shot.display === "dashboard" ? (
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    sizes="(max-width: 1024px) 100vw, 1080px"
                    className="h-auto w-full"
                  />
                ) : null}

                {shot.display === "taskbar" ? (
                  <div className="flex min-h-[240px] items-center justify-center px-4 py-12 md:min-h-[260px] md:px-10">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      sizes="(max-width: 768px) 90vw, 760px"
                      className="h-auto w-full max-w-[760px] rounded-[8px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                    />
                  </div>
                ) : null}

                {shot.display === "popover" ? (
                  <div className="relative flex min-h-[480px] flex-col items-center justify-center gap-6 overflow-hidden bg-background px-4 py-12">
                    <Image
                      src="/screenshots/popover-light.png"
                      alt="Data Monitor hover summary in light mode, showing today's usage and top apps."
                      width={shot.width}
                      height={shot.height}
                      sizes="(max-width: 640px) 84vw, 380px"
                      className="theme-light-only relative h-auto w-[380px] max-w-full"
                    />
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      sizes="(max-width: 640px) 84vw, 380px"
                      className="theme-dark-only relative h-auto w-[380px] max-w-full"
                    />
                    <div className="relative w-full max-w-[560px]">
                      <Image
                        src="/screenshots/taskbar-readout-cropped.png"
                        alt=""
                        width={920}
                        height={75}
                        sizes="(max-width: 640px) 84vw, 560px"
                        className="h-auto w-full rounded-[7px] border border-white/10 opacity-90"
                        aria-hidden="true"
                      />
                      <p className="mt-3 text-center font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted-foreground">
                        hover the readout ↑
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <figcaption className="mt-5 flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-10">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[10px] tabular-nums text-ink-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[13px] font-medium text-ink">
                  {shot.label}
                </span>
              </div>
              <p className="max-w-[560px] text-[13px] leading-6 text-ink-muted md:text-right">
                {shot.caption}
              </p>
            </figcaption>
          </figure>
        </TabsContent>
      ))}
    </Tabs>
  );
}
