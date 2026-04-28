import { Link } from "wouter";
import { ArrowRight, Users, BookOpen, Briefcase, Award, GraduationCap, Target, Lightbulb, Code } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const CDN = "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b";

const professors = [
  {
    name: "Marie Dupont",
    role: "Data Science & Machine Learning",
    company: "Ex-Google",
    image: `${CDN}/67ceecb5b6bd0e19228ec3c9_Imanerond.avif`,
    expertise: ["Python", "TensorFlow", "Deep Learning"]
  },
  {
    name: "Thomas Martin",
    role: "Business Strategy & Growth",
    company: "Ex-McKinsey",
    image: `${CDN}/67ceef2e9b9745a770b55d80_Jonasrond.avif`,
    expertise: ["Strategy", "Growth Hacking", "Product"]
  },
  {
    name: "Sophie Bernard",
    role: "IA Générative & NLP",
    company: "Ex-Mistral AI",
    image: `${CDN}/67cef144527828430f670191_nicosouriant.avif`,
    expertise: ["LLM", "Prompt Engineering", "RAG"]
  },
  {
    name: "Alexandre Petit",
    role: "Data Engineering & Cloud",
    company: "Ex-Dataiku",
    image: `${CDN}/67c8273d4075557b2a85fad1_Noahquiparle-p-1080.avif`,
    expertise: ["BigQuery", "Airflow", "dbt"]
  }
];

const methodologies = [
  {
    icon: Briefcase,
    title: "Learning by Doing",
    description: "80% de nos cours sont basés sur des cas pratiques et des projets réels d'entreprises partenaires."
  },
  {
    icon: Users,
    title: "Petits groupes",
    description: "Classes de 25 étudiants maximum pour un accompagnement personnalisé et des échanges riches."
  },
  {
    icon: Code,
    title: "Tech & Business",
    description: "Une hybridation unique entre compétences techniques (data, IA) et business (stratégie, marketing)."
  },
  {
    icon: Target,
    title: "Objectifs métiers",
    description: "Chaque module est conçu pour développer des compétences directement applicables en entreprise."
  }
];

export default function ApprochePedagogique() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Approche Pédagogique | Eugenia School - Nos Professeurs Experts"
        description="Découvrez l'approche pédagogique unique d'Eugenia School : des professeurs experts issus des meilleures entreprises tech, une méthode immersive et des projets réels avec nos partenaires."
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
                { label: "Approche Pédagogique" }
              ]}
            />
            <div className="max-w-4xl mx-auto text-center mt-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Notre Approche Pédagogique
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Une pédagogie innovante portée par des professionnels experts de leur secteur, 
                qui équipent nos étudiants avec des cas réels et concrets pour les préparer au monde professionnel.
              </p>
            </div>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Notre Méthode</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Apprendre en faisant
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Dès le premier jour, nos étudiants travaillent sur des projets concrets 
                  avec les entreprises les plus innovantes du marché.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {methodologies.map((method) => (
                  <div key={method.title} className="p-6 bg-gray-50 rounded-xl text-center">
                    <div className="w-14 h-14 bg-[#F5E6EA] rounded-full flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-7 h-7 text-[#8B2346]" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{method.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-[#F5E6EA] to-[#FEF5E0] p-8 md:p-12 rounded-2xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Une pédagogie unique en France
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Eugenia School a développé une méthode pédagogique qui combine le meilleur des écoles 
                      de commerce et des formations tech. Nos étudiants apprennent à maîtriser les outils 
                      data et IA tout en développant leur sens business et leur leadership.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#8B2346] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">1</span>
                        </div>
                        <span className="text-gray-700">Cours théoriques avec des professeurs experts</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#8B2346] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">2</span>
                        </div>
                        <span className="text-gray-700">Projets pratiques avec entreprises partenaires</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#8B2346] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">3</span>
                        </div>
                        <span className="text-gray-700">Alternance en entreprise dès la 2e année</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={`${CDN}/67cef31a7a8473a14c17f172_jobdatingeleves.avif`}
                      alt="Étudiants en cours"
                      className="rounded-lg shadow-lg w-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROFESSORS */}
        <section className="py-20 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Nos Professeurs</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Des experts qui enseignent leur métier
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Nos professeurs ne sont pas des théoriciens. Ce sont des professionnels 
                  en activité dans les meilleures entreprises tech et consulting.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {professors.map((prof) => (
                  <div key={prof.name} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={prof.image}
                        alt={prof.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900">{prof.name}</h3>
                      <p className="text-[#8B2346] font-medium text-sm mb-1">{prof.role}</p>
                      <p className="text-gray-500 text-sm mb-3">{prof.company}</p>
                      <div className="flex flex-wrap gap-1">
                        {prof.expertise.map((skill) => (
                          <span key={skill} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  href="/ecole/equipe"
                  className="inline-flex items-center gap-2 text-[#8B2346] hover:text-[#6B1A35] font-semibold"
                >
                  Voir toute l'équipe
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold text-[#FCBA35] mb-2">80%</div>
                  <p className="text-gray-300">de cours pratiques</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#FCBA35] mb-2">25</div>
                  <p className="text-gray-300">étudiants max par classe</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#FCBA35] mb-2">50+</div>
                  <p className="text-gray-300">intervenants professionnels</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#FCBA35] mb-2">100%</div>
                  <p className="text-gray-300">d'insertion professionnelle</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#8B2346] to-[#6B1A35] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Découvrez notre méthode en détail</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              La Méthode Eugenia est une approche pédagogique unique qui combine théorie et pratique immersive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ecole/methode-eugenia"
                className="inline-flex items-center gap-2 bg-white text-[#8B2346] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                La Méthode Eugenia
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/candidature"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#8B2346] transition-colors duration-200"
              >
                Candidater
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
