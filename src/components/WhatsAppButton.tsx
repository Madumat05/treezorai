
import { WhatsApp } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5511999999999"; // Replace with your actual WhatsApp number
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre as soluções da Treezor.ai");
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
      aria-label="Contact via WhatsApp"
    >
      <WhatsApp size={24} />
    </a>
  );
};

export default WhatsAppButton;
