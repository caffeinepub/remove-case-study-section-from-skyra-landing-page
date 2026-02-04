import { useState } from 'react';
import { Info, Wind, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AQIScienceExplainerSection() {
  const [aqiValue, setAqiValue] = useState([50]);

  const getAQICategory = (value: number) => {
    if (value <= 50) return { label: 'Good', color: 'text-green-600', bg: 'bg-green-50', icon: CheckCircle2 };
    if (value <= 100) return { label: 'Moderate', color: 'text-yellow-600', bg: 'bg-yellow-50', icon: Info };
    if (value <= 150) return { label: 'Unhealthy for Sensitive Groups', color: 'text-orange-600', bg: 'bg-orange-50', icon: AlertTriangle };
    if (value <= 200) return { label: 'Unhealthy', color: 'text-red-600', bg: 'bg-red-50', icon: AlertTriangle };
    if (value <= 300) return { label: 'Very Unhealthy', color: 'text-purple-600', bg: 'bg-purple-50', icon: AlertTriangle };
    return { label: 'Hazardous', color: 'text-red-900', bg: 'bg-red-100', icon: AlertTriangle };
  };

  const getHealthGuidance = (value: number) => {
    if (value <= 50) return 'Air quality is satisfactory. Outdoor activities are safe for everyone.';
    if (value <= 100) return 'Air quality is acceptable. Unusually sensitive people should consider limiting prolonged outdoor exertion.';
    if (value <= 150) return 'Members of sensitive groups may experience health effects. The general public is less likely to be affected.';
    if (value <= 200) return 'Some members of the general public may experience health effects. Sensitive groups should avoid prolonged outdoor exertion.';
    if (value <= 300) return 'Health alert: The risk of health effects is increased for everyone. Avoid prolonged outdoor activities.';
    return 'Health warning: Everyone should avoid all outdoor exertion. Stay indoors and keep activity levels low.';
  };

  const category = getAQICategory(aqiValue[0]);
  const Icon = category.icon;

  return (
    <section id="aqi-science" className="py-24 bg-card scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Understanding Air Quality
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The Air Quality Index (AQI) measures how polluted the air is. Skyra tiles use photocatalysis—a natural process activated by light—to break down harmful pollutants and improve the air we breathe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="border-primary/20 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Wind className="w-6 h-6" />
                  What is AQI?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The Air Quality Index is a standardized indicator that tells you how clean or polluted your air is, and what associated health effects might be a concern.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-muted-foreground">0-50: Good</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span className="text-muted-foreground">51-100: Moderate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <span className="text-muted-foreground">101-150: Unhealthy for Sensitive Groups</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-muted-foreground">151-200: Unhealthy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-muted-foreground">201-300: Very Unhealthy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-900"></div>
                    <span className="text-muted-foreground">301+: Hazardous</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-success/20 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-success">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-success"></div>
                  The Science Behind Skyra
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Skyra tiles are coated with titanium dioxide (TiO₂), a photocatalyst that breaks down air pollutants when exposed to light—similar to how plants use sunlight for photosynthesis.
                </p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Light activates the TiO₂ coating</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Pollutants (NOₓ, VOCs) are broken down into harmless compounds</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Process repeats continuously—no power or maintenance required</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-primary/20 skyra-gradient-beige-blue shadow-soft">
            <CardHeader>
              <CardTitle className="text-center">AQI Calculator</CardTitle>
              <p className="text-center text-sm text-muted-foreground">
                Adjust the slider to see how different AQI levels affect health
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">AQI Value</span>
                  <span className="text-3xl font-bold text-primary">{aqiValue[0]}</span>
                </div>
                <Slider
                  value={aqiValue}
                  onValueChange={setAqiValue}
                  max={350}
                  min={0}
                  step={1}
                  className="w-full"
                />
              </div>

              <div className={`p-6 rounded-xl ${category.bg} border border-current/20`}>
                <div className="flex items-start gap-4">
                  <Icon className={`w-8 h-8 ${category.color} flex-shrink-0`} />
                  <div className="space-y-2">
                    <h3 className={`text-xl font-semibold ${category.color}`}>
                      {category.label}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {getHealthGuidance(aqiValue[0])}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Skyra tiles actively work to reduce pollutants and improve AQI in urban environments
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
