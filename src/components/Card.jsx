import {
  IconBinoculars,
  IconBookmark,
  IconStar,
  IconX,
} from "@tabler/icons-react";
import { useEffect, useState, useRef } from "react";
import "../styles/card.css";

const Card = ({ item, currItem, setCurrItem }) => {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);
  const targetRef = useRef(null);
  const scrollPosition = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setHasSeen(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const handleOpenModal = (e) => {
    const card = e.target.closest(".card");
    if (!card) return;

    const cardBounds = card.getBoundingClientRect();
    document.documentElement.style.setProperty(
      "--card-original-top",
      `${cardBounds.top}px`
    );
    document.documentElement.style.setProperty(
      "--card-original-left",
      `${cardBounds.left}px`
    );
    document.documentElement.style.setProperty(
      "--card-original-width",
      `${cardBounds.width}px`
    );

    setCurrItem(card.querySelector(".card-title").innerText);
    if (!showModal) {
      scrollPosition.current = window.scrollY;
      setShowModal(true);
      card.classList.toggle("modal");
    }
  };

  const handleCloseModal = (e) => {
    const card = e.target.closest(".card");
    setShowModal(false);
    card.classList.toggle("modal");
    setTimeout(() => {
      window.scrollTo(0, scrollPosition.current);
    }, 0);
  };

  return (
    <>
      {showModal && <div className="modal-background"></div>}
      {showModal && currItem === item.title && (
        <div className="card placeholder"></div>
      )}
      <div
        ref={targetRef}
        className="card"
        onClick={handleOpenModal}
        style={{
          opacity: !isVisible && !hasSeen ? 0.3 : 1,
          filter: !isVisible && !hasSeen ? "blur(2px)" : "none",
          transition: "all 0.6s ease-in-out",
          cursor: showModal ? "default" : "pointer",
        }}
      >
        <div
          className={`card-content-main ${
            showModal ? "modal-content-main" : ""
          }`}
        >
          <img
            className="card-image"
            src={item.primaryImage}
            alt={item.title}
          />

          <div className="card-info-container">
            <h1 className="card-title" style={{ fontWeight: 600 }}>
              {item.title}
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <IconStar
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  color: "rgb(218, 165, 32)",
                  fill: "gold",
                }}
              />
              <h1 className="card-title">
                {item.numVotes
                  ? ` ${item.averageRating.toLocaleString()}/10`
                  : " N/A"}
              </h1>
            </div>
          </div>
        </div>
        {showModal && currItem === item.title && (
          <div
            className={`card-content-secondary ${
              showModal ? "modal-content-secondary" : ""
            }`}
          >
            <div className="card-details">
              <IconX
                className="close-icon"
                onClick={(e) => handleCloseModal(e)}
              />
              <p className="modal-info">
                <strong>Rating:</strong>
                {item.numVotes
                  ? ` ${item.averageRating.toLocaleString()}/10`
                  : " N/A"}
              </p>
              <p className="modal-info">
                <strong>Content Rating:</strong> {item.contentRating}
              </p>
              <p className="modal-info">
                <strong>Description:</strong> {item.description}
              </p>
              <p className="modal-info">
                <strong>Runtime:</strong> {item.runtimeMinutes} minutes
              </p>
              <p className="modal-info">
                <strong>Year:</strong> {item.startYear}
              </p>

              <p className="modal-info">
                <strong>Votes:</strong>
                {item.numVotes ? ` ${item.numVotes.toLocaleString()}` : " N/A"}
              </p>
              <div className="modal-buttons">
                <button
                  className="modal-button"
                  onClick={() =>
                    window.open(item.url, "_blank", "noopener noreferrer")
                  }
                >
                  <div className="modal-button-container">
                    <IconBinoculars
                      style={{ minWidth: "1.5rem", minHeight: "1.5rem" }}
                    />
                    <p>View on IMDb</p>
                  </div>
                </button>
                <button className="modal-button">
                  <div className="modal-button-container">
                    <IconBookmark
                      style={{ minWidth: "1.5rem", minHeight: "1.5rem" }}
                    />
                    <p>Add to Watchlist</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
