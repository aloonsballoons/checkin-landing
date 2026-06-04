import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WhatItsFor } from "@/components/WhatItsFor";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyDifferent } from "@/components/WhyDifferent";
import { Trust } from "@/components/Trust";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatItsFor />
        <HowItWorks />
        <WhyDifferent />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
