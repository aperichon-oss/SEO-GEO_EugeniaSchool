import { Link } from "wouter";
import { Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 border-t border-[#1E1E1E]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6" aria-label="Eugenia School">
              <span className="font-sans font-extrabold text-2xl tracking-tight text-white">
                EUGENIA<span className="text-[#8B2346]">.</span>
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
                  className="w-9 h-9 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#8B2346] transition-colors"
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
                { label: "Notre ADN", href: "/ecole" },
                { label: "Méthode pédagogique", href: "/ecole/methode" },
                { label: "Équipe", href: "/ecole/equipe" },
                { label: "Certifications", href: "/ecole/certifications" },
                { label: "Partenaires", href: "/ecole/partenaires" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#9E9E9E] hover:text-[#8B2346] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[13px] uppercase tracking-widest text-white mb-5">Programmes</h3>
            <ul className="space-y-3">
              {[
                { label: "Bachelor IA & Business", href: "/formations/bachelor" },
                { label: "MSc IA & Business", href: "/formations/msc" },
                { label: "Alternance", href: "/formations/alternance" },
                { label: "Débouchés métiers", href: "/metiers" },
                { label: "Géniathons", href: "/vie-etudiante/geniathons" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#9E9E9E] hover:text-[#8B2346] text-sm transition-colors">
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
                { label: "Processus d'admission", href: "/admissions/processus" },
                { label: "Financement", href: "/admissions/financement" },
                { label: "Candidater", href: "/admissions/candidature" },
                { label: "Portes ouvertes", href: "/admissions/portes-ouvertes" },
                { label: "FAQ", href: "/faq" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#9E9E9E] hover:text-[#8B2346] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[13px] uppercase tracking-widest text-white mb-5">Campus & Contact</h3>
            <ul className="space-y-3">
              {[
                { label: "Campus Paris", href: "/campus/paris" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Mentions légales", href: "/mentions-legales" },
                { label: "Presse", href: "/presse" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#9E9E9E] hover:text-[#8B2346] text-sm transition-colors">
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
