import axios from "axios";
import { useState, useEffect } from "react";

export default function Prodotti({ urlProducts }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(urlProducts)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [urlProducts]);

  return (
    <div className="container my-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
