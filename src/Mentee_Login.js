const Mentee_Login = () => {
    return ( 

        <div className="mentee_login_big_wrapper ">
            <div className="home ">
                <form action="" className="login_form ">
                    <p className="kolomentor kolomentor-form h5">Kolomentor</p>
                    <input className="form-control input" type="email" placeholder="Enter your email Address"/>
                    <input className="form-control input " type="password" placeholder="Enter your password" />
                    <button className="btn btn-success login_btn">Login</button>
                    <p className="login_btn">New to Kolomentor? <a href="menteeSignup">create account</a></p>
                    
                </form>

                
            </div>
        </div>

     );
}
 
export default Mentee_Login;