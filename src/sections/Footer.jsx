import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1e40af]">
      <div className="p-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-2 min-w-[300px] p-4 text-white">
            <h5 className="font-bold text-2xl mb-4">Disclaimer</h5>
            <p className="text-sm">
              printmartshop Tech is an independent third-party service provider
              for on-demand tech support and namedprintmartshop Tech. We are not
              affiliated with any third-party brands unless explicitly
              specified. Any use of Trademarks, Brands, Products, and Services
              mentioned on this site is purely referential. namedprintmartshop
              Tech hereby disclaims any sponsorship, affiliation, or endorsement
              of or by any such third party. namedprintmartshop Tech services
              offered by us are also available directly from the website of the
              brand owner. namedprintmartshop Tech is not affiliated with,
              endorsed by, or sponsored by HP, Canon, Epson, Brother, or any
              other printer brands mentioned in our service offerings.
            </p>
          </div>
          <div className="flex-1 min-w-[150px] p-4 text-white">
            <h5 className="font-bold text-2xl mb-4">Policies</h5>
            <ul className="leading-8">
              <li>
                <Link to="/faqs" className="underline hover:text-blue-500">
                  Faq's
                </Link>
              </li>
              <li>
                <Link
                  to="/privacypolicy"
                  className="underline hover:text-blue-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/t&c" className="underline hover:text-blue-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refundAndreturn"
                  className="underline hover:text-blue-500"
                >
                  Return & Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[150px] p-4 text-white">
            <h5 className="font-bold text-2xl mb-4">Quick links</h5>
            <ul className="leading-8">
              <li>
                <a href="#" className="underline hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <Link to="/about" className="underline hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="underline hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[150px] p-4 text-white leading-8">
            <h5 className="font-bold mb-4 text-2xl">Contact Us</h5>
            <p>Email: support@Printmartshop</p>
            <p>Address: 3942 Oak Woods Ct, Douglasville, GA 30135</p>
          </div>
        </div>
      </div>
      <div className="p-4 bg-black">
        <div className="text-center">
          <p className="text-gray-300">Copyright © 2024 - Printmartshop</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
