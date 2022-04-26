import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    //firebase er je current user oi user er logged in state er listener holo ei function
    //jokhn ei state ta change hobe ei function seta amader janabe then etar call back function e amra current user k update korbo
    //and tokhn amra setloading ta change kore dibo//and loading thake not loading e cole jabe
    signInWithEmailAndPassword,
    signOut, updateProfile
} from "firebase/auth"; //create user with email and pass firebase default dey
import React from 'react';
import { useContext, useEffect, useState } from 'react/cjs/react.production.min';
import "../firebase";

const AuthContext = React.createContext();
//useAuth is a custom hook
//ei custom hook provider er vitor ja value dibo oigula peye jabe eta call korle
export function useAuth() { //component akhon useauth use korle use context er value peye jabe 
    //bar bar alada alada component e use context import export kora lgbe na
    //akhon use context use korle authcontext auto peye jbe
    return useContext(AuthContext);
}

export function AuthProvider({ children }) { //auth provider diea jesob component k amara rap korbo oigula ke amra child hisebe pabo
    const [loading, setLoading] = useState();
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []); //bar bar jate load na hoy tar jonno dependency diea dilam

    //signup function
    async function signup(email, password, username) {
        const auth = getAuth();  //getAuth call korle amra akt authentication object pabo eta amar signup and log in somy lgbe//
        //signup korar somoy je user create hoy seta auth.current user er vitre thke
        await createUserWithEmailAndPassword(auth, email, password); //await mane ei line ses kore porer line e jabe

        //update profile
        await updateProfile(auth.currentUser, {
            displayName: username
        });

        const user = auth.currentUser; //current user k local state e update korlam//auth er currentUser er vitore current user er information thake
        setCurrentUser({
            ...user,
        })
    }

    //login function
    function login(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)  //eta akta async function and eta akta promise return kore
    }
    //logout function
    function logout() {
        const auth = getAuth();
        return signOut(auth);
    }

    const value = { //ei object er vitr sb dhukiea dilam and ei object k provider diea pass kore dilam
        //application er jekono jygy useAuth use kore amara ei value use korte parbo
        currentUser,
        signup,
        login,
        logout,
    };


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}