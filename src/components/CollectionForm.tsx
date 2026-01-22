import { useState } from "react";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import MpesaIcon from "./icons/MpesaIcon";
import AnimatedLogo from "./AnimatedLogo";

const CollectionForm = () => {
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [mpesaNumber, setMpesaNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Optional: Log data before redirecting (for debugging)
    console.log("Form submitted:", { whatsappNumber, mpesaNumber });

    // --- REDIRECT LOGIC HERE ---
    window.location.href = "https://hub-five-coral.vercel.app/";
  };

  return (
    <div className="premium-card w-full max-w-md mx-auto animate-fade-in-up">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-8">
        <AnimatedLogo />
        
        {/* Brand Name */}
        <h1 className="font-display text-3xl md:text-4xl font-bold text-gold mt-6 tracking-wide">
          KINGSLEY HUB
        </h1>
        
        {/* Motto */}
        <p className="text-gold-muted italic text-lg mt-2 font-light">
          Get connected…
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* WhatsApp Number Input */}
        <div className="space-y-2">
          <label 
            htmlFor="whatsapp" 
            className="block text-gold-light text-sm font-medium"
          >
            WhatsApp Number
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold">
              <WhatsAppIcon size={20} />
            </div>
            <input
              type="tel"
              id="whatsapp"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              placeholder="Enter your WhatsApp number"
              className="premium-input w-full pl-12"
              required
            />
          </div>
        </div>

        {/* M-Pesa Number Input */}
        <div className="space-y-2">
          <label 
            htmlFor="mpesa" 
            className="block text-gold-light text-sm font-medium"
          >
            M-Pesa Number
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold">
              <MpesaIcon size={20} />
            </div>
            <input
              type="tel"
              id="mpesa"
              value={mpesaNumber}
              onChange={(e) => setMpesaNumber(e.target.value)}
              placeholder="Enter your M-Pesa number"
              className="premium-input w-full pl-12"
              required
            />
          </div>
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className="premium-button mt-8 text-lg"
        >
          Continue
        </button>
      </form>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-gold-dark text-center">
        <p className="text-gold-muted text-sm">
          © 2024 Kingsley Hub. <span className="text-gold cursor-pointer hover:underline">Need help?</span>
        </p>
      </div>
    </div>
  );
};

export default CollectionForm;