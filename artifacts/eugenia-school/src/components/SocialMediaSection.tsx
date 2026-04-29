import { motion } from "framer-motion";
import { Instagram, Linkedin, ExternalLink, Heart, MessageCircle, Share2 } from "lucide-react";
import { Link } from "wouter";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

// Static posts data - In a real implementation, these would come from Instagram/LinkedIn APIs
// For now, we display curated content that can be manually updated
const instagramPosts = [
  {
    id: "1",
    image: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/68494eb4e1d0325098170560_wttj%20article.png",
    caption: "Retour sur notre hackathon avec Welcome to the Jungle ! Nos etudiants ont releve le defi de reinventer l'experience collaborateur avec l'IA.",
    likes: 124,
    comments: 18,
    date: "Il y a 2 jours",
  },
  {
    id: "2",
    image: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/683f0f281eaed1b019de2da2_carrefourlinks.png",
    caption: "Business Deep Dive avec Carrefour Links : 3 semaines d'immersion dans la data retail pour nos Bachelor !",
    likes: 98,
    comments: 12,
    date: "Il y a 5 jours",
  },
  {
    id: "3",
    image: "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b/67ceecb5b6bd0e19228ec3c9_Imanerond.avif",
    caption: "Decouvrez le temoignage d'Imane, alumni Eugenia School, maintenant Data Analyst chez une scale-up parisienne.",
    likes: 156,
    comments: 24,
    date: "Il y a 1 semaine",
  },
];

const linkedinPosts = [
  {
    id: "1",
    title: "Eugenia School x Google Cloud",
    content: "Nous sommes ravis d'annoncer notre nouveau partenariat avec Google Cloud ! Nos etudiants MSc auront acces aux certifications BigQuery et aux outils cloud de pointe.",
    reactions: 234,
    comments: 42,
    date: "Il y a 3 jours",
  },
  {
    id: "2",
    title: "Journee Portes Ouvertes",
    content: "Vous souhaitez decouvrir notre approche pedagogique unique ? Rejoignez-nous lors de notre prochaine JPO le samedi 4 avril. Ateliers IA, rencontres avec nos etudiants et visite du campus au programme !",
    reactions: 189,
    comments: 28,
    date: "Il y a 1 semaine",
  },
];

const INSTAGRAM_URL = "https://www.instagram.com/eugenia.school/";
const LINKEDIN_URL = "https://www.linkedin.com/school/eugenia-school/";

export function SocialMediaSection() {
  return (
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
            Suivez-nous sur les reseaux
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Restez connectes avec la communaute Eugenia School. Decouvrez nos actualites, evenements et la vie de nos etudiants.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Instagram Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Instagram</h3>
                  <p className="text-sm text-gray-500">@eugenia.school</p>
                </div>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#8B2346] hover:text-[#6B1A35] font-semibold text-sm transition-colors"
              >
                Voir le profil
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {instagramPosts.map((post) => (
                <a
                  key={post.id}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100"
                >
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white text-xs line-clamp-3 mb-3">{post.caption}</p>
                    <div className="flex items-center gap-4 text-white/80 text-xs">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* LinkedIn Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0A66C2] rounded-xl flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">LinkedIn</h3>
                  <p className="text-sm text-gray-500">Eugenia School</p>
                </div>
              </div>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#8B2346] hover:text-[#6B1A35] font-semibold text-sm transition-colors"
              >
                Voir le profil
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-4">
              {linkedinPosts.map((post) => (
                <a
                  key={post.id}
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#8B2346] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">ES</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900 group-hover:text-[#8B2346] transition-colors">
                          {post.title}
                        </h4>
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-3 mb-3">{post.content}</p>
                      <div className="flex items-center gap-4 text-gray-500 text-xs">
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {post.reactions} reactions
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {post.comments} commentaires
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
              Suivre sur Instagram
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0A66C2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#004182] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Suivre sur LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
