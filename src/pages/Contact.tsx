import React, { useState } from "react";
import { Link } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., send form data to the server)
    console.log("Form submitted: ", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-md rounded-lg">
            {submitted && (
              <div className="text-green-500 text-center mb-6">
                Thank you! We will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 px-4 py-2 w-full border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 px-4 py-2 w-full border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 px-4 py-2 w-full border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  rows={5}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Customer Service Card */}
          <div>
            <div className="bg-white p-8 shadow-md rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Need Assistance?</h3>
              <div className="flex items-center space-x-4">
                {/* <img
                  src="https://via.placeholder.com/100"
                  alt="Customer Service"
                  className="w-24 h-24 rounded-full object-cover"
                /> */}
                <div>
                  <p className="text-lg font-medium">Sarah Johnson</p>
                  <p className="text-gray-500">Customer Service Rep</p>
                  <p className="text-gray-500">Phone: (123) 456-7890</p>
                  <p className="text-gray-500">Email: support@carwash.com</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white p-8 shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook

                </Link>
                <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Facebook

                </Link>
                <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Facebook

                </Link>
                <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                Facebook

                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
