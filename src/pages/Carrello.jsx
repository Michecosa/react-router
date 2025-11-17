export default function Carrello({ cart, removeFromCart }) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }

  return (
    <div className="container my-4">
      <h2 className="mb-4">Your cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="list-group">
          {cart.length > 1 ? (
            <p>You have {cart.length} articles</p>
          ) : (
            <p>You have {cart.length} article</p>
          )}
          {cart.map((item, index) => (
            <div
              key={index}
              className="list-group-item d-flex align-items-center justify-content-between"
            >
              <div style={{ width: "80px", height: "80px", flexShrink: 0 }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div className="flex-grow-1 ms-3">
                <h6 className="mb-1">{item.title}</h6>
                <p className="text-muted mb-1" style={{ fontSize: "0.8rem" }}>
                  {item.category}
                </p>
              </div>

              <div className="d-flex flex-column align-items-end">
                <span className="fw-bolder fs-6 mb-2">
                  &euro;{item.price.toFixed(2)}
                </span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-4 d-flex justify-content-end">
          <h5>Total: &euro;{total.toFixed(2)}</h5>
        </div>
      )}
    </div>
  );
}
