import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage'; // Example component
import Material from './Pages/Material'; // Example component
import Community from './Pages/Community'; // Example component
import Roadmaps from './Pages/Roadmaps'; // Example component
import SignIn from './Pages/Signin'; // Example component
import Login from './Pages/Login'; // Example component

const App = () => {
  return (
    <Router>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/material" element={<Material />} />
        <Route path="/community" element={<Community />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
