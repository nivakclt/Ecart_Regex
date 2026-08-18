import { CiTrash } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import {increaseQuantity,decreaseQuantity,removeFromCart,checkout} from '../redux/Slices/cardSlice'

function Cart() {

  const dispatch = useDispatch();

  const { cart } = useSelector(state => state.cartReducer);
  console.log(cart);

  return (
    <>
      <div className="container-fluid">
        <h2 className="m-3">Cart Summary</h2>
        <div className="row">
          <div className="col-sm 12 col-md-9">
            {
              cart?.length > 0 ?
                <table className="table table-bordered">
                  <thead>
                    <tr className="text-center">
                      <td>SR NO</td>
                      <td>Name</td>
                      <td>Image</td>
                      <td>Price</td>
                      <td>QTY</td>
                      <td>Total Price</td>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      cart?.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>

                          <td>{item?.title}</td>

                          <td>
                            <img
                              src={item?.thumbnail}
                              alt=""
                              height={"250px"}
                            />
                          </td>

                          <td>
                            <span>${item?.price}</span>
                          </td>

                          <td className="d-flex flex-wrap gap-2">
                            <button
                              className="btn border"
                              onClick={() => dispatch(decreaseQuantity(item.id))}
                            >
                              -
                            </button>

                            {''}

                            <span className="border p-2 rounded bg-light">
                              {item?.quantity}
                            </span>

                            <button
                              className="btn border"
                              onClick={() => dispatch(increaseQuantity(item.id))}
                            >
                              +
                            </button>

                            {''}
                          </td>

                          <td>
                            <span>
                              ${item?.price * item?.quantity}
                            </span>
                          </td>

                          <td>
                            <button
                              className="btn border"
                              onClick={() => dispatch(removeFromCart(item.id))}
                            >
                              <CiTrash className="text-danger" />
                            </button>
                          </td>

                        </tr>
                      ))
                    }
                  </tbody>
                </table>
                : null
            }
          </div>

          <div className="col-sm 12 col-md-3">
            <div className="p-2 border border-2 shadow m-2">
              <h4>
                Total Items:
                <span>{cart?.length}</span>
              </h4>

              <h4>
                Total Amount:
                <span>
                  $
                  {cart?.reduce(
                    (prev, item) =>
                      prev + (item.price * item.quantity),
                    0
                  )}
                </span>
              </h4>

              <div className="d-grid">
                <button className="btn btn-primary" onClick={() => dispatch(checkout())}>
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