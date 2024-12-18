import "../styles/home.css";

const Cineverse = () => {
  const navigateToTopMovies = () => {
    window.location.href = "/browse/top-250-movies";
  };

  return (
    <>
      <div
        className="background"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -10,
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "6rem 1.25rem" /* Top/Bottom: 6rem, Left/Right: 1.25rem */,
          background:
            "radial-gradient(125% 125% at 50% 10%,  #121212 40%, #000 100%)",
        }}
      ></div>
      <div className="cineverse">
        <section className="hero">
          <h1>Welcome to Cineverse</h1>
          <p>
            Your ultimate destination for discovering top movies & TV shows.
          </p>
          <button className="hero-button" onClick={navigateToTopMovies}>
            Explore Now
          </button>
        </section>
      </div>
    </>
  );
};

export default Cineverse;
