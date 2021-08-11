import { Link } from "react-router-dom"
import pageNotFound from '../../Assets/Images/404.svg'

const PageNotFound = () => {

    return (
    <>
        <div className="container">
            <h2 className="text-center my-3">This Page Is Unavailable</h2>
            <div className="d-flex justify-content-center flex-column mb-3">

                <Link to="/"><button className="btn btn-signup ">Go To Home</button></Link>
                <img src={pageNotFound} alt={pageNotFound} className="img-fluid mx-auto"/>
            </div>
        </div>
    </>
    )
}

export default PageNotFound;