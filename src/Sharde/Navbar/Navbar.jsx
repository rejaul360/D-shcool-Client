import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    

    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }
    // const [isAdmin] = useAdmin()
    // const isAdmin = true
    // console.log(isAdmin);
    // const { user, logOut } = useContext(AuthContext)
    // const[cart] = useCart()

    // const handleLogOut = e => {
    //     logOut()
    //         .then(() => {

    //          })
    //         .catch(error => console.log(error))
    // }

    const navOptions = <>
        <li className='font-bold '><Link to='/'>Home</Link></li>
        <li className='font-bold '><Link to='/class'>Classes</Link></li>
        <li className='font-bold '><Link to='/instractor'>Instractor</Link></li>
        <li className='font-bold'><Link to='/dashboard'>Dashboard</Link></li>
    </>
    return (

        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/" className="logo flex items-center gap-2 h-auto sm:mt-3 w-auto">
                        <img style={{ width: "100px", borderRadius: "50%" }} src="https://img.freepik.com/premium-vector/letter-d-logo-icon-design-template_487414-3688.jpg?w=2000" alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end" >
                    {user ?
                        <>
                            <button onClick={handleLogout} className='btn btn-ghost capitalize'>Logout</button>
                        </> :
                        <>
                            <button className='mx-4 capitalize'><Link to='/singup'>Register</Link></button>
                            <button className='capitalize'><Link to='/login'>Login</Link></button>


                        </>
                    }
                   <span>{user?.photoURL ?
                        <div className="tooltip  tooltip-primary tooltip-animated" data-tip={user?.displayName}>
                            <img style={{ width: "50px", borderRadius: "50%" }} src={user?.photoURL} alt='' />
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