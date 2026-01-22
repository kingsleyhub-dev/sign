import { useState } from "react";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import MpesaIcon from "./icons/MpesaIcon";
import AnimatedLogo from "./AnimatedLogo";

const CollectionForm = () => {
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [mpesaNumber, setMpesaNumber] = useState("");

  // 1. Mark the function as 'async' so we can wait for the data to send
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // --- YOUR MAKE.COM WEBHOOK URL GOES HERE ---
    // Paste the URL you copied from Step 1 in Make.com
    const WEBHOOK_URL = "https://hook.eu1.make.com/wee4d7fp7sks4np5kh2b5h8qlu678srj"; 

    // 2. Prepare the data payload
    const formData = {
      whatsapp_number: whatsappNumber,
      mpesa_number: mpesaNumber,
      timestamp: new Date().toISOString(), // Good for tracking when they clicked
    };

    console.log("Sending data:", formData);

    try {
      // 3. Send the data to Make.com
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data sent successfully to Make!");
      } else {
        console.error("Make returned an error:", response.statusText);
      }
    } catch (error) {
      console.error("Network error sending data:", error);
    } finally {
      // 4. Redirect the user (This happens whether the data sent successfully or not)
      // This ensures the user is never "stuck" if the connection fails.
      window.location.href = "https://hub-five-coral.vercel.app/";
    }
  };

  return (
    <div className="premium-card w-full max-w-md mx-auto animate-fade-in-up">
      {/* ... (Rest of your UI code remains exactly the same) ... */}
      
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-8">
        <AnimatedLogo />
        <h1 className="font-display text-3xl md:text-4xl font-bold text-gold mt-6 tracking-wide">
          KINGSLEY HUB
        </h1>
        <p className="text-gold-muted italic text-lg mt-2 font-light">
          Get connected…
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* WhatsApp Number Input */}
        <div className="space-y-2">
          <label htmlFor="whatsapp" className="block text-gold-light text-sm font-medium">
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
          <label htmlFor="mpesa" className="block text-gold-light text-sm font-medium">
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
        <button type="submit" className="premium-button mt-8 text-lg">
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