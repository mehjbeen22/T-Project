import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#1e40af] text-white p-3">
      <ul className="flex justify-end items-center gap-6 text-lg ">
        <Link to="/" className="border border-white px-3 rounded  ">
          Home
        </Link>
        <Link to="/about" className="border border-white px-3 rounded  ">
          About
        </Link>

        <Link to="/products" className="border border-white px-3 rounded  ">
          Products
        </Link>

        <Link to="/service" className="border border-white px-3 rounded  ">
          Service
        </Link>
        <Link to="/contact" className="border border-white px-3 rounded  ">
          Contact Us{' '}
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
