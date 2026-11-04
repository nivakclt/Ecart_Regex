
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { FaOpencart, FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchProducts } from "../redux/Slices/productSlice";
function Header() {
  const { cart } = useSelector(state => state.cartReducer);
  const { wishlist } = useSelector(state => state.wishListReducer);
  const dispatch = useDispatch();

  return (
    <Navbar expand="lg" className="redux-navbar">
      <Container fluid className="px-3 px-md-5">

        <Navbar.Brand as={Link} to="/" className="redux-brand">
          <FaOpencart className="brand-icon" />
          <span>Redux<span className="brand-highlight">Cart</span></span>
        </Navbar.Brand>

        <div className="redux-search">
          <input
            type="search"
            onChange={(e) => dispatch(searchProducts(e.target.value))}
            placeholder="Search your favorite products..."
          />
        </div>

        <div className="redux-nav-actions">

          <Link to="/cart" className="nav-action">
            <FaShoppingCart />
            <span>Cart</span>
            <span className="nav-count">{cart.length}</span>
          </Link>

          <Link to="/wish" className="nav-action wishlist-action">
            <FaHeart />
            <span>Wishlist</span>
            <span className="nav-count">{wishlist.length}</span>
          </Link>

        </div>

      </Container>
    </Navbar>
  );
}

export default Header;
