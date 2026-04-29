import { Link, useParams } from "wouter";
import { ArrowLeft, Tag, Calendar, Clock, User, RefreshCw } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { fetchArticlesFromSheet, BlogArticle } from "@/lib/googleSheets";
import { blogPosts } from "@/lib/data";

// Convert static blogPosts to a lookup map
const staticArticlesMap: Record<string, BlogArticle> = {};
blogPosts.forEach(post => {
  staticArticlesMap[post.slug] = {
    slug: post.slug,
    category: post.category,
    categoryLabel: post.categoryLabel,
    title: post.title,
    excerpt: post.excerpt,
    author: post.author,
    date: post.date,
    image: post.image || "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b/67ceef2e9b9745a770b55d80_Jonasrond.avif",
    readTime: post.readTime,
    content: post.excerpt, // Use excerpt as content for static articles
  };
});

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug || "";

  const { data: articles, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["blog-articles"],
    queryFn: fetchArticlesFromSheet,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
  });

  // Find article from Google Sheets or fallback to static
  const dynamicArticle = articles?.find((a) => a.slug === slug);
  const article = dynamicArticle || staticArticlesMap[slug];

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col font-sans">
        <AnnouncementBar />
        <Navigation />
        <main className="flex-1 flex items-center justify-center py-32 bg-[#F5F2EE]">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-[#8B2346] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-[#5C5C5C]">Chargement de l'article...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col font-sans">
        <AnnouncementBar />
        <Navigation />
        <main className="flex-1 flex items-center justify-center py-32 bg-[#F5F2EE]">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-[#0A0A0A] mb-4">Article introuvable</h1>
            <p className="text-[#5C5C5C] mb-8">Cet article n'existe pas ou a ete deplace.</p>
            <Link href="/blog" className="inline-flex items-center gap-2 bg-[#8B2346] text-white px-6 py-3 rounded-full font-bold">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(article.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title={`${article.title} | Blog Eugenia School`}
        description={article.excerpt}
      />
      <AnnouncementBar />
      <Navigation />

      <main className="flex-1">
        <div className="bg-[#0A0A0A] text-white pt-12 pb-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <Breadcrumb
              items={[
                { label: "Accueil", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: article.title },
              ]}
            />
            <div className="mt-10 flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#8B2346]" />
                <span className="text-sm font-bold text-[#8B2346]">{article.categoryLabel}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#9E9E9E]">
                <Calendar className="w-4 h-4" /> {formattedDate}
              </div>
              {article.readTime && (
                <div className="flex items-center gap-2 text-sm text-[#9E9E9E]">
                  <Clock className="w-4 h-4" /> {article.readTime} min de lecture
                </div>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{article.title}</h1>
            
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-[#9E9E9E]">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <button
                onClick={() => refetch()}
                disabled={isFetching}
                className="flex items-center gap-1 text-xs text-[#9E9E9E] hover:text-white transition-colors"
              >
                <RefreshCw className={`w-3 h-3 ${isFetching ? 'animate-spin' : ''}`} />
                Actualiser
              </button>
            </div>
          </div>
        </div>

        <article className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-[#E8E4DF] mb-12">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Meta description / Excerpt */}
            {article.excerpt && (
              <p className="text-xl text-[#5C5C5C] leading-relaxed mb-8 font-medium italic border-l-4 border-[#8B2346] pl-6">
                {article.excerpt}
              </p>
            )}
            
            {/* Markdown Content */}
            <div className="prose prose-lg max-w-none text-[#3A3A3A] leading-relaxed
              prose-headings:font-bold prose-headings:text-[#0A0A0A]
              prose-h1:text-3xl prose-h1:mt-12 prose-h1:mb-6
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:mb-6 prose-p:leading-relaxed
              prose-strong:text-[#0A0A0A] prose-strong:font-bold
              prose-a:text-[#8B2346] prose-a:no-underline hover:prose-a:underline
              prose-ul:my-6 prose-ul:pl-6 prose-li:mb-2
              prose-ol:my-6 prose-ol:pl-6
              prose-blockquote:border-l-4 prose-blockquote:border-[#8B2346] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#5C5C5C]
              prose-code:bg-[#F5F2EE] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-[#0A0A0A] prose-pre:text-white prose-pre:rounded-xl prose-pre:p-6
              prose-hr:my-12 prose-hr:border-[#E8E4DF]
              prose-img:rounded-xl prose-img:my-8
            ">
              <ReactMarkdown>
                {article.content || article.excerpt}
              </ReactMarkdown>
            </div>

            <div className="mt-16 pt-10 border-t border-[#E8E4DF] flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#5C5C5C] hover:text-[#0A0A0A] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Retour au blog
              </Link>
              <Link
                href="/candidature"
                className="inline-flex items-center gap-2 bg-[#8B2346] hover:bg-[#6B1A35] text-white px-5 py-2.5 rounded-full font-bold text-sm transition-colors"
              >
                Candidater a Eugenia School
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
