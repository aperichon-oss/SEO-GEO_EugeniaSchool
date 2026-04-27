import { Link } from "wouter";
import { ArrowRight, Users, MapPin, Heart, BookOpen, Building2, Target, Lightbulb, Users2 } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const CDN = "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b";

const sections = [
  {
    href: "/notre-adn",
    icon: Heart,
    title: "Notre ADN",
    description:
      "L'innovation au cœur du monde professionnel. L'analyse de données, l'optimisme et l'esprit critique sont au cœur de notre approche, permettant aux étudiants de penser, innover et prendre les rênes de demain.",
  },
  {
    href: "/approche-pedagogique",
    icon: Users,
    title: "Nos Professeurs",
    description:
      "Des professionnels experts de leur secteur. Nos professeurs sont des professionnels d'entreprise et des éducateurs compétents, ils équipent les étudiants de cas réels et concrets dans leurs cours.",
  },
  {
    href: "/entreprises-partenaires",
    icon: Building2,
    title: "Proximité Entreprise",
    description:
      "Les hackathons l'essence même de la tech. Une immersion intense dans l'automatisation au service du business. Les entreprises partenaires viennent donner un cas pratique aux étudiants.",
  },
];

export default function EcoleHub() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="L'École Eugenia | Notre ADN, Professeurs et Proximité Entreprise"
        description="Découvrez Eugenia School : notre ADN axé sur l'innovation et l'esprit critique, nos professeurs experts issus du monde professionnel, et notre proximité avec plus de 150 entreprises partenaires."
      />
      <AnnouncementBar />
      <Navigation />

      <main className="flex-1">
        {/* HERO */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-12 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mt-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                L'innovation au cœur du monde professionnel
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                L'analyse de données, l'optimisme et l'esprit critique sont au cœur de notre approche,
                permettant aux étudiants de penser, innover et prendre les rênes de demain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-green-400">
                  <Target className="w-5 h-5" />
                  <span>Data-driven : l'analyse de données à l'IA</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <Lightbulb className="w-5 h-5" />
                  <span>Optimisme : voir les défis comme des opportunités</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <BookOpen className="w-5 h-5" />
                  <span>Esprit critique : remettre en question le statu quo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VALUES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-[#8B2346]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nous sommes Data-driven</h3>
                  <p className="text-gray-600">
                    De l'analyse de données à l'IA, nos programmes sont conçus pour développer les compétences
                    analytiques essentielles à la réussite dans un monde technologique.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nous cultivons l'Optimisme</h3>
                  <p className="text-gray-600">
                    Nous encourageons une culture de l'optimisme, permettant aux étudiants de voir les défis
                    comme des opportunités et de prendre des initiatives pour leur avenir.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nous avons un Esprit Critique</h3>
                  <p className="text-gray-600">
                    Nous incitons les étudiants à remettre en question le statu quo, poser des questions pertinentes
                    et réfléchir de manière critique pour résoudre des problèmes complexes.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">L'entrepreneuriat est au cœur d'Eugenia</h2>
                    <p className="text-gray-700 mb-6">
                      Eugenia School offre un environnement unique qui stimule la pensée entrepreneuriale à travers
                      des immersions, des projets concrets et une exposition directe aux startups les plus innovantes.
                      Les étudiants sont au contact des entreprises dès le premier jour.
                    </p>
                    <Link
                      href="/notre-adn"
                      className="inline-flex items-center gap-2 text-[#8B2346] hover:text-[#6B1A35] font-semibold"
                    >
                      Brochure
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="relative">
                    <img
                      src={`${CDN}/67cef144527828430f670191_nicosouriant.avif`}
                      alt="Un jeune bachelor écoute en cours et il est heureux"
                      className="rounded-lg shadow-lg w-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HUMAN APPROACH */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Votre succès est notre priorité</h2>
                  <p className="text-gray-700 mb-6">
                    À Eugenia School, chaque étudiant bénéficie d'une relation de proximité avec ses professeurs
                    et l'équipe administrative. Nous sommes là pour vous accompagner à chaque étape de votre parcours
                    académique et professionnel, en vous assurant un soutien constant.
                  </p>
                  <Link
                    href="/methode-eugenia"
                    className="inline-flex items-center gap-2 text-[#8B2346] hover:text-[#6B1A35] font-semibold"
                  >
                    Notre méthode
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="relative">
                  <img
                    src={`${CDN}/67cef31a7a8473a14c17f172_jobdatingeleves.avif`}
                    alt="Des élèves se préparent au jobdating"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL SUCCESS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 md:order-1">
                  <img
                    src={`${CDN}/67c8273d4075557b2a85fad1_Noahquiparle-p-1080.avif`}
                    alt="Un étudiant fait une conférence à un public"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Une école qui prend soin de votre avenir</h2>
                  <p className="text-gray-700 mb-6">
                    Des événements de job-dating au coaching personnalisé, notre équipe dédiée est là pour aider
                    les étudiants à trouver les bonnes opportunités et réussir dans des secteurs compétitifs.
                  </p>
                  <Link
                    href="/evenements"
                    className="inline-flex items-center gap-2 text-[#8B2346] hover:text-[#6B1A35] font-semibold"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTIONS GRID */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Découvrez Eugenia School</h2>
                <p className="text-xl text-gray-600">Explorez les différentes facettes de notre école</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {sections.map((section) => (
                  <Link
                    key={section.href}
                    href={section.href}
                    className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                        <section.icon className="w-6 h-6 text-[#8B2346]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#8B2346] transition-colors duration-200">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6">{section.description}</p>
                    <div className="flex items-center text-[#8B2346] font-semibold group-hover:text-blue-700 transition-colors duration-200">
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#8B2346] to-[#6B1A35] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">EUGENIA SCHOOL - DEVENEZ UN GAME CHANGER</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Rejoignez l'aventure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/candidature"
                className="inline-flex items-center gap-2 bg-white text-[#8B2346] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Candidature
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/brochure"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#8B2346] transition-colors duration-200"
              >
                Brochure
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-blue-100 mt-8 max-w-2xl mx-auto">
              Nous transformons l'énergie des élèves, en compétences IA concrètes, ouvrant la voie à des carrières d'avenir,
              au-delà du cadre académique traditionnel.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
