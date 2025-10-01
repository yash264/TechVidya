import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import RoadMap from '../Components/RoadMap';
import Features from '../Components/Features';
import About from "../Components/About";

function Home() {
  return (
    <>
      <Navbar />

      <Banner />

      <RoadMap />

      <Features />

      {/* <section id="about"> */}
        <About />
      {/* </section> */}
    </>
  );
}

export default Home;