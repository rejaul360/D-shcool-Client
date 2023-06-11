import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';



const PopularClass = () => {
    const {user} = useContext(AuthContext)
    const [dances, setDances] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/class')
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
        <div className='my-8 '>
            
            <div>
            <h1 className='text-center font-bold text-3xl'>Popular Dance </h1>
            <div className="divider text-3xl font-bold">Class</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

            {
                popularclass?.slice(0,6).map((item) => (
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={item.photo} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body  ">
                            <p className='text-xl font-bold'>Name :{item.name}</p>
                            <h2 className='text-xl font-semibold'>Instractor Name : {item.instractor}</h2>
                                <p className=''>Email : {item.postedBy}</p>
                                <p className='font-bold'>Set : {item.set}</p>
                                <p className='font-bold'>Price : ${item.price}</p>
                            {/* <h4 className="card-title"> Instractor : {item.instructor}</h4>
                            <p className=' font-bold'>Enroll Price : ${item.enrolled_price}</p> */}
                        </div>
                    </div>
                ))
            }

            </div>

        </div>
    );
};

export default PopularClass;