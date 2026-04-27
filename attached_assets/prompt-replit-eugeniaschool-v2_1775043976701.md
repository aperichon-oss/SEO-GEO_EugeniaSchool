# Prompt Replit — Eugenia School V2
# Site vitrine Next.js avec architecture SEO/GEO optimisée

---

## CONTEXTE ET OBJECTIF

Tu vas créer la V2 du site d'Eugenia School (https://www.eugeniaschool.com), une école privée parisienne spécialisée en IA appliquée au business. Le site actuel est sur Webflow et souffre de problèmes SEO critiques (pas de H1, title "Home", pas de meta descriptions, pas de Schema.org, arborescence plate, blog sans catégories indexables).

L'objectif de cette V2 est de **garder exactement la même direction artistique** que le site actuel, mais de **refaire toute la structure HTML, l'arborescence, et les fondations SEO/GEO** from scratch en Next.js.

---

## STACK TECHNIQUE

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS
- **Fonts** : Google Fonts — `Neue Haas Grotesk` ou `DM Sans` pour le body, `Playfair Display` pour les accents serif (reproduire le mix sans-serif moderne + touches serif du site actuel)
- **Language** : TypeScript
- **Icônes** : Lucide React
- **Animations** : Framer Motion (scroll reveals, hover states)
- **SEO** : next/head avec metadata API de Next.js 14, JSON-LD injecté via script dans chaque page
- **Routing** : File-based routing Next.js (App Router)

---

## DIRECTION ARTISTIQUE — À REPRODUIRE FIDÈLEMENT

### Palette de couleurs (extraite du site actuel)
```css
:root {
  /* Couleurs principales */
  --color-black: #0A0A0A;          /* Fond hero, textes titres */
  --color-white: #FFFFFF;
  --color-cream: #F5F2EE;          /* Fond sections alternées */
  --color-beige: #EDE9E3;          /* Cards, backgrounds secondaires */

  /* Accent — couleur signature Eugenia */
  --color-accent: #C8FF00;         /* Vert lime fluo — CTA primaires, highlights */
  --color-accent-dark: #A8D900;    /* Hover de l'accent */

  /* Textes */
  --color-text-primary: #0A0A0A;
  --color-text-secondary: #5C5C5C;
  --color-text-muted: #9E9E9E;

  /* Bordures */
  --color-border: #E0DDD8;
  --color-border-dark: #2A2A2A;    /* Sur fonds sombres */
}
```

### Typographie
- **Titres (H1, H2)** : Sans-serif condensé, bold, uppercase pour certains labels de section. Mix de tailles audacieuses (80px+ pour les H1 hero).
- **Corps** : Sans-serif moderne, 16-18px, line-height 1.6
- **Labels de section** : Petites caps, letter-spacing élargi, couleur muted ou accent
- **Style éditorial** : Mélange de texte noir sur fond clair et texte clair sur fond noir (sections alternées)

### Composants visuels clés (reproduire le style)
- **Hero homepage** : Fond noir, grand titre en blanc avec un mot ou phrase en vert lime (`--color-accent`), photo d'étudiants en position absolue ou en grille
- **Barre d'annonce** (ticker) : Bandeau défilant en haut avec les infos rentrée (animation CSS marquee)
- **Navigation** : Sticky, fond blanc avec méga-menu dropdown au survol des items principaux. Logo à gauche, CTA "Candidater" en vert lime à droite.
- **Cards de programmes** : Fond beige ou noir, coin radius 12px, hover avec légère élévation et border accent
- **Section partenaires** : Logos en grayscale sur fond blanc, défilement automatique (carousel infini CSS)
- **Section hackathons/BDD** : Layout avec timeline par semaine (Semaine 1, 2, 3), fond sombre, typo blanche
- **Footer** : Fond noir, colonnes de liens, certifications (Qualiopi, France Compétences) en bas

---

## ARCHITECTURE COMPLÈTE DU SITE — TOUTES LES PAGES À CRÉER

Crée **toutes** ces pages avec leur routing Next.js correct, leur `<title>`, `<meta description>`, leur `<h1>` et leur JSON-LD. Les pages marquées [CONTENU PLACEHOLDER] peuvent avoir du Lorem Ipsum structuré mais DOIVENT avoir la bonne structure HTML sémantique.

### Structure de fichiers App Router :

