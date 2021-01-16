import { Review } from "../utils/reviews";

import ReviewPreview from "./ReviewPreview";

interface Props {
  reviews: Review[];
}

const ReviewGrid: React.FC<Props> = ({ reviews }) => {
  return (
    <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-16">
      {reviews.map((review) => (
        <li key={review.slug} className="list-none space-y-4">
          <ReviewPreview review={review} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewGrid;
