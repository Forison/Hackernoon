import React from 'react';
import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';
import Navbar3 from './Navbar3';
import Navbar4 from './Navbar4';
import Me from '../../image/addo.jpg';
import '../../stylesheet/Queries.css';

const Index = () => {
  return (
    <>
      <Navbar1 image={Me} />
      <Navbar2 />
      <Navbar3 />
      <Navbar4 />
    </>
  )
}
export default Index;