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
            <h2 className="text-center my-5">This Page Is Under Construction...Will Be Up Soon</h2>
            <img src={comingsoon} alt={comingsoon} className="img-fluid mx-auto position-absolute"/>
        </div>
    </Layout>
    </>
    )
}

export default Home;