import DarkSection2 from "@/components/DarkSection2";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FreightProcess from "@/components/FreightProcess";
import Hero4 from "@/components/Hero4";
import LightSectionV2 from "@/components/LightSectionV2";
import MeetTheTeam from "@/components/MeetTheTeam";
import Navbar from "@/components/Navbar";
import LiquiditySlides from "@/components/liquiditySlides/LiquiditySlides";
import { ShipSec1 } from "@/lib/utils";

export default function Ship() {
  return (
    <>
      <Navbar />
      <Hero4 />
      <DarkSection2 />
      <FreightProcess />
      <LightSectionV2 secData={ShipSec1} />
      <LiquiditySlides />
      <MeetTheTeam />
      <FAQ />
      <Footer />
    </>
  )
};