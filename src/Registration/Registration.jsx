import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import"./Registration.css"

import SocialLogin from '../Sharde/SocialLogin/SocialLogin';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Registration = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {

                        const saveUser = { name: data.name, img: data.photoURL, email: data.email }
                        fetch('https://summer-camp-server-ochre-six.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    };
    return (
        <>
            <Helmet>
                <title>Summer Camp | Registration</title>
            </Helmet>
            <div className="hero  mb-10">
                <div></div>
                <div className="hero-content ">
                    <div className="text-center lg:text-left ">

                        {/* <img src="https://www.allen.ac.in/apps2223/assets/images/reset-password.jpg" alt="" /> */}
                    </div>
                    <div className="card  w-full shadow-2xl stylebd text-white">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body text-black text-xl font-bold">
                            <div className='flex '>
                                <div className="form-control mr-5">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input type="text "  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered " />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Photo URL</span>
                                    </label>
                                    <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                </div>
                            </div>
                            <div className='flex'>
                                <div className="form-control mr-5">
                                    <label className="label ">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
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
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Confirm Password</span>
                                </label>
                                <input type="password"  {...register("confirm password", {
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
                                <input className="btn  text-xl font-bold" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='ml-8'>Already have an account <Link to="/login " className='text-red-600 font-bold '>Login</Link></p>
                        <p className='boderB w-11/12 mx-auto mt-5'> </p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;