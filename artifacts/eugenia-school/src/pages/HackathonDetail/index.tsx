import { useParams, Link } from "wouter";
import { ArrowRight, Calendar, Building, Clock, ChevronLeft, CheckCircle2 } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { hackathons } from "@/lib/data";
import NotFound from "../not-found";

export default function HackathonDetail() {
  const { slug } = useParams();
  const hackathon = hackathons.find(h => h.slug === slug);

  if (!hackathon) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead 
        title={`Geniathon ${hackathon.company} | Eugenia School`} 
        description={hackathon.description} 
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
                { label: "Hackathons", href: "/hackathons" },
                { label: hackathon.company }
              ]} 
            />
            
            <div className="max-w-4xl mt-12">
              <Link href="/hackathons" className="inline-flex items-center gap-2 text-[#9E9E9E] hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-wider">
                <ChevronLeft className="w-4 h-4" /> Retour aux hackathons
              </Link>
              
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <div className="inline-block bg-[#8B2346] text-[#0A0A0A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {hackathon.type}
                </div>
                <div className="inline-block bg-[#2A2A2A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Édition {hackathon.year}
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
                Cas <span className="text-[#8B2346]">{hackathon.company}</span>
              </h1>
              
              <p className="text-xl text-[#9E9E9E] leading-relaxed max-w-3xl mb-10">
                {hackathon.description}
              </p>

              <div className="flex flex-wrap gap-6 py-6 border-y border-[#2A2A2A]">
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-[#8B2346]" />
                  <span className="font-medium">{hackathon.sector}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#8B2346]" />
                  <span className="font-medium">{hackathon.duration} d'immersion</span>
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
              <div className="lg:col-span-8">
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-[#0A0A0A] mb-6">Le challenge</h2>
                  <p className="text-lg text-[#5C5C5C] leading-relaxed mb-8">
                    {hackathon.topic}. Les étudiants sont confrontés à une problématique réelle de l'entreprise et doivent proposer une solution concrète, fonctionnelle et business-oriented.
                  </p>
                  
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-4">Compétences mobilisées</h3>
                  <div className="flex flex-wrap gap-3">
                    {hackathon.skills.map((skill, index) => (
                      <span key={index} className="bg-[#F5F2EE] text-[#0A0A0A] border border-[#E0DDD8] px-4 py-2 rounded-full text-sm font-bold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-[#0A0A0A] mb-8">Déroulement</h2>
                  <div className="space-y-8">
                    {hackathon.days.map((day, index) => (
                      <div key={index} className="flex gap-6 bg-[#F5F2EE] p-8 rounded-2xl border border-[#E0DDD8]">
                        <div className="w-24 shrink-0 font-bold text-[#0A0A0A] pt-1">
                          {day.day}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">{day.title}</h3>
                          <p className="text-[#5C5C5C]">{day.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4">
                <div className="bg-[#F5F2EE] rounded-2xl p-8 border border-[#E0DDD8] sticky top-32">
                  <h3 className="font-bold text-[#0A0A0A] text-xl mb-4">Vous voulez vivre cette expérience ?</h3>
                  <p className="text-[#5C5C5C] mb-8">
                    Les Geniathons sont réservés aux étudiants d'Eugenia School. Rejoignez-nous pour travailler sur les problématiques des plus belles entreprises tech.
                  </p>
                  <Link href="/candidature" className="flex justify-between items-center bg-[#8B2346] text-[#0A0A0A] px-6 py-4 rounded-full font-bold hover:bg-[#0A0A0A] hover:text-white transition-colors group">
                    Candidater
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/formations" className="flex justify-between items-center bg-transparent border-2 border-[#0A0A0A] text-[#0A0A0A] px-6 py-4 rounded-full font-bold hover:bg-[#0A0A0A] hover:text-white transition-colors mt-4">
                    Voir les programmes
                  </Link>
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
