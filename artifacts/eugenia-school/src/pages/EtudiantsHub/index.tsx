import { Link } from "wouter";
import { ArrowRight, Users, Calendar, Trophy, Heart, Zap, Music, Code, Briefcase } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const CDN = "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b";

const sections = [
  {
    href: "/hackathons",
    icon: Zap,
    title: "Géniathons",
    description: "Des hackathons avec les entreprises partenaires pour relever de vrais défis business.",
    color: "bg-[#FCBA35]"
  },
  {
    href: "/evenements",
    icon: Calendar,
    title: "Événements",
    description: "Conférences, job datings, afterworks... Une vie de campus riche et stimulante.",
    color: "bg-blue-500"
  },
  {
    href: "/associations",
    icon: Users,
    title: "Associations",
    description: "Rejoignez nos associations étudiantes et développez vos compétences extra-scolaires.",
    color: "bg-purple-500"
  },
  {
    href: "/temoignages",
    icon: Heart,
    title: "Témoignages",
    description: "Découvrez les parcours et retours d'expérience de nos étudiants et alumni.",
    color: "bg-[#8B2346]"
  }
];

const upcomingEvents = [
  {
    title: "Géniathon Doctolib",
    date: "15-17 Mars 2025",
    type: "Hackathon"
  },
  {
    title: "Job Dating Printemps",
    date: "22 Mars 2025",
    type: "Carrière"
  },
  {
    title: "Conférence IA & Santé",
    date: "28 Mars 2025",
    type: "Conférence"
  }
];

export default function EtudiantsHub() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Vie Étudiante | Eugenia School - Associations, Événements, Géniathons"
        description="Découvrez la vie étudiante à Eugenia School : associations, Géniathons avec les entreprises, événements, job datings et une communauté soudée d'étudiants passionnés par l'IA et le business."
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
                { label: "Étudiants" }
              ]}
            />
            <div className="max-w-4xl mx-auto text-center mt-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Vie Étudiante
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                À Eugenia, la vie étudiante ne s'arrête pas aux cours. 
                Rejoignez une communauté dynamique, participez à des événements uniques 
                et construisez des amitiés qui dureront toute une vie.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                  <span className="text-[#FCBA35] font-bold">10+</span>
                  <span className="text-gray-300 ml-2">Géniathons / an</span>
                </div>
                <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                  <span className="text-[#FCBA35] font-bold">5</span>
                  <span className="text-gray-300 ml-2">associations</span>
                </div>
                <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                  <span className="text-[#FCBA35] font-bold">50+</span>
                  <span className="text-gray-300 ml-2">événements / an</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTIONS GRID */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {sections.map((section) => (
                  <Link
                    key={section.href}
                    href={section.href}
                    className="group bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 ${section.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <section.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#8B2346] transition-colors duration-200">
                          {section.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{section.description}</p>
                        <span className="inline-flex items-center text-[#8B2346] font-semibold group-hover:translate-x-1 transition-transform duration-200">
                          Découvrir
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* UPCOMING EVENTS */}
        <section className="py-20 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                <div>
                  <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">À venir</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                    Prochains événements
                  </h2>
                </div>
                <Link
                  href="/evenements"
                  className="inline-flex items-center gap-2 text-[#8B2346] hover:text-[#6B1A35] font-semibold mt-4 md:mt-0"
                >
                  Voir tous les événements
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <div key={event.title} className="bg-white p-6 rounded-xl shadow-sm">
                    <span className="text-xs bg-[#8B2346]/10 text-[#8B2346] px-3 py-1 rounded-full font-medium">
                      {event.type}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">{event.title}</h3>
                    <p className="text-gray-500 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COMMUNITY */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Communauté</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                    Plus qu'une école, une famille
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    À Eugenia, nous cultivons un esprit de communauté fort. Les promotions sont à taille humaine, 
                    ce qui permet de créer des liens durables entre étudiants, mais aussi avec l'équipe pédagogique.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Nos alumni restent impliqués dans la vie de l'école : ils reviennent témoigner, 
                    participent aux jurys des Géniathons et accompagnent les nouvelles promotions.
                  </p>
                  <Link
                    href="/temoignages"
                    className="inline-flex items-center gap-2 text-[#8B2346] hover:text-[#6B1A35] font-semibold"
                  >
                    Lire les témoignages
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="relative">
                  <img
                    src={`${CDN}/67cef31a7a8473a14c17f172_jobdatingeleves.avif`}
                    alt="Communauté étudiante Eugenia"
                    className="rounded-2xl shadow-xl w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold text-[#FCBA35] mb-2">150+</div>
                  <p className="text-gray-300">étudiants actifs</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#FCBA35] mb-2">5</div>
                  <p className="text-gray-300">associations</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#FCBA35] mb-2">50+</div>
                  <p className="text-gray-300">événements par an</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#FCBA35] mb-2">200+</div>
                  <p className="text-gray-300">alumni</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#8B2346] to-[#6B1A35] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Rejoignez l'aventure Eugenia</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Vivez une expérience étudiante unique, entre innovation, communauté et professionnalisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/candidature"
                className="inline-flex items-center gap-2 bg-white text-[#8B2346] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Candidater
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/evenements"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#8B2346] transition-colors duration-200"
              >
                Voir les événements
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
