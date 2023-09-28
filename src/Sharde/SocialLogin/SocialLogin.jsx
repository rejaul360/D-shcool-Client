
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';

import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SocialLogin = () => {
    const{singInWithGoogle}=useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSingIn = () => {
        singInWithGoogle()

        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser);
      
            const saveUser = {name:loggedUser.displayName, img: loggedUser.photoURL, email: loggedUser.email}
            fetch('https://summer-camp-server-ochre-six.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(() => {
                       
                })
                navigate(from, { replace: true });
        })
    }
    
    return (
        <div>
            <div className='w-full text-center py-4'>
                <button onClick={handleGoogleSingIn}>
                    {/* <FaGoogle></FaGoogle> */}
                    <FcGoogle className='text-4xl'></FcGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;