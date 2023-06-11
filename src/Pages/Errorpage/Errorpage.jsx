import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
<>
<Helmet>
    <title>Summer Camp | Error 404 </title>
</Helmet>
<div>
            <div className='flex justify-center items-center h-screen'>
                <Link to='/'><button className=' text-xl btn btn-primary flex justify-center items-center'><FaHome></FaHome>  Go Back To Home</button></Link>
      
                <img src='https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif' alt="" />

            </div>
        </div>
</>
    );
};

export default Errorpage;