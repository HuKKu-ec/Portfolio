import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

const Experience = () => {
  const [experiances, setExperiances] = useState([]);

  useEffect(() => {
    return () => {
      getExperiances();
    };
  }, []);
  const getExperiances = async () => {
    const equipment = collection(db, 'experiances');
    const snapshot = await getDocs(equipment);
    const result = snapshot.docs.map((doc) => doc.data());
    setExperiances(result);
  };

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
        {experiances.length !== 0 ? (
          <Container>
            <Row className="mt-5 ">
              {experiances.map((exp, i) => (
                <Col xs={12} sm={6} key={i} className="p-1">
                  <Card className="p-5  b-card" style={{ height: '100%' }}>
                    {exp.description}
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        ) : (
          <Container>
            <Row>
              <Col>Loading...</Col>
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
};

export default Experience;
