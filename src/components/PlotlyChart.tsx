import Plot from "react-plotly.js";
import plot from "./output.json";

import { useEffect, useState } from "react";

const data: Plotly.Data[] = plot.data.map((d) => ({
  ...d,
  type: "pie",
}));

export default function PlotlyChart() {
  return (
    <Plot
      data={data}
      layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
    />
  );
}
