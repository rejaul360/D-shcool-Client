import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import "./PopularInstractor.css"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const PopularInstractor = () => {

    const { user } = useContext(AuthContext)
    const [instractors, setInstractors] = useState([])

    useEffect(() => {
        fetch('https://summer-camp-server-ochre-six.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setInstractors(data)
            })

    }, [user])

    const teachers = instractors.filter(item => item.role === 'instractor');
    console.log(teachers);
    return (
        <div>
            <div className='my-8 md:mx-auto'>

                <div className=''>
                    <h1 className='text-center text-4xl text-white py-10 mb-10'>Meet Our Instructors </h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                    {
                        teachers?.slice(0, 6).map((item) => (

                            <div className="card card-compact w-96 hover:scale-90 stylebd text-white shadow-xl transition-transform duration-500 ease-in-out"

                            >
                                <figure
                                    data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1000"
                                >
                                    <img src={item.img} alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className='font-bold'>Instructor: <span className=''>{item.name}</span></h2>
                                    <p>{item.email}</p>
                                    <div className="card-actions justify-center text-2xl gap-8 py-4 mt-4 ">
                                        <i><FaFacebook  data-aos="zoom-in"></FaFacebook></i>
                                        <i> <FaTwitter  data-aos="zoom-in"></FaTwitter></i>
                                        <i> <FaInstagram  data-aos="zoom-in"></FaInstagram></i>
                                    </div>
                                </div>
                            </div>

                        ))
                    }

                </div>

            </div>

        </div>
    );
};

export default PopularInstractor;