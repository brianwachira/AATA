const Notification = ({ title, message }) => {

    if(!title || !message) {
        return null;
    }
    return (
        <>
            <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 5 }}>
                <div className={`toast fade show bg-orange text-blue`} role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <img src="..." className="rounded me-2" alt="..." />
                        <strong className="me-auto">{title}</strong>
                        <small className="text-muted">just now</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        <p className="text-danger">{message}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Notification;