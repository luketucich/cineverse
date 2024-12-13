import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const { category } = useOutletContext();

  // Update document title to include the current category
  useEffect(() => {
    document.title = `Browse - ${category}`;
  });

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
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <div>
      <h1>Shop</h1>
      <p>This is the shop page.</p>
      <p>Current category: {category}</p>
    </div>
  );
};

export default Shop;
