import { Link } from "react-router-dom";

const MentorSgnUpCredentials = () => {
    return (
        <div className="mentor-credentials_big_wrapper row">
            <div className="mentor_login_local_wrapper ">
                <form action="" className="login_form ">
                    <h2 className="kolomentor kolomentor-form h5">Kolomentor</h2>
                    <input className="form-control input" type="text" placeholder="Enter your First Name"/>
                    <input className="form-control input " type="text" placeholder="Enter your Last Name" />
                    <input className="form-control input " type="text" placeholder="What should we call you?" />
                    <select name="" id="" className="form-control input">
                        <option value="">Select your gender identity</option>
                        <option value="">Heterosexual/Straight</option>
                        <option value="">Homosexual</option>
                        <option value="">Lesbian (M)</option>
                        <option value="">Lesbian (F)</option>
                        <option value="">Gay (M)</option>
                        <option value="">Gay (M)</option>
                        <option value="">Prefer not to say</option>
                    </select>

                    <select name="" id="" className="form-control input">
                        <option value="" >Select your profession</option>
                        <option value="">Software Engineering</option>
                        <option value="">Software Development</option>
                        <option value="">Graphics Designing</option>
                        <option value="">UI/UX</option>
                        <option value="">Data Analysis</option>
                        <option value="">Data Analytics</option>
                        <option value="">Data Science</option>
                        <option value="">Devops</option>
                    </select>

                    <Link className="btn btn-success login_btn" to="/mentorProfile">Set up profile</Link>
                </form>
            </div>
        </div>
    );
}

export default MentorSgnUpCredentials;