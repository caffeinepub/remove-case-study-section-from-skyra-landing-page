import { Layers, Paintbrush, Network } from 'lucide-react';

export default function FutureVisionSection() {
  const visionPoints = [
    {
      icon: Layers,
      title: 'Standard building material',
      description: 'SKYRA becomes the default choice for urban infrastructure projects worldwide'
    },
    {
      icon: Paintbrush,
      title: 'Expandable to paints & coatings',
      description: 'Technology adapted for existing surfaces through photocatalytic coatings'
    },
    {
      icon: Network,
      title: 'Licensable technology',
      description: 'Partnership model enabling global manufacturers to integrate SKYRA technology'
    }
  ];

  return (
    <section className="py-24 skyra-gradient-blue-beige">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Future Vision
          </h2>
          <p className="text-lg text-muted-foreground">
            Scaling clean air infrastructure globally
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="skyra-card-hover p-8"
            >
              <div className="w-16 h-16 skyra-icon-container mb-6">
                <point.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {point.title}
              </h3>
              <p className="text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            SKYRA represents a fundamental shift in how cities approach air quality — 
            from reactive devices to proactive infrastructure. Our vision is to make 
            clean air a built-in feature of every urban environment.
          </p>
        </div>
      </div>
    </section>
  );
}
