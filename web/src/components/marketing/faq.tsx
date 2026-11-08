import { ArrowUpRight, MessageCircleQuestion } from "lucide-react";

import { Reveal } from "@/components/marketing/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:sticky lg:top-28 lg:col-span-4">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,3.8vw,3rem)] font-medium leading-[1.05] tracking-[-0.035em] text-ink">
            Frequently asked questions.
          </h2>
          <p className="mt-3 max-w-[330px] text-[14px] leading-6 text-ink-muted">
            Direct answers on architecture, privacy, system overhead, and supported platforms.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-7">
          <a
            href="#architecture"
            className="group flex items-start gap-3 rounded-[12px] border border-border bg-card p-4 transition-[border-color,box-shadow] hover:border-ring hover:shadow-hover"
          >
            <span className="grid size-8 shrink-0 place-items-center rounded-[8px] bg-brand-50 text-brand">
              <MessageCircleQuestion
                className="size-4"
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </span>
            <span>
              <span className="block text-[12.5px] font-medium text-ink">
                Why an overlay, not a widget?
              </span>
              <span className="mt-1 block text-[11.5px] leading-5 text-ink-muted">
                The XAML-island measurement is explained under the hood.
              </span>
              <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-brand">
                Read the architecture
                <ArrowUpRight
                  className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </span>
          </a>
        </Reveal>
      </div>

      <Reveal delay={100} className="lg:col-span-8">
        <div className="rounded-[16px] border border-border bg-card p-2 shadow-card sm:p-4">
          <Accordion type="single" collapsible defaultValue="faq-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="border-border px-3 sm:px-4"
              >
                <AccordionTrigger className="py-5 text-left text-[14.5px] font-medium tracking-[-0.01em] text-ink hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[13px] leading-6 text-ink-muted">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>
    </div>
  );
}
