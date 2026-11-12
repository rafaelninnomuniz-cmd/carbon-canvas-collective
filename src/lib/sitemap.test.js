import { describe, expect, test } from "bun:test";
import { isSitemapRouteIncluded, sitemapXML } from "./sitemap";

describe("sitemap public page decisions", () => {
  test("excludes descendants of private sections", () => {
    const route = {
      isRoot: false,
      options: { staticData: { sitemap: true } },
      parentRoute: { options: { staticData: { sitemap: "exclude-subtree" } } },
    };
    expect(isSitemapRouteIncluded(route)).toBe(false);
  });

  test("uses the public domain and omits unauthoritative modification dates", () => {
    const xml = sitemapXML("https://ninnomuniz.com", [{ path: "/texgenera" }]);
    expect(xml).toContain("<loc>https://ninnomuniz.com/texgenera</loc>");
    expect(xml).not.toContain("<lastmod>");
  });

  test("rejects paths that could escape the public domain", () => {
    expect(() => sitemapXML("https://ninnomuniz.com", [{ path: "//other.example/" }])).toThrow("Invalid sitemap path");
  });
});