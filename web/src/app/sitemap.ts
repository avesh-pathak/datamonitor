import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date("2026-11-08"),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${site.url}/screenshots/dashboard-dark.png`,
        `${site.url}/screenshots/dashboard-light.png`,
        `${site.url}/screenshots/taskbar-readout.png`,
      ],
    },
  ];
}
