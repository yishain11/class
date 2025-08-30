import Product from "./Product";

export default function ProductsContainer() {
  const products = [
    {
      productName: "Wireless Mouse",
      productDescription:
        "A sleek, ergonomic wireless mouse with adjustable DPI.",
      price: "$25.99",
    },
    {
      productName: "Mechanical Keyboard",
      productDescription:
        "RGB backlit keyboard with blue switches for a tactile feel.",
      price: "$79.99",
    },
    {
      productName: "Noise Cancelling Headphones",
      productDescription:
        "Over-ear headphones with active noise cancellation and 30h battery life.",
      price: "$129.99",
    },
    {
      productName: "Webcam 1080p",
      productDescription:
        "Full HD webcam with autofocus and built-in microphone.",
      price: "$49.99",
    },
    {
      productName: "USB-C Hub",
      productDescription:
        "7-in-1 hub with HDMI, USB 3.0, SD card reader, and Ethernet.",
      price: "$39.99",
    },
  ];

  return (
    <div style={{ width: "60%", backgroundColor: "blue" }}>
      {products.map((productObj) => (
        <Product
          price={productObj.price}
          key={productObj.productDescription}
          productDescription={productObj.productDescription}
          productName={productObj.productName}
        />
      ))}
    </div>
  );
}
