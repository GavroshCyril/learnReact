import "./largeCard.scss";

interface LargeCardProps {
  date: string;
  title: string;
  description: string;
  image: string;
}

export const LargeCard = ({ date, title, description }: LargeCardProps) => {
  return (
    <div className="large-card large-card__container">
      <span className="large-card__date">{date}</span>
      <span className="large-card__title">{title}</span>
      <div className="large-card__description">{description}</div>
    </div>
  );
};
