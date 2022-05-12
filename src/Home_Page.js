const Home_Page = () => {
    return ( 
        <div className='home'> 


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
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search for a mentor in your career Interest" aria-label="Search" />
                  <button  class="btn btn-outline-info" type="submit">Search</button>
                </form>
              </div>

            </div>   

                 
          </div>

          <div > 
              <img className='front-display-clock' src={require('./asset/no-time.gif')} alt="" />
          </div>
            </div> 

          </div>

  


          <div className='blocker'></div>

          <div className='mentor-mentee-button'> 
            <h5>----------------- <span>join</span> -----------------</h5>
            <a className='btn btn-lg btn-warning me-4' href="/menteeSignup">Become a Mentor</a>
            <a className='btn btn-lg btn-outline-info' href="/menteeLogin">Become a Mentee</a>
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
    );
}
 
export default Home_Page;