import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
  descriptionClassName,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      <span
        className={cn(
          "eyebrow",
          align === "center" && "text-center",
          "not-italic"
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-5 font-display text-[clamp(2.1rem,4.2vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.04em] text-ink",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-[580px] text-[14.5px] leading-7 text-ink-muted",
            align === "center" && "mx-auto",
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
