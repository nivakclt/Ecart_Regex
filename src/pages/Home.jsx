
import { useEffect } from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchProducts,
  nextPage,
  prevPage
} from "../redux/Slices/ProductSlice";

import { addtoCart } from "../redux/Slices/cardSlice";
import { addtoWishlist } from "../redux/Slices/wishSlices";

import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

function Home() {
  const dispatch = useDispatch();

  const {
    products,
    error,
    pending,
    currentPage
  } = useSelector(state => state.productReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productsPerPage = 10;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const endIndex = currentPage * productsPerPage;
  const startIndex = endIndex - productsPerPage;

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(nextPage());
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(prevPage());
    }
  };

  return (
    <main className="home-page">

      {/* HERO SECTION */}

      <section className="home-hero">
        <div className="container">
          <p className="hero-eyebrow">REDUXCART COLLECTION</p>

          <h1>Find Your Style.</h1>

          <p className="hero-description">
            Discover products made for your everyday life.
          </p>

          <a href="#products" className="hero-link">
            Explore Collection
          </a>
        </div>
      </section>

      {/* PRODUCT SECTION */}

      <section className="home-products" id="products">
        <div className="container-fluid px-4 px-lg-5">

          <div className="products-heading">
            <div>
              <p className="section-eyebrow">OUR COLLECTION</p>
              <h2>Popular Products</h2>
            </div>

            <span className="products-count">
              {products.length} Products
            </span>
          </div>

          {pending ? (
            <div className="home-message">
              <p>Loading products...</p>
            </div>
          ) : error?.length > 0 ? (
            <div className="home-message error-message">
              <p>{error}</p>
            </div>
          ) : products.length === 0 ? (
            <div className="home-message">
              <p>No products available.</p>
            </div>
          ) : (
            <div className="home-product-grid">

              {products.slice(startIndex, endIndex).map(product => (

                <article className="home-product-card" key={product.id}>

                  <Link
                    to={`/product/${product.id}`}
                    className="product-image-link"
                  >
                    <div className="product-image-box">
                      <img
                        src={product?.thumbnail}
                        alt={product?.title}
                        loading="lazy"
                      />
                    </div>
                  </Link>

                  <div className="product-info">

                    <div className="product-details">
                      <Link to={`/product/${product.id}`}>
                        <h3>{product?.title}</h3>
                      </Link>

                      <p>{product?.category}</p>

                      <h4>${product?.price}</h4>
                    </div>

                    <div className="product-actions">

                      <button
                        type="button"
                        className="product-action-btn"
                        onClick={() => dispatch(addtoCart(product))}
                        title="Add to Cart"
                        aria-label="Add to Cart"
                      >
                        <FaCartPlus />
                      </button>

                      <button
                        type="button"
                        className="product-action-btn"
                        onClick={() => dispatch(addtoWishlist(product))}
                        title="Add to Wishlist"
                        aria-label="Add to Wishlist"
                      >
                        <FaHeart />
                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>
          )}

          {/* PAGINATION */}

          {!pending && !error?.length && totalPages > 1 && (
            <div className="home-pagination">

              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                <GrFormPrevious />
              </button>

              <span>
                {currentPage} / {totalPages}
              </span>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                <MdNavigateNext />
              </button>

            </div>
          )}

        </div>
      </section>

    </main>
  );
}

export default Home;
