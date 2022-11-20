import React from 'react';
import { Helmet } from 'react-helmet';
const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>hukbathec | Blogs</title>
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
          <b> no blogs</b>
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
          <b> No blogs</b>
        </div>
      </div>
    </div>
  );
};

export default Blog;
