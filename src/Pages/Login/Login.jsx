
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../Sharde/SocialLogin/SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import"./Login.css"

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { singIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        singIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset();
                Swal.fire({
                    title: ' Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

return (

    <>
        <Helmet>
            <title>Summer Camp | Login</title>
        </Helmet>
        <div className="hero  mb-10">
            <div></div>
            <div className="hero-content ">
                <div className="text-center lg:text-left ">

                    {/* <img src="https://www.allen.ac.in/apps2223/assets/images/reset-password.jpg" alt="" /> */}
                </div>
                <div className=" shadow-2xl w-full stylebd text-white md:px-14">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body text-black text-xl  font-bold">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered " />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password"  {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn  text-xl font-bold" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='ml-8'><small>Create an account <Link to="/singup " className='text-red-600 font-bold '>Registration</Link></small></p>
                    <p className='boderB w-11/12 mx-auto mt-5'> </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    </>


);
};

export default Login;