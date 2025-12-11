import GlitchText from "./GlitchText";
import TerminalTyper from "./TerminalTyper";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6 opacity-80">
            {"// code beyond convention"}
          </p>
        </div>

        <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-foreground block mb-2 animate-fade-in">We build</span>
          <GlitchText 
            text="the future" 
            className="text-gradient block animate-fade-in"
          />
        </h1>

        <div className="mx-auto mt-10 max-w-xl font-mono text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <TerminalTyper 
            text="We are a team of passionate builders dedicated to improving e-commerce through innovative solutions."
            delay={1500}
            speed={30}
          />
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#contact"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-gradient-primary px-8 font-mono text-sm font-medium text-primary-foreground transition-all glow-primary hover:glow-intense"
          >
            <span className="relative z-10 flex items-center">
              <span className="mr-2 text-primary-foreground/70">$</span>
              init_project
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
          <a
            href="#about"
            className="inline-flex h-12 items-center justify-center rounded-md border border-primary/30 bg-primary/5 px-8 font-mono text-sm font-medium text-foreground transition-all hover:bg-primary/10 hover:border-primary/50 backdrop-blur-sm"
          >
            <span className="mr-2 text-muted-foreground">#</span>
            learn_more
          </a>
        </div>
      </div>

      {/* Terminal cursor blink */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span>scroll_down</span>
          <span className="animate-pulse">▼</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;