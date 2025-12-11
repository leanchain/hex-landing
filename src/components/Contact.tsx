import { Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-2xl rounded-3xl border border-border/50 gradient-card p-12 text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Mail className="h-8 w-8" />
          </div>

          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Let's Build Something
            <span className="block text-gradient mt-1">Together</span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Ready to take your project to the next level? Reach out and let's start a conversation.
          </p>

          <a
            href="mailto:hello@hexadd.com"
            className="mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-primary px-10 text-base font-medium text-primary-foreground transition-all hover:opacity-90 glow-primary"
          >
            <Mail className="h-5 w-5" />
            hello@hexadd.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;