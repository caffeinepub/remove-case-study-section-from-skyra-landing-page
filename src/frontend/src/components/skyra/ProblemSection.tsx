import { Eye, AlertTriangle, Building2 } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: Eye,
      title: 'Air pollution is invisible',
      description: 'Most pollutants cannot be seen or smelled until concentrations reach harmful levels'
    },
    {
      icon: AlertTriangle,
      title: 'Damage happens before people feel sick',
      description: 'Long-term exposure affects health silently, making prevention critical'
    },
    {
      icon: Building2,
      title: 'Cities need preventive solutions',
      description: 'Infrastructure-level interventions work continuously, not just when devices are turned on'
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why This Matters
          </h2>
          <p className="text-lg text-muted-foreground">
            Urban air quality challenges require built-in solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-secondary/30 hover:bg-secondary/40 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-6">
                <problem.icon className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
