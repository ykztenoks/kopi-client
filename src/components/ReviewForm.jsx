import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import StarRatings from "react-star-ratings";
import api from "../services/api";
import { useParams } from "react-router-dom";
import { CoffeeContext } from "../context/coffee.context";

function ReviewForm() {
  const [review, setReview] = useState({ title: "", rating: 0, review: "" });
  const { coffeeId } = useParams();
  const { getAllCoffees } = useContext(CoffeeContext);
  const handleChange = (e) => {
    setReview((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/review/" + coffeeId, review);

      if (response.status === 200 || response.status === 201) {
        toast.success("Review submitted");
        getAllCoffees();
        setReview({ title: "", rating: 0, review: "" });
      }
    } catch (error) {
      console.log(error);
      toast.error("error creating review");
    }
  };

  useEffect(() => {
    console.log(review);
  }, [review]);

  return (
    <form className="center flex-col" onSubmit={handleSubmit}>
      <label htmlFor="title">title:</label>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        value={review.title}
      />
      <label htmlFor="review">review:</label>
      <input
        type="text"
        name="review"
        onChange={handleChange}
        value={review.review}
      />
      <label htmlFor="rating">rating:</label>
      <StarRatings
        numberOfStars={5}
        changeRating={(rating) =>
          setReview((prev) => ({ ...prev, rating: rating }))
        }
        name="rating"
        rating={review.rating}
        isAggregateRating={true}
        starRatedColor="rgb(154 52 18)"
        starHoverColor="rgb(152 55 11)"
      />
      <button type="submit" className="btn">
        review!
      </button>
    </form>
  );
}

export default ReviewForm;
