import React from 'react';
import { useContext } from 'react/cjs/react.production.min';
import "../firebase";

const AuthContext = React.createContext();
//useAuth is a custom hook
//ei custom hook provider er vitor ja value dibo oigula peye jabe eta call korle
export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    //signup function
    

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}