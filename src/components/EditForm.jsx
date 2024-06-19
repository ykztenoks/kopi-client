import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../context/coffee.context";
import { useParams } from "react-router-dom";

function EditForm({ toggleEdit, setToggleEdit }) {
  const [currCoffee, setCurrCoffee] = useState(null);
  const { coffeeId } = useParams();
  const { coffees, updateCoffee } = useContext(CoffeeContext);

  const handleChange = (e) => {
    setCurrCoffee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    coffees && setCurrCoffee(coffees.find((coffee) => coffee._id === coffeeId));
  }, [toggleEdit]);

  return (
    currCoffee && (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateCoffee(currCoffee, coffeeId, setToggleEdit);
        }}
        className="center flex-col border-2 border-stone-300  rounded-lg w-[40vw] h-full"
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={currCoffee.name}
        />

        <label htmlFor="score">Score</label>
        <input
          type="number"
          name="score"
          onChange={handleChange}
          value={currCoffee.score}
        />

        <label htmlFor="roastLevel">Roast</label>
        <select
          name="roastLevel"
          onChange={handleChange}
          value={currCoffee.roastLevel}
          className="w-48"
        >
          <option value="light roast">Light Roast</option>
          <option value="medium light roast">Medium Light Roast</option>
          <option value="medium roast">Medium Roast</option>
          <option value="medium dark roast">Medium Dark Roast</option>
          <option value="dark roast">Dark Roast</option>
          <option value="undrinkable">Undrinkable</option>
        </select>

        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          onChange={handleChange}
          value={currCoffee.country}
          className="w-44"
        />

        <label htmlFor="type">Type</label>
        <select
          name="type"
          value={currCoffee.type}
          className="w-44"
          onChange={handleChange}
        >
          <option defaultValue hidden></option>
          <option value="arabica">Arábica</option>
          <option value="robusta">Robusta</option>
          <option value="excelsa">Excelsa</option>
          <option value="liberica">Liberica</option>
        </select>

        <label htmlFor="farm">Farm</label>
        <input
          type="text"
          name="farm"
          onChange={handleChange}
          value={currCoffee.farm}
        />

        <label htmlFor="altitude">Altitude</label>
        <input
          type="number"
          name="altitude"
          onChange={handleChange}
          value={currCoffee.altitude}
        />

        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={currCoffee.image}
        />

        <button type="submit" className="btn">
          edit
        </button>
      </form>
    )
  );
}

export default EditForm;
