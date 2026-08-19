import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { FaOpencart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { searchProducts } from '../redux/Slices/Productslice';




function Header() {

  const {cart}=useSelector(state=>state.cartReducer)
  const {wishlist}=useSelector(state=>state.wishListReducer)
  const dispatch=useDispatch();
 
  return (
    <>
            {/* <!-- Navigation--> */}
        
     <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <FaOpencart className='text-danger' style={{fontSize:'25px'}}/>
           {' '}
            ReduxCart
          </Navbar.Brand>
          <input type="search" onChange={(e) => dispatch(searchProducts(e.target.value))} placeholder='Enter keyword to search' className="form-control w-50 border border-dark" />
          <div className="d-flex gap-3">
            <Link to={'/cart'} className="btn btn-outline-dark" style={{backgroundColor:'black'}}><FaShoppingCart className='text-success'/>{' '}cart{' '} <span className='badge bg-dark'>{cart.length}</span> </Link>
            <Link to={'/wish'} className="btn btn-outline-dark" style={{backgroundColor:'black'}}><FaHeart className='text-danger'/>{' '}Wishlist{' '} <span className='badge bg-dark'>{wishlist.length}</span> </Link>
          </div>
        </Container>
      </Navbar>

    </>
  )
}
export default Header