import React from 'react'

import { Helmet } from 'react-helmet'

import Menu from '../components/menu'
import Hero from '../components/hero'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Little Far Flung Owl</title>
        <meta property="og:title" content="Little Far Flung Owl" />
      </Helmet>
      <section className="home-hero">
        <Menu rootClassName="menu-root-class-name"></Menu>
        <div className="home-container1">
          <Hero></Hero>
        </div>
      </section>
    </div>
  )
}

export default Home
