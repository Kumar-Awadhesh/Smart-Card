import { useContext, createContext, useState } from "react"


export const SmartCardContext = createContext();

export const SmartCardProvider = ({children}) => {
    const [licenceData, setLicenceData] = useState([]);
    

    return(
        <SmartCardContext.Provider value={{
            licenceData, setLicenceData
        }}
        
        >{children}</SmartCardContext.Provider>
    )
}