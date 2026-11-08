"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative size-11 rounded-full text-foreground"
      aria-label="Toggle light and dark theme"
      title="Toggle light and dark theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="theme-light-only" aria-hidden="true" />
      <Moon className="theme-dark-only" aria-hidden="true" />
    </Button>
  );
}
