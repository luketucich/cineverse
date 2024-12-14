import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/shop.css";

const Shop = () => {
  const { category } = useOutletContext();
  const [showModal, setShowModal] = useState(false);
  const [currItem, setCurrItem] = useState(null);
  const [data, setData] = useState(null);

  // Update document title to include the current category
  useEffect(() => {
    document.title = `Browse - ${category}`;
  }, [category]);

  // Fetch products from API
  useEffect(() => {
    setData(null);
    fetch(`https://imdb236.p.rapidapi.com/imdb/${category}`, {
      headers: {
        "x-rapidapi-key": "55ec5dfe48msh8f8434c72a3573ep1f87a7jsn6919ef2414b8",
        "x-rapidapi-host": "imdb236.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, [category, setData]);

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
    setShowModal(!showModal);

    card.classList.toggle("modal");
  };

  // Safely render the component
  return (
    <main id="shop-main">
      <h1>Shop</h1>
      <p>This is the shop page.</p>
      <p>Current category: {category}</p>

      {data ? (
        data.length > 0 ? (
          <div className="cards-container">
            {data.map((item, i) => (
              <>
                {showModal && currItem === item.title && (
                  <div
                    key={i + item.title + `placeholder`}
                    className="card placeholder"
                  ></div>
                )}
                <div
                  key={i + item.title}
                  className="card"
                  onClick={(e) => handleOpenModal(e)}
                >
                  <h1 className="card-title">{item.title}</h1>
                  <img
                    className="card-image"
                    src={item.primaryImage}
                    alt={item.title}
                  />
                  {showModal && currItem === item.title && (
                    <div className="modal-content">
                      <p>{item.description}</p>
                      <p>Rating: {item.rating}</p>
                    </div>
                  )}
                </div>
              </>
            ))}
          </div>
        ) : (
          <p>No results found for this category.</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default Shop;
