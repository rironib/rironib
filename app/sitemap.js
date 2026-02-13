export default async function sitemap() {
  const baseUrl = "https://rironib.vercel.app";

  // Base routes
  const routes = ["", "/about", "/projects", "/skills", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.8,
    }),
  );

  return [...routes];
}
