
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../Sharde/SocialLogin/SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const {singIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
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
        <div className="hero min-h-screen bg-base-200 mb-10">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left w-1/2">
                    {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
                    <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=2000" className='rounded-lg' alt="" />
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input  className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='ml-8'><small>New Here? <Link to="/singup" className='text-red-600 font-bold '>Create an account</Link> </small></p>
                    <SocialLogin></SocialLogin>
                </div>

            </div>
        </div>
   </>

    
    );
};

export default Login;