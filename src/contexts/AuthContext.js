import React from 'react';
import { useContext } from 'react/cjs/react.production.min';
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
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    //signup function


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}