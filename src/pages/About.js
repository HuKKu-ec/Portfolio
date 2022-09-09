import React from 'react';
import { Helmet } from 'react-helmet';
const About = () => {
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
        <title>hukbathec | About</title>
      </Helmet>
      <h1 className="fontHead">
        Who <span style={{ color: '#FCAB2B' }}>Am I ?</span>
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p style={{ textAlign: 'center' }}>
          An enthusiastic fresher who is highly motivated, eager to learn new
          things is seeking a challenging position in the field of Web
          Developer, App Developer, UI/UX Designer, so as to utilize my skills
          for organization and individual growth.As I am determined to work and
          improve my individual abilities to benefit my future and the
          organization am sure my explanation skills and my nature to get
          involved with new people will come in handy.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <a style={{ textDecoration: 'none' }} href="Hukbath Ec.pdf">
          <button
            style={{
              cursor: 'pointer',
              display: 'block',
              fontFamily: 'Kodchasan',
              backgroundColor: '#FCAB2B',
              color: '#fff',
              borderRadius: 5,
              border: 'none',
              padding: 7,
              paddingLeft: 25,
              paddingRight: 25,
              fontSize: '1.5rem',
              marginTop: 15,
            }}
          >
            Download Cv
          </button>
        </a>
      </div>

      <div className="devContainer">
        <div
          style={{
            padding: '4rem',
            backgroundColor: '#FCAB2B',
            margin: '1.8rem',
            borderRadius: 5,
          }}
        >
          <b>Web Developer</b>
        </div>
        <div
          style={{
            padding: '4rem',
            backgroundColor: '#FCAB2B',
            margin: '1.8rem',
            borderRadius: 5,
          }}
        >
          <b>App Developer</b>
        </div>
        <div
          style={{
            padding: '4rem',
            backgroundColor: '#FCAB2B',
            margin: '1.8rem',
            borderRadius: 5,
          }}
        >
          <b>UI/UX Desighner</b>
        </div>
      </div>
    </div>
  );
};

export default About;
