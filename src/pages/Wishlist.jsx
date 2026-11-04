
import { FaCartPlus } from "react-icons/fa";
import { FaHeartCircleMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../redux/Slices/cardSlice";
import { removedFromWishlist } from "../redux/Slices/wishSlices";

function Wishlist() {

  const handleAddToCart=(product)=>{
    dispatch(addtoCart(product))
    dispatch(removedFromWishlist(product.id))
  }

  const { wishlist } = useSelector((state) => state.wishListReducer);

  const dispatch = useDispatch();

  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#f8f8f8", minHeight: "75vh" }}
    >
      <div className="container px-4 px-lg-5 mt-3">

        <h2 className="fw-bold text-center mb-5">
          My Wishlist
        </h2>

        {wishlist?.length > 0 ? (

          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

            {wishlist?.map((product) => {
              return (
                <div className="col mb-5" key={product.id}>

                  <div
                    className="card h-100 border-0 shadow-sm"
                    style={{
                      borderRadius: "12px",
                      overflow: "hidden"
                    }}
                  >

                    <img
                      className="card-img-top"
                      src={product?.thumbnail}
                      alt="noimg"
                      style={{
                        height: "220px",
                        objectFit: "contain",
                        padding: "15px",
                        backgroundColor: "#fff"
                      }}
                    />

                    <div className="card-body p-4">
                      <div className="text-center">

                        <h5 className="fw-bold mb-3">
                          {product?.title}
                        </h5>

                        <h5 className="fw-bold text-success">
                          ${product?.price}
                        </h5>

                      </div>
                    </div>

                    <div
                      className="card-footer p-3 border-top d-flex justify-content-around"
                      style={{ backgroundColor: "#fff" }}
                    >

                      <button
                        className="btn btn-dark px-4"
                        onClick={() => {
                          handleAddToCart(product);
                        }}
                        title="Move to Cart"
                      >
                        <FaCartPlus className="text-success" />
                      </button>

                      <button
                        className="btn btn-dark px-4"
                        onClick={() => {
                          dispatch(removedFromWishlist(product.id));
                        }}
                        title="Remove from Wishlist"
                      >
                        <FaHeartCircleMinus className="text-danger" />
                      </button>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        ) : (

          <div className="text-center bg-white shadow-sm rounded-3 p-5">
            <h4 className="fw-bold">Your Wishlist is Empty</h4>
            <p className="text-secondary mb-0">
              You haven't added any products to your wishlist yet.
            </p>
          </div>

        )}

      </div>
    </section>
  );
}

export default Wishlist;
