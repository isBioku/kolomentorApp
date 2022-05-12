var Content = {
     Profile_Overview: function() {
        return (
         document.write("<h2> profile Overview goes </h2>")
        )
    }, 

    Mentees: function() {
        return (
            <div>
            <p> This These are list of mentees</p>
        </div>
        )
    },
    Resources: function() {
        return (
            <div>
            <p> Resources go here</p>
        </div>
        )
    },
    Benefit: function() {
        return (
            <div>
            <p> The benefits of what you will gain from this mentor</p>
        </div>
        )
    }
}
 

const Mentor_Profile = () => {
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
                        <a class="nav-link text-dark h5"  href="#"><i class="bi bi-grid"></i>  </a>
                    </div>

                    <div className="col-10">
                        <ul class="nav nav-tabs nav-justified m-1" >

                            <a class="nav-link active  h6" href="#"  ><i class="fa fa-solid fa-dharmachakra"></i> Profile Overview </a>
                            <a class="nav-link active  h6 " href="#"> <i class="fa fa-solid fa-biohazard " ></i> Mentees</a>
                            <a class="nav-link active  h6" href="#" ><i class="fa fa-solid fa-briefcase" ></i> Resources</a>
                            <a class="nav-link active  h6"  href="#" ><i class=" fa fa-solid fa-code" ></i> Benefits</a>

                        </ul>                        
                    </div>

                    <div className="col-1">
                    <span type="button" class="btn btn-secondary btn-sm position-relative mt-2 text-light mentee-counter">
                            Mentee
                            <span class="position-absolute top-0 start-100 translate-middle badge text-danger bg-warning">
                                45
                            </span>
                        </span>                       
                    </div>
                </div>

            </div>

            <div className='row mt-1  p-1  mentor-content-main-wrapper'> 
                <div className='col-2 card me-5'>
                    <ul class="nav flex-column ">
                        <li class="nav-item ">
                            <a class="nav-link  link link-active  text-dark h6" href="#">Resources <i class="bi bi-cpu-fill text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  link  text-dark h6" href="#">Connections <i class="bi bi-diagram-3 text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link link-active text-dark h6" href="#">Groups <i class="bi bi-people-fill text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link  text-dark h6" href="#">Communities <i class="bi bi-code-slash text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link link-active h6 text-dark" href="#">Projects <i class="bi bi-inboxes-fill text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link h6 text-dark" href="#">Download cv <i class="bi bi-download text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link link-active h6 text-dark" href="#">Experience <i class="bi bi-briefcase-fill text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link  h6 text-dark" href="#">Gitgub <i class="bi bi-github text-secondary side-bar-icons h5"></i></a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link link link-active h6 text-dark" href="#">Linkedin <i class="bi bi-linkedin text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link h6 text-dark" href="#">Twitter <i class="bi bi-twitter text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  link text-dark h6 link-active" href="#">Facebook <i class="bi bi-facebook text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link h6 text-dark " href="#">Youtube <i class="bi bi-youtube text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link link-active h6 text-dark " href="#">Link <i class="bi bi-link-45deg text-secondary side-bar-icons h5"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link  h6 text-dark " href="#">Settings <i class="bi bi-gear-fill text-secondary side-bar-icons h5"></i></a>
                        </li>
                    </ul>
                </div>

                <div className='col-9 ms-5 tab-content card embed-responsive embed-responsive-21by9'>
                    <div class="" id="myTabContent">

                        <div class="tab-pane fade show active" id="profile-overview" role="tabpanel" aria-labelledby="profile-overview-tab">
                            Content.Profile_Overview();
                        </div>
                        <div class="tab-pane fade" id="mentees" role="tabpanel" aria-labelledby="mentees">Mentees</div>
                        <div class="tab-pane fade" id="resources" role="tabpanel" aria-labelledby="resources-tab">Resources</div>
                        <div class="tab-pane fade" id="benefits" role="tabpanel" aria-labelledby="benefits-tab">benefits</div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Mentor_Profile;