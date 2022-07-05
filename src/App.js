import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, MOT, Servicerepair } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Servicerepair/>
    <AboutUs />
    <Gallery/>
    <FindUs />
   
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
