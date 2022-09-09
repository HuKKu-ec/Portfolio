import React from 'react';
import { Helmet } from 'react-helmet';
const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>hukbathec | Blog</title>
      </Helmet>
      <div
        style={{ fontFamily: 'Kodchasan', marginTop: 50, textAlign: 'center' }}
      >
        <h1 className="fontHead">
          My <span style={{ color: '#FCAB2B' }}>Blogs</span>
        </h1>
      </div>
      <div className="devContainer" style={{ fontFamily: 'Kodchasan' }}>
        <div
          className="box"
          style={{
            textAlign: 'center',
            padding: 30,
            backgroundColor: '#FCAB2B',
            borderRadius: 5,
          }}
        >
          <b>
            {' '}
            discussion or informational website published on the World Wide Web
            consisting of discrete, often informal diary-style text entries (p
          </b>
        </div>
        <div
          className="box"
          style={{
            textAlign: 'center',
            padding: 30,
            backgroundColor: '#FCAB2B',
            borderRadius: 5,
          }}
        >
          <b>
            {' '}
            discussion or informational website published on the World Wide Web
            consisting of discrete, often informal diary-style text entries (p
          </b>
        </div>
      </div>
    </div>
  );
};

export default Blog;
