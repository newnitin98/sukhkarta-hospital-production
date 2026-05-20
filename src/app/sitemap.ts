import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/doctors", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/doctors/dr-gunjan-r-dhundele", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/doctors/dr-tanu-dhundele", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/orthopaedic-care", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/cardiac-care", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/tmt-test", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/health-checkups", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/facilities", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/gallery", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/medical-disclaimer", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
