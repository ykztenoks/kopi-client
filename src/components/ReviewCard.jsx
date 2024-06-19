import toast from "react-hot-toast";
import api from "../services/api";
import { useContext } from "react";
import { CoffeeContext } from "../context/coffee.context";

function ReviewCard({ review, user }) {
  const { getAllCoffees } = useContext(CoffeeContext);
  const handleDelete = async (reviewId) => {
    try {
      const check = confirm("Are you sure you want to delete your review?");
      if (check) {
        const response = await api.delete("/review/" + reviewId);

        if (response.status === 200) {
          toast.success("Your review was deleted");
          getAllCoffees();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <article class="p-6 text-base bg-white rounded-lg dark:bg-stone-700 w-[50vw]">
      <footer class="flex justify-between items-center mb-2">
        <div class="flex items-center">
          <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
            <img
              class="mr-2 w-6 h-6 rounded-full"
              src="https://assets-global.website-files.com/642d682a6e4ca0d303c81fdf/65155692e2dc9f25a8fa90a5_ezgif.com-resize.webp"
              alt="Michael Gough"
            />
            {review.creator.username} {"⭐".repeat(review.rating)}
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {new Date(review.createdAt).toLocaleString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour12: true,
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
        </div>
      </footer>
      <p class="text-gray-500 dark:text-gray-300">{review.review}</p>
      {user && user._id === review.creator._id && (
        <button onClick={() => handleDelete(review._id)}>🗑️</button>
      )}
    </article>
  );
}

export default ReviewCard;
