import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";



const MyClass = () => {
   const[onlymy, setOnlymy] = useState([])
    const {user} = useContext(AuthContext)
    console.log(user.email); 
    useEffect(() => {
        fetch(`http://localhost:5000/class?postedBy=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOnlymy(data)

            })
    }, [user])
    console.log(onlymy);

    return (
        <div>MY SElected Class {onlymy.length}</div>
    );
};

export default MyClass;