import "./largeCard.scss";
import { FeedbackSection } from "../feedbackSection/feedbackSection";

interface LargeCardProps {
  date: string;
  title: string;
  description: string;
  image: string;
}

export const LargeCard = ({ date, title, description, image }: LargeCardProps) => {
  return (
    <div className="large-card">
      <div className="large-card__container">
        <div className="large-card__info">
          <span className="large-card__date">{date}</span>
          <span className="large-card__title">{title}</span>
          <p className="large-card__description">{description}</p>
        </div>
        <div className="large-card__image">
          <img src={image} alt={title} />
        </div>
      </div>

      <FeedbackSection />
    </div>
  );
};
