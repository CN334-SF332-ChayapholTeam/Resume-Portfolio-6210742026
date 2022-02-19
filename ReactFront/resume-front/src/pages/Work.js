import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faIdCard, faGraduationCap, faBriefcase, faPlus } from "@fortawesome/free-solid-svg-icons"
import '../Work.css'

class Work extends Component {

    render() {
        return (

            <div className='container'>
                <div className="tab">
                    <div className='tab-wrapper'>
                        <Link to={'profile'} className="link-me"><button><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></button></Link>
                        <Link to={'work'} className="link-me"><button><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon></button></Link>
                        <Link to={'work'} className="link-me"><button><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></button></Link>

                    </div>
                </div>

                {/* Work Container */}
                <div className='work-wrapper'>
                    <div className='work-header'>
                        <h2>WORK EXPERIENCE</h2>
                        <Link to={'add-work'} className="btn-add-work"><button><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button></Link>
                    </div>

                    <div className='work-body'></div>

                </div>

                {/* <div className='row e'>
                    <div className='col-md-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>WORK EXPERIENCE
                                    <Link to={'add-work'} className="btn btn-primary btn-sm float-end">Add Your Work</Link>
                                </h4>
                            </div>
                            <div className='card-body'></div>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Work;