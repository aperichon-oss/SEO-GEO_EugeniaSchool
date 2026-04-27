import { Link } from "wouter";
import { ArrowRight, Rocket, Users, Calendar, Trophy, Briefcase, Heart } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { hackathons, entreprisesPartenaires } from "@/lib/data";

const CDN = "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b";

const sections = [
  {
    href: "/vie-etudiante/geniathons",
    icon: Rocket,
    title: "Géniathons",
    description: "Des hackathons intensifs avec des entreprises partenaires : Doctolib, Carrefour, Malt, Spendesk... 3 jours pour résoudre de vrais cas business avec l'IA.",
  },
  {
    href: "/vie-etudiante/evenements",
    icon: Calendar,
    title: "Événements",
    description: "Conférences, masterclasses, afterworks... Une programmation riche pour découvrir les métiers de demain et networker avec des professionnels.",
  },
  {
    href: "/vie-etudiante/associations",
    icon: Users,
    title: "Associations",
    description: "BDE, Junior-Entreprise, clubs tech... Rejoignez une communauté active et développez vos soft skills en dehors des cours.",
  },
];

export default function VieEtudianteHub() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Vie Étudiante | Eugenia School - Hackathons, Événements, Associations"
        description="Découvrez la vie étudiante chez Eugenia School : Géniathons avec des entreprises leaders, événements networking, associations et communauté engagée."
      />
      <AnnouncementBar />
      <Navigation />

      <main className="flex-1">
        {/* HERO */}
        <div className="bg-[#0A0A0A] text-white pt-12 pb-24 border-b border-[#2A2A2A]">
          <div className="container mx-auto px-6">
            <Breadcrumb
              items={[
                { label: "Accueil", href: "/" },
                { label: "Vie étudiante" }
              ]}
            />
            <div className="max-w-4xl mt-8">
              <div className="inline-block bg-[#8B2346] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
                Communauté
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
                Vie <span className="text-[#8B2346]">Étudiante</span>
              </h1>
              <p className="text-lg text-[#9E9E9E] leading-relaxed max-w-2xl">
                Une expérience unique qui va au-delà des cours. Hackathons avec des entreprises leaders, événements exclusifs et une communauté soudée de futurs game changers.
              </p>
            </div>
          </div>
        </div>

        {/* GENIATHONS HIGHLIGHT */}
        <section className="py-24 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-2 text-[#8B2346] font-semibold text-sm mb-4">
                    <Rocket className="w-4 h-4" />
                    Nos hackathons
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6">
                    Les Géniathons
                  </h2>
                  <p className="text-[#5C5C5C] leading-relaxed mb-6">
                    L'essence même d'Eugenia School. Des immersions intensives de 3 jours avec des entreprises partenaires pour résoudre de vrais cas business avec l'IA et la data.
                  </p>
                  <p className="text-[#5C5C5C] leading-relaxed mb-8">
                    Chaque Géniathon se conclut par un pitch devant les équipes de l'entreprise. Une expérience formatrice qui développe vos compétences techniques et votre capacité à travailler sous pression.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {hackathons.slice(0, 4).map((h) => (
                      <span
                        key={h.slug}
                        className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-[#0A0A0A] border border-[#E0DDD8]"
                      >
                        {h.company}
                      </span>
                    ))}
                    <span className="bg-[#8B2346] px-4 py-2 rounded-full text-sm font-semibold text-white">
                      +{hackathons.length - 4} autres
                    </span>
                  </div>

                  <Link
                    href="/vie-etudiante/geniathons"
                    className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-6 py-3 rounded-full font-bold hover:bg-[#8B2346] transition-colors"
                  >
                    Découvrir les Géniathons
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="relative">
                  <img
                    src={`${CDN}/67cef31a7a8473a14c17f172_jobdatingeleves.avif`}
                    alt="Étudiants en hackathon"
                    className="rounded-2xl shadow-xl w-full"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-[#0A0A0A] text-white p-6 rounded-xl shadow-lg">
                    <p className="text-3xl font-bold text-[#8B2346]">{hackathons.length}+</p>
                    <p className="text-[#9E9E9E] text-sm">Géniathons par an</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-16 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-[#8B2346] mb-2">150+</p>
                  <p className="text-[#9E9E9E]">Entreprises partenaires</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-[#8B2346] mb-2">20+</p>
                  <p className="text-[#9E9E9E]">Événements par an</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-[#8B2346] mb-2">95%</p>
                  <p className="text-[#9E9E9E]">Taux de satisfaction</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-[#8B2346] mb-2">6</p>
                  <p className="text-[#9E9E9E]">Associations actives</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTIONS GRID */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                  Une vie de campus riche
                </h2>
                <p className="text-[#5C5C5C] text-lg max-w-2xl mx-auto">
                  Bien plus qu'une école, Eugenia est une communauté où chaque moment compte.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {sections.map((section) => (
                  <Link
                    key={section.href}
                    href={section.href}
                    className="group bg-[#F5F2EE] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-[#8B2346] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A0A0A] mb-3 group-hover:text-[#8B2346] transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-[#5C5C5C] mb-6">{section.description}</p>
                    <div className="flex items-center text-[#8B2346] font-semibold">
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ENTREPRISES PARTENAIRES */}
        <section className="py-24 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">
                  Ils accueillent nos étudiants
                </h2>
                <p className="text-[#5C5C5C]">
                  Des entreprises leaders qui font confiance à Eugenia School.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {entreprisesPartenaires.map((entreprise, index) => (
                  <div
                    key={index}
                    className="bg-white px-6 py-4 rounded-xl border border-[#E0DDD8] font-semibold text-[#0A0A0A]"
                  >
                    {entreprise}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rejoignez l'aventure Eugenia
            </h2>
            <p className="text-[#9E9E9E] text-lg mb-8 max-w-2xl mx-auto">
              Intégrez une communauté de passionnés et développez vos compétences avec les meilleures entreprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions/candidature"
                className="inline-flex items-center gap-2 bg-[#8B2346] text-white px-8 py-4 rounded-full font-bold hover:bg-[#6B1A35] transition-colors"
              >
                Candidater maintenant
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/admissions/portes-ouvertes"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0A0A0A] transition-colors"
              >
                Journées portes ouvertes
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
