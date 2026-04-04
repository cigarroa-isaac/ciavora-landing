import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import Differentiator from "@/components/sections/Differentiator";
import Speed from "@/components/sections/Speed";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import Tech from "@/components/sections/Tech";
import CtaFinal from "@/components/sections/CtaFinal";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="grain-global">
      <CustomCursor />
      <Nav />
      <Hero />
      <ValueProposition />
      <div className="max-w-7xl mx-auto h-px bg-white/[0.04]" />
      <Differentiator />
      <div className="max-w-7xl mx-auto h-px bg-white/[0.04]" />
      <Speed />
      <Industries />
      <div className="max-w-7xl mx-auto h-px bg-white/[0.04]" />
      <Process />
      <Tech />
      <div className="max-w-7xl mx-auto h-px bg-white/[0.04]" />
      <CtaFinal />
      <Footer />
    </main>
  );
}
