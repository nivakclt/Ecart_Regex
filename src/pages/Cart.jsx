
import { CiTrash } from "react-icons/ci";


function Cart() {
  return (
    <>
    <div className="container-fluid">
      <h2 className="m-3">Cart Summary</h2>
      <div className="row">
        <div className="col-sm 12 col-md-9">
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
              <tr>
                <td>1</td>
                <td>Nothing 3a</td>
                <td><img src="https://cdn.shopify.com/s/files/1/0586/3270/0077/files/Arbok-Primary-White.png?v=1750839180" alt=""
                height={'250px'} /></td>
              
              <td>
                Price $3.99
              </td>
              <td className="d-flex flex-wrap gap-2">
                <button className="btn border">-</button>{''}
                <span className="border p-2 rounded bg-light">1</span>
                <button className="btn border">+</button>{''}
              </td>
              <td>
                Price $3.99
                </td>
                <td>
                    <button className="btn">
                      <CiTrash className="text-danger"/>
                    </button>
                </td>
                </tr>
            </tbody>
          </table>
        </div>
        <div className="col-sm 12 col-md-3">
          <div className="p-2 border border-2 shadow m-2">
            <h4>Total Items:</h4>
            <h4>Total Amount:</h4>
            <div className="d-grid">
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart