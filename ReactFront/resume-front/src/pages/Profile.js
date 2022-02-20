import '../App.css';
import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faIdCard, faGraduationCap, faBriefcase, faPlus } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faFacebookF  } from "@fortawesome/free-brands-svg-icons"

import {Link} from 'react-router-dom'
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
                <a href='https://www.facebook.com/' target="_blank"><button><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></button></a>
                
              </div>
              
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="about-me-container">
          <div className="about-me-wrapper">
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque beatae delectus dicta mollitia necessitatibus reiciendis rerum nam dolorum, nulla provident laborum molestiae, deserunt incidunt quia explicabo autem similique. Debitis iure sapiente enim fuga corporis sunt porro recusandae minus beatae numquam assumenda consequatur alias quia atque veritatis id, deleniti, tempore ad eos vel tempora placeat autem. Dolorum rem minus sequi et ratione placeat praesentium temporibus, dolore mollitia odit distinctio officiis impedit, iusto voluptas ducimus fugiat dicta doloribus accusantium aperiam, voluptatibus aliquam! Neque, assumenda quos? Veritatis quasi quibusdam cumque, hic omnis illum quisquam quas suscipit modi fugit obcaecati, reprehenderit deserunt consectetur incidunt.</p>
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
                <img src={require('../img/java.png')}/>
                <figcaption>
                  <h3>Java</h3>
                  <p>Status: Good</p>
                </figcaption>
              </figure>
            </div>

            <div className='skill-flex'>
              <figure className='skill-items'>
                <img src={require('../img/html.png')}/>
                <figcaption>
                  <h3>HTML</h3>
                  <p>Status: Good</p>
                </figcaption>
              </figure>
              {/* Web Programming */}
              <figure className='skill-items'>
                <img src={require('../img/css-3.png')}/>
                <figcaption>
                  <h3>CSS</h3>
                  <p>Status: Good</p>
                </figcaption>
              </figure>

              <figure className='skill-items'>
                <img src={require('../img/js.png')}/>
                <figcaption>
                  <h3>JS</h3>
                  <p>Status: Good</p>
                </figcaption>
              </figure>
            </div>
            {/* Framework */}
            <div className='skill-flex'>
              <figure className='skill-items'>
                <img src={require('../img/physics.png')}/>
                <figcaption>
                  <h3>React</h3>
                  <p>Status: Good</p>
                </figcaption>
              </figure>

              <figure className='skill-items'>
                <img src={require('../img/flutter.png')}/>
                <figcaption>
                  <h3>Flutter</h3>
                  <p>Status: Good</p>
                </figcaption>
              </figure>
            </div>

          </div>
        </section>
      </div>


    </div>
  );
}

export default App;
