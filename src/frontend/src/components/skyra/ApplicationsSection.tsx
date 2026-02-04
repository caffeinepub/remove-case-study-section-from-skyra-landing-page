export default function ApplicationsSection() {
  const applications = [
    {
      title: 'Footpaths & Sidewalks',
      description: 'High-traffic pedestrian areas benefit from continuous air purification',
      image: '/assets/generated/skyra-application-footpath.dim_1400x900.png'
    },
    {
      title: 'Bus Stops',
      description: 'Transit waiting areas where people spend time in concentrated spaces',
      image: '/assets/generated/skyra-application-bus-stop.dim_1400x900.png'
    },
    {
      title: 'Metro & Railway Stations',
      description: 'Large-scale deployment in underground and elevated transit infrastructure',
      image: '/assets/generated/skyra-application-metro-outdoor.dim_1400x900.png'
    },
    {
      title: 'Public Buildings',
      description: 'Government offices, libraries, and community centers',
      image: '/assets/generated/skyra-application-public-buildings.dim_1400x900.png'
    },
    {
      title: 'Walls & Facades',
      description: 'Vertical surfaces that maximize exposure to light and air flow',
      image: '/assets/generated/skyra-application-walls-facades.dim_1400x900.png'
    },
    {
      title: 'Urban Furniture',
      description: 'Benches, planters, and street fixtures integrated into city design',
      image: '/assets/generated/skyra-application-urban-furniture.dim_1400x900.png'
    }
  ];

  return (
    <section id="applications" className="py-24 bg-card scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Applications
          </h2>
          <p className="text-lg text-muted-foreground">
            Versatile integration across urban infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {applications.map((app, index) => (
            <div
              key={index}
              className="group skyra-card-hover overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {app.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
