import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";

export default function FAQ() {
  const faqs = [
    {
      question: "Qu'est-ce qu'Eugenia School ?",
      answer: "Eugenia School est une école privée parisienne spécialisée dans l'enseignement de l'Intelligence Artificielle appliquée au business. Née du groupe Albert School, elle forme des profils hybrides capables de maîtriser à la fois les enjeux stratégiques et les outils technologiques de pointe."
    },
    {
      question: "Quelle est la différence entre le Bachelor et le MSc ?",
      answer: "Le Bachelor est une formation post-bac en 3 ans, axée sur l'acquisition des fondamentaux en data, code et business. Le MSc (Master of Science) est une formation bac+4/5 en 2 ans, 100% en alternance, destinée à approfondir l'expertise en IA et à former des leaders de la transformation digitale."
    },
    {
      question: "Est-ce que les formations sont reconnues par l'Etat ?",
      answer: "Oui, nos formations débouchent sur un double diplôme en partenariat avec Grenoble Ecole de Management (GEM, Top 10 des Grandes Ecoles), avec des titres certifiés RNCP et reconnus par l'Etat (Qualiopi, France Compétences)."
    },
    {
      question: "Comment candidater sans passer par Parcoursup ?",
      answer: "Nos admissions se font totalement hors Parcoursup (et hors MonMaster). La candidature s'effectue directement en ligne sur notre site. Le processus comprend une étude de dossier (notes, CV, lettre de motivation) suivie d'un entretien de motivation pour évaluer votre profil et votre projet."
    },
    {
      question: "Quels sont les débouchés après Eugenia School ?",
      answer: "Nos diplômés accèdent à des postes stratégiques tels que Data Analyst, Business Analyst, Consultant IA, Growth Hacker, ou encore Sales Operations. Ces profils hybrides sont particulièrement recherchés par les scale-ups tech, les cabinets de conseil et les grands groupes en pleine transformation."
    },
    {
      question: "Comment est financé le MSc en alternance ?",
      answer: "Le MSc s'effectue à 100% en alternance (contrat d'apprentissage ou de professionnalisation). Les frais de scolarité sont intégralement pris en charge par l'entreprise d'accueil, et l'étudiant perçoit un salaire mensuel selon le barème légal."
    },
    {
      question: "Y a-t-il un campus à Lyon ?",
      answer: "Oui, en plus de notre campus principal situé dans le 10ème arrondissement de Paris, Eugenia School dispose d'un campus à Lyon, offrant les mêmes programmes d'excellence."
    },
    {
      question: "Qu'est-ce qu'un Geniathon ?",
      answer: "Un Geniathon est un hackathon intensif de plusieurs jours où nos étudiants travaillent sur des cas réels fournis par nos entreprises partenaires (Doctolib, Carrefour, Spendesk, etc.). C'est le cœur de notre méthode pédagogique : apprendre par la pratique."
    },
    {
      question: "Quelle est la durée des formations ?",
      answer: "Le Bachelor dure 3 ans. Le Master of Science dure 2 ans."
    },
    {
      question: "Puis-je intégrer le Bachelor en 3ème année ?",
      answer: "Oui, les admissions parallèles sont possibles en 3ème année de Bachelor (Bachelor 3A) pour les étudiants ayant déjà validé un Bac+2 (BTS, BUT, Licence) dans un domaine pertinent (commerce, informatique, mathématiques)."
    },
    {
      question: "Y a-t-il des bourses ou aides financières ?",
      answer: "Pour les formations hors alternance, nous accompagnons nos étudiants dans l'obtention de prêts étudiants à taux préférentiels (partenariats BNP Paribas, Crédit Agricole) et acceptons l'utilisation du CPF. Des aides régionales peuvent également être mobilisées."
    },
    {
      question: "Quand ont lieu les prochaines journées portes ouvertes ?",
      answer: "Nos prochaines Journées Portes Ouvertes auront lieu en janvier et février 2026. Vous pouvez retrouver toutes les dates et vous inscrire sur notre page événements ou admissions."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead 
        title="Foire Aux Questions | Eugenia School" 
        description="Retrouvez toutes les réponses à vos questions concernant Eugenia School, ses formations, les admissions hors Parcoursup et le financement." 
      />
      <AnnouncementBar />
      <Navigation />

      <main className="flex-1 bg-[#F5F2EE]">
        <div className="bg-[#0A0A0A] text-white pt-12 pb-24 border-b border-[#2A2A2A]">
          <div className="container mx-auto px-6">
            <Breadcrumb 
              items={[
                { label: "Accueil", href: "/" },
                { label: "FAQ" }
              ]} 
            />
            <div className="max-w-3xl mt-8">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Foire Aux Questions</h1>
              <p className="text-lg text-[#9E9E9E]">Tout ce que vous devez savoir sur Eugenia School, nos programmes et le processus d'admission.</p>
            </div>
          </div>
        </div>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="bg-white rounded-2xl p-6 md:p-10 border border-[#E0DDD8] shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#E0DDD8] last:border-0">
                    <AccordionTrigger className="text-left font-bold text-[#0A0A0A] hover:text-[#5C5C5C] hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#5C5C5C] leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-12 text-center">
              <p className="text-[#5C5C5C] mb-4 font-medium">Vous ne trouvez pas la réponse à votre question ?</p>
              <Link href="/contact" className="inline-flex items-center text-[#0A0A0A] font-bold hover:text-[#8B2346] underline underline-offset-4 decoration-2 decoration-[#0A0A0A] hover:decoration-[#8B2346] transition-colors">
                Contactez notre équipe
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
