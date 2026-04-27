import { useParams, Link } from "wouter";
import { ArrowRight, ChevronLeft, CheckCircle2, TrendingUp, Briefcase } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { metiers } from "@/lib/data";
import NotFound from "../not-found";

export default function MetierDetail() {
  const { slug } = useParams();
  const metier = metiers.find(m => m.slug === slug);

  if (!metier) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead 
        title={`${metier.title} | Fiche Métier | Eugenia School`} 
        description={metier.description} 
      />
      <AnnouncementBar />
      <Navigation />

      <main className="flex-1 bg-white">
        {/* HERO */}
        <div className="bg-[#0A0A0A] text-white pt-12 pb-24 border-b border-[#2A2A2A]">
          <div className="container mx-auto px-6">
            <Breadcrumb 
              items={[
                { label: "Accueil", href: "/" },
                { label: "Métiers", href: "/metiers" },
                { label: metier.title }
              ]} 
            />
            
            <div className="max-w-4xl mt-12">
              <Link href="/metiers" className="inline-flex items-center gap-2 text-[#9E9E9E] hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-wider">
                <ChevronLeft className="w-4 h-4" /> Retour aux métiers
              </Link>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
                Devenir <span className="text-[#8B2346]">{metier.title}</span>
              </h1>
              
              <p className="text-xl text-[#9E9E9E] leading-relaxed max-w-3xl mb-12">
                {metier.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-[#111111] border border-[#2A2A2A]">
                <div>
                  <div className="text-[#9E9E9E] text-xs font-bold uppercase tracking-wider mb-2">Salaire Junior</div>
                  <div className="text-3xl font-extrabold text-white">
                    {metier.salaryEntry.min / 1000}k€ <span className="text-lg text-[#5C5C5C] font-normal mx-2">à</span> {metier.salaryEntry.max / 1000}k€
                  </div>
                </div>
                <div>
                  <div className="text-[#9E9E9E] text-xs font-bold uppercase tracking-wider mb-2">Salaire Senior (5+ ans)</div>
                  <div className="text-3xl font-extrabold text-[#8B2346]">
                    {metier.salary5years.min / 1000}k€ <span className="text-lg text-[#5C5C5C] font-normal mx-2">à</span> {metier.salary5years.max / 1000}k€
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Main Content */}
              <div className="lg:col-span-8 space-y-16">
                
                <div>
                  <h2 className="text-3xl font-bold text-[#0A0A0A] mb-8 flex items-center gap-3">
                    <Briefcase className="w-8 h-8 text-[#8B2346]" /> Missions principales
                  </h2>
                  <div className="space-y-4">
                    {metier.missions.map((mission, index) => (
                      <div key={index} className="flex gap-4 p-6 bg-[#F5F2EE] rounded-2xl border border-[#E0DDD8]">
                        <CheckCircle2 className="w-6 h-6 text-[#8B2346] shrink-0" />
                        <span className="text-lg text-[#0A0A0A] font-medium">{mission}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-[#0A0A0A] mb-8">Compétences requises</h2>
                  <div className="flex flex-wrap gap-3">
                    {metier.skills.map((skill, index) => (
                      <span key={index} className="bg-white border-2 border-[#E0DDD8] text-[#0A0A0A] px-6 py-3 rounded-full text-lg font-bold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-[#0A0A0A] mb-8 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-[#8B2346]" /> Évolution de carrière
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {metier.evolutions.map((evolution, index) => (
                      <div key={index} className="flex-1 bg-white border border-[#E0DDD8] p-6 rounded-2xl text-center shadow-sm">
                        <span className="font-bold text-[#0A0A0A]">{evolution}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4">
                <div className="bg-[#F5F2EE] rounded-2xl p-8 border border-[#E0DDD8] sticky top-32">
                  <h3 className="font-bold text-[#0A0A0A] text-2xl mb-4">Se former à ce métier</h3>
                  <p className="text-[#5C5C5C] mb-8 leading-relaxed">
                    Eugenia School vous prépare au métier de {metier.title} grâce à une pédagogie par projets (Geniathons) et un cursus hybride tech & business.
                  </p>
                  
                  <div className="space-y-4">
                    <Link href="/formations/bachelor" className="flex justify-between items-center bg-white border border-[#E0DDD8] text-[#0A0A0A] p-4 rounded-xl font-bold hover:border-[#0A0A0A] transition-colors group">
                      <div>
                        <div className="text-xs text-[#9E9E9E] uppercase tracking-wider mb-1">Post-Bac (3 ans)</div>
                        Bachelor
                      </div>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <Link href="/formations/msc" className="flex justify-between items-center bg-[#0A0A0A] text-white p-4 rounded-xl font-bold hover:bg-[#8B2346] hover:text-[#0A0A0A] transition-colors group">
                      <div>
                        <div className="text-xs text-[#9E9E9E] group-hover:text-[#5C5C5C] uppercase tracking-wider mb-1">Bac+4/5 (2 ans)</div>
                        Master of Science
                      </div>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
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
