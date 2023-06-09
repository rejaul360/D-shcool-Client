import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const PopularInstractor = () => {

    const { user } = useContext(AuthContext)
    const [instractors, setInstractors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setInstractors(data)
            })

    }, [user])

    const teachers = instractors.filter(item => item.role === 'instractor');
    return (
        <div>
        <div className='my-8 '>

            <div className='py-6'>
                <h1 className='text-center font-bold text-3xl'>Our Popular </h1>
                <div className="divider text-3xl font-bold">Instractor</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

                {
                    teachers?.slice(0,6).map((item) => (

                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={item.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                                <p>{item.email}</p>
                                <div className="card-actions justify-end">
                                    
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