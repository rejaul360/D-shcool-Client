import React from 'react';
import Marquee from "react-fast-marquee";

const Sopnsor = () => {
    return (
        <div>
            <h1 className='text-4xl text-white  text-center py-10 mb-10'> Our Sponsors</h1>
            <Marquee className='text-white'>
                <div className='grid grid-cols-3 md:grid-cols-6'> 
                    <div className='overflow-hidden p-8'>
                        <img className='hover:scale-110 duration-300' style={{ width: "150px", height: "150px", borderRadius: "5%" }} src="https://i.ibb.co/Ms2db3c/main-qimg-0ae17e957ea9f35266abccabc044686a-1-1.png" alt="" />
                    </div>
                    <div className='overflow-hidden p-8'>
                        <img className='hover:scale-110 duration-300' style={{ width: "150px", height: "150px", borderRadius: "5%" }} src="https://i.ibb.co/QmL7XnJ/main-qimg-0ae17e957ea9f35266abccabc044686a-1-2.png" alt="" />
                    </div>
                    <div className='overflow-hidden p-8'>
                        <img className='hover:scale-110 duration-300' style={{ width: "150px", height: "150px", borderRadius: "5%" }} src="https://i.ibb.co/D5h8qg4/main-qimg-0ae17e957ea9f35266abccabc044686a-5.png" alt="" />
                    </div>
                    <div className='overflow-hidden p-8'>
                        <img className='hover:scale-110 duration-300' style={{ width: "150px", height: "150px", borderRadius: "5%" }} src="https://i.ibb.co/GHq2XbP/main-qimg-0ae17e957ea9f35266abccabc044686a-1.png" alt="" />
                    </div>
                    <div className='overflow-hidden p-8'>
                        <img className='hover:scale-110 duration-300' style={{ width: "150px", height: "150px", borderRadius: "5%" }} src="https://i.ibb.co/PhKGm2y/main-qimg-0ae17e957ea9f35266abccabc044686a.png" alt="" />
                    </div>
                    <div className='overflow-hidden p-8'>
                        <img className='hover:scale-110 duration-300' style={{ width: "150px", height: "150px", borderRadius: "5%" }} src="https://i.ibb.co/88cXmn1/main-qimg-0ae17e957ea9f35266abccabc044686a-2.png" alt="" />
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Sopnsor;