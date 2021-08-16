import { Link, NavLink } from 'react-router-dom';
import ButtonDropDown from '../buttonDropDown';
import './InnerSideBar.scss'
const InnerSideBar = (props) => {

    const { allClinics,clinicWithIssues } = props;

    if (!allClinics.data) {
        return (<>loading...</>)
    }
    return (
        <>
            <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
                <NavLink to="/analytics" className="d-flex align-items-start pb-sm-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <small>VISITS</small>
                </NavLink>
                <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
                    {clinicWithIssues && clinicWithIssues.map((clinic) =>
                        <li 
                            key={clinic.id}
                            className="nav-item dropdown btn-group mb-3 w-100">
                            <div className="btn-custom w-100">
                                <Link className="nav-link">
                                    <ButtonDropDown object={clinic} />
                                </Link>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}
export default InnerSideBar