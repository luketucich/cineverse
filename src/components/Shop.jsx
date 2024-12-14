import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const { category } = useOutletContext();
  const [data, setData] = useState(null);

  // Update document title to include the current category
  useEffect(() => {
    document.title = `Browse - ${category}`;
  }, [category]);

  // Fetch products from API
  useEffect(() => {
    fetch(
      `https://streaming-availability.p.rapidapi.com/shows/search/filters?country=us&series_granularity=show&genres=${category}&order_direction=desc&order_by=rating&genres_relation=and&output_language=en&show_type=movie`,
      {
        headers: {
          "x-rapidapi-key":
            "55ec5dfe48msh8f8434c72a3573ep1f87a7jsn6919ef2414b8",
          "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.shows);
        setData(res.shows);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, [category]);

  // Safely render the component
  return (
    <div>
      <h1>Shop</h1>
      <p>This is the shop page.</p>
      <p>Current category: {category}</p>

      {data ? (
        data.length > 0 ? (
          data.map((item, i) => (
            <div key={i}>
              <h2>{item.title}</h2>
            </div>
          ))
        ) : (
          <p>No results found for this category.</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Shop;
