import { faqs, shots } from "@/lib/content";
import { site } from "@/lib/site";

const absolute = (path: string) => `${site.url}${path}`;

export function JsonLd() {
  const graph = [
    {
      "@type": "WebSite",
      "@id": absolute("/#website"),
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": absolute("/#person") },
    },
    {
      "@type": "Person",
      "@id": absolute("/#person"),
      name: site.author.name,
      url: site.author.portfolio,
      sameAs: [site.author.linkedin],
    },
    {
      "@type": "WebPage",
      "@id": absolute("/#webpage"),
      url: site.url,
      name: site.title,
      description: site.description,
      isPartOf: { "@id": absolute("/#website") },
      about: { "@id": absolute("/#app") },
      primaryImageOfPage: absolute("/screenshots/dashboard-dark.png"),
      inLanguage: "en",
      dateModified: "2026-11-08",
    },
    {
      "@type": "SoftwareApplication",
      "@id": absolute("/#app"),
      name: site.name,
      alternateName: "Taskbar Data Monitor",
      applicationCategory: "UtilitiesApplication",
      applicationSubCategory: "Network monitoring",
      operatingSystem: "Windows 11",
      softwareVersion: site.version,
      description: site.longDescription,
      url: site.url,
      downloadUrl: absolute("/#install"),
      screenshot: shots
        .filter((shot) => shot.display === "dashboard")
        .map((shot) => absolute(shot.src)),
      featureList: [
        "Live download and upload speed in the Windows 11 taskbar",
        "Per-app data usage ranked by bytes",
        "Daily usage history with four ranges",
        "Weekday by hour usage heatmap",
        "Month-end usage forecast and optional monthly cap",
        "Dark and light themes",
        "Local-only operation with no account, sync or telemetry",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      author: { "@id": absolute("/#person") },
      publisher: { "@id": absolute("/#person") },
      isAccessibleForFree: true,
      inLanguage: "en",
    },
    {
      "@type": "FAQPage",
      "@id": absolute("/#faq"),
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": absolute("/#breadcrumb"),
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Data Monitor",
          item: site.url,
        },
      ],
    },
  ];

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
    /</g,
    "\\u003c"
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
