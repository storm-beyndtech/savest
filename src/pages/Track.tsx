import Footer from "@/components/Footer";
import Hero3 from "@/components/Hero3";
import Navbar from "@/components/Navbar";
import Tracking from "@/components/Tracking";
import { trackHero } from "@/lib/utils";

export default function Track() {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <Hero3 data={trackHero} isProduct={false} isTracking />
      <Tracking />
      <Footer />
    </div>
  )
}
