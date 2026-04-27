import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function Bachelor() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead 
        title="Bachelor AI Applied to Business | Eugenia School" 
        description="Formation post-bac en 3 ans hors Parcoursup. Double diplome avec GEM. Devenez un expert hybride business et tech." 
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
                { label: "Bachelor" }
              ]} 
            />
            
            <div className="max-w-4xl mt-12">
              <div className="inline-block bg-white text-[#0A0A0A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">Formation Post-Bac</div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-8">
                Bachelor <span className="text-[#8B2346]">AI Applied to Business</span> (Hors Parcoursup)
              </h1>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 border-t border-b border-[#2A2A2A] py-8">
                <div>
                  <div className="text-xs text-[#9E9E9E] uppercase tracking-wider font-bold mb-1">Duree</div>
                  <div className="font-bold text-xl">3 ans</div>
                </div>
                <div>
                  <div className="text-xs text-[#9E9E9E] uppercase tracking-wider font-bold mb-1">Rythme</div>
                  <div className="font-bold text-xl">Initial + Alternance</div>
                </div>
                <div>
                  <div className="text-xs text-[#9E9E9E] uppercase tracking-wider font-bold mb-1">Admission</div>
                  <div className="font-bold text-xl text-[#8B2346]">Hors Parcoursup</div>
                </div>
                <div>
                  <div className="text-xs text-[#9E9E9E] uppercase tracking-wider font-bold mb-1">Diplome</div>
                  <div className="font-bold text-xl">Double diplome GEM</div>
                </div>
              </div>
              
              <p className="text-lg text-[#9E9E9E] leading-relaxed mb-10">
                Le Bachelor d'Eugenia School est conçu pour former la nouvelle generation de professionnels capables de maitriser les outils technologiques (IA, Data, Code) tout en comprenant les enjeux strategiques et financiers de l'entreprise. Des la premiere annee, vous etes immerges dans des projets reels portes par nos entreprises partenaires.
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
                "Programmation Python & SQL",
                "Modelisation financiere (Excel avance)",
                "Visualisation de donnees (Power BI, Tableau)",
                "Prompt Engineering & IA Generative",
                "Gestion de projet agile",
                "Techniques de vente et negociation",
                "Marketing digital & Growth Hacking",
                "Strategie d'entreprise",
                "Communication et prise de parole en public"
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
                    Annee 1
                    <div className="absolute left-0 md:left-[120px] top-4 w-3 h-3 bg-[#0A0A0A] rounded-full -translate-x-1.5 border-2 border-white"></div>
                  </div>
                  <div className="bg-[#F5F2EE] p-8 rounded-2xl border border-[#E0DDD8]">
                    <h3 className="text-xl font-bold text-[#0A0A0A] mb-4">Fondamentaux Tech & Business</h3>
                    <p className="text-[#5C5C5C] mb-6">Acquisition des bases solides en mathematiques, statistiques, programmation et gestion d'entreprise.</p>
                    <ul className="space-y-2 text-sm text-[#0A0A0A] font-medium">
                      <li>• Introduction au code (Python, SQL)</li>
                      <li>• Mathematiques pour la Data</li>
                      <li>• Principes de micro et macro economie</li>
                      <li>• Comptabilite et analyse financiere</li>
                      <li>• 2 Geniathons (Hackathons business)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute left-[120px] top-0 bottom-0 w-px bg-[#E0DDD8]"></div>
                
                <div className="md:grid md:grid-cols-[120px_1fr] gap-8 relative">
                  <div className="md:text-right pt-2 font-bold text-xl text-[#0A0A0A] mb-2 md:mb-0">
                    Annee 2
                    <div className="absolute left-0 md:left-[120px] top-4 w-3 h-3 bg-[#0A0A0A] rounded-full -translate-x-1.5 border-2 border-white"></div>
                  </div>
                  <div className="bg-[#F5F2EE] p-8 rounded-2xl border border-[#E0DDD8]">
                    <h3 className="text-xl font-bold text-[#0A0A0A] mb-4">Approfondissement et Projets</h3>
                    <p className="text-[#5C5C5C] mb-6">Montee en puissance sur l'analyse de donnees complexes et la strategie.</p>
                    <ul className="space-y-2 text-sm text-[#0A0A0A] font-medium">
                      <li>• Machine Learning Fundamentals</li>
                      <li>• Data Visualisation avancée</li>
                      <li>• Strategie d'entreprise et marketing</li>
                      <li>• Corporate Finance</li>
                      <li>• Stage de 3 à 4 mois</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-[120px_1fr] gap-8 relative">
                  <div className="md:text-right pt-2 font-bold text-xl text-[#0A0A0A] mb-2 md:mb-0">
                    Annee 3
                    <div className="absolute left-0 md:left-[120px] top-4 w-3 h-3 bg-[#8B2346] rounded-full -translate-x-1.5 border-2 border-[#0A0A0A]"></div>
                  </div>
                  <div className="bg-[#0A0A0A] text-white p-8 rounded-2xl border border-[#2A2A2A]">
                    <div className="inline-block bg-[#8B2346] text-[#0A0A0A] text-[10px] font-bold px-2 py-1 rounded mb-4 uppercase tracking-wider">Alternance possible</div>
                    <h3 className="text-xl font-bold text-white mb-4">Specialisation et Alternance</h3>
                    <p className="text-[#9E9E9E] mb-6">Mise en pratique directe en entreprise avec un rythme d'alternance ou projet de fin d'etudes.</p>
                    <ul className="space-y-2 text-sm text-[#F5F2EE] font-medium">
                      <li>• Deploiement de modeles d'IA</li>
                      <li>• Entrepreneuriat et Innovation</li>
                      <li>• Ethique de la Data</li>
                      <li>• Management d'equipe</li>
                      <li>• Memoire de fin d'etudes (Double Diplome GEM)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ADMISSION CTA */}
        <section className="py-24 bg-[#8B2346]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A0A0A] mb-6 tracking-tight">Pret a rejoindre l'aventure ?</h2>
            <p className="text-xl text-[#0A0A0A] max-w-2xl mx-auto mb-10 font-medium">
              Les admissions sont ouvertes pour la rentree 2026. L'admission se fait hors Parcoursup, sur etude de dossier et entretien de motivation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/candidature" className="inline-flex justify-center items-center gap-2 bg-[#0A0A0A] text-white px-8 py-4 rounded-full font-bold text-base transition-all hover:bg-white hover:text-[#0A0A0A]">
                Demarrer ma candidature
              </Link>
              <Link href="/admissions/processus" className="inline-flex justify-center items-center gap-2 bg-transparent border-2 border-[#0A0A0A] text-[#0A0A0A] px-8 py-4 rounded-full font-bold text-base transition-all hover:bg-[#0A0A0A] hover:text-white">
                Voir le processus
              </Link>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
