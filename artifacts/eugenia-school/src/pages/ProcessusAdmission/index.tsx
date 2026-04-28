import { Link } from "wouter";
import { ArrowRight, FileText, Users, CheckCircle, Calendar, Clock, MessageSquare, Award } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const CDN = "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b";

const steps = [
  {
    number: "01",
    title: "Candidature en ligne",
    description: "Remplissez le formulaire de candidature en ligne avec vos informations personnelles, votre parcours académique et votre lettre de motivation.",
    duration: "15 minutes",
    icon: FileText
  },
  {
    number: "02",
    title: "Étude du dossier",
    description: "Notre équipe admissions étudie votre dossier et évalue votre profil, votre motivation et l'adéquation avec nos programmes.",
    duration: "5 jours ouvrés",
    icon: CheckCircle
  },
  {
    number: "03",
    title: "Entretien de motivation",
    description: "Si votre dossier est retenu, vous êtes convié à un entretien de 30 minutes avec un membre de l'équipe pédagogique pour échanger sur votre projet.",
    duration: "30 minutes",
    icon: MessageSquare
  },
  {
    number: "04",
    title: "Décision d'admission",
    description: "Vous recevez la décision finale sous 48h après l'entretien. En cas d'admission, vous avez 15 jours pour confirmer votre inscription.",
    duration: "48 heures",
    icon: Award
  }
];

const criteria = [
  {
    title: "Motivation",
    percentage: 40,
    description: "Votre projet professionnel et votre envie d'apprendre"
  },
  {
    title: "Parcours académique",
    percentage: 30,
    description: "Vos résultats et la cohérence de votre parcours"
  },
  {
    title: "Personnalité",
    percentage: 20,
    description: "Votre curiosité, votre ouverture d'esprit"
  },
  {
    title: "Expériences",
    percentage: 10,
    description: "Stages, projets personnels, associatifs"
  }
];

const requirements = {
  bachelor: [
    "Baccalauréat obtenu ou en cours d'obtention",
    "Dossier de candidature complet",
    "Lettre de motivation",
    "Entretien de motivation"
  ],
  msc: [
    "Bac+3 validé (Licence, Bachelor)",
    "Dossier de candidature complet",
    "CV détaillé",
    "Lettre de motivation",
    "Entretien de motivation"
  ]
};

export default function ProcessusAdmission() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Processus d'Admission | Eugenia School - Comment candidater"
        description="Découvrez le processus d'admission d'Eugenia School : candidature en ligne, étude du dossier, entretien de motivation. Admission hors Parcoursup, réponse sous 48h."
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
                { label: "Processus d'admission" }
              ]}
            />
            <div className="max-w-4xl mx-auto text-center mt-12">
              <span className="inline-block bg-[#FCBA35] text-black px-4 py-1 rounded-full text-sm font-semibold mb-6">
                Hors Parcoursup
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Processus d'Admission
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Un processus simple et humain, centré sur votre motivation et votre projet. 
                Pas de concours, pas de stress : nous cherchons des personnalités, pas des dossiers parfaits.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                  <span className="text-[#FCBA35] font-bold">4 étapes</span>
                  <span className="text-gray-300 ml-2">simples</span>
                </div>
                <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                  <span className="text-[#FCBA35] font-bold">48h</span>
                  <span className="text-gray-300 ml-2">de réponse</span>
                </div>
                <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                  <span className="text-[#FCBA35] font-bold">Gratuit</span>
                  <span className="text-gray-300 ml-2">candidature</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Les étapes</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                  Un parcours en 4 étapes
                </h2>
              </div>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#8B2346] rounded-2xl flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-50 p-6 rounded-xl">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <div className="flex items-center gap-2 text-[#8B2346] text-sm font-medium mt-2 md:mt-0">
                          <Clock className="w-4 h-4" />
                          {step.duration}
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block w-16 flex-shrink-0"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CRITERIA */}
        <section className="py-20 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Critères d'évaluation</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                    Ce que nous recherchons
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Nous ne cherchons pas des profils parfaits, mais des personnalités motivées 
                    avec un vrai projet professionnel. La motivation compte plus que les notes.
                  </p>

                  <div className="space-y-6">
                    {criteria.map((criterion) => (
                      <div key={criterion.title}>
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold text-gray-900">{criterion.title}</span>
                          <span className="text-[#8B2346] font-bold">{criterion.percentage}%</span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#8B2346] rounded-full"
                            style={{ width: `${criterion.percentage}%` }}
                          />
                        </div>
                        <p className="text-gray-500 text-sm mt-1">{criterion.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={`${CDN}/67cef144527828430f670191_nicosouriant.avif`}
                    alt="Étudiant Eugenia School"
                    className="rounded-2xl shadow-xl w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Prérequis</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                  Conditions d'admission
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#F5E6EA] to-white p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor</h3>
                  <p className="text-[#8B2346] font-medium mb-6">Post-Bac (3 ans)</p>
                  <ul className="space-y-3">
                    {requirements.bachelor.map((req) => (
                      <li key={req} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/programme/bachelor"
                    className="inline-flex items-center gap-2 text-[#8B2346] hover:text-[#6B1A35] font-semibold mt-6"
                  >
                    En savoir plus sur le Bachelor
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-[#FEF5E0] to-white p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">MSc</h3>
                  <p className="text-[#FCBA35] font-medium mb-6">Bac+3 à Bac+5 (2 ans)</p>
                  <ul className="space-y-3">
                    {requirements.msc.map((req) => (
                      <li key={req} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/programme/msc"
                    className="inline-flex items-center gap-2 text-[#8B2346] hover:text-[#6B1A35] font-semibold mt-6"
                  >
                    En savoir plus sur le MSc
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CALENDAR */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Calendar className="w-12 h-12 text-[#FCBA35] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Calendrier des admissions</h2>
              <p className="text-gray-300 text-lg mb-8">
                Les admissions sont ouvertes toute l'année. Nous traitons les candidatures 
                au fil de l'eau jusqu'à la rentrée de septembre.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                  <p className="text-[#FCBA35] font-bold text-lg mb-2">Janvier - Mars</p>
                  <p className="text-gray-300 text-sm">Sessions prioritaires</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                  <p className="text-[#FCBA35] font-bold text-lg mb-2">Avril - Juin</p>
                  <p className="text-gray-300 text-sm">Sessions principales</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                  <p className="text-[#FCBA35] font-bold text-lg mb-2">Juillet - Août</p>
                  <p className="text-gray-300 text-sm">Sessions tardives</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#8B2346] to-[#6B1A35] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à candidater ?</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Lancez votre candidature en 15 minutes. Notre équipe vous accompagne à chaque étape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/candidature"
                className="inline-flex items-center gap-2 bg-white text-[#8B2346] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Candidater maintenant
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/financement"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#8B2346] transition-colors duration-200"
              >
                Options de financement
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
