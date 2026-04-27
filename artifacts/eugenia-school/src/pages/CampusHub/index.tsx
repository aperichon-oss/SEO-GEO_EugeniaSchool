import { Link } from "wouter";
import { ArrowRight, MapPin, Building, Clock, Train, Coffee, Wifi, Users } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const CDN = "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b";

const campusFeatures = [
  { icon: Wifi, title: "WiFi haut débit", description: "Connexion fibre dans tous les espaces" },
  { icon: Coffee, title: "Espace détente", description: "Cafétéria et coin repos" },
  { icon: Users, title: "Salles de projet", description: "Espaces collaboratifs dédiés" },
  { icon: Building, title: "Équipements tech", description: "Matériel dernière génération" },
];

export default function CampusHub() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Campus Paris | Eugenia School - École IA & Business"
        description="Découvrez le campus parisien d'Eugenia School au coeur de Paris. Un environnement moderne et stimulant pour apprendre l'IA appliquée au business."
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
                { label: "Campus" }
              ]}
            />
            <div className="max-w-4xl mt-8">
              <div className="inline-block bg-[#8B2346] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
                Paris
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
                Notre <span className="text-[#8B2346]">Campus</span>
              </h1>
              <p className="text-lg text-[#9E9E9E] leading-relaxed max-w-2xl">
                Un espace moderne au coeur de Paris, conçu pour favoriser l'apprentissage, la collaboration et l'innovation. Rejoignez une communauté dynamique d'étudiants passionnés par l'IA et le business.
              </p>
            </div>
          </div>
        </div>

        {/* PARIS CAMPUS */}
        <section className="py-24 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-2 text-[#8B2346] font-semibold text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    Campus principal
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6">
                    Campus Paris
                  </h2>
                  <p className="text-[#5C5C5C] leading-relaxed mb-6">
                    Notre campus parisien est situé au coeur de la capitale, à proximité des grands centres d'affaires et des hubs technologiques. Un emplacement stratégique pour se connecter à l'écosystème startup et entreprise.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Building className="w-5 h-5 text-[#8B2346] mt-1" />
                      <div>
                        <p className="font-semibold text-[#0A0A0A]">Adresse</p>
                        <p className="text-[#5C5C5C]">46 Rue de l'Arbre Sec, 75001 Paris</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Train className="w-5 h-5 text-[#8B2346] mt-1" />
                      <div>
                        <p className="font-semibold text-[#0A0A0A]">Accès</p>
                        <p className="text-[#5C5C5C]">Métro Louvre-Rivoli (L1) - Châtelet (L1, L4, L7, L11, L14)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#8B2346] mt-1" />
                      <div>
                        <p className="font-semibold text-[#0A0A0A]">Horaires</p>
                        <p className="text-[#5C5C5C]">Lundi - Vendredi : 8h30 - 19h00</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/campus/paris"
                    className="inline-flex items-center gap-2 bg-[#8B2346] text-white px-6 py-3 rounded-full font-bold hover:bg-[#6B1A35] transition-colors"
                  >
                    Découvrir le campus Paris
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="relative">
                  <img
                    src={`${CDN}/67cef144527828430f670191_nicosouriant.avif`}
                    alt="Campus Paris Eugenia School"
                    className="rounded-2xl shadow-xl w-full"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                    <p className="text-3xl font-bold text-[#8B2346]">500m²</p>
                    <p className="text-[#5C5C5C] text-sm">d'espaces d'apprentissage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                  Des espaces pensés pour l'apprentissage
                </h2>
                <p className="text-[#5C5C5C] text-lg max-w-2xl mx-auto">
                  Un environnement moderne équipé des dernières technologies pour vous accompagner dans votre formation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {campusFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-[#F5F2EE] p-6 rounded-2xl hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-[#8B2346] rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0A0A0A] mb-2">{feature.title}</h3>
                    <p className="text-[#5C5C5C] text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-24 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A0A0A] mb-12 text-center">
                Visite virtuelle
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 md:row-span-2">
                  <img
                    src={`${CDN}/67cef31a7a8473a14c17f172_jobdatingeleves.avif`}
                    alt="Espace principal du campus"
                    className="rounded-2xl w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <img
                    src={`${CDN}/67c8273d4075557b2a85fad1_Noahquiparle-p-1080.avif`}
                    alt="Salle de conférence"
                    className="rounded-2xl w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <img
                    src={`${CDN}/67cef144527828430f670191_nicosouriant.avif`}
                    alt="Espace de travail collaboratif"
                    className="rounded-2xl w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Venez nous rencontrer</h2>
            <p className="text-[#9E9E9E] text-lg mb-8 max-w-2xl mx-auto">
              Participez à nos journées portes ouvertes pour découvrir le campus, rencontrer l'équipe pédagogique et échanger avec nos étudiants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions/portes-ouvertes"
                className="inline-flex items-center gap-2 bg-[#8B2346] text-white px-8 py-4 rounded-full font-bold hover:bg-[#6B1A35] transition-colors"
              >
                Réserver une visite
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0A0A0A] transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