```
app/
├── layout.tsx                          ← Layout global (nav + footer + barre d'annonce)
├── page.tsx                            ← Homepage /
│
├── ecole/
│   ├── page.tsx                        ← /ecole/ — Hub école
│   ├── adn/
│   │   └── page.tsx                    ← /ecole/adn/
│   ├── equipe-pedagogique/
│   │   └── page.tsx                    ← /ecole/equipe-pedagogique/
│   ├── methode/
│   │   └── page.tsx                    ← /ecole/methode/
│   ├── certifications/
│   │   └── page.tsx                    ← /ecole/certifications/
│   └── groupe-albert-school/
│       └── page.tsx                    ← /ecole/groupe-albert-school/
│
├── formations/
│   ├── page.tsx                        ← /formations/ — Hub formations
│   ├── bachelor/
│   │   └── page.tsx                    ← /formations/bachelor/
│   ├── bachelor-3a/
│   │   └── page.tsx                    ← /formations/bachelor-3a/
│   ├── msc/
│   │   └── page.tsx                    ← /formations/msc/
│   └── programme-detaille/
│       └── page.tsx                    ← /formations/programme-detaille/
│
├── campus/
│   ├── page.tsx                        ← /campus/ — Hub campus
│   ├── paris/
│   │   └── page.tsx                    ← /campus/paris/
│   └── lyon/
│       └── page.tsx                    ← /campus/lyon/
│
├── hackathons/
│   ├── page.tsx                        ← /hackathons/ — Hub hackathons
│   ├── doctolib/
│   │   └── page.tsx                    ← /hackathons/doctolib/
│   ├── carrefour/
│   │   └── page.tsx                    ← /hackathons/carrefour/
│   ├── malt-mistral-make/
│   │   └── page.tsx                    ← /hackathons/malt-mistral-make/
│   ├── spendesk/
│   │   └── page.tsx                    ← /hackathons/spendesk/
│   ├── welcome-to-the-jungle/
│   │   └── page.tsx                    ← /hackathons/welcome-to-the-jungle/
│   └── [slug]/
│       └── page.tsx                    ← Route dynamique pour futurs hackathons
│
├── metiers/
│   ├── page.tsx                        ← /metiers/ — Hub métiers
│   ├── business-analyst/
│   │   └── page.tsx                    ← /metiers/business-analyst/
│   ├── data-analyst/
│   │   └── page.tsx                    ← /metiers/data-analyst/
│   ├── data-scientist/
│   │   └── page.tsx                    ← /metiers/data-scientist/
│   ├── growth-hacker/
│   │   └── page.tsx                    ← /metiers/growth-hacker/
│   ├── consultant-ia/
│   │   └── page.tsx                    ← /metiers/consultant-ia/
│   ├── customer-success-manager/
│   │   └── page.tsx                    ← /metiers/customer-success-manager/
│   └── sales-ops/
│       └── page.tsx                    ← /metiers/sales-ops/
│
├── etudiants/
│   ├── page.tsx                        ← /etudiants/ — Hub vie étudiante
│   ├── associations/
│   │   └── page.tsx                    ← /etudiants/associations/
│   ├── entrepreneuriat/
│   │   └── page.tsx                    ← /etudiants/entrepreneuriat/
│   ├── alumni/
│   │   └── page.tsx                    ← /etudiants/alumni/
│   └── vie-campus/
│       └── page.tsx                    ← /etudiants/vie-campus/
│
├── admissions/
│   ├── page.tsx                        ← /admissions/ — Hub admissions
│   ├── processus/
│   │   └── page.tsx                    ← /admissions/processus/
│   ├── financement/
│   │   └── page.tsx                    ← /admissions/financement/
│   ├── candidature/
│   │   └── page.tsx                    ← /admissions/candidature/
│   └── journees-portes-ouvertes/
│       └── page.tsx                    ← /admissions/journees-portes-ouvertes/
│
├── blog/
│   ├── page.tsx                        ← /blog/ — Index blog
│   ├── ia-et-data/
│   │   └── page.tsx                    ← /blog/ia-et-data/ — Page catégorie
│   ├── business-carrieres/
│   │   └── page.tsx                    ← /blog/business-carrieres/
│   ├── vie-eugenia/
│   │   └── page.tsx                    ← /blog/vie-eugenia/
│   ├── orientation/
│   │   └── page.tsx                    ← /blog/orientation/
│   ├── entreprises/
│   │   └── page.tsx                    ← /blog/entreprises/
│   └── [slug]/
│       └── page.tsx                    ← Route dynamique articles
│
├── evenements/
│   └── page.tsx                        ← /evenements/
│
├── faq/
│   └── page.tsx                        ← /faq/
│
├── presse/
│   └── page.tsx                        ← /presse/
│
├── contact/
│   └── page.tsx                        ← /contact/
│
└── mentions-legales/
    └── page.tsx                        ← /mentions-legales/ (NE PAS pointer vers Notion)
```

