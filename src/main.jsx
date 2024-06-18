import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth.context.jsx";
import { CoffeeProvider } from "./context/coffee.context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <CoffeeProvider>
        <App />
      </CoffeeProvider>
    </AuthProvider>
  </BrowserRouter>
);
