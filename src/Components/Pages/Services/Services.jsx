import React from 'react'
import ServiceBox from './ServiceBox'
import Header from '../../HelperComp/Header';

const Services = () => {
    return (
        <div className="h-full page-shadow bg-white p-10">
          {/* heading */}
          <Header
            title="Services"
            subtitle="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
          />
    
          {/* Services Card  */}
          <div>
            <ServiceBox />
          </div>
        </div>
      );
}

export default Services
