const Mentee_Signup = () => {
    return ( 

        <div className="mentee_login_big_wrapper row ">
            <div className="mentee_login_local_wrapper ">
                <form action="" className="login_form ">
                    <h2 className="kolomentor kolomentor-form h5">Kolomentor</h2>
                    <input className="form-control input" type="email" placeholder="Enter your email Address"/>
                    <input className="form-control input " type="password" placeholder="Enter your password" />
                    <button className="btn btn-success login_btn">Register</button>
                    <p className="login_btn">Already have an account? <a href="menteeLogin">login here</a></p>
                </form>
            </div>
        </div>

     );
}
 
export default Mentee_Signup;