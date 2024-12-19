import { IconStar } from "@tabler/icons-react";
const CompactCard = ({ title, rating, image }) => {
  return (
    <div className="compact-card">
      <img src={image} alt={title} />
      <div className="compact-card-info">
        <h1 className="compact-card-title">{title}</h1>
        <div className="compact-card-rating">
          <IconStar />
          <h1>{rating}</h1>
        </div>
        <button className="compact-card-button">Complete</button>
      </div>
    </div>
  );
};

export default CompactCard;
