export const hackathons = [
  {
    slug: "doctolib",
    company: "Doctolib",
    type: "Geniathon MSc",
    sector: "Sante numerique",
    duration: "3 jours",
    year: 2024,
    topic: "SQL, bases de donnees medicales, modelisation",
    description: "Structuration de bases SQL medicales avec les equipes Data de Doctolib.",
    skills: ["SQL avance", "Modelisation BDD", "Communication technique"],
    days: [
      { day: "Jour 1", title: "Presentation du cas", content: "Rencontre entre les equipes data de Doctolib et les eleves. Devoilement du cas business." },
      { day: "Jour 2", title: "Coaching technique", content: "Coaching sur la structuration SQL, identification des bonnes relations entre tables medicales." },
      { day: "Jour 3", title: "Pitch final", content: "Demonstration en live de la solution developpee devant les equipes Doctolib." }
    ]
  },
  {
    slug: "carrefour",
    company: "Carrefour Links",
    type: "Business Deep Dive Bachelor",
    sector: "Retail / Grande distribution",
    duration: "3 semaines",
    year: 2024,
    topic: "Data achats, KPIs retail, automatisation reporting",
    description: "Analyse de donnees achats et conception de KPIs pour les equipes Carrefour.",
    skills: ["Data analytics", "Power BI", "Communication business"],
    days: [
      { day: "Semaine 1", title: "Immersion donnees", content: "Analyse des donnees achats Carrefour Links." },
      { day: "Semaine 2", title: "Conception des KPIs", content: "Developpement des indicateurs de performance retail sur Power BI." },
      { day: "Semaine 3", title: "Restitution", content: "Presentation des recommandations aux equipes data de Carrefour." }
    ]
  },
  {
    slug: "malt-mistral-make",
    company: "Malt x Mistral AI x Make",
    type: "Geniathon MSc",
    sector: "Freelance / IA generative",
    duration: "3 jours",
    year: 2024,
    topic: "Automatisation marketing, IA generative, workflows",
    description: "Creation de workflows d'automatisation marketing avec Mistral AI et Make.",
    skills: ["Mistral AI", "Make (automation)", "Marketing IA"],
    days: [
      { day: "Jour 1", title: "Decouverte du cas", content: "Presentation du defi par les equipes Malt, Mistral AI et Make." },
      { day: "Jour 2", title: "Developpement", content: "Creation des workflows d'automatisation et integration de l'IA generative Mistral." },
      { day: "Jour 3", title: "Demo finale", content: "Demonstration live des solutions d'automatisation marketing developpees." }
    ]
  },
  {
    slug: "spendesk",
    company: "Spendesk",
    type: "Geniathon MSc",
    sector: "Fintech",
    duration: "3 jours",
    year: 2024,
    topic: "Power BI, dashboards financiers",
    description: "Conception de dashboards interactifs pour la visualisation financiere.",
    skills: ["Power BI", "Data viz", "Finance"],
    days: [
      { day: "Jour 1", title: "Problematique finance", content: "Immersion dans les enjeux de visualisation financiere chez Spendesk." },
      { day: "Jour 2", title: "Construction des dashboards", content: "Developpement des tableaux de bord Power BI avec donnees reelles." },
      { day: "Jour 3", title: "Presentation", content: "Restitution des dashboards aux equipes Spendesk avec recommandations." }
    ]
  },
  {
    slug: "welcome-to-the-jungle",
    company: "Welcome to the Jungle",
    type: "Hackathon",
    sector: "RH Tech",
    duration: "1 journee",
    year: 2025,
    topic: "Reinventer la vie au bureau avec l'IA",
    description: "Comment l'IA peut transformer l'experience collaborateur en entreprise.",
    skills: ["Design thinking", "IA generative", "Pitch"],
    days: [
      { day: "Matin", title: "Brief et equipes", content: "Presentation du defi par Welcome to the Jungle et constitution des equipes." },
      { day: "Apres-midi", title: "Ideation et prototype", content: "Sprint d'ideation et developpement du prototype de solution IA." },
      { day: "Soiree", title: "Pitch final", content: "Presentation des solutions devant le jury Welcome to the Jungle." }
    ]
  }
];

