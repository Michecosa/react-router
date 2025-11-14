export default function CardProdotti({ products }) {
  return (
    <div className="row g-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
        >
          <div className="card h-100 shadow-sm">
            <div style={{ width: "100%", height: "200px", padding: "1.1rem" }}>
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            </div>

            <div className="card-body d-flex flex-column">
              <h6 className="card-title fw-bold mb-1">{product.title}</h6>
              <div className="d-flex justify-content-between">
                <p className="text-muted mb-2" style={{ fontSize: "0.75rem" }}>
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
                    <i className="bi bi-star-fill"></i> {product.rating.rate}
                  </span>
                  ({product.rating.count})
                </p>
              </div>

              <p
                className="card-text text-truncate"
                style={{ fontSize: "0.8rem", flexGrow: 1 }}
                title={product.description}
              >
                {product.description}
              </p>
              <div>
                <span className="badge text-bg-success fs-6">
                  &euro;{product.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
