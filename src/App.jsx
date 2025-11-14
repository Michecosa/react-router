import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Homepage";
import Prodotti from "./pages/Prodotti";
import ChiSiamo from "./pages/ChiSiamo";
import { useState } from "react";

const endpoint = "https://fakestoreapi.com/products";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
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
          <Route path="/chisiamo" element={<ChiSiamo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
