import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Carrello from "./pages/Carrello";
import Home from "./pages/Homepage";
import Prodotti from "./pages/Prodotti";
import ChiSiamo from "./pages/ChiSiamo";
import SingleProduct from "./pages/SingleProduct";
import NotFound from "./pages/NotFound";
import { useState } from "react";

const endpoint = "https://fakestoreapi.com/products";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  function removeFromCart(indexToRemove) {
    setCart((prev) => prev.filter((el, index) => index !== indexToRemove));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout cart={cart} />}>
          <Route index element={<Home />} />
          <Route
            path="/prodotti"
            element={<Prodotti urlProducts={endpoint} addToCart={addToCart} />}
          />
          <Route
            path="/carrello"
            element={<Carrello cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route
            path="/prodotti/:id"
            element={
              <SingleProduct urlProducts={endpoint} addToCart={addToCart} />
            }
          />
          <Route path="/notfound" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
