import { Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-xl rounded-lg gradient-card p-10 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Mail className="h-7 w-7" />
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
            {"// let's connect"}
          </p>

          <h2 className="font-mono text-2xl font-bold tracking-tight sm:text-3xl">
            <span className="text-foreground">Start a </span>
            <span className="text-gradient">project</span>
          </h2>

          <p className="mt-4 font-mono text-sm text-muted-foreground">
            Got an idea? Let's turn it into reality.
          </p>

          <a
            href="mailto:hello@hexadd.com"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gradient-primary px-8 font-mono text-sm font-medium text-primary-foreground transition-all glow-primary hover:glow-intense"
          >
            <Mail className="h-4 w-4" />
            hello@hexadd.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;