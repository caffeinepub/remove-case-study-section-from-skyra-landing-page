export default function ProductsSection() {
  const products = [
    {
      title: 'Skyra for Roads',
      description: 'Photocatalytic tiles designed for high-traffic roadways and highways, continuously purifying air where vehicle emissions are highest.',
      variants: [
        { name: 'Highway Grade', desc: 'Heavy-duty tiles for expressways and major arterial roads' },
        { name: 'Urban Street', desc: 'Standard tiles for city streets and residential roads' },
        { name: 'Parking Surface', desc: 'Specialized tiles for parking lots and garages' }
      ]
    },
    {
      title: 'Skyra for Transit',
      description: 'Specialized solutions for metro stations, bus stops, and railway platforms—bringing clean air to the spaces where people wait and commute.',
      variants: [
        { name: 'Metro Station', desc: 'Platform and concourse tiles for underground and elevated stations' },
        { name: 'Bus Shelter', desc: 'Compact tiles for bus stops and waiting areas' },
        { name: 'Railway Platform', desc: 'Durable tiles for train platforms and walkways' }
      ]
    },
    {
      title: 'Skyra for Buildings',
      description: 'Architectural-grade tiles for facades, walls, and public building surfaces, integrating air purification into the built environment.',
      variants: [
        { name: 'Facade Panel', desc: 'Large-format tiles for building exteriors and curtain walls' },
        { name: 'Interior Wall', desc: 'Indoor tiles for lobbies, corridors, and public spaces' },
        { name: 'Decorative Finish', desc: 'Aesthetic tiles for feature walls and architectural accents' }
      ]
    }
  ];

  return (
    <section id="products" className="py-24 skyra-gradient-beige-blue scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Products
          </h2>
          <p className="text-lg text-muted-foreground">
            Application-based solutions for every urban environment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="group skyra-card-hover p-8"
            >
              <div className="mb-6">
                <div className="w-14 h-14 skyra-icon-container">
                  <div className="w-7 h-7 rounded-full bg-primary"></div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {product.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>
              
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">
                  Available Variants
                </div>
                {product.variants.map((variant, vIndex) => (
                  <div key={vIndex} className="group/variant">
                    <div className="text-sm font-medium text-foreground group-hover/variant:text-primary transition-colors">
                      {variant.name}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {variant.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
