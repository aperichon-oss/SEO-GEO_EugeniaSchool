import { Link } from "wouter";
import { ArrowRight, CreditCard, Building, GraduationCap, Briefcase, Calculator, CheckCircle, Euro, Percent } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const CDN = "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b";

const tuitionFees = [
  {
    program: "Bachelor",
    duration: "3 ans",
    yearlyFee: 8500,
    totalFee: 25500,
    features: ["Formation initiale", "Stage obligatoire en 3e année", "Possibilité d'alternance en 3e année"]
  },
  {
    program: "MSc",
    duration: "2 ans",
    yearlyFee: 0,
    totalFee: 0,
    alternance: true,
    features: ["100% en alternance", "Rémunéré par l'entreprise", "Frais de scolarité pris en charge"]
  }
];

const financingOptions = [
  {
    icon: Briefcase,
    title: "Alternance",
    description: "Le MSc est 100% en alternance : vos frais de scolarité sont pris en charge par l'entreprise et vous êtes rémunéré.",
    highlight: "0€ de frais pour le MSc",
    color: "bg-green-500"
  },
  {
    icon: CreditCard,
    title: "Paiement échelonné",
    description: "Possibilité de payer en 3, 6 ou 10 fois sans frais pour le Bachelor. Un premier versement puis des mensualités adaptées à votre budget.",
    highlight: "Jusqu'à 10x sans frais",
    color: "bg-blue-500"
  },
  {
    icon: Building,
    title: "Prêt étudiant",
    description: "Nos partenaires bancaires proposent des prêts étudiants à taux préférentiels avec remboursement différé après l'obtention du diplôme.",
    highlight: "Taux préférentiel",
    color: "bg-purple-500"
  },
  {
    icon: GraduationCap,
    title: "Bourses",
    description: "Des bourses au mérite et des bourses sociales sont disponibles pour les étudiants éligibles. Contactez-nous pour en savoir plus.",
    highlight: "Jusqu'à 30% de réduction",
    color: "bg-[#8B2346]"
  }
];

const partnerBanks = [
  "BNP Paribas",
  "Société Générale",
  "Crédit Agricole",
  "Caisse d'Épargne"
];

export default function Financement() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Financement | Eugenia School - Frais de scolarité et options de paiement"
        description="Découvrez les frais de scolarité et les options de financement d'Eugenia School : alternance, paiement échelonné, prêt étudiant, bourses. Le MSc est 100% financé par l'alternance."
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
                { label: "Admissions", href: "/admissions" },
                { label: "Financement" }
              ]}
            />
            <div className="max-w-4xl mx-auto text-center mt-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Financement de vos études
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Investir dans votre avenir ne devrait pas être un obstacle. 
                Nous proposons plusieurs solutions pour financer vos études et rendre Eugenia accessible à tous.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-green-500/20 border border-green-500 px-4 py-2 rounded-lg">
                  <span className="text-green-400 font-bold">MSc 100% financé</span>
                  <span className="text-gray-300 ml-2">par l'alternance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TUITION FEES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Tarifs</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                  Frais de scolarité 2025-2026
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {tuitionFees.map((fee) => (
                  <div key={fee.program} className={`rounded-2xl p-8 ${fee.alternance ? 'bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200' : 'bg-gradient-to-br from-[#F5E6EA] to-white'}`}>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{fee.program}</h3>
                        <p className="text-gray-600">{fee.duration}</p>
                      </div>
                      {fee.alternance && (
                        <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          ALTERNANCE
                        </span>
                      )}
                    </div>

                    {fee.alternance ? (
                      <div className="mb-6">
                        <div className="text-4xl font-bold text-green-600 mb-2">0€</div>
                        <p className="text-gray-600">Frais pris en charge par l'entreprise</p>
                      </div>
                    ) : (
                      <div className="mb-6">
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-[#8B2346]">{fee.yearlyFee.toLocaleString()}€</span>
                          <span className="text-gray-600">/ an</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-1">Soit {fee.totalFee.toLocaleString()}€ sur {fee.duration}</p>
                      </div>
                    )}

                    <ul className="space-y-3">
                      {fee.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${fee.alternance ? 'text-green-500' : 'text-[#8B2346]'}`} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FINANCING OPTIONS */}
        <section className="py-20 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Solutions</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Options de financement
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Plusieurs solutions adaptées à votre situation pour financer votre Bachelor.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {financingOptions.map((option) => (
                  <div key={option.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{option.title}</h3>
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-medium">
                            {option.highlight}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{option.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ALTERNANCE FOCUS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Focus Alternance</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                    Le MSc 100% financé
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Notre programme MSc est exclusivement en alternance. Cela signifie que vos frais 
                    de scolarité sont intégralement pris en charge par votre entreprise d'accueil, 
                    et vous percevez une rémunération mensuelle.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg">
                      <Euro className="w-8 h-8 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Frais de scolarité</p>
                        <p className="text-green-600 font-bold">0€ - Pris en charge par l'entreprise</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg">
                      <Percent className="w-8 h-8 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Rémunération</p>
                        <p className="text-green-600 font-bold">800€ à 1 500€ net / mois</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/programme/msc"
                    className="inline-flex items-center gap-2 text-[#8B2346] hover:text-[#6B1A35] font-semibold"
                  >
                    En savoir plus sur le MSc
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="relative">
                  <img
                    src={`${CDN}/67cef31a7a8473a14c17f172_jobdatingeleves.avif`}
                    alt="Étudiants en alternance"
                    className="rounded-2xl shadow-xl w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNER BANKS */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos banques partenaires</h2>
              <p className="text-gray-300 text-lg mb-12">
                Des offres de prêt étudiant négociées avec les principales banques françaises.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {partnerBanks.map((bank) => (
                  <div key={bank} className="bg-white/10 backdrop-blur p-6 rounded-xl">
                    <p className="font-semibold">{bank}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-8">
                Contactez-nous pour obtenir les conditions préférentielles réservées aux étudiants Eugenia.
              </p>
            </div>
          </div>
        </section>

        {/* SIMULATOR */}
        <section className="py-20 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Calculator className="w-12 h-12 text-[#8B2346] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Besoin d'aide pour financer vos études ?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Notre équipe admissions est disponible pour vous accompagner dans la recherche 
                de la meilleure solution de financement adaptée à votre situation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#8B2346] hover:bg-[#6B1A35] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Prendre rendez-vous
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#8B2346] to-[#6B1A35] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à vous lancer ?</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Le financement ne doit pas être un frein. Candidatez et nous trouverons ensemble la solution adaptée.
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
                href="/processus-admission"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#8B2346] transition-colors duration-200"
              >
                Processus d'admission
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
