import React, { useContext, useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { AuthContext } from '../../../Provider/AuthProvider';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatway_Pk)

console.log(import.meta.env.VITE_Payment_Gatway_Pk);
console.log(stripePromise);

const Payment = () => {
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

    const total = onlymy.reduce((sum, item)=>sum+item.price, 0)
    const price = parseFloat(total.toFixed(2))
    console.log(price);
    return (
        <div>
            <div>
            <h1 className='text-center text-4xl font-bold text-cyan-500  mb-6 ' >Please Pay </h1>
            </div>
            <h2>Taka poysa aitace re baba</h2>
            <Elements stripe={stripePromise}>  
               <CheckoutForm onlymy={onlymy}  price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;