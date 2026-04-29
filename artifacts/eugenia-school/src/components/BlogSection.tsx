import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Tag, Clock, User } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchArticlesFromSheet, blogCategories, BlogArticle } from "@/lib/googleSheets";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

// Fallback articles if Google Sheets is not accessible
const fallbackArticles: BlogArticle[] = [
  {
    slug: "ia-generative-entreprises-usages-2026",
    title: "IA generative en entreprise : 7 usages concrets en 2026",
    category: "actualites",
    categoryLabel: "Actualites",
    excerpt: "De la generation de contenu a l'automatisation des process, decouvrez comment les entreprises utilisent reellement l'IA generative.",
    author: "Eugenia School",
    date: "2026-02-05",
    image: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/684be468cd31c303843065c1_Data%20engi%2Canalyst%2Cscientis.png",
    readTime: 6,
  },
  {
    slug: "business-deep-dive-carrefour-links",
    title: "Retour sur le Business Deep Dive Carrefour Links",
    category: "business-deep-dives",
    categoryLabel: "Business Deep Dives",
    excerpt: "Nos etudiants Bachelor ont travaille sur des donnees achats reelles de Carrefour Links pour concevoir des KPIs et automatiser des reportings.",
    author: "Eugenia School",
    date: "2026-01-20",
    image: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/683f0f281eaed1b019de2da2_carrefourlinks.png",
    readTime: 5,
  },
  {
    slug: "methode-pedagogique-eugenia-school",
    title: "Notre methode pedagogique : apprendre en faisant",
    category: "pedagogie",
    categoryLabel: "Pedagogie",
    excerpt: "Decouvrez comment Eugenia School revolutionne l'apprentissage avec une approche 100% projet et immersion entreprise.",
    author: "Eugenia School",
    date: "2026-01-15",
    image: "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b/67ceef2e9b9745a770b55d80_Jonasrond.avif",
    readTime: 4,
  },
];

interface BlogSectionProps {
  limit?: number;
  showCategories?: boolean;
  title?: string;
  subtitle?: string;
}

export function BlogSection({ 
  limit = 3, 
  showCategories = false,
  title = "Dernieres actualites",
  subtitle = "Restez informes des dernieres nouvelles d'Eugenia School, de nos hackathons et de l'actualite IA & Business."
}: BlogSectionProps) {
  const { data: articles, isLoading, error } = useQuery({
    queryKey: ["blog-articles"],
    queryFn: fetchArticlesFromSheet,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: true,
  });

  const displayArticles = (articles && articles.length > 0 ? articles : fallbackArticles).slice(0, limit);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Categories Filter (optional) */}
        {showCategories && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {blogCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.slug ? `/blog/categorie/${cat.slug}` : "/blog"}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-white text-gray-700 hover:bg-[#8B2346] hover:text-white transition-colors border border-gray-200"
              >
                {cat.label}
              </Link>
            ))}
          </motion.div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse">
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

        {/* Articles Grid */}
        {!isLoading && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                variants={fadeIn}
              >
                <Link
                  href={`/blog/${article.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
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
                    <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#8B2346] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1 line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
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
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#8B2346] hover:bg-[#6B1A35] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            Voir tous les articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
