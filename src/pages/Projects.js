import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, Col, Container, Row } from 'react-bootstrap';

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
      <div
        className="devContainer"
        style={{ fontFamily: 'Kodchasan', marginBottom: '80px' }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <Card className="p-5 mt-3 b-card">
                <h3>Kaarunya App</h3>Palliative care management App in this
                system provides a better way for doctors, nurses and volunteers
                to manage their documents and their files about a patient under
                a palliative unit. Therefore, this system enhances the speed by
                searching the documents, storing data more efficiently,
                retrieving data, managing and updating data simply.<br></br>[
                Stacks used:React Native,Firebase ]<br></br>
                <a href="https://github.com/HuKKu-ec/Kaarunya"> Git repo </a>
                <a href="https://expo.dev/artifacts/ab3d290f-8bbc-4d31-856f-417793a429f7">
                  {' '}
                  Download
                </a>{' '}
              </Card>
            </Col>

            <Col xs={12}>
              <Card className="p-5 mt-3 b-card">
                <h3>Real chat</h3>This is a Realtime Social messaging tool which
                is capable of sending messages , delete messages , it can
                retrieve messages later when user logs in again and also the
                login can be done using mobile number with otp verification
                <br></br>[ Stacks used:React,Firebase ]<br></br>
                <a href="https://github.com/HuKKu-ec/real-chat"> Git repo </a>
                <a href="https://inquisitive-tulumba-fe7761.netlify.app/">
                  {' '}
                  View
                </a>{' '}
              </Card>
            </Col>
            <Col xs={12}>
              <Card className="p-5 mt-3 b-card">
                {' '}
                <h3>Portfolio</h3>This site is my own portfolio site which is
                designed for showcasing my projects and activities.
                <br></br>[ Stack used:React ]<br></br>
                <a href="https://github.com/HuKKu-ec/Portfolio"> Git repo </a>
                <a href="https://www.hukbathec.tech"> View</a>
              </Card>
            </Col>
            <Col xs={12}>
              <Card className="p-5 mt-3 b-card">
                <h3>Blog App</h3>This my first MERN App for blog writing
                <br></br>[ Stack used:MERN ]<br></br>
                <a href="https://github.com/HuKKu-ec/Blog-app"> Git repo </a>
                <a href="https://splendid-lolly-e827fb.netlify.app/">
                  {' '}
                  View
                </a>{' '}
              </Card>
            </Col>

            <Col xs={12}>
              <Card className="p-5 mt-3 b-card">
                <h3>Saico</h3>The Daily Note saver app<br></br>[ Stacks
                used:React,Firebase ]<br></br>
                <a href="https://github.com/HuKKu-ec/Saico"> Git repo </a>
                <a href=" https://saico.netlify.app"> View</a>
              </Card>
            </Col>
            <Col xs={12}>
              <Card className="p-5 mt-3 b-card">
                <h3>Travel panda</h3>Just a UI for a Travelers App<br></br>[
                Stack used:React ]<br></br>
                <a href="https://github.com/HuKKu-ec/travelpanda">
                  {' '}
                  Git repo{' '}
                </a>{' '}
                <a href="https://iridescent-tartufo-87a12d.netlify.app">View</a>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