export const metiers = [
  {
    slug: "business-analyst",
    title: "Business Analyst",
    description: "Le Business Analyst associe analyse de marché et expertise opérationnelle pour améliorer les processus d'affaires.",
    salaryEntry: { min: 40000, max: 75000 },
    salary5years: { min: 65000, max: 75000 },
    skills: ["Analyse", "Stratégie", "Communication", "Excel", "SQL"],
    evolutions: ["Chef de projet", "Chief of Operations", "Directeur marketing"],
    missions: ["Optimisation des processus d'affaires", "Liaison entre parties prenantes", "Analyse de marché et modélisation financière"]
  },
  {
    slug: "data-analyst",
    title: "Data Analyst",
    description: "Expert de l'analyse qui transforme les données complexes en insights stratégiques pour l'entreprise.",
    salaryEntry: { min: 45000, max: 100000 },
    salary5years: { min: 70000, max: 100000 },
    skills: ["SQL", "Python", "Tableau/Power BI", "Statistiques", "Data viz"],
    evolutions: ["Data Scientist", "Chief Data Officer", "Consultant data"],
    missions: ["Analyse de données", "Création de dashboards", "Reporting automatisé"]
  },
  {
    slug: "customer-success-manager",
    title: "Customer Success Manager",
    description: "Le Customer Success Manager assure la satisfaction et la fidélisation des clients stratégiques.",
    salaryEntry: { min: 40000, max: 75000 },
    salary5years: { min: 65000, max: 75000 },
    skills: ["Relation client", "Analyse data", "Communication", "CRM", "KPI"],
    evolutions: ["Customer Success Director", "Account Manager", "Sales Manager"],
    missions: ["Onboarding clients", "Suivi satisfaction", "Optimisation rétention"]
  },
  {
    slug: "sales-ops",
    title: "Sales Ops",
    description: "Le Sales Ops optimise les processus de vente grâce à l'analyse de données et l'automatisation.",
    salaryEntry: { min: 40000, max: 85000 },
    salary5years: { min: 65000, max: 85000 },
    skills: ["CRM", "Data analysis", "Process optimisation", "Automation", "Sales"],
    evolutions: ["Sales Operations Manager", "Revenue Operations", "Chief Revenue Officer"],
    missions: ["Optimisation pipeline ventes", "Analyse performance", "Automatisation processus"]
  },
  {
    slug: "growth-hacker",
    title: "Growth Hacker",
    description: "Le Growth Hacker utilise des techniques innovantes pour accélérer la croissance de l'entreprise.",
    salaryEntry: { min: 40000, max: 85000 },
    salary5years: { min: 65000, max: 85000 },
    skills: ["Marketing digital", "A/B testing", "Analytics", "Growth hacking", "SEO/SEA"],
    evolutions: ["Growth Manager", "Marketing Director", "Product Manager"],
    missions: ["Acquisition utilisateurs", "Optimisation conversion", "Stratégie croissance"]
  },
  {
    slug: "consultant",
    title: "Consultant",
    description: "Le Consultant IA/Business apporte son expertise pour résoudre des problématiques complexes.",
    salaryEntry: { min: 45000, max: 100000 },
    salary5years: { min: 70000, max: 100000 },
    skills: ["Conseil", "Analyse", "Présentation", "IA/Business", "Projet management"],
    evolutions: ["Senior Consultant", "Partner", "Directeur consulting"],
    missions: ["Diagnostic stratégique", "Recommandations", "Accompagnement changement"]
  },
  {
    slug: "data-analyst",
    title: "Data Analyst",
    description: "Expert en analyse de donnees pour transformer les informations brutes en insights actionnables.",
    salaryEntry: { min: 40000, max: 50000 },
    salary5years: { min: 60000, max: 80000 },
    skills: ["SQL", "Python", "Power BI", "Statistiques", "Storytelling data"],
    evolutions: ["Lead Data Analyst", "BI Consultant", "Head of Data"],
    missions: ["Interpreter les donnees avec des techniques statistiques", "Developper des bases de donnees", "Identifier les tendances dans des datasets complexes"]
  },
  {
    slug: "data-scientist",
    title: "Data Scientist",
    description: "Specialiste des algorithmes et du machine learning pour extraire de la valeur predictive des donnees.",
    salaryEntry: { min: 50000, max: 60000 },
    salary5years: { min: 80000, max: 120000 },
    skills: ["Python", "Machine Learning", "Deep Learning", "Mathematiques", "Cloud"],
    evolutions: ["Lead Data Scientist", "ML Engineer", "Chief AI Officer"],
    missions: ["Construire des modeles predictifs", "Entrainer des algorithmes ML", "Deployer des pipelines data en production"]
  },
  {
    slug: "growth-hacker",
    title: "Growth Hacker",
    description: "Expert de la croissance rapide combinant marketing, produit et data pour accelerer l'acquisition.",
    salaryEntry: { min: 42000, max: 52000 },
    salary5years: { min: 65000, max: 90000 },
    skills: ["Marketing automation", "A/B testing", "SEO/SEA", "Analytics", "No-code"],
    evolutions: ["Head of Growth", "CMO", "Founder"],
    missions: ["Optimiser les tunnels de conversion", "Lancer des campagnes d'acquisition", "Analyser les metriques de croissance"]
  },
  {
    slug: "consultant-ia",
    title: "Consultant IA",
    description: "Conseil en transformation IA pour les entreprises, de la strategie au deploiement des solutions.",
    salaryEntry: { min: 48000, max: 60000 },
    salary5years: { min: 75000, max: 110000 },
    skills: ["IA generative", "Change management", "Conseil", "Prompt engineering", "Gestion de projet"],
    evolutions: ["Senior Consultant", "Directeur IA", "CDO"],
    missions: ["Diagnostiquer les opportunites IA", "Deployer des solutions d'IA en entreprise", "Former les equipes aux outils IA"]
  },
  {
    slug: "customer-success-manager",
    title: "Customer Success Manager",
    description: "Garant de la satisfaction et de la fidelisation clients, particulierement dans les SaaS et scale-ups.",
    salaryEntry: { min: 38000, max: 48000 },
    salary5years: { min: 60000, max: 80000 },
    skills: ["Relation client", "CRM", "Analyse NPS", "Onboarding", "Upsell"],
    evolutions: ["Head of Customer Success", "VP Customer", "COO"],
    missions: ["Onboarder et fideliser les clients", "Analyser les indicateurs de satisfaction", "Reduire le churn"]
  },
  {
    slug: "sales-ops",
    title: "Sales Operations",
    description: "Optimise les processus commerciaux et les outils CRM pour maximiser la performance des equipes sales.",
    salaryEntry: { min: 40000, max: 50000 },
    salary5years: { min: 60000, max: 85000 },
    skills: ["Salesforce", "HubSpot", "Analyse", "Process design", "Reporting"],
    evolutions: ["Head of Sales Ops", "Revenue Operations Director", "VP Sales"],
    missions: ["Structurer les processus de vente", "Gerer les outils CRM", "Analyser les performances commerciales"]
  }
];

