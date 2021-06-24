import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import { Link } from 'react-router-dom';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = () => {
  return (
    <>
    <Hero>
      <Banner title="Beautiful Rooms!" subtitle="Book now!">
        <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
      </Banner>
    </Hero>
    <Services />
    <FeaturedRooms/>
    </>
  )
}

export default Home
