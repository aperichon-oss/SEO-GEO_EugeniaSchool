import { Link } from "wouter";
import { ArrowRight, Newspaper, Download, Mail, Calendar, ExternalLink, FileText } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const CDN = "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b";

const pressReleases = [
  {
    title: "Eugenia School ouvre un nouveau campus à Lyon",
    date: "15 janvier 2025",
    excerpt: "L'école de business et d'IA Eugenia School annonce l'ouverture de son deuxième campus à Lyon pour la rentrée 2025.",
    type: "Communiqué"
  },
  {
    title: "Partenariat stratégique avec Mistral AI",
    date: "12 décembre 2024",
    excerpt: "Eugenia School et Mistral AI s'associent pour former les étudiants aux dernières avancées en IA générative.",
    type: "Communiqué"
  },
  {
    title: "100% d'insertion professionnelle pour la promotion 2024",
    date: "28 novembre 2024",
    excerpt: "La promotion MSc 2024 affiche un taux d'insertion professionnelle de 100% dans les 6 mois suivant le diplôme.",
    type: "Communiqué"
  },
  {
    title: "Lancement du Bachelor IA & Business",
    date: "15 septembre 2024",
    excerpt: "Eugenia School lance un nouveau programme Bachelor en 3 ans, accessible post-bac et hors Parcoursup.",
    type: "Communiqué"
  }
];

const mediaAppearances = [
  {
    title: "L'éducation face au défi de l'IA : le modèle Eugenia",
    media: "Les Echos",
    date: "Février 2025",
    link: "#"
  },
  {
    title: "Ces écoles qui forment aux métiers de demain",
    media: "Le Figaro Étudiant",
    date: "Janvier 2025",
    link: "#"
  },
  {
    title: "Interview : comment intégrer l'IA dans l'enseignement",
    media: "BFM Business",
    date: "Décembre 2024",
    link: "#"
  },
  {
    title: "Top 10 des écoles innovantes en France",
    media: "Challenges",
    date: "Novembre 2024",
    link: "#"
  }
];

const keyFacts = [
  { label: "Année de création", value: "2022" },
  { label: "Étudiants", value: "150+" },
  { label: "Campus", value: "Paris, Lyon (2025)" },
  { label: "Entreprises partenaires", value: "150+" },
  { label: "Taux d'insertion", value: "100%" },
  { label: "Salaire moyen sortie", value: "45K€" }
];

export default function Presse() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Espace Presse | Eugenia School - Communiqués et Ressources Médias"
        description="Espace presse d'Eugenia School : communiqués de presse, kit média, chiffres clés et contact presse. Retrouvez toutes les ressources pour les journalistes."
      />
      <AnnouncementBar />
      <Navigation />

      <main className="flex-1">
        {/* HERO */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-12 pb-20">
          <div className="container mx-auto px-6">
            <Breadcrumb
              items={[
                { label: "Accueil", href: "/" },
                { label: "Presse" }
              ]}
            />
            <div className="max-w-4xl mx-auto text-center mt-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Espace Presse
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Retrouvez tous nos communiqués de presse, ressources médias et informations 
                pour les journalistes. Notre équipe communication est à votre disposition.
              </p>
              <a
                href="mailto:presse@eugenia-school.com"
                className="inline-flex items-center gap-2 bg-[#8B2346] hover:bg-[#6B1A35] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact presse
              </a>
            </div>
          </div>
        </section>

        {/* KEY FACTS */}
        <section className="py-12 bg-[#8B2346]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center text-white">
              {keyFacts.map((fact) => (
                <div key={fact.label}>
                  <div className="text-2xl md:text-3xl font-bold mb-1">{fact.value}</div>
                  <p className="text-pink-100 text-sm">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRESS RELEASES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Actualités</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                  Communiqués de presse
                </h2>
              </div>

              <div className="space-y-6">
                {pressReleases.map((release) => (
                  <div key={release.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <span className="text-xs bg-[#8B2346]/10 text-[#8B2346] px-3 py-1 rounded-full font-medium">
                          {release.type}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">{release.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{release.excerpt}</p>
                        <p className="text-gray-400 text-sm flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {release.date}
                        </p>
                      </div>
                      <button className="inline-flex items-center gap-2 text-[#8B2346] hover:text-[#6B1A35] font-semibold whitespace-nowrap">
                        <Download className="w-4 h-4" />
                        Télécharger
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MEDIA APPEARANCES */}
        <section className="py-20 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Revue de presse</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                  Ils parlent de nous
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {mediaAppearances.map((appearance) => (
                  <a
                    key={appearance.title}
                    href={appearance.link}
                    className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow duration-200 group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[#8B2346] font-semibold text-sm">{appearance.media}</span>
                        <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2 group-hover:text-[#8B2346] transition-colors">
                          {appearance.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{appearance.date}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#8B2346] transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MEDIA KIT */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-20 h-20 bg-[#8B2346] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-10 h-10" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Kit média</h3>
                    <p className="text-gray-300 mb-4">
                      Téléchargez notre kit média complet : logos, photos, chiffres clés et présentation de l'école.
                    </p>
                    <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      <Download className="w-5 h-5" />
                      Télécharger le kit média
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT PRESSE */}
        <section className="py-20 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Newspaper className="w-12 h-12 text-[#8B2346] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Contact presse
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Pour toute demande d'interview, d'information ou de partenariat média, 
                notre équipe communication est à votre disposition.
              </p>
              <div className="bg-white rounded-xl p-8 shadow-sm inline-block">
                <p className="font-semibold text-gray-900 mb-1">Service Communication</p>
                <a href="mailto:presse@eugenia-school.com" className="text-[#8B2346] hover:text-[#6B1A35] font-medium">
                  presse@eugenia-school.com
                </a>
                <p className="text-gray-500 text-sm mt-2">Réponse sous 24h</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#8B2346] to-[#6B1A35] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Découvrez Eugenia School</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Visitez notre campus et rencontrez notre équipe pour mieux comprendre notre approche unique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ecole"
                className="inline-flex items-center gap-2 bg-white text-[#8B2346] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Découvrir l'école
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#8B2346] transition-colors duration-200"
              >
                Nous contacter
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
