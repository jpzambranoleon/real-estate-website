import Hero from "../components/Hero";
import Logos from "../components/Logos";
import Popular from "../components/Popular";
import Value from "../components/Value";

export default function Home() {
  return (
    <main className="main home">
      <Hero />
      <Logos />
      <Popular />
      <Value />
    </main>
  );
}
