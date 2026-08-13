import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { FaOpencart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


function Header() {
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
          <input type="search" placeholder='Enter keyword to search' className="form-control w-50 border border-dark" />
          <div className="d-flex gap-3">
            <button className="btn btn-outline-dark"><FaShoppingCart className='text-success'/>{' '}cart{' '} <span className='badge bg-dark'>0</span> </button>
            <button className="btn btn-outline-dark"><FaHeart className='text-danger'/>{' '}Wishlist{' '} <span className='badge bg-dark'>0</span> </button>
          </div>
        </Container>
      </Navbar>

    </>
  )
}

export default Header