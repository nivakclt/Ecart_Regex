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
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {wishlist?.map((product) => {
            return (
              <div className="col mb-5" key={product.id}>
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src={product?.thumbnail}
                    alt="noimg"
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{product?.title}</h5>

                      {product?.price}
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-between">
                    <button className="btn"  className="btn btn-light fs-4 "
                        onClick={() => {
                          handleAddToCart(product);
                        }}>
                      <FaCartPlus className="text-success"
                        
                      />
                    </button>

                    <button
                      className="btn"  className="btn btn-light fs-4"
                      onClick={() => {
                        dispatch(removedFromWishlist(product.id));
                      }}
                    >
                      <FaHeartCircleMinus className="text-danger" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Wishlist;
