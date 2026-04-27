import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Calendar, FileText, UserPlus, CreditCard } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function AdmissionsHub() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead 
        title="Admissions | Eugenia School" 
        description="Rejoignez Eugenia School. Admissions hors Parcoursup, sur dossier et entretien. Découvrez les modalités de candidature et de financement." 
      />
      <AnnouncementBar />
      <Navigation />

      <main className="flex-1 bg-[#F5F2EE]">
        {/* HERO */}
        <div className="bg-[#0A0A0A] text-white pt-12 pb-24 border-b border-[#2A2A2A]">
          <div className="container mx-auto px-6">
            <Breadcrumb 
              items={[
                { label: "Accueil", href: "/" },
                { label: "Admissions" }
              ]} 
            />
            <div className="max-w-4xl mt-8">
              <div className="inline-block bg-[#8B2346] text-[#0A0A0A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">Rentrées 2026</div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
                Processus <span className="text-[#8B2346]">d'admission</span>
              </h1>
              <p className="text-lg text-[#9E9E9E] leading-relaxed max-w-2xl">
                L'admission à Eugenia School se fait entièrement en dehors des plateformes classiques (hors Parcoursup, hors MonMaster). Nous privilégions l'étude de dossier et la motivation lors d'un entretien.
              </p>
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A0A0A] mb-12 text-center">Les 4 étapes pour nous rejoindre</h2>
              
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 bg-white p-8 rounded-2xl border border-[#E0DDD8] shadow-sm relative overflow-hidden group hover:border-[#0A0A0A] transition-colors">
                  <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#0A0A0A] group-hover:bg-[#8B2346] transition-colors"></div>
                  <div className="flex-shrink-0 w-16 h-16 bg-[#F5F2EE] rounded-full flex items-center justify-center font-bold text-2xl text-[#0A0A0A]">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 flex items-center gap-2"><FileText className="w-5 h-5 text-[#8B2346]" /> Candidature en ligne</h3>
                    <p className="text-[#5C5C5C] leading-relaxed">Remplissez le formulaire de candidature en ligne. Préparez votre CV, vos derniers bulletins scolaires (ou diplômes) et une lettre de motivation décrivant votre projet professionnel.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 bg-white p-8 rounded-2xl border border-[#E0DDD8] shadow-sm relative overflow-hidden group hover:border-[#0A0A0A] transition-colors">
                  <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#0A0A0A] group-hover:bg-[#8B2346] transition-colors"></div>
                  <div className="flex-shrink-0 w-16 h-16 bg-[#F5F2EE] rounded-full flex items-center justify-center font-bold text-2xl text-[#0A0A0A]">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 flex items-center gap-2"><UserPlus className="w-5 h-5 text-[#8B2346]" /> Entretien de motivation</h3>
                    <p className="text-[#5C5C5C] leading-relaxed">Si votre dossier est retenu, vous êtes convoqué à un entretien visio ou physique de 30 minutes avec un membre de l'équipe pédagogique. L'objectif : comprendre votre parcours et évaluer votre motivation.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 bg-white p-8 rounded-2xl border border-[#E0DDD8] shadow-sm relative overflow-hidden group hover:border-[#0A0A0A] transition-colors">
                  <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#0A0A0A] group-hover:bg-[#8B2346] transition-colors"></div>
                  <div className="flex-shrink-0 w-16 h-16 bg-[#F5F2EE] rounded-full flex items-center justify-center font-bold text-2xl text-[#0A0A0A]">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#8B2346]" /> Décision d'admission</h3>
                    <p className="text-[#5C5C5C] leading-relaxed">Vous recevez une réponse sous 48 à 72h ouvrées après votre entretien. Si la réponse est positive, vous recevez votre contrat d'inscription.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 bg-white p-8 rounded-2xl border border-[#E0DDD8] shadow-sm relative overflow-hidden group hover:border-[#0A0A0A] transition-colors">
                  <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#0A0A0A] group-hover:bg-[#8B2346] transition-colors"></div>
                  <div className="flex-shrink-0 w-16 h-16 bg-[#F5F2EE] rounded-full flex items-center justify-center font-bold text-2xl text-[#0A0A0A]">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 flex items-center gap-2"><Calendar className="w-5 h-5 text-[#8B2346]" /> Inscription & Rentrée</h3>
                    <p className="text-[#5C5C5C] leading-relaxed">Signature du contrat, règlement des frais ou mise en place de l'alternance. Bienvenue chez Eugenia School pour la rentrée de septembre ou janvier !</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link href="/candidature" className="inline-flex justify-center items-center gap-2 bg-[#0A0A0A] text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-[#8B2346] hover:text-[#0A0A0A]">
                  Démarrer ma candidature <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FINANCEMENT */}
        <section className="py-24 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1A1A1A] mb-6">
                  <CreditCard className="w-8 h-8 text-[#8B2346]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Financement de vos études</h2>
                <p className="text-[#9E9E9E] text-lg">Plusieurs solutions s'offrent à vous pour financer votre parcours chez Eugenia School.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#111111] p-8 rounded-2xl border border-[#2A2A2A]">
                  <div className="inline-block bg-[#8B2346] text-[#0A0A0A] text-[10px] font-bold px-2 py-1 rounded mb-4 uppercase tracking-wider">Recommandé</div>
                  <h3 className="text-2xl font-bold mb-4">L'Alternance</h3>
                  <p className="text-[#9E9E9E] mb-6">Disponible pour le MSc (100%) et la 3ème année de Bachelor. Les frais de scolarité sont intégralement pris en charge par l'entreprise d'accueil, et vous percevez un salaire.</p>
                  <ul className="space-y-2 text-sm text-[#F5F2EE] font-medium">
                    <li>• Frais de scolarité : 0€</li>
                    <li>• Rémunération mensuelle</li>
                    <li>• Expérience professionnelle forte</li>
                  </ul>
                </div>

                <div className="bg-[#111111] p-8 rounded-2xl border border-[#2A2A2A]">
                  <h3 className="text-2xl font-bold mb-4">Prêts & Aides</h3>
                  <p className="text-[#9E9E9E] mb-6">Pour les formations en initial, nous avons négocié des partenariats avec des banques pour vous offrir des taux préférentiels.</p>
                  <ul className="space-y-2 text-sm text-[#F5F2EE] font-medium">
                    <li>• Prêts étudiants (BNP Paribas, LCL)</li>
                    <li>• Financement CPF possible</li>
                    <li>• Échelonnement des paiements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
