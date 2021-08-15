import React from "react";
const IssueModal = ({ isDisabled, closeModal, allClinics, register, handleSubmit, onSubmit, errors }) => {

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button mt-n5 ps-5" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Submit Issue <i className="fa fa-plus" aria-hidden="true"></i></button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Issue</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="modal-body">
                                <label htmlFor="name" className="form-label">Branch *</label>
                                <select
                                    className="form-select mb-3"
                                    aria-label="Default select example"
                                    {...register("branch", {
                                        required: "Required"
                                    })}>
                                    {allClinics.data && allClinics.data.clinics.map((clinic) =>
                                        <option
                                            key={clinic.id}
                                            value={clinic.id}
                                        >{clinic.name}</option>
                                    )}
                                </select>
                                <label htmlFor="name" className="form-label">Staff *</label>
                                <select className="form-select mb-3" aria-label="Default select example" disabled>

                                </select>
                                <label htmlFor="name" className="form-label">Title *</label>
                                <input
                                    className="form-control mb-3"
                                    type="text"
                                    {...register("title", {
                                        required: "Required"
                                    })}
                                    required />
                                {(errors.title) && <p className="text-danger">{errors.title.message}</p>}
                                <label htmlFor="password" className="form-label">Description *</label>
                                <textarea
                                    className="form-control mb-3"
                                    type="textArea"
                                    {...register("description", {
                                        required: "Required"
                                    })}
                                    required />
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeModal}>Cancel</button>
                                    <button type="submit" className="btn btn-success" disabled={isDisabled}>Save Issue</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default IssueModal;