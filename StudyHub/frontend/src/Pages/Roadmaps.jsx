import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const Roadmaps = () => {
  const [formData, setFormData] = useState({
    language: '',
    skillLevel: '',
    field: '',
  });

  const [fields] = useState([
    { name: 'Data Science', suitableLanguages: ['Python'] },
    { name: 'Web Development', suitableLanguages: ['JavaScript', 'Python'] },
    { name: 'Full Stack Development', suitableLanguages: ['JavaScript', 'Python', 'Java'] },
  ]);

  const [languages] = useState([
    'Python',
    'JavaScript',
    'Java',
    'C++',
    'Ruby',
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const field = fields.find(f => f.name === formData.field);
    if (field && field.suitableLanguages.includes(formData.language)) {
      const response = await fetch('/api/recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } else {
      alert('The selected language is not suitable for the chosen field.');
    }
  };

  return (
    <>
      <Navbar />
      <div className=" min-h-screen p-10">
        <div className="text-center p-10  rounded-lg shadow-lg">
          <h2 className="text-5xl text-[#3fcaca] mb-10 font-bold">Create Your Personalized Roadmap</h2>

          <h3 className="text-3xl mb-10 text-gray-300 leading-relaxed">
            Welcome to Study<span className="text-red-500">Hub!</span> We are here to guide your learning journey. <br />
            Use the form below to create a personalized roadmap tailored to your preferences, skill level, and field.
            <br />
            Whether you're just starting out or advancing, this roadmap will help you focus on the right materials and courses. 
            <br />
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#3fcaca] to-red-500">
              Empower Your Learning Journey
            </span>
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8 items-center bg-[#2d3748] p-10 rounded-lg shadow-lg">
            <label className="text-2xl text-white block">
              Preferred Programming Language:
              <select name="language" onChange={handleChange} value={formData.language} className="ml-4 text-black text-xl py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3fcaca]">
                <option value="">Select Language</option>
                {languages.map((language, index) => (
                  <option key={index} value={language}>{language}</option>
                ))}
              </select>
            </label>

            <label className="text-2xl text-white block">
              Current Skill Level:
              <select name="skillLevel" onChange={handleChange} value={formData.skillLevel} className="ml-4 text-black text-xl py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3fcaca]">
                <option value="">Select Skill Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </label>

            <label className="text-2xl text-white block">
              Field of Interest:
              <select name="field" onChange={handleChange} value={formData.field} className="ml-4 text-black text-xl py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3fcaca]">
                <option value="">Select Field</option>
                {fields.map((field, index) => (
                  <option key={index} value={field.name}>{field.name}</option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              className="bg-gradient-to-r from-[#3fcaca] to-[#0083b0] p-4 rounded-full text-xl text-white hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
            >
              Generate Roadmap
            </button>
          </form>
        </div>
      </div>

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
  );
};

export default Roadmaps;
