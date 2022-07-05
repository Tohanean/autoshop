import React from 'react';
import { images } from '../../constants';
import { MdCarRepair } from 'react-icons/md';

import { MdFilterListAlt } from 'react-icons/md';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { GiCarBattery } from 'react-icons/gi';
import { FaHeartbeat } from 'react-icons/fa';
import { GiTireTracks } from 'react-icons/gi';
import { FaFan } from 'react-icons/fa';



import './Servicerepair.css';


const Servicerepair = () => (
  <div className="app__services"   id="service">
    <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Services & Repairs</h1>
      <div className="app__wrapper-content">
        <h2 className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}> Oil & Filter Change <MdFilterListAlt color="#fff" fontSize={50} /></h2>
        <h3 className="p__opensans"> If you just need a minor service or a scheduled oil and filter replacement.</h3>

        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Full Service <MdOutlineMiscellaneousServices color="#fff" fontSize={50}/></p>
        <p className="p__opensans">If your car is ready for its annual service to manufacturers standards.</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Diagnostics <FaHeartbeat color="#fff" fontSize={50}/></p>
        <p className="p__opensans">If your car isn't running well, we have the latest diagnostic tools.</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Brake Pads and Disks<GiTireTracks color="#fff" fontSize={50}/></p>
        <p className="p__opensans">If your brake disks or pads are worn and need replacing.</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Radiator Repairs<FaFan color="#fff" fontSize={50}/></p>
        <p className="p__opensans">If your radiator is leaking and needs repair or changing.</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Battery Replacement <GiCarBattery color="#fff" fontSize={50} /></p>
        <p className="p__opensans">If you have difficulties starting your car and your battery needs replacing.</p>
      </div>
  </div>
);

export default Servicerepair;
