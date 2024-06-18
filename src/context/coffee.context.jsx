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

  useEffect(() => {
    getAllCoffees();
  }, []);

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

  return (
    <CoffeeContext.Provider value={{ coffees, createCoffee }}>
      {children}
    </CoffeeContext.Provider>
  );
}

export { CoffeeContext, CoffeeProvider };
