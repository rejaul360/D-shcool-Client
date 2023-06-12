import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const Instractor = () => {

    const { user } = useContext(AuthContext)
    const [instractors, setInstractors] = useState([])

    useEffect(() => {
        fetch('https://summer-camp-server-rejaul360.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setInstractors(data)
            })

    }, [user])


    // console.log(instractors);

    // const instractor = instractors.filter(instracto => instracto.role === 'instractor');
    const teachers = instractors.filter(item => item.role === 'instractor');
    // console.log(teachers);

    return (
        <div>
            <div className='my-8 '>

                <div className='py-6'>
                    <h1 className='text-center font-bold text-3xl'>Our Popular </h1>
                    <div className="divider text-3xl font-bold">Instractor</div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

                    {
                        teachers?.map((item) => (

                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src={item.img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.name}</h2>
                                    <p>{item.email}</p>
                                    <div className="card-actions justify-end">
                                        
                                    </div>
                                </div>
                            </div>
                            // <div className="card w-96 bg-base-100 shadow-xl">
                            //     <figure className="px-10 pt-10">
                            //         <img src={item.img} alt="Shoes" className="rounded-xl" />
                            //     </figure>
                            //     <div className="card-body ">
                            //         <p className='text-xl font-bold'>Name :{item.name}</p>
                            //         <p className='text-xl font-bold'>Name :{item.email}</p>
                            //     </div>
                            // </div>
                        ))
                    }

                </div>

            </div>

        </div>
    );
};

export default Instractor;