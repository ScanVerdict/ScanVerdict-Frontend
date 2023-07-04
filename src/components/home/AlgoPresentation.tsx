export default function AlgoPresentation() {
  return (
    <section
      className="h-screen w-full snap-start bg-gray-50 pt-16 font-normal text-[#1F2933]"
      id="algopresentation"
    >
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <a className="m-5 mx-auto block w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow md:max-w-md">
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

        <a className="m-5 mx-auto block w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow md:max-w-md">
          <h5 className="text-2xl font-bold tracking-tight text-[#1F2933]">
            In comparaison with other companies
          </h5>
          <br />
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
      {/* center div */}
      <div className="m-10 mx-auto mt-6 block w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow md:max-w-3xl">
        {/* <PlotlyChart /> */}
      </div>
    </section>
  );
}
