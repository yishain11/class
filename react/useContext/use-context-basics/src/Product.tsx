import { useContext } from "react";
import "./Product.css";
import { selectedProductsContext } from "./contexts/SelectedProducts.context";

export default function Product({ productName, productDescription, price }) {
  const currentProduct = { productName, productDescription, price };
  const { selectedProducts, setSelectedProducts } = useContext(
    selectedProductsContext
  );
  return (
    <div id="productContainer">
      <h5>{productName}</h5>
      <section className="productData">
        <h6>Product description:</h6>
        <p>{productDescription}</p>
      </section>
      <section className="productData">
        <h6>price:</h6>
        <p>{price}</p>
      </section>
      <button
        onClick={() => {
          console.log("current selected products: ", selectedProducts);
          console.log("adding: ", currentProduct);
          setSelectedProducts([...selectedProducts, currentProduct]);
        }}
      >
        add to cart
      </button>
    </div>
  );
}
