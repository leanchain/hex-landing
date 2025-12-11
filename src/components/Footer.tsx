import HexLogo from "./HexLogo";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <HexLogo size="sm" />
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hex+ // All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;