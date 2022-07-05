import React from 'react';
import { SubHeading } from '../../components';

import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper__info">
      <SubHeading title="Driving is to be enjoyed" />
      <h1 className='app__header-h1'>The key to a happy drive.</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Book an Appointment Today! </p>
      {/*<button type="button" className="custom__buton">Explore Menu</button>*/}
    </div>

    <div className="app__wrapper_img">
       <img src={images.nissanborder3} alt="header img"/>

    </div>
  </div>
);

export default Header;
