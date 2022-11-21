import React from 'react';
import { Helmet } from 'react-helmet';
import { Col, Container, Row } from 'react-bootstrap';

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

export default Projects;
