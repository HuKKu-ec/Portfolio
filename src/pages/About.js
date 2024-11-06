import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
          I am an enthusiastic fresher who is highly self motivated, eager to
          learn new things and seeking a challenging position in the field of
          developing websites and apps so as to utilize my skills for
          organization and individual growth. As I am determined to work and
          improve my individual abilities to benefit my future and the
          organization, I am sure my explanation skills and my nature to get
          involved with new people will come in handy.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '15px',
        }}
      >
        <a style={{ textDecoration: 'none' }} href="Hukbath Ec Resume.pdf">
          <button>Download Cv</button>
        </a>
      </div>

      <div className="devContainer">
        <Container>
          <Row>
            <Col>
              <div className="box desc">
                <p>Web Developer</p>
              </div>
            </Col>

            <Col>
              <div className="box desc">
                <p>App Developer</p>
              </div>
            </Col>
            <Col>
              <div className="box desc">
                <p>UI/UX Designer</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
