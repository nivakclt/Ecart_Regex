
import { CiTrash } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  checkout,
} from "../redux/Slices/cardSlice";

function Cart() {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cartReducer);
  console.log(cart);

  return (
    <>
      <div className="container-fluid px-3 px-md-5 py-4">

        <h2 className="fw-bold mb-4" style={{ color: "#111" }}>
          Cart Summary
        </h2>

        <div className="row g-4">

          <div className="col-sm-12 col-md-9">

            {cart?.length > 0 ? (
              <div className="table-responsive shadow-sm rounded">
                <table className="table table-bordered table-hover align-middle text-center mb-0">

                  <thead style={{ backgroundColor: "#111", color: "white" }}>
                    <tr className="text-center">
                      <td className="py-3">SR NO</td>
                      <td>Name</td>
                      <td>Image</td>
                      <td>Price</td>
                      <td>QTY</td>
                      <td>Total Price</td>
                      <td>Action</td>
                    </tr>
                  </thead>

                  <tbody>
                    {cart?.map((item, index) => (
                      <tr key={index}>

                        <td className="fw-semibold">{index + 1}</td>

                        <td className="fw-semibold">{item?.title}</td>

                        <td>
                          <img
                            src={item?.thumbnail}
                            alt=""
                            height={"120px"}
                            style={{
                              width: "100px",
                              objectFit: "contain",
                              borderRadius: "8px"
                            }}
                          />
                        </td>

                        <td className="fw-semibold">
                          ${item?.price}
                        </td>

                        <td>
                          <div className="d-flex justify-content-center align-items-center gap-2">

                            <button
                              className="btn btn-sm btn-dark"
                              onClick={() => dispatch(decreaseQuantity(item.id))}
                            >
                              -
                            </button>

                            <span className="border px-3 py-1 rounded bg-light">
                              {item?.quantity}
                            </span>

                            <button
                              className="btn btn-sm btn-dark"
                              onClick={() => dispatch(increaseQuantity(item.id))}
                            >
                              +
                            </button>

                          </div>
                        </td>

                        <td className="fw-bold">
                          ${item?.price * item?.quantity}
                        </td>

                        <td>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            <CiTrash className="fs-4" />
                          </button>
                        </td>

                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            ) : (
              <div className="text-center p-5 shadow-sm rounded">
                <h4 className="fw-bold">Your Cart is Empty</h4>
                <p className="text-secondary mb-0">
                  Add some products to your cart.
                </p>
              </div>
            )}

          </div>

          <div className="col-sm-12 col-md-3">

            <div
              className="p-4 border shadow rounded-3"
              style={{ backgroundColor: "#fff" }}
            >

              <h4 className="fw-bold mb-4">
                Order Summary
              </h4>

              <hr />

              <h5 className="d-flex justify-content-between mb-3">
                Total Items:
                <span className="fw-bold">{cart?.length}</span>
              </h5>

              <h5 className="d-flex justify-content-between mb-4">
                Total Amount:
                <span className="fw-bold text-success">
                  $
                  {cart?.reduce(
                    (prev, item) => prev + item.price * item.quantity,
                    0,
                  )}
                </span>
              </h5>

              <hr />

              <div className="d-grid">
                <button
                  className="btn btn-dark py-2 fw-bold"
                  onClick={() => dispatch(checkout())}
                >
                  Checkout
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Cart;
