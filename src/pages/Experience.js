import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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

      <div className="devContainer" style={{ fontFamily: 'Kodchasan' }}>
        <Container>
          <Row>
            <Col xs={12} sm={6}>
              <div className="box">
                {' '}
                As part of IEDC SS College I made my contribution in UI design
                of the Website for a Canada based Foundation named Irfaa
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="box">
                As part of my college project I made an app named Kaarunya for
                palliative care units by Using React Native and Firebase.({' '}
                <a href="https://expo.dev/artifacts/d8d0591d-c5b5-41a8-a794-83fe8dfe42a2">
                  Download
                </a>{' '}
                ) ( <a href="https://github.com/HuKKu-ec/Kaarunya">Git repo</a>{' '}
                )
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="box">
                I got a chance to give training to students of Majlis arts and
                science college about Robotics and IOT.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Experience;
