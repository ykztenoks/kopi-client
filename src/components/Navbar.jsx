import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="flex justify-between bg-stone-700">
      <div className="center gap-4 p-4">
        <Link to="/">
          <h1 className="text-orange-800 text-5xl">kopi ☕</h1>
        </Link>
        <Link to="/coffees" className="links">
          coffees
        </Link>
        <Link to="/about" className="links">
          about
        </Link>
      </div>

      {user && user.isAdmin && (
        <div className="center">
          <Link className="btn" to="/coffee/create">
            Create a coffee
          </Link>
        </div>
      )}

      {user ? (
        <div className="center gap-4 p-4">
          <button onClick={logout} className="btn">
            logout
          </button>
        </div>
      ) : (
        <div className="center gap-4 p-4">
          <Link to="/signup" className="btn">
            sign up
          </Link>
          <Link to="/login" className="btn">
            log in
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
