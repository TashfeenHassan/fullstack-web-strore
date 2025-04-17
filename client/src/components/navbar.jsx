import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomNavbar() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg px-3"
      style={{
        backgroundColor: "#F8D7DA", // Pastel pinkish-white
        borderBottomLeftRadius: "30px",
        borderBottomRightRadius: "30px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Left side: Menu button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Center: Brand name (or logo) */}
      <a className="navbar-brand mx-auto fw-bold" href="/">
        My eCommerce
      </a>

      {/* Right side: Search bar */}
      <form className="d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          style={{
            backgroundColor: searchFocused ? "#FFC0CB" : "#F8E8EE",
            transition: "background-color 0.3s",
            borderRadius: "20px",
            border: "none",
            padding: "5px 15px",
          }}
        />
      </form>

      {/* Dropdown Menu */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
<div>
  <p>
    This is a custom navbar component styled with Bootstrap. It features a sticky position, a brand name in the center, and a search bar on the right side. The navbar has a pastel pinkish-white background and rounded corners. The search bar changes color when focused, providing a subtle interactive effect.
  </p>
</div>
export default CustomNavbar;
