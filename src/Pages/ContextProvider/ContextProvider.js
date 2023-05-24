import React, { createContext, useEffect, useState } from 'react';
import  { getAuth,createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/Firebase.config.js'


export const AuthContext = createContext();

const auth = getAuth(app);

const ContextProvider = ({children}) => {
    const [user, setUser] = useState({displayName:'Rafi'});

    const createUserWithEmailPass=(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
    };
    const logout=()=>{
        return signOut(auth);
    };
    const loginWithEmailPass= (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {user, createUserWithEmailPass, logout, loginWithEmailPass};

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;