---

## RÈGLES SEO/GEO OBLIGATOIRES — À APPLIQUER SUR CHAQUE PAGE

### 1. Metadata Next.js 14 (dans chaque page.tsx)

```typescript
// Exemple pour la homepage
export const metadata: Metadata = {
  title: "Eugenia School – Formation IA & Business à Paris | Bachelor & MSc Hors Parcoursup",
  description: "Eugenia School forme les futurs acteurs du business et de l'IA à Paris. Bachelor 3 ans et MSc 2 ans en alternance, hors Parcoursup et MonMaster. Double diplôme GEM Top 10.",
  openGraph: {
    title: "Eugenia School – École IA & Business à Paris",
    description: "Formations Bachelor et MSc en IA appliquée au business. Hors Parcoursup.",
    url: "https://www.eugeniaschool.com",
    siteName: "Eugenia School",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "...", description: "..." },
  alternates: { canonical: "https://www.eugeniaschool.com" },
};
```

**Titres `<title>` à respecter par page :**

| Page | Title |
|------|-------|
| `/` | `Eugenia School – Formation IA & Business à Paris \| Bachelor & MSc Hors Parcoursup` |
| `/ecole/` | `L'École Eugenia School – ADN, Méthode et Équipe \| Paris` |
| `/formations/` | `Nos Formations IA & Business – Bachelor et MSc \| Eugenia School` |
| `/formations/bachelor/` | `Bachelor AI Applied to Business – 3 ans Hors Parcoursup \| Eugenia School Paris` |
| `/formations/msc/` | `Master of Science AI Applied to Business – MSc en Alternance \| Eugenia School` |
| `/hackathons/` | `Hackathons & Business Deep Dives – Projets avec Doctolib, Carrefour, Malt \| Eugenia School` |
| `/hackathons/doctolib/` | `Géniathon Doctolib × Eugenia School – Cas Data SQL & Base Médicale` |
| `/hackathons/carrefour/` | `Business Deep Dive Carrefour × Eugenia School – Cas Data Retail` |
| `/metiers/` | `Métiers IA & Business – Débouchés et Salaires après Eugenia School` |
| `/metiers/data-analyst/` | `Devenir Data Analyst – Formation, Salaire, Missions \| Eugenia School` |
| `/metiers/business-analyst/` | `Devenir Business Analyst – Formation, Salaire, Missions \| Eugenia School` |
| `/admissions/` | `Admissions Eugenia School – Processus, Financement et Candidature` |
| `/blog/` | `Blog IA & Business – Conseils, Métiers et Orientation \| Eugenia School` |
| `/blog/ia-et-data/` | `Articles IA & Data – Guides et Analyses \| Blog Eugenia School` |
| `/blog/orientation/` | `Articles Orientation Post-Bac – Hors Parcoursup & Alternatives \| Eugenia School` |
| `/campus/paris/` | `Campus Paris 10ème – Eugenia School \| École IA & Business` |
| `/faq/` | `FAQ – Toutes les réponses sur Eugenia School, les formations et l'admission` |


### 2. Structure HTML sémantique obligatoire sur chaque page

```html
<!-- Chaque page DOIT avoir : -->
<main>
  <!-- 1 seul H1 par page, contenant les mots-clés principaux -->
  <h1>...</h1>

  <!-- Sections avec H2 -->
  <section aria-labelledby="section-1-title">
    <h2 id="section-1-title">...</h2>
    <!-- H3 pour les sous-sections -->
  </section>
</main>

<!-- Breadcrumb visible sur toutes les pages sauf homepage -->
<nav aria-label="Fil d'Ariane">
  <ol>
    <li><a href="/">Accueil</a></li>
    <li><a href="/formations/">Formations</a></li>
    <li aria-current="page">Bachelor</li>
  </ol>
</nav>
```

**H1 imposés par page :**

