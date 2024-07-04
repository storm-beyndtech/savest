import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero3 from "@/components/Hero3";
import Navbar from "@/components/Navbar";
import LiquiditySlides from "@/components/liquiditySlides/LiquiditySlides";
import { hoursHero } from "@/lib/utils";

export default function Hours() {
  return (
    <>
      <Navbar />  
      <Hero3 data={hoursHero} isProduct={false}/>
      <LiquiditySlides />
      <FAQ />
      <Footer />
    </>
  )
}
