import { Link } from "wouter";
import { ArrowRight, Target, Lightbulb, BookOpen, Heart, Sparkles, Users, Zap } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const CDN = "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b";

const values = [
  {
    icon: Target,
    title: "Data-driven",
    description: "De l'analyse de données à l'IA, nos programmes développent les compétences analytiques essentielles à la réussite dans un monde technologique en constante évolution.",
    color: "bg-blue-100",
    iconColor: "text-[#8B2346]"
  },
  {
    icon: Lightbulb,
    title: "Optimisme",
    description: "Nous cultivons une culture de l'optimisme, permettant aux étudiants de voir les défis comme des opportunités et de prendre des initiatives pour leur avenir.",
    color: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    icon: BookOpen,
    title: "Esprit Critique",
    description: "Nous incitons les étudiants à remettre en question le statu quo, poser des questions pertinentes et réfléchir de manière critique pour résoudre des problèmes complexes.",
    color: "bg-purple-100",
    iconColor: "text-purple-600"
  }
];

const pillars = [
  {
    icon: Sparkles,
    title: "Innovation pédagogique",
    description: "Une approche unique combinant théorie et pratique immersive avec les entreprises leaders du marché."
  },
  {
    icon: Users,
    title: "Communauté engagée",
    description: "Un réseau d'étudiants, d'alumni et de professionnels partageant les mêmes valeurs d'excellence."
  },
  {
    icon: Zap,
    title: "Employabilité maximale",
    description: "100% de nos diplômés trouvent un emploi dans les 6 mois suivant leur sortie de l'école."
  },
  {
    icon: Heart,
    title: "Accompagnement personnalisé",
    description: "Chaque étudiant bénéficie d'un suivi individualisé tout au long de son parcours académique."
  }
];

export default function NotreADN() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Notre ADN | Eugenia School - Valeurs, Mission et Vision"
        description="Découvrez l'ADN d'Eugenia School : une école fondée sur l'innovation, l'optimisme et l'esprit critique. Notre mission est de former les leaders de demain capables de transformer le monde grâce à l'IA et la data."
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
                { label: "Notre ADN" }
              ]}
            />
            <div className="max-w-4xl mx-auto text-center mt-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Notre ADN
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Eugenia School est née d'une conviction : l'éducation traditionnelle ne prépare plus suffisamment 
                aux défis du monde professionnel. Notre ADN repose sur trois piliers fondamentaux qui guident 
                chaque aspect de notre pédagogie.
              </p>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Notre Mission</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                    Former les résolveurs de problèmes de demain
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Dans un environnement en constante évolution, s'adapter aux nouvelles compétences est essentiel. 
                    C'est pourquoi nous formons les résolveurs de problèmes de demain avec une approche innovante 
                    et tournée vers l'emploi.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Notre mission est de permettre à chaque étudiant de développer son plein potentiel en combinant 
                    maîtrise technique, intelligence émotionnelle et esprit entrepreneurial.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src={`${CDN}/67cef144527828430f670191_nicosouriant.avif`}
                    alt="Étudiant Eugenia School souriant"
                    className="rounded-lg shadow-xl w-full"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* VALUES */}
              <div className="text-center mb-12">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Nos Valeurs</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                  Les trois piliers de notre identité
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value) => (
                  <div key={value.title} className="text-center p-8 bg-gray-50 rounded-xl">
                    <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className={`w-8 h-8 ${value.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VISION */}
        <section className="py-20 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 md:order-1">
                  <img
                    src={`${CDN}/67cef31a7a8473a14c17f172_jobdatingeleves.avif`}
                    alt="Étudiants lors d'un job dating"
                    className="rounded-lg shadow-xl w-full"
                    loading="lazy"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Notre Vision</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                    Devenir la référence de l'éducation business et IA
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Notre ambition est de créer une nouvelle génération de professionnels capables de naviguer 
                    avec aisance entre le monde des affaires et celui de la technologie.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    D'ici 2030, Eugenia School vise à former plus de 5 000 diplômés qui transformeront 
                    les entreprises françaises et internationales grâce à leur double compétence unique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Ce qui nous distingue</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                  Les fondements de notre réussite
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-200">
                    <div className="w-12 h-12 bg-[#F5E6EA] rounded-lg flex items-center justify-center mb-4">
                      <pillar.icon className="w-6 h-6 text-[#8B2346]" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{pillar.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#8B2346] to-[#6B1A35] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Rejoignez l'aventure Eugenia</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Découvrez nos programmes et devenez un acteur du changement dans le monde de demain.
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
                href="/ecole/approche-pedagogique"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#8B2346] transition-colors duration-200"
              >
                Notre approche pédagogique
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