| Page | H1 |
|------|----|
| `/` | `École IA & Business à Paris — Bachelor et MSc hors Parcoursup` |
| `/formations/bachelor/` | `Bachelor AI Applied to Business — 3 ans hors Parcoursup` |
| `/formations/msc/` | `Master of Science AI Applied to Business — 2 ans en alternance` |
| `/hackathons/` | `Hackathons & Business Deep Dives — Immersion avec les leaders de l'industrie` |
| `/hackathons/doctolib/` | `Géniathon Doctolib × Eugenia School — Cas Data SQL & Base Médicale` |
| `/metiers/data-analyst/` | `Devenir Data Analyst — Formation, Missions et Salaire` |
| `/blog/` | `Blog IA, Data & Business — Ressources pour ta carrière` |
| `/blog/ia-et-data/` | `Articles IA & Data — Guides pratiques et analyses` |
| `/admissions/` | `Admissions Eugenia School — Processus, Calendrier et Financement` |


### 3. JSON-LD Schema.org — Composant réutilisable

Crée un composant `components/JsonLd.tsx` :

```typescript
// components/JsonLd.tsx
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

**JSON-LD à injecter par type de page :**

**Homepage (`/`) :**
```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Eugenia School",
  "url": "https://www.eugeniaschool.com",
  "logo": "https://www.eugeniaschool.com/logo.png",
  "description": "École privée parisienne spécialisée en IA appliquée au business. Bachelor 3 ans et MSc 2 ans en alternance, hors Parcoursup et MonMaster.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10ème arrondissement",
    "addressLocality": "Paris",
    "postalCode": "75010",
    "addressCountry": "FR"
  },
  "foundingOrganization": { "@type": "Organization", "name": "Albert School" },
  "hasCredential": ["Certification Qualiopi", "France Compétences RNCP"],
  "sameAs": ["https://www.linkedin.com/school/eugenia-school/", "https://www.instagram.com/eugeniaschool/"]
}
```

**Pages formations (`/formations/bachelor/`, `/formations/msc/`) :**
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Bachelor AI Applied to Business",
  "description": "Programme de 3 ans combinant IA, data et business. Hors Parcoursup.",
  "provider": { "@type": "EducationalOrganization", "name": "Eugenia School" },
  "courseMode": "Blended",
  "educationalLevel": "Bachelor",
  "inLanguage": "fr-FR",
  "offers": { "@type": "Offer", "category": "Formation initiale hors Parcoursup" }
}
```

**Pages hackathons (`/hackathons/doctolib/`, etc.) :**
```json
{
  "@context": "https://schema.org",
  "@type": "EducationalEvent",
  "name": "Géniathon Doctolib × Eugenia School",
  "description": "Hackathon data de 3 jours sur un cas SQL de base de données médicales.",
  "organizer": { "@type": "EducationalOrganization", "name": "Eugenia School" },
  "sponsor": { "@type": "Organization", "name": "Doctolib" },
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": { "@type": "Place", "name": "Campus Paris 10ème" },
  "inLanguage": "fr-FR"
}
```

**Pages métiers (`/metiers/data-analyst/`, etc.) :**
```json
{
  "@context": "https://schema.org",
  "@type": "Occupation",
  "name": "Data Analyst",
  "description": "Expert de l'analyse qui transforme les données en insights stratégiques.",
  "estimatedSalary": {
    "@type": "MonetaryAmountDistribution",
    "currency": "EUR",
    "percentile10": 40000,
    "median": 55000,
    "percentile90": 100000
  },
  "occupationLocation": { "@type": "Country", "name": "France" }
}
```

**Articles de blog (`/blog/[slug]/`) :**
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Titre de l'article",
  "description": "Meta description de l'article",
  "author": { "@type": "Person", "name": "Noé M." },
  "publisher": { "@type": "EducationalOrganization", "name": "Eugenia School" },
  "datePublished": "2026-01-27",
  "inLanguage": "fr-FR"
}
```

**BreadcrumbList (sur toutes les pages sauf homepage) :**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.eugeniaschool.com/" },
    { "@type": "ListItem", "position": 2, "name": "Formations", "item": "https://www.eugeniaschool.com/formations/" },
    { "@type": "ListItem", "position": 3, "name": "Bachelor", "item": "https://www.eugeniaschool.com/formations/bachelor/" }
  ]
}
```

---

## COMPOSANTS GLOBAUX OBLIGATOIRES

### Navigation principale (`components/Navigation.tsx`)

```
Structure :
[Logo Eugenia School]  [L'École ▾] [Formations ▾] [Campus ▾] [Hackathons ▾] [Métiers ▾] [Blog ▾]  [Événements]  [Candidater →]

Méga-menus au survol :
- L'École → ADN / Équipe pédagogique / Méthode QCOR / Certifications / Groupe Albert School
- Formations → Hub Formations / Bachelor / Bachelor 3ème année / MSc / Programme détaillé
- Campus → Paris / Lyon
- Hackathons → Hub Hackathons / Doctolib / Carrefour / Malt × Mistral / Spendesk / Welcome to the Jungle
- Métiers → Hub Métiers / Business Analyst / Data Analyst / Data Scientist / Growth Hacker / Sales Ops / CSM / Consultant IA
- Blog → Index / IA & Data / Business & Carrières / Vie Eugenia / Orientation / Entreprises
```

