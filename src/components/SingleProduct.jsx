import { useParams } from "react-router-dom";

export default function SingleProduct() {
  const { id } = useParams();

  return (
    <div className="container my-4">
      <h2>Pagina Single Product</h2>
      <p>
        ID ricevuto: <strong>{id}</strong>
      </p>
    </div>
  );
}
