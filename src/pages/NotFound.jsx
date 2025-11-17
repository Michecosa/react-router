import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1 className="fw-bold">404</h1>
      <p className="text-secondary">The product doesn't exist.</p>
      <Link to="/prodotti" className="btn btn-primary mt-3">
        Go back to the Products page
      </Link>
    </div>
  );
}
