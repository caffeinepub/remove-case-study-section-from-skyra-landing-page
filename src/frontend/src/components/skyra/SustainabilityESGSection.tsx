import { Leaf, Shield, Target, Award, Recycle } from 'lucide-react';

export default function SustainabilityESGSection() {
  const impacts = [
    {
      icon: Leaf,
      title: 'Preventive environmental design',
      description: 'Address air quality at the source, not after pollution occurs'
    },
    {
      icon: Shield,
      title: 'Reduced maintenance & cleaning',
      description: 'Self-cleaning properties lower long-term operational costs'
    },
    {
      icon: Target,
      title: 'Supports Smart Cities & NCAP goals',
      description: 'Aligns with national and international air quality initiatives'
    },
    {
      icon: Award,
      title: 'Contributes to green building ratings',
      description: 'Enhances LEED, GRIHA, and other sustainability certifications'
    },
    {
      icon: Recycle,
      title: 'Passive, low-resource solution',
      description: 'No energy consumption, no consumables, minimal environmental footprint'
    }
  ];

  return (
    <section id="sustainability" className="py-24 bg-gradient-to-br from-success/10 to-primary/5 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sustainability & ESG Impact
          </h2>
          <p className="text-lg text-muted-foreground">
            Infrastructure that supports environmental, social, and governance objectives
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="skyra-card-hover flex items-start gap-6 p-8"
            >
              <div className="flex-shrink-0 w-14 h-14 skyra-icon-container">
                <impact.icon className="w-7 h-7 text-success" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {impact.title}
                </h3>
                <p className="text-muted-foreground">
                  {impact.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
