import React, { useContext , useState , useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"

const UserContext = React.createContext()
export const UserProvider = ({children}) => {
    const {
        loginWithRedirect,
        logout,
        user
    } = useAuth0()

    const [myUser , setMyUser] = useState(null)

    useEffect(()=>{
        setMyUser(user)
    },[user])
    console.log("user",user)
    console.log("myUser",myUser)
    return(
        <UserContext.Provider value={{loginWithRedirect,logout,myUser}}>{children}</UserContext.Provider>
    )
}

export const useUserContext = () =>{
    return useContext(UserContext)
}