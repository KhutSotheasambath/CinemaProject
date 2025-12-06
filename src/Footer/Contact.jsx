import React from "react";
import contact from "../image/contact.jpg";
import { Link } from "react-router-dom";
import { FaPhone, FaFacebookMessenger, FaEnvelope } from 'react-icons/fa';
function Contact() {
  return (
    <div className="mt-[200px]">
      <div>
        <img
          src={contact}
          alt="contact"
          className="rounded-2xl mt-5 h-full w-full object-cover"
        />
      </div>
      <div className="flex gap-3 m-4 font-medium">
        <Link to="/">
          <p className="text-white/50 text-xl">Home</p>
        </Link>
        <p>/</p>
        <p className="text-white text-xl">Contact Us</p>
      </div>
      <div>
        <p className="text-white text-4xl font-medium m-4 mt-10">Contact Info</p>
      </div>
      <div className="min-h-screen p-8 mt-[50px] m-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Hotline Card */}
        <div className="bg-black/20 rounded-lg overflow-hidden border border-white/50">
          <div className="bg-black/50 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Hotline</h2>
          </div>
          
          <div className="p-6 space-y-4">
            {/* Phone Number */}
            <div className="flex items-center gap-4 bg-black/20 rounded-lg p-4 hover:bg-gray-750 transition-colors">
              <div className="bg-green-500 p-3 rounded-full">
                <FaPhone className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-300 text-lg">081 300 400</span>
            </div>

            {/* Messenger */}
            <div className="flex items-center gap-4 bg-black/20  rounded-lg p-4 hover:bg-gray-750 transition-colors">
              <div className="bg-purple-500 p-3 rounded-full">
                <FaFacebookMessenger className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-300 text-lg">Messenger</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 bg-black/20  rounded-lg p-4 hover:bg-gray-750 transition-colors">
              <div className="bg-red-500 p-3 rounded-full">
                <FaEnvelope className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-300 text-lg">info@legend.com.kh</span>
            </div>
          </div>
        </div>

        {/* Advertising & Partnership Card */}
        <div className="bg-black/20 rounded-lg overflow-hidden border border-white/50">
          <div className="bg-black/50  px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Advertising & Partnership</h2>
          </div>
          
          <div className="p-6 space-y-4">
            {/* Phone Number */}
            <div className="flex items-center gap-4 bg-black/20 rounded-lg p-4 hover:bg-gray-750 transition-colors">
              <div className="bg-green-500 p-3 rounded-full">
                <FaPhone className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-300 text-lg">087 888 045</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 bg-black/20 rounded-lg p-4 hover:bg-gray-750 transition-colors">
              <div className="bg-red-500 p-3 rounded-full">
                <FaEnvelope className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-300 text-lg">sales@legend.com.kh</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
    
  );
}

export default Contact;
