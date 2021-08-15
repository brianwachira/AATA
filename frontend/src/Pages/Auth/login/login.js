import "./login.scss"
import { useForm } from 'react-hook-form';
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../../graphql/mutations";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ setTitle, setMessage, setToken }) => {
    const { register, handleSubmit } = useForm();
    const [isDisabled, setisDisabled] = useState(false);
    const [login, result] = useMutation(LOGIN, {
        onError: (error) => {
            setTitle("Error")
            setMessage(error.message)
            setTimeout(() => {
                setTitle(null)
                setMessage(null)
                setisDisabled(false)
            }, 6000)
        }
    })

    useEffect(() => {
        if (result.data) {
            const token = result.data.login.value
            localStorage.setItem('token', token);
            setMessage('Login Successfull ! Redirecting...');
            setTitle('Login Successfull')
            setTimeout(() => {
                setTitle(null)
                setMessage(null)
                window.location.href = `${window.location.protocol}//${window.location.host}`
            }, 2000)
        }
    }, [result.data, setMessage, setTitle])
    const onSubmit = async data => {
        //disable login button
        setisDisabled(false);

        //set alert
        setMessage('Please wait...');
        setTitle('Loading');
        const { email, password } = data;

        login({
            variables: { email, password }
        })
    };
    return (
        <>
            <section className="form-container">
                <main className="form-signin">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <i className="fa fa-medkit  fa-4x icon-custom mb-4" aria-hidden="true"></i>
                        <p className="h5 mb-3 fw-normal text-center">Please sign in</p>
                        <div className="form-floating mb-2">
                            <input
                                className="form-control"
                                type="email"
                                {...register("email", {
                                    required: "Required"
                                })} required />
                            <label htmlFor="email" className="form-label">Email</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input
                                className="form-control"
                                type="password"
                                {...register("password")} />
                            <label htmlFor="password" className="form-label">Password</label>
                        </div>
                        <p className="mt-2">Don't have an account? <Link to="/auth/signup">Sign Up</Link></p>
                        <button type="submit" className="w-50 btn btn-signup mt-2" disabled={isDisabled}>Login</button>
                    </form>
                </main>
            </section>
        </>
    )
}
export default Login;