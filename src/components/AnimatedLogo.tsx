import logo from "@/assets/logo.png";

const AnimatedLogo = () => {
  return (
    <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
      {/* Outer rotating ring */}
      <div 
        className="absolute inset-0 rounded-full animate-ring-rotate"
        style={{
          border: '2px solid hsl(43, 74%, 49%)',
          boxShadow: '0 0 30px hsla(43, 74%, 49%, 0.4), inset 0 0 20px hsla(43, 74%, 49%, 0.1)',
        }}
      />
      
      {/* Inner static ring for depth */}
      <div 
        className="absolute inset-2 rounded-full"
        style={{
          border: '1px solid hsla(43, 74%, 49%, 0.3)',
        }}
      />
      
      {/* Logo image - static */}
      <img 
        src={logo} 
        alt="Kingsley Hub Logo" 
        className="w-40 h-40 md:w-48 md:h-48 object-contain relative z-10 rounded-full"
      />
    </div>
  );
};

export default AnimatedLogo;
