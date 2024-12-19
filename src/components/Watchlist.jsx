import "../styles/watchlist.css";
import CompactCard from "./CompactCard";

const Watchlist = () => {
  return (
    <body>
      <h1>Your Watchlist</h1>
      <div className="lists">
        <div className="list">
          <h2>Movies</h2>
        </div>
        <div className="list">
          <h2>TV Shows</h2>
        </div>
      </div>
      <div className="list">
        <h3>Completed</h3>
      </div>
    </body>
  );
};

export default Watchlist;
