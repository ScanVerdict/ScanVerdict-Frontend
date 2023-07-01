import PlotlyChart from "./PlotlyChart";
export default function AlgoPresentation() {
  return (
    <section className="h-screen w-full snap-start bg-gray-50 font-normal pt-24 text-[#1F2933]">
      <div className="grid grid-cols-2">
        <a className="mx-auto block w-full rounded-lg border border-gray-200 bg-white p-6 shadow md:max-w-md">
          <h5 className="transform-3d text-2xl font-bold tracking-tight text-[#1F2933]">
            Our algorithms
          </h5>

          <div className="font-normal text-[#1F2933]">
            <div className="whitespace-pre-line">Sentiment Analysis</div>
            <br />
            Roberta
          </div>
        </a>

        <a className="mx-auto block w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow md:max-w-md">
          <h5 className="transform-3d text-2xl font-bold tracking-tight text-[#1F2933]">
            In comparaison with other companies
          </h5>

          <div className="font-normal text-[#1F2933]">
            <div className="whitespace-pre-line">
              We are a team of 5 students from the EFREI engineering school and
              we offer analysis of all comments from all companies companies in
              order to advise you on the best companies for your your needs.
            </div>
            <br />
            We also offer recommendations to companies to improve the quality of
            your products and services according to customer feedback.
          </div>
        </a>
      </div>
      <PlotlyChart />
    </section>
  );
}
