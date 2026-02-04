export default function WhatIsSkyraSection() {
  return (
    <section className="py-24 skyra-gradient-blue-beige">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                What is Skyra?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Skyra transforms everyday architectural surfaces into passive air-purifying systems.
                </p>
                <p>
                  Using photocatalytic Titanium Dioxide (TiO₂) technology, Skyra tiles actively break down air pollutants when exposed to light.
                </p>
                <p className="font-medium text-primary">
                  The technology is integrated into tiles during manufacturing — not added later.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-soft-lg border border-border">
                <img
                  src="/assets/generated/skyra-blue-tile-product.dim_1200x1200.png"
                  alt="SKYRA blue air-purifying tile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-success/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
