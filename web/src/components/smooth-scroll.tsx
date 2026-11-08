"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Enables Lenis smooth scrolling for the whole page.
 *
 * In-page anchors are handled here rather than with Lenis' `anchors` option,
 * because the browser's default hash navigation jumps instantly before Lenis
 * can animate. We cancel the native jump and let Lenis ease to the target,
 * which also respects the `scroll-margin-top` set on `[id]` in globals.css.
 *
 * Reduced motion is honored by Lenis automatically (`respectReducedMotion`).
 */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });

    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        "a[href]"
      );
      if (!anchor || (anchor.target && anchor.target !== "_self")) return;

      const url = new URL(anchor.href, window.location.href);
      if (
        url.origin !== window.location.origin ||
        url.pathname !== window.location.pathname ||
        !url.hash
      ) {
        return;
      }

      const id = decodeURIComponent(url.hash.slice(1));
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      event.preventDefault();
      history.pushState(null, "", url.hash);
      lenis.scrollTo(target);
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