Comportement :
- Sticky en scroll
- Fond blanc avec légère ombre au scroll
- Méga-menu avec animation fade + slide-down (Framer Motion)
- Sur mobile : hamburger → drawer latéral complet
- CTA "Candidater" : bouton fond `#C8FF00`, texte noir, hover fond noir texte blanc

### Barre d'annonce (`components/AnnouncementBar.tsx`)
Bandeau défilant (marquee CSS) en haut de toutes les pages :
```
"Master of Science en alternance : Rentrées en janvier et septembre 2026 • Candidatures en ligne • Hors Parcoursup / Hors MonMaster • Double diplôme avec Grenoble École de Management (GEM) - Top 10 Grande École •"
```
Fond noir, texte blanc, taille 13px, loop infini.

### Footer (`components/Footer.tsx`)
```
Fond noir. 5 colonnes :
Col 1 : Logo + description courte + réseaux sociaux
Col 2 : L'École (ADN, Équipe, Méthode, Certifications)
Col 3 : Formations (Bachelor, Bachelor 3A, MSc, Programme)
Col 4 : Étudiants (Admissions, Financement, Vie étudiante, Entrepreneuriat, Alumni)
Col 5 : Actualités (Blog, Événements, FAQ, Presse, Contact)

Bas du footer :
- Logos Qualiopi et France Compétences (images placeholder)
- "® 2025 Eugenia School. Tous droits réservés."
- Liens : /mentions-legales/ et /politique-confidentialite/ (pages internes, PAS de lien Notion)
```

### Breadcrumb (`components/Breadcrumb.tsx`)
Composant générique prenant un tableau de `{ label, href }` :
- Rendu HTML avec `<nav aria-label="Fil d'Ariane"><ol>...</ol></nav>`
- Séparateur `›` entre les items
- Dernier item non cliquable avec `aria-current="page"`
- JSON-LD BreadcrumbList auto-généré depuis les props

---

## PAGES CLÉS — STRUCTURE HTML DÉTAILLÉE

### Homepage (`/`) — Structure complète à respecter

```
1. <AnnouncementBar />
2. <Navigation />
3. <main>
   a. Section Hero (fond noir)
      - <h1>École IA & Business à Paris — Bachelor et MSc hors Parcoursup</h1>
      - Paragraphe intro factuel (150 mots, contient les mots-clés GEO)
      - 2 CTA : [Candidater] (vert lime) et [Découvrir les programmes] (outline blanc)
      - Photo/image étudiants

   b. Section intro factuelle GEO (CRITIQUE — visible dans les 500 premiers mots)
      - Texte : "Eugenia School est une école privée parisienne fondée par Albert School,
        spécialisée en intelligence artificielle appliquée au business. Elle propose un
        Bachelor de 3 ans (hors Parcoursup) et un Master of Science de 2 ans en alternance
        (hors MonMaster), en double diplôme avec Grenoble École de Management (GEM, Top 10).
        Basée dans le 10ème arrondissement de Paris, l'école forme ses étudiants aux outils
        IA, data et business avec une approche par projets réels."

   c. Logos partenaires (carousel défilant) : Mistral AI, Station F, Microsoft, HEC Incubateur, Make, Dataiku, L'Esprit Critique

   d. Section "Nos programmes" (2 cards : Bachelor + MSc) → liens /formations/bachelor/ et /formations/msc/

   e. Section "Hackathons & Business Deep Dives" — aperçu avec 3 entreprises featured

   f. Section "Carrières hybrides" — 4 métiers avec salaires → liens /metiers/[metier]/

   g. Section logos entreprises partenaires (Doctolib, Carrefour, Malt, Société Générale, Capgemini, Snapchat, Google Cloud, Air France, Microsoft)

   h. Section témoignages étudiants (2-3 quotes)

   i. Section derniers articles blog (3 cards) → lien /blog/

   j. Section événements (prochain événement featured) → lien /evenements/

   k. Section CTA final "Rejoignez l'aventure" → /admissions/candidature/

4. <Footer />
```

### Hub Hackathons (`/hackathons/`) — Structure

