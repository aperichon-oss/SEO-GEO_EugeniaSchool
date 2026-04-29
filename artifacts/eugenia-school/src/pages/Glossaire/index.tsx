import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { BookOpen, Search, RefreshCw, ArrowRight, Hash } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { fetchAllGlossaryTerms, GlossaryTerm } from "@/lib/googleSheets";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Alphabet for navigation
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Glossaire() {
  const [terms, setTerms] = useState<GlossaryTerm[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLetters, setActiveLetters] = useState<Set<string>>(new Set());

  const loadGlossary = async () => {
    setLoading(true);
    const data = await fetchAllGlossaryTerms();
    setTerms(data);
    
    // Build set of active letters
    const letters = new Set<string>();
    data.forEach(term => {
      const firstLetter = term.term.charAt(0).toUpperCase();
      if (/[A-Z]/.test(firstLetter)) {
        letters.add(firstLetter);
      }
    });
    setActiveLetters(letters);
    
    setLoading(false);
  };

  useEffect(() => {
    loadGlossary();
  }, []);

  // Filter terms based on search
  const filteredTerms = terms.filter(term =>
    term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group terms by first letter
  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const firstLetter = term.term.charAt(0).toUpperCase();
    const key = /[A-Z]/.test(firstLetter) ? firstLetter : "#";
    if (!acc[key]) acc[key] = [];
    acc[key].push(term);
    return acc;
  }, {} as Record<string, GlossaryTerm[]>);

  // Get sorted keys
  const sortedKeys = Object.keys(groupedTerms).sort((a, b) => {
    if (a === "#") return 1;
    if (b === "#") return -1;
    return a.localeCompare(b);
  });

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <SeoHead
        title="Glossaire IA & Business | Eugenia School"
        description="Decouvrez les definitions des termes cles de l'IA, de la data et du business. Un glossaire complet pour comprendre le vocabulaire de la tech."
      />

      <AnnouncementBar />
      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-[#8B2346] to-[#5C1730]">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Glossaire IA & Business
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Toutes les definitions essentielles pour maitriser le vocabulaire de l&apos;intelligence artificielle, de la data et du business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search & Alphabet Navigation */}
        <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-0 z-40">
          <div className="container mx-auto px-4">
            {/* Search */}
            <div className="max-w-xl mx-auto mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un terme..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B2346] focus:ring-2 focus:ring-[#8B2346]/20 outline-none transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    Effacer
                  </button>
                )}
              </div>
            </div>

            {/* Alphabet Navigation */}
            <div className="flex flex-wrap justify-center gap-1 md:gap-2">
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  onClick={() => scrollToLetter(letter)}
                  disabled={!activeLetters.has(letter)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                    activeLetters.has(letter)
                      ? "bg-white border border-gray-200 text-gray-700 hover:bg-[#8B2346] hover:text-white hover:border-[#8B2346]"
                      : "bg-gray-100 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  {letter}
                </button>
              ))}
              <button
                onClick={() => scrollToLetter("#")}
                disabled={!groupedTerms["#"]}
                className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                  groupedTerms["#"]
                    ? "bg-white border border-gray-200 text-gray-700 hover:bg-[#8B2346] hover:text-white hover:border-[#8B2346]"
                    : "bg-gray-100 text-gray-300 cursor-not-allowed"
                }`}
              >
                <Hash className="w-4 h-4 mx-auto" />
              </button>
            </div>
          </div>
        </section>

        {/* Glossary Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <RefreshCw className="w-8 h-8 text-[#8B2346] animate-spin" />
                <span className="ml-3 text-gray-600">Chargement du glossaire...</span>
              </div>
            ) : filteredTerms.length === 0 ? (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {searchQuery ? "Aucun terme trouve" : "Glossaire en construction"}
                </h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  {searchQuery
                    ? `Aucun terme ne correspond a "${searchQuery}". Essayez une autre recherche.`
                    : "Les termes du glossaire seront automatiquement extraits des articles du blog. Ajoutez une section '## Glossaire' a vos articles avec le format '- **Terme**: Definition'."}
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="mt-4 text-[#8B2346] hover:underline"
                  >
                    Effacer la recherche
                  </button>
                )}
              </div>
            ) : (
              <div className="max-w-4xl mx-auto">
                {/* Stats */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">{filteredTerms.length}</span> termes dans le glossaire
                  </p>
                  <button
                    onClick={loadGlossary}
                    className="inline-flex items-center gap-2 text-sm text-[#8B2346] hover:underline"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Actualiser
                  </button>
                </div>

                {/* Terms by Letter */}
                {sortedKeys.map((letter) => (
                  <div key={letter} id={`letter-${letter}`} className="mb-10">
                    <div className="sticky top-[140px] bg-white py-2 z-30">
                      <h2 className="text-3xl font-bold text-[#8B2346]">{letter}</h2>
                    </div>
                    <div className="space-y-4 mt-4">
                      {groupedTerms[letter].map((term, idx) => (
                        <motion.div
                          key={`${term.term}-${idx}`}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {term.term}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {term.definition}
                          </p>
                          {term.sourceArticle && term.sourceSlug && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <Link
                                href={`/blog/${term.sourceSlug}`}
                                className="inline-flex items-center gap-2 text-sm text-[#8B2346] hover:underline"
                              >
                                Source : {term.sourceArticle}
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Approfondissez vos connaissances
              </h2>
              <p className="text-gray-600 mb-6">
                Decouvrez nos articles de blog pour comprendre en profondeur les concepts de l&apos;IA et du business.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B2346] text-white rounded-lg hover:bg-[#6B1A35] transition-colors"
              >
                Explorer le blog
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
