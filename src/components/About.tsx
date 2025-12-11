import { Terminal, Cpu, Zap } from "lucide-react";

const features = [
  {
    icon: Terminal,
    title: "clean_code",
    description: "We write maintainable, scalable code that your team will actually enjoy working with.",
  },
  {
    icon: Cpu,
    title: "high_performance",
    description: "Optimized for speed. Every millisecond counts when building products that matter.",
  },
  {
    icon: Zap,
    title: "rapid_delivery",
    description: "From concept to production fast. We ship quality without compromise.",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
            {"// what we do"}
          </p>
          <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-foreground">Why </span>
            <span className="text-gradient">Hex+</span>
            <span className="text-foreground">?</span>
          </h2>
          <p className="mt-6 font-mono text-sm text-muted-foreground leading-relaxed">
            We're developers who understand that great products 
            come from great code. No bloat, no shortcuts.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-lg gradient-card p-8 transition-all hover:glow-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-mono text-lg font-bold">
                <span className="text-primary/70">.</span>
                {feature.title}
                <span className="text-primary/70">()</span>
              </h3>
              <p className="mt-3 font-mono text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;