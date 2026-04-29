// Google Sheets integration for dynamic blog content
// Sheet ID: 1r-CJP3PEefS9YBZbk9d4lbGoSPcRdTGPAS09c_CiN_Y

import { blogPosts as staticBlogPosts } from "./data";

const SHEET_ID = "1r-CJP3PEefS9YBZbk9d4lbGoSPcRdTGPAS09c_CiN_Y";

// Categories for blog articles - matching eugeniaschool.com
export const blogCategories = [
  { label: "Tous", slug: "" },
  { label: "Actualites", slug: "actualites" },
  { label: "Business Deep Dives", slug: "business-deep-dives" },
  { label: "Pedagogie", slug: "pedagogie" },
  { label: "Bachelor", slug: "bachelor" },
  { label: "Master", slug: "master" },
  { label: "Entrepreneuriat", slug: "entrepreneuriat" },
];

export interface BlogArticle {
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  image: string;
  readTime?: number;
  glossary?: GlossaryTerm[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  sourceArticle?: string;
  sourceSlug?: string;
}

// Function to convert Google Sheets URL to CSV export URL
function getSheetCsvUrl(sheetId: string, gid: string = "0"): string {
  return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
}

// Parse CSV data with proper handling of quoted fields and newlines
function parseCsv(csv: string): string[][] {
  const result: string[][] = [];
  let current = "";
  let inQuotes = false;
  let row: string[] = [];

  for (let i = 0; i < csv.length; i++) {
    const char = csv[i];
    const nextChar = csv[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      row.push(current.trim());
      current = "";
    } else if ((char === "\n" || (char === "\r" && nextChar === "\n")) && !inQuotes) {
      row.push(current.trim());
      if (row.some(cell => cell !== "")) {
        result.push(row);
      }
      row = [];
      current = "";
      if (char === "\r") i++;
    } else if (char !== "\r") {
      current += char;
    }
  }

  // Don't forget the last row
  if (current || row.length > 0) {
    row.push(current.trim());
    if (row.some(cell => cell !== "")) {
      result.push(row);
    }
  }

  return result;
}

// Map category slug to label
function getCategoryLabel(slug: string): string {
  const category = blogCategories.find((c) => c.slug === slug);
  return category?.label || slug;
}

// Normalize category string to slug - matching eugeniaschool.com categories
function normalizeCategory(cat: string): string {
  if (!cat) return "actualites";

  const normalized = cat
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  // Map common variations to official categories
  if (normalized.includes("actualite")) return "actualites";
  if (normalized.includes("pedagog")) return "pedagogie";
  if (normalized.includes("bachelor")) return "bachelor";
  if (normalized.includes("stage") || normalized.includes("alternance")) return "stages-alternances";
  if (normalized.includes("bien") || normalized.includes("etre") || normalized.includes("wellness")) return "bien-etre";
  if (normalized.includes("stmg")) return "stmg";
  if (normalized.includes("entrepreneur")) return "entrepreneuriat";

  return normalized.replace(/\s+/g, "-");
}

// Generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Find column index by name (case-insensitive, partial match)
function findColumnIndex(headers: string[], ...possibleNames: string[]): number {
  for (const name of possibleNames) {
    const index = headers.findIndex(h =>
      h.toLowerCase().includes(name.toLowerCase())
    );
    if (index !== -1) return index;
  }
  return -1;
}

// Extract glossary terms from markdown content
// Expects format:
// ## Le Glossaire Eugenia
// ### IA generative (Generative AI)
// Definition text. Exemple business : example text.
// ### Autre terme
// Definition...
function extractGlossary(content: string, articleTitle: string, articleSlug: string): GlossaryTerm[] {
  const glossaryTerms: GlossaryTerm[] = [];

  // Find glossary section - supports "## Glossaire", "## Le Glossaire Eugenia", etc.
  // Capture everything after the glossary header until end of content or next ## (not ###)
  const glossaryMatch = content.match(/##\s*(?:Le\s+)?Glossaire(?:\s+Eugenia)?\s*\n([\s\S]*?)(?=\n##\s+[^#]|$)/i);
  if (!glossaryMatch) return glossaryTerms;

  const glossarySection = glossaryMatch[1];

  // Find all ### headers and their content
  // Regex to match ### followed by term, then everything until next ### or end
  const termRegex = /###\s+([^\n]+)\n([\s\S]*?)(?=\n###|$)/g;
  let match;

  while ((match = termRegex.exec(glossarySection)) !== null) {
    const termLine = match[1]?.trim();
    const definition = match[2]?.trim();

    if (!termLine) continue;

    // Extract term - keep full term including parenthetical for display
    // e.g., "IA generative (Generative AI)" stays as "IA generative (Generative AI)"
    const term = termLine;

    if (term && definition) {
      glossaryTerms.push({
        term,
        definition,
        sourceArticle: articleTitle,
        sourceSlug: articleSlug
      });
    }
  }

  return glossaryTerms;
}

// Convert static blog posts to BlogArticle format
function convertStaticPosts(): BlogArticle[] {
  return staticBlogPosts.map(post => ({
    slug: post.slug,
    title: post.title,
    category: post.category,
    categoryLabel: post.categoryLabel,
    excerpt: post.excerpt,
    content: "", // Static posts don't have full content
    author: post.author,
    date: post.date,
    image: post.image || "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/684be468cd31c303843065c1_Data%20engi%2Canalyst%2Cscientis.png",
    readTime: post.readTime,
    glossary: []
  }));
}

// Fetch articles from Google Sheets
export async function fetchArticlesFromSheet(): Promise<BlogArticle[]> {
  try {
    const url = getSheetCsvUrl(SHEET_ID);
    const response = await fetch(url, {
      cache: "no-store", // Always fetch fresh data
    });

    if (!response.ok) {
      console.error("[v0] Failed to fetch Google Sheet:", response.status);
      // Return static posts if Google Sheets fails
      return convertStaticPosts();
    }

    const csv = await response.text();
    const rows = parseCsv(csv);

    // Need at least header + 1 data row
    if (rows.length <= 1) {
      return convertStaticPosts();
    }

    const headers = rows[0].map(h => h.toLowerCase().trim());

    // Find column indices based on expected column names
    // Expected: Titles, meta description, contenu, categorie (optional), author (optional), date (optional), image (optional)
    const titleIdx = findColumnIndex(headers, "titles", "title", "titre");
    const metaDescIdx = findColumnIndex(headers, "meta description", "description", "excerpt");
    const contentIdx = findColumnIndex(headers, "contenu", "content", "article");
    const categoryIdx = findColumnIndex(headers, "categorie", "category", "cat");
    const authorIdx = findColumnIndex(headers, "author", "auteur");
    const dateIdx = findColumnIndex(headers, "date", "publication");
    const imageIdx = findColumnIndex(headers, "image", "img", "photo");

    if (titleIdx === -1) {
      console.error("[v0] Could not find 'Titles' column in Google Sheet");
      return convertStaticPosts();
    }

    const articles: BlogArticle[] = [];

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const title = row[titleIdx]?.trim() || "";

      if (!title) continue; // Skip empty rows

      const metaDescription = metaDescIdx !== -1 ? row[metaDescIdx]?.trim() || "" : "";
      const content = contentIdx !== -1 ? row[contentIdx]?.trim() || "" : "";
      const categoryRaw = categoryIdx !== -1 ? row[categoryIdx]?.trim() || "" : "";
      const author = authorIdx !== -1 ? row[authorIdx]?.trim() || "Eugenia School" : "Eugenia School";
      const date = dateIdx !== -1 ? row[dateIdx]?.trim() || new Date().toISOString().split("T")[0] : new Date().toISOString().split("T")[0];
      const image = imageIdx !== -1 && row[imageIdx]?.trim()
        ? row[imageIdx].trim()
        : "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/684be468cd31c303843065c1_Data%20engi%2Canalyst%2Cscientis.png";

      // Determine category
      const category = normalizeCategory(categoryRaw);
      const slug = generateSlug(title);

      // Extract glossary terms from content
      const glossary = extractGlossary(content, title, slug);

      // Calculate read time based on content length (average 200 words per minute)
      const wordCount = content.split(/\s+/).length;
      const readTime = Math.max(3, Math.ceil(wordCount / 200));

      articles.push({
        slug,
        title,
        category,
        categoryLabel: getCategoryLabel(category),
        excerpt: metaDescription,
        content,
        author,
        date,
        image,
        readTime,
        glossary
      });
    }

    // Combine with static posts (avoiding duplicates by slug)
    const staticPosts = convertStaticPosts();
    const allSlugs = new Set(articles.map(a => a.slug));

    for (const staticPost of staticPosts) {
      if (!allSlugs.has(staticPost.slug)) {
        articles.push(staticPost);
      }
    }

    // Sort by date (newest first)
    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return articles;
  } catch (error) {
    console.error("[v0] Error fetching articles from Google Sheet:", error);
    return convertStaticPosts();
  }
}

// Extract all unique glossary terms from all articles
export async function fetchAllGlossaryTerms(): Promise<GlossaryTerm[]> {
  const articles = await fetchArticlesFromSheet();
  const termsMap = new Map<string, GlossaryTerm>();

  for (const article of articles) {
    if (article.glossary) {
      for (const term of article.glossary) {
        const normalizedTerm = term.term.toLowerCase().trim();
        // Only add if not already present (avoid duplicates)
        if (!termsMap.has(normalizedTerm)) {
          termsMap.set(normalizedTerm, term);
        }
      }
    }
  }

  // Sort alphabetically
  const terms = Array.from(termsMap.values());
  terms.sort((a, b) => a.term.localeCompare(b.term, 'fr'));

  return terms;
}

// Hook-friendly function to use with SWR/React Query
export function getArticlesFetcher() {
  return fetchArticlesFromSheet;
}

export function getGlossaryFetcher() {
  return fetchAllGlossaryTerms;
}
