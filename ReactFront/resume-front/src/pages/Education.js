import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faIdCard, faGraduationCap, faBriefcase, faPlus } from "@fortawesome/free-solid-svg-icons"
import '../AddWork.css'

class Education extends Component {

    render() {
        return (

            <div className='container'>
                <div className="tab">
                    <div className='tab-wrapper'>
                        <Link to={'profile'} className="link-me"><button><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></button></Link>
                        <Link to={'work'} className="link-me"><button><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon></button></Link>
                        <Link to={'educate'} className="link-me"><button><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></button></Link>

                    </div>
                </div>

                <div className='addwork-wrapper'>
                    <div className='addwork-header'>
                        <h2>Education</h2>
                    </div>
                </div>

            </div>
        );
    }
}

export default Education;