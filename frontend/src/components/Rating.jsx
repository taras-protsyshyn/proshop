import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const Rating = ({ value, text }) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {ratings.map((star) => (
        <span key={star}>
          {value >= star ? <FaStar /> : value >= star - 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
      ))}

      <span className="rating-text">{text && text}</span>
    </div>
  );
};
