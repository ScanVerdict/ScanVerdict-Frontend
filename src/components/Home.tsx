import ContactDialog from "./ContactDialog";
import TeamDescription from "./TeamDescription";
import SearchSection from "./SearchSection";
import AlgoPresentation from "./MachineModels";
import TestAPICall from "./TestAPICall";

export default function Home() {
  return (
    // snapping
    <main className="snap max-h-screen snap-y snap-mandatory overflow-y-scroll">
      <SearchSection />

      {/* <TestAPICall /> */}
      {/* <ContactDialog /> */}

      <TeamDescription />

      <AlgoPresentation />
    </main>
  );
}