export const blogPosts = [
  {
    slug: "gemini-chatgpt-claude-quelle-ia-choisir-pour-ses-etudes",
    title: "Gemini, ChatGPT, Claude... Quelle IA choisir pour ses etudes ?",
    category: "ia-et-data",
    categoryLabel: "IA et Data",
    author: "Noe M.",
    date: "2026-01-27",
    readTime: 5,
    excerpt: "On compare ChatGPT, Claude et Gemini pour t'aider a choisir le bon outil selon ton profil : redaction, analyse, recherche."
  },
  {
    slug: "focus-sur-le-metier-de-sales-ops-en-startup",
    title: "Focus sur le metier de Sales Ops en startup",
    category: "business-carrieres",
    categoryLabel: "Business et Carrieres",
    author: "Noe M.",
    date: "2025-05-23",
    readTime: 5,
    excerpt: "Le Sales Ops est devenu central dans les startups tech. Missions, outils CRM, salaires et formations : tout ce qu'il faut savoir."
  },
  {
    slug: "orientation-post-bac-hors-parcoursup-alternatives",
    title: "Orientation post-bac : les meilleures alternatives hors Parcoursup",
    category: "orientation",
    categoryLabel: "Orientation",
    author: "Noe M.",
    date: "2025-11-15",
    readTime: 7,
    excerpt: "Parcoursup ce n'est pas la seule voie. Decouvrez les ecoles post-bac hors Parcoursup qui recrutent sur dossier et entretien."
  },
  {
    slug: "hackathon-doctolib-retour-experience",
    title: "Retour sur le Geniathon Doctolib — 72h de data medicale",
    category: "vie-eugenia",
    categoryLabel: "Vie Eugenia",
    author: "Noe M.",
    date: "2025-03-10",
    readTime: 4,
    excerpt: "Nos etudiants MSc ont planche sur les bases de donnees medicales de Doctolib pendant 3 jours. Retour d'experience."
  },
  {
    slug: "ia-generative-entreprises-usages-concrets",
    title: "IA generative en entreprise : 7 usages concrets en 2026",
    category: "ia-et-data",
    categoryLabel: "IA et Data",
    author: "Noe M.",
    date: "2026-02-05",
    readTime: 6,
    excerpt: "De la generation de contenu a l'automatisation des process, decouvrez comment les entreprises utilisent reellement l'IA generative."
  }
];

export const partenaires = ["Mistral AI", "Station F", "Microsoft", "HEC Incubateur", "Make", "Dataiku", "L'Esprit Critique"];
export const entreprisesPartenaires = ["Doctolib", "Carrefour", "Malt", "Societe Generale", "Capgemini", "Snapchat", "Google Cloud", "Air France", "Microsoft"];
