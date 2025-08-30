import { createContext, useState } from "react";

export const selectedProductsContext = createContext([]);

export function SelectedProducts({ children }) {
  const [selectedProducts, setSelectedProducts] = useState([]);
  return (
    <selectedProductsContext.Provider
      value={{ selectedProducts, setSelectedProducts }}
    >
      {children}
    </selectedProductsContext.Provider>
  );
}
