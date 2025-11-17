import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SingleProduct({ urlProducts }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${urlProducts}/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => navigate("/prodotti"));
  }, [id, urlProducts, navigate]);

  return (
    <div className="container my-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row g-4">
          <div>
            <img src={product.image} alt={product.title} />
          </div>
          <div>
            <h2>{product.title}</h2>
            <p>{product.category}</p>
            <p>{product.rating.rate}</p>
            <p>{product.price.toFixed(2)}</p>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
