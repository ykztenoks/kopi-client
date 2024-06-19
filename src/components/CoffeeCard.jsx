import { Link } from "react-router-dom";

function CoffeeCard({
  name,
  score,
  roastLevel,
  country,
  type,
  farm,
  altitude,
  image,
  _id,
}) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-stone-700 dark:border-gray-700 ">
      <img
        className="rounded-t-lg h-[40vh] w-[40vw] object-cover hover:scale-105 transition-all"
        src={image}
        alt=""
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}{" "}
          <span className="text-slate-400">
            {score > 80 ? `${score} ⭐` : score < 60 ? `${score} 🤢` : score}
          </span>
        </h5>

        <Link
          to={`/coffees/${_id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-amber-100 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amber-100 dark:hover:bg-amber-200 dark:focus:ring-amber-300 transition-all"
        >
          See details
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default CoffeeCard;
