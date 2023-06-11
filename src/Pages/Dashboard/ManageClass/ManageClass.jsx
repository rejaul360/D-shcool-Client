import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import FeedbackModal from './FeedbackModal';

const ManageClass = () => {

    const {data: users = [], refetch} = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/class')
        return res.json()
    })


    // const {user} = useContext(AuthContext)

    const handleApproved = my => {
        fetch(`http://localhost:5000/class/approved/${my._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${my.name} approved Class !`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }

    const handleDeny = my => {
        fetch(`http://localhost:5000/class/deny/${my._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${my.name} Deny Class !`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }
    const handleFeedback = my => {
        console.log(my);

    }



    return (
        <div className='h-full shadow py-8 p-1'>
        <h1 className='text-center text-4xl font-bold text-cyan-500  mb-6 ' >Manage Class</h1>
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>img</th>
                            <th>Instracto</th>
                            <th>Class</th>
                            <th>Price</th>
                            <th>Set</th>
                            <th>Approved</th>
                            <th>Deny </th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users?.map((my, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td><img style={{ width: "50px", height:"50px", borderRadius: "25%" }} src={my.photo} /></td>
                                
                                <td>{my.instractor}</td>
                                <td>{my.name}</td>
                                <td>${my.price}</td>
                                {/* <td>{toy.description}</td> */}
                                <td>{my.set}</td>
                                <td>{my.status === 'approved' ? 'approved' :
                                    <button onClick={() => handleApproved(my)} className="btn btn-primary btn-sm  text-white">Approved</button> 
                                    }
                                
                                </td>
                                <td>
                                {   my.status === 'deny' ? 'Deny' :
                                    <button onClick={() => handleDeny(my)} className="btn btn-primary btn-sm   text-white">Deny</button> }
                                </td>
                                <td>
                                <button onClick={() => handleFeedback(my)} className="  text-white"> <FeedbackModal my={my}></FeedbackModal></button> 
                                </td>
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

export default ManageClass;