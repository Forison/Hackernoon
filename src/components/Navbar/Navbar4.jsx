import React from 'react';
import nooner from '../../image/nooner.png';
import facebook from '../../image/facebook-new.png';
import instagram from '../../image/instagram-new.png';
import linkedin from '../../image/linkedin-new.png';
import twitter from '../../image/twitter-new.png';

const Navbar4 = () => {
  return (
  <nav className="fifteen-px navbar d-flex shadow-sm d-none d-lg-block">
    <div className="col-lg-8">
      <span className="small-logo"><img src={nooner} alt="hackernoon" className="small-logo"/></span>
      Step by Step Guide to Create 3 
      Different Types of Loading Screens in React by
      <strong className="noon-border"> @CodeBucks</strong>.
    </div>
    <div className="share-button d-flex col-lg-4">
      <img src={facebook} alt="hackernoon-footer"/>
      <img src={linkedin} alt="hackernoon-footer"/>
      <img src={twitter} alt="hackernoon-footer"/>
      <img src={instagram} alt="hackernoon-footer"/>
    </div>
  </nav>
  )
}
export default Navbar4;