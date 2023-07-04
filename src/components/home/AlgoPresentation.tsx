import Plot from "react-plotly.js";

export default function AlgoPresentation() {
  // data is a scatter with a line, preferably a more hotizontal one

  const data = [
    {
      x: ["Amazon", "Apple", "Google", "Microsoft", "Facebook"],
      y: [4.2, 4.5, 4.4, 4.3, 4.5],
      type: "scatter",
      mode: "lines+markers",
      marker: { color: "#1F2933" },
    },

    {
      x: ["Amazon", "Apple", "Google", "Microsoft", "Facebook"],
      y: [4.2, 4.5, 4.4, 4.3, 4.5],
      type: "scatter",
      mode: "lines",
      marker: { color: "#1F2933" },
    },
  ] as any;

  const layout = {
    title: "Average rating of the 5 most popular companies",
    height: 300,
    font: {
      family: "Roboto",
      size: 18,
      color: "#1F2933",
    },
    xaxis: {
      tickangle: -45,
    },
    yaxis: {
      range: [0, 5],
    },
    paper_bgcolor: "#F9FAFB",
    plot_bgcolor: "#F9FAFB",
  };

  return (
    <section
      className="h-screen w-full snap-start bg-gray-50 pt-16 font-normal text-[#1F2933]"
      id="algopresentation"
    >
      <div className="grid md:grid-cols-1 lg:grid-cols-2">
        <a className="m-2 mx-auto block w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow md:max-w-md">
          <h5 className="text-2xl font-bold tracking-tight text-[#1F2933]">
            Our algorithms
          </h5>
          <br />
          <div className="font-normal text-[#1F2933]">
            <div className="whitespace-pre-line">
              RoBERTa is an enhanced BERT algorithm for sentiment analysis. It
              undergoes pretraining, where it learns from unlabeled text by
              predicting masked words. Then, in fine-tuning, it uses labeled
              data for sentiment analysis. Through tokenization, embedding,
              self-attention, pooling, and classification, RoBERTa predicts
              sentiment more accurately than traditional models by capturing
              nuanced word relationships.
            </div>
          </div>
        </a>

        <a className="m-2 mx-auto block w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow md:max-w-md">
          <h5 className="text-2xl font-bold tracking-tight text-[#1F2933]">
            In comparaison with other companies
          </h5>
          <br />
          <div className="font-normal text-[#1F2933]">
            <div className="whitespace-pre-line">
              Compared to other companies, our sentiment analysis project stands
              out for its innovative approach and accuracy in analyzing user
              sentiments. We have developed highly performant natural language
              processing models that enable us to provide more reliable and
              meaningful results than most of our competitors. Additionally, our
              system is highly scalable and can be customized to meet the
              specific needs of each client.
            </div>
          </div>
        </a>
      </div>
      {/* center div */}
      <div className="mx-auto mt-6 hidden w-full max-w-sm rounded-lg border border-gray-200 bg-white p-2 shadow md:max-w-3xl md:flex md:items-center md:justify-center">
        <Plot data={data} layout={layout} />
      </div>
    </section>
  );
}
