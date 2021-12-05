import OneProduct from "./OneProduct";

//komponenta kao Arrow funkcija
const Products = () => {
  return (
    <div className="all-products">
      <OneProduct />
      <OneProduct />
      <OneProduct />
    </div>
  );
};

export default Products;
