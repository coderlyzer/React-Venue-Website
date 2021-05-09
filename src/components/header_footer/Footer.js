import React from 'react'
import { Zoom } from 'react-awesome-reveal'

const Footer = () => {
  return (
    <footer className="bck_red">
      <Zoom triggerOnce delay={500}>
        <div className="font_righteous footer_logo_venue">The venue</div>
        <div className="footer_copyright">
          The venue 2021 all rights reserved
        </div>
      </Zoom>
    </footer>
  )
}

export default Footer
