import React from 'react';
import { FaHome, FaCheckCircle, FaWallet, FaEnvelopeOpenText } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import { Helmet } from 'react-helmet-async';
import useInstractor from '../Hooks/useInstractor';


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
                <div className="drawer-content flex flex-col items-center justify-center">

                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#54c7d1] rounded-lg ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 space-y-4">


                        {
                            isAdmin ? (<div>
                                <li><NavLink to="/dashboard/manageclass"><FaHome></FaHome> Manage Classes</NavLink></li>
                                <li><NavLink to="/dashboard/manageuser"><FaCheckCircle></FaCheckCircle> Manage User</NavLink></li>
                            </div>)
                                :
                                isInstractor ? (<div>
                                    <li><NavLink to="/dashboard/manageclass"><FaHome></FaHome> Add Class</NavLink></li>
                                    <li><NavLink to="/dashboard/manageuser"><FaCheckCircle></FaCheckCircle> Add feedback</NavLink></li>
                                </div>) :
                                    (<div>
                                        <>
                                            <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> Student Home</NavLink></li>
                                            <li><NavLink to="/dashboard/selected"><FaCheckCircle></FaCheckCircle> Selected Class</NavLink></li>
                                            <li><NavLink to="/dashboard/enrolled"><FaEnvelopeOpenText></FaEnvelopeOpenText> Enrolled Class </NavLink></li>
                                            <li><NavLink to="/dashboard/Paymenthistory"><FaWallet></FaWallet>Payment History</NavLink></li>
                                        </>
                                    </div>)
                        }


                        {/* {
                            isAdmin ? (<div> <>
                                <li><NavLink to="/dashboard/manageclass"><FaHome></FaHome> Manage Classes</NavLink></li>
                                <li><NavLink to="/dashboard/manageuser"><FaCheckCircle></FaCheckCircle> Manage User</NavLink></li>
                            </>
                            </div>)



                                (<div> <>
                                    <li><NavLink to="/dashboard/manageclass"><FaHome></FaHome> Manage Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/manageuser"><FaCheckCircle></FaCheckCircle> Manage User</NavLink></li>
                                </>
                                </div>)
                                :
                                <>
                                    <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> Student Home</NavLink></li>
                                    <li><NavLink to="/dashboard/selected"><FaCheckCircle></FaCheckCircle> Selected Class</NavLink></li>
                                    <li><NavLink to="/dashboard/enrolled"><FaEnvelopeOpenText></FaEnvelopeOpenText> Enrolled Class </NavLink></li>
                                    <li><NavLink to="/dashboard/Paymenthistory"><FaWallet></FaWallet>Payment History</NavLink></li>
                                </>
                        } */}

                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;