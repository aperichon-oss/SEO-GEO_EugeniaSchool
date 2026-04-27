import { Link, useParams } from "wouter";
import { ArrowRight, Tag } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const categories = [
  { label: "Tous", slug: "" },
  { label: "IA et Data", slug: "ia-et-data" },
  { label: "Business et Carrières", slug: "business-carrieres" },
  { label: "Vie Eugenia", slug: "vie-eugenia" },
  { label: "Orientation", slug: "orientation" },
  { label: "Entreprises", slug: "entreprises" },
];

const articles = [
  {
    slug: "data-engineer-analyst-scientist",
    cat: "ia-et-data",
    catLabel: "IA et Data",
    title: "Data Engineer, Data Analyst, Data Scientist : quelles différences ?",
    excerpt:
      "Trois métiers, trois profils. Tour d'horizon des compétences, des salaires et des débouchés pour chacun de ces rôles clés dans les entreprises qui se transforment grâce à la data.",
    date: "Mai 2025",
    img: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/684be468cd31c303843065c1_Data%20engi%2Canalyst%2Cscientis.png",
  },
  {
    slug: "carrefour-links-hackathon",
    cat: "entreprises",
    catLabel: "Entreprises",
    title: "Retour sur le Géniathon Carrefour Links",
    excerpt:
      "Nos étudiants MSc ont travaillé sur des données achats réelles de Carrefour Links pour concevoir des KPIs et automatiser des reportings. Récit d'une semaine intensive.",
    date: "Avril 2025",
    img: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/683f0f281eaed1b019de2da2_carrefourlinks.png",
  },
  {
    slug: "welcome-to-the-jungle-hackathon",
    cat: "entreprises",
    catLabel: "Entreprises",
    title: "Hackathon Welcome to the Jungle : l'IA au service de l'expérience collaborateur",
    excerpt:
      "Comment réinventer la vie au bureau grâce à l'IA ? Nos équipes ont relevé le défi lors d'un hackathon d'une journée organisé par WTTJ.",
    date: "Avril 2025",
    img: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/68494eb4e1d0325098170560_wttj%20article.png",
  },
  {
    slug: "parcoursup-pas-une-fin",
    cat: "orientation",
    catLabel: "Orientation",
    title: "Parcoursup n'est pas une fin en soi : explorez d'autres voies",
    excerpt:
      "Ne pas être accepté sur Parcoursup n'est pas un échec. Eugenia School, hors Parcoursup, accueille les profils atypiques et ambitieux qui veulent tracer leur propre chemin.",
    date: "Mars 2025",
    img: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/6855251e1a14fcebb8a8aa2d_parcoursup%20n%27est%20pas%20une%20fin%20en%20soi%20%20explorez%20d%27autres%20voies%20vers%20la%20r%C3%A9ussite%20_page-0001.jpg",
  },
  {
    slug: "sales-ops-metier",
    cat: "business-carrieres",
    catLabel: "Business et Carrières",
    title: "Sales Ops : le métier qui réunit data et performance commerciale",
    excerpt:
      "De plus en plus demandé par les scale-ups et grandes entreprises, le Sales Ops est un profil hybride qui optimise les processus de vente grâce à la data.",
    date: "Mars 2025",
    img: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/683035c06b85d54663a65ee0_salesops.png",
  },
  {
    slug: "top-5-debouches-ia-business",
    cat: "business-carrieres",
    catLabel: "Business et Carrières",
    title: "Top 5 des débouchés après une formation IA et Business",
    excerpt:
      "Quels métiers attendent les diplômés d'Eugenia School ? Salaires, perspectives et compétences clés pour chacun des 5 profils les plus demandés en 2025.",
    date: "Février 2025",
    img: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/681226ec395ef72acd5acbcc_top%205%20d%C3%A9bouch%C3%A9s.png",
  },
];

export default function BlogHub() {
  const params = useParams<{ cat?: string }>();
  const activeCat = params?.cat || "";
  const filtered = activeCat ? articles.filter((a) => a.cat === activeCat) : articles;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Blog | Eugenia School — IA, Business, Orientation et Métiers"
        description="Le blog d'Eugenia School : actualités IA, témoignages étudiants, guides métiers et conseils orientation pour les futurs leaders de la transformation digitale."
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
              ]}
            />
            <div className="max-w-3xl mt-10">
              <div className="inline-block border border-[#2A2A2A] rounded-full px-4 py-1 text-xs font-bold tracking-widest uppercase mb-6 text-[#9E9E9E]">
                Blog
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Actualités, conseils <span className="text-[#8B2346]">et inspiration</span>
              </h1>
              <p className="text-lg text-[#9E9E9E] leading-relaxed">
                IA, data, business, orientation — retrouvez toute l'actualité d'Eugenia School et des ressources pratiques pour construire votre carrière dans un monde en mutation.
              </p>
            </div>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="bg-white border-b border-[#E8E4DF] sticky top-20 z-30">
          <div className="container mx-auto px-6">
            <div className="flex gap-2 overflow-x-auto py-4 scrollbar-none">
              {categories.map((cat) => (
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
          </div>
        </div>

        {/* ARTICLES GRID */}
        <section className="py-16 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-[#5C5C5C]">Aucun article dans cette catégorie pour l'instant.</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-[#E8E4DF] hover:shadow-md transition-shadow flex flex-col"
                  >
                    <div className="aspect-[16/9] bg-[#E8E4DF] overflow-hidden">
                      <img
                        src={article.img}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-3.5 h-3.5 text-[#8B2346]" />
                        <span className="text-xs font-bold text-[#8B2346] uppercase tracking-wider">
                          {article.catLabel}
                        </span>
                        <span className="text-xs text-[#9E9E9E] ml-auto">{article.date}</span>
                      </div>
                      <h2 className="text-base font-extrabold text-[#0A0A0A] leading-snug mb-3 group-hover:text-[#8B2346] transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-sm text-[#5C5C5C] leading-relaxed flex-1 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-1.5 mt-5 text-sm font-bold text-[#0A0A0A] group-hover:text-[#8B2346] transition-colors">
                        Lire l'article <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
