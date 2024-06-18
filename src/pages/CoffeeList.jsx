import { useContext } from "react";
import { CoffeeContext } from "../context/coffee.context";
import CoffeeCard from "../components/CoffeeCard";

function CoffeeList() {
  const { coffees } = useContext(CoffeeContext);

  return (
    <div className="center gap-4 m-6">
      {coffees ? (
        coffees.map((coffee) => <CoffeeCard {...coffee} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CoffeeList;
