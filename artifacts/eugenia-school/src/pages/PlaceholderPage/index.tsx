import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { useLocation } from "wouter";

export default function PlaceholderPage() {
  const [location] = useLocation();
  
  // Create a readable title from the path
  const pathParts = location.split('/').filter(Boolean);
  const pageTitle = pathParts.length > 0 
    ? pathParts[pathParts.length - 1].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : "Page";

  // Build breadcrumb items
  const breadcrumbItems = [{ label: "Accueil", href: "/" }];
  let currentPath = "";
  pathParts.forEach((part, index) => {
    currentPath += `/${part}`;
    const isLast = index === pathParts.length - 1;
    breadcrumbItems.push({
      label: part.split('-').join(' '),
      href: isLast ? undefined : currentPath
    });
  });

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead 
        title={`${pageTitle} | Eugenia School`} 
        description={`Découvrez ${pageTitle} chez Eugenia School, l'école spécialisée en IA appliquée au business.`} 
      />
      <AnnouncementBar />
      <Navigation />

      <main className="flex-1 bg-[#F5F2EE]">
        <div className="bg-[#0A0A0A] text-white pt-12 pb-24 border-b border-[#2A2A2A]">
          <div className="container mx-auto px-6">
            <Breadcrumb items={breadcrumbItems} />
            <div className="max-w-3xl mt-8">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">{pageTitle}</h1>
              <p className="text-lg text-[#9E9E9E]">Cette page est en cours de construction.</p>
            </div>
          </div>
        </div>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#E0DDD8] shadow-sm">
              <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#0A0A0A] prose-p:text-[#5C5C5C] prose-a:text-[#0A0A0A] prose-a:font-bold hover:prose-a:text-[#FF6B2B]">
                <h2>À propos de ce contenu</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h3>Notre approche</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                </p>
                <ul>
                  <li>Innovation technologique constante</li>
                  <li>Application directe au monde de l'entreprise</li>
                  <li>Excellence académique et partenariats prestigieux</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
