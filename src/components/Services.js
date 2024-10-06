import React from 'react';
import WebDev from './services/WebDevService';
import UIServices from './services/UIServices';

function Services() {
  return (
    <div className="Services" id='services'>
      <WebDev/>
      <UIServices/>
      </div>
  );
}

export default Services;
