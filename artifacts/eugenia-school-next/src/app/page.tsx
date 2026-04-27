export default function Home() {
  const partners = [
    { name: "Mistral AI", logo: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/67c707198334428e0a03399b_Mistral_AI_logo.svg" },
    { name: "Station F", logo: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/67b741dc8e76032550ef25db_Vector%20(17).svg" },
    { name: "Microsoft", logo: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/67cb23150f1e4c7accc02ec2_Microsoft-logo_rgb_c-gray.avif" },
    { name: "Dataiku", logo: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/67cb23a50966dc16ec0edca2_Dataiku_logo.avif" },
    { name: "Make", logo: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/67cb233dfc56a6ac10ed8289_make-logo-freelogovectors.net_.avif" },
    { name: "Carrefour", logo: "https://cdn.prod.website-files.com/67ab8ba4ea1a5d633ea28cf6/67ab8bfa02140c844924e255_Layer_1.avif" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#e72b54] text-white text-center text-sm font-bold tracking-wide py-2">Bachelor et Master of Science : Candidatures ouvertes pour la rentrée 2026</div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#2b0713] text-white py-24 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,7,19,0.88)_0%,rgba(28,13,25,0.85)_50%,rgba(10,6,12,0.9)_100%)]" />
          <img
            src="https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b/67cee996db33be1f0b176fc8_2ehomepage.avif"
            alt="Deux étudiants sont fiers et heureux de représenter leur école sur la homepage"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <p className="text-[#ff3a6a] font-bold uppercase text-sm tracking-widest mb-4">Candidatures ouvertes</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            Bachelor et Master of Science en{' '}
            <span className="text-white">Business &amp;</span>
            <br />
            <span className="text-white">Intelligence Artificielle</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Eugenia School prépare les futurs acteurs de la transformation digitale. Bachelor et MSc en double diplômation, opérationnel dès le premier jour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/candidature"
              className="bg-[#ff3a6a] hover:bg-[#ff1f55] text-white px-8 py-4 rounded-full font-semibold transition-colors inline-flex items-center justify-center"
            >
              Candidater maintenant
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/brochure"
              className="border-2 border-white text-white hover:bg-white hover:text-[#2b0713] px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Télécharger la brochure
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-5 mt-4 max-w-4xl mx-auto text-center text-sm md:text-base">
            <div>
              <div className="text-3xl md:text-4xl font-bold">500+</div>
              <p className="text-slate-200">Étudiants formés</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">95%</div>
              <p className="text-slate-200">Employabilité</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">20+</div>
              <p className="text-slate-200">Partenaires</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">30+</div>
              <p className="text-slate-200">Projets</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">1</div>
              <p className="text-slate-200">Campus</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">24/7</div>
              <p className="text-slate-200">Accompagnement</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 md:hidden">
          <img
            src="https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b/67d18926e9c06953994acaff_eac99d5998ad7697a7c7ae9b8b648986_%C3%A9tudiant%20mod%C3%A8le%201.avif"
            alt="Un étudiant modèle se présente"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Formez-vous à l'IA
            <br />
            appliquée au <span className="text-[#FF6B2B]">business</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#333333] mb-8 max-w-3xl mx-auto leading-relaxed">
            L'école privée parisienne spécialisée en IA appliquée au business.
            Bachelor et MSc en double diplôme avec Grenoble École de Management (GEM).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/#candidature"
              className="bg-black hover:bg-[#1F1F1F] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Candidater maintenant
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/#brochure"
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Télécharger la brochure
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-black">500+</div>
              <p className="text-[#333333] text-sm mt-2">Étudiants formés</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-black">95%</div>
              <p className="text-[#333333] text-sm mt-2">Taux d'employabilité</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-black">20+</div>
              <p className="text-[#333333] text-sm mt-2">Partenaires</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#3f0a1b] mb-4">
            Vie académique & Programmes
          </h2>
          <p className="text-center text-[#5f2231] text-lg mb-16 max-w-2xl mx-auto">
            Des parcours hybrides qui unissent business, data et IA, hors Parcoursup.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Bachelor */}
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-black mb-2">1</div>
              <h3 className="text-3xl font-bold text-black mb-2">Bachelor</h3>
              <p className="text-[#FF6B2B] font-semibold mb-4">AI Applied to Business</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <span className="text-[#333333] font-medium">📅 Durée:</span>
                  <span className="ml-3 text-[#333333]">3 ans</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#333333] font-medium">📍 Lieu:</span>
                  <span className="ml-3 text-[#333333]">Paris</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#333333] font-medium">🎓 Diplôme:</span>
                  <span className="ml-3 text-[#333333]">RNCP35288 niveau 6</span>
                </div>
              </div>

              <p className="text-[#333333] mb-6">
                Le parcours idéal après le bac ou une Bac+2 pour développer une expertise solide en IA et ses applications métier.
              </p>

              <a 
                href="/programme/bachelor" 
                className="inline-flex items-center text-[#FF6B2B] font-semibold hover:text-[#E5521A] transition-colors"
              >
                En savoir plus
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* MSc */}
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-black mb-2">2</div>
              <h3 className="text-3xl font-bold text-black mb-2">MSc</h3>
              <p className="text-[#FF6B2B] font-semibold mb-4">AI Applied to Business</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <span className="text-[#333333] font-medium">📅 Durée:</span>
                  <span className="ml-3 text-[#333333]">2 ans</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#333333] font-medium">📍 Lieu:</span>
                  <span className="ml-3 text-[#333333]">Paris</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#333333] font-medium">🎓 Diplôme:</span>
                  <span className="ml-3 text-[#333333]">RNCP 41993 niveau 7</span>
                </div>
              </div>

              <p className="text-[#333333] mb-6">
                Spécialisez-vous en IA et management. Parfait pour les titulaires d'une Licence ou d'une école d'ingénieur.
              </p>

              <a 
                href="/programme/msc" 
                className="inline-flex items-center text-[#FF6B2B] font-semibold hover:text-[#E5521A] transition-colors"
              >
                En savoir plus
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Eugenia Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
            Pourquoi choisir Eugenia School ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F5F5F5] rounded-full mb-6">
                <img
                  src="https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b/67cecc96f4c87e89bfffbf34_amphipleincropped.avif"
                  alt="Un bel amphithéâtre est plein d'étudiants contents"
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Pédagogie innovante</h3>
              <p className="text-[#333333]">
                Apprendre par la pratique avec des cas réels et des projets d'entrepreneurs
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F5F5F5] rounded-full mb-6">
                <img
                  src="https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b/67cee259b50b1e12c0c6ff8c_Station%20F%20bien.avif"
                  alt="Une photo des étudiants dans Station F"
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Écosystème fort</h3>
              <p className="text-[#333333]">
                Immersion à Station F et partenariats avec les leaders de l'IA
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F5F5F5] rounded-full mb-6">
                <img
                  src="https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b/67cee65e0933e2ce1d147f72_fa%C3%A7ade%20bien.avif"
                  alt="Voici la devanture de l'école Eugenia School"
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Labels reconnus</h3>
              <p className="text-[#333333]">
                Diplômes RNCP certifiés par l'État, reconnus en France et à l'international
              </p>
            </div>
          </div>

          {/* Additional Images Section */}
          <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <img
                src="https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b/67c824495cfa820d857f1dc8_dianemarc.avif"
                alt="Une étudiante avec Marc Simoncini"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-black mb-2">À propos d'Eugenia School</h3>
              <p className="text-[#333333] text-sm">
                École hybride en business et data, Eugenia School s'inscrit dans la révolution de l'IA
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <img
                src="https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b/67ab718e372b182be4f01fa5_Group%20191-1.avif"
                alt="Notre campus"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-black mb-2">Notre Campus</h3>
              <p className="text-[#333333] text-sm">
                Situé au cœur de Paris, notre campus offre un environnement idéal pour l'apprentissage
              </p>
            </div>
          </div>

          {/* More Images */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <img
              src="https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b/67b31961992beaf7b3fb6d5e_iStock-1738733500%201.avif"
              alt="Les différentes associations présentes à l'école"
              className="w-full h-32 object-cover rounded-lg"
            />
            <img
              src="https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b/67d1af2e436b8cc2bc8eb620_friendsM1.avif"
              alt="Des amis du master 1 font des podcasts"
              className="w-full h-32 object-cover rounded-lg"
            />
            <img
              src="https://cdn.prod.website-files.com/67ab1d492136bb5f36b3ec6b/67cee65e0933e2ce1d147f72_fa%C3%A7ade%20bien.avif"
              alt="Voici la devanture de l'école Eugenia School"
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 md:py-32 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-4">
            Nos partenaires
          </h2>
          <p className="text-center text-[#333333] text-lg mb-16">
            Les leaders de l'IA et du business nous font confiance
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto items-center">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center bg-white p-6 rounded-lg">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à rejoindre Eugenia School ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Découvrez nos programmes et postulez dès maintenant
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#candidature"
              className="bg-[#FF6B2B] hover:bg-[#E5521A] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Candidater
            </a>
            <a
              href="/#contact"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
