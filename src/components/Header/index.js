import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  return (
    <div className="header">
      <Link to="/collectionpage" className="link">
        <p>collectionpage</p>
      </Link>
      <Link to="/productpage" className="link">
        <p>Productpage</p>
      </Link>
      <Link to="/cartpage" className="link">
        <p>Cart</p>
      </Link>
    </div>
  );
}
export default Header;
