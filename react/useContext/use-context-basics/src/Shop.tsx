import { useContext } from "react";
import Cart from "./Cart";
import ProductsContainer from "./ProductsContainer";
import "./Shop.css";
import { SelectedProducts } from "./contexts/SelectedProducts.context";

export default function Shop() {
  return (
    <div className="container">
      <SelectedProducts>
        <ProductsContainer />
        <Cart />
      </SelectedProducts>
    </div>
  );
}
