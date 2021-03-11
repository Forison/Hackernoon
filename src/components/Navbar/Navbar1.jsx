import React from 'react';
import search from '../../image/search-new.png';
import PropTypes from 'prop-types';

const Navbar1 = ({image}) => {
  return (
    <nav className="pt-2 pl-1 pb-2 back-light-green d-flex align-items-center">
      <div className="brand d-none d-lg-block">
      </div>
      <div className="brand-mobile d-block d-lg-none">
      </div>

      <div className="search-and-image d-flex ml-0 ml-md-auto ml-lg-auto">
        <div className="col-auto p-1">
          <input type="text" className="form-control" id="search" placeholder="Search..."/>
          <img src={search} alt="search" className="position-absolute"/>
        </div>

        <div className="d-none d-lg-block start-writing text-center letter-spacing">Start Writing</div>

        <div className="user-image ml-1 d-none d-lg-block">
          <img src={image} className="img-fluid pb-5" alt="logged_user_image"/>
        </div>

        <div className="ml-0 ml-lg-1 hackernoon-color">
          <i className="fa fa-sun-o active text-primary" aria-hidden="true"></i>
        </div>

      </div>
    </nav>
  )
}

Navbar1.propTypes = {
  image: PropTypes.string.isRequired,
};
export default Navbar1;