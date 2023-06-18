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
    `/api/json?query=${newCompany}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
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
    <article id="search" className="h-screen bg-slate-600 text-white">
      <h1 className="text-5xl text-center mt-36 mb-20 mx-1">
        Search your company, we give you our analysis
      </h1>

      {/* input field with a magnifying glass on left */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <label
            htmlFor="search-input"
            className="absolute top-0 left-5 mt-5 mr-5 bg-white text-gray-400 cursor-pointer hover:text-blue-500 transition"
          >
            <svg
              className="w-6 h-6 "
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
            className="w-64 sm:w-72 h-16 px-8 pl-14 text-xl text-gray-700 bg-white border-2 border-gray-300 rounded-lg appearance-none transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
    </article>
  );
}