```
<main>
  <Breadcrumb items={[{label:"Accueil",href:"/"},{label:"Hackathons",href:"/hackathons/"}]} />
  <h1>Hackathons & Business Deep Dives — Immersion avec les leaders de l'industrie</h1>
  <p>Intro factuelle : X éditions, X entreprises partenaires, X étudiants impliqués</p>

  <!-- Filtre par programme -->
  <div role="tablist">
    <button>Tous</button>
    <button>Bachelor (Business Deep Dives)</button>
    <button>MSc (Géniathons)</button>
  </div>

  <!-- Grille des hackathons -->
  <ul>
    <li> → Card Doctolib (lien /hackathons/doctolib/) </li>
    <li> → Card Carrefour Links </li>
    <li> → Card Malt × Mistral AI × Make </li>
    <li> → Card Spendesk </li>
    <li> → Card Welcome to the Jungle </li>
  </ul>

  <!-- Structure type d'une semaine -->
  <section>
    <h2>Comment se déroule un Géniathon ?</h2>
    <!-- Timeline Jour 1 / Jour 2 / Jour 3 -->
  </section>
</main>
```

### Page hackathon individuelle (`/hackathons/doctolib/`) — Structure type

```
<main>
  <Breadcrumb items={[..., {label:"Hackathons",href:"/hackathons/"}, {label:"Doctolib"}]} />

  <!-- Hero -->
  <h1>Géniathon Doctolib × Eugenia School — Cas Data SQL & Base Médicale</h1>
  <p class="meta">Programme MSc · 3 jours · Paris 10ème</p>

  <!-- Présentation de l'entreprise partenaire -->
  <section>
    <h2>Doctolib, leader de la santé numérique</h2>
    <p>Présentation de Doctolib (50-100 mots)</p>
  </section>

  <!-- Le défi proposé -->
  <section>
    <h2>Le défi proposé aux étudiants</h2>
    <p>Description du cas business/data : structuration de bases SQL médicales, modélisation...</p>
  </section>

  <!-- Déroulement -->
  <section>
    <h2>Déroulement du Géniathon</h2>
    <div>
      <h3>Jour 1 — Présentation du cas</h3>
      <p>Rencontre entre les équipes data de Doctolib et les élèves. Présentation du cas.</p>
      <h3>Jour 2 — Coaching et développement</h3>
      <p>Coaching sur la structuration SQL, identification des relations entre tables...</p>
      <h3>Jour 3 — Pitch final</h3>
      <p>Démonstration en live devant les équipes Doctolib...</p>
    </div>
  </section>

  <!-- Compétences développées -->
  <section>
    <h2>Compétences développées</h2>
    <ul>
      <li>Modélisation de bases de données relationnelles</li>
      <li>SQL avancé et optimisation de requêtes</li>
      <li>Communication de résultats techniques à des experts métiers</li>
    </ul>
  </section>

  <!-- CTA -->
  <section>
    <h2>Tu veux vivre cette expérience ?</h2>
    <a href="/formations/msc/">Découvrir le MSc</a>
    <a href="/admissions/candidature/">Candidater</a>
  </section>
</main>
```

### Page catégorie blog (`/blog/ia-et-data/`) — Structure

```
<main>
  <Breadcrumb items={[{label:"Accueil"},{label:"Blog",href:"/blog/"},{label:"IA & Data"}]} />
  <h1>Articles IA & Data — Guides pratiques et analyses</h1>
  <p>Découvre nos analyses sur l'intelligence artificielle, les outils data et les tendances tech pour préparer ta carrière.</p>

  <!-- Grille d'articles de cette catégorie uniquement -->
  <ul role="list">
    <li> → Card article avec : image, catégorie, date, titre, RÉSUMÉ 2-3 lignes, auteur, lien "Lire l'article" </li>
  </ul>

  <!-- Pagination HTML réelle (pas de JS infini) -->
  <nav aria-label="Pagination">
    <a href="/blog/ia-et-data/?page=1" aria-current="page">1</a>
    <a href="/blog/ia-et-data/?page=2">2</a>
  </nav>
</main>
```

### Page article blog (`/blog/[slug]/`) — Structure

