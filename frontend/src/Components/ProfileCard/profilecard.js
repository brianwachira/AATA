/* eslint-disable jsx-a11y/img-redundant-alt */
import './profilecard.scss'

const ProfileCard = (props) => {
    const {firstName, lastName, email} = props;
    return (
        <>
            <div className="d-flex">
                <div className="flex-grow-1 ms-3 me-2">
                 <h5 className="mb-0"><small>{firstName} {lastName}</small></h5>
                 <p><small>{email}</small></p>
                </div>
                <div className="flex-shrink-0 me-3">
                <i className="fa fa-user h2 icon-sidebars" aria-hidden="true"></i>                    
                </div>
            </div>
        </>
    )
}
export default ProfileCard;
