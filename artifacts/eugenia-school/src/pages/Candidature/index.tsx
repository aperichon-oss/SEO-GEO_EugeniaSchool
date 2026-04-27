import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

const etapes = [
  {
    num: "01",
    title: "Envoi de la candidature",
    desc: "Les candidats postulent gratuitement via le portail en soumettant les documents requis, notamment les relevés de notes, le CV et une lettre de motivation.",
  },
  {
    num: "02",
    title: "Examen d'éligibilité",
    desc: "L'équipe des admissions examine les candidatures sous 10 jours et informe les candidats de leur passage à l'étape de l'entretien.",
  },
  {
    num: "03",
    title: "Entretien d'admission",
    desc: "Un entretien individuel pour évaluer la motivation et le potentiel du candidat.",
  },
  {
    num: "04",
    title: "Décision finale",
    desc: "Les candidats reçoivent une réponse officielle sous 5 jours.",
  },
];

export default function Candidature() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    profil: "",
    programme: "",
    annee: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead
        title="Candidater | Eugenia School — Bachelor & MSc IA Applied to Business"
        description="Déposez votre candidature à Eugenia School. Programme Bachelor (3 ans, hors Parcoursup) et MSc (2 ans en alternance, hors MonMaster) en double diplôme avec GEM."
      />
      <AnnouncementBar />
      <Navigation />

      <main className="flex-1">
        {/* HERO */}
        <div className="bg-[#0A0A0A] text-white pt-12 pb-20">
          <div className="container mx-auto px-6">
            <Breadcrumb
              items={[
                { label: "Accueil", href: "/" },
                { label: "Candidater" },
              ]}
            />
            <div className="max-w-3xl mt-10">
              <div className="inline-block border border-[#2A2A2A] rounded-full px-4 py-1 text-xs font-bold tracking-widest uppercase mb-6 text-[#9E9E9E]">
                Admissions 2026
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Rejoignez <span className="text-[#FF6B2B]">Eugenia School</span>
              </h1>
              <p className="text-lg text-[#9E9E9E] leading-relaxed">
                Les candidatures pour Janvier et Septembre 2026 sont ouvertes. Hors Parcoursup — le processus est simple, humain et rapide.
              </p>
            </div>
          </div>
        </div>

        <div className="py-20 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* PROCESSUS */}
              <div>
                <h2 className="text-2xl font-extrabold text-[#0A0A0A] mb-10">Le processus d'admission</h2>
                <div className="space-y-8">
                  {etapes.map((e, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B2B] text-white rounded-xl flex items-center justify-center font-extrabold text-sm">
                        {e.num}
                      </div>
                      <div>
                        <h3 className="font-extrabold text-[#0A0A0A] mb-1">{e.title}</h3>
                        <p className="text-[#5C5C5C] text-sm leading-relaxed">{e.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-white rounded-2xl border border-[#E8E4DF] p-6">
                  <h3 className="font-extrabold text-[#0A0A0A] mb-4">Conditions d'admission</h3>
                  <ul className="space-y-3">
                    {[
                      "Bachelor : Bac ou équivalent (tous bacs acceptés)",
                      "MSc : Bac+3 ou Bac+4 minimum",
                      "3ème année alternance : Bac+2 (BTS, BUT, L2…)",
                      "Aucun prérequis en programmation",
                      "Motivation et curiosité pour l'IA et le business",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#3A3A3A]">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6B2B] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FORM */}
              <div className="bg-white rounded-3xl border border-[#E8E4DF] p-8 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-[#FF6B2B] rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#0A0A0A] mb-3">Candidature reçue !</h3>
                    <p className="text-[#5C5C5C]">
                      Notre équipe prendra contact avec vous dans les 48h pour la suite du processus.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-extrabold text-[#0A0A0A] mb-8">Déposez votre candidature</h2>
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="prenom" className="block text-xs font-bold text-[#5C5C5C] uppercase tracking-wider mb-2">
                            Prénom *
                          </label>
                          <input
                            id="prenom"
                            name="prenom"
                            type="text"
                            required
                            value={form.prenom}
                            onChange={handleChange}
                            className="w-full border border-[#E8E4DF] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B2B] transition-colors"
                            placeholder="Votre prénom"
                          />
                        </div>
                        <div>
                          <label htmlFor="nom" className="block text-xs font-bold text-[#5C5C5C] uppercase tracking-wider mb-2">
                            Nom *
                          </label>
                          <input
                            id="nom"
                            name="nom"
                            type="text"
                            required
                            value={form.nom}
                            onChange={handleChange}
                            className="w-full border border-[#E8E4DF] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B2B] transition-colors"
                            placeholder="Votre nom"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-[#5C5C5C] uppercase tracking-wider mb-2">
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full border border-[#E8E4DF] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B2B] transition-colors"
                          placeholder="votre@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="telephone" className="block text-xs font-bold text-[#5C5C5C] uppercase tracking-wider mb-2">
                          Téléphone
                        </label>
                        <input
                          id="telephone"
                          name="telephone"
                          type="tel"
                          value={form.telephone}
                          onChange={handleChange}
                          className="w-full border border-[#E8E4DF] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B2B] transition-colors"
                          placeholder="+33 6 00 00 00 00"
                        />
                      </div>

                      <div>
                        <label htmlFor="programme" className="block text-xs font-bold text-[#5C5C5C] uppercase tracking-wider mb-2">
                          Programme souhaité *
                        </label>
                        <select
                          id="programme"
                          name="programme"
                          required
                          value={form.programme}
                          onChange={handleChange}
                          className="w-full border border-[#E8E4DF] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B2B] transition-colors bg-white"
                        >
                          <option value="">Choisissez un programme</option>
                          <option>Bachelor AI Applied to Business</option>
                          <option>MSc AI Applied to Business</option>
                          <option>3ème année Bachelor en alternance</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="annee" className="block text-xs font-bold text-[#5C5C5C] uppercase tracking-wider mb-2">
                          Niveau actuel *
                        </label>
                        <select
                          id="annee"
                          name="annee"
                          required
                          value={form.annee}
                          onChange={handleChange}
                          className="w-full border border-[#E8E4DF] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B2B] transition-colors bg-white"
                        >
                          <option value="">Votre niveau actuel</option>
                          <option>Terminale</option>
                          <option>Bac+1</option>
                          <option>Bac+2</option>
                          <option>Bac+3</option>
                          <option>Bac+4</option>
                          <option>Bac+5 et plus</option>
                          <option>En activité professionnelle</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-bold text-[#5C5C5C] uppercase tracking-wider mb-2">
                          Votre projet professionnel
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          value={form.message}
                          onChange={handleChange}
                          className="w-full border border-[#E8E4DF] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B2B] transition-colors resize-none"
                          placeholder="Décrivez brièvement votre projet et votre motivation..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex justify-center items-center gap-2 bg-[#FF6B2B] hover:bg-[#E5521A] text-white px-6 py-4 rounded-xl font-bold text-sm transition-colors group"
                      >
                        Envoyer ma candidature
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </button>

                      <p className="text-xs text-center text-[#9E9E9E]">
                        En soumettant ce formulaire, vous acceptez d'être contacté par l'équipe d'Eugenia School.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
