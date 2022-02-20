import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faIdCard, faGraduationCap, faBriefcase, faPlus } from "@fortawesome/free-solid-svg-icons"
import '../Education.css'

class Education extends Component {

    render() {
        return (

            <div className='containeredu'>
                <div className="tab">
                    <div className='tab-wrapper'>
                        <Link to={'profile'} className="link-me"><button><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></button></Link>
                        <Link to={'work'} className="link-me"><button><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon></button></Link>
                        <Link to={'educate'} className="link-me"><button><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></button></Link>

                    </div>
                </div>

                <div className='educat-wrapper'>
                    <div className='educat-header'>
                        <h2>EDUCATION</h2>
                    </div>

                    <div className='educat-year'>
                        <h3>2013 - 2018</h3>
                    </div>

                    <div className='educat-flex'>
                        <figure className='educat-items'>
                            <img src={require('../img/schools/skn.jpg')} />
                            <figcaption>
                                <h3>Suankularb Nonthaburi</h3>
                                <p>2013-2015</p>
                            </figcaption>
                        </figure>
                        <figure className='educat-items'>
                            <img src={require('../img/schools/pcs.png')} />
                            <figcaption>
                                <h3>Pitchaya Suksa</h3>
                                <p>2015-2016</p>
                            </figcaption>
                        </figure>
                        <figure className='educat-items'>
                            <img src={require('../img/schools/skn.jpg')} />
                            <figcaption>
                                <h3>Suankularb Nonthaburi</h3>
                                <p>2017-2018</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className='educat-year'>
                        <h3>2019 - 2022</h3>
                    </div>

                    <div className='educat-flex'>
                        <figure className='educat-items'>
                            <img src={require('../img/schools/tms.png')} />
                            <figcaption>
                                <h3>Thammasat University</h3>
                                <p>2019-2022</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>

            </div>
        );
    }
}

export default Education;