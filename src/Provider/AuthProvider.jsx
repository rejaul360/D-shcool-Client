import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';
import { getAuth } from "firebase/auth";
import axios from 'axios';
// import axios from 'axios';

const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, Setloading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        Setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) => {
        Setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const singInWithGoogle = () => {
        Setloading('true')
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        Setloading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            if(currentUser){
                axios.post('http://localhost:5000/jwt', {email: currentUser.email})
                .then(data =>{
                    // console.log(data.data.token)
                    localStorage.setItem('access-token', data.data.token)
                    Setloading(false);
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
        })
        return () => {
            return unsuscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        singInWithGoogle,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;