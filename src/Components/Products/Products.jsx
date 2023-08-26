import React, { useEffect, useState } from "react";
import getAllProducts from "../../APi";

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllProducts().then((response) => {
      setItems(response.products);
    });
  }, []); // <-- Corrected placement of the empty dependency array

  return (
    <div>
      <h1>{items}</h1>
    </div>
  );
};

export default Products;
