'use client';

import React from 'react';

const GoogleMapIframe: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '90vh', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.628049784542!2d-58.95311792406254!3d-29.961375627430005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x944d055ecf87c907%3A0xc1525b30538ce740!2sPO%C3%8D%20RANCH!5e0!3m2!1sen!2sil!4v1730842775262!5m2!1sen!2sil"
        width="80%"
        height="80%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapIframe;