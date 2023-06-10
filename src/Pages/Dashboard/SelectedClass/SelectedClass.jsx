import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const SelectedClass = () => {

    const[onlymy, setOnlymy] = useState([])
    const {user} = useContext(AuthContext)
    console.log(user.email); 
    useEffect(() => {
        if(user){
            fetch(`http://localhost:5000/myselectedclass/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOnlymy(data)
                // console.log(data);
            })
        }
        
    }, [user])

    // console.log(onlymy);
    return (

        <div className='h-full shadow py-8 p-5'>
        <h1 className='text-center text-4xl font-bold text-cyan-500  mb-6 ' >My Added Class</h1>

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
                                <td>{my.set}</td>
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

export default SelectedClass;