import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faIdCard, faGraduationCap, faBriefcase, faPlus } from "@fortawesome/free-solid-svg-icons"


// My Picture Profile
import profilepic from './img/macd.jpg'

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
        <ul className='tab-wrapper'>
          <li className="tab-items"><a href="#"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></a></li>
          <li className="tab-items"><a href="#"><FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon></a></li>
          <li className="tab-items"><a href="#"><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon></a></li>
          <li className="tab-items"><a href="#"><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></a></li>
        </ul>
      </div>

      {/* Profile */}
      <div class="container">
        <div class="profile-container">
            <div class="profile-picture">
                <img src={profilepic} alt=""/>
            </div>
            <div class="profile-title-wrapper">
                <div class="profile-title-container">
                    <h5>Hi, I'm</h5>
                    <h2>Chayaphol Meeprasert </h2>
                    <button class="button-resume">View Resume !</button>
                </div>
            </div>
        </div>

        {/* About Me */}
        <div class="about-me-container">
            <div class="about-me-wrapper">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque beatae delectus dicta mollitia necessitatibus reiciendis rerum nam dolorum, nulla provident laborum molestiae, deserunt incidunt quia explicabo autem similique. Debitis iure sapiente enim fuga corporis sunt porro recusandae minus beatae numquam assumenda consequatur alias quia atque veritatis id, deleniti, tempore ad eos vel tempora placeat autem. Dolorum rem minus sequi et ratione placeat praesentium temporibus, dolore mollitia odit distinctio officiis impedit, iusto voluptas ducimus fugiat dicta doloribus accusantium aperiam, voluptatibus aliquam! Neque, assumenda quos? Veritatis quasi quibusdam cumque, hic omnis illum quisquam quas suscipit modi fugit obcaecati, reprehenderit deserunt consectetur incidunt.</p>
            </div>        
        </div>

        {/* Skills Container */}
        <div class="skill-container">
            <h3>Skills</h3>
            <ul class="skill-items-container">
                <button><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                <li class="skill-item">HTML</li>
                <li class="skill-item">CSS</li>
                <li class="skill-item">JavaScript</li>
                <li class="skill-item">React</li>
            </ul>
        </div>
    </div>
    

    </div>
  );
}

export default App;
