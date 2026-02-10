import { createContext, useState } from "react";

export const ExploreContext = createContext();

const ExploreContextProvider = ({children})=>{
    const [exploreData, setExploreData] = useState()
    // console.log(exploreData);
    
 return(
    <ExploreContext.Provider value={{exploreData , setExploreData}}>
        {children}
    </ExploreContext.Provider>
 )   
}
export default ExploreContextProvider;