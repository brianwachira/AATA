import './profilecard.scss'

const profilecard = (props) => {
    const {firstName, lastName, email} = props;
    return (
        <>
            <div className="d-flex align-items-center">
                <div className="flex-grow-1 ms-3">
                 <h4><small>{firstName} {lastName}</small></h4>
                 <p><small>{email}</small></p>
                </div>
                <div className="flex-shrink-0">
                    <img src="" alt="Profile Image" />
                </div>
            </div>
        </>
    )
}
