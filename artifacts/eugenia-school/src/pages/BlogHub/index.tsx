import { Link, useParams } from "wouter";
import { ArrowRight, Tag, Clock, User, RefreshCw } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { fetchArticlesFromSheet, blogCategories, BlogArticle } from "@/lib/googleSheets";

// Fallback articles if Google Sheets is not accessible
const fallbackArticles: BlogArticle[] = [
  {
    slug: "data-engineer-analyst-scientist",
    category: "actualites",
    categoryLabel: "Actualites",
    title: "Data Engineer, Data Analyst, Data Scientist : quelles differences ?",
    excerpt:
      "Trois metiers, trois profils. Tour d'horizon des competences, des salaires et des debouches pour chacun de ces roles cles dans les entreprises qui se transforment grace a la data.",
    author: "Eugenia School",
    date: "2026-03-15",
    image: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/684be468cd31c303843065c1_Data%20engi%2Canalyst%2Cscientis.png",
    readTime: 6,
  },
  {
    slug: "carrefour-links-hackathon",
    category: "business-deep-dives",
    categoryLabel: "Business Deep Dives",
    title: "Retour sur le Business Deep Dive Carrefour Links",
    excerpt:
      "Nos etudiants Bachelor ont travaille sur des donnees achats reelles de Carrefour Links pour concevoir des KPIs et automatiser des reportings. Recit de 3 semaines intensives.",
    author: "Eugenia School",
    date: "2026-02-20",
    image: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/683f0f281eaed1b019de2da2_carrefourlinks.png",
    readTime: 5,
  },
  {
    slug: "welcome-to-the-jungle-hackathon",
    category: "business-deep-dives",
    categoryLabel: "Business Deep Dives",
    title: "Hackathon Welcome to the Jungle : l'IA au service de l'experience collaborateur",
    excerpt:
      "Comment reinventer la vie au bureau grace a l'IA ? Nos equipes ont releve le defi lors d'un hackathon d'une journee organise par WTTJ.",
    author: "Eugenia School",
    date: "2026-02-10",
    image: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/68494eb4e1d0325098170560_wttj%20article.png",
    readTime: 4,
  },
  {
    slug: "methode-pedagogique-eugenia",
    category: "pedagogie",
    categoryLabel: "Pedagogie",
    title: "Notre methode pedagogique : apprendre en faisant",
    excerpt:
      "Decouvrez comment Eugenia School revolutionne l'apprentissage avec une approche 100% projet et immersion entreprise des le premier jour.",
    author: "Eugenia School",
    date: "2026-01-25",
    image: "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b/67ceef2e9b9745a770b55d80_Jonasrond.avif",
    readTime: 5,
  },
  {
    slug: "parcoursup-alternatives",
    category: "bachelor",
    categoryLabel: "Bachelor",
    title: "Parcoursup n'est pas une fin en soi : explorez d'autres voies",
    excerpt:
      "Ne pas etre accepte sur Parcoursup n'est pas un echec. Eugenia School, hors Parcoursup, accueille les profils atypiques et ambitieux.",
    author: "Eugenia School",
    date: "2026-01-15",
    image: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/6855251e1a14fcebb8a8aa2d_parcoursup%20n%27est%20pas%20une%20fin%20en%20soi%20%20explorez%20d%27autres%20voies%20vers%20la%20r%C3%A9ussite%20_page-0001.jpg",
    readTime: 6,
  },
  {
    slug: "creer-startup-ia-etudiant",
    category: "entrepreneuriat",
    categoryLabel: "Entrepreneuriat",
    title: "Creer sa startup IA en etant etudiant : le guide complet",
    excerpt:
      "De l'idee au MVP, decouvrez les etapes cles pour lancer votre projet entrepreneurial pendant vos etudes a Eugenia School.",
    author: "Eugenia School",
    date: "2026-01-10",
    image: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/681226ec395ef72acd5acbcc_top%205%20d%C3%A9bouch%C3%A9s.png",
    readTime: 8,
  },
  {
    slug: "msc-ia-business-debouches",
    category: "master",
    categoryLabel: "Master",
    title: "MSc IA & Business : les debouches apres le diplome",
    excerpt:
      "Data Analyst, Consultant IA, Growth Hacker... Decouvrez les carrieres qui s'ouvrent apres notre Master of Science en alternance.",
    author: "Eugenia School",
    date: "2025-12-20",
    image: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/683035c06b85d54663a65ee0_salesops.png",
    readTime: 5,
  },
];

export default function BlogHub() {
  const params = useParams<{ cat?: string }>();
  const activeCat = params?.cat || "";

  const { data: articles, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["blog-articles"],
    queryFn: fetchArticlesFromSheet,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: true,
  });

  const displayArticles = articles && articles.length > 0 ? articles : fallbackArticles;
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
