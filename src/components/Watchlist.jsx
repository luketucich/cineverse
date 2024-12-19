import { useState, useEffect } from "react";
import "../styles/watchlist.css";
import CompactCard from "./CompactCard";

const Watchlist = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    setHasLoaded(true);
  }, []);

  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  const completed = JSON.parse(localStorage.getItem("completed")) || [];

  const isMobile = window.innerWidth <= 768;

  return (
    <section>
      <h1>Your Watchlist</h1>

      <div
        className="list"
        style={{
          animation: hasLoaded ? "fadeIn 1s forwards" : "none",
          display: watchlist.length == 0 ? "flex" : "block",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {watchlist.length > 0 ? (
          watchlist.map((item) => (
            <CompactCard
              key={item.title + item.id}
              title={item.title}
              image={item.primaryImage}
            />
          ))
        ) : (
          <p>Nothing to watch yet!</p>
        )}
      </div>
      <div className="list-container">
        <h2>Completed</h2>
        <div
          className="list"
          style={{
            animation: hasLoaded ? "fadeIn 1s forwards" : "none",
            flexDirection: "row",
            display: "flex",
            width: "50%",
            overflow: "auto",
            justifyContent:
              completed.length == 0
                ? "center"
                : isMobile
                ? "flex-start"
                : "center",
          }}
        >
          {completed.length > 0 ? (
            completed.map((item) => (
              <img
                src={item}
                key={item + "completed"}
                style={{
                  maxWidth: "10rem",
                  height: "auto",
                  margin: "0 1rem",
                  borderRadius: "0.5rem",
                  boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.5)",
                  border: "0.5rem solid rgb(48, 48, 48)",
                }}
              />
            ))
          ) : (
            <p>Nothing completed yet!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Watchlist;
