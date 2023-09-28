import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const EnrolledClass = () => {
    const [enrolld, setEnrolled] = useState([])
    const { user } = useContext(AuthContext)
    console.log(user.email);
    useEffect(() => {
        if (user) {
            fetch(`https://summer-camp-server-ochre-six.vercel.app/paymenthistory/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setEnrolled(data)
                    // console.log(data);
                })
        }

    }, [user])

    // const { ClassNames } = enrolld

    return (
        <div className='h-full shadow py-8 p-5'>
            <h1 className='text-center text-4xl font-bold text-cyan-500  mb-6 ' >My Enrolled Class</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full ">
                        {/* head */}
                        <thead>
                            <tr className='text-white text-xl'>
                                <th>#</th>
                                <th>Classes Name</th>
                                <th>Email</th>
                                {/* <th>Instracto</th> */}
                                <th>Total Class</th>
                                <th>Total Price</th>
                                <th>Status</th>

                                {/* <th>Status</th> */}
                            </tr>
                        </thead>
                        <tbody className='text-white'>

                            {enrolld?.map((my, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{my.ClassNames.map((element, index) => (
                                        <p key={index}>{element}</p>
                                    ))}</td>
                                    {/* <td>{my.instractor}</td> */}
                                    {/* <td>{my.transactionId}</td> */}
                                    <td>{my.email}</td> 
                                    <td>{my.TotalClass}</td>
                                    <td>${my.price}</td>
                                    <td>{my.status}</td>

                                    {/* <td>{my.status}</td> */}

                                    <td>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EnrolledClass;