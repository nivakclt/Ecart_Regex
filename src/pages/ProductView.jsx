import { FaStar } from "react-icons/fa6"


function ProductView() {
  return (
    <>
    <div className="container-fluid">
      <h2>Product Details</h2>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <img src="https://cdn.shopify.com/s/files/1/0586/3270/0077/files/Arbok-Primary-White.png?v=1750839180" alt="" width={'100%'}/>
          </div>
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center ">
            <h2>Nothing 3a</h2>
            <h4 className="text-end">Category:<p>SmartPhone</p></h4>
            <p style={{textAlign:"Justify"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus autem, magnam impedit minima quam, natus harum reprehenderit velit magni culpa ex ipsa voluptatum incidunt, distinctio earum officiis assumenda! Architecto, facere.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur reprehenderit ipsam vel nulla distinctio id labore assumenda obcaecati consequuntur deserunt architecto a nostrum voluptatum soluta, eius quo suscipit inventore rerum!
            </p>
            <h6>Rating:<span><FaStar className="text-warning"/>{''}</span></h6>
          </div>

        </div>
      </div>
    </div>
    </>
   )
}

export default ProductView