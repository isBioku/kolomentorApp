import { Link } from 'react-router-dom';
import MenteeDrawerForm from "./menteeDrawerForm";
import React, {useState} from "react";
const HomePage = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    return <>

        <MenteeDrawerForm
            showDrawer = {showDrawer}
            setShowDrawer = {setShowDrawer}
        />


        <div className='container-fluid'>


            <div className='row'>
                <div className="col-11">
                    <div className='header-text '>
                        <h1 className='display-5'>
                            Carrying you reach there, <br />
                            through mentorship  <br />
                            and guidance.
                        </h1>

                        <h6>Focus on the work, avoid the unnecessary and hit the ground running.</h6>
                        <br />


                        <div className='row'>
                            <div>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search for a mentor in your career Interest" aria-label="Search" />
                                    <button  className="btn btn-outline-info" type="submit">Search</button>
                                </form>
                            </div>

                        </div>


                    </div>

                    <div >
                        <img className='front-display-clock' src={require('./asset/no-time.gif')} alt="clock" />
                    </div>
                </div>

            </div>




            <div className='blocker'></div>

            <div className='mentor-mentee-button'>
                <h5>----------------- <span>join</span> -----------------</h5>
                <Link className='btn btn-lg btn-warning me-4'to="/menteeSignup">Become a Mentor</Link>
                <Link className='btn btn-lg btn-outline-info' onClick={() => setShowDrawer(!showDrawer)} >Become a Mentee</Link>

            </div>


            <div className='mento-card bg-success'>

                <div>

                </div>

                <div>

                </div>

                <div>

                </div>

            </div>


        </div>

        </>;
}

export default HomePage;