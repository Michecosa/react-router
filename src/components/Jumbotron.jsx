import background from "../assets/landscape.jpg";

export default function Jumbotron() {
  return (
    <div
      className="jumbotron text-white shadow p-5 position-relative"
      style={{
        backgroundImage: `url(${background})`,
        height: "400px",
      }}
    >
      <div className="overlay"></div>

      <div className="position-relative h-100 d-flex justify-content-center align-items-center">
        <h1 className="display-4">Welcome to our store</h1>
      </div>
    </div>
  );
}
