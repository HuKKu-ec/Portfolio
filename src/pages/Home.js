import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className="ContainerDiv">
      <Helmet>
        <title>hukbathec | Home</title>
      </Helmet>

      <div className="homeContainer">
        <h1 className="heading">Hy! I Am</h1>
        <h1 className="heading">Hukbath Ec</h1>
        <p className="subHeading">
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString('Web Developer | App Developer | UI/UX Desighner')
                .pauseFor(1000)

                .start();
            }}
          />
        </p>
        <table>
          <tbody>
            <tr style={{ height: 70 }}>
              <td style={{ textAlign: 'left', padding: 5 }}>
                <b>
                  <a
                    style={{ all: 'unset' }}
                    href="https://github.com/HuKKu-ec"
                  >
                    <img alt="github" src="icgithub.png"></img>
                  </a>
                </b>
                <br></br>
              </td>
              <td style={{ textAlign: 'left', padding: 5 }}>
                <b>
                  <a
                    style={{ all: 'unset' }}
                    href="https://www.linkedin.com/in/hukbath-ec/"
                  >
                    <img alt="linked in" src="iclinkedin.png"></img>
                  </a>
                </b>
                <br></br>
              </td>
              <td style={{ textAlign: 'left', padding: 5 }}>
                <b>
                  <a
                    style={{ all: 'unset' }}
                    href="https://stackoverflow.com/users/16921952/hukbath-ec"
                  >
                    <img alt="stackoverflow" src="stackoverflow.png"></img>
                  </a>
                </b>
                <br></br>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="/contact">
          <button className="hireButton">Hire me</button>
        </Link>
      </div>
      <div className="imageConatainer">
        {/* <img style={{position:'absolute',}} src='icfacebook.png' alt='' /> */}
        <img src="pic.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
