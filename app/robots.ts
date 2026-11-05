import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: `${SITE_CONFIG.siteUrl}/sitemap.xml`,
  };
}
