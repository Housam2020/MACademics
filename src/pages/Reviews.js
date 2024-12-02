import React, { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      user: "John Doe",
      rating: 5,
      comment: "Great spot for quiet studying.",
    },
    {
      user: "Jane Smith",
      rating: 4,
      comment: "Nice place, but a bit crowded during lunch hours.",
    },
  ]);

  const handleAddReview = () => {
    // Example of adding a review (adjust as needed)
    const newReview = {
      user: "New User",
      rating: 4,
      comment: "Very comfortable seating.",
    };
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Reviews</h1>
      <div className="mb-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 mb-4 border"
          >
            <p className="font-bold">{review.user}</p>
            <p className="text-yellow-500">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
      <button
        onClick={handleAddReview}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Add Review
      </button>
    </div>
  );
};

export default Reviews;
