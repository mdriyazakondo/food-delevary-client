import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-[1500px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">Foodie</h1>
          <p className="text-gray-400">
            Delicious meals delivered to your doorstep. Enjoy the taste of
            freshness!
          </p>
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
            <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" />
            <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Help Center
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to get the latest updates and offers.
          </p>
          <div className="flex border border-blue-600 rounded-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-sm  focus:outline-none"
            />
            <button className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-r-sm hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Foodie. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
