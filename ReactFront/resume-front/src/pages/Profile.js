import '../App.css';
import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faIdCard, faGraduationCap, faBriefcase, faPlus, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faFacebookF, faFacebook } from "@fortawesome/free-brands-svg-icons"

import { Link } from 'react-router-dom'
import ReactTypingEffect from 'react-typing-effect'

// My Picture Profile
import profilepic from '../img/macd.jpg'
import pythonpic from '../img/python.png'

function App() {

  let [hello, setHello] = useState('')

  const onClickHello = () => {
    fetch('http://localhost:8000/api/resume')
      .then(response => response.json())
      .then(result => setHello(result.name))
      .catch(err => alert(err))
  }

  return (
    <div>
      {/* Tab Nav */}
      <div className="tab">
        <div className='tab-wrapper'>
          <Link to={'profile'} className="link-me"><button><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></button></Link>
          <Link to={'work'} className="link-me"><button><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon></button></Link>
          <Link to={'educate'} className="link-me"><button><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></button></Link>

        </div>
      </div>

      {/* Profile */}
      <div className="container2">
        <div className="profile-container" >
          <div className="profile-picture">
            <img src={profilepic} alt="" />
          </div>
          <div className="profile-title-wrapper">
            <div className="profile-title-container">
              <h5>Hi, I'm</h5>
              <h2>Chayaphol Meeprasert </h2>
              <div>
                <a href='https://github.com/chayaphol-mac123' target="_blank"><button><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></button></a>
                <a href='https://www.facebook.com/' target="_blank"><button><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></button></a>

              </div>

            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="about-me-container">
          <div className="about-me-wrapper">
            <h2>About Me</h2>
            <p>A highly responsible and recent graduate in Software Engineering from Thammasat University with a good command of English communication, seeking a job position of Software Engineering / Developer to further my professional experience and utilize my skills and knowledge to greatly benefit to your company's objectives. </p>
          </div>
        </div>

        {/* Skills Container */}
        <section id="skill">
          <div className='skill-container'>
            <div className='skill-title'>
              <h2>Skills</h2>
            </div>

            {/* Programming Language */}
            <div className='skill-flex'>
              <figure className='skill-items'>
                <img src={pythonpic} alt='' />
                <figcaption>
                  <h3>Python</h3>
                  <p>Status: Good</p>
                </figcaption>
              </figure>

              <figure className='skill-items'>
                <img src={require('../img/java.png')} />
                <figcaption>
                  <h3>Java</h3>
                  <p>Status: Moderate</p>
                </figcaption>
              </figure>
            </div>

            <div className='skill-flex'>
              <figure className='skill-items'>
                <img src={require('../img/html.png')} />
                <figcaption>
                  <h3>HTML</h3>
                  <p>Status: Good</p>
                </figcaption>
              </figure>
              {/* Web Programming */}
              <figure className='skill-items'>
                <img src={require('../img/css-3.png')} />
                <figcaption>
                  <h3>CSS</h3>
                  <p>Status: Good</p>
                </figcaption>
              </figure>

              <figure className='skill-items'>
                <img src={require('../img/js.png')} />
                <figcaption>
                  <h3>JS</h3>
                  <p>Status: Good</p>
                </figcaption>
              </figure>
            </div>
            {/* Framework */}
            <div className='skill-flex'>
              <figure className='skill-items'>
                <img src={require('../img/physics.png')} />
                <figcaption>
                  <h3>React / RN</h3>
                  <p>Status: Good</p>
                </figcaption>
              </figure>

              <figure className='skill-items'>
                <img src={require('../img/flutter.png')} />
                <figcaption>
                  <h3>Flutter</h3>
                  <p>Status: Moderate</p>
                </figcaption>
              </figure>
            </div>

          </div>
        </section>
        </div>
        {/* Footer */}
        <footer id='footer'>
          <div className='footer-container'>
            <div className='footer-flex'>
              <div className='footer-items'>
                <h3>Peronal Record</h3>
                <ul>
                  <li>Fullname: Chayaphol Meeprasert</li>
                  <li>Nickname: Mac</li>
                  <li>Age: 20</li>
                  <li>Birthday: 25 March 2001</li>
                </ul>

              </div>
              <div className='footer-items'>
                <h3>Contact Me</h3>
                <ul>
                  <li><FontAwesomeIcon className='footer-icon' icon={faPhone}></FontAwesomeIcon>093-583-2960</li>
                  <li><FontAwesomeIcon className='footer-icon' icon={faFacebook}></FontAwesomeIcon>Chayaphol Meeprasert</li>
                  <li><FontAwesomeIcon className='footer-icon' icon={faEnvelope}></FontAwesomeIcon>chayaphol.meep@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      


    </div>
  );
}

export default App;
