import NavBar from "../Navbar/navbar";
import SideBar from "../SideBar/sidebar";

const Layout = (props) => {
    const { children, meResult } = props;
    return (
        <>
            <main>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-auto px-0 bg-light sticky-top shadow">
                            <SideBar />
                        </div>
                        <div className="col ps-0 pt-0 pe-0 py-3 min-vh-100">
                            <NavBar meResult={meResult}/>
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Layout;