import { useContext, createContext, useState } from "react"


export const SmartCardContext = createContext();

export const SmartCardProvider = ({children}) => {
    const [licenceData, setLicenceData] = useState([]);
    const [voterData, setVoterData] = useState([]);
    

    return(
        <SmartCardContext.Provider value={{
            licenceData, setLicenceData, voterData, setVoterData
        }}
        
        >{children}</SmartCardContext.Provider>
    )
}