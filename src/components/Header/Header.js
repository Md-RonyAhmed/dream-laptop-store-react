import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <nav className="text-black nav justify-content-between align-items-center navigation">
      <div className="ps-5">
        <h2>Dream Store</h2>
      </div>
      <div>
        <a className="mx-3" href="/">
          Home
        </a>
        <a className="mx-3" href="/about">
          About us
        </a>
        <a className="mx-3" href="/cart">
          Cart
        </a>
      </div>
    </nav>
  );
};

export default Header;
