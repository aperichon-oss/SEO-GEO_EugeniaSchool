# Eugenia School - Site Web

Optimisation SEO et GEO du site web officiel d'Eugenia School, ecole superieure specialisee dans l'IA et le Business.

## Stack Technique

- **Framework**: React 18 + Vite
- **Routing**: Wouter
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: TanStack Query
- **Langage**: TypeScript

## Structure du Projet

```
artifacts/eugenia-school/
├── src/
│   ├── components/       # Composants reutilisables (Navigation, Footer, UI)
│   ├── pages/            # Pages du site
│   │   ├── Home/         # Page d'accueil
│   │   ├── FormationsHub/    # Hub formations
│   │   ├── Bachelor/     # Page Bachelor
│   │   ├── MSc/          # Page MSc
│   │   ├── EcoleHub/     # Hub ecole (ADN, equipe, methode)
│   │   ├── AdmissionsHub/    # Hub admissions
│   │   ├── CampusHub/    # Hub campus
│   │   ├── VieEtudianteHub/  # Hub vie etudiante
│   │   ├── HackathonsHub/    # Hub Geniathons
│   │   ├── MetiersHub/   # Hub debouches metiers
│   │   ├── BlogHub/      # Hub blog
│   │   ├── Contact/      # Page contact
│   │   ├── Candidature/  # Formulaire de candidature
│   │   └── FAQ/          # Questions frequentes
│   ├── lib/              # Utilitaires et donnees
│   └── App.tsx           # Routes principales
├── public/               # Assets statiques
└── index.html            # Point d'entree
```

## Arborescence des Pages

| Route | Page |
|-------|------|
| `/` | Accueil |
| `/ecole` | L'ecole - Notre ADN |
| `/ecole/methode` | Methode pedagogique |
| `/ecole/equipe` | Equipe pedagogique |
| `/ecole/certifications` | Certifications |
| `/ecole/partenaires` | Partenaires entreprises |
| `/formations` | Hub Formations |
| `/formations/bachelor` | Bachelor IA & Business |
| `/formations/msc` | MSc IA & Business |
| `/formations/alternance` | Alternance |
| `/admissions` | Hub Admissions |
| `/admissions/processus` | Processus d'admission |
| `/admissions/financement` | Financement |
| `/admissions/candidature` | Candidater |
| `/admissions/portes-ouvertes` | Journees portes ouvertes |
| `/campus` | Hub Campus |
| `/campus/paris` | Campus Paris |
| `/vie-etudiante` | Vie etudiante |
| `/vie-etudiante/geniathons` | Geniathons (hackathons) |
| `/vie-etudiante/evenements` | Evenements |
| `/metiers` | Debouches metiers |
| `/metiers/:slug` | Detail metier |
| `/blog` | Blog |
| `/blog/:slug` | Article de blog |
| `/contact` | Contact |
| `/faq` | FAQ |
| `/candidature` | Formulaire candidature |

## Direction Artistique

- **Couleur primaire**: Rose/Bordeaux `#8B2346`
- **Couleur accent**: Jaune Eugenia `#FCBA35`
- **Fond**: Cream `#F5F2EE` / Blanc
- **Texte**: Noir `#0A0A0A`
- **Typographies**: 
  - Titres: Playfair Display
  - Corps: DM Sans

## Installation

```bash
cd artifacts/eugenia-school
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## Build Production

```bash
npm run build
```

Les fichiers de production seront generes dans le dossier `dist/`.

## Deploiement

Le site est configure pour etre deploye sur Vercel. Utilisez le bouton "Publish" dans v0 ou connectez le repo GitHub a Vercel.
