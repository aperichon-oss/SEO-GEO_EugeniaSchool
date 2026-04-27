import { Link } from "wouter";
import { ArrowRight, Calendar, Building, Clock } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { hackathons } from "@/lib/data";

export default function HackathonsHub() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead 
        title="Les Geniathons | Eugenia School" 
        description="Découvrez les Geniathons, des hackathons intensifs au coeur de la pédagogie d'Eugenia School avec nos entreprises partenaires." 
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
                { label: "Hackathons" }
              ]} 
            />
            <div className="max-w-4xl mt-8">
              <div className="inline-block bg-[#8B2346] text-[#0A0A0A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">Pédagogie active</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                Les Geniathons <span className="text-[#8B2346]">Eugenia</span>
              </h1>
              <p className="text-lg text-[#9E9E9E] leading-relaxed max-w-2xl">
                Oubliez les partiels traditionnels. Chez Eugenia School, l'évaluation se fait par la pratique. Plusieurs fois par an, nos étudiants relèvent des défis réels proposés par des entreprises de la tech (Doctolib, Carrefour, Spendesk...).
              </p>
            </div>
          </div>
        </div>

        {/* HACKATHONS LIST */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hackathons.map((hackathon) => (
                <Link key={hackathon.slug} href={`/hackathons/${hackathon.slug}`} className="bg-white border border-[#E0DDD8] rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-sm flex flex-col h-full group">
                  <div className="mb-6 flex justify-between items-start">
                    <div className="inline-flex items-center gap-1.5 bg-[#F5F2EE] text-[#5C5C5C] text-xs font-bold px-3 py-1.5 rounded-md uppercase tracking-wider">
                      {hackathon.type}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-[#0A0A0A] mb-3 group-hover:text-[#8B2346] transition-colors">{hackathon.company}</h2>
                  <p className="text-[#5C5C5C] mb-8 flex-1">{hackathon.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-[#5C5C5C] font-medium">
                      <Building className="w-4 h-4 text-[#8B2346]" /> {hackathon.sector}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#5C5C5C] font-medium">
                      <Clock className="w-4 h-4 text-[#8B2346]" /> {hackathon.duration}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#5C5C5C] font-medium">
                      <Calendar className="w-4 h-4 text-[#8B2346]" /> Édition {hackathon.year}
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-[#E0DDD8] mt-auto flex items-center justify-between font-bold text-[#0A0A0A]">
                    <span>Voir le détail</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
