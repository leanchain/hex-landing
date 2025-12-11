export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      {/* Hex grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-pattern" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M28 0L56 16.6v33.2L28 66.4 0 49.8V16.6L28 0z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-foreground"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        {/* Floating plus symbol */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 animate-float glow-primary animate-pulse-glow">
          <svg
            viewBox="0 0 32 32"
            className="h-12 w-12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 6v20M6 16h20"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="text-primary"
            />
          </svg>
        </div>

        <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl animate-fade-in">
          Build Beyond
          <span className="block text-gradient mt-2">Limits</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Hex+ empowers teams to create exceptional digital experiences. 
          We build modern solutions for forward-thinking companies.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 glow-primary"
          >
            Get in Touch
          </a>
          <a
            href="#about"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-secondary/50 px-8 text-sm font-medium text-foreground transition-all hover:bg-secondary"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 p-1">
          <div className="h-2 w-1.5 mx-auto rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;