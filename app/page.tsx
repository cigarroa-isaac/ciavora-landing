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
      <Nav />
      <Hero />
      <ValueProposition />
      <Differentiator />
      <Speed />
      <Industries />
      <Process />
      <Tech />
      <CtaFinal />
      <Footer />
    </main>
  );
}
