import "./App.css";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
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
  const isLoggedIn = () => {
    return localStorage.getItem("authToken") ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    );
  };

  const IsNotLoggedIn = () => {
    return !localStorage.getItem("authToken") ? (
      <Outlet />
    ) : (
      <Navigate to="/" />
    );
  };

  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coffees" element={<CoffeeList />} />
        <Route path="/coffees/:coffeeId" element={<CoffeeDetails />} />
        <Route path="/about" element={<About />} />

        <Route element={<IsNotLoggedIn />}>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="/coffee/create" element={<CreateCoffeePage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
