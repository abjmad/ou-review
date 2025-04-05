import React, { useState, useEffect } from "react";
import "./ReviewStyles.css";

/**
 * Review component allows users to leave reviews for a specific location.
 * Reviews are fetched from and saved to the Django API.
 * @param {string} location - The name of the restaurant/cafe being reviewed.
 * @returns {JSX.Element} The rendered Review component.
 */
function Review({ location }) {
  const [reviews, setReviews] = useState([]);
  const [username, setUsername] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  // Fetch reviews from Django API when the component mounts.
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/reviews/")
      .then((response) => response.json())
      .then((data) => {
        // Optionally filter by location if your API returns all reviews.
        const filteredReviews = data.filter(
          (rev) => rev.location === location
        );
        setReviews(filteredReviews);
      })
      .catch((error) => console.error("Error fetching reviews:", error));
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !comment) return;
    const newReview = {
      id: Date.now(), // Temporary ID for local update
      location,
      username,
      rating,
      comment,
    };
    // Update local state immediately
    setReviews([newReview, ...reviews]);
    // Optionally: post new review to the Django API here using fetch POST
    fetch("http://127.0.0.1:8000/api/reviews/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Review saved:", data);
      })
      .catch((error) => console.error("Error saving review:", error));

    setUsername("");
    setRating(5);
    setComment("");
  };

  return (
    <div className="review-container">
      <h3>Leave a Review for {location}</h3>
      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          {[5, 4, 3, 2, 1].map((num) => (
            <option key={num} value={num}>
              {num} Stars
            </option>
          ))}
        </select>
        <textarea
          placeholder="Your Review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">Submit Review</button>
      </form>
      <h3>Reviews</h3>
      {reviews.length > 0 ? (
        <ul className="review-list">
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.username}</strong> ({review.rating} Stars)
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet. Be the first to leave one!</p>
      )}
    </div>
  );
}

export default Review;
