import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout({ cart }) {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header cart={cart} />

      <main className="flex-grow-1 pb-2">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
