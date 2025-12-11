import { Zap, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "We deliver solutions at speed without compromising on quality or attention to detail.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Robust architecture and clean code that scales with your business needs.",
  },
  {
    icon: Sparkles,
    title: "Innovation First",
    description: "Cutting-edge technologies and modern approaches to solve complex challenges.",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why <span className="text-gradient">Hex+</span>?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We combine technical excellence with creative thinking to build 
            digital products that make an impact.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border/50 gradient-card p-8 transition-all hover:border-primary/30 hover:glow-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;