```
<main>
  <Breadcrumb items={[..., {label:"Blog",href:"/blog/"}, {label:"IA & Data",href:"/blog/ia-et-data/"}, {label:"Titre article"}]} />

  <article>
    <header>
      <span class="category">IA & Data</span>
      <h1>Titre de l'article</h1>
      <p class="intro">Résumé accrocheur de l'article</p>
      <p class="meta">Par <strong>Noé M.</strong> · Publié le 27 janvier 2026 · 5 min de lecture</p>
    </header>

    <img src="..." alt="Description précise de l'image" />

    <!-- Contenu structuré -->
    <section>
      <h2>Premier grand titre</h2>
      <p>...</p>
      <h3>Sous-titre si nécessaire</h3>
    </section>

    <footer>
      <!-- CTA contextualisé selon la catégorie -->
      <aside>
        <h2>Tu veux maîtriser l'IA dans ta carrière ?</h2>
        <a href="/formations/bachelor/">Voir le Bachelor</a>
        <a href="/formations/msc/">Voir le MSc</a>
      </aside>

      <!-- Articles liés DE LA MÊME CATÉGORIE -->
      <section>
        <h2>Articles liés</h2>
        <!-- 3 cards d'articles de la même catégorie -->
      </section>
    </footer>
  </article>
</main>
```

---

## DONNÉES MOCKÉES — À CRÉER DANS `lib/data.ts`

Crée un fichier `lib/data.ts` avec toutes les données statiques :

```typescript
// lib/data.ts

export const hackathons = [
  {
    slug: "doctolib",
    company: "Doctolib",
    type: "Géniathon MSc",
    sector: "Santé numérique",
    duration: "3 jours",
    year: 2024,
    topic: "SQL, bases de données médicales, modélisation",
    description: "Structuration de bases SQL médicales avec les équipes Data de Doctolib.",
    skills: ["SQL avancé", "Modélisation BDD", "Communication technique"],
    days: [
      { day: "Jour 1", title: "Présentation du cas", content: "Rencontre entre les équipes data de Doctolib et les élèves. Dévoilement du cas business." },
      { day: "Jour 2", title: "Coaching technique", content: "Coaching sur la structuration SQL, identification des bonnes relations entre tables." },
      { day: "Jour 3", title: "Pitch final", content: "Démonstration en live de la solution développée devant les équipes Doctolib." }
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
    description: "Analyse de données achats et conception de KPIs pour les équipes Carrefour.",
    skills: ["Data analytics", "Power BI", "Communication business"],
    days: [/* ... */]
  },
  {
    slug: "malt-mistral-make",
    company: "Malt × Mistral AI × Make",
    type: "Géniathon MSc",
    sector: "Freelance / IA générative",
    duration: "3 jours",
    year: 2024,
    topic: "Automatisation marketing, IA générative, workflows",
    description: "Création de workflows d'automatisation marketing avec Mistral AI et Make.",
    skills: ["Mistral AI", "Make (automation)", "Marketing IA"],
    days: [/* ... */]
  },
  {
    slug: "spendesk",
    company: "Spendesk",
    type: "Géniathon MSc",
    sector: "Fintech",
    duration: "3 jours",
    year: 2024,
    topic: "Power BI, dashboards financiers",
    description: "Conception de dashboards interactifs pour la visualisation financière.",
    skills: ["Power BI", "Data viz", "Finance"],
    days: [/* ... */]
  },
  {
    slug: "welcome-to-the-jungle",
    company: "Welcome to the Jungle",
    type: "Hackathon",
    sector: "RH Tech",
    duration: "1 journée",
    year: 2025,
    topic: "Réinventer la vie au bureau avec l'IA",
    description: "Comment l'IA peut transformer l'expérience collaborateur en entreprise.",
    skills: ["Design thinking", "IA générative", "Pitch"],
    days: [/* ... */]
  }
];

export const metiers = [
  {
    slug: "business-analyst",
    title: "Business Analyst",
    description: "Le Business Analyst associe analyse de marché et expertise opérationnelle pour améliorer les processus d'affaires.",
    salaryEntry: { min: 40000, max: 50000 },
    salary5years: { min: 65000, max: 75000 },
    skills: ["Analyse", "Stratégie", "Communication"],
    evolutions: ["Chef de projet", "Chief of Operations", "Directeur marketing"],
    missions: [
      "Optimisation des processus d'affaires",
      "Liaison entre parties prenantes",
      "Analyse de marché et modélisation financière"
    ]
  },
  {
    slug: "data-analyst",
    title: "Data Analyst",
    description: "Expert de l'analyse qui transforme les données complexes en insights stratégiques.",
    salaryEntry: { min: 45000, max: 50000 },
    salary5years: { min: 70000, max: 100000 },
    skills: ["Analyse", "Rigueur", "Compréhension business"],
    evolutions: ["Lead Data Analyst", "Business Intelligence Consultant", "CTO"],
    missions: [
      "Interpréter les données avec des techniques statistiques",
      "Développer des bases de données",
      "Identifier les tendances dans des datasets complexes"
    ]
  },
  // ... autres métiers
];

export const blogPosts = [
  {
    slug: "gemini-chatgpt-claude-quelle-ia-choisir-pour-ses-etudes",
    title: "Gemini, ChatGPT, Claude... Quelle IA choisir pour ses études ?",
    category: "ia-et-data",
    categoryLabel: "IA & Data",
    author: "Noé M.",
    date: "2026-01-27",
    readTime: 5,
    excerpt: "On compare ChatGPT, Claude et Gemini pour t'aider à choisir le bon outil selon ton profil : rédaction, analyse, recherche.",
    image: "/blog/ia-choisir-etudes.jpg"
  },
  {
    slug: "focus-sur-le-metier-de-sales-ops-en-startup",
    title: "Focus sur le métier de Sales Ops en startup",
    category: "business-carrieres",
    categoryLabel: "Business & Carrières",
    author: "Noé M.",
    date: "2025-05-23",
    readTime: 5,
    excerpt: "Le Sales Ops est devenu central dans les startups tech. Missions, outils CRM, salaires et formations : tout ce qu'il faut savoir.",
    image: "/blog/sales-ops.jpg"
  },
  // ... autres articles
];

export const partenaires = [
  "Mistral AI", "Station F", "Microsoft", "HEC Incubateur", "Make", "Dataiku", "L'Esprit Critique"
];

export const entreprisesPartenaires = [
  "Doctolib", "Carrefour", "Malt", "Société Générale", "Capgemini",
  "Snapchat", "Google Cloud", "Air France", "Microsoft"
];
```

