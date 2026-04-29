import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Download, FileText, CheckCircle, BookOpen, Users, Briefcase, GraduationCap } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const CDN = "https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b";

const brochureContent = [
  { icon: BookOpen, title: "Programmes détaillés", description: "Bachelor et MSc en détail" },
  { icon: Users, title: "Méthode pédagogique", description: "Notre approche unique" },
  { icon: Briefcase, title: "Entreprises partenaires", description: "150+ partenaires" },
  { icon: GraduationCap, title: "Débouchés", description: "Métiers et salaires" }
];

export default function Brochure() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    currentLevel: "",
    acceptNewsletter: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Télécharger la Brochure | Eugenia School - Programmes Bachelor et MSc"
        description="Téléchargez gratuitement la brochure d'Eugenia School : découvrez nos programmes Bachelor et MSc, notre méthode pédagogique, nos entreprises partenaires et les débouchés."
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
                { label: "Brochure" }
              ]}
            />
            <div className="max-w-4xl mx-auto text-center mt-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Téléchargez notre brochure
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Découvrez en détail nos programmes, notre méthode pédagogique unique 
                et les opportunités de carrière qui s'offrent à vous après Eugenia School.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* BROCHURE PREVIEW */}
                <div>
                  <div className="bg-gradient-to-br from-[#8B2346] to-[#6B1A35] rounded-2xl p-8 text-white mb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                        <FileText className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">Brochure Eugenia School</h2>
                        <p className="text-pink-100">Édition 2025-2026</p>
                      </div>
                    </div>
                    <div className="aspect-[3/4] bg-white/10 rounded-lg flex items-center justify-center mb-6">
                      <img
                        src={`${CDN}/67cef144527828430f670191_nicosouriant.avif`}
                        alt="Aperçu de la brochure"
                        className="w-full h-full object-cover rounded-lg opacity-50"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-pink-100 text-sm text-center">
                      32 pages - Format PDF - 5 Mo
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-900">Ce que vous trouverez dans la brochure :</h3>
                    {brochureContent.map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#F5E6EA] rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-[#8B2346]" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{item.title}</p>
                          <p className="text-gray-500 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FORM */}
                <div>
                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Merci !</h3>
                      <p className="text-gray-600 mb-6">
                        Votre brochure est en cours de téléchargement. 
                        Vous recevrez également un email avec le lien de téléchargement.
                      </p>
                      <div className="space-y-4">
                        <button className="inline-flex items-center gap-2 bg-[#8B2346] hover:bg-[#6B1A35] text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full justify-center">
                          <Download className="w-5 h-5" />
                          Télécharger la brochure
                        </button>
                        <Link
                          href="/candidature"
                          className="inline-flex items-center gap-2 border-2 border-[#8B2346] text-[#8B2346] px-6 py-3 rounded-lg font-semibold hover:bg-[#8B2346] hover:text-white transition-colors w-full justify-center"
                        >
                          Candidater maintenant
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Recevoir la brochure</h3>
                      <p className="text-gray-600 mb-6">
                        Remplissez ce formulaire pour recevoir notre brochure par email.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                              Prénom *
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              required
                              value={formData.firstName}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B2346] focus:border-transparent"
                              placeholder="Votre prénom"
                            />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                              Nom *
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              required
                              value={formData.lastName}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B2346] focus:border-transparent"
                              placeholder="Votre nom"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B2346] focus:border-transparent"
                            placeholder="votre@email.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Téléphone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B2346] focus:border-transparent"
                            placeholder="06 XX XX XX XX"
                          />
                        </div>

                        <div>
                          <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                            Programme qui vous intéresse *
                          </label>
                          <select
                            id="program"
                            name="program"
                            required
                            value={formData.program}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B2346] focus:border-transparent"
                          >
                            <option value="">Sélectionnez un programme</option>
                            <option value="bachelor">Bachelor (Post-Bac, 3 ans)</option>
                            <option value="msc">MSc (Bac+3, 2 ans)</option>
                            <option value="both">Les deux programmes</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="currentLevel" className="block text-sm font-medium text-gray-700 mb-1">
                            Votre niveau actuel *
                          </label>
                          <select
                            id="currentLevel"
                            name="currentLevel"
                            required
                            value={formData.currentLevel}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B2346] focus:border-transparent"
                          >
                            <option value="">Sélectionnez votre niveau</option>
                            <option value="terminale">Terminale</option>
                            <option value="bac">Bac obtenu</option>
                            <option value="bac1">Bac+1</option>
                            <option value="bac2">Bac+2</option>
                            <option value="bac3">Bac+3 (Licence/Bachelor)</option>
                            <option value="bac4">Bac+4</option>
                            <option value="bac5">Bac+5 ou plus</option>
                            <option value="pro">En reconversion professionnelle</option>
                          </select>
                        </div>

                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            id="acceptNewsletter"
                            name="acceptNewsletter"
                            checked={formData.acceptNewsletter}
                            onChange={handleChange}
                            className="mt-1 w-4 h-4 text-[#8B2346] border-gray-300 rounded focus:ring-[#8B2346]"
                          />
                          <label htmlFor="acceptNewsletter" className="text-sm text-gray-600">
                            J'accepte de recevoir des informations sur Eugenia School (événements, actualités, conseils orientation)
                          </label>
                        </div>

                        <button
                          type="submit"
                          className="w-full inline-flex items-center justify-center gap-2 bg-[#8B2346] hover:bg-[#6B1A35] text-white px-6 py-4 rounded-lg font-semibold transition-colors"
                        >
                          <Download className="w-5 h-5" />
                          Télécharger la brochure
                        </button>

                        <p className="text-xs text-gray-500 text-center">
                          En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                        </p>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#8B2346] to-[#6B1A35] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à nous rejoindre ?</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              La brochure vous a convaincu ? Lancez votre candidature en quelques minutes.
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
                href="/evenements"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#8B2346] transition-colors duration-200"
              >
                Voir les événements
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
