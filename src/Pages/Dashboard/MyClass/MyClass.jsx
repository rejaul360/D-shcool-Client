import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import ShowModalFeedback from "./ShowModalFeedback";



const MyClass = () => {
   const[onlymy, setOnlymy] = useState([])
    const {user} = useContext(AuthContext)
    console.log(user.email); 
    useEffect(() => {
        if(user){
            fetch(`https://summer-camp-server-ochre-six.vercel.app/myclass/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOnlymy(data)
            })
        }
    }, [user])
    console.log(onlymy);

    return (
        <div className='h-full shadow py-8 p-5'>
        <h1 className='text-center text-4xl font-bold text-white mb-6'>My Added Class</h1>
        <div className="overflow-x-auto">
            <table className="table  w-full text-white">
                {/* head */}
                <thead>
                    <tr className="text-white text-xl">
                        <th className="hidden md:table-cell">#</th>
                        <th className="hidden md:table-cell">img</th>
                        <th>Instructor</th>
                        <th>Class</th>
                        <th className="hidden md:table-cell">Price</th>
                        <th className="hidden md:table-cell">Set</th>
                        <th>Status</th>
                        <th className="hidden md:table-cell">Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {onlymy?.map((my, index) => (
                        <tr key={index}>
                            <td className="hidden md:table-cell">{index + 1}</td>
                            <td className="hidden md:table-cell">
                                <img
                                    style={{ width: "50px", height: "50px", borderRadius: "25%" }}
                                    src={my.photo}
                                    alt={`Instructor: ${my.instructor}`}
                                />
                            </td>
                            <td>{my.instructor}</td>
                            <td>{my.name}</td>
                            <td className="hidden md:table-cell">${my.price}</td>
                            <td className="hidden md:table-cell">{my.set}</td>
                            <td>{my.status}</td>
                            <td className="hidden md:table-cell">
                                <ShowModalFeedback />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    
    );
};

export default MyClass;