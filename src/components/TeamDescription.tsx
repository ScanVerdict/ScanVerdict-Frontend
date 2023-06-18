const imagePath = "https://images.app.goo.gl/xWxHKRpvS6NiuUDW9";

export default function TeamDescription() {
  return (
    <article id="teamdescription">
      <a className="mx-auto mt-6 block max-w-sm md:max-w-3xl p-6 bg-white border border-gray-200 rounded-lg shadow w-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#1F2933] transform-3d">
          ScanVerdict
        </h5>

        <div className="font-normaltext-[#1F2933]">
          <div className="whitespace-pre-line">
            We are a team of 5 students from the EFREI engineering school and we
            offer analysis of all comments from all companies companies in order
            to advise you on the best companies for your your needs.
          </div>
          <br />
          We also offer recommendations to companies to improve the quality of
          your products and services according to customer feedback.
        </div>
      </a>

      <div className="pic-ctn">
        <img src={imagePath} alt="" className="pic" />
        <img src={imagePath} alt="" className="pic" />
        <img src={imagePath} alt="" className="pic" />
        <img src={imagePath} alt="" className="pic" />
        <img src={imagePath} alt="" className="pic" />
      </div>
    </article>
  );
}
