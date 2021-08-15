import { Link } from "react-router-dom"
import Layout from "../../Components/Layout/layout"
import comingsoon from '../../Assets/Images/undraw_under_construction_46pa.svg'
const Home = ({meResult}) => {

    if (!meResult.data) {
        return (<>loading...</>)
    }

    return (
    <>
    <Layout meResult={meResult.data.me && meResult.data.me}>
        <div className="container">
            <h2 className="text-center my-3">This Page Is Under Construction...Will Be Up Soon</h2>
            <div className="d-flex justify-content-center mb-3">

            <Link to="/analytics"><button className="btn btn-signup">Analytics</button></Link>
            </div>
            <img src={comingsoon} alt={comingsoon} className="img-fluid mx-auto position-absolute top-50 start-50 translate-middle pe-none"/>
        </div>
    </Layout>
    </>
    )
}

export default Home;