import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItemCount } = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1e40af] text-white p-3 fixed top-0 w-full z-50">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div onClick={toggleMenu} className="sm:hidden mr-4">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
            <ul className="hidden sm:flex justify-start items-center gap-6 text-lg">
              <Link to="/" className="border border-white px-2 py-1 rounded">
                Home
              </Link>
              <Link
                to="/about"
                className="border border-white px-2 py-1 rounded"
              >
                About
              </Link>
              <Link
                to="/products"
                className="border border-white px-2 py-1 rounded"
              >
                Products
              </Link>
              <Link
                to="/service"
                className="border border-white px-2 py-1 rounded"
              >
                Service
              </Link>
              <Link
                to="/contact"
                className="border border-white px-2 py-1 rounded"
              >
                Contact Us
              </Link>
            </ul>
          </div>
          <Link to="/cart" className="relative flex">
            <FaShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
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
            <Link
              to="/cart"
              className="border border-white px-3 py-2 rounded col-span-2"
              onClick={toggleMenu}
            >
              Cart
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
