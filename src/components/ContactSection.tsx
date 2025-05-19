
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using a no-code email service like FormSubmit
      const response = await fetch("https://formsubmit.co/ajax/treezor.ai@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "Novo contato do site Treezor.ai",
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Entraremos em contato em breve.",
          duration: 5000,
        });
        
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente ou entre em contato por WhatsApp.",
        variant: "destructive",
        duration: 5000,
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-treezor-purple text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quer entender como a IA pode trabalhar por você?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Vamos conversar sobre como podemos automatizar processos e devolver tempo valioso para você e sua equipe.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 text-black">
                <h3 className="text-2xl font-semibold mb-6">Entre em contato</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="input-field resize-none"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                  </button>
                </form>
              </div>
              
              <div className="bg-treezor-purple/10 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Prefere uma conversa direta?</h3>
                <p className="text-gray-600 mb-8">
                  Estamos prontos para conversar sobre suas necessidades específicas e como podemos ajudar a automatizar processos na sua empresa.
                </p>
                
                <a 
                  href="https://wa.me/5531975019782?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20Treezor.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-4 rounded-md hover:bg-green-600 transition-colors shadow-md"
                >
                  <MessageSquare size={24} />
                  <span>Falar com a Treezor agora</span>
                </a>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:treezor.ai@gmail.com" className="hover:text-treezor-purple transition-colors">
                      treezor.ai@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-treezor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span>(31) 97501-9782</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-white/80">
              © {new Date().getFullYear()} Treezor.ai Solutions. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
