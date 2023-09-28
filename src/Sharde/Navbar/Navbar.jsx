import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import './Nvabar.css'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }
    const navOptions = <>
        {user ? (
            <>
                <li className='text-xl'><Link to='/'>Home</Link></li>
                <li className='text-xl'><Link to='/class'>Classes</Link></li>
                <li className='text-xl'><Link to='/instructor'>Instructor</Link></li>
                <li className='text-xl'><Link to='/dashboard'>Dashboard</Link></li>
            </>


        ) : (
            <>
                <li className='text-xl'><Link to='/'>Home</Link></li>
                <li className='text-xl'><Link to='/class'>Classes</Link></li>
                <li className='text-xl'><Link to='/instructor'>Instructor</Link></li>
            </>
        )}
    </>
    return (

        <div >
            <div className="navbar text-xl  text-white" >
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg_colorsss  rounded-box w-52 z-[1000]  to-black">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/" className="logo flex items-center gap-2 h-auto sm:mt-3 w-auto">
                        {/* <img style={{ width: "100px", borderRadius: "50%" }} src="https://img.freepik.com/premium-vector/letter-d-logo-icon-design-template_487414-3688.jpg?w=2000" alt="" /> */}
                        <h1 className='text-5xl gdc'><span className='font-bold italic'>D</span><small className='uppercase text-2xl'>ance</small> </h1>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 z-[1000] to-black">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end" >
                    {user ?
                        <>
                            <button onClick={handleLogout} className='btn btn-ghost capitalize mr-3 text-xl'>Logout</button>
                        </> :
                        <>
                            <button className='mx-4 capitalize text-xl'><Link to='/singup'>Register</Link></button>
                            <button className='capitalize text-xl'><Link to='/login'>Login</Link></button>


                        </>
                    }
                    <span>{user?.photoURL ?
                        <div className="tooltip  tooltip-primary tooltip-animated" data-tip={user?.displayName}>
                            <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src={user?.photoURL} alt='' />
                        </div>
                        :
                        <FaUserCircle className='text-[25px] ml-4'></FaUserCircle>
                    }</span>

                </div>
            </div>
        </div>

    );
};

export default Navbar;