import { Link } from "react-router-dom";

const MentorSignup = () => {

    return (

        <div className="mentee_login_big_wrapper row ">
            <div className="mentee_login_local_wrapper ">
                <form action="" className="login_form ">
                    <h2 className="kolomentor kolomentor-form h5">Kolomentor</h2>
                    <input className="form-control input" type="email" placeholder="Enter your email Address"/>
                    <input className="form-control input " type="password" placeholder="Enter your password" />
                    <input className="form-control input " type="password" placeholder="Confirm Password" />
                    <Link className="btn btn-success login_btn" to="/mentorCredentials">Register</Link>
                    <p className="login_btn">Already have an account? <Link to="/menteeLogin">login here</Link></p>
                </form>
            </div>
        </div>

    );
}

export default MentorSignup;