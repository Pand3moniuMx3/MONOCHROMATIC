import { Link } from "react-router-dom";
import "../styles/Homepage.css";

export default function Homepage() {
  return (
    <section className="homepage">
      <div className="container">
        <h3>Monochromatic Guide To</h3>
        <img
          src="/images/monochromatic-logo.png"
          alt="monochromatic guide to react"
          className="logo"
        />
        <Link to="basics/what-is-react" className="btn">
          Start learning
        </Link>
      </div>
    </section>
  );
}
