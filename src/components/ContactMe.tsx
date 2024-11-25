'use client'
import { useState } from 'react';
import BorderMagicBtn from './BorderMagicBtn';
import { IoCopyOutline } from 'react-icons/io5';
import { GlobeDemo } from './GlobeDemo';


const ContactMe = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend)
  };

  return (
    <section className="bg-transparent py-12 px-6 lg:px-20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="heading">Contact</h1>
      </div>
  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* <div className="flex justify-between items-center"> */}
        {/* Contact Form */}
        <div className=" p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 bg-transparent border  dark:border-white rounded-lg text-black dark:text-white"
                placeholder="Enter your name"
                required
              />
            </div>
  
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 bg-transparent border dark:border-white rounded-lg text-black dark:text-white"
                placeholder="Enter your email"
                required
              />
            </div>
  
            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border bg-transparent dark:border-white rounded-lg text-black dark:text-white"
                rows={2}
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 dark:bg-blue-700 text-white py-3 rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
  
        {/* Contact Info */}
        {/* <GlobeDemo/> */}
        <div className=" bg-transparent p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold bg-transparent text-black dark:text-white mb-4">Contact Information</h2>
          <p className="bg-transparent text-black dark:text-white mb-4">Feel free to reach out to us through the following contact details or visit us at our office location.</p>
  
          <div className="space-y-4">
            <div className="flex items-center bg-transparent text-black dark:text-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13h-6a2 2 0 01-2-2V5a2 2 0 012-2h6m9 2v10m0 6v.01M9 12h.01" />
              </svg>
              <span className="ml-2">Email: support@traveltips.com</span>
            </div>
  
            <div className="flex items-center bg-transparent text-black dark:text-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 19.121A3 3 0 014 17.09V8a3 3 0 013-3h10a3 3 0 013 3v9.09a3 3 0 01-1.121 2.03l-5 3a3 3 0 01-3.758 0l-5-3z" />
              </svg>
              <span className="ml-2">Phone: +1 (555) 123-4567</span>
            </div>
  
            <div className="flex items-center bg-transparent text-black dark:text-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8V4m0 0L8.5 7.5m3.5-3.5l3.5 3.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="ml-2">Location: 123 Travel Lane, Adventure City</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default ContactMe;
