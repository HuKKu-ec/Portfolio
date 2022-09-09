import React from 'react';
import { Fade } from 'react-slideshow-image';
import { useState } from 'react';

import 'react-slideshow-image/dist/styles.css';

const Slideshow = () => {
  const [previousIndex, setPreviousIndex] = useState(null);
  const [nextIndex, setNextIndex] = useState(null);
  const properties = {
    autoplay: true,
    indicators: true,
    duration: 3000,
    onChange: (previous, next) => {
      setPreviousIndex(previous);
      setNextIndex(next);
    },
  };
  const fadeImages = [
    {
      url: 'irfaa.jpeg',
      caption: 'Irfaa Project',
    },
    {
      url: 'photoshop.jpeg',
      caption: 'Photoshop course completion',
    },
    {
      url: 'tinkerhub.jpeg',
      caption: 'Code A pookalam',
    },
  ];

  return (
    <center>
      <div
        className="slide-container"
        style={{ width: '100%', marginTop: 100 }}
      >
        <Fade {...properties}>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img
                  alt="some thing went wrong"
                  style={{ height: 400, width: 600 }}
                  src={fadeImage.url}
                />
              </div>
              <h2>{fadeImage.caption}</h2>
            </div>
          ))}
        </Fade>
        <p hidden>
          {previousIndex}
          {nextIndex}
        </p>
      </div>
    </center>
  );
};
export default Slideshow;
