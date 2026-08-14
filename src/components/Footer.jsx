
import { Link } from "react-router-dom"
function Footer() {
  return (
    <>
        {/* <!-- Footer--> */}
         <div class="py-5" style={{backgroundColor:"black"}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-4 align-items-center">
              <h2>REDUXCART</h2>
              <p style={{}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima ratione aliquam magni aut necessitatibus consectetur molestias soluta quidem quia. Alias esse unde similique est dolor amet quaerat fuga cum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis porro id velit alias odit, molestias, quibusdam totam minima molestiae excepturi sequi facilis ipsum repellat magnam, quos in laborum eaque repudiandae?
              </p>
            </div>
            <div className="col-md-12 col-md-4 align-items-center">
              <h2>Links</h2>
              <p><Link to={'/'}>Home</Link></p>
              <p><Link to={'/cart'}>Cart</Link></p>
              <p><Link to={'/wish'}>Wishlist</Link></p>
            </div>
            <div className="col-md-12 col-md-4 align-items-center">
              <h2>Contact No</h2>
              <ul>
                <li>Address:<b>Calicut,Kerala</b></li>
                <li>Phone:<b>9876543234</b></li>
                <li>Email:<b>reduxcart@gmail.com</b></li>
              </ul>
            </div>
          </div>
          <div className="text-center">ReduxCart &copy 2026 All rights Reserved
          </div>
        </div>
</div>     
    </>
  )
}

export default Footer