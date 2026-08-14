import { FaCartPlus } from "react-icons/fa"
import { FaHeartCirclePlus } from "react-icons/fa6"

function Home() {
  return (
    <>

        {/* <!-- Header--> */}
        <header className="py-5" style={{backgroundColor:"black"}}>
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">by your style</p>
                </div>
            </div>
        </header>
        {/* <!-- Section--> */}
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    {/* <!-- Product price--> */}
                                    $40.00 - $80.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-between">
                                <button className="btn">
                                    <FaCartPlus className="text-success"/>
                                </button>
                                <button className="btn">
                                    <FaHeartCirclePlus className="text-danger"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </section>
        
    </>
  )
}

export default Home