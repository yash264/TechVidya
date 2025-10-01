import React from 'react';
import Navbar from '../Components/Home/Navbar';
import Banner from '../Components/Home/Banner';
import Features from '../Components/Home/Features';
import TopicSelection from '../Components/Home/TopicSelection';
import About from "../Components/Home/About";

function Home() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Banner />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="topicSelection">
        <TopicSelection />
      </section>

      <section id="about">
        <About />
      </section>
    </>
  );
}

export default Home;