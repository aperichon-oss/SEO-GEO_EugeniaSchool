import { Link } from "wouter";
import { Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

const footerSections = [
  {
    title: "L'École",
    links: [
      { label: "Présentation", href: "/ecole" },
      { label: "Notre ADN", href: "/ecole/adn" },
      { label: "Équipe pédagogique", href: "/ecole/equipe-pedagogique" },
      { label: "Méthode Eugenia", href: "/ecole/methode" },
      { label: "Certifications", href: "/ecole/certifications" },
      { label: "Groupe Albert School", href: "/ecole/groupe-albert-school" },
    ],
  },
  {
    title: "Formations",
    links: [
      { label: "Nos programmes", href: "/formations" },
      { label: "Bachelor IA & Business", href: "/formations/bachelor" },
      { label: "Bachelor 1ère année", href: "/formations/bachelor-1a" },
      { label: "MSc IA & Business", href: "/formations/msc" },
      { label: "Certification Data", href: "/formations/certification-data" },
      { label: "Programme détaillé", href: "/formations/programme-annee-par-annee" },
    ],
  },
  {
    title: "Hackathons",
    links: [
      { label: "Tous les hackathons", href: "/hackathons" },
      { label: "L'Oréal 2024", href: "/hackathons/loreal-2024" },
      { label: "Carrefour 2024", href: "/hackathons/carrefour-2024" },
      { label: "Mistral x AWS", href: "/hackathons/alt-mistral-aws" },
      { label: "Spendesk Growth", href: "/hackathons/spendesk-growth" },
      { label: "Google Cloud", href: "/hackathons/google-cloud" },
    ],
  },
  {
    title: "Métiers",
    links: [
      { label: "Débouchés", href: "/metiers" },
      { label: "Business Analyst", href: "/metiers/business-analyst" },
      { label: "Data Analyst", href: "/metiers/data-analyst" },
      { label: "Growth Hacker", href: "/metiers/growth-hacker" },
      { label: "Consultant IA", href: "/metiers/consultant-ia" },
      { label: "Data Scientist", href: "/metiers/data-scientist" },
      { label: "Customer Success Manager", href: "/metiers/customer-success-manager" },
    ],
  },
  {
    title: "Étudiants",
    links: [
      { label: "Vie étudiante", href: "/etudiants" },
      { label: "Associations", href: "/etudiants/associations" },
      { label: "Entrepreneuriat", href: "/etudiants/entrepreneuriat" },
      { label: "Alumni & Témoignages", href: "/etudiants/alumni" },
      { label: "Vie campus", href: "/etudiants/vie-campus" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "Vue d'ensemble", href: "/admissions" },
      { label: "Processus d'admission", href: "/admissions/processus" },
      { label: "Financement & bourses", href: "/admissions/financement" },
      { label: "Candidature", href: "/admissions/candidature" },
      { label: "Portes ouvertes", href: "/admissions/journees-portes-ouvertes" },
    ],
  },
];

const secondaryLinks = [
  { label: "Campus Paris", href: "/campus/paris" },
  { label: "Campus Lyon", href: "/campus/lyon" },
  { label: "Partenaires", href: "/partenaires" },
  { label: "Presse", href: "/presse" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Événements", href: "/evenements" },
  { label: "Brochure", href: "/brochure" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 border-t border-[#1E1E1E]">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-[13px] uppercase tracking-widest text-white mb-5">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#9E9E9E] hover:text-[#8B2346] text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Secondary Links Row */}
        <div className="py-8 border-t border-[#1E1E1E] mb-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#6B6B6B] hover:text-[#8B2346] text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Logo & Social Row */}
        <div className="pt-8 border-t border-[#1E1E1E] flex flex-col lg:flex-row justify-between items-center gap-8">
          
          {/* Logo & Description */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <Link href="/" className="inline-block" aria-label="Eugenia School">
              <span className="font-sans font-extrabold text-2xl tracking-tight text-white">
                EUGENIA<span className="text-[#8B2346]">.</span>
              </span>
            </Link>
            <p className="text-[#6B6B6B] text-sm text-center lg:text-left max-w-md">
              L&apos;école privée parisienne spécialisée en IA appliquée au business. 
              Formation Bachelor et MSc en alternance.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {[
              { Icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/school/eugeniaschool" },
              { Icon: Instagram, label: "Instagram", url: "https://instagram.com/eugeniaschool" },
              { Icon: Youtube, label: "YouTube", url: "https://youtube.com/@eugeniaschool" },
              { Icon: Twitter, label: "Twitter", url: "https://twitter.com/eugeniaschool" },
            ].map(({ Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#8B2346] transition-colors"
                aria-label={`${label} Eugenia School`}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-[#1E1E1E] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[#5C5C5C] text-xs font-medium">
            <span className="bg-[#1A1A1A] px-3 py-1.5 rounded-full">Certifié Qualiopi</span>
            <span className="bg-[#1A1A1A] px-3 py-1.5 rounded-full">RNCP Niveau 6 & 7</span>
            <span className="bg-[#1A1A1A] px-3 py-1.5 rounded-full">France Compétences</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-[#5C5C5C]">
            <Link href="/mentions-legales" className="hover:text-[#8B2346] transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-[#8B2346] transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/cgv" className="hover:text-[#8B2346] transition-colors">
              CGV
            </Link>
            <span>&copy; {new Date().getFullYear()} Eugenia School</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
