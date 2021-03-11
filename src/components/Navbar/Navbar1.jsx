import React from 'react';
import search from '../../image/search-new.png';

const Navbar1 = ({image}) => {
  return (
    <nav className="navbar back-light-green d-flex">
      <div className="brand">
      </div>
      <div className="search-and-image d-flex">
        <div className="col-auto">
          <input type="text" className="form-control" id="search" placeholder="Search..."/>
          <img src={search} alt="search" className="position-absolute"/>
        </div>

        <div className="start-writing text-center letter-spacing">Start Writing</div>

        <div className="user-image ml-1">
          <img src={image} className="img-fluid pb-5" alt="logged_user_image"/>
        </div>

        <div className="ml-1 hackernoon-color">
          <i className="fa fa-sun-o active text-primary" aria-hidden="true"></i>
        </div>

      </div>
    </nav>
  )
}
export default Navbar1;