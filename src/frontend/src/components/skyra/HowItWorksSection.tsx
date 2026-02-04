import { Sun, Zap, Wind, Sparkles } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Sun,
      title: 'Sunlight hits tile surface',
      description: 'Natural or artificial light activates the photocatalytic process'
    },
    {
      icon: Zap,
      title: 'TiO₂ activates',
      description: 'The titanium dioxide coating begins the catalytic reaction'
    },
    {
      icon: Wind,
      title: 'Pollutants break down',
      description: 'NOx, VOCs, and pathogens are neutralized at the molecular level'
    },
    {
      icon: Sparkles,
      title: 'Clean air in the micro-environment',
      description: 'Surrounding air quality improves continuously and passively'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-card scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, continuous process powered by light
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 skyra-icon-container mb-4">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-sm font-bold text-success mb-2">
                  STEP {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="skyra-gradient-beige-blue rounded-3xl p-8 md:p-12 border border-border">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
              Tile System Architecture
            </h3>
            <div className="relative">
              <img
                src="/assets/generated/skyra-tile-exploded-diagram.dim_1600x900.png"
                alt="3D exploded diagram showing SKYRA tile layers: decorative tile, TiO₂ coating, adhesive, membrane, concrete substrate"
                className="w-full h-auto rounded-xl shadow-soft"
              />
              <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                <div className="text-center">
                  <div className="w-4 h-4 rounded-full bg-primary mx-auto mb-2" />
                  <div className="font-medium text-foreground">Decorative Tile</div>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 rounded-full bg-success mx-auto mb-2" />
                  <div className="font-medium text-foreground">TiO₂ Coating</div>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 rounded-full bg-secondary mx-auto mb-2" />
                  <div className="font-medium text-foreground">Adhesive</div>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 rounded-full bg-muted mx-auto mb-2" />
                  <div className="font-medium text-foreground">Membrane</div>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 rounded-full bg-muted-foreground mx-auto mb-2" />
                  <div className="font-medium text-foreground">Concrete Substrate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
