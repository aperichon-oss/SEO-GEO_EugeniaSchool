import { Link } from "wouter";
import { ArrowRight, Users, Music, Code, Briefcase, Heart, Trophy, Camera, Mic } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const CDN = "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b";

const associations = [
  {
    name: "BDE Eugenia",
    description: "Le Bureau des Étudiants organise la vie associative et les événements festifs de l'école : soirées, week-ends d'intégration, galas.",
    icon: Users,
    color: "bg-[#8B2346]",
    members: 12,
    events: "20+ événements / an"
  },
  {
    name: "Eugenia Tech",
    description: "L'association tech organise des hackathons internes, des workshops de code et des projets open source entre étudiants.",
    icon: Code,
    color: "bg-blue-500",
    members: 15,
    events: "10+ workshops / an"
  },
  {
    name: "Junior Eugenia",
    description: "Notre junior entreprise permet aux étudiants de réaliser des missions data et IA pour de vrais clients, encadrés par des professionnels.",
    icon: Briefcase,
    color: "bg-[#FCBA35]",
    members: 8,
    events: "30+ missions / an"
  },
  {
    name: "Eugenia Solidaire",
    description: "L'association solidaire organise des actions humanitaires, des collectes et du mentorat pour des étudiants de lycées défavorisés.",
    icon: Heart,
    color: "bg-pink-500",
    members: 10,
    events: "15+ actions / an"
  },
  {
    name: "Eugenia Sports",
    description: "L'association sportive organise des tournois inter-promos, des sessions sport et représente l'école dans les compétitions inter-écoles.",
    icon: Trophy,
    color: "bg-green-500",
    members: 8,
    events: "Entraînements hebdo"
  }
];

const testimonials = [
  {
    quote: "Rejoindre le BDE m'a permis de développer des compétences en gestion de projet et en leadership que je n'aurais jamais acquises en cours.",
    author: "Marie L.",
    role: "Présidente BDE 2024",
    image: `${CDN}/67ceecb5b6bd0e19228ec3c9_Imanerond.avif`
  },
  {
    quote: "Junior Eugenia m'a donné ma première expérience professionnelle concrète. J'ai pu travailler sur des projets data pour de vraies startups !",
    author: "Thomas M.",
    role: "Directeur de mission, Junior Eugenia",
    image: `${CDN}/67ceef2e9b9745a770b55d80_Jonasrond.avif`
  }
];

export default function Associations() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Associations Étudiantes | Eugenia School - BDE, Junior Entreprise, Clubs"
        description="Découvrez les associations étudiantes d'Eugenia School : BDE, Junior Entreprise, clubs tech et solidaires. Engagez-vous et développez vos compétences au-delà des cours."
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
                { label: "Étudiants", href: "/etudiants" },
                { label: "Associations" }
              ]}
            />
            <div className="max-w-4xl mx-auto text-center mt-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Associations Étudiantes
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                S'engager dans une association, c'est développer des compétences uniques : 
                leadership, gestion de projet, travail en équipe. Chez Eugenia, la vie associative 
                est au coeur de l'expérience étudiante.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                  <span className="text-[#FCBA35] font-bold">5</span>
                  <span className="text-gray-300 ml-2">associations</span>
                </div>
                <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                  <span className="text-[#FCBA35] font-bold">50+</span>
                  <span className="text-gray-300 ml-2">membres actifs</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ASSOCIATIONS LIST */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Nos associations</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                  Trouvez votre engagement
                </h2>
              </div>

              <div className="space-y-6">
                {associations.map((asso) => (
                  <div key={asso.name} className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className={`w-16 h-16 ${asso.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <asso.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{asso.name}</h3>
                        <p className="text-gray-600 mb-4">{asso.description}</p>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Users className="w-4 h-4" />
                            <span>{asso.members} membres</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Trophy className="w-4 h-4" />
                            <span>{asso.events}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Témoignages</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                  Ils se sont engagés
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.author} className="bg-white p-8 rounded-2xl shadow-sm">
                    <div className="text-4xl text-[#8B2346] mb-4">"</div>
                    <blockquote className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* JOIN */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comment rejoindre une association ?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Les campagnes de recrutement ont lieu en début d'année scolaire. 
                Tous les étudiants d'Eugenia peuvent postuler, quel que soit leur niveau.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-[#8B2346] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Forum des assos</h3>
                  <p className="text-gray-600 text-sm">Rencontrez les associations lors du forum de rentrée</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-[#8B2346] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Candidature</h3>
                  <p className="text-gray-600 text-sm">Déposez votre candidature pour le poste qui vous intéresse</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-[#8B2346] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Intégration</h3>
                  <p className="text-gray-600 text-sm">Bienvenue dans l'équipe ! Formation et passation assurées</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#8B2346] to-[#6B1A35] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Envie de vous engager ?</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Rejoignez Eugenia School et participez à la vie associative dès votre rentrée.
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
                href="/etudiants"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#8B2346] transition-colors duration-200"
              >
                Vie étudiante
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
