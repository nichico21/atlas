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

  const links: { url: string; text: string }[] = [];

for (const a of Array.from(dom.window.document.querySelectorAll("a[href]"))) {
  const href = (a as HTMLAnchorElement).getAttribute("href");
  const text = (a.textContent ?? "").trim();

  if (!href || text.length === 0) continue;

  try {
    links.push({ url: new URL(href, url).toString(), text });
  } catch {
    // Lien malformé (href invalide) — on l'ignore plutôt que de faire planter le crawl
    continue;
  }
}

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