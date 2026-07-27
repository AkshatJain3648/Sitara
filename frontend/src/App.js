import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Fundraiser from './components/Fundraiser';
import FundAllocation from './components/FundAllocation';
import Donation from './components/Donation';
import Instagram from './components/Instagram';
import Impact from './components/Impact';
import Footer from './components/Footer';
import Marquee from './components/Marquee';

const Home = () => (
  <div className="App bg-gingham min-h-screen">
    <Navbar />
    <Hero />
    <Marquee />
    <About />
    <Project />
    <Impact />
    <Fundraiser />
    <FundAllocation />
    <Donation />
    <Instagram />
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
