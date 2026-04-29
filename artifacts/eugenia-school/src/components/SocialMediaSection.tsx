import { motion } from "framer-motion";
import { Instagram, Linkedin, ExternalLink } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const instagramPosts = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TVzn1rpPPR3ljJpYAAQsZM7r4tMTGk.png",
    alt: "Etudiants Eugenia School en amphitheatre"
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gpdx330MCoZRTAB18KSXLy7SpEoZW1.png",
    alt: "Etudiant presentant devant ecran LVMH"
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5LUwXC2jUzarXTJOs43rprcI6L7vsE.png",
    alt: "Etudiants travaillant ensemble sur un projet"
  }
];

const linkedinPosts = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NI5mUGqLlEnxEhULcFK2dS7C9DuRJ0.png",
    author: "Anne-Claire BASCHET",
    role: "Chief Data & AI Officer - Agentic Commerce @Mirakl",
    excerpt: "Kicking off our Agent-led Company Hackathon this week. Yesterday, we launched a Mirakl x Eugenia School hackathon...",
    alt: "Hackathon Mirakl x Eugenia School"
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jfBfxeHDJiss3IsfYY7j72qjhjAD9u.png",
    author: "Stephane Velasquez",
    role: "Directeur | Eugenia School | Groupe Albert School",
    excerpt: "n8n Community Meet-up! Que tu sois deja un mordu de n8n et d'automatisations ou simplement...",
    alt: "n8n Meetup 21 Avril"
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Kj1pg74CMsnm909qVri9LhruXLF5nR.png",
    author: "Juliette Pichard",
    role: "Sr VP, Global Sales Acceleration at Mirakl",
    excerpt: "First hackathon of my life. It's never too late, they say... This morning at the Mirakl x Eugenia School hackathon...",
    alt: "Premier hackathon Mirakl x Eugenia School"
  }
];

export function SocialMediaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Suivez-nous sur les reseaux
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Decouvrez le quotidien d&apos;Eugenia School, nos hackathons et l&apos;actualite de nos etudiants
          </p>
        </motion.div>

        {/* Instagram Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">@eugenia.school</h3>
                <p className="text-sm text-gray-500">Instagram</p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/eugenia.school/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
            >
              Voir le profil
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {instagramPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href="https://www.instagram.com/eugenia.school/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-gray-900" />
                  </div>
                </div>
              </motion.a>
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
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0A66C2] rounded-xl flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Eugenia School</h3>
                <p className="text-sm text-gray-500">LinkedIn</p>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/school/eugenia-school/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
            >
              Voir la page
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {linkedinPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href="https://www.linkedin.com/school/eugenia-school/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-600">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-gray-900 truncate">{post.author}</p>
                      <p className="text-xs text-gray-500 truncate">{post.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                </div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 bg-gray-50 flex items-center justify-between text-xs text-gray-500">
                  <span>Eugenia School a republié ceci</span>
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
