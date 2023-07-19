import Hero from "../components/Hero";
import Logos from "../components/Logos";
import Popular from "../components/Popular";

export default function Home() {
  return (
    <main className="main home">
      <Hero />
      <Logos />
      <Popular />
    </main>
  );
}
