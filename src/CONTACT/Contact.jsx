import React from "react";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-[13px] sm:text-[16px] mt-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Contact Details */}
        <div className="bg-gray-800 p-8 w-full rounded-lg shadow-lg text-white">
          <h2 className="text-blue-500 text-sm font-bold">Get In Touch</h2>
          <h1 className="text-3xl font-bold my-4">
            Seamless Communication, Global Impact.
          </h1>
          <p className="text-gray-400 mb-6">
            Our seamless communication approach ensures that no matter where you are in the world, we collaborate effectively to achieve a global impact. We prioritize clear, timely interactions to keep your projects on track and aligned with your vision.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-blue-500 h-[50px] w-[50px] flex justify-center items-center rounded-full">
                <i className="fas fa-map-marker-alt text-white text-xl"></i>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">Head Office</h4>
                <p className="text-gray-400 w-[100px] sm:w-full">North Kafrul, Dhaka, Bangladesh-Asia/Dhaka</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-blue-500 h-[50px] w-[50px] flex justify-center items-center rounded-full">
                <i className="fas fa-phone-alt text-white text-xl"></i>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">Let's Talk</h4>
                <p className="text-gray-400 w-[100px] sm:w-full">Phone No: +8801741987566</p>
                <p className="text-gray-400 w-[100px] sm:w-full">WhatsApp: +8801741987566</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-blue-500 h-[50px] w-[50px] flex justify-center items-center rounded-full">
                <i className="fas fa-envelope text-white text-xl"></i>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">Email Support</h4>
                <p className="text-gray-400 w-[100px] sm:w-full">diffusionfive@gmail.com</p>
                <p className="text-gray-400 w-[100px] sm:w-full">shahed32156@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-blue-500 h-[50px] w-[50px] flex justify-center items-center rounded-full">
                <i className="fas fa-clock text-white text-xl"></i>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">Working Hours</h4>
                <p className="text-gray-400">Saturday-Thursday</p>
                <p className="text-gray-400">10am - 11pm</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-white mb-4">Follow our social media</h3>
            <ul className="flex items-center justify-center sm:justify-start gap-3 text-white text-2xl">
            <a href="https://www.facebook.com/profile.php?id=61560502701437&mibextid=ZbWKwL" target='_blank'><FaFacebook className='text-white text-2xl cursor-pointer' /></a>
                <a href="https://wa.me/8801741987566?text=Hello!" target="_blank" rel="noopener noreferrer"><FaWhatsapp className='text-white text-2xl cursor-pointer' /></a>
                <a href="https://www.linkedin.com/company/diffusion-five/" target='_blank'><FaLinkedin className='text-white text-2xl cursor-pointer' /></a>
                <a href="mailto:diffusionfive@gmail.com" target='_blank'><FaEnvelope className='text-white text-2xl cursor-pointer' /></a>
          </ul>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-white text-3xl font-bold mb-6">Send us a message</h2>
          <p className="text-gray-400 mb-8">Please feel free to send us any questions, feedback or suggestions you might have.</p>
          
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 bg-gray-700 duration-500 outline-none text-white rounded focus:shadow-blue-500 shadow-md focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 bg-gray-700 duration-500 outline-none text-white rounded focus:shadow-blue-500 shadow-md focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="Phone"
                className="p-3 bg-gray-700 duration-500 outline-none text-white rounded focus:shadow-blue-500 shadow-md focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 bg-gray-700 duration-500 outline-none text-white rounded focus:shadow-blue-500 shadow-md focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 bg-gray-700 duration-500 outline-none text-white rounded mt-4 focus:shadow-blue-500 shadow-md focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 bg-gray-700 duration-500 outline-none text-white rounded mt-4 focus:shadow-blue-500 shadow-md focus:outline-none"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full mt-4 p-3 bg-gradient-to-r from-purple-500 to-red-500 text-white font-semibold rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
