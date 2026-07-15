import { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { PAGE_META } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(PAGE_META).map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/admision" ? 0.9 : 0.6,
  }));
}
