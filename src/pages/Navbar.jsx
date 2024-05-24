import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1e40af] text-white p-3">
      <div className="flex justify-between items-center">
        {/* <div className="text-xl">Logo</div> */}
        <div className="sm:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul className="hidden sm:flex justify-end items-center gap-6 text-lg">
          <Link to="/" className="border border-white px-3 py-2 rounded">
            Home
          </Link>
          <Link to="/about" className="border border-white px-3 py-2 rounded">
            About
          </Link>
          <Link
            to="/products"
            className="border border-white px-3 py-2 rounded"
          >
            Products
          </Link>
          <Link to="/service" className="border border-white px-3 py-2 rounded">
            Service
          </Link>
          <Link to="/contact" className="border border-white px-3 py-2 rounded">
            Contact Us
          </Link>
        </ul>
      </div>
      {isOpen && (
        <div className="sm:hidden grid grid-cols-2 gap-3 mt-3">
          <Link
            to="/"
            className="border border-white px-3 py-2 rounded col-span-2"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="border border-white px-3 py-2 rounded"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/products"
            className="border border-white px-3 py-2 rounded"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            to="/service"
            className="border border-white px-3 py-2 rounded"
            onClick={toggleMenu}
          >
            Service
          </Link>
          <Link
            to="/contact"
            className="border border-white px-3 py-2 rounded col-span-2"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
