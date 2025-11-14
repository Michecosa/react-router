import axios from "axios";
import { useState, useEffect } from "react";
import CardProdotti from "../components/CardProdotti";

export default function Prodotti({ urlProducts }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(0);
  const [filterProducts, setFilterProducts] = useState(products);

  const filtroCategoria = (index) => {
    if (categories[index] === "All") {
      setFilterProducts(products);
    } else {
      setFilterProducts(
        products.filter((el) => el.category === categories[index])
      );
    }
  };

  useEffect(() => {
    filtroCategoria(selected);
  }, [products, selected]);

  useEffect(() => {
    axios
      .get(urlProducts)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [urlProducts]);

  const categories = [];
  products.forEach((product) => {
    if (!categories.includes(product.category))
      categories.push(product.category);
  });
  categories.unshift("All");

  return (
    <div className="container my-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className="mb-4">I nostri prodotti</h2>
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className={`btn btn-secondary me-2 mb-5 ${
                  index === selected && "btn-info"
                }`}
                onClick={() => setSelected(index)}
              >
                {category}
              </button>
            );
          })}

          <CardProdotti products={filterProducts} />
        </div>
      )}
    </div>
  );
}
