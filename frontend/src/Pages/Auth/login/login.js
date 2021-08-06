import "./login.scss"
import { useForm } from 'react-hook-form';
const Login = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async data => {
        const { email, password } = data;
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
                                value="admin@admin.com"
                                {...register("email", {
                                    required: "Required"
                                })} required />
                            <label htmlFor="email" className="form-label">Email</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input
                                className="form-control"
                                type="password"
                                value="admin123"
                                {...register("password")} />
                            <label htmlFor="password" className="form-label">Password</label>
                        </div>
                        <button type="submit" className="w-50 btn btn-signup">Login</button>
                    </form>
                </main>
            </section>
        </>
    )
}
export default Login;