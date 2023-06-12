import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const PaymentHistory = () => {
    const[payment, setPayment] = useState([])
    const {user} = useContext(AuthContext)
    console.log(user.email); 
    useEffect(() => {
        if(user){
            fetch(`https://summer-camp-server-rejaul360.vercel.app/paymenthistory/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setPayment(data)
                // console.log(data);
            })
        }
        
    }, [user])
    return (
        <div className='h-full shadow py-8 p-5'>
        <h1 className='text-center text-4xl font-bold text-cyan-500  mb-6 ' >My Payment History</h1>
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>TransactionId</th>
                            <th>Email</th>
                            {/* <th>Instracto</th> */}
                            <th>Total Class</th>
                            <th>Total Price</th>

                            {/* <th>Status</th> */}
                        </tr>
                    </thead>
                    <tbody>

                        {payment?.map((my, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                {/* <td>{my.instractor}</td> */}
                                <td>{my.transactionId}</td>
                                <td>{my.email}</td>
                                <td>{my.TotalClass}</td>
                                <td>${my.price}</td>

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

export default PaymentHistory;