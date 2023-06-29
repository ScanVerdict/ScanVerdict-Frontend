import { useEffect, useState } from "react";
import SuggestionCard from "./SuggestionCard";
import { useDebounce } from "usehooks-ts";

interface Company {
  name: string;
  formatted_address: string;
  rating: number;
  user_ratings_total: number;
}

// fetching company data from google api
async function get3Companies(newCompany: string): Promise<Array<Company>> {
  const response = await fetch(
    `/gmaps_api/json?query=${newCompany}&key=${
      import.meta.env.VITE_GOOGLE_API_KEY
    }`
  );
  const resonseJson = await response.json();

  // if the request is ok, we can get the first 3 startups
  if (resonseJson.status === "OK") {
    const companiesData: Array<Company> = resonseJson.results.slice(0, 3);
    return companiesData;
  }

  // if the request is not ok, we return an empty array
  return [];
}

export default function SearchSection() {
  const [company, setCompany] = useState<string>("");
  const [fetchedCompanies, setFetchedCompanies] = useState<Array<Company>>([]);

  // to not fetch data on every keystroke, we use a debounce hook
  const debouncedValue = useDebounce<string>(company);

  // React.ChangeEvent<HTML...> means that the event is a change event on an HTML input element
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.value);
  };

  useEffect(() => {
    get3Companies(debouncedValue).then((companiesData) => {
      setFetchedCompanies(companiesData);
    });
  }, [debouncedValue]);

  return (
    <section
      id="search"
      className="h-screen w-full snap-start bg-gray-100 pt-44 text-black"
    >
      <h1 className="mx-1 mb-20 text-center text-5xl">
        Search your company, we give you our analysis.
      </h1>

      {/* input field with a magnifying glass on left */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <label
            htmlFor="search-input"
            className="absolute left-5 top-0 mr-5 mt-5 cursor-pointer bg-white text-gray-400 transition hover:text-blue-500"
          >
            <svg
              className="h-6 w-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </label>
          <input
            type="text"
            className="h-16 w-64 appearance-none rounded-lg border-2 border-gray-300 bg-white px-8 pl-14 text-xl text-gray-700 transition duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-72"
            placeholder="Enter company"
            defaultValue={company}
            onChange={handleChange}
            id="search-input"
          />

          {fetchedCompanies.map((companyData, index) => (
            <SuggestionCard
              key={index}
              name={companyData.name}
              formatted_address={companyData.formatted_address}
              rating={companyData.rating}
              user_ratings_total={companyData.user_ratings_total}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
