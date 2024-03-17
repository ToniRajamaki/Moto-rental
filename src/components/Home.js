import "../App.css"
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Search from '../components/Search'
import Inventory from '../components/Inventory'
import WhyUs from '../components/WhyUs'
import Achievements from '../components/Achievements'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Testi from '../components/Testi'
import CallToActionCard from '../components/CallToActionCard'
import SellingSection from "../components/SellingSection"
import SpecialOffer from '../components/SpecialOffer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const BR = () => {
  return (
    <div className='section-break'>
      <br></br> <br></br>
      <br></br> <br></br>
    </div>
  )
}

const baseURL = "/moto-rental";

function Home() {
  return (
    <div className='App'>
      <SpecialOffer />
      <Navbar />
      <Hero />
      <BR />
      <Search />
      <BR />
      <Inventory />
      <BR />
      <WhyUs />
      <BR />
      <Achievements />
      <BR />
      <SellingSection />
      <BR />
      <Testimonials />
      <BR />
    <CallToActionCard/>
      <BR />
      
      <Footer />
    </div>
  )
}

export default Home
