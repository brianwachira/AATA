import { Link } from "react-router-dom"
import ProfileCard from "../ProfileCard/profilecard";
import './navbar.scss'
const NavBar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/'  className="navbar-brand">
                        <button type="button" className="btn btn-outline-dark">Add Assessment <i className="fa fa-plus" aria-hidden="true"></i></button>
                    </Link>
                    <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle d-block d-lg-none" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="w-100 navbar-nav justify-content-center nav justify-content-lg-end">
                            <li className="nav-item pt-2 pe-5">
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-1">24k/24k patients seen</p>
                            </li>
                            <li className="nav-item d-none d-lg-block">
                                <ProfileCard
                                    firstName="Sandra"
                                    lastName="Mamai"
                                    email="smamai@accessafya.com" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;