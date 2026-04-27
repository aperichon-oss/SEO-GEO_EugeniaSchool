import Link from "next/link";
import { Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 border-t border-[#1E1E1E]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6" aria-label="Eugenia School">
              <span className="font-sans font-extrabold text-2xl tracking-tight text-white">
                EUGENIA<span className="text-[#FF6B2B]">.</span>
              </span>
            </Link>
            <p className="text-[#9E9E9E] text-sm leading-relaxed mb-6">
              L'école privée parisienne spécialisée en IA appliquée au business. Bachelor et MSc en double diplôme avec Grenoble École de Management (GEM).
            </p>
            <div className="flex gap-3">
              {[Linkedin, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.eugeniaschool.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#FF6B2B] transition-colors"
                  aria-label="Réseau social Eugenia School"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[13px] uppercase tracking-widest text-white mb-5">L'École</h3>
            <ul className="space-y-3">
              {[
                { label: "Notre histoire", href: "/ecole/histoire" },
                { label: "Équipe pédagogique", href: "/ecole/equipe" },
                { label: "Nos campus", href: "/ecole/campus" },
                { label: "Nos valeurs", href: "/ecole/valeurs" },
                { label: "Partenaires", href: "/ecole/partenaires" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#9E9E9E] hover:text-[#FF6B2B] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[13px] uppercase tracking-widest text-white mb-5">Formations</h3>
            <ul className="space-y-3">
              {[
                { label: "Bachelor (Post-Bac)", href: "/formations/bachelor" },
                { label: "Bachelor 3ème année", href: "/formations/bachelor-alternance" },
                { label: "Master of Science", href: "/formations/msc" },
                { label: "Les Géniathons", href: "/hackathons" },
                { label: "Débouchés & Métiers", href: "/metiers" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#9E9E9E] hover:text-[#FF6B2B] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[13px] uppercase tracking-widest text-white mb-5">Admissions</h3>
            <ul className="space-y-3">
              {[
                { label: "Candidater", href: "/candidature" },
                { label: "Télécharger la brochure", href: "/brochure" },
                { label: "Journées Portes Ouvertes", href: "/evenements" },
                { label: "FAQ", href: "/faq" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#9E9E9E] hover:text-[#FF6B2B] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[13px] uppercase tracking-widest text-white mb-5">Actualités</h3>
            <ul className="space-y-3">
              {[
                { label: "Le Blog", href: "/blog" },
                { label: "Événements", href: "/evenements" },
                { label: "Contact", href: "/contact" },
                { label: "Mentions légales", href: "/mentions-legales" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#9E9E9E] hover:text-[#FF6B2B] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1E1E1E] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#5C5C5C] text-xs font-medium uppercase tracking-wider">
            Certifié Qualiopi · Référencé France Compétences
          </div>
          <div className="flex items-center gap-6 text-xs text-[#5C5C5C]">
            <span>&copy; {new Date().getFullYear()} Eugenia School. Tous droits réservés.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}