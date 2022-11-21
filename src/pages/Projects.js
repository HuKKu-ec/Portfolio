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
              <div className="box">
                Blog App- This my first MERN App for blog writing
                <br></br>[ Stack used:MERN ]<br></br> (
                <a href="https://github.com/HuKKu-ec/Blog-app"> Git repo </a> )
                (<a href="https://splendid-lolly-e827fb.netlify.app/"> View</a>{' '}
                )
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="box">
                Real chat- The Chating App
                <br></br>[ Stacks used:React,Firebase ]<br></br> (
                <a href="https://github.com/HuKKu-ec/real-chat"> Git repo </a> )
                (
                <a href="https://expo.dev/artifacts/d8d0591d-c5b5-41a8-a794-83fe8dfe42a2">
                  {' '}
                  View
                </a>{' '}
                )
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="box">
                Portfolio- This is my portfolio website
                <br></br>[ Stack used:React ]<br></br> (
                <a href="https://github.com/HuKKu-ec/Portfolio"> Git repo </a> )
                (<a href="https://www.hukbathec.tech"> View</a> )
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="box">
                Kaarunya App- The palliative care management app<br></br>[
                Stacks used:React Native,Firebase ]<br></br> (
                <a href="https://github.com/HuKKu-ec/Kaarunya"> Git repo </a> )
                (
                <a href="https://expo.dev/artifacts/d8d0591d-c5b5-41a8-a794-83fe8dfe42a2">
                  {' '}
                  Download
                </a>{' '}
                )
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="box">
                Saico- The Daily Note saver app<br></br>[ Stacks
                used:React,Firebase ]<br></br> (
                <a href="https://github.com/HuKKu-ec/Saico"> Git repo </a> ) (
                <a href=" https://saico.netlify.app"> View</a> )
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="box">
                Travel panda- Just a UI for a Travelers App<br></br>[ Stack
                used:React ]<br></br> (
                <a href="https://github.com/HuKKu-ec/travelpanda"> Git repo </a>{' '}
                ) (
                <a href=" :https://iridescent-tartufo-87a12d.netlify.app">
                  {' '}
                  View
                </a>{' '}
                )
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
