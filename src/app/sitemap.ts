import type { MetadataRoute } from "next";

const baseUrl = "https://parla-gruppe.de";

const routes = [
  "",
  "/leistungen",
  "/leistungen/gebaeudereinigung",
  "/leistungen/hausmeisterservice",
  "/leistungen/entruempelung",
  "/leistungen/umzugsservice",
  "/unternehmen",
  "/kontakt",
  "/impressum",
  "/datenschutz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
