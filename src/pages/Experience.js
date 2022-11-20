import React from 'react';
import { Helmet } from 'react-helmet';
const Experience = () => {
  return (
    <div
      style={{
        fontFamily: 'Kodchasan',
        marginTop: 50,
        maxWidth: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Helmet>
        <title>hukbathec | Experience</title>
      </Helmet>
      <h1 className="fontHead">
        My Awesome <span style={{ color: '#FCAB2B' }}>Experience</span>
      </h1>

      <div className="devContainer">
        <div
          className="box "
          style={{
            textAlign: 'center',
            padding: 30,
            backgroundColor: '#FCAB2B',
            borderRadius: 5,
          }}
        >
          <b>TinkerHub SS College (TECH LEAD )</b>
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
          <b>IEDC SS College (MEMBER)</b>
        </div>
      </div>
      <div className="devContainer">
        <div
          className="box"
          style={{
            textAlign: 'center',
            padding: 30,
            backgroundColor: '#FCAB2B',
            borderRadius: 5,
          }}
        >
          <b>
            As part of IEDC SS College I made my contribution in UI design of
            the Website for a Canada based Foundation named Irfaa.
          </b>
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
          <b>
            As part of my college project I made an app named Kaarunya for
            palliative care units by Using React Native and Firebase.
          </b>
        </div>
      </div>
    </div>
  );
};

export default Experience;
