import CollectionForm from "@/components/CollectionForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-premium-dark flex items-center justify-center p-4 md:p-8">
      {/* Ambient glow effect */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, hsla(43, 74%, 49%, 0.05) 0%, transparent 60%)',
        }}
      />
      
      {/* Main Content */}
      <main className="relative z-10 w-full">
        <CollectionForm />
      </main>
    </div>
  );
};

export default Index;
