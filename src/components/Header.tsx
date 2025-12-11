import HexLogo from "./HexLogo";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <HexLogo size="sm" />
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            /about
          </a>
          <a
            href="#contact"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            /contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;