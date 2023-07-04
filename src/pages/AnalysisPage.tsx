import Plot from "react-plotly.js";
import { useLoaderData } from "react-router-dom";
import ContactDialog from "../components/analysis/ContactDialog";

export default function AnalysisPage() {
  const plots: any = useLoaderData();

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="my-32 text-4xl font-bold text-black">Analysis</h1>

      {plots.map((plot: any) => {
        return <Plot data={plot.data} layout={plot.layout} />;
      })}

      <div className="my-32 text-2xl">
        The plots are not clear for you?
        <ContactDialog />
      </div>
    </main>
  );
}
