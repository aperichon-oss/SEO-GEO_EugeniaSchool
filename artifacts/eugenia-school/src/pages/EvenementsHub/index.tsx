import { Link } from "wouter";
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const evenements = [
  {
    slug: "journee-portes-ouvertes-decouverte",
    type: "Journée Portes Ouvertes",
    date: "4 Avril 2026",
    heure: "Toute la journée",
    lieu: "Paris — 10ème arrondissement",
    title: "Journée Portes Ouvertes & Découverte de l'IA",
    description:
      "Venez découvrir Eugenia School : visite des locaux, rencontre avec les équipes pédagogiques, témoignages étudiants et démonstrations IA en live.",
    tag: "JPO",
  },
  {
    slug: "job-dating",
    type: "Job Dating",
    date: "Biannuel",
    heure: "À définir",
    lieu: "Paris",
    title: "Job Datings",
    description:
      "Événements biannuels, mettant en relation les étudiants avec des entreprises partenaires pour des stages ou alternances.",
    tag: "Alternance",
  },
  {
    slug: "masterclasses",
    type: "Masterclass",
    date: "Régulier",
    heure: "À définir",
    lieu: "Campus Eugenia",
    title: "Masterclasses",
    description:
      "Animées par des entrepreneurs comme Marc Simoncini, elles offrent des perspectives sur les tendances actuelles et des histoires hors normes.",
    tag: "Inspiration",
  },
];

export default function EvenementsHub() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Événements | Eugenia School — JPO, Webinaires, Job Dating"
        description="Retrouvez tous les événements d'Eugenia School : Journées Portes Ouvertes, job datings alternance, webinaires IA. Inscrivez-vous gratuitement."
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
                { label: "Événements" },
              ]}
            />
            <div className="max-w-3xl mt-10">
              <div className="inline-block border border-[#2A2A2A] rounded-full px-4 py-1 text-xs font-bold tracking-widest uppercase mb-6 text-[#9E9E9E]">
                Événements
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Rencontrez <span className="text-[#FF6B2B]">Eugenia School</span>
              </h1>
              <p className="text-lg text-[#9E9E9E] leading-relaxed">
                JPO, job datings alternance, webinaires, masterclasses… Participez à nos événements pour découvrir l'école, rencontrer nos équipes et nos entreprises partenaires.
              </p>
            </div>
          </div>
        </div>

        {/* EVENTS LIST */}
        <section className="py-20 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-6">
              {evenements.map((evt) => (
                <div
                  key={evt.slug}
                  className="bg-white rounded-2xl border border-[#E8E4DF] p-8 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="inline-block bg-[#FF6B2B] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          {evt.tag}
                        </span>
                        <span className="text-sm text-[#5C5C5C] font-medium">{evt.type}</span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-extrabold text-[#0A0A0A] mb-3">{evt.title}</h2>
                      <p className="text-[#5C5C5C] leading-relaxed mb-5">{evt.description}</p>
                      <div className="flex flex-wrap gap-5 text-sm text-[#5C5C5C]">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#FF6B2B]" />
                          {evt.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#FF6B2B]" />
                          {evt.heure}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#FF6B2B]" />
                          {evt.lieu}
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Link
                        href={`/evenements/${evt.slug}`}
                        className="inline-flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#FF6B2B] text-white px-6 py-3 rounded-full font-bold text-sm transition-colors group"
                      >
                        S'inscrire
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER CTA */}
        <section className="py-16 bg-[#0A0A0A] text-white text-center">
          <div className="container mx-auto px-6 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
              Ne manquez aucun événement
            </h2>
            <p className="text-[#9E9E9E] mb-8">
              Recevez les invitations en avant-première directement dans votre boîte mail.
            </p>
            <Link
              href="/candidature"
              className="inline-flex items-center gap-2 bg-[#FF6B2B] hover:bg-[#E5521A] text-white px-8 py-4 rounded-full font-bold transition-colors"
            >
              S'inscrire aux événements <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
