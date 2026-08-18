import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* Footer */}
      <div className="py-5" style={{ backgroundColor: "black", color: "white" }}>
        <div className="container-fluid">
          
          <div className="row">

            {/* Section 1 */}
            <div className="col-12 col-md-4">
              <h2>REDUXCART</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt minima ratione aliquam magni aut necessitatibus
                consectetur molestias soluta quidem quia. Alias esse unde
                similique est dolor amet quaerat fuga cum.
              </p>
            </div>

            {/* Section 2 */}
            <div className="col-12 col-md-4">
              <h2>Links</h2>

              <p>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </p>

              <p>
                <Link to="/cart" className="text-white">
                  Cart
                </Link>
              </p>

              <p>
                <Link to="/wish" className="text-white">
                  Wishlist
                </Link>
              </p>
            </div>

            {/* Section 3 */}
            <div className="col-12 col-md-4">
              <h2>Contact No</h2>

              <ul>
                <li>
                  Address: <b>Calicut, Kerala</b>
                </li>

                <li>
                  Phone: <b>9876543234</b>
                </li>

                <li>
                  Email: <b>reduxcart@gmail.com</b>
                </li>
              </ul>
            </div>

          </div>

          <div className="text-center mt-4">
            ReduxCart &copy; 2026 All Rights Reserved
          </div>

        </div>
      </div>
    </>
  );
}

export default Footer;