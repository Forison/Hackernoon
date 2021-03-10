import React from 'react';

const Navbar1 = ({image}) => {
  return (
    <nav className="navbar back-light-green d-flex">
      <div className="brand">
      </div>
      <div className="search-and-image d-flex">
        <div className="col-auto">
          <input type="text" className="form-control search" placeholder="Search..."/>
        </div>

        <div className="start-writing text-center letter-spacing">Start Writing</div>

        <div className="user-image ml-1">
          <img src={image} className="img-fluid pb-5" alt="logged_user_image"/>
        </div>

        <div className="user-image ml-1">
          <i className="fas fa-sun active text-primary" aria-hidden="true"></i>
        </div>

      </div>
    </nav>
  )
}
export default Navbar1;