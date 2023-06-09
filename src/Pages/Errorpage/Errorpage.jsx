import React from 'react';
import { Helmet } from 'react-helmet-async';

const Errorpage = () => {
    return (
<>
<Helmet>
    <title>Summer Camp | Error 404 </title>
</Helmet>
<div>
            <div className='flex justify-center items-center h-screen'>
      
                <img src='https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif' alt="" />

            </div>
        </div>
</>
    );
};

export default Errorpage;