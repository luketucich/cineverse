import { IconStar } from "@tabler/icons-react";
import "../styles/compactcard.css";
const CompactCard = ({ title, rating, image }) => {
  const handleComplete = (title) => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist"));
    const completed = JSON.parse(localStorage.getItem("completed"));
    localStorage.setItem(
      "watchlist",
      JSON.stringify(watchlist.filter((item) => item.title !== title))
    );
    localStorage.setItem("completed", JSON.stringify([...completed, image]));
    window.location.reload();
  };
  return (
    <div className="compact-card">
      <img src={image} alt={title} />
      <div className="compact-card-info">
        <h1 className="compact-card-title">{title}</h1>
        <button
          className="compact-card-button"
          onClick={() => handleComplete(title)}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default CompactCard;
