import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../context/coffee.context";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import CoffeeDetailsCard from "../components/CoffeeDetailsCard";
import ReviewForm from "../components/ReviewForm";
import ReviewCard from "../components/ReviewCard";

function CoffeeDetails() {
  const [coffee, setCoffee] = useState(null);
  const { coffees } = useContext(CoffeeContext);
  const { coffeeId } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    coffees && setCoffee(coffees.find((curr) => curr._id === coffeeId));
  }, [coffees]);
  return (
    <div className="center flex-col gap-6 mb-8">
      <h2 className="text-3xl font-semibold m-6">CoffeeDetails</h2>
      {coffee ? <CoffeeDetailsCard coffee={coffee} /> : <p>Loading</p>}
      {!user || user.isAdmin ? (
        <p>
          <Link
            to="/login"
            className="hover:text-slate-700 hover:scale-110 transition-all text-slate-500"
          >
            Login
          </Link>{" "}
          to review. 🍵
        </p>
      ) : (
        <ReviewForm />
      )}

      {coffee && coffee.reviews.length ? (
        coffee.reviews.map((review) => (
          <ReviewCard review={review} user={user} />
        ))
      ) : (
        <p>No reviews yet</p>
      )}
    </div>
  );
}

export default CoffeeDetails;
