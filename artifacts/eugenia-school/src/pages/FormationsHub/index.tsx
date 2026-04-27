import { Link } from "wouter";
import { ArrowRight, Clock, MapPin, GraduationCap, Building2 } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const programmes = [
  {
    slug: "bachelor",
    href: "/programme/bachelor",
    badge: "Post-Bac",
    title: "Bachelor AI Applied to Business (Hors Parcoursup)",
    subtitle: "3 ans · Temps plein · Paris",
    description:
      "Un curriculum innovant qui allie business et data analyse, combinant une approche pratique et axée sur l'industrie avec des business deep dives et des projets réels, soutenus par un réseau entrepreneurial et corporatif solide.",
    tags: ["Hors Parcoursup", "Paris", "3 ans", "Projets réels"],
    img: "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b/67c86f147d0f83207d19c6df_nicoreflechit.avif",
  },
  {
    slug: "msc",
    href: "/programme/msc",
    badge: "Bac+3",
    title: "Master of Science AI Applied to Business (Hors MonMaster)",
    subtitle: "2 ans · Alternance · Paris",
    description:
      "Une formation exigeante qui combine expertise en data, compétences business et projets concrets, avec une immersion professionnelle en alternance pour préparer aux enjeux du monde professionnel.",
    tags: ["Hors MonMaster", "Alternance", "Paris", "2 ans"],
    img: "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b/67c87baaa27585a856816f89_noahdevant%202.avif",
  },
];

export default function FormationsHub() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Nos Formations | Eugenia School — Bachelor & MSc IA et Business"
        description="Découvrez nos programmes Bachelor AI Applied to Business (3 ans) et MSc AI Applied to Business (2 ans en alternance) en double diplôme avec Grenoble École de Management."
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
                { label: "Formations" },
              ]}
            />
            <div className="max-w-3xl mt-10">
              <div className="inline-block border border-[#2A2A2A] rounded-full px-4 py-1 text-xs font-bold tracking-widest uppercase mb-6 text-[#9E9E9E]">
                Nos Programmes
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Des formations au cœur de <span className="text-[#FF6B2B]">l'IA et du Business</span>
              </h1>
              <p className="text-lg text-[#9E9E9E] leading-relaxed">
                Eugenia School propose deux programmes phares — Bachelor et MSc — tous deux hors Parcoursup/MonMaster, en double diplôme avec Grenoble École de Management (Top 10 mondial).
              </p>
            </div>
          </div>
        </div>

        {/* PROGRAMMES LIST */}
        <section className="py-20 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-8">
              {programmes.map((prog) => (
                <div
                  key={prog.slug}
                  className="bg-white rounded-3xl overflow-hidden border border-[#E8E4DF] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-10 flex flex-col justify-between">
                      <div>
                        <div className="inline-block bg-[#F5F2EE] text-[#0A0A0A] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                          {prog.badge}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A0A0A] mb-2">
                          {prog.title}
                        </h2>
                        <div className="flex items-center gap-2 text-sm text-[#5C5C5C] font-medium mb-5">
                          <Clock className="w-4 h-4" />
                          {prog.subtitle}
                        </div>
                        <p className="text-[#5C5C5C] leading-relaxed mb-8">{prog.description}</p>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {prog.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="text-xs font-semibold text-[#0A0A0A] bg-[#F5F2EE] border border-[#E8E4DF] px-3 py-1.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link
                        href={prog.href}
                        className="inline-flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#FF6B2B] text-white px-7 py-3.5 rounded-full font-bold text-sm transition-colors group w-fit"
                      >
                        Découvrir le programme
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                    <div className="relative min-h-[260px] lg:min-h-0 bg-[#E8E4DF] overflow-hidden">
                      <img
                        src={prog.img}
                        alt={prog.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOUBLE DIPLOME BAND */}
        <section className="py-16 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <GraduationCap className="w-10 h-10 text-[#FF6B2B]" />
              <div>
                <div className="text-sm font-bold text-[#9E9E9E] uppercase tracking-wider mb-1">Double Diplôme</div>
                <div className="text-2xl font-extrabold">Grenoble École de Management</div>
                <div className="text-[#9E9E9E]">Top 10 mondial · Accréditations AACSB, EQUIS, AMBA</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-[#FF6B2B]" />
              <div>
                <div className="text-sm font-bold text-[#9E9E9E] uppercase tracking-wider mb-1">Campus</div>
                <div className="text-xl font-extrabold">Paris & Lyon</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Building2 className="w-8 h-8 text-[#FF6B2B]" />
              <div>
                <div className="text-sm font-bold text-[#9E9E9E] uppercase tracking-wider mb-1">Partenaires</div>
                <div className="text-xl font-extrabold">150+ entreprises</div>
              </div>
            </div>
            <Link
              href="/candidature"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FF6B2B] hover:bg-[#E5521A] text-white px-7 py-3.5 rounded-full font-bold transition-colors group"
            >
              Candidater
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
