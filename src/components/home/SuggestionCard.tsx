import { StarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState } from "react";

// This type is used to type the props of the SuggestionCard component
interface Company {
  place_id: string;
  name: string;
  formatted_address: string;
  rating: number;
  user_ratings_total: number;
}

export default function SuggestionCard({
  place_id,
  formatted_address,
  name,
  rating,
  user_ratings_total,
}: Company) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="">
      {loading && <div className="lds-dual-ring absolute -left-24" />}
      <Link
        onClick={() => setLoading(true)}
        to={`/analysepage/${place_id}`}
        className="my-2 flex h-16 w-64 flex-col place-content-around rounded-lg border-2 border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 transition duration-100 hover:border-gray-500 focus:border-gray-500 focus:outline-none sm:w-72"
      >
        <div className="flex w-full flex-row justify-between">
          <h4 className="w-4/5 truncate text-left">{name}</h4>

          <h4 className="text-right">{rating}/5</h4>

          <StarIcon
            fill="true"
            className="h-5 w-5 border-none fill-amber-400 text-amber-400"
          />
        </div>

        <div className="flex w-full flex-row justify-between">
          <h4 className="w-4/5 truncate font-light">{formatted_address}</h4>

          <h4 className="text-right">{user_ratings_total}</h4>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 fill-blue-500 text-left"
          >
            <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
          </svg>
        </div>
      </Link>
      {/* </button> */}
    </div>
  );
}
