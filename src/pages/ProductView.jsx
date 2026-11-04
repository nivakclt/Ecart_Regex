
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa6";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/Slices/productSlice";
function ProductView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const detail = products?.find((product) => product.id == id);

  return (
    <>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#f8f8f8", minHeight: "75vh" }}
      >
        <h2 className="fw-bold text-center mb-5">
          Product Details
        </h2>

        <div className="container">

          <div
            className="row align-items-center g-4 p-3 p-md-5 bg-white shadow rounded-4"
          >

            {/* Product Image */}
            <div className="col-sm-12 col-md-6 text-center">

              <img
                src={detail?.thumbnail}
                alt={detail?.title}
                style={{
                  width: "75%",
                  maxHeight: "400px",
                  objectFit: "contain",
                  borderRadius: "10px"
                }}
              />

            </div>

            {/* Product Information */}
            <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">

              <h2 className="fw-bold mb-3">
                {detail?.title}
              </h2>

              <h5 className="text-secondary mb-3">
                Category:
                <span className="text-dark ms-2">
                  {detail?.category}
                </span>
              </h5>

              <p
                className="text-secondary mb-4"
                style={{
                  textAlign: "justify",
                  lineHeight: "1.8"
                }}
              >
                {detail?.description}
              </p>

              <h6 className="mb-3">
                Rating:
                <span className="ms-2">
                  <FaStar className="text-warning me-1" />
                  {detail?.rating}
                </span>
              </h6>

              <h3 className="fw-bold text-success">
                ${detail?.price}
              </h3>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default ProductView;
