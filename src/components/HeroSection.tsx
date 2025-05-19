
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen pt-24 flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-treezor-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-treezor-purple/5 rounded-full filter blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAtNmgtMlYwaDJ2NHptLTYgMjJoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAtNmgtMlYwaDJ2NHptLTYgMjJoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAtNmgtMlYwaDJ2NHptLTYgMjJoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAtNmgtMlYwaDJ2NHptLTYgMjJoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAtNmgtMlYwaDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Seu tempo é precioso.</span>
            <span className="gradient-text">A gente automatiza o resto.</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-xl">
            Soluções de automação inteligente sob medida para sua empresa ganhar 
            tempo, aumentar vendas e reduzir processos manuais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary">
              Vamos conversar
            </a>
            <a href="#problems" className="btn-outline">
              Conhecer soluções
            </a>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center relative">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-treezor-purple/20 rounded-2xl blur-3xl transform -rotate-6"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden animate-float">
              <div className="bg-gradient-to-br from-treezor-purple to-treezor-purple/80 p-6">
                <div className="h-6 w-24 bg-white/20 rounded-full mb-4"></div>
                <div className="h-8 w-48 bg-white/30 rounded-full"></div>
              </div>
              <div className="p-6 space-y-4">
                <div className="h-6 w-3/4 bg-gray-200 rounded-full"></div>
                <div className="h-6 w-1/2 bg-gray-200 rounded-full"></div>
                <div className="h-6 w-5/6 bg-gray-200 rounded-full"></div>
                <div className="flex space-x-4 mt-8">
                  <div className="h-10 w-20 bg-treezor-purple/10 rounded-md"></div>
                  <div className="h-10 w-20 bg-treezor-purple rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-treezor-purple opacity-80 hover:opacity-100 transition-opacity">
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
