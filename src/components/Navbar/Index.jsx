import React from 'react';
import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';
import Navbar3 from './Navbar3';
import Navbar4 from './Navbar4';
import Me from '../../image/addo.jpg';
import '../../stylesheet/Queries.css';

const Index = ({scroll}) => {
  return (
    <>
    <div className={scroll > 1 ? 'd-none' : 'd-block'}>
      <Navbar1 image={Me} />
      <Navbar2 />
    </div>
    <div className={scroll > 1 ? 'block nav-wrap' : 'd-block'}>
      <Navbar3 />
        <div className={scroll > 1 ? 'block' : 'd-none'}>
          <Navbar4 />
        </div>  
    </div>
    </>
  )
}
export default Index;