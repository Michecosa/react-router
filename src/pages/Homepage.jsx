import Jumbotron from "../components/Jumbotron";

export default function Homepage() {
  return (
    <>
      <Jumbotron />
      <div className="container my-5">
        <h1 className="display-4 fw-bold">Benvenuto!</h1>
        <p className="lead">Sei nella homepage</p>
      </div>
    </>
  );
}
