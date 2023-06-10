import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const AllClass = () => {
    const {user} = useContext(AuthContext)
    const [dances, setDances] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => {
                setDances(data)

            })
    }, [user])
    return (
        <div className='my-8 '>

            <div>
                <h1 className='text-center font-bold text-3xl'>Popular Dance </h1>
                <div className="divider text-3xl font-bold">Class</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

                {
                    dances?.map((item) => (
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={item.photo} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body  space-y-0">
                                <h1 className='text-xl font-semibold'>Class Name : {item.name}</h1>
                                <h2 className='text-xl font-semibold'>Instractor Name : {item.instractor}</h2>
                                <p className=''>Email : {item.postedBy}</p>
                                <p className='font-bold'>Set : {item.set}</p>
                                <p className='font-bold'>Price : {item.price}</p>
                            </div>
                            <div className="card-actions justify-end mb-4 p-6">
                                <button className="btn btn-primary">Select Class</button>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default AllClass;