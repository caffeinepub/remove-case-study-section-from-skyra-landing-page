import { MapPin, Target, Hammer, LineChart, CheckCircle, Lightbulb } from 'lucide-react';

export default function CaseStudySection() {
  const caseStudyData = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Urban Transit Hub, Smart City Pilot Zone'
    },
    {
      icon: Target,
      label: 'Objective',
      value: 'Reduce ambient NOx levels in high-traffic pedestrian area'
    },
    {
      icon: Hammer,
      label: 'Installation',
      value: '2,500 sq. meters of SKYRA tiles across platform and walkways'
    },
    {
      icon: LineChart,
      label: 'Measurement Method',
      value: 'Continuous air quality monitoring stations at multiple points'
    },
    {
      icon: CheckCircle,
      label: 'Outcome',
      value: 'Measurable improvement in local air quality index over 6-month period'
    },
    {
      icon: Lightbulb,
      label: 'Why It Matters',
      value: 'Demonstrates scalable infrastructure approach to urban air quality'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Case Study
          </h2>
          <p className="text-lg text-foreground/70">
            Real-world deployment and results
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-skyra-blue/5 to-skyra-beige/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudyData.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <item.icon className="w-6 h-6 text-skyra-blue" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-skyra-green mb-1">
                      {item.label}
                    </div>
                    <div className="text-foreground/80">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
