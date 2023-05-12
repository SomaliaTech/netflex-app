import React ,{createContext,useState} from "react";

const MovieItems = createContext()

const ProfileContext = ({children}) => {
    const [profileUser,setProfile] = useState([])

    return (
        <MovieItems.Provider value={{profileUser,setProfile}}>
            {children}
        </MovieItems.Provider>
    )
}

export {MovieItems,ProfileContext};