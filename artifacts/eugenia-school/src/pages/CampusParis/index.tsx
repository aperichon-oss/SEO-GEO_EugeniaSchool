import { Link } from "wouter";
import { ArrowRight, MapPin, Building, Clock, Train, Coffee, Wifi, Users, Monitor, BookOpen, Utensils } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const CDN = "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b";

const facilities = [
  { icon: Monitor, title: "Salles de cours équipées", description: "10 salles avec vidéoprojecteurs HD et tableaux interactifs" },
  { icon: Users, title: "Espaces collaboratifs", description: "4 salles de projet pour le travail en équipe" },
  { icon: Wifi, title: "Connexion fibre", description: "WiFi haut débit dans tous les espaces" },
  { icon: Coffee, title: "Cafétéria", description: "Espace détente avec micro-ondes et distributeurs" },
  { icon: BookOpen, title: "Bibliothèque", description: "Ressources documentaires et espace calme" },
  { icon: Utensils, title: "Restaurants à proximité", description: "Nombreuses options de restauration autour du campus" },
];

const nearbyPlaces = [
  { name: "Le Louvre", distance: "5 min à pied" },
  { name: "Châtelet - Les Halles", distance: "7 min à pied" },
  { name: "Jardin des Tuileries", distance: "8 min à pied" },
  { name: "Station F", distance: "15 min en métro" },
];

export default function CampusParis() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Campus Paris | Eugenia School - Au coeur de la capitale"
        description="Découvrez le campus parisien d'Eugenia School au 46 rue de l'Arbre Sec, Paris 1er. Un emplacement privilégié au coeur de la capitale, à proximité des grands centres d'affaires."
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
                { label: "Paris" }
              ]}
            />
            <div className="max-w-4xl mt-8">
              <div className="flex items-center gap-2 text-[#8B2346] font-semibold text-sm mb-4">
                <MapPin className="w-4 h-4" />
                Paris 1er arrondissement
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Campus Paris
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Au coeur de la capitale, notre campus principal vous accueille dans un environnement
                moderne et stimulant, idéalement situé pour vous connecter à l'écosystème parisien.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                  <span className="text-2xl font-bold text-[#FCBA35]">500m²</span>
                  <span className="text-gray-300 ml-2">d'espaces</span>
                </div>
                <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                  <span className="text-2xl font-bold text-[#FCBA35]">150</span>
                  <span className="text-gray-300 ml-2">étudiants</span>
                </div>
                <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                  <span className="text-2xl font-bold text-[#FCBA35]">10</span>
                  <span className="text-gray-300 ml-2">salles de cours</span>
                </div>
              </div>
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
                    Un emplacement stratégique
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Notre campus est situé au 18 rue de Paradis, dans le 10ème arrondissement de Paris.
                    Un quartier dynamique au carrefour des mondes de la culture, des affaires et de l'innovation.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#F5E6EA] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-[#8B2346]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Adresse</p>
                        <p className="text-gray-600">18 rue de Paradis<br />75010 Paris, France</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#F5E6EA] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Train className="w-6 h-6 text-[#8B2346]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Transports</p>
                        <p className="text-gray-600">
                          Métro Chateaux D'Eau (Ligne 4) - 3 min<br />
                          Métro Gare de l'Est (Lignes 2, 4, 5, 7) - 5 min<br />
                          RER B, D, E (Gare de l'Est) - 5 min
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#F5E6EA] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-[#8B2346]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Horaires d'ouverture</p>
                        <p className="text-gray-600">
                          Lundi - Vendredi : 7h45 - 19h00<br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gray-200 rounded-2xl overflow-hidden aspect-square">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.1265096490497!2d2.3511356757981936!3d48.87486479954785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1317f46ef3%3A0x1880f11531ba7a37!2s18%20Rue%20de%20Paradis%2C%2075010%20Paris!5e0!3m2!1sen!2sfr!4v1777412351570!5m2!1sen!2sfr"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "400px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Carte du campus Paris"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FACILITIES */}
        <section className="py-20 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Équipements</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Des infrastructures modernes
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Tout ce dont vous avez besoin pour apprendre dans les meilleures conditions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {facilities.map((facility) => (
                  <div key={facility.title} className="bg-white p-6 rounded-xl shadow-sm">
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

        {/* GALLERY */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Visite virtuelle</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                  Découvrez nos espaces
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2 md:row-span-2">
                  <img
                    src={`${CDN}/67cef31a7a8473a14c17f172_jobdatingeleves.avif`}
                    alt="Grande salle de cours du campus Paris"
                    className="rounded-xl w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <img
                    src={`${CDN}/67cef144527828430f670191_nicosouriant.avif`}
                    alt="Espace de travail collaboratif"
                    className="rounded-xl w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <img
                    src={`${CDN}/67c8273d4075557b2a85fad1_Noahquiparle-p-1080.avif`}
                    alt="Salle de conférence"
                    className="rounded-xl w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
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
                <p className="text-gray-400">Un quartier vivant au coeur de Paris</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Venez visiter notre campus</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Participez à nos journées portes ouvertes pour découvrir le campus et rencontrer l'équipe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/evenements"
                className="inline-flex items-center gap-2 bg-white text-[#8B2346] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Voir les événements
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/campus/lyon"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#8B2346] transition-colors duration-200"
              >
                Découvrir le campus Lyon
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
