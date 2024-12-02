import React, { useState } from "react";
import studySpots from "../data/studySpots";
import PageTitle from "../components/PageTitle";
import StudyPlaceCard from "../components/StudyPlaceCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      user: "John Doe",
      rating: 5,
      comment: "Great spot for quiet studying.",
      place: studySpots[0],
    },
    {
      user: "Jane Smith",
      rating: 4,
      comment: "Nice place, but a bit crowded during lunch hours.",
      place: studySpots[1],
    },
  ]);

  const [newReview, setNewReview] = useState({
    user: "",
    rating: 0,
    comment: "",
    place: studySpots[0],
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handlePlaceChange = (e) => {
    const selectedPlace = studySpots.find(
      (place) => place.name === e.target.value
    );
    setNewReview((prevReview) => ({
      ...prevReview,
      place: selectedPlace,
    }));
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    setReviews((prevReviews) => [...prevReviews, newReview]);
    setNewReview({
      user: "",
      rating: 0,
      comment: "",
      place: studySpots[0],
    });
    setIsModalOpen(false);
  };

  const recommendations = studySpots.filter(place => place.noiseLevel === "Moderate");

  return (
    <div className="p-4">
      <PageTitle>Reviews</PageTitle>
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
            <p className="text-gray-500 text-sm">{review.place.name}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Add Review
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add a Review</h2>
            <form onSubmit={handleAddReview}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="user"
                  value={newReview.user}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Rating</label>
                <select
                  name="rating"
                  value={newReview.rating}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                >
                  <option value={0}>Select Rating</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Comment</label>
                <textarea
                  name="comment"
                  value={newReview.comment}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Place</label>
                <select
                  name="place"
                  value={newReview.place.name}
                  onChange={handlePlaceChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                >
                  {studySpots.map((place, index) => (
                    <option key={index} value={place.name}>
                      {place.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Add Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Recommendations Section */}
      <div className="mt-12 pt-8 border-t border-gray-300">
        <PageTitle>Recommended for You</PageTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {recommendations.map((place, index) => (
            <StudyPlaceCard key={index} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;