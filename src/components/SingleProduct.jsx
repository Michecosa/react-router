import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SingleProduct({ urlProducts, addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${urlProducts}/${id}`)
      .then((res) => {
        if (!res.data || !res.data.id) {
          return navigate("/notfound");
        }
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => navigate("/notfound"));
  }, [id, urlProducts, navigate]);

  return (
    <div className="container my-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row g-5 align-items-start">
          <div className="col-md-5 d-flex justify-content-center">
            <div className="p-3" style={{ maxWidth: "350px" }}>
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          <div className="col-md-7">
            <h2 className="fw-bold mb-1">{product.title}</h2>
            <div className="d-flex justify-content-between">
              <p className="text-muted" style={{ fontSize: "0.75rem" }}>
                {product.category}
              </p>
              <p
                className="text-body-tertiary mb-2"
                style={{ fontSize: "0.85rem" }}
              >
                <span
                  className="text-warning fw-bold mb-1 text-end me-2"
                  style={{ fontSize: "0.85rem" }}
                >
                  <i className="bi bi-star-fill"></i> {product.rating?.rate}
                </span>
                ({product.rating?.count})
              </p>
            </div>
            <h4 className="text-success fw-bold mb-3">
              €{product.price?.toFixed(2)}
            </h4>
            <div style={{ maxWidth: "600px" }}>
              <p className="fw-semibold mt-4 mb-0">Product details:</p>
              <p>{product.description}</p>
            </div>
            <button
              className="btn btn-primary mt-3 me-3"
              onClick={() => addToCart(product)}
            >
              <i className="bi bi-cart4"></i>
            </button>
            <button
              className="btn btn-outline-primary mt-3"
              onClick={() => navigate(-1)}
            >
              Torna indietro
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
