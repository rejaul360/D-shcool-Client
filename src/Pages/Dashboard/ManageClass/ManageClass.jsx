import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const ManageClass = () => {
    const[onlymy, setOnlymy] = useState([])
    const {user} = useContext(AuthContext)
    console.log(user.email); 
    useEffect(() => {
        if(user){
            fetch("http://localhost:5000/class")
            .then(res => res.json())
            .then(data => {
                setOnlymy(data)
            })
        }
    }, [user])
    console.log(onlymy);

    const handleApproved = my => {
       
        console.log(my);
        const { photo, name, price , _id,set, postedBy } = my
            const classItem = {classId: _id, name, set, postedBy , photo, price: parseFloat(price), email: user.email}
            console.log(classItem);
            fetch('http://localhost:5000/adminaproved', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        // refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Approved Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        

    }
    // const handleReject = my => {
       
    // }
    const handleReject = (_id) => {
        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/adminreject/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = onlymy.filter(my => my._id !==_id)
                            setOnlymy(remaining);
                            console.log(remaining);
                            // console.log(setMyToys);
                        }

                    })
            }
        })
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
                            <th>Reject</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>

                        {onlymy?.map((my, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td><img style={{ width: "50px", height:"50px", borderRadius: "25%" }} src={my.photo} /></td>
                                
                                <td>{my.instractor}</td>
                                <td>{my.name}</td>
                                <td>${my.price}</td>
                                {/* <td>{toy.description}</td> */}
                                <td>{my.set}</td>
                                <td>
                                <button onClick={() => handleApproved(my)} className="btn btn-primary btn-sm  text-white">Approved</button> 
                                </td>
                                <td>
                                <button onClick={() => handleReject(my._id)} className="btn btn-primary btn-sm   text-white">Reject</button> 
                                </td>
                                <td>
                                <button onClick={() => handleFeedback(my)} className="btn btn-primary btn-sm   text-white">Feedback</button> 
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