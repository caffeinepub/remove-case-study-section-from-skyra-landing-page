export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 skyra-gradient-beige-blue" />
      
      <div className="absolute inset-0 opacity-30">
        <img
          src="/assets/generated/skyra-hero-metro-station.dim_1600x900.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
            What if our cities could clean the air?
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light">
            Clean air, built into everyday surfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="skyra-btn-primary shadow-lg hover:shadow-xl"
            >
              How Skyra Works
            </button>
            <button
              onClick={() => scrollToSection('applications')}
              className="skyra-btn-secondary"
            >
              Applications
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
