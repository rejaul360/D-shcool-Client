import React from 'react';
import "./PricingTable.css"
import { Link } from 'react-router-dom';

const PricingTable = () => {
    return (
        <div className='py-10 mb-10'>
            <h1 className="text-4xl text-center text-white py-6 my-6">Pricing Table</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-center mx-auto items-center w-full text-white'>
                <div className="card w-72 border_bd overflow-hidden shadow-2xl mx-auto"
                    data-aos="fade-right"
                    data-aos-offset="400"
                    data-aos-easing="ease-in-sine"
                >

                    <div className="card-body space-y-1 " >
                        <h1 className='text-4xl mb-2'>Light</h1>
                        <h2 className="text-5xl text-center text-yellow-200 p-4">$ 80</h2>
                        <p className='text-xl '>1 Individual Class</p>
                        <div className='border-b'></div>
                        <p className='text-xl'>1 Dance Style</p>
                        <div className='border-b'></div>
                        <p className='text-xl'>2 Days / Week</p>

                        <div className="">
                        <Link to="/class"><button className="btn btn-outline btn-info mt-5 text-white">Book Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-72  border_bd overflow-hidden shadow-2xl mx-auto"

                    data-aos="fade-up"
                    data-aos-duration="3000"
                >

                    <div className="card-body  space-y-1">
                        <h1 className='text-4xl mb-2'>Standart</h1>
                        <h2 className="text-5xl text-center text-yellow-200 p-4">$ 120</h2>
                        <p className='text-xl'>2 Individual Class</p>
                        <div className='boderB'></div>     <div className='border-b'></div>       
                        <p className='text-xl'>2 Dance Style</p>
                        <div className='border-b'></div>
                        <p className='text-xl'>3 Days / Week</p>

                        <div className="">
                            <Link to="/class"><button className="btn btn-outline btn-info mt-5 text-white">Book Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-72 border_bd overflow-hidden shadow-2xl mx-auto"
                    data-aos="fade-left"
                    data-aos-offset="400"
                    data-aos-easing="ease-in-sine"
                >
                    <div className="card-body space-y-1" >
                        <h1 className='text-4xl mb-2'>Premium</h1>
                        <h2 className="text-5xl text-center text-yellow-200 p-4">$ 150</h2>
                        <p className='text-xl'>5 Individual Class</p>
                        <div className='border-b'></div>
                        <p className='text-xl'>All Dance Styles</p>
                        <div className='border-b'></div>
                        <p className='text-xl'>Any Day</p>

                        <div className="">
                        <Link to="/class"><button className="btn btn-outline btn-info mt-5 text-white">Book Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingTable;