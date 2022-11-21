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
              <div className="box">asnjsndk</div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="box">asnjsndk</div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="box">asnjsndk</div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="box">asnjsndk</div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Experience;
