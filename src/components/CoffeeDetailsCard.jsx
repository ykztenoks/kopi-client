import { useContext, useState } from "react";
import EditForm from "./EditForm";
import { CoffeeContext } from "../context/coffee.context";
import { AuthContext } from "../context/auth.context";

function CoffeeDetailsCard({ coffee }) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const { deleteCoffee } = useContext(CoffeeContext);
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col items-center   md:flex-row w-[60vw] h-[50vh] bg-white border border-gray-200 rounded-lg shadow dark:bg-stone-700 dark:border-gray-700">
      <img
        className="object-cover rounded-t-lg h-full md:w-[50%]   md:rounded-none md:rounded-s-lg"
        src={coffee.image}
        alt=""
      />
      <div className="flex flex-col p-4 leading-normal ">
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
        {user && user.isAdmin && (
          <>
            {" "}
            <button
              className="btn text-white"
              onClick={() => setToggleEdit(!toggleEdit)}
            >
              edit
            </button>
            <button
              className="btn bg-amber-700"
              onClick={() => deleteCoffee(coffee._id)}
            >
              delete
            </button>
          </>
        )}
      </div>
      {toggleEdit && (
        <EditForm toggleEdit={toggleEdit} setToggleEdit={setToggleEdit} />
      )}
    </div>
  );
}

export default CoffeeDetailsCard;
