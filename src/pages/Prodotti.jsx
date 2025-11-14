import axios from "axios";
import { useState, useEffect } from "react";
import Prodotto from "../components/Prodotto";

export default function Prodotti({ urlProducts }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(urlProducts)
      .then((response) => {
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
        <div>
          <h2 className="mb-4">I nostri prodotti</h2>
          <Prodotto products={products} />
        </div>
      )}
    </div>
  );
}
