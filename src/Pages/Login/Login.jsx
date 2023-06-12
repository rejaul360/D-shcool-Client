
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../Sharde/SocialLogin/SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';

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


    // createUser(data.email, data.password)
    //     .then(result => {

    //         const loggedUser = result.user;
    //         console.log(loggedUser);

    //         updateUserProfile(data.name, data.photoURL)
    //             .then(() => {
    //                 const saveUser = { name: data.name, email: data.email, img:data.photoURL }
    //                 fetch('https://summer-camp-server-rejaul360.vercel.app/users',{
    //                     method: 'POST',
    //                     headers: {
    //                         'content-type' : 'application/json'
    //                     },
    //                     body: JSON.stringify(saveUser)
    //                 })
    //                     .then(res => res.json())
    //                     .then(data => {
    //                         if (data.insertedId) {
    //                             // reset();
    //                             Swal.fire({
    //                                 position: 'top-end',
    //                                 icon: 'success',
    //                                 title: 'User created successfully.',
    //                                 showConfirmButton: false,
    //                                 timer: 1500
    //                             });
    //                             navigate('/');
    //                         } 
    //                     })
    //             })
    //             .catch(error => console.log(error))
    //     })



// const handleLogin = event => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email, password);
//     singIn(email, password)
//         .then(result => {
//             const user = result.user;
//             console.log(user);
//             Swal.fire({
//                 title: ' Login Successful.',
//                 showClass: {
//                     popup: 'animate__animated animate__fadeInDown'
//                 },
//                 hideClass: {
//                     popup: 'animate__animated animate__fadeOutUp'
//                 }
//             });
//             navigate(from, { replace: true });
//         })
// }

return (

    <>
        <Helmet>
            <title>Summer Camp | Login</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-200 mb-10">
            <div></div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">

                    <img src="https://www.allen.ac.in/apps2223/assets/images/reset-password.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 max-w-sm w-1/2 shadow-2xl bg-base-100">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
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
                            <input className="btn btn-primary text-xl" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='ml-8'><small>Create an account <Link to="/singup " className='text-red-600 font-bold '>Registration</Link></small></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    </>


);
};

export default Login;