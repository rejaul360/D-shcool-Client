import React from 'react';
import { FaHome, FaCheckCircle, FaWallet, FaEnvelopeOpenText } from 'react-icons/fa';
import { NavLink, Outlet,Link } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import { Helmet } from 'react-helmet-async';
import useInstractor from '../Hooks/useInstractor';
import { motion } from "framer-motion"


const Dashboard = () => {

    const [isAdmin] = useAdmin()
    const [isInstractor] = useInstractor()
    // console.log(isInstractor);

    // const isAdmin = true;
    return (
        <>
            <Helmet>
                <title>Summer Camp | Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  justify-center p-10 ">

                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#54c7d1] rounded-lg ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 space-y-4">


                        {
                            isAdmin ? (<div>

                                <h1 className='font-bold text-2xl py-4'>Admin Dashboard</h1>
                                <div className="divider"></div>


                                <motion.li
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <li className='font-semibold text-xl'><NavLink to="/dashboard/manageuser"><FaCheckCircle></FaCheckCircle> Manage User</NavLink></li>
                                </motion.li>
                                <motion.li
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <li className='font-semibold text-xl'><NavLink to="/dashboard/manageclass"><FaHome></FaHome> Manage Classes</NavLink></li>
                                </motion.li>
                            </div>)
                                :
                                isInstractor ? (<div>
                                    <h1 className='font-bold text-2xl py-4'>Instractor Dashboard</h1>
                                    <div className="divider"></div>
                                    <motion.li
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <li className='font-semibold text-xl'><NavLink to="/dashboard/addclass"><FaHome></FaHome> Add Class</NavLink></li>
                                    </motion.li>
                                    <motion.li
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <li className='font-semibold text-xl'><NavLink to="/dashboard/myclass"><FaCheckCircle></FaCheckCircle> My Classes</NavLink></li>
                                    </motion.li>
                                </div>) :
                                    (<div>
                                        <>
                                            <h1 className='font-bold text-2xl py-4'>Student Dashboard</h1>
                                            <div className="divider"></div>
                                            <motion.li
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <li className='font-semibold text-xl'><NavLink to="/dashboard/selected"><FaCheckCircle></FaCheckCircle> Selected Class</NavLink></li>
                                            </motion.li>

                                            <motion.li
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <li className='font-semibold text-xl'><NavLink to="/dashboard/enrolled"><FaEnvelopeOpenText></FaEnvelopeOpenText> Enrolled Class </NavLink></li>
                                            </motion.li>
                                            <motion.li
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <li className='font-semibold text-xl'><NavLink to="/dashboard/Paymenthistory"><FaWallet></FaWallet>Payment History</NavLink></li>
                                            </motion.li>
                                        </>
                                    </div>)
                        }
                        <div className="divider"></div>
                        <motion.li
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <li className='font-semibold text-xl'><Link to="/"><FaHome></FaHome> Home</Link> </li>
                        </motion.li>

                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;