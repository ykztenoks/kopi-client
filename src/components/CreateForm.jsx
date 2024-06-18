import { useContext, useState } from "react";
import { CoffeeContext } from "../context/coffee.context";

function CreateForm() {
  const [coffeeInfo, setCoffeeInfo] = useState({
    name: "",
    score: 0,
    roastLevel: "",
    country: "",
    type: "",
    farm: "",
    altitude: 0,
    image: "",
  });
  const { createCoffee } = useContext(CoffeeContext);
  const handleChange = (e) => {
    setCoffeeInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createCoffee(coffeeInfo);
      }}
      className="center flex-col p-8 border-2 border-stone-300 m-10 rounded-lg w-[40vw]"
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={coffeeInfo.name}
      />

      <label htmlFor="score">Score</label>
      <input
        type="number"
        name="score"
        onChange={handleChange}
        value={coffeeInfo.score}
      />

      <label htmlFor="roastLevel">Roast</label>
      <select
        name="roastLevel"
        onChange={handleChange}
        value={coffeeInfo.roastLevel}
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
        value={coffeeInfo.country}
        className="w-44"
      />

      <label htmlFor="type">Type</label>
      <select
        name="type"
        value={coffeeInfo.type}
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
        value={coffeeInfo.farm}
      />

      <label htmlFor="altitude">Altitude</label>
      <input
        type="number"
        name="altitude"
        onChange={handleChange}
        value={coffeeInfo.altitude}
      />

      <label htmlFor="image">Image</label>
      <input
        type="text"
        name="image"
        onChange={handleChange}
        value={coffeeInfo.image}
      />

      <button type="submit" className="btn">
        create
      </button>
    </form>
  );
}

export default CreateForm;
