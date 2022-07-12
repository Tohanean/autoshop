import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, MOT, Servicerepair } from './container';
import { Navbar } from './components';
import { Emailer } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Servicerepair/>
    <AboutUs />
    <Gallery/>
    <FindUs />
   <Emailer />
    <Footer />
    {/*
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
     */}
  </div>
);

export default App;
