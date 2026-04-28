import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Calendar, Users, Trophy, Target, BookOpen, Briefcase, Zap, Star } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { hackathons, metiers } from "@/lib/data";

const CDN = "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b";
const CDN2 = "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6";

const partnerLogos = [
  { name: "Mistral AI", src: `${CDN2}/67c707198334428e0a03399b_Mistral_AI_logo.svg` },
  { name: "Station F", src: `${CDN2}/67b741dc8e76032550ef25db_Vector%20(17).svg` },
  { name: "Microsoft", src: `${CDN2}/67cb23150f1e4c7accc02ec2_Microsoft-logo_rgb_c-gray.avif` },
  { name: "HEC Incubateur", src: `${CDN2}/67c7082cc979be3b5d9b7545_623dc37ea476183fd863f7ae_Logo%20HEC%20Incubateur.svg` },
  { name: "Make", src: `${CDN2}/67cb233dfc56a6ac10ed8289_make-logo-freelogovectors.net_.avif` },
  { name: "Dataiku", src: `${CDN2}/67cb23a50966dc16ec0edca2_Dataiku_logo.avif` },
  { name: "L'Esprit Critique", src: `${CDN2}/67cb23d7dfab8e1eceac5207_logo-site-bleu_1.avif` },
];

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

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Eugenia School | Former les esprits de demain avec un apprentissage innovant"
        description="Eugenia School est née d'une conviction : l'éducation traditionnelle ne prépare plus suffisamment aux défis du monde professionnel. Découvrez nos programmes Bachelor et MSc en IA appliquée au business."
      />
      <AnnouncementBar />
      <Navigation />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 opacity-20"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h1
                variants={fadeIn}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Former les esprits de demain avec un apprentissage innovant
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Eugenia School est née d'une conviction : l'éducation traditionnelle ne prépare plus suffisamment aux défis du monde professionnel.
                Dans un environnement en constante évolution, s'adapter aux nouvelles compétences est essentiel. C'est pourquoi nous formons
                les résolveurs de problèmes de demain avec une approche innovante et tournée vers l'emploi.
              </motion.p>
              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <div className="flex items-center gap-2 text-[#FCBA35]">
                  <Zap className="w-5 h-5" />
                  <span className="text-lg">Apprendre en faisant : dès le premier jour, nos étudiants travaillent sur des projets concrets.</span>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <div className="flex items-center gap-2 text-[#8B2346]">
                  <Target className="w-5 h-5" />
                  <span className="text-lg">Maîtriser l'IA : ils allient théorie et pratique pour exceller dans les métiers de demain.</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-12"
            >
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Ils nous font confiance
              </motion.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center"
            >
              {partnerLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-center justify-center h-16 w-32 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* STUDENT IMAGES */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="relative"
              >
                <img
                  src={`${CDN}/67ceecb5b6bd0e19228ec3c9_Imanerond.avif`}
                  alt="Une alumni d'Eugenia school sur la homepage"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="relative"
              >
                <img
                  src={`${CDN}/67ceef2e9b9745a770b55d80_Jonasrond.avif`}
                  alt="Un étudiant de bachelor est souriant"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ENTERPRISE CASES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeIn}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                DES CAS RÉELS D'ENTREPRISES PARTENAIRES
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Découvrez comment nos étudiants travaillent sur des projets concrets avec les leaders du marché
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 items-center justify-items-center mb-12"
            >
              {enterpriseLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-center justify-center h-12 w-24 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center"
            >
              <Link
                href="/entreprises-partenaires"
                className="inline-flex items-center gap-2 bg-[#8B2346] hover:bg-[#6B1A35] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Découvrir nos partenaires
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ACADEMIC LIFE */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeIn}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Vie académique
              </motion.h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#F5E6EA] rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-[#8B2346]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Programme Bachelor</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Hybridation des compétences Entrepreneuriat Proximité avec les entreprises
                  </p>
                  <Link
                    href="/programme/bachelor"
                    className="text-[#8B2346] hover:text-[#6B1A35] font-semibold inline-flex items-center gap-2"
                  >
                    EN SAVOIR PLUS
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#F5E6EA] rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#8B2346]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Programme MSc</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    En alternance Professionnalisant IA appliquées au business
                  </p>
                  <Link
                    href="/programme/msc"
                    className="text-[#8B2346] hover:text-[#6B1A35] font-semibold inline-flex items-center gap-2"
                  >
                    EN SAVOIR PLUS
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeIn}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Des challenges immersifs
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Une immersion au cœur de projets concrets avec les leaders de l'industrie. Relever de vrais défis business,
                monter en compétences avec les Business Deep Dives et explorer les acteurs clés du marché pour construire son propre parcours.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gradient-to-br from-[#F5E6EA] to-[#EBCCD3] p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bachelor business deep dives</h3>
                <p className="text-gray-700 mb-6">
                  Dès le baccalauréat, les étudiants ont la chance de côtoyer des entreprises de premier plan,
                  résolvant des défis réels alliant IA, data et business, et développant des compétences pratiques pour leur avenir professionnel.
                </p>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#8B2346] rounded-full"></div>
                    <span>Bachelor semaine 1 : Présentation des enjeux actuels de l'entreprise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#8B2346] rounded-full"></div>
                    <span>Dévoilement du sujet data et business donné aux élèves</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#8B2346] rounded-full"></div>
                    <span>Formation des équipes</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gradient-to-br from-[#FEF5E0] to-[#FDECC8] p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">MSc Géniathon</h3>
                <p className="text-gray-700 mb-6">
                  Les Géniathons des Master of Science permettent aux étudiants de travailler en mode hackathon
                  pendant 1 à 3 jours sur des cas data et business, proposés par nos entreprises partenaires.
                  Une immersion intensive pour mettre à profit leurs compétences acquises en alternance et en développer de nouvelles.
                </p>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FCBA35] rounded-full"></div>
                    <span>Semaine 1 : Rencontre entre les équipes data de Doctolib et les élèves</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FCBA35] rounded-full"></div>
                    <span>Présentation du cas business amélioré par l'IA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FCBA35] rounded-full"></div>
                    <span>Démonstration en live de la solution développée</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mt-12"
            >
              <Link
                href="/candidature"
                className="inline-flex items-center gap-2 bg-[#8B2346] hover:bg-[#6B1A35] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Candidature
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CAREERS */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeIn}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Carrières hybrides
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Façonner la carrière des étudiants : Chez Eugenia School, notre priorité ce n'est pas de placer des étudiants
                dans des entreprises, mais de développer une curiosité du monde professionnel et les accompagner vers des métiers qu'ils choisissent.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {metiers.slice(0, 6).map((metier, index) => (
                <motion.div
                  key={metier.slug}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{metier.title}</h3>
                    <span className="text-2xl font-bold text-[#8B2346]">
                      {Math.round(metier.salaryEntry.min / 1000)}-
                      {Math.round(metier.salaryEntry.max / 1000)}k
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{metier.description}</p>
                  <Link
                    href={`/metiers/${metier.slug}`}
                    className="text-[#8B2346] hover:text-[#6B1A35] font-semibold text-sm inline-flex items-center gap-1"
                  >
                    En savoir plus
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mt-12"
            >
              <Link
                href="/metiers"
                className="inline-flex items-center gap-2 bg-[#8B2346] hover:bg-[#6B1A35] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Découvrir tous les métiers
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* EVENTS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeIn}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Tenez-vous au courant des derniers événements, actualités et temps forts
              </motion.h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gradient-to-r from-[#8B2346] to-[#6B1A35] text-white p-8 rounded-xl mb-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="w-8 h-8" />
                  <div>
                    <h3 className="text-2xl font-bold">NOTRE PROCHAIN ÉVÉNEMENT</h3>
                    <p className="text-[#EBCCD3]">Journée Portes Ouvertes & Découverte de l'IA</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <Trophy className="w-5 h-5" />
                  <span className="text-lg">Samedi 4 avril 2026</span>
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <Users className="w-5 h-5" />
                  <span className="text-lg">02 DAYS : 08 HRS : 14 MINS</span>
                </div>
                <Link
                  href="/evenements/journee-portes-ouvertes-decouverte"
                  className="inline-flex items-center gap-2 bg-white text-[#8B2346] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  S'inscrire
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-center"
              >
                <Link
                  href="/evenements"
                  className="inline-flex items-center gap-2 text-[#8B2346] hover:text-[#6B1A35] font-semibold"
                >
                  Tous les événements
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#8B2346] hover:text-[#6B1A35] font-semibold text-lg"
              >
                Le blog
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#8B2346] text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeIn}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                EUGENIA SCHOOL - DEVENEZ UN GAME CHANGER
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-xl text-[#EBCCD3] mb-8 max-w-2xl mx-auto"
              >
                Rejoignez l'aventure
              </motion.p>
              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
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
              </motion.div>
              <motion.p
                variants={fadeIn}
                className="text-[#EBCCD3] mt-8 max-w-2xl mx-auto"
              >
                Nous transformons l'énergie des élèves, en compétences IA concrètes, ouvrant la voie à des carrières d'avenir,
                au-delà du cadre académique traditionnel.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
