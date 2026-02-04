import { Building, Clock, Zap, Wrench, TrendingUp, Globe } from 'lucide-react';

export default function WhySkyraSection() {
  const benefits = [
    {
      icon: Building,
      title: 'Built into infrastructure',
      description: 'Integrated during construction, not retrofitted'
    },
    {
      icon: Clock,
      title: 'Works continuously',
      description: '24/7 air purification with no downtime'
    },
    {
      icon: Zap,
      title: 'No power, no filters',
      description: 'Zero operational energy requirements'
    },
    {
      icon: Wrench,
      title: 'One-time installation',
      description: 'Long-lasting solution with minimal intervention'
    },
    {
      icon: TrendingUp,
      title: 'Low maintenance',
      description: 'Self-cleaning properties reduce upkeep costs'
    },
    {
      icon: Globe,
      title: 'Scalable across cities',
      description: 'Deployable in any urban environment'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-success/5 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Skyra?
          </h2>
          <p className="text-lg text-muted-foreground">
            Infrastructure-grade air quality improvement
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl hover:bg-card/50 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 skyra-icon-container">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
