import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="center flex-col gap-6">
      <h1 className="text-3xl">Welcome to kopi</h1>
      <p>where you can review our exquisite collection of coffees.</p>

      <div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-stone-700 dark:border-gray-700">
          <img
            className="rounded-t-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Roasted_coffee_beans.jpg"
            alt=""
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Check out our hand picked coffee selection
            </h5>

            <Link
              to="/coffees"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-amber-100 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amber-100 dark:hover:bg-amber-200 dark:focus:ring-amber-300 transition-all"
            >
              See list
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
      </div>
    </div>
  );
}

export default Homepage;
