import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function MSc() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead 
        title="Master of Science AI Applied to Business | Eugenia School" 
        description="Master en 2 ans 100% alternance, hors MonMaster. Double diplome GEM. Devenez Data Manager, Consultant IA, Growth Hacker." 
      />
      <AnnouncementBar />
      <Navigation />

      <main className="flex-1">
        {/* HERO */}
        <section className="bg-[#0A0A0A] text-white pt-12 pb-24 border-b border-[#2A2A2A]">
          <div className="container mx-auto px-6">
            <Breadcrumb 
              items={[
                { label: "Accueil", href: "/" },
                { label: "Formations", href: "/formations" },
                { label: "MSc" }
              ]} 
            />
            
            <div className="max-w-4xl mt-12">
              <div className="inline-block bg-[#2A2A2A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6 border border-[#5C5C5C]">Bac +4/5</div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-8">
                Master of Science <span className="text-[#8B2346]">AI Applied to Business</span> (Hors MonMaster)
              </h1>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 border-t border-b border-[#2A2A2A] py-8">
                <div>
                  <div className="text-xs text-[#9E9E9E] uppercase tracking-wider font-bold mb-1">Duree</div>
                  <div className="font-bold text-xl">2 ans</div>
                </div>
                <div>
                  <div className="text-xs text-[#9E9E9E] uppercase tracking-wider font-bold mb-1">Rythme</div>
                  <div className="font-bold text-xl text-[#8B2346]">100% Alternance</div>
                </div>
                <div>
                  <div className="text-xs text-[#9E9E9E] uppercase tracking-wider font-bold mb-1">Admission</div>
                  <div className="font-bold text-xl">Hors MonMaster</div>
                </div>
                <div>
                  <div className="text-xs text-[#9E9E9E] uppercase tracking-wider font-bold mb-1">Diplome</div>
                  <div className="font-bold text-xl">Double diplome GEM</div>
                </div>
              </div>
              
              <p className="text-lg text-[#9E9E9E] leading-relaxed mb-10">
                Le Master of Science (MSc) forme des profils strategiques hautement qualifies, capables de piloter la transformation numerique des entreprises. Conçu pour repondre aux besoins des scale-ups et des grands groupes, ce programme se realise a 100% en alternance.
              </p>
              
              <Link href="/candidature" className="inline-flex justify-center items-center gap-2 bg-[#8B2346] text-[#0A0A0A] px-8 py-4 rounded-full font-bold text-base transition-all hover:bg-white">
                Candidater maintenant
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="py-24 bg-[#F5F2EE]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-12">Competences cles developpees</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              {[
                "Architecture Data et Cloud (AWS, GCP)",
                "Deploiement de modeles de Machine Learning",
                "Advanced Prompt Engineering & IA Generative",
                "Management de la transformation digitale",
                "Data Strategy & Gouvernance",
                "Advanced Business Analytics",
                "Maitrise des workflows complexes (Make, n8n)",
                "Leadership et Pilotage de projets tech",
                "Ethique et conformite IA (AI Act)"
              ].map((skill, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8B2346] shrink-0" />
                  <span className="text-[#0A0A0A] font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CURRICULUM */}
        <section className="py-24 bg-white border-y border-[#E0DDD8]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-xs font-bold tracking-widest uppercase mb-4 text-[#5C5C5C]">Structure du programme</div>
            <h2 className="text-4xl font-bold text-[#0A0A0A] mb-16">Le cursus annee par annee</h2>
            
            <div className="space-y-12">
              <div className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute left-[120px] top-0 bottom-0 w-px bg-[#E0DDD8]"></div>
                
                <div className="md:grid md:grid-cols-[120px_1fr] gap-8 relative">
                  <div className="md:text-right pt-2 font-bold text-xl text-[#0A0A0A] mb-2 md:mb-0">
                    Annee 4
                    <div className="absolute left-0 md:left-[120px] top-4 w-3 h-3 bg-[#0A0A0A] rounded-full -translate-x-1.5 border-2 border-white"></div>
                  </div>
                  <div className="bg-[#F5F2EE] p-8 rounded-2xl border border-[#E0DDD8]">
                    <div className="inline-block bg-white text-[#0A0A0A] text-[10px] font-bold px-2 py-1 rounded border border-[#E0DDD8] mb-4 uppercase tracking-wider">Alternance: 3 semaines entreprise / 1 semaine ecole</div>
                    <h3 className="text-xl font-bold text-[#0A0A0A] mb-4">Expertise Data & IA Appliquee</h3>
                    <p className="text-[#5C5C5C] mb-6">Maitrise des architectures de donnees et des modeles predictifs au service de la performance.</p>
                    <ul className="space-y-2 text-sm text-[#0A0A0A] font-medium">
                      <li>• Advanced Data Engineering & Cloud Data</li>
                      <li>• Machine Learning Ops (MLOps)</li>
                      <li>• Strategy & Business Models in the AI Era</li>
                      <li>• Advanced Corporate Finance</li>
                      <li>• 3 Geniathons (Hackathons Niveau Master)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-[120px_1fr] gap-8 relative">
                  <div className="md:text-right pt-2 font-bold text-xl text-[#0A0A0A] mb-2 md:mb-0">
                    Annee 5
                    <div className="absolute left-0 md:left-[120px] top-4 w-3 h-3 bg-[#8B2346] rounded-full -translate-x-1.5 border-2 border-[#0A0A0A]"></div>
                  </div>
                  <div className="bg-[#0A0A0A] text-white p-8 rounded-2xl border border-[#2A2A2A]">
                    <div className="inline-block bg-[#1A1A1A] text-white text-[10px] font-bold px-2 py-1 rounded border border-[#333] mb-4 uppercase tracking-wider">Alternance: 3 semaines entreprise / 1 semaine ecole</div>
                    <h3 className="text-xl font-bold text-white mb-4">Leadership Tech & Innovation</h3>
                    <p className="text-[#9E9E9E] mb-6">Formation des futurs leaders capables de gerer des projets de transformation complexes.</p>
                    <ul className="space-y-2 text-sm text-[#F5F2EE] font-medium">
                      <li>• Generative AI & Automation (LLMs, Agents)</li>
                      <li>• Product Management & Design Thinking</li>
                      <li>• Change Management & Leadership</li>
                      <li>• AI Ethics & Gouvernance</li>
                      <li>• Grand Oral & Memoire de recherche GEM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ADMISSION CTA */}
        <section className="py-24 bg-[#0A0A0A] relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8B2346]/10 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Accedez aux meilleurs postes</h2>
            <p className="text-xl text-[#9E9E9E] max-w-2xl mx-auto mb-10">
              Candidatures ouvertes aux etudiants ayant valide un Bac+3 en business, ingenieurie ou mathematiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/candidature" className="inline-flex justify-center items-center gap-2 bg-[#8B2346] text-[#0A0A0A] px-8 py-4 rounded-full font-bold text-base transition-all hover:bg-white hover:text-[#0A0A0A]">
                Candidater au MSc
              </Link>
              <Link href="/admissions/processus" className="inline-flex justify-center items-center gap-2 bg-[#1A1A1A] border border-[#2A2A2A] text-white px-8 py-4 rounded-full font-bold text-base transition-all hover:bg-white hover:text-[#0A0A0A]">
                Details de l'admission
              </Link>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
