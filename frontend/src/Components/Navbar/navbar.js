import { Link } from "react-router-dom"
const NavBar = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to='/' passHref><a class="navbar-brand" href="replace"><i className="fa fa-medkit  fa-3x icon-custom text-center" aria-hidden="true"></i></a></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="w-100 navbar-nav justify-contend-end nav justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;