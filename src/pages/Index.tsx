import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <CodeRain />
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;