import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <div className="row bg-light ">
            <div className="col-1">

            </div>

            <div className="col-10 btn">
                <nav className="navbar  nav-position navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand kolomentor" to="/">Kolomentor</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="#">Explore</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link "  to="#">Community</Link>
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

export default Navigation;