---

## SITEMAP ET ROBOTS

### `app/sitemap.ts`
Génère automatiquement le sitemap XML pour toutes les routes statiques et dynamiques.

### `app/robots.ts`
```typescript
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.eugeniaschool.com/sitemap.xml',
  };
}
```

---

## CONTRAINTES FINALES IMPORTANTES

1. **Aucun lien ne doit pointer vers notion.so** — les mentions légales et politique de confidentialité sont des pages internes (`/mentions-legales/` et `/politique-confidentialite/`).

2. **Aucun lien avec `href="#"`** dans la navigation ou le footer — tous les liens pointent vers des routes réelles.

3. **Chaque image doit avoir un `alt` descriptif** — jamais `alt=""` sauf pour les images purement décoratives.

4. **Les logos partenaires** dans le carousel utilisent `alt="Logo [Nom entreprise]"`.

5. **Responsive obligatoire** — mobile-first, breakpoints Tailwind : `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px).

6. **Accessibilité de base** : landmarks ARIA (`<main>`, `<nav aria-label="..."`, `<header>`, `<footer>`), focus visible sur tous les éléments interactifs, contraste couleurs suffisant.

7. **Performance** : Utiliser `next/image` pour toutes les images, `next/font` pour les fonts Google, `loading="lazy"` sur les images below-the-fold.

8. **La couleur accent `#C8FF00`** (vert lime) est utilisée exclusivement sur : CTA primaires, highlights de mots dans les titres, bordures de hover sur cards. Jamais en texte sur fond blanc (mauvais contraste).

9. **Pas de keyword stuffing** — le contenu doit être naturel. Ne jamais répéter mécaniquement le même mot-clé dans une phrase.

10. **Le fichier `lib/seo.ts`** centralise tous les titles et descriptions pour qu'ils soient modifiables en un seul endroit.

---

## ORDRE DE DÉVELOPPEMENT RECOMMANDÉ

1. Setup Next.js 14 + Tailwind + structure de dossiers
2. `lib/data.ts` — toutes les données mockées
3. `lib/seo.ts` — centralisé titles/descriptions
4. Composants globaux : `AnnouncementBar`, `Navigation`, `Footer`, `Breadcrumb`, `JsonLd`
5. Homepage `/` complète
6. Template layout formations → pages Bachelor + MSc
7. Hub `/hackathons/` + 5 pages hackathons
8. Hub `/metiers/` + pages Business Analyst + Data Analyst (les plus prioritaires)
9. Hub `/blog/` + 5 pages catégories + template article dynamique
10. Hub `/admissions/` + sous-pages
11. Toutes les pages restantes avec contenu placeholder structuré
12. `sitemap.ts` + `robots.ts`
13. Vérification finale : chaque page a title, meta description, H1, JSON-LD, breadcrumb
