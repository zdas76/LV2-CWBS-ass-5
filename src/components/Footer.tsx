import React from "react";
import { Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Importing Lucid Icons
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Logo & About */}
        <div>
          <img
            src="https://via.placeholder.com/150x50" // Add your logo here
            alt="Car Wash Logo"
            className="mb-4"
          />
          <p className="text-sm">
            Premium car wash services with the latest technology and eco-friendly products. We care for your car like it’s our own.
          </p>
        </div>

        {/* Menu Links */}
        <div>
          <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#pricing" className="hover:underline">Pricing</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="font-bold mb-4 text-lg">Newsletter</h3>
          <p className="text-sm mb-4">Subscribe to get the latest updates and offers!</p>
          <form>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-l-md text-black"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
              >
                <Mail size={18} />
              </button>
            </div>
          </form>
        </div>

        {/* Social Media & Terms */}
        <div className="">
          <h3 className="font-bold mb-4 text-lg">Follow Us</h3>
          <div className="flex space-x-4 mb-6 ">
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={24} className="hover:text-blue-500" />
            </Link>
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={24} className="hover:text-blue-400" />
            </Link>
            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} className="hover:text-pink-500" />
            </Link>
            <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} className="hover:text-blue-700" />
            </Link>
          </div>
          
          <div className="space-y-2 text-sm">
            <Link to="#terms" className="hover:underline">Terms of Service</Link><br/>
            <Link to="#privacy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 border-t border-gray-700 pt-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} Car Wash Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
