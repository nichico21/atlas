import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";

export interface CrawlResult {
  url: string;
  title: string | null;
  content: string;
  links: { url: string; text: string }[];
  fetchedAt: string;
}

export async function crawl(url: string): Promise<CrawlResult> {
  const response = await fetch(url, { headers: { "User-Agent": "AtlasBot/0.1 (+contact@finances.gouv.fr)" } });
  if (!response.ok) throw new Error(`Crawler: échec du fetch de ${url} (statut ${response.status})`);

  const html = await response.text();
  const dom = new JSDOM(html, { url });

  const links = Array.from(dom.window.document.querySelectorAll("a[href]"))
    .map((a) => ({
      url: new URL((a as HTMLAnchorElement).getAttribute("href")!, url).toString(),
      text: (a.textContent ?? "").trim()
    }))
    .filter((l) => l.text.length > 0);

  const reader = new Readability(dom.window.document.cloneNode(true) as Document);
  const article = reader.parse();

  return {
    url,
    title: article?.title ?? null,
    content: (article?.textContent ?? "").trim(),
    links,
    fetchedAt: new Date().toISOString()
  };
}