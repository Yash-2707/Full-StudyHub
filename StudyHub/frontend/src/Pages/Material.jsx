import React from 'react'
import Navbar from '../Components/Navbar'
import Content from '../Components/Content'

const Material = () => {
  return (
    <>
      <Navbar />
      <Content />
      <footer className="py-16 px-8  text-gray-300 border-t-4 border-[#3fcaca]">
        <div className="container mx-auto grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold text-white mb-4">STUDY<span className="text-red-500">HUB</span></h1>
            <p className="mb-4">We help learners unlock their potential with personalized learning paths.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500"><i className="fab fa-facebook-f fa-2x"></i></a>
              <a href="#" className="hover:text-red-500"><i className="fab fa-linkedin-in fa-2x"></i></a>
              <a href="#" className="hover:text-red-500"><i className="fab fa-twitter fa-2x"></i></a>
              <a href="#" className="hover:text-red-500"><i className="fab fa-instagram fa-2x"></i></a>
            </div>
          </div>

          <div className="ml-20">
            <h2 className="text-xl font-semibold mb-4 text-[#3fcaca]">About Us</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">Services</a></li>
              <li><a href="#" className="hover:text-red-500">Pricing</a></li>
              <li><a href="#" className="hover:text-red-500">Our Teams</a></li>
              <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
            </ul>
          </div>

          <div className="ml-24">
            <h2 className="text-xl font-semibold mb-4 text-[#3fcaca]">Contact Info</h2>
            <p>Vadodara, Gujarat, INDIA</p>
            <p className="mt-2">Phone: <a href="tel:+91123456789" className="hover:text-[#3fcaca]">(+91) 123456789</a></p>
            <p className="mt-2">Email: <a href="mailto:studyhub17@gmail.com" className="hover:text-[#3fcaca]">studyhub17@gmail.com</a></p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Material