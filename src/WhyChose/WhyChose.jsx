import React from 'react';
import {   FaCalendarAlt, FaExternalLinkAlt, FaGrinAlt, FaLocationArrow, FaLock, FaTrophy } from 'react-icons/fa';



const WhyChose = () => {
    return (
        <div className='border-indigo-300 '>
            <h1 className='text-4xl text-white  text-center py-10 mb-10'>Why Chose Our School</h1>
                <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center w-full text-white">
                 
                    {/* <div className="flex w-full "> */}
                        <div className="flex-1 p-4 flex flex-col items-center" data-aos="fade-down-right">
                            <FaLock className="  mb-2 text-8xl text-cyan-200" />
                            <h1 className="text-center text-2xl">100% Result <br /> Guarantee</h1>
                        </div>
                        <div className="flex-1 p-4 flex flex-col items-center" data-aos="fade-down-left">
                            <FaTrophy className="text-8xl text-cyan-200 mb-2" />
                            <p className="text-center text-2xl">Famous Trainers</p>
                        </div>
                        <div className="flex-1 p-4 flex flex-col items-center" data-aos="fade-down-right">
                            <FaExternalLinkAlt className="text-8xl text-cyan-200 mb-2" />
                            <p className="text-center text-2xl">3 Years Of <br /> Experience</p>
                        </div>
                    {/* </div> */}
                    {/* <div className="flex w-full"> */}
                        <div className="flex-1 p-4 flex flex-col items-center" data-aos="fade-down-left">
                            <FaGrinAlt className="  mb-2 text-8xl text-cyan-200" />
                            <h1 className="text-center text-2xl">1000+ <br /> Happy Clients</h1>
                        </div>

                        <div className="flex-1 p-4 flex flex-col items-center" data-aos="fade-down-right">
                            <FaLocationArrow className="text-8xl text-cyan-200 mb-2" />
                            <p className="text-center text-2xl">Comfortable <br /> Location</p>
                        </div>
                        <div className="flex-1 p-4 flex flex-col items-center" data-aos="fade-down-left">
                            <FaCalendarAlt className="text-8xl text-cyan-200 mb-2" />
                            <p className="text-center text-2xl">Flexible <br /> Timetable</p>
                        </div>
                    {/* </div> */}
                </div>
                </div>
            </div>
      
    );
};

export default WhyChose;