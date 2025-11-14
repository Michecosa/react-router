export default function Prodotto({ products }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {products.map((product) => (
        <div key={product.id}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
          />
          <div className="card-body">
            <h3 className="card-text">{product.title}</h3>
            <p className="card-text">
              {product.category} - &euro;{product.price}
            </p>
            <p className="card-text">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
