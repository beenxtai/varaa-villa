import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Features } from "@/components/Features";
import { Portals } from "@/components/Portals";
import { Rules } from "@/components/Rules";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Features />
        <Portals />
        <Rules />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
