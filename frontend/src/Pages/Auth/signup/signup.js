import "./signup.scss"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useMutation } from "@apollo/client";
import { CREATE_DISPATCH_OFFICER } from "../../../graphql/mutations";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Signup = ({ setMessage, setTitle }) => {
    const [isDisabled, setisDisabled] = useState(false);
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Passwords does not match'),
        gender: Yup.string()
            .required('Gender is required')

    })
    const [createDispatchOfficer, result] = useMutation(CREATE_DISPATCH_OFFICER, {
        onError: (error) => {
            setMessage(error.message);
            setTitle('Error')
            setTimeout(() => {
                setTitle(null)
                setMessage(null)
                setisDisabled(false)
            }, 6000)
        },
    });

    useEffect(() => {
        if (result.data) {
            setMessage('Account Created Successfully ! Redirecting..');
            setTitle('Account Created Successfully')
            setTimeout(() => {
                setTitle(null)
                setMessage(null)
                window.location.href = `${window.location.protocol}//${window.location.host}/auth/login`
            }, 2000)
        }
    }, [result.data, setMessage, setTitle])
    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = async data => {

        //set alert
        setMessage('Please wait...');
        setTitle('Saving');
        const { firstName, lastName, dob, gender, id, phoneNo, email, password } = data;
        createDispatchOfficer({ variables: { firstName, lastName, dob, gender, id, phoneNo, email, password } });

    };
    return (
        <>
            <main className="container-fluid vh-100">
                <div className="row h-100">
                    <figure className="d-flex flex-column align-self-center justify-content-center">
                        <i className="fa fa-medkit  fa-4x icon-custom text-center" aria-hidden="true"></i>
                        {/* <img src="/Assets/images/aa.jpg" alt="" /> */}
                    </figure>
                    <div className="form">
                        <h3 className="text-center mb-md-5">Sign Up</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-floating mb-2">
                                <input
                                    className="form-control"
                                    type="text"
                                    {...register("firstName", {
                                        required: "Required"
                                    })} required />
                                <label htmlFor="lastname" className="form-label">First Name</label>
                            </div>
                            <div className="form-floating mb-2">
                                <input
                                    className="form-control"
                                    type="text"
                                    {...register("lastName", {
                                        required: "Required"
                                    })} required />
                                <label htmlFor="firstname" className="form-label">Last Name</label>
                            </div>
                            <div className="form-floating mb-2">
                                <input
                                    className="form-control"
                                    type="date"
                                    name=""
                                    id=""
                                    {...register("dob", {
                                        required: "Required"
                                    })} required />
                                <label htmlFor="Date" className="form-label">Date Of Birth</label>
                            </div>
                            <label htmlFor="Gender" className="form-label">Gender</label><br />
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    value="m"
                                    {...register("gender")} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check form-check-inline mn-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    value="f"
                                    {...register("gender")} />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Female
                                </label>
                            </div>

                            {(errors.gender) && <p className="text-danger">{errors.gender.message}</p>}
                            <div className="form-floating mb-2">
                                <input
                                    className="form-control"
                                    type="text"
                                    {...register("id", {
                                        required: "Required"
                                    })} required
                                    pattern="^\d{2}\d{2}\d{2}\d{2}$"
                                    placeholder="0XXXXXXXXX" />
                                <label htmlFor="firstname" className="form-label">National ID (format: XXXXXXXX)</label>
                            </div>
                            <div className="form-floating mb-2">
                                <input
                                    className="form-control"
                                    type="tel"
                                    {...register("phoneNo", {
                                        required: "Required"
                                    })} required
                                    pattern="^\d{4}\d{3}\d{3}$"
                                    placeholder="0XXXXXXXXX" />
                                <label htmlFor="firstname" className="form-label">Phone Number (format: 0XXXXXXXXX)</label>
                            </div>
                            <div className="form-floating mb-2">
                                <input
                                    className="form-control"
                                    type="email"
                                    {...register("email", {
                                        required: "Required"
                                    })} required />
                                <label htmlFor="firstname" className="form-label">Email</label>
                            </div>
                            <div className="form-floating mb-2">
                                <input
                                    className="form-control"
                                    type="password"
                                    {...register("password")} />
                                <label htmlFor="password" className="form-label">Password</label>
                            </div>
                            {(errors.password) && <p className="text-danger">{errors.password.message}</p>}
                            <div className="form-floating">
                                <input
                                    className="form-control"
                                    type="password"
                                    {...register("confirmPassword")} />
                                <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                            </div>
                            {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
                            <p className="mt-2">Already have an account? <Link to="/auth/login">Sign In</Link></p>
                            <div className="d-flex justify-content-center mt-md-5">
                                <button type="submit" className="w-50 btn btn-signup" disabled={isDisabled}>Sign Up</button>
                            </div>
                        </form>
                    </div>

                </div>
            </main>
        </>
    )
};

export default Signup