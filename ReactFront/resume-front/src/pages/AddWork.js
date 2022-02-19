import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faIdCard, faGraduationCap, faBriefcase, faPlus } from "@fortawesome/free-solid-svg-icons"
import '../AddWork.css'

class AddWork extends Component {

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

                {/* Work Container */}
                <div className='addwork-wrapper'>
                    <div className='addwork-header'>
                        <h2>TYPES YOUR PROJECT DETAILS</h2>
                    </div>

                    <form>
                        <div className='addwork-form'>
                            <label>Project Name</label><br/>
                            <input  type="text" className="project-name" placeholder="Enter your project name" /><br/>
                            <label>Roles</label><br/>
                            <input  type="text" className="project-role" placeholder="Enter your role " /><br/>
                            <label>Tools</label><br/>
                            <input type="text" className="project-tools" placeholder="Enter tools" />
                        </div>
                        <div className='addwork-button-wrapper'>
                            <div className='addwork-button'>
                                <button className='btn-submit'>SUBMIT</button>
                                <button className='btn-cancle'>CANCLE</button>
                            </div>
                        </div>
                    </form>

                </div>


            </div>
        );
    }
}

export default AddWork;