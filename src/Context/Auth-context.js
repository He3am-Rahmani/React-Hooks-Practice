import React, { useState } from 'react';




export const AuthContext = React.createContext({
    isAuth:false,
    login:()=>{}
})

const AuthContextProvider=(props)=>{
    const [isLoggedIn,setIsLoggedIn] = useState()
    return(
        <AuthContext.Provider>
            {props.children}
        </AuthContext.Provider>
    )
}