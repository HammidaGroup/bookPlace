import React, { createContext, useState } from 'react'
export const searchValContext = createContext()
 const SearchValContextProvider = ({children}) => {
    const [searchVal, setSearchVal] = useState("")
  return (
    <searchValContext.Provider value={{searchVal , setSearchVal}}>
        {children}
    </searchValContext.Provider>
  )
}

export default SearchValContextProvider;
