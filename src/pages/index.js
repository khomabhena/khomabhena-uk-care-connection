import React, { useState } from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import HeroSection2 from '../components/HeroSection2'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Login from '../components/login'
import Logout from '../components/logout'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import ResetPassword from '../components/ResetPassword'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'
import Signup from '../components/Signup'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
        <Profile />
        {/* <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} /> */}
        {/* <HeroSection /> */}
        {/* <HeroSection2 />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <Services />
        <InfoSection {...homeObjThree} />
        <Footer /> */}
    </>
  )
}

export default Home