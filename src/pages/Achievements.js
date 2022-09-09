import React from 'react';
import Slideshow from '../components/Slideshow';
import { Helmet } from 'react-helmet';
const Achievements = () => {
  return (
    <div>
      <Helmet>
        <title>hukbathec | Achievements</title>
      </Helmet>
      <div
        style={{ fontFamily: 'Kodchasan', marginTop: 50, textAlign: 'center' }}
      >
        <h1 className="fontHead">
          Some of my <span style={{ color: '#FCAB2B' }}>Achievements</span>
        </h1>
        <Slideshow />
      </div>
    </div>
  );
};

export default Achievements;
