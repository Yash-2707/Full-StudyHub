import React, { useState } from 'react';
import axios from 'axios';

const Team = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmitFeedback = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post({
        method: 'POST',
        baseURL: 'http://localhost:5000',
        url: '/feedback',
        data: {
          email: email,
          feedback: feedback,

      }
    });

      if (response.status === 200) {
        // Handle success
        setMessage('Thank you for your feedback!');
        setEmail('');
        setFeedback('');
      } else {
        // Handle any errors returned from the server
        setMessage(response.data.message || 'An error occurred, please try again.');
      }
    } catch (error) {
      // Handle network errors or unexpected errors
      console.error('Error submitting feedback:', error);
      setMessage(`An error occurred. Please try again. ${error.message}`);
    }
  };

  return (
    <>
      {/* Team Members Section */}
      <div className="team flex justify-center items-center space-x-6 p-6 mt-10 pt-10">
        {/* Team Members go here... */}
      </div>

      {/* Feedback Section */}
      <div className="feedback py-8 mt-16 pt-16">
        <h2 className="text-5xl font-bold text-center mb-6">
          As a Growing Platform, we welcome your feedback
        </h2>
        <div className="flex justify-center mt-20 pt-24">
          <form
            id="feedbackForm"
            className="w-full max-w-2xl bg-gray-900 bg-opacity-40 p-8 rounded-lg shadow-lg border-4 border-[#3fcaca]"
            onSubmit={handleSubmitFeedback}
          >
            {/* Email Input */}
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail1"
                className="block text-white text-sm font-bold mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                className="w-full p-2 rounded border-2 border-gray-300 focus:border-[#3fcaca] focus:outline-none"
                id="exampleInputEmail1"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Feedback Textarea */}
            <div className="form-group mb-6">
              <label
                htmlFor="feedbackTextarea"
                className="block text-white text-sm font-bold mb-2"
              >
                Your Feedback
              </label>
              <textarea
                className="w-full p-2 rounded border-2 border-gray-300 text-black focus:border-[#3fcaca] focus:outline-none"
                id="feedbackTextarea"
                rows="4"
                placeholder="Enter your feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#3fcaca] hover:bg-[#35b0b0] text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              >
                Submit Feedback
              </button>
            </div>

            {/* Display Success or Error Message */}
            {message && (
              <p className="text-center text-lg mt-4 text-green-400">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Team;
