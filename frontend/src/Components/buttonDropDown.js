import { Link } from 'react-router-dom';

const ButtonDropDown = (props) => {

    const { object, className } = props
    return (
        <>
            <div className={`${className} d-flex justify-content-between`}>

                <button type="button" className=" btn-style-none">{object.name}{object.title}</button>
                <button type="button" className=" btn-style-none dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-ellipsis-v text-right" aria-hidden="true"></i>
                </button>
                <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" to={object.id}>View More</Link></li>
                </ul>
            </div>
        </>
    )
}
export default ButtonDropDown