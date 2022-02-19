import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faIdCard, faGraduationCap, faBriefcase, faPlus } from "@fortawesome/free-solid-svg-icons"
import '../Work.css'
import axios from 'axios'

class Work extends Component {

    state = {
        project: [],
        loading: true,
    }
    async componentDidMount() {

        const res = await axios.get('http://localhost:8000/api/project');
        if (res.data.status === 200) {
            this.setState({
                project: res.data.project,
                loading: false,
            });
        }

    }

    render() {

        var project_HTMLTABLE = "";
        if (this.state.loading) {
            project_HTMLTABLE = <div className='work-items'>
                <div className='work-detail'>
                    <p>Loading...</p>
                </div>
            </div>;
        }
        else {
            project_HTMLTABLE =
                this.state.project.map((item) => {
                    return (
                        <div className='work-items' key={item.id}>
                            <div className='work-detail'>
                                <p>{item.pname}</p>
                                <p>{item.rname}</p>
                                <p>{item.tname}</p>
                            </div>
                            <div className='work-button'>
                                <Link to={`edit-project/${item.id}`}><button className='btn-edit'>EDIT</button></Link>
                                <button type='button' className='btn-del'>DELETE</button>
                            </div>
                        </div>
                );
        });
    }
    return(

            <div className = 'container' >
            <div className="tab">
                <div className='tab-wrapper'>
                    <Link to={'profile'} className="link-me"><button><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></button></Link>
                    <Link to={'work'} className="link-me"><button><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon></button></Link>
                    <Link to={'educate'} className="link-me"><button><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></button></Link>

                </div>
            </div>

                {/* Work Container */ }
                <div className = 'work-wrapper' >
                    <div className='work-header'>
                        <h2>WORK EXPERIENCE</h2>
                        <Link to={'addwork'} className="btn-add-work"><button><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button></Link>
                    </div>

                    <div className='work-body'>
                        {project_HTMLTABLE}
                        {/* <div className='work-items'>
                            <div className='work-detail'>
                                <p>Education-Dio-Technology</p>
                                <p>Front-End Developer</p>
                                <p>Flutter</p>
                            </div>
                            <div className='work-button'>
                                <button className='btn-edit'>EDIT</button>
                                <button className='btn-del'>DELETE</button>
                            </div>
                        </div>
                        <div className='work-items'>
                            <div className='work-detail'>
                                <p>MDB-19</p>
                                <p>Front-End Developer/Project Manager</p>
                                <p>React-Native</p>
                            </div>
                            <div className='work-button'>
                                <button className='btn-edit'>EDIT</button>
                                <button className='btn-del'>DELETE</button>
                            </div>
                        </div>
                        <div className='work-items'>
                            <div className='work-detail'>
                                <p>TODOLIST</p>
                                <p>Front-End Developer</p>
                                <p>React-Native</p>
                            </div>
                            <div className='work-button'>
                                <button className='btn-edit'>EDIT</button>
                                <button className='btn-del'>DELETE</button>
                            </div>
                        </div> */}
                    </div>

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
            </div >
        );
    }
}

export default Work;