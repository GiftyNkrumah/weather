import React, {createContext, useState} from 'react'

export const LoginContext = createContext() 

export default function LoginContextProvider (props) {
    const [isLogged, setLogged] = useState(false)
    const [username, setUsername] = useState("")
    
    return (
        <LoginContext.Provider value={{isLogged, setLogged, username, setUsername}}>
            {props.children}
        </LoginContext.Provider>
    )
}