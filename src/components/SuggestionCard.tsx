// This type is used to type the props of the SuggestionCard component
interface Company {
  name: string;
  formatted_address: string;
  rating: number;
  user_ratings_total: number;
}

export default function SuggestionCard({
  formatted_address,
  name,
  rating,
  user_ratings_total,
}: Company) {
  return (
    <button className="text-left flex flex-col w-64 sm:w-72 h-16 px-2 py-1 my-2 items-center text-gray-700 border-2 bg-white border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500 focus:outline-none transition duration-100">
      <div className="w-full flex  content-end items-end truncate">
        <h1 className="text-md flex w-5/6 truncate">{name}</h1>

        <h1 className="text-sm tight-snug">{rating}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 -780 700 960"
          width="20"
          className="fill-amber-400 justify-self-end"
        >
          <path d="M480-229 294-117q-8 5-17 4.5t-16-5.5q-7-5-10.5-13t-1.5-18l49-212-164-143q-8-7-9.5-15.5t.5-16.5q2-8 9-13.5t17-6.5l217-19 84-200q4-9 12-13.5t16-4.5q8 0 16 4.5t12 13.5l84 200 217 19q10 1 17 6.5t9 13.5q2 8 .5 16.5T826-504L662-361l49 212q2 10-1.5 18T699-118q-7 5-16 5.5t-17-4.5L480-229Z" />
        </svg>
      </div>

      <div className="w-full flex flex-row truncate">
        <h2 className="text-sm font-thin truncate">{formatted_address}</h2>
        <h2 className="text-sm tight-snug">{user_ratings_total} </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 -890 700 960"
          width="20"
          className="fill-blue-500 justify-self-end"
        >
          <path d="M68-160q-13 0-21.5-8.5T38-190v-64q0-35 18-63.5t50-42.5q73-32 131.5-46T358-420q62 0 120 14t131 46q32 14 50.5 42.5T678-254v64q0 13-8.5 21.5T648-160H68Zm648 0q10-2 16-10.5t6-21.5v-62q0-63-32-103.5T622-423q69 8 130 23.5t99 35.5q33 19 52 47t19 63v64q0 13-8.5 21.5T892-160H716ZM358-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519-488q24-25 36.5-61.5T568-631q0-45-12.5-79.5T519-774q11-3 24.5-5t24.5-2q66 0 108 42t42 108Z" />
        </svg>
      </div>
    </button>
  );
}
