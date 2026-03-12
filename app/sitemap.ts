import type { MetadataRoute } from "next";

const BASE_URL = "https://drsurabhinikam.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/conditions", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/conditions/ear", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/conditions/nose-sinus", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/conditions/throat-voice", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/conditions/allergy", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/conditions/skull-base-surgery", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/gallery", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/testimonials", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
  ];

  const blogSlugs = [
    "understanding-allergic-rhinitis",
    "fess-surgery-what-to-expect",
    "when-to-see-an-ent",
    "skull-base-surgery-what-you-should-know",
    "tinnitus-causes-diagnosis-management",
    "children-and-ent-common-issues",
  ];

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `/blog/${slug}`,
    priority: 0.6 as const,
    changeFrequency: "yearly" as const,
  }));

  return [...routes, ...blogRoutes].map((route) => ({
    url: `${BASE_URL}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
