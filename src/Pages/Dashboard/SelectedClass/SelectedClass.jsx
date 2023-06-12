import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SelectedClass = () => {

    const[onlymy, setOnlymy] = useState([])
    const {user} = useContext(AuthContext)
    console.log(user.email); 
    useEffect(() => {
        if(user){
            fetch(`https://summer-camp-server-rejaul360.vercel.app/myselectedclass/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOnlymy(data)
                // console.log(data);
            })
        }
        
    }, [user])

    const handleToyDelete = (_id) => {
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
                fetch(`https://summer-camp-server-rejaul360.vercel.app/myselectedclass/${_id}`, {
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

        <div className='h-full shadow py-8 p-5'>
        <h1 className='text-center text-4xl font-bold text-cyan-500  mb-6 ' >My Selected Class</h1>

        <div>
            <Link to='/dashboard/payment'><button className='btn btn-primary mt-3 justify-end'>Pay</button></Link>
        </div>
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>img</th>
                            {/* <th>Instracto</th> */}
                            <th>Class</th>
                            <th>Price</th>
                            <th>Delete</th>

                            {/* <th>Status</th> */}
                        </tr>
                    </thead>
                    <tbody>

                        {onlymy?.map((my, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td><img style={{ width: "50px", height:"50px", borderRadius: "25%" }} src={my.photo} /></td>
                                
                                {/* <td>{my.instractor}</td> */}
                                <td>{my.name}</td>
                                <td>${my.price}</td>

                                {/* <td>{my.status}</td> */}
                                <button onClick={() => handleToyDelete(my._id)} className='btn btn-outline btn-error'>Delete</button>
                               
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

export default SelectedClass;