import React from 'react'
import '../App.css'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Courses from '../Components/Courses'
import Team from '../Components/Team'
import ChatBot from '../Components/ChatBot'
const HomePage = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Courses/>
    <Team/>
    <ChatBot/>
    </>
  )
}

export default HomePage