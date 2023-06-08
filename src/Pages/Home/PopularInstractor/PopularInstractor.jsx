import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const PopularInstractor = () => {

    const {user} = useContext(AuthContext)
    const [instractor, setInstractor] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/instractor')
            .then(res => res.json())
            .then(data => {
                setInstractor(data)

            })
    }, [user])
    return (
        <div className='my-8'>
            <div>
                <h1 className='text-center font-bold text-3xl'>Our Famous </h1>
                <div className="divider text-3xl font-bold">Instractor</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

                {
                    instractor?.map((item) => (
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={item.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body  ">
                                <h4 className="card-title"> Instractor : {item.instructor}</h4>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default PopularInstractor;