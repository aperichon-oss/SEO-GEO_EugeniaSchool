export function AnnouncementBar() {
  const text = "CANDIDATURES OUVERTES Bachelor et Master of Science en Business & Intelligence Artificielle • Rentrees 2026 • Hors Parcoursup / Hors MonMaster • Double diplome avec Grenoble Ecole de Management (GEM) - Top 10 •";
  
  return (
    <div className="bg-[#0A0A0A] text-white overflow-hidden py-2 whitespace-nowrap text-[13px] font-medium tracking-wide flex items-center relative z-50">
      <div className="animate-marquee inline-block">
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
      </div>
    </div>
  );
}
