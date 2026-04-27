import { Link } from "wouter";
import { ArrowRight, TrendingUp, CheckCircle2 } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { metiers } from "@/lib/data";

export default function MetiersHub() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead 
        title="Débouchés & Métiers | Eugenia School" 
        description="Découvrez les métiers hybrides IA et Business auxquels Eugenia School vous prépare : Data Analyst, Growth Hacker, Consultant IA..." 
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
                { label: "Métiers & Débouchés" }
              ]} 
            />
            <div className="max-w-4xl mt-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                Des carrières <span className="text-[#FF6B2B]">à fort impact</span>
              </h1>
              <p className="text-lg text-[#9E9E9E] leading-relaxed max-w-2xl mb-8">
                Les entreprises recherchent désespérément des profils hybrides : des professionnels capables de comprendre le code, d'analyser la data, et de transformer ces insights en décisions stratégiques.
              </p>
              <div className="flex items-center gap-4 text-sm font-bold">
                <div className="flex items-center gap-2 bg-[#1A1A1A] px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4 text-[#FF6B2B]" /> 98% en poste après 6 mois
                </div>
                <div className="flex items-center gap-2 bg-[#1A1A1A] px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4 text-[#FF6B2B]" /> Salaire moyen 45k€
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* METIERS GRID */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {metiers.map((metier) => (
                <Link key={metier.slug} href={`/metiers/${metier.slug}`} className="bg-white border border-[#E0DDD8] rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-sm flex flex-col h-full group">
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4 group-hover:text-[#FF6B2B] transition-colors">{metier.title}</h2>
                  <p className="text-[#5C5C5C] mb-8 flex-1 leading-relaxed">{metier.description}</p>
                  
                  <div className="bg-[#F5F2EE] p-4 rounded-xl mb-6">
                    <div className="text-xs font-bold text-[#9E9E9E] uppercase tracking-wider mb-2">Salaire de départ</div>
                    <div className="text-xl font-bold text-[#0A0A0A]">
                      {metier.salaryEntry.min / 1000}k€ - {metier.salaryEntry.max / 1000}k€
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {metier.skills.slice(0, 3).map((skill, i) => (
                      <span key={i} className="text-xs font-bold text-[#5C5C5C] bg-white border border-[#E0DDD8] px-2.5 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                    {metier.skills.length > 3 && (
                      <span className="text-xs font-bold text-[#9E9E9E] px-1 py-1">
                        +{metier.skills.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="pt-6 border-t border-[#E0DDD8] mt-auto flex items-center justify-between font-bold text-[#0A0A0A]">
                    <span>Fiche métier</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#0A0A0A] text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Formez-vous aux métiers de demain</h2>
            <Link href="/formations" className="inline-flex justify-center items-center gap-2 bg-[#FF6B2B] text-[#0A0A0A] px-8 py-4 rounded-full font-bold text-base transition-all hover:bg-white mt-8">
              Découvrir nos formations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
