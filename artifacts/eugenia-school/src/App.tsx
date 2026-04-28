import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import Bachelor from "@/pages/Bachelor";
import MSc from "@/pages/MSc";
import FAQ from "@/pages/FAQ";
import HackathonsHub from "@/pages/HackathonsHub";
import HackathonDetail from "@/pages/HackathonDetail";
import MetiersHub from "@/pages/MetiersHub";
import MetierDetail from "@/pages/MetierDetail";
import Contact from "@/pages/Contact";
import FormationsHub from "@/pages/FormationsHub";
import EcoleHub from "@/pages/EcoleHub";
import EvenementsHub from "@/pages/EvenementsHub";
import BlogHub from "@/pages/BlogHub";
import BlogPost from "@/pages/BlogPost";
import Candidature from "@/pages/Candidature";
import AdmissionsHub from "@/pages/AdmissionsHub";
import CampusHub from "@/pages/CampusHub";
import VieEtudianteHub from "@/pages/VieEtudianteHub";
import PlaceholderPage from "@/pages/PlaceholderPage";
import NotFound from "@/pages/not-found";

// New pages
import NotreADN from "@/pages/NotreADN";
import ApprochePedagogique from "@/pages/ApprochePedagogique";
import MethodeEugenia from "@/pages/MethodeEugenia";
import Equipe from "@/pages/Equipe";
import CampusParis from "@/pages/CampusParis";
import ProcessusAdmission from "@/pages/ProcessusAdmission";
import Financement from "@/pages/Financement";
import EtudiantsHub from "@/pages/EtudiantsHub";
import Associations from "@/pages/Associations";
import Temoignages from "@/pages/Temoignages";
import PartenairesHub from "@/pages/PartenairesHub";
import Presse from "@/pages/Presse";
import Brochure from "@/pages/Brochure";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      {/* ==================== FORMATIONS ==================== */}
      <Route path="/formations" component={FormationsHub} />
      <Route path="/formations/bachelor" component={Bachelor} />
      <Route path="/formations/msc" component={MSc} />
      <Route path="/formations/alternance" component={PlaceholderPage} />
      {/* Redirections anciennes URLs */}
      <Route path="/programme/bachelor">
        <Redirect to="/formations/bachelor" />
      </Route>
      <Route path="/programme/msc">
        <Redirect to="/formations/msc" />
      </Route>

      {/* ==================== ÉCOLE ==================== */}
      <Route path="/ecole" component={EcoleHub} />
      <Route path="/ecole/notre-adn" component={NotreADN} />
      <Route path="/ecole/approche-pedagogique" component={ApprochePedagogique} />
      <Route path="/ecole/methode-eugenia" component={MethodeEugenia} />
      <Route path="/ecole/equipe" component={Equipe} />
      <Route path="/ecole/certifications" component={PlaceholderPage} />
      {/* Redirections anciennes URLs */}
      <Route path="/notre-adn">
        <Redirect to="/ecole/notre-adn" />
      </Route>
      <Route path="/approche-pedagogique">
        <Redirect to="/ecole/approche-pedagogique" />
      </Route>
      <Route path="/methode-eugenia">
        <Redirect to="/ecole/methode-eugenia" />
      </Route>
      <Route path="/ecole/methode">
        <Redirect to="/ecole/methode-eugenia" />
      </Route>

      {/* ==================== PARTENAIRES ==================== */}
      <Route path="/partenaires" component={PartenairesHub} />
      <Route path="/partenaires/entreprises" component={PartenairesHub} />
      <Route path="/partenaires/academiques" component={PlaceholderPage} />
      {/* Redirections anciennes URLs */}
      <Route path="/entreprises-partenaires">
        <Redirect to="/partenaires" />
      </Route>
      <Route path="/ecole/partenaires">
        <Redirect to="/partenaires" />
      </Route>

      {/* ==================== CAMPUS ==================== */}
      <Route path="/campus/paris" component={CampusParis} />

      {/* ==================== ADMISSIONS ==================== */}
      <Route path="/admissions" component={AdmissionsHub} />
      <Route path="/processus-admission" component={ProcessusAdmission} />
      <Route path="/financement" component={Financement} />
      <Route path="/admissions/candidature" component={Candidature} />
      <Route path="/admissions/portes-ouvertes" component={PlaceholderPage} />
      {/* Redirections anciennes URLs */}
      <Route path="/admissions/processus">
        <Redirect to="/processus-admission" />
      </Route>
      <Route path="/admissions/financement">
        <Redirect to="/financement" />
      </Route>

      {/* ==================== ÉTUDIANTS ==================== */}
      <Route path="/etudiants" component={EtudiantsHub} />
      <Route path="/vie-etudiante" component={VieEtudianteHub} />
      <Route path="/associations" component={Associations} />
      <Route path="/temoignages" component={Temoignages} />
      {/* Redirections anciennes URLs */}
      <Route path="/vie-etudiante/associations">
        <Redirect to="/associations" />
      </Route>

      {/* ==================== HACKATHONS / GENIATHONS ==================== */}
      <Route path="/hackathons" component={HackathonsHub} />
      <Route path="/hackathons/:slug" component={HackathonDetail} />
      <Route path="/vie-etudiante/geniathons" component={HackathonsHub} />

      {/* ==================== MÉTIERS ==================== */}
      <Route path="/metiers" component={MetiersHub} />
      <Route path="/metiers/:slug" component={MetierDetail} />

      {/* ==================== ÉVÉNEMENTS ==================== */}
      <Route path="/evenements" component={EvenementsHub} />
      <Route path="/evenements/:slug" component={PlaceholderPage} />
      <Route path="/vie-etudiante/evenements" component={EvenementsHub} />

      {/* ==================== BLOG ==================== */}
      <Route path="/blog" component={BlogHub} />
      <Route path="/blog/categorie/:cat" component={BlogHub} />
      <Route path="/blog/:slug" component={BlogPost} />

      {/* ==================== CANDIDATURE & BROCHURE ==================== */}
      <Route path="/candidature" component={Candidature} />
      <Route path="/brochure" component={Brochure} />

      {/* ==================== PRESSE ==================== */}
      <Route path="/presse" component={Presse} />
      <Route path="/presse/communiques" component={PlaceholderPage} />
      <Route path="/presse/media-kit" component={PlaceholderPage} />

      {/* ==================== CONTACT & LEGAL ==================== */}
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/mentions-legales" component={PlaceholderPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
