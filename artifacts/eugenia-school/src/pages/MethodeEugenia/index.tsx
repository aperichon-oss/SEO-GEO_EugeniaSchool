import { Link } from "wouter";
import { ArrowRight, Zap, Users, Target, Briefcase, Code, Brain, Rocket, CheckCircle } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const CDN = "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b";

const methodSteps = [
  {
    number: "01",
    title: "Immersion Business",
    description: "Chaque semestre débute par une immersion de 2 semaines dans une entreprise partenaire. Les étudiants découvrent les enjeux réels et identifient les problématiques à résoudre.",
    icon: Briefcase,
    color: "bg-blue-500"
  },
  {
    number: "02",
    title: "Acquisition des compétences",
    description: "Des modules intensifs de 4 à 6 semaines permettent d'acquérir les compétences techniques (Python, SQL, IA) et business (stratégie, marketing) nécessaires.",
    icon: Brain,
    color: "bg-purple-500"
  },
  {
    number: "03",
    title: "Projet fil rouge",
    description: "Tout au long du semestre, les étudiants travaillent sur un projet réel proposé par une entreprise partenaire, appliquant leurs nouvelles compétences.",
    icon: Target,
    color: "bg-green-500"
  },
  {
    number: "04",
    title: "Géniathon & Restitution",
    description: "Le semestre se conclut par un Géniathon de 3 jours : les équipes présentent leurs solutions devant un jury composé de professionnels et de professeurs.",
    icon: Rocket,
    color: "bg-[#8B2346]"
  }
];

const advantages = [
  "Apprentissage par l'action dès le premier jour",
  "Projets réels avec entreprises partenaires",
  "Double compétence tech & business",
  "Accompagnement personnalisé",
  "Réseau d'alumni actif",
  "100% d'insertion professionnelle"
];

export default function MethodeEugenia() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="La Méthode Eugenia | Une Pédagogie Innovante et Immersive"
        description="Découvrez la Méthode Eugenia : une approche pédagogique unique combinant immersion en entreprise, acquisition de compétences tech & business, et projets réels avec des partenaires de premier plan."
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
                { label: "École", href: "/ecole" },
                { label: "Méthode Eugenia" }
              ]}
            />
            <div className="max-w-4xl mx-auto text-center mt-12">
              <span className="inline-block bg-[#8B2346] text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
                Notre Approche Unique
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                La Méthode Eugenia
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Une pédagogie révolutionnaire qui place l'entreprise au cœur de l'apprentissage. 
                Nos étudiants ne se contentent pas d'apprendre : ils font, créent et innovent 
                aux côtés des leaders du marché.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 text-[#FCBA35]">
                  <Zap className="w-5 h-5" />
                  <span>Learning by Doing</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <Users className="w-5 h-5" />
                  <span>Projets en équipe</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <Code className="w-5 h-5" />
                  <span>Tech & Business</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METHOD STEPS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Le Parcours</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Les 4 piliers de la Méthode Eugenia
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Un cycle d'apprentissage structuré qui combine théorie, pratique et immersion professionnelle.
                </p>
              </div>

              <div className="space-y-8">
                {methodSteps.map((step, index) => (
                  <div key={step.number} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-1/2">
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <span className="text-[#8B2346] font-bold text-sm">{step.number}</span>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className={`h-64 ${step.color} bg-opacity-10 rounded-2xl flex items-center justify-center`}>
                        <step.icon className={`w-24 h-24 ${step.color.replace('bg-', 'text-')} opacity-30`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GENIATHON FOCUS */}
        <section className="py-20 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Focus</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                    Les Géniathons : l'essence de notre pédagogie
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Les Géniathons sont des hackathons de 1 à 3 jours organisés avec nos entreprises partenaires. 
                    Les étudiants travaillent en équipe sur des cas réels et présentent leurs solutions 
                    devant des professionnels.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    C'est une immersion intensive qui permet de développer des compétences techniques, 
                    mais aussi des soft skills essentiels : travail en équipe, gestion du stress, 
                    communication et présentation.
                  </p>
                  <Link
                    href="/hackathons"
                    className="inline-flex items-center gap-2 text-[#8B2346] hover:text-[#6B1A35] font-semibold"
                  >
                    Découvrir nos Géniathons
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="relative">
                  <img
                    src={`${CDN}/67c8273d4075557b2a85fad1_Noahquiparle-p-1080.avif`}
                    alt="Étudiant présentant lors d'un Géniathon"
                    className="rounded-lg shadow-xl w-full"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="text-3xl font-bold text-[#8B2346]">10+</div>
                    <div className="text-gray-600 text-sm">Géniathons par an</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ADVANTAGES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 md:order-1">
                  <img
                    src={`${CDN}/67cef144527828430f670191_nicosouriant.avif`}
                    alt="Étudiant souriant"
                    className="rounded-lg shadow-xl w-full"
                    loading="lazy"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Pourquoi nous choisir</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                    Les avantages de la Méthode Eugenia
                  </h2>
                  <div className="space-y-4">
                    {advantages.map((advantage) => (
                      <div key={advantage} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl text-[#FCBA35] mb-6">"</div>
              <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                La Méthode Eugenia m'a permis de développer des compétences que je n'aurais jamais acquises 
                dans une école traditionnelle. Travailler sur des cas réels avec Doctolib et Carrefour 
                m'a préparé à mon premier emploi comme aucun stage ne l'aurait fait.
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={`${CDN}/67ceef2e9b9745a770b55d80_Jonasrond.avif`}
                  alt="Jonas, promotion 2024"
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="text-left">
                  <div className="font-semibold">Jonas M.</div>
                  <div className="text-gray-400 text-sm">Promotion 2024 - Data Analyst chez Doctolib</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#8B2346] to-[#6B1A35] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à rejoindre l'aventure ?</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Découvrez nos programmes et commencez votre transformation professionnelle.
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
                href="/brochure"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#8B2346] transition-colors duration-200"
              >
                Télécharger la brochure
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
