import { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CoffeeContext = createContext();

function CoffeeProvider({ children }) {
  const [coffees, setCoffees] = useState(null);
  const navigate = useNavigate();

  const getAllCoffees = async () => {
    try {
      const response = await api.get("/coffee/all");

      setCoffees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createCoffee = async (body) => {
    try {
      const response = await api.post("/coffee", body);

      if (response.status === 200 || response.status === 201) {
        toast.success(body.name + " created succesfully");

        getAllCoffees();
        navigate("/coffees");
      }
    } catch (error) {
      console.log("error while creating the coffee", error);
    }
  };

  const updateCoffee = async (body, id, toggle) => {
    try {
      const response = await api.put("/coffee/" + id, body);

      if (response.status === 200 || response.status === 201) {
        toast.success(response.data.updated.name + " was updated succesfully");
        getAllCoffees();
        toggle(false);
      }
    } catch (error) {
      toast.error("Error updating this coffee");
      console.log(error);
    }
  };

  const deleteCoffee = async (id) => {
    try {
      const check = confirm("Are you sure you want to delete this coffee?");
      if (check) {
        const response = await api.delete("/coffee/" + id);

        if (response.status === 200) {
          toast.success("Coffee deleted succesfully");
          getAllCoffees();

          navigate(-1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCoffees();
  }, []);
  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        createCoffee,
        updateCoffee,
        deleteCoffee,
        getAllCoffees,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}

export { CoffeeContext, CoffeeProvider };
