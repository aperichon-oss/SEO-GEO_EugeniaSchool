import { Link, useParams } from "wouter";
import { ArrowLeft, Tag, Calendar } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const articles: Record<
  string,
  {
    title: string;
    catLabel: string;
    date: string;
    img: string;
    content: string;
  }
> = {
  "data-engineer-analyst-scientist": {
    title: "Data Engineer, Data Analyst, Data Scientist : quelles différences ?",
    catLabel: "IA et Data",
    date: "Mai 2025",
    img: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/684be468cd31c303843065c1_Data%20engi%2Canalyst%2Cscientis.png",
    content: `Trois métiers, trois profils très différents — pourtant souvent confondus. Le **Data Engineer** construit et maintient les pipelines de données (ETL, entrepôts de données, infrastructures cloud). Le **Data Analyst** exploite ces données pour produire des insights business : tableaux de bord, rapports, KPIs. Le **Data Scientist** va plus loin en modélisant des phénomènes complexes à l'aide du machine learning et des algorithmes prédictifs.

Chez Eugenia School, nos programmes Bachelor et MSc forment aux trois profils, avec une spécialisation possible selon votre projet professionnel. Les Géniathons — projets intensifs avec nos entreprises partenaires (Carrefour, Doctolib, Spendesk…) — permettent de toucher à ces trois réalités métier en conditions réelles.`,
  },
  "parcoursup-pas-une-fin": {
    title: "Parcoursup n'est pas une fin en soi : explorez d'autres voies",
    catLabel: "Orientation",
    date: "Mars 2025",
    img: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/6855251e1a14fcebb8a8aa2d_parcoursup%20n%27est%20pas%20une%20fin%20en%20soi%20%20explorez%20d%27autres%20voies%20vers%20la%20r%C3%A9ussite%20_page-0001.jpg",
    content: `Chaque année, des milliers de lycéens se retrouvent sans affectation sur Parcoursup — ou avec une affectation qui ne leur correspond pas. C'est souvent vécu comme un échec, alors que c'est en réalité une opportunité de choisir une voie plus adaptée à ses ambitions.

Eugenia School est **hors Parcoursup**. Cela signifie que les candidatures sont possibles tout au long de l'année, sans dépendre d'un algorithme ou d'un classement. Le processus d'admission est basé sur la motivation, la curiosité et le potentiel — pas uniquement sur les notes du bac.

Notre Bachelor AI Applied to Business accueille des profils variés : bacheliers généraux, technologiques (STMG, STI2D), en reconversion, passionnés de tech, de business ou des deux. Ce qui compte, c'est votre ambition de construire une carrière à impact.`,
  },
};

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug || "";
  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col font-sans">
        <AnnouncementBar />
        <Navigation />
        <main className="flex-1 flex items-center justify-center py-32 bg-[#F5F2EE]">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-[#0A0A0A] mb-4">Article introuvable</h1>
            <p className="text-[#5C5C5C] mb-8">Cet article n'existe pas ou a été déplacé.</p>
            <Link href="/blog" className="inline-flex items-center gap-2 bg-[#8B2346] text-white px-6 py-3 rounded-full font-bold">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title={`${article.title} | Blog Eugenia School`}
        description={article.content.substring(0, 160).replace(/\*/g, "")}
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
                <span className="text-sm font-bold text-[#8B2346]">{article.catLabel}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#9E9E9E]">
                <Calendar className="w-4 h-4" /> {article.date}
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{article.title}</h1>
          </div>
        </div>

        <article className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-[#E8E4DF] mb-12">
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="prose prose-lg max-w-none text-[#3A3A3A] leading-relaxed">
              {article.content.split("\n\n").map((para, i) => (
                <p key={i} className="mb-6">
                  {para.split(/(\*\*[^*]+\*\*)/).map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={j} className="font-bold text-[#0A0A0A]">
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              ))}
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
                Candidater à Eugenia School
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
