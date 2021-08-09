import { Link } from 'react-router-dom';

const ButtonDropDown = (props) => {

    const { object, className } = props

    const {branch} = object

    return (
        <>
            <div className={`${className} d-flex justify-content-between`}>

                <button type="button" className=" btn-style-none"><span className="text-left">{object.name}{object.title}</span>
                {branch && <p><small>{branch.name}</small></p>}</button>
                
                <button type="button" className=" btn-style-none dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa fa-ellipsis-v text-right" aria-hidden="true"></i>
                </button>
                <ul class="dropdown-menu">
                    <li><Link className="dropdown-item" to={object.id}>View More</Link></li>
                </ul>
            </div>
        </>
    )
}
export default ButtonDropDown