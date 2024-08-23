import React,{useContext,useEffect, useState} from "react"
const GlobalContext = React.createContext(null)

function GlobalContextProvider({children}){
    const [name, setName] = useState("");
    const [club,setClub] = useState("")
    const [posicion,setPosicion] = useState("")
    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")
    const [showModal,setShowModal] = useState(false)
    const [codigo,setCodigo] = useState(" ")
    const [equipoVisitante,setEquipoVisitante] = useState("")
    const [equipoLocal,setEquipoLocal] = useState("")
    const [fechaPartido,setFechaPartido] = useState("")
    const [fixtureCategoria,setFixtureCategoria] = useState("")
    const [punto,setPunto] = useState(null)
    

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
            setShowModal,
            codigo,
            setCodigo,
            equipoLocal,
            setEquipoLocal,
            equipoVisitante,
            setEquipoVisitante,
            fechaPartido,
            setFechaPartido,
            fixtureCategoria,
            setFixtureCategoria,
            punto,
            setPunto
        }}>
            {children}
        </GlobalContext.Provider>
    )

}

export const GlobalState=()=>{
    return useContext(GlobalContext)
}

export default GlobalContextProvider