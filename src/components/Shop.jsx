import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const { category } = useOutletContext();
  return (
    <div>
      <h1>Shop</h1>
      <p>This is the shop page.</p>
      <p>Current category: {category}</p>
    </div>
  );
};

export default Shop;
