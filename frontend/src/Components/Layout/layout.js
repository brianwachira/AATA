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
                        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
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