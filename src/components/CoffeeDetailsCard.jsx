function CoffeeDetailsCard({ coffee }) {
  return (
    <div className="flex flex-col items-center md:flex-row md:max-w-xlbg-white border border-gray-200 rounded-lg shadow dark:bg-stone-700 dark:border-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={coffee.image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {coffee.name}{" "}
          <span className="text-slate-400">
            {coffee.score > 80 ? `${coffee.score} ⭐` : coffee.score}
          </span>
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          roast: {coffee.roastLevel} <br />
          country: {coffee.country} <br />
          type: {coffee.type} <br />
          farm: {coffee.farm ? coffee.farm : "unknown"} <br />
          altitude: {coffee.altitude}m
        </p>
      </div>
    </div>
  );
}

export default CoffeeDetailsCard;
