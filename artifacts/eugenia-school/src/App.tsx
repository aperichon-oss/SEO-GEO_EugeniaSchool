import { Switch, Route, Router as WouterRouter } from "wouter";
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
import PlaceholderPage from "@/pages/PlaceholderPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      {/* Formations */}
      <Route path="/formations" component={FormationsHub} />
      <Route path="/formations/bachelor" component={Bachelor} />
      <Route path="/formations/msc" component={MSc} />
      <Route path="/formations/bachelor-alternance" component={PlaceholderPage} />

      {/* École */}
      <Route path="/ecole" component={EcoleHub} />
      <Route path="/ecole/campus" component={PlaceholderPage} />
      <Route path="/ecole/equipe" component={PlaceholderPage} />
      <Route path="/ecole/valeurs" component={PlaceholderPage} />
      <Route path="/ecole/histoire" component={PlaceholderPage} />
      <Route path="/ecole/partenaires" component={PlaceholderPage} />

      {/* Hackathons */}
      <Route path="/hackathons" component={HackathonsHub} />
      <Route path="/hackathons/:slug" component={HackathonDetail} />

      {/* Métiers */}
      <Route path="/metiers" component={MetiersHub} />
      <Route path="/metiers/:slug" component={MetierDetail} />

      {/* Événements */}
      <Route path="/evenements" component={EvenementsHub} />
      <Route path="/evenements/:slug" component={PlaceholderPage} />

      {/* Blog */}
      <Route path="/blog" component={BlogHub} />
      <Route path="/blog/categorie/:cat" component={BlogHub} />
      <Route path="/blog/:slug" component={BlogPost} />

      {/* Candidature & Brochure */}
      <Route path="/candidature" component={Candidature} />
      <Route path="/brochure" component={PlaceholderPage} />

      {/* Contact & Legal */}
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
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
