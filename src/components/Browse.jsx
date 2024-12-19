import { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/browse.css";
import { IconLoader } from "@tabler/icons-react";

const Browse = () => {
  const category = window.location.href.split("browse/")[1];
  let heading = "";
  if (category === "top250-movies") {
    heading = "Top 250 Movies";
  } else if (category === "top-box-office") {
    heading = "Top Box Office (US)";
  } else if (category === "most-popular-movies") {
    heading = "Most Popular Movies";
  } else if (category === "top250-tv") {
    heading = "Top 250 TV Shows";
  } else if (category === "most-popular-tv") {
    heading = "Most Popular TV Shows";
  }

  const [currItem, setCurrItem] = useState(null);
  const [data, setData] = useState(null);

  // Update document title to include the current category
  useEffect(() => {
    document.title = `Browse - ${heading}`;
  }, [heading]);

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

  // Safely render the component
  return (
    <main id="shop-main">
      <h1
        style={{
          textAlign: "center",
          margin: "1rem 0",
        }}
      >
        {heading}
      </h1>
      {data ? (
        data.length > 0 ? (
          <div className="cards-container">
            {data.map((item, i) => (
              <Card
                key={i + item.title}
                item={item}
                currItem={currItem}
                setCurrItem={setCurrItem}
              />
            ))}
          </div>
        ) : (
          <p>No results found.</p>
        )
      ) : (
        <IconLoader
          style={{
            animation: "spin 1.5s linear infinite",
            width: "40px",
            height: "40px",
            margin: "auto",
          }}
        />
      )}
    </main>
  );
};

export default Browse;
