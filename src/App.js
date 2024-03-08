import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Search from './components/Search';
import Inventory from './components/Inventory';
import WhyUs from './components/WhyUs';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

  function App() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <Search />
        <Inventory />
        <WhyUs />
        <Achievements />
        <Testimonials />
        <Footer />
      </div>
    );
  }


export default App;
