import ProfileOverview from "./profileOverview";
import Resources from "./resources";
import ListOfMentees from "./listOfMentees";
import Benefits from "./benefits";
import {useEffect, useState} from "react";
import {getAllMentors} from "./mentorClient";



function profileOverview () {
    return <ProfileOverview/>
}

function resources() {
    return <Resources/>
}
function listOfMentees() {
    return <ListOfMentees/>
}

function benefits() {
    return <Benefits/>
}

const Mentor_Profile = () => {
    const [display, setDisplay] = useState(profileOverview)

   const handleProfileOverviewClick = () =>{
       setDisplay(profileOverview());
   }

    const handleResourcesClick = () =>{
        setDisplay( resources() );
    }

    const handleBenefitsClick = () =>{
        setDisplay(benefits());
    }

    const handleListOfMenteesClick = () =>{
        setDisplay(listOfMentees());
    }
    const [mentors, setMentors ] = useState([]);
    const fetchMentors  =()=>
        getAllMentors()
            .then(res => res.json())
            .then(data => setMentors(data))

    useEffect(() => {
        fetchMentors();
    },[])

    return (
        <div className="m-5">
            <div className="card row">

                <div className="row ">

                    <div className="col-3  ">

                    </div>

                    <div className="col-6 m-2 ">
                        <input className="form-control" type="text" placeholder="Search for your mentee "/>
                    </div>

                    <div className="col-2 ">

                        <a className="btn btn-dark m-2" href="#">Search</a>
                    </div>



                </div>

                <div className="row">
                    <div className="col-sm-5">
                        <div className=" mentor-image-wrapper">
                            <img className='mentor-image-circle img-fluid float-start' src={require('./asset/bioku.png')} alt="" />
                        </div>



                    </div>

                    <div className='col-6'>
                        <span className=' h1'>SOFTWARE DEVELOPER</span>


                    </div>
                </div>

                <div className="row">
                    <div className="col-6  text-dark">
                        <p className='h5'> Bioku Idowu Samuel</p>
                    </div>
                </div>


                <div className="row">
                    <div className="col-1">
                        <a className="nav-link text-dark h5"  href="#"><i className="bi bi-grid"></i>  </a>
                    </div>

                    <div className="col-10">
                        <ul className="nav nav-tabs nav-justified m-1" >

                            <a className="nav-link active  h6" href="#"  onClick={handleProfileOverviewClick}><i className="fa fa-solid fa-dharmachakra" ></i> Profile Overview </a>
                            <a className="nav-link active  h6 " href="#"  onClick={handleListOfMenteesClick} > <i className="fa fa-solid fa-biohazard "></i> Mentees</a>
                            <a className="nav-link active  h6" href="#" onClick={handleResourcesClick} ><i className="fa fa-solid fa-briefcase" ></i> Resources</a>
                            <a className="nav-link active  h6"  href="#" onClick={handleBenefitsClick} ><i className=" fa fa-solid fa-code" ></i> Benefits</a>

                        </ul>
                    </div>

                    <div className="col-1">
                    <span type="button" className="btn btn-secondary btn-sm position-relative mt-2 text-light mentee-counter">
                            Mentee
                            <span className="position-absolute top-0 start-100 translate-middle badge text-danger bg-warning">
                                {mentors.length}
                            </span>
                        </span>
                    </div>
                </div>

            </div>

            <div className='row mt-1  p-1  mentor-content-main-wrapper'>
                <div className='col-2 card me-5'>
                    <ul className="nav flex-column ">
                        <li className="nav-item ">
                            <a className="nav-link  link link-active  text-dark h6" href="#">Resources <i className="bi bi-cpu-fill text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  link  text-dark h6" href="#">Connections <i className="bi bi-diagram-3 text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link link-active text-dark h6" href="#">Groups <i className="bi bi-people-fill text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link  text-dark h6" href="#">Communities <i className="bi bi-code-slash text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link link-active h6 text-dark" href="#">Projects <i className="bi bi-inboxes-fill text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link h6 text-dark" href="#">Download cv <i className="bi bi-download text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link link-active h6 text-dark" href="#">Experience <i className="bi bi-briefcase-fill text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link  h6 text-dark" href="#">Gitgub <i className="bi bi-github text-secondary side-bar-icons h5"></i></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link link link-active h6 text-dark" href="#">Linkedin <i className="bi bi-linkedin text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link h6 text-dark" href="#">Twitter <i className="bi bi-twitter text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  link text-dark h6 link-active" href="#">Facebook <i className="bi bi-facebook text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link h6 text-dark " href="#">Youtube <i className="bi bi-youtube text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link link-active h6 text-dark " href="#">Link <i className="bi bi-link-45deg text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link  h6 text-dark " href="#">Settings <i className="bi bi-gear-fill text-secondary side-bar-icons h5"></i></a>
                        </li>
                    </ul>
                </div>

                <div className='col-9 ms-5 tab-content card embed-responsive embed-responsive-21by9'>
                    <div className="" id="myTabContent">

                        <div className="tab-pane fade show active" id="profile-overview" role="tabpanel" aria-labelledby="profile-overview-tab">
                            { display }
                        </div>
                        <div className="tab-pane fade" id="mentees" role="tabpanel" aria-labelledby="mentees">Mentees</div>
                        <div className="tab-pane fade" id="resources" role="tabpanel" aria-labelledby="resources-tab">Resources</div>
                        <div className="tab-pane fade" id="benefits" role="tabpanel" aria-labelledby="benefits-tab">benefits</div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mentor_Profile;