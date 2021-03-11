import React from 'react';
import nooner from '../../image/nooner.png';
import facebook from '../../image/facebook-new.png';
import instagram from '../../image/instagram-new.png';
import linkedin from '../../image/linkedin-new.png';
import twitter from '../../image/twitter-new.png';

const Navbar4 = () => {
  return (
  <nav className="navbar fifteen-px shadow-sm">
    <div className="col-8 p-0">
    <span className="small-logo ml-2"><img src={nooner} alt="hackernoon" className="small-logo"/></span>
    Step by Step Guide to Create 3 
    Different Types of Loading Screens in React by
    <strong className="noon-border"> @CodeBucks</strong>.
    </div>
    <div className="share-button d-flex col-3">
      <img src={facebook} alt="hackernoon-footer"/>
      <img src={linkedin} alt="hackernoon-footer"/>
      <img src={twitter} alt="hackernoon-footer"/>
      <img src={instagram} alt="hackernoon-footer"/>
    </div>
  </nav>
  )
}
export default Navbar4;