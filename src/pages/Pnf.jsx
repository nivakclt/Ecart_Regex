
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

function Pnf() {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center text-center"
      style={{
        minHeight: "75vh",
        backgroundColor: "#f8f8f8"
      }}
    >
      <div>

        <FaExclamationTriangle
          className="text-danger mb-3"
          style={{ fontSize: "65px" }}
        />

        <h1
          className="fw-bold"
          style={{ fontSize: "100px", color: "#111" }}
        >
          404
        </h1>

        <h2 className="fw-bold mb-3">
          Page Not Found!
        </h2>

        <p className="text-secondary mb-4">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="btn btn-dark px-4 py-2"
        >
          Back to Home
        </Link>

      </div>
    </div>
  )
}

export default Pnf
