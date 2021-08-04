import "./signup.scss"

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
const Signup = () => {

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

    const { register, formState: { errors }, handleSubmit, watch } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = async data => {
        console.log(data)
      };
    return (
        <>
            <main className="container-fluid vh-100">
                <div className="row h-100">
                    <figure className="d-flex flex-column align-self-center justify-content-center">
                        <i class="fa fa-medkit  fa-4x icon-custom text-center" aria-hidden="true"></i>
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
                                    })} required/>
                                <label htmlFor="lastname" className="form-label">First Name</label>
                            </div>
                            <div className="form-floating mb-2">
                                <input
                                    className="form-control"
                                    type="text"
                                    {...register("lastName", {
                                        required: "Required"
                                    })} required/>
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
                                    })} required/>
                                <label htmlFor="Date" className="form-label">Date Of Birth</label>
                            </div>
                            <label for="Gender" class="form-label">Gender</label><br />
                            <div class="form-check form-check-inline">
                                <input
                                    className="form-check-input" 
                                    type="radio" 
                                    name="gender" 
                                    value="m"
                                    {...register("gender")} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="gender"
                                    value="f" 
                                    {...register("gender")} />
                                <label class="form-check-label" for="flexRadioDefault2">
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
                                    })}  required/>
                                <label htmlFor="firstname" className="form-label">National ID</label>
                            </div>
                            <div className="form-floating mb-2">
                                <input
                                    className="form-control"
                                    type="text"
                                    {...register("phone", {
                                        required: "Required"
                                    })}  required/>
                                <label htmlFor="firstname" className="form-label">Phone Number</label>
                            </div>
                            <div className="form-floating mb-2">
                                <input
                                    className="form-control"
                                    type="email"
                                    {...register("email", {
                                        required: "Required"
                                    })}  required/>
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
                            <div className="d-flex justify-content-center mt-md-5">
                                <button type="submit" className="w-50 btn btn-signup">Sign Up</button>
                            </div>
                        </form>
                    </div>

                </div>
            </main>
        </>
    )
};

export default Signup