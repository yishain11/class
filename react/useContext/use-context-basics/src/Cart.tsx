import { useContext } from "react";
import { selectedProductsContext } from "./contexts/SelectedProducts.context";

export default function Cart() {
  const { selectedProducts } = useContext(selectedProductsContext);
  return (
    <div style={{ backgroundColor: "green", width: "40%" }}>
      <h3>cart</h3>
      <div id="selectedProducts">
        {selectedProducts.map((sp) => {
          return (
            <div key={sp.productDescription}>
              <h2>{sp.productName}</h2>
              <p>{sp.productDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
