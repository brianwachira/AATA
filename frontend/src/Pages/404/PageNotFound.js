import { Link } from "react-router-dom"
import pageNotFound from '../../Assets/Images/404.svg'

const PageNotFound = () => {

    return (
        <>
            <div className="container vh-100 d-grid align-items-start">
                <h2 className="text-center my-5">This Page Is Unavailable<br/>Go To  <Link to="/"><button className="btn btn-signup ">Home</button></Link></h2>
                <img src={pageNotFound} alt={pageNotFound} className="img-fluid mx-auto position-absolute top-50 start-50 translate-middle" />
            </div>
        </>
    )
}

export default PageNotFound;