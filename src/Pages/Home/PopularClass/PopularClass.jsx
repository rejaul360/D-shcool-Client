import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import "./PopularClass.css"




const PopularClass = () => {
    const {user} = useContext(AuthContext)
    const [dances, setDances] = useState([])
    useEffect(() => {
        fetch('https://summer-camp-server-ochre-six.vercel.app/class')
            .then(res => res.json())
            .then(data => {
                setDances(data)
                console.log(setDances);

            })
    }, [user])

    console.log(dances);

    const popularclass = dances.filter(item => item.status === 'approved');
    // console.log(popularclass);

    return (
        <div className=' '>
            
            <div>
            <h1 className='text-center  text-white text-4xl py-10 mb-10'>Popular Dance Class</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

            {
                popularclass?.slice(0,6).map((item) => (
                    <div className="card w-96 shadow-xl hover:scale-90 stylebd text-white bg_style  transition-transform duration-500 ease-in-out">
                        <figure className="px-10 pt-10">
                            <img src={item.photo} alt="Shoes" className="rounded-xl"  data-aos="zoom-in" />
                        </figure>
                        <div className="card-body  ">
                            <p className='text font-bold' data-aos="fade-left">Name : <span className=''>{item.name}</span> </p>
                            <h2 className='text font-semibold' data-aos="fade-left">Instractor : {item.instractor}</h2>
                                <p className='' data-aos="fade-left">Email : {item.postedBy}</p>
                                <p className='font-bold' data-aos="fade-left">Set : {item.set}</p>
                                <p className='font-bold' data-aos="fade-left">Price : ${item.price}</p>
                        </div>
                    </div>
                ))
            }

            </div>

        </div>
    );
};

export default PopularClass;