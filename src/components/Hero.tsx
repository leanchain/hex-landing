export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(270 91% 65% / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(270 91% 65% / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        {/* Hexagon logo */}
        <div className="mx-auto mb-10 flex h-28 w-28 items-center justify-center animate-float">
          <svg
            viewBox="0 0 32 32"
            className="h-full w-full animate-pulse-glow"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: 'drop-shadow(0 0 20px hsl(270 91% 65% / 0.6))' }}
          >
            <defs>
              <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(280 100% 70%)" />
                <stop offset="50%" stopColor="hsl(270 91% 65%)" />
                <stop offset="100%" stopColor="hsl(240 75% 60%)" />
              </linearGradient>
            </defs>
            <path
              d="M16 2L28 9v14l-12 7L4 23V9l12-7z"
              fill="hsl(270 91% 65% / 0.1)"
              stroke="url(#hero-gradient)"
              strokeWidth="1.5"
            />
            <path
              d="M16 10v12M10 16h12"
              stroke="url(#hero-gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="animate-fade-in">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-4">
            // code beyond convention
          </p>
        </div>

        <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in">
          <span className="text-foreground">We build</span>
          <br />
          <span className="text-gradient">the future</span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl font-mono text-base text-muted-foreground animate-slide-up" style={{ animationDelay: "0.2s" }}>
          {">"} Hex+ is a dev-first studio crafting high-performance 
          digital products. We write elegant code that scales.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#contact"
            className="group inline-flex h-12 items-center justify-center rounded-md bg-gradient-primary px-8 font-mono text-sm font-medium text-primary-foreground transition-all glow-primary hover:glow-intense"
          >
            <span className="mr-2 text-primary-foreground/70">$</span>
            init_project
          </a>
          <a
            href="#about"
            className="inline-flex h-12 items-center justify-center rounded-md border border-primary/30 bg-primary/5 px-8 font-mono text-sm font-medium text-foreground transition-all hover:bg-primary/10 hover:border-primary/50"
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
