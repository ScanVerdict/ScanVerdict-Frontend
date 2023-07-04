import TeamDescription from "../components/home/TeamDescription";
import SearchSection from "../components/home/SearchSection";
import AlgoPresentation from "../components/home/AlgoPresentation";

export default function Home() {
  return (
    // snapping
    <main className="snap max-h-screen snap-y snap-mandatory overflow-y-scroll">
      <SearchSection />

      <TeamDescription />

      <AlgoPresentation />
    </main>
  );
}
