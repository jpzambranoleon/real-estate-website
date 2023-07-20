import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import Popular from "../components/Popular";
import Subscribe from "../components/Subscribe";
import Value from "../components/Value";

export default function Home() {
  return (
    <main className="main home">
      <Hero />
      <Logos />
      <Popular />
      <Value />
      <Contact />
      <Subscribe />
      <Footer />
    </main>
  );
}
