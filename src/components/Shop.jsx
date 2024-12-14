import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/shop.css";

const Shop = () => {
  const { category, data, setData } = useOutletContext();
  const [showModal, setShowModal] = useState(false);
  const [currItem, setCurrItem] = useState(null);

  // Update document title to include the current category
  useEffect(() => {
    document.title = `Browse - ${category}`;
  }, [category]);

  // Fetch products from API
  useEffect(() => {
    fetch(`https://imdb236.p.rapidapi.com/imdb/most-popular-movies`, {
      headers: {
        "x-rapidapi-key": "55ec5dfe48msh8f8434c72a3573ep1f87a7jsn6919ef2414b8",
        "x-rapidapi-host": "imdb236.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.shows);
        setData(res.shows);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, [category, setData]);

  const handleOpenModal = (e) => {
    const card = e.target.closest(".card");
    setCurrItem(
      e.target.closest(".card").querySelector(".card-title").innerText
    );

    showModal ? setShowModal(false) : setShowModal(true);
    if (card) {
      card.classList.toggle("modal");
    }
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
                  <div className="card"></div>
                )}
                <div
                  key={i}
                  className="card"
                  onClick={(e) => handleOpenModal(e)}
                >
                  <h1 className="card-title">{item.title}</h1>
                  <img
                    className="card-image"
                    src={item.imageSet.horizontalBackdrop.w1080}
                    alt={item.title}
                  />
                  <button>Add to Watchlist</button>
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
