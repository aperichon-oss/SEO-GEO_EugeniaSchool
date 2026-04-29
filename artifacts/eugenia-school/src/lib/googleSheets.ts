// Google Sheets integration for dynamic blog content
// Sheet ID: 1r-CJP3PEefS9YBZbk9d4lbGoSPcRdTGPAS09c_CiN_Y

const SHEET_ID = "1r-CJP3PEefS9YBZbk9d4lbGoSPcRdTGPAS09c_CiN_Y";

// Categories for blog articles
export const blogCategories = [
  { label: "Tous", slug: "" },
  { label: "Actualités", slug: "actualites" },
  { label: "Business Deep Dives", slug: "business-deep-dives" },
  { label: "Pédagogie", slug: "pedagogie" },
  { label: "Bachelor", slug: "bachelor" },
  { label: "Entrepreneuriat", slug: "entrepreneuriat" },
  { label: "Master", slug: "master" },
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
}

// Function to convert Google Sheets URL to CSV export URL
function getSheetCsvUrl(sheetId: string, gid: string = "0"): string {
  return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
}

// Parse CSV data
function parseCsv(csv: string): string[][] {
  const lines = csv.split("\n");
  const result: string[][] = [];
  
  for (const line of lines) {
    const row: string[] = [];
    let current = "";
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === "," && !inQuotes) {
        row.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    row.push(current.trim());
    result.push(row);
  }
  
  return result;
}

// Map category slug to label
function getCategoryLabel(slug: string): string {
  const category = blogCategories.find((c) => c.slug === slug);
  return category?.label || slug;
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

// Fetch articles from Google Sheets
export async function fetchArticlesFromSheet(): Promise<BlogArticle[]> {
  try {
    const url = getSheetCsvUrl(SHEET_ID);
    const response = await fetch(url, {
      cache: "no-store", // Always fetch fresh data
    });
    
    if (!response.ok) {
      console.error("[v0] Failed to fetch Google Sheet:", response.status);
      return [];
    }
    
    const csv = await response.text();
    const rows = parseCsv(csv);
    
    // Skip header row
    if (rows.length <= 1) return [];
    
    const articles: BlogArticle[] = [];
    
    // Expected columns: Title, Category, Excerpt, Author, Date, Image URL, Content (optional)
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (!row[0] || row[0].trim() === "") continue; // Skip empty rows
      
      const title = row[0]?.trim() || "";
      const category = row[1]?.trim().toLowerCase().replace(/\s+/g, "-") || "actualites";
      const excerpt = row[2]?.trim() || "";
      const author = row[3]?.trim() || "Eugenia School";
      const date = row[4]?.trim() || new Date().toISOString().split("T")[0];
      const image = row[5]?.trim() || "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/684be468cd31c303843065c1_Data%20engi%2Canalyst%2Cscientis.png";
      const content = row[6]?.trim() || "";
      
      articles.push({
        slug: generateSlug(title),
        title,
        category,
        categoryLabel: getCategoryLabel(category),
        excerpt,
        content,
        author,
        date,
        image,
        readTime: Math.ceil((content.length || excerpt.length) / 1000) + 3,
      });
    }
    
    // Sort by date (newest first)
    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return articles;
  } catch (error) {
    console.error("[v0] Error fetching articles from Google Sheet:", error);
    return [];
  }
}

// Hook-friendly function to use with SWR/React Query
export function getArticlesFetcher() {
  return fetchArticlesFromSheet;
}
