import React from 'react';
import Navbar from '../Sharde/Navbar/Navbar';
import Footer from '../Sharde/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    // const location = useLocation()
    // const noHewaderFooter = location.pathname.includes('login') ||  location.pathname.includes('singup')
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;