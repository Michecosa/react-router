import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Homepage";
import Prodotti from "./pages/Prodotti";
import ChiSiamo from "./pages/ChiSiamo";

const endpoint = "https://fakestoreapi.com/products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/prodotti"
            element={<Prodotti urlProducts={endpoint} />}
          />
          <Route path="/chisiamo" element={<ChiSiamo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
