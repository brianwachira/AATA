import { Link } from "react-router-dom"
import Banner from "../../Components/Banner/Banner"
import "./ComingSoon.scss"

const ComingSoon = () => {

    return (
        <>
            <main className=" container-fluid vh-100">
                <div className="row h-100">
                    <div className="col-12 col-md-5 h-100 d-grid">
                        <figure className="d-flex flex-column align-self-center justify-content-center">
                            <i className="fa fa-medkit  fa-4x icon-custom text-center" aria-hidden="true"></i>
                            {/* <img src="/Assets/images/aa.jpg" alt="" /> */}
                        </figure>
                        <div className="comingsoon-text">
                            <h5 className='text-center'>This dashboard is under construction</h5>
                            <h6 className='text-center mb-5'>We are changing a few aesthetics so that you can have the best analysis experience. We will be back soon.</h6>
                            
                                <div className="d-flex justify-content-center">
                                <Link to='/auth/signup'>
                                    <button className="btn-signup me-2">Sign Up</button>
                                </Link>
                                <Link to='/auth/login'>
                                    <button className="btn-signup">Log In</button>
                                </Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-7 d-none d-md-block">
                        <Banner>
                        </Banner>
                    </div>
                </div>
            </main>
        </>)
}
export default ComingSoon;