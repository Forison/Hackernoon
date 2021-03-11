import React from 'react';
import facebook from '../../image/facebook-new.png';
import github from '../../image/github-new.png';
import instagram from '../../image/instagram-new.png';
import linkedin from '../../image/linkedin-new.png';
import rss from '../../image/facebook-new.png';
import twitter from '../../image/twitter-new.png';
import youtube from '../../image/youtube-new.png';
import podcast from '../../image/podcast-new.png';

const Footer = () => {
  return (
    <div className="container-fluid">
    <div className="row align-items-center">
      <div className="footer-left col-8 ">
        <a href="https://hackernoon.com/"> Help</a> <a href="https://hackernoon.com/"> About</a> <a href="https://hackernoon.com/"> Start</a> <a href="https://hackernoon.com/"> Writing Sponsor</a>: <a href="https://hackernoon.com/"> Brand-as-Author</a> <a href="https://hackernoon.com/">Sitewide</a> <a href="https://hackernoon.com/">Billboard</a> <a href="https://hackernoon.com/">Ad by tag Newsletter</a> <a href="https://hackernoon.com/">  Noonies</a>
        <a href="https://hackernoon.com/"> Contact Us </a> <a href="https://hackernoon.com/"> Terms</a> <a href="https://hackernoon.com/"> Privacy</a> <a href="https://hackernoon.com/"> Cookies</a> <a href="https://hackernoon.com/"> Stories</a> <a href="https://hackernoon.com/"> published</a> <a href="https://hackernoon.com/">yesterday</a> <a href="https://hackernoon.com/">Leaderboard</a> <a href="https://hackernoon.com/">Contributors' Club </a>
        <a href="https://hackernoon.com/"> Chrome Extension </a>
      </div>
      <div className="footer-right d-flex col-4">
       <img src={facebook} alt="hackernoon-footer"/>
       <img src={github} alt="hackernoon-footer"/>
       <img src={instagram} alt="hackernoon-footer"/>
       <img src={rss} alt="hackernoon-footer"/>
       <img src={youtube} alt="hackernoon-footer"/>
       <img src={podcast} alt="hackernoon-footer"/>
       <img src={linkedin} alt="hackernoon-footer"/>
       <img src={twitter} alt="hackernoon-footer"/>
      </div>
    </div>
    </div>
  )
}
export default Footer;
