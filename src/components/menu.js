import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './menu.css'

const Menu = (props) => {
  return (
    <div className={`menu-menu ${props.rootClassName} `}>
      <div id="mobile-menu" className="menu-mobile-navigation">
        <img alt={props.Logo_alt} src={props.Logo_src} className="menu-logo" />
        <div className="menu-links">
          <span className="Link">{props.text}</span>
          <span className="Link">{props.text1}</span>
          <span className="Link">{props.text2}</span>
        </div>
        <div id="close-mobile-menu" className="menu-close-mobile-menu">
          <svg viewBox="0 0 804.5714285714286 1024" className="menu-icon">
            <path
              d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div className="menu-desktop-navigation">
        <nav className="menu-centered">
          <div className="menu-left">
            <img
              alt={props.Logo_alt1}
              src={props.Logo_src1}
              className="menu-logo1"
            />
            <div className="menu-links1">
              <span className="Link">{props.text3}</span>
              <span className="Link">{props.text4}</span>
              <span className="Link">{props.text5}</span>
            </div>
          </div>
          <div className="menu-right">
            <span className="menu-sign-in Link">{props.Sign_In}</span>
            <div className="menu-get-started">
              <span className="menu-text6">{props.text6}</span>
            </div>
            <div className="menu-container">
              <svg viewBox="0 0 877.7142857142857 1024" className="menu-icon2">
                <path
                  d="M877.714 768v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571zM877.714 475.429v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571zM877.714 182.857v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571z"
                  className=""
                ></path>
              </svg>
              <div id="open-mobile-menu" className="menu-burger-menu"></div>
            </div>
          </div>
        </nav>
      </div>
      <div className="">
        <DangerousHTML
          html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
          className=""
        ></DangerousHTML>
      </div>
    </div>
  )
}

Menu.defaultProps = {
  Logo_src: '/playground_assets/pastedimage-74q7-1500h.png',
  Logo_alt: 'pastedImage',
  text: 'Solutions',
  text1: 'How it works',
  text2: 'Prices',
  Logo_src1: '/playground_assets/pastedimage-ektk-200h.png',
  Logo_alt1: 'pastedImage',
  Sign_In: 'Sign in',
  text3: 'Solutions',
  text4: 'How it works',
  text5: 'Prices',
  text6: 'Get started\n',
  rootClassName: '',
}

Menu.propTypes = {
  Logo_src: PropTypes.string,
  Logo_alt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  Logo_src1: PropTypes.string,
  Logo_alt1: PropTypes.string,
  Sign_In: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Menu
