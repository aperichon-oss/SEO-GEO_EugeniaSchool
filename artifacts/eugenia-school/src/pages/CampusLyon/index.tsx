import { Link } from "wouter";
import { ArrowRight, MapPin, Building, Clock, Train, Coffee, Wifi, Users, Monitor, BookOpen, Sparkles } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const CDN = "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b";

const facilities = [
  { icon: Monitor, title: "Salles de cours équipées", description: "6 salles avec équipements dernière génération" },
  { icon: Users, title: "Espaces collaboratifs", description: "2 salles de projet dédiées au travail en équipe" },
  { icon: Wifi, title: "Connexion fibre", description: "WiFi haut débit dans tous les espaces" },
  { icon: Coffee, title: "Espace détente", description: "Cafétéria moderne avec vue sur le Rhône" },
];

const nearbyPlaces = [
  { name: "Place Bellecour", distance: "10 min à pied" },
  { name: "Gare Part-Dieu", distance: "15 min en métro" },
  { name: "Confluence", distance: "12 min en tram" },
  { name: "H7 (Station F Lyon)", distance: "8 min à pied" },
];

export default function CampusLyon() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Campus Lyon | Eugenia School - Nouveau Campus 2025"
        description="Découvrez le nouveau campus lyonnais d'Eugenia School, ouverture prévue en septembre 2025. Un campus moderne au coeur de Lyon, capitale de la French Tech."
      />
      <AnnouncementBar />
      <Navigation />

      <main className="flex-1">
        {/* HERO */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-12 pb-24">
          <div className="container mx-auto px-6">
            <Breadcrumb
              items={[
                { label: "Accueil", href: "/" },
                { label: "Campus", href: "/campus" },
                { label: "Lyon" }
              ]}
            />
            <div className="max-w-4xl mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 text-[#8B2346] font-semibold text-sm">
                  <MapPin className="w-4 h-4" />
                  Lyon - Presqu'île
                </div>
                <span className="bg-[#FCBA35] text-black text-xs font-bold px-3 py-1 rounded-full">
                  NOUVEAU 2025
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Campus Lyon
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Eugenia School ouvre son deuxième campus à Lyon, capitale de la French Tech. 
                Un nouveau chapitre pour former les talents de demain au coeur de l'écosystème lyonnais.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                  <span className="text-2xl font-bold text-[#FCBA35]">300m²</span>
                  <span className="text-gray-300 ml-2">d'espaces</span>
                </div>
                <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                  <span className="text-2xl font-bold text-[#FCBA35]">75</span>
                  <span className="text-gray-300 ml-2">places</span>
                </div>
                <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                  <span className="text-2xl font-bold text-[#FCBA35]">Sept. 2025</span>
                  <span className="text-gray-300 ml-2">ouverture</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANNOUNCEMENT */}
        <section className="py-12 bg-[#FCBA35]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Sparkles className="w-10 h-10 text-black" />
                <div>
                  <h3 className="text-xl font-bold text-black">Ouverture Septembre 2025</h3>
                  <p className="text-black/80">Les inscriptions sont ouvertes pour la première promotion lyonnaise !</p>
                </div>
              </div>
              <Link
                href="/candidature"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Candidater
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Localisation</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                    Au coeur de Lyon
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Notre campus lyonnais sera situé dans le quartier de la Presqu'île, entre Rhône et Saône. 
                    Un emplacement idéal pour profiter de l'écosystème tech lyonnais en pleine expansion.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#F5E6EA] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-[#8B2346]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Adresse</p>
                        <p className="text-gray-600">Quartier Presqu'île<br />69002 Lyon, France</p>
                        <p className="text-sm text-[#8B2346] mt-1">Adresse exacte communiquée prochainement</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#F5E6EA] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Train className="w-6 h-6 text-[#8B2346]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Transports</p>
                        <p className="text-gray-600">
                          Métro A (Bellecour, Cordeliers)<br />
                          Tram T1, T2 (Perrache, Part-Dieu)<br />
                          TGV Paris-Lyon : 2h
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#F5E6EA] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-[#8B2346]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Horaires prévus</p>
                        <p className="text-gray-600">
                          Lundi - Vendredi : 8h30 - 19h00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={`${CDN}/67cef144527828430f670191_nicosouriant.avif`}
                    alt="Aperçu du futur campus Lyon"
                    className="rounded-2xl shadow-xl w-full"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-[#8B2346] text-white p-6 rounded-xl shadow-lg">
                    <p className="text-3xl font-bold">2025</p>
                    <p className="text-sm">Première promotion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY LYON */}
        <section className="py-20 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <img
                    src={`${CDN}/67cef31a7a8473a14c17f172_jobdatingeleves.avif`}
                    alt="Écosystème tech Lyon"
                    className="rounded-2xl shadow-xl w-full"
                    loading="lazy"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Pourquoi Lyon</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                    La capitale de la French Tech
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Lyon est devenue en quelques années l'un des hubs tech les plus dynamiques de France. 
                    Avec plus de 2 000 startups et scale-ups, la métropole offre un écosystème idéal 
                    pour les futurs professionnels de la data et de l'IA.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#8B2346] rounded-full"></div>
                      <span className="text-gray-700">H7, incubateur de Station F à Lyon</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#8B2346] rounded-full"></div>
                      <span className="text-gray-700">Pôle de compétitivité en santé et biotech</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#8B2346] rounded-full"></div>
                      <span className="text-gray-700">Grandes entreprises (Sanofi, Renault Trucks, April)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#8B2346] rounded-full"></div>
                      <span className="text-gray-700">Qualité de vie exceptionnelle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FACILITIES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Équipements prévus</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Un campus à la hauteur de nos ambitions
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {facilities.map((facility) => (
                  <div key={facility.title} className="bg-[#F5F2EE] p-6 rounded-xl">
                    <div className="w-12 h-12 bg-[#8B2346] rounded-lg flex items-center justify-center mb-4">
                      <facility.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{facility.title}</h3>
                    <p className="text-gray-600 text-sm">{facility.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NEARBY */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">À proximité</h2>
                <p className="text-gray-400">Un quartier vivant au coeur de Lyon</p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {nearbyPlaces.map((place) => (
                  <div key={place.name} className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
                    <MapPin className="w-8 h-8 text-[#FCBA35] mx-auto mb-3" />
                    <h3 className="font-bold mb-1">{place.name}</h3>
                    <p className="text-gray-400 text-sm">{place.distance}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#8B2346] to-[#6B1A35] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Rejoignez la première promotion lyonnaise</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Les inscriptions sont ouvertes pour la rentrée de septembre 2025. 
              Ne manquez pas cette opportunité unique !
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
                href="/campus/paris"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#8B2346] transition-colors duration-200"
              >
                Découvrir le campus Paris
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
