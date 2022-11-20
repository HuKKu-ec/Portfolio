import React from 'react';
import { Helmet } from 'react-helmet';

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>hukbathec | Projects</title>
      </Helmet>
      <div
        style={{ fontFamily: 'Kodchasan', marginTop: 50, textAlign: 'center' }}
      >
        <h1 className="fontHead">
          My <span style={{ color: '#FCAB2B' }}>Projects</span>
        </h1>
      </div>
      <div className="devContainer" style={{ fontFamily: 'Kodchasan' }}>
        <div
          className="box"
          style={{
            textAlign: 'center',
            padding: 30,
            backgroundColor: '#FCAB2B',
            borderRadius: 5,
          }}
        >
          <b> No Projects</b>
        </div>
        <div
          className="box"
          style={{
            textAlign: 'center',
            padding: 30,
            backgroundColor: '#FCAB2B',
            borderRadius: 5,
          }}
        >
          <b> No Projects</b>
        </div>
      </div>
    </div>
  );
};

export default Projects;
