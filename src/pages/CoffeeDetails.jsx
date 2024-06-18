import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../context/coffee.context";
import { useParams } from "react-router-dom";
import CoffeeDetailsCard from "../components/CoffeeDetailsCard";

function CoffeeDetails() {
  const [coffee, setCoffee] = useState(null);
  const { coffees } = useContext(CoffeeContext);
  const { coffeeId } = useParams();

  useEffect(() => {
    coffees && setCoffee(coffees.find((curr) => curr._id === coffeeId));
  }, [coffees]);
  return (
    <div className="center flex-col">
      <h2 className="text-3xl font-semibold m-6">CoffeeDetails</h2>
      {coffee ? <CoffeeDetailsCard coffee={coffee} /> : <p>Loading</p>}
    </div>
  );
}

export default CoffeeDetails;
