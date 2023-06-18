import ContactDialog from "./ContactDialog";
import TeamDescription from "./TeamDescription";
import SearchSection from "./SearchSection";
import MachineModels from "./MachineModels";

export default function Home() {
  return (
    // snapping
    <section>
      <SearchSection />

      <TeamDescription />

      <MachineModels />

      <ContactDialog />
    </section>
  );
}
