import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faIdCard, faGraduationCap, faBriefcase, faPlus } from "@fortawesome/free-solid-svg-icons"
import '../AddWork.css'
import axios from 'axios'

class AddWork extends Component {

    state = {
        pname: '',
        rname: '',
        tname: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveWork = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:8000/api/addwork', this.state);
        if (res.data.status === 200){
            console.log(res.data.message);
            this.setState({
                pname: '',
                rname: '',
                tname: '',
            });
        }
    }

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

                    <form onSubmit={this.saveWork}>
                        <div className='addwork-form'>
                            <label>Project Name</label><br/>
                            <input type="text" onChange={this.handleInput} name='pname' value={this.state.pname} className="project-name" placeholder="Enter your project name" /><br/>
                            <label>Roles</label><br/>
                            <input type="text" onChange={this.handleInput} name='rname' value={this.state.rname} className="project-role" placeholder="Enter your role " /><br/>
                            <label>Tools</label><br/>
                            <input type="text" onChange={this.handleInput} name='tname' value={this.state.tname} className="project-tools" placeholder="Enter tools" />
                        </div>
                        <div className='addwork-button-wrapper'>
                            <div className='addwork-button'>
                                <button type="submit" className='btn-submit'>SUBMIT</button>
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