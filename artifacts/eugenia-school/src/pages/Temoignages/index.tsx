import { Link } from "wouter";
import { ArrowRight, Quote, Star, Building, GraduationCap } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const CDN = "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b";

const testimonials = [
  {
    name: "Jonas M.",
    promotion: "MSc 2024",
    currentRole: "Data Analyst",
    company: "Doctolib",
    image: `${CDN}/67ceef2e9b9745a770b55d80_Jonasrond.avif`,
    quote: "Le Géniathon avec Doctolib a été un moment clé de ma formation. Travailler sur des données médicales réelles m'a ouvert les portes de l'entreprise. Aujourd'hui, je suis Data Analyst chez eux !",
    rating: 5
  },
  {
    name: "Imane R.",
    promotion: "Bachelor 2023",
    currentRole: "Business Analyst",
    company: "Malt",
    image: `${CDN}/67ceecb5b6bd0e19228ec3c9_Imanerond.avif`,
    quote: "Ce qui m'a le plus marqué chez Eugenia, c'est l'accompagnement personnalisé. Les professeurs sont toujours disponibles et les projets avec les entreprises m'ont permis de décrocher mon alternance.",
    rating: 5
  },
  {
    name: "Nicolas T.",
    promotion: "MSc 2024",
    currentRole: "Consultant IA",
    company: "Capgemini Invent",
    image: `${CDN}/67cef144527828430f670191_nicosouriant.avif`,
    quote: "La Méthode Eugenia m'a transformé. En 2 ans, je suis passé d'un profil purement business à un consultant capable de parler data et IA avec les équipes techniques. Un vrai game changer !",
    rating: 5
  },
  {
    name: "Marie L.",
    promotion: "Bachelor 2024",
    currentRole: "Growth Manager",
    company: "Startup en seed",
    image: `${CDN}/67ceecb5b6bd0e19228ec3c9_Imanerond.avif`,
    quote: "Les Géniathons et le BDE m'ont permis de développer des soft skills que je n'aurais jamais acquis dans une école classique. La communauté Eugenia est incroyable.",
    rating: 5
  },
  {
    name: "Thomas B.",
    promotion: "MSc 2023",
    currentRole: "Data Scientist",
    company: "Société Générale",
    image: `${CDN}/67c8273d4075557b2a85fad1_Noahquiparle-p-1080.avif`,
    quote: "L'alternance chez Eugenia m'a permis de financer mes études tout en acquérant une vraie expérience professionnelle. Le rythme était intense mais ça valait le coup !",
    rating: 5
  },
  {
    name: "Sophie D.",
    promotion: "Bachelor 2024",
    currentRole: "Customer Success Manager",
    company: "Spendesk",
    image: `${CDN}/67ceecb5b6bd0e19228ec3c9_Imanerond.avif`,
    quote: "J'ai choisi Eugenia pour la proximité avec les entreprises. Le job dating de fin d'année m'a permis de rencontrer Spendesk et de décrocher un CDI avant même la fin de mes études.",
    rating: 5
  }
];

const stats = [
  { value: "100%", label: "d'insertion professionnelle" },
  { value: "6 mois", label: "délai moyen pour trouver un emploi" },
  { value: "45K€", label: "salaire moyen à la sortie" },
  { value: "98%", label: "de satisfaction étudiante" }
];

export default function Temoignages() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Témoignages | Eugenia School - Retours d'expérience de nos étudiants et alumni"
        description="Découvrez les témoignages de nos étudiants et alumni. Ils partagent leur expérience chez Eugenia School et leur parcours professionnel après l'obtention de leur diplôme."
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
                { label: "Étudiants", href: "/etudiants" },
                { label: "Témoignages" }
              ]}
            />
            <div className="max-w-4xl mx-auto text-center mt-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Témoignages
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Découvrez les parcours de nos étudiants et alumni. Ils vous racontent leur 
                expérience chez Eugenia et comment la formation a transformé leur carrière.
              </p>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-12 bg-[#8B2346]">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 text-center text-white">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold mb-1">{stat.value}</div>
                  <p className="text-pink-100 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS GRID */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Ils témoignent</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                  La parole à nos étudiants
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.name} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FCBA35] text-[#FCBA35]" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-[#8B2346]/20 mb-2" />
                    <blockquote className="text-gray-700 mb-6 leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                          loading="lazy"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-[#8B2346] text-sm">{testimonial.promotion}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4" />
                          {testimonial.currentRole}
                        </span>
                        <span className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {testimonial.company}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO SECTION */}
        <section className="py-20 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">En vidéo</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-8">
                Découvrez leurs parcours
              </h2>
              <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-[#8B2346] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-[#6B1A35] transition-colors">
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-400">Vidéo témoignages à venir</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED ALUMNI */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-[#8B2346] font-semibold text-sm uppercase tracking-wider">Success Story</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                    De Eugenia à Doctolib
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Jonas a intégré le MSc Eugenia après une licence en économie. 
                    Passionné par la data mais sans background technique, il a trouvé chez Eugenia 
                    la formation parfaite pour développer ses compétences.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Le Géniathon avec Doctolib a été un tournant : en 3 jours, il a pu montrer 
                    ses compétences aux équipes data de l'entreprise. Quelques mois plus tard, 
                    il décrochait un CDI en tant que Data Analyst.
                  </p>
                  <blockquote className="border-l-4 border-[#8B2346] pl-4 text-gray-700 italic">
                    "Sans Eugenia, je n'aurais jamais osé postuler chez Doctolib. 
                    La formation m'a donné la confiance et les compétences pour y arriver."
                  </blockquote>
                </div>
                <div className="relative">
                  <img
                    src={`${CDN}/67ceef2e9b9745a770b55d80_Jonasrond.avif`}
                    alt="Jonas, alumni Eugenia chez Doctolib"
                    className="rounded-2xl shadow-xl w-full"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                    <p className="text-lg font-bold text-gray-900">Jonas M.</p>
                    <p className="text-[#8B2346] text-sm">Data Analyst @ Doctolib</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#8B2346] to-[#6B1A35] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Écrivez votre propre success story</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Rejoignez Eugenia School et transformez votre carrière comme eux.
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
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#8B2346] transition-colors duration-200"
              >
                Poser une question
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
