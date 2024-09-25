import React, { useState } from 'react';

const ChatBot = () => {
    const [feeling, setFeeling] = useState(''); // State to store the current feeling
    const [chatVisible, setChatVisible] = useState(false); // State to manage chat visibility
    const [userInput, setUserInput] = useState(''); // State to store user input
    const [botResponse, setBotResponse] = useState(''); // State to store bot response

    // Function to handle button click
    const handleFeelingClick = (selectedFeeling) => {
        setFeeling(selectedFeeling);
        setChatVisible(selectedFeeling === 'Stressed' || selectedFeeling === 'Anxious');
    };

    // Function to get tips based on the selected feeling
    const getTips = () => {
        switch (feeling) {
            case 'Stressed':
                return (
                    <ul className="list-disc text-2xl mb-6">
                        <li className="mb-2">Take deep breaths. Inhale for 4 seconds, hold for 4, and exhale for 4.</li>
                        <li className="mb-2">Try progressive muscle relaxation exercises.</li>
                        <li className="mb-2">Listen to calming music or nature sounds.</li>
                        <li className="mb-2">Reach out to a friend or loved one to talk.</li>
                    </ul>
                );
            case 'Anxious':
                return (
                    <ul className="list-disc text-2xl mb-6">
                        <li className="mb-2">Practice mindfulness or meditation for a few minutes.</li>
                        <li className="mb-2">Focus on grounding techniques like the 5-4-3-2-1 exercise.</li>
                        <li className="mb-2">Write down your worries and identify what you can control.</li>
                        <li className="mb-2">Take a short break, walk, or do light exercise.</li>
                    </ul>
                );
            case 'Calm':
                return (
                    <ul className="list-disc text-2xl mb-6">
                        <li className="mb-2">Maintain your calm by doing a gratitude exercise.</li>
                        <li className="mb-2">Engage in a hobby or creative activity you enjoy.</li>
                        <li className="mb-2">Plan your day or week with a focus on self-care.</li>
                        <li className="mb-2">Continue practicing deep breathing and positive affirmations.</li>
                    </ul>
                );
            default:
                return null;
        }
    };

    // Function to handle user input and provide bot response
    const handleChatSubmit = (e) => {
        e.preventDefault();
        let response = '';
        switch (feeling) {
            case 'Stressed':
                response = 'I understand you’re feeling stressed. Try taking deep breaths or talking to someone you trust.';
                break;
            case 'Anxious':
                response = 'It’s okay to feel anxious. Practice mindfulness and remember to take things one step at a time.';
                break;
            default:
                response = 'Feel free to share more about how you’re feeling.';
                break;
        }
        setBotResponse(response);
        setUserInput(''); // Clear input after submission
    };

    return (
        <>
            <div className="mt-16 pt-14 flex flex-col items-center">
                <p className="text-4xl font-semibold text-center mb-6">
                    Hello! I'm your Stress Relief Companion. 😊 I'm here to help you manage stress and stay positive. How are you feeling today?
                </p>

                <div className="mt-4">
                    <p className="text-2xl text-center mb-4">How are you feeling right now?</p>
                    <div className="flex space-x-4 mt-2 justify-center">
                        <button
                            className="bg-[#3fcaca] text-black py-3 px-6 rounded-lg hover:bg-[#35b0b0] text-2xl"
                            onClick={() => handleFeelingClick('Stressed')}
                        >
                            Stressed 😟
                        </button>
                        <button
                            className="bg-[#3fcaca] text-black py-3 px-6 rounded-lg hover:bg-[#35b0b0] text-2xl"
                            onClick={() => handleFeelingClick('Anxious')}
                        >
                            Anxious 😰
                        </button>
                        <button
                            className="bg-[#3fcaca] text-black py-3 px-6 rounded-lg hover:bg-[#35b0b0] text-2xl"
                            onClick={() => handleFeelingClick('Calm')}
                        >
                            Calm 😊
                        </button>
                    </div>
                </div>

                {/* Display tips based on the current feeling */}
                {feeling && (
                    <div className="mt-6 text-center">
                        <h3 className="text-3xl font-semibold text-[#3fcaca] mb-4">Here are some tips for you:</h3>
                        {getTips()}
                        {chatVisible && (
                            <div className="mt-6 text-center">
                                <form onSubmit={handleChatSubmit} className="flex flex-col items-center">
                                    <textarea
                                        className="border border-gray-300 p-4 rounded-lg w-full max-w-md text-lg mb-4 text-black"
                                        rows="4"
                                        placeholder="Type your problem here..."
                                        value={userInput}
                                        onChange={(e) => setUserInput(e.target.value)}
                                    />
                                    <button className="bg-[#3fcaca] text-black py-3 px-6 rounded-lg hover:bg-[#35b0b0] text-2xl" type="submit">
                                        Send
                                    </button>
                                </form>
                                {botResponse && (
                                    <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-100 text-black">
                                        <p className="text-lg">{botResponse}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="border-t-4 border-[#3fcaca] my-8"></div> {/* Added line above the footer */}

            <footer className="py-16 px-8  text-gray-300  border-[#3fcaca]">
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

export default ChatBot;
