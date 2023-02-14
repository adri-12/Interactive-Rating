import { useState } from "react";
import "../styles/rating-style.scss";

function Rating() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleRatingClicked(rating) {
    setSelectedRating(rating);
  }

  function handleFormSubmitted(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return isSubmitted ? (
    <div className="panel center">
      <img src="/illustration-thank-you.svg"></img>

      <p className="selected">You selected {selectedRating} out of 5</p>
      <h1>Thank You!</h1>
      <p>
        We appreciate you taking time to give a rating. If you ever need more
        support, don't hesitate to get in touch!
      </p>
    </div>
  ) : (
    <form onSubmit={handleFormSubmitted} className="panel">
      <img className="star" src="/icon-star.svg" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="group">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            type="button"
            onClick={() => handleRatingClicked(rating)}
            className="rating"
          >
            {rating}
          </button>
        ))}
      </div>

      <button disabled={selectedRating === undefined} className="submit">
        Submit
      </button>
    </form>
  );
}
export default Rating;
