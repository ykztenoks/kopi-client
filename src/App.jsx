import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import CoffeeList from "./pages/CoffeeList";
import CoffeeDetails from "./pages/CoffeeDetails";
import About from "./pages/About";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Error from "./pages/Error";
import CreateCoffeePage from "./pages/CreateCoffeePage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coffees" element={<CoffeeList />} />
        <Route path="/coffees/:coffeeId" element={<CoffeeDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/coffee/create" element={<CreateCoffeePage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
