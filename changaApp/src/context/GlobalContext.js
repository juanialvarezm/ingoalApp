import React,{useContext,useEffect, useState} from "react"
const GlobalContext = React.createContext(null)

function GlobalContextProvider({children}){
    const [name, setName] = useState("");
    const [club,setClub] = useState("")
    const [posicion,setPosicion] = useState("")
    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")
    const [showModal,setShowModal] = useState(false)
    
    return(
        <GlobalContext.Provider value={{
            name,
            setName,
            username,
            setUsername,
            club,
            setClub,
            posicion,
            setPosicion,
            password,
            setPassword,
            showModal,
            setShowModal
        }}>
            {children}
        </GlobalContext.Provider>
    )

}

export const GlobalState=()=>{
    return useContext(GlobalContext)
}

export default GlobalContextProvider