import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export default function Contact () {
  return (
    <Hero>
      <Banner title="Contact Page" subtitle="Page not found!">
        <Link to="/" className="btn-primary">Return Home</Link>
      </Banner>
    </Hero>
  )
}