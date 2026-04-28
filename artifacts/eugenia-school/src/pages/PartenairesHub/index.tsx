import { Link } from "wouter";
import { ArrowRight, Building2, Users, Zap, Trophy, Handshake, Target, Mail } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { entreprisesPartenaires, partenaires } from "@/lib/data";

const CDN = "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b";
const CDN2 = "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6";

const enterpriseLogos = [
  { name: "Malt", src: `${CDN2}/67cb246c5daa2bc007702ab3_Logo_Malt.svg.avif` },
  { name: "Doctolib", src: `${CDN2}/67cb247f3461dabcab90cf9c_Doctolib_Logo.svg.avif` },
  { name: "Société Générale", src: `${CDN2}/67cb24a21a999d6f5e98e3dc_Societe-Generale-Logo-p-1080.png` },
  { name: "Capgemini", src: `${CDN2}/67cb24b5d81dc896192a40d5_Capgemini_Logo.svg-p-1080.png` },
  { name: "Snapchat", src: `${CDN2}/6839565ebdda0aa0e4896029_logo-snapchat-square-isole-fond-blanc_469489-1032.avif` },
  { name: "Google Cloud", src: `${CDN2}/6839568c7b547219daba506e_Google-Cloud-Logo-p-1080.png` },
  { name: "Air France", src: `${CDN2}/67cb24477df108c4c74dfde8_1CGYgfqgFEWqndoFundvBj.avif` },
  { name: "Carrefour", src: `${CDN2}/67ab8bfa02140c844924e255_Layer_1.avif` },
  { name: "Microsoft", src: `${CDN2}/67cb23150f1e4c7accc02ec2_Microsoft-logo_rgb_c-gray.avif` },
];

const partnerLogos = [
  { name: "Mistral AI", src: `${CDN2}/67c707198334428e0a03399b_Mistral_AI_logo.svg` },
  { name: "Station F", src: `${CDN2}/67b741dc8e76032550ef25db_Vector%20(17).svg` },
  { name: "Microsoft", src: `${CDN2}/67cb23150f1e4c7accc02ec2_Microsoft-logo_rgb_c-gray.avif` },
  { name: "HEC Incubateur", src: `${CDN2}/67c7082cc979be3b5d9b7545_623dc37ea476183fd863f7ae_Logo%20HEC%20Incubateur.svg` },
  { name: "Make", src: `${CDN2}/67cb233dfc56a6ac10ed8289_make-logo-freelogovectors.net_.avif` },
  { name: "Dataiku", src: `${CDN2}/67cb23a50966dc16ec0edca2_Dataiku_logo.avif` },
];

const partnershipTypes = [
  {
    icon: Zap,
    title: "Géniathons",
    description: "Proposez un cas business à nos étudiants et bénéficiez de solutions innovantes développées en hackathon.",
    benefits: ["Solutions créatives", "Vivier de talents", "Visibilité école"]
  },
  {
    icon: Users,
    title: "Alternance",
    description: "Recrutez nos étudiants en alternance pour le MSc et formez vos futurs collaborateurs.",
    benefits: ["Profils hybrides tech/business", "Formation adaptée", "Intégration progressive"]
  },
  {
    icon: Building2,
    title: "Stages",
    description: "Accueillez nos étudiants Bachelor en stage et bénéficiez de profils motivés et formés.",
    benefits: ["Missions courtes", "Profils polyvalents", "Pipeline de recrutement"]
  },
  {
    icon: Trophy,
    title: "Mécénat",
    description: "Soutenez l'école et participez à la formation des talents de demain.",
    benefits: ["Visibilité premium", "Bourses au nom de l'entreprise", "Accès prioritaire aux talents"]
  }
];

export default function PartenairesHub() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Partenaires | Eugenia School - Entreprises et Partenaires Académiques"
        description="Découvrez les partenaires d'Eugenia School : entreprises (Doctolib, Carrefour, Malt, Société Générale) et partenaires académiques (Station F, Mistral AI, Dataiku). Devenez partenaire."
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
                { label: "Partenaires" }
              ]}
            />
            <div className="max-w-4xl mx-auto text-center mt-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Nos Partenaires
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Eugenia School collabore avec les leaders de la tech et du business 
                pour offrir à ses étudiants une formation ancrée dans la réalité professionnelle.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                  <span className="text-[#FCBA35] font-bold">150+</span>
                  <span className="text-gray-300 ml-2">entreprises partenaires</span>
                </div>
                <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                  <span className="text-[#FCBA35] font-bold">10+</span>
                  <span className="text-gray-300 ml-2">Géniathons par an</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENTERPRISE PARTNERS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Entreprises</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Ils nous font confiance
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Des startups aux grands groupes, nos partenaires proposent des cas réels 
                  à nos étudiants et recrutent parmi nos diplômés.
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center justify-items-center mb-12">
                {enterpriseLogos.map((logo) => (
                  <div key={logo.name} className="h-12 w-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-gray-500 mb-4">Et {entreprisesPartenaires.length - enterpriseLogos.length}+ autres entreprises...</p>
              </div>
            </div>
          </div>
        </section>

        {/* ACADEMIC PARTNERS */}
        <section className="py-20 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Écosystème</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Partenaires académiques et tech
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Nous collaborons avec les acteurs majeurs de l'écosystème tech français 
                  pour enrichir nos programmes et offrir des opportunités uniques à nos étudiants.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                {partnerLogos.map((logo) => (
                  <div key={logo.name} className="h-16 w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERSHIP TYPES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Collaboration</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Devenez partenaire
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Plusieurs façons de collaborer avec Eugenia School selon vos objectifs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {partnershipTypes.map((type) => (
                  <div key={type.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-[#8B2346] rounded-xl flex items-center justify-center flex-shrink-0">
                        <type.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                        <p className="text-gray-600 mb-4">{type.description}</p>
                        <ul className="space-y-2">
                          {type.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center gap-2 text-sm text-gray-500">
                              <div className="w-1.5 h-1.5 bg-[#8B2346] rounded-full"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GENIATHON FOCUS */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-[#FCBA35] font-semibold text-sm uppercase tracking-wider">Focus</span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                    Les Géniathons : votre visibilité, nos talents
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Proposez un cas business réel à nos étudiants lors d'un Géniathon de 1 à 3 jours. 
                    Vous bénéficiez de solutions innovantes et d'une visibilité auprès de nos talents.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-[#FCBA35]" />
                      <span>Cas réels adaptés à vos enjeux</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-[#FCBA35]" />
                      <span>Étudiants motivés et formés</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Handshake className="w-5 h-5 text-[#FCBA35]" />
                      <span>Opportunités de recrutement</span>
                    </div>
                  </div>
                  <Link
                    href="/hackathons"
                    className="inline-flex items-center gap-2 text-[#FCBA35] hover:text-yellow-300 font-semibold"
                  >
                    Voir nos Géniathons
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="relative">
                  <img
                    src={`${CDN}/67cef31a7a8473a14c17f172_jobdatingeleves.avif`}
                    alt="Géniathon en cours"
                    className="rounded-2xl w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#8B2346] to-[#6B1A35] text-white">
          <div className="container mx-auto px-6 text-center">
            <Handshake className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Devenez partenaire</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Rejoignez notre écosystème et participez à la formation des talents de demain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:partenariats@eugenia-school.com"
                className="inline-flex items-center gap-2 bg-white text-[#8B2346] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                Nous contacter
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#8B2346] transition-colors duration-200"
              >
                En savoir plus
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
