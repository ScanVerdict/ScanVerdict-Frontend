import imagePath2 from "../../assets/julie.png";
import imagePath3 from "../../assets/victor.png";
import imagePath4 from "../../assets/jacques.png";
import imagePath5 from "../../assets/emerick.png";
import imagePath6 from "../../assets/benjamin.png";
export default function TeamDescription() {
  return (
    <section
      className="h-screen w-full snap-start bg-gray-100 pt-20"
      id="teamdescription"
    >
      <a className="m-10 mx-auto mt-6 block w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow md:max-w-3xl">
        <h5 className="text-2xl font-bold tracking-tight text-[#1F2933]">
          ScanVerdict
        </h5>
        <br />
        <div className="font-normal text-[#1F2933]">
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

      <div className="column tout relative m-10">
        <div className="case absolute bottom-0 left-0">
          <div className="mx-auto max-w-sm rounded lg:flex">
            <div className="h-48 flex-none overflow-hidden rounded bg-cover text-center lg:h-auto lg:w-48 lg:rounded-r-none">
              <img src={imagePath2} alt="" className="" />
            </div>

            <div className="mx-auto flex flex-col justify-between rounded-b border-x border-b border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
              <div className="mb-8">
                <div className="mb-2 text-xl font-bold text-gray-900">
                  Julie Chen
                </div>
                <p className="text-base text-gray-700">
                  I am in the front team.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="case absolute bottom-0 left-0">
          <div className="mx-auto max-w-sm rounded lg:flex">
            <div className="h-48 flex-none overflow-hidden rounded bg-cover text-center lg:h-auto lg:w-48 lg:rounded-r-none">
              <img src={imagePath6} alt="" className="" />
            </div>

            <div className="mx-auto flex flex-col justify-between rounded-b border-x border-b border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
              <div className="mb-8">
                <div className="mb-2 text-xl font-bold text-gray-900">
                  Benjamin Rossignol
                </div>
                <p className="text-base text-gray-700">
                  I am in the front team.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="case absolute bottom-0 left-0">
          <div className="mx-auto max-w-sm rounded lg:flex">
            <div className="h-48 flex-none overflow-hidden rounded bg-cover text-center lg:h-auto lg:w-48 lg:rounded-r-none">
              <img src={imagePath4} alt="" className="" />
            </div>

            <div className="mx-auto flex flex-col justify-between rounded-b border-x border-b border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
              <div className="mb-8">
                <div className="mb-2 text-xl font-bold text-gray-900">
                  Jacques Zhang
                </div>
                <p className="text-base text-gray-700">
                  I am in the back team.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="case absolute bottom-0 left-0">
          <div className="mx-auto max-w-sm rounded lg:flex">
            <div className="h-48 flex-none overflow-hidden rounded bg-cover text-center lg:h-auto lg:w-48 lg:rounded-r-none">
              <img src={imagePath5} alt="" className="" />
            </div>

            <div className="mx-auto flex flex-col justify-between rounded-b border-x border-b border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
              <div className="mb-8">
                <div className="mb-2 text-xl font-bold text-gray-900">
                  Emerick Szönyi
                </div>
                <p className="text-base text-gray-700">
                  I am in the back team.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="case absolute bottom-0 left-0">
          <div className="mx-auto max-w-sm rounded lg:flex">
            <div className="h-48 flex-none overflow-hidden rounded bg-cover text-center lg:h-auto lg:w-48 lg:rounded-r-none">
              <img src={imagePath3} alt="" className="" />
            </div>

            <div className="mx-auto flex flex-col justify-between rounded-b border-x border-b border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
              <div className="mb-8">
                <div className="mb-2 text-xl font-bold text-gray-900">
                  Victor Robic
                </div>
                <p className="text-base text-gray-700">
                  I am in the back team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
