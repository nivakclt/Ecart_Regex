import { useEffect,useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";

function Home() {
    const dispatch=useDispatch();

    
    const {products,error,pending}=useSelector(state=>state.productReducer)
    console.log(products)



    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch])


    
  return (
    <>

        {/* <!-- Header--> */}
        <header className="py-5" style={{backgroundColor:"black"}}>
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder text-light">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">by your style</p>
                </div>
            </div>
        </header>

        {/* <!-- Section--> */}
       
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">

          {
          pending ? (
            <div className="text-center">
              <h3>Loading...</h3>
            </div>
          ) : error?.length > 0 ? (
            <div className="text-center text-danger">
              <h3>{error}</h3>
            </div>
          ) : (
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

              {products.map((product) => (
                <div className="col mb-5" key={product.id}>
                  <div className="card h-100">

                    <Link to={`/product/${product.id}`}>
                      <img
                        className="card-img-top"
                        src={product?.thumbnail}
                        alt={product?.title}
                      />
                    </Link>

                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">
                          {product?.title}
                        </h5>

                        ${product?.price}
                      </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-around">

                      <Link
                        to="/cart"
                        className="text-success"
                      >
                        <FaCartPlus />
                      </Link>

                      <Link
                        to="/wishlist"
                        className="text-danger"
                      >
                       <FaHeartCirclePlus/>
                      </Link>

                    </div>
                  </div>
                </div>
              ))}

            </div>
          )}

        </div>
      </section>
        </>

  )
}

export default Home