import { Link } from "wouter";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const CDN = "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b";

const founders = [
  {
    name: "Nicolas Fondateur",
    role: "Co-fondateur & CEO",
    bio: "Ancien consultant chez McKinsey et diplômé d'HEC, Nicolas a fondé Eugenia School avec la conviction que l'éducation doit préparer concrètement au monde professionnel.",
    image: `${CDN}/67cef144527828430f670191_nicosouriant.avif`,
    linkedin: "#"
  },
  {
    name: "Marie Directrice",
    role: "Co-fondatrice & Directrice Pédagogique",
    bio: "Ex-responsable formation chez Google et docteure en sciences de l'éducation, Marie conçoit les programmes innovants d'Eugenia School.",
    image: `${CDN}/67ceecb5b6bd0e19228ec3c9_Imanerond.avif`,
    linkedin: "#"
  }
];

const team = [
  {
    name: "Thomas Martin",
    role: "Directeur des Partenariats",
    department: "Entreprises",
    image: `${CDN}/67ceef2e9b9745a770b55d80_Jonasrond.avif`
  },
  {
    name: "Sophie Bernard",
    role: "Responsable Admissions",
    department: "Admissions",
    image: `${CDN}/67ceecb5b6bd0e19228ec3c9_Imanerond.avif`
  },
  {
    name: "Alexandre Petit",
    role: "Coordinateur Pédagogique",
    department: "Pédagogie",
    image: `${CDN}/67c8273d4075557b2a85fad1_Noahquiparle-p-1080.avif`
  },
  {
    name: "Julie Durand",
    role: "Responsable Vie Étudiante",
    department: "Campus",
    image: `${CDN}/67cef144527828430f670191_nicosouriant.avif`
  },
  {
    name: "Pierre Leroy",
    role: "Directeur Technique",
    department: "Tech",
    image: `${CDN}/67ceef2e9b9745a770b55d80_Jonasrond.avif`
  },
  {
    name: "Camille Moreau",
    role: "Responsable Communication",
    department: "Marketing",
    image: `${CDN}/67ceecb5b6bd0e19228ec3c9_Imanerond.avif`
  }
];

const professors = [
  {
    name: "Dr. Jean-Pierre Dubois",
    role: "Machine Learning & Deep Learning",
    company: "Ex-Meta AI Research",
    expertise: ["PyTorch", "NLP", "Computer Vision"]
  },
  {
    name: "Sarah Chen",
    role: "Data Engineering",
    company: "Senior Engineer chez Dataiku",
    expertise: ["Spark", "Airflow", "dbt"]
  },
  {
    name: "Marc Fontaine",
    role: "Business Strategy",
    company: "Partner chez BCG",
    expertise: ["Strategy", "M&A", "Growth"]
  },
  {
    name: "Emma Rodriguez",
    role: "Product Management",
    company: "VP Product chez Doctolib",
    expertise: ["Product", "Agile", "UX"]
  },
  {
    name: "Lucas Martin",
    role: "IA Générative",
    company: "Staff Engineer chez Mistral AI",
    expertise: ["LLM", "RAG", "Fine-tuning"]
  },
  {
    name: "Amélie Blanc",
    role: "Marketing Digital & Growth",
    company: "CMO chez Malt",
    expertise: ["SEO", "Paid", "Analytics"]
  }
];

export default function Equipe() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Notre Équipe | Eugenia School - Fondateurs, Staff et Professeurs"
        description="Découvrez l'équipe d'Eugenia School : nos fondateurs visionnaires, notre staff dévoué et nos professeurs experts issus des meilleures entreprises tech et consulting."
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
                { label: "Notre Équipe" }
              ]}
            />
            <div className="max-w-4xl mx-auto text-center mt-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Notre Équipe
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Des passionnés de l'éducation et de la tech qui travaillent chaque jour 
                pour offrir la meilleure expérience d'apprentissage à nos étudiants.
              </p>
            </div>
          </div>
        </section>

        {/* FOUNDERS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Fondateurs</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                  Les visionnaires derrière Eugenia
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {founders.map((founder) => (
                  <div key={founder.name} className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-32 h-32 flex-shrink-0">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover rounded-xl"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{founder.name}</h3>
                      <p className="text-[#8B2346] font-medium mb-3">{founder.role}</p>
                      <p className="text-gray-600 leading-relaxed mb-4">{founder.bio}</p>
                      <a
                        href={founder.linkedin}
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0077B5] transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STAFF */}
        <section className="py-20 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">L'équipe</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                  Le staff qui fait vivre Eugenia
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {team.map((member) => (
                  <div key={member.name} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center gap-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900">{member.name}</h3>
                        <p className="text-[#8B2346] text-sm">{member.role}</p>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded mt-1 inline-block">
                          {member.department}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROFESSORS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Corps professoral</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Des experts qui enseignent leur métier
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Nos intervenants sont des professionnels en activité dans les meilleures 
                  entreprises tech et consulting.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {professors.map((prof) => (
                  <div key={prof.name} className="border border-gray-200 rounded-xl p-6 hover:border-[#8B2346] transition-colors duration-200">
                    <h3 className="font-bold text-gray-900 mb-1">{prof.name}</h3>
                    <p className="text-[#8B2346] font-medium text-sm mb-1">{prof.role}</p>
                    <p className="text-gray-500 text-sm mb-4">{prof.company}</p>
                    <div className="flex flex-wrap gap-1">
                      {prof.expertise.map((skill) => (
                        <span key={skill} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">
                  Et plus de 50 autres intervenants professionnels...
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* JOIN US */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Rejoignez notre équipe</h2>
              <p className="text-xl text-gray-300 mb-8">
                Vous partagez notre vision de l'éducation ? Nous recrutons des talents passionnés 
                pour accompagner la croissance d'Eugenia School.
              </p>
              <a
                href="mailto:recrutement@eugenia-school.com"
                className="inline-flex items-center gap-2 bg-[#8B2346] hover:bg-[#6B1A35] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                Voir nos offres
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#8B2346] to-[#6B1A35] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Envie d'en savoir plus ?</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Découvrez notre approche pédagogique et rencontrez notre équipe lors d'une journée portes ouvertes.
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
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#8B2346] transition-colors duration-200"
              >
                Nous contacter
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
