import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
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
              <Card className="p-5 mt-3 b-card">
                {' '}
                As part of IEDC SS College I made my contribution in UI design
                of the Website for a Canada based Foundation named Irfaa
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className="p-5 mt-3 b-card">
                TinkerHub Tech Lead - Led a team of techy students on the campus
                and also conducted tech talks , tech quiz programs for college
                folks,
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className="p-5 mt-3 b-card">
                I got a chance to give training to students of Majlis arts and
                science college about Robotics and IOT.
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Experience;
