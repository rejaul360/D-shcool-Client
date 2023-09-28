import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useAdmin from '../../Hooks/useAdmin';
import useInstractor from '../../Hooks/useInstractor';
import { useNavigate } from 'react-router-dom';
import"./AllClass.css"

const AllClass = () => {
    const {user} = useContext(AuthContext)
    const [dances, setDances] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://summer-camp-server-ochre-six.vercel.app/class')
            .then(res => res.json())
            .then(data => {
                setDances(data)
                console.log(setDances);

            })
    }, [user])

    console.log(dances);

    const popularclass = dances.filter(item => item.status === 'approved');
    console.log(popularclass);

    const [isAdmin] = useAdmin()
    const [isInstractor] = useInstractor()

    const handleSelectClass = item => {

        console.log(item);
        const { photo, name, price , _id } = item
        if (user && user.email && !isAdmin && !isInstractor) {
            const classItem = {classId: _id, name, photo, price: parseFloat(price), email: user.email}
            console.log(classItem);
            
            fetch('https://summer-camp-server-ochre-six.vercel.app/selectclass', {
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
                            title: 'Class is selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to Select Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    return (
        <div className='my-8 '>

            <div>
                <h1 className='text-center font-bold text-4xl text-white'>All Class</h1>
                <div className="divider text-3xl font-bold"></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

                {
                    popularclass?.map((item) => (
                        <div className="card w-96 stylebd bg_style text-white shadow-xl" data-aos="zoom-in">
                            <figure className="px-10 pt-10">
                                <img src={item.photo} alt="Shoes" className="rounded-xl"  />
                            </figure>
                            <div className="card-body  space-y-0">
                                <h1 className='text-xl font-semibold'>Class Name : {item.name}</h1>
                                <h2 className='text-xl font-semibold'>Instractor : {item.instractor}</h2>
                                <p className=''>Email : {item.postedBy}</p>
                                <p className='font-bold'>Set : {item.set}</p>
                                <p className='font-bold'>Price : ${item.price}</p>
                            </div>
                            <div className="card-actions justify-end mb-4 p-6">
                           {
                            !isAdmin && !isInstractor ?  <button onClick={() => handleSelectClass(item)} className="btn btn-outline btn-info mt-4">Select Class</button> 
                             :
                              <button disabled onClick={() => handleSelectClass(item)} className="btn btn-primary mt-4">Select Class</button>
                           }
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default AllClass;