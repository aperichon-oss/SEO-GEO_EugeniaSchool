import { Link, useParams } from "wouter";
import { ArrowRight, Tag, Clock, User, RefreshCw } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { fetchArticlesFromSheet, blogCategories, BlogArticle } from "@/lib/googleSheets";
import { blogPosts } from "@/lib/data";

// Convert static blogPosts to BlogArticle format
const staticArticles: BlogArticle[] = blogPosts.map(post => ({
  slug: post.slug,
  category: post.category,
  categoryLabel: post.categoryLabel,
  title: post.title,
  excerpt: post.excerpt,
  author: post.author,
  date: post.date,
  image: post.image || "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b/67ceef2e9b9745a770b55d80_Jonasrond.avif",
  readTime: post.readTime,
}));

export default function BlogHub() {
  const params = useParams<{ cat?: string }>();
  const activeCat = params?.cat || "";

  const { data: articles, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["blog-articles"],
    queryFn: fetchArticlesFromSheet,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: true,
  });

  // Combine Google Sheets articles with static articles, avoiding duplicates
  const sheetArticles = articles || [];
  const allSlugs = new Set(sheetArticles.map(a => a.slug));
  const uniqueStaticArticles = staticArticles.filter(a => !allSlugs.has(a.slug));
  const displayArticles = [...sheetArticles, ...uniqueStaticArticles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const filtered = activeCat ? displayArticles.filter((a) => a.category === activeCat) : displayArticles;

  const activeCategoryLabel = blogCategories.find((c) => c.slug === activeCat)?.label || "Tous";

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title={`Blog${activeCat ? ` - ${activeCategoryLabel}` : ""} | Eugenia School — IA, Business, Pedagogie`}
        description="Le blog d'Eugenia School : actualites IA, Business Deep Dives, pedagogie innovante, conseils Bachelor et Master pour les futurs leaders de la transformation digitale."
      />
      <AnnouncementBar />
      <Navigation />

      <main className="flex-1">
        {/* HERO */}
        <div className="bg-[#0A0A0A] text-white pt-12 pb-20">
          <div className="container mx-auto px-6">
            <Breadcrumb
              items={[
                { label: "Accueil", href: "/" },
                { label: "Blog" },
                ...(activeCat ? [{ label: activeCategoryLabel }] : []),
              ]}
            />
            <div className="max-w-3xl mt-10">
              <div className="inline-block border border-[#2A2A2A] rounded-full px-4 py-1 text-xs font-bold tracking-widest uppercase mb-6 text-[#9E9E9E]">
                Blog
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Actualites, conseils <span className="text-[#8B2346]">et inspiration</span>
              </h1>
              <p className="text-lg text-[#9E9E9E] leading-relaxed">
                IA, data, business, pedagogie — retrouvez toute l'actualite d'Eugenia School et des ressources pratiques pour construire votre carriere dans un monde en mutation.
              </p>
            </div>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="bg-white border-b border-[#E8E4DF] sticky top-20 z-30">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between py-4">
              <div className="flex gap-2 overflow-x-auto scrollbar-none">
                {blogCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={cat.slug ? `/blog/categorie/${cat.slug}` : "/blog"}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                      activeCat === cat.slug
                        ? "bg-[#0A0A0A] text-white"
                        : "bg-[#F5F2EE] text-[#5C5C5C] hover:bg-[#E8E4DF] hover:text-[#0A0A0A]"
                    }`}
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
              <button
                onClick={() => refetch()}
                disabled={isFetching}
                className="flex-shrink-0 ml-4 p-2 rounded-full bg-[#F5F2EE] text-[#5C5C5C] hover:bg-[#E8E4DF] transition-colors disabled:opacity-50"
                title="Actualiser les articles"
              >
                <RefreshCw className={`w-4 h-4 ${isFetching ? "animate-spin" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* ARTICLES GRID */}
        <section className="py-16 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            {/* Loading State */}
            {isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse border border-[#E8E4DF]">
                    <div className="aspect-[16/9] bg-gray-200" />
                    <div className="p-6 space-y-4">
                      <div className="h-4 bg-gray-200 rounded w-1/4" />
                      <div className="h-6 bg-gray-200 rounded w-3/4" />
                      <div className="h-4 bg-gray-200 rounded w-full" />
                      <div className="h-4 bg-gray-200 rounded w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No Articles */}
            {!isLoading && filtered.length === 0 && (
              <div className="text-center py-20 text-[#5C5C5C]">
                <p className="text-lg mb-4">Aucun article dans cette categorie pour l'instant.</p>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[#8B2346] hover:text-[#6B1A35] font-semibold"
                >
                  Voir tous les articles
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}

            {/* Articles */}
            {!isLoading && filtered.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-[#E8E4DF] hover:shadow-md transition-shadow flex flex-col"
                  >
                    <div className="aspect-[16/9] bg-[#E8E4DF] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#F5E6EA] text-[#8B2346]">
                          <Tag className="w-3 h-3" />
                          {article.categoryLabel}
                        </span>
                      </div>
                      <h2 className="text-base font-extrabold text-[#0A0A0A] leading-snug mb-3 group-hover:text-[#8B2346] transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-sm text-[#5C5C5C] leading-relaxed flex-1 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-[#9E9E9E] mt-4 pt-4 border-t border-[#E8E4DF]">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {article.author}
                          </span>
                          {article.readTime && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {article.readTime} min
                            </span>
                          )}
                        </div>
                        <span>{new Date(article.date).toLocaleDateString("fr-FR", { month: "short", year: "numeric" })}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-5 text-sm font-bold text-[#0A0A0A] group-hover:text-[#8B2346] transition-colors">
                        Lire l'article <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Data Source Info */}
            {!isLoading && articles && articles.length > 0 && (
              <div className="mt-8 text-center text-xs text-[#9E9E9E]">
                Articles charges dynamiquement depuis Google Sheets • Derniere mise a jour automatique
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
