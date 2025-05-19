import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const menuItems = [{
    name: "Início",
    href: "#hero"
  }, {
    name: "Sobre",
    href: "#about"
  }, {
    name: "Problemas",
    href: "#problems"
  }, {
    name: "Soluções",
    href: "#solutions"
  }, {
    name: "Diferenciais",
    href: "#value"
  }, {
    name: "Contato",
    href: "#contact"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto flex justify-between items-center py-0 px-[19px]">
        <div className="flex items-center mx-0 my-[9px]">
          <a href="#" className="flex items-center my-[5px] py-0 mx-0 px-0">
            <img src="/lovable-uploads/1c8d0a11-c7c5-4c57-8e17-dcff39531b90.png" alt="Treezor.ai Logo" className="h-12 md:h-14" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map(item => <a key={item.name} href={item.href} className="text-gray-800 hover:text-treezor-purple transition-colors">
              {item.name}
            </a>)}
          
        </nav>

        {/* Mobile menu button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-gray-800" aria-label="Toggle menu">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
          <button onClick={closeMobileMenu} className="absolute top-4 right-4 text-gray-800">
            ✕
          </button>
          
          <div className="mb-6">
            <img src="/lovable-uploads/1c8d0a11-c7c5-4c57-8e17-dcff39531b90.png" alt="Treezor.ai Logo" className="h-14" />
          </div>
          
          {menuItems.map(item => <a key={item.name} href={item.href} className="text-xl text-gray-800 hover:text-treezor-purple transition-colors" onClick={closeMobileMenu}>
              {item.name}
            </a>)}
          
          <a href="#contact" className="bg-treezor-purple text-white px-6 py-3 rounded-md text-lg transition-all hover:bg-treezor-purple/90 shadow-md flex items-center gap-2" onClick={closeMobileMenu}>
            <img src="/lovable-uploads/af6057ea-e2de-4de5-b6b0-bfe2408786bd.png" alt="Treezor Icon" className="h-6 w-6" />
            Vamos conversar
          </a>
        </div>
      </div>
    </header>;
};
export default Header;