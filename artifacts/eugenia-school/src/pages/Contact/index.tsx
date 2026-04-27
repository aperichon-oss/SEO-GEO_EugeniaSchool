import { SeoHead } from "@/components/SeoHead";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone } from "lucide-react";

const formSchema = z.object({
  prenom: z.string().min(2, "Le prénom est requis"),
  nom: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(10, "Numéro de téléphone invalide"),
  programme: z.string().min(1, "Veuillez sélectionner un programme"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
      programme: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message envoyé !",
      description: "Notre équipe vous recontactera dans les plus brefs délais.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SeoHead 
        title="Contact | Eugenia School" 
        description="Contactez l'équipe Eugenia School pour toute question concernant les admissions, les programmes ou les partenariats." 
      />
      <AnnouncementBar />
      <Navigation />

      <main className="flex-1 bg-[#F5F2EE]">
        <div className="bg-[#0A0A0A] text-white pt-12 pb-24 border-b border-[#2A2A2A]">
          <div className="container mx-auto px-6">
            <Breadcrumb 
              items={[
                { label: "Accueil", href: "/" },
                { label: "Contact" }
              ]} 
            />
            <div className="max-w-3xl mt-8">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Contactez-nous</h1>
              <p className="text-lg text-[#9E9E9E]">Une question sur l'admission, l'alternance ou nos formations ? Notre équipe est à votre disposition.</p>
            </div>
          </div>
        </div>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Form Column */}
              <div className="lg:col-span-8 bg-white rounded-2xl p-8 border border-[#E0DDD8] shadow-sm">
                <h2 className="text-2xl font-bold text-[#0A0A0A] mb-8">Envoyez-nous un message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="prenom"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#0A0A0A] font-bold">Prénom</FormLabel>
                            <FormControl>
                              <Input placeholder="Jean" className="bg-[#F5F2EE] border-[#E0DDD8] focus-visible:ring-[#8B2346]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="nom"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#0A0A0A] font-bold">Nom</FormLabel>
                            <FormControl>
                              <Input placeholder="Dupont" className="bg-[#F5F2EE] border-[#E0DDD8] focus-visible:ring-[#8B2346]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#0A0A0A] font-bold">Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="jean.dupont@email.com" className="bg-[#F5F2EE] border-[#E0DDD8] focus-visible:ring-[#8B2346]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="telephone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#0A0A0A] font-bold">Téléphone</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="06 12 34 56 78" className="bg-[#F5F2EE] border-[#E0DDD8] focus-visible:ring-[#8B2346]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="programme"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#0A0A0A] font-bold">Programme d'intérêt</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-[#F5F2EE] border-[#E0DDD8] focus:ring-[#8B2346]">
                                <SelectValue placeholder="Sélectionnez un programme" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="bachelor">Bachelor AI Applied to Business</SelectItem>
                              <SelectItem value="msc">Master of Science (Alternance)</SelectItem>
                              <SelectItem value="autre">Autre demande</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#0A0A0A] font-bold">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Comment pouvons-nous vous aider ?" 
                              className="bg-[#F5F2EE] border-[#E0DDD8] focus-visible:ring-[#8B2346] min-h-[150px] resize-y" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full md:w-auto bg-[#0A0A0A] text-white hover:bg-[#8B2346] hover:text-[#0A0A0A] px-8 py-6 rounded-full font-bold text-base transition-colors">
                      Envoyer le message
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Info Column */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-[#0A0A0A] text-white rounded-2xl p-8 border border-[#2A2A2A]">
                  <h3 className="font-bold text-xl mb-6">Campus Paris</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-[#8B2346] shrink-0 mt-1" />
                      <div>
                        <div className="font-bold mb-1">Adresse</div>
                        <div className="text-[#9E9E9E] leading-relaxed">
                          18 rue du Faubourg du Temple<br />
                          75011 Paris, France
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-[#8B2346] shrink-0 mt-1" />
                      <div>
                        <div className="font-bold mb-1">Email</div>
                        <a href="mailto:admissions@eugeniaschool.com" className="text-[#9E9E9E] hover:text-[#8B2346] transition-colors">
                          admissions@eugeniaschool.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-[#8B2346] shrink-0 mt-1" />
                      <div>
                        <div className="font-bold mb-1">Téléphone</div>
                        <a href="tel:+33123456789" className="text-[#9E9E9E] hover:text-[#8B2346] transition-colors">
                          +33 1 23 45 67 89
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#EDE9E3] rounded-2xl p-8 border border-[#E0DDD8]">
                  <h3 className="font-bold text-[#0A0A0A] mb-2">Visitez le campus</h3>
                  <p className="text-[#5C5C5C] text-sm mb-4">
                    Inscrivez-vous à notre prochaine Journée Portes Ouvertes pour rencontrer l'équipe et visiter les locaux.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white rounded-full font-bold">
                    S'inscrire aux JPO
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
