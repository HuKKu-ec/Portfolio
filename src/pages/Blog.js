import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    return () => {
      getBlogs();
    };
  }, [blogs]);
  const getBlogs = async () => {
    const equipment = collection(db, 'blogs');
    const snapshot = await getDocs(equipment);
    const result = snapshot.docs.map((doc) => doc.data());
    setBlogs(result);
  };

  return (
    <div>
      <Helmet>
        <title>hukbathec | Blogs</title>
      </Helmet>

      <h1 className="fontHead" style={{ fontFamily: 'Kodchasan' }}>
        My <span style={{ color: '#FCAB2B' }}>Blogs</span>
      </h1>

      <div className="devContainer" style={{ fontFamily: 'Kodchasan' }}>
        {blogs.length !== 0 ? (
          <Container>
            <Row className="mt-5 ">
              {blogs.map((blg, i) => (
                <Col xs={12} sm={6} key={i} className="p-1">
                  <Card className="p-5  b-card" style={{ height: '100%' }}>
                    {blg.description}
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        ) : (
          <Container>
            <Row>
              <Col>No Blogs</Col>
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
};

export default Blog;
