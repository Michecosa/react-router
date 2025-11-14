export default function Prodotti({ products }) {
  return (
    <div className="row g-4">
      {products.map((product) => (
        <div key={product.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
          <div className="card h-100">
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

            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                {product.category} - &euro;{product.price}
              </p>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
