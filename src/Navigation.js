const Nav = () => {
    return ( 
        <div className="row bg-light ">
            <div className="col-1">
            
            </div>

            <div className="col-10 btn">
            <nav class="navbar  nav-position navbar-expand-lg navbar-light bg-light fixed-top">
                <div class="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand kolomentor" href="/">Kolomentor</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Explore</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link ">Community</a>
                        </li>
                    </ul>
                    
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                                            

                    </div>
                </div>
            </nav>

            </div>
        </div>
    );
}
 
export default Nav;