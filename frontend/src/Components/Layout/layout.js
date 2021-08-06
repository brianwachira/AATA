import NavBar from "../Navbar/navbar";
import SideBar from "../SideBar/sidebar";

const Layout = (props) => {
    const { children } = props;
    return (
        <>
            <main>
                <NavBar />
                <div className="container-fluid">
                    <div className="row flex-nowrap">
                        <div className="col-sm-auto bg-light sticky-top">
                            <SideBar/>
                        </div>
                        <div className="col py-3">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Layout;