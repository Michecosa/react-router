import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Homepage";
import Prodotti from "./pages/Prodotti";
import ChiSiamo from "./pages/ChiSiamo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
