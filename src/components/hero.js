import React from 'react'

import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <header className="hero-hero">
      <div className="hero-content">
        <h1 className="hero-title">{props.Title}</h1>
        <span className="hero-description">{props.Description}</span>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="hero-image"
        />
      </div>
      <div className="hero-image1">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="hero-image2"
        />
        <img
          alt={props.image_alt2}
          src={props.image_src2}
          className="hero-image3"
        />
      </div>
    </header>
  )
}

Hero.defaultProps = {
  Title: 'We help you scale your small business',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  image_src: '/playground_assets/image-xedr-300w.png',
  image_alt: 'image',
  image_src1: '/playground_assets/image-p5ek-1500w.png',
  image_alt1: 'image',
  image_src2: '/playground_assets/image-ktmj-1500w.png',
  image_alt2: 'image',
}

Hero.propTypes = {
  Title: PropTypes.string,
  Description: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
}

export default Hero
