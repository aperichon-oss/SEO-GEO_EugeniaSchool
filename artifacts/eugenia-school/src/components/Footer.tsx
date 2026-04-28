import { Link } from "wouter";
import { Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 border-t border-[#1E1E1E]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">

          {/* Logo & description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6" aria-label="Eugenia School">
              <span className="font-sans font-extrabold text-2xl tracking-tight text-white">
                EUGENIA<span className="text-[#8B2346]">.</span>
              </span>
            </Link>
            <p className="text-[#9E9E9E] text-sm leading-relaxed mb-6">
              L&apos;ecole privee parisienne specialisee en IA appliquee au business.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.eugeniaschool.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#8B2346] transition-colors"
                  aria-label="Reseau social Eugenia School"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* L'École */}
          <div>
            <h3 className="font-bold text-[13px] uppercase tracking-widest text-white mb-5">L&apos;Ecole</h3>
            <ul className="space-y-3">
              {[
                { label: "Notre ADN", href: "/ecole/notre-adn" },
                { label: "Approche pedagogique", href: "/ecole/approche-pedagogique" },
                { label: "Methode Eugenia", href: "/ecole/methode-eugenia" },
                { label: "Equipe", href: "/ecole/equipe" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#9E9E9E] hover:text-[#8B2346] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations */}
          <div>
            <h3 className="font-bold text-[13px] uppercase tracking-widest text-white mb-5">Formations</h3>
            <ul className="space-y-3">
              {[
                { label: "Bachelor IA & Business", href: "/formations/bachelor" },
                { label: "MSc IA & Business", href: "/formations/msc" },
                { label: "Alternance", href: "/formations/alternance" },
                { label: "Geniathons", href: "/geniathons" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#9E9E9E] hover:text-[#8B2346] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="font-bold text-[13px] uppercase tracking-widest text-white mb-5">Admissions</h3>
            <ul className="space-y-3">
              {[
                { label: "Processus d'admission", href: "/processus-admission" },
                { label: "Financement", href: "/financement" },
                { label: "Candidater", href: "/candidature" },
                { label: "Portes ouvertes", href: "/portes-ouvertes" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#9E9E9E] hover:text-[#8B2346] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Étudiants */}
          <div>
            <h3 className="font-bold text-[13px] uppercase tracking-widest text-white mb-5">Etudiants</h3>
            <ul className="space-y-3">
              {[
                { label: "Vie etudiante", href: "/etudiants" },
                { label: "Associations", href: "/associations" },
                { label: "Temoignages", href: "/temoignages" },
                { label: "Debouches metiers", href: "/metiers" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#9E9E9E] hover:text-[#8B2346] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Campus & Ressources */}
          <div>
            <h3 className="font-bold text-[13px] uppercase tracking-widest text-white mb-5">Campus & Infos</h3>
            <ul className="space-y-3">
              {[
                { label: "Campus Paris", href: "/campus/paris" },
                { label: "Campus Lyon", href: "/campus/lyon" },
                { label: "Partenaires", href: "/partenaires" },
                { label: "Presse", href: "/presse" },
                { label: "Brochure", href: "/brochure" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
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
            Certifie Qualiopi - Reference France Competences
          </div>
          <div className="flex items-center gap-6 text-xs text-[#5C5C5C]">
            <Link href="/mentions-legales" className="hover:text-[#8B2346] transition-colors">
              Mentions legales
            </Link>
            <span>&copy; {new Date().getFullYear()} Eugenia School. Tous droits reserves.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
