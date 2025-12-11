import { Terminal, Cpu, Zap } from "lucide-react";

const features = [
  {
    icon: Terminal,
    title: "enduring_solutions",
    description: "We build robust digital platforms designed for stability and future growth.",
  },
  {
    icon: Cpu,
    title: "optimized_outcomes",
    description: "Leverage cutting-edge technology for solutions that deliver measurable results and efficiency.",
  },
  {
    icon: Zap,
    title: "accelerated_innovation",
    description: "From concept to deployment, we rapidly transform ideas into tangible, high-quality digital products.",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
            {"// our philosophy"}
          </p>
          <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-foreground">Why </span>
            <span className="text-gradient">Hex+</span>
            <span className="text-foreground">?</span>
          </h2>
          <p className="mt-6 font-mono text-sm text-muted-foreground leading-relaxed">
            Driven by a passion for excellence, our team delivers robust solutions that stand the test of time.
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