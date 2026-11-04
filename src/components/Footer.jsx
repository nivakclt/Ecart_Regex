
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* Footer */}
      <div
        className="py-5 mt-5"
        style={{
          backgroundColor: "#080808",
          color: "#ffffff",
          borderTop: "2px solid #333",
        }}
      >
        <div className="container-fluid px-4 px-md-5">

          <div className="row g-4">

            {/* Section 1 */}
            <div className="col-12 col-md-4">
              <h2
                className="fw-bold mb-4"
                style={{ letterSpacing: "2px" }}
              >
                REDUXCART
              </h2>

              <p
                style={{
                  color: "#aaaaaa",
                  lineHeight: "1.8",
                  textAlign: "justify",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt minima ratione aliquam magni aut necessitatibus
                consectetur molestias soluta quidem quia. Alias esse unde
                similique est dolor amet quaerat fuga cum.
              </p>
            </div>

            {/* Section 2 */}
            <div className="col-12 col-md-4">
              <h2 className="fw-bold mb-4">Links</h2>

              <p>
                <Link
                  to="/"
                  className="text-decoration-none"
                  style={{ color: "#aaaaaa" }}
                >
                  Home
                </Link>
              </p>

              <p>
                <Link
                  to="/cart"
                  className="text-decoration-none"
                  style={{ color: "#aaaaaa" }}
                >
                  Cart
                </Link>
              </p>

              <p>
                <Link
                  to="/wish"
                  className="text-decoration-none"
                  style={{ color: "#aaaaaa" }}
                >
                  Wishlist
                </Link>
              </p>
            </div>

            {/* Section 3 */}
            <div className="col-12 col-md-4">
              <h2 className="fw-bold mb-4">Contact No</h2>

              <ul
                className="list-unstyled"
                style={{ color: "#aaaaaa", lineHeight: "2.2" }}
              >
                <li>
                  Address: <b className="text-white">Calicut, Kerala</b>
                </li>

                <li>
                  Phone: <b className="text-white">9876543234</b>
                </li>

                <li>
                  Email: <b className="text-white">reduxcart@gmail.com</b>
                </li>
              </ul>
            </div>

          </div>

          <hr style={{ borderColor: "#444" }} />

          <div
            className="text-center mt-4"
            style={{ color: "#888888", fontSize: "14px" }}
          >
            ReduxCart &copy; 2026 All Rights Reserved
          </div>

        </div>
      </div>
    </>
  );
}

export default Footer;
