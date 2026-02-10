import React, { createContext, useState } from 'react'
export const cartContext = createContext()
 const CartContextProvider = ({children}) => {
    const [cartUpd, setCartUpd] = useState(0)
  return (
    <cartContext.Provider value={{cartUpd , setCartUpd}}>
        {children}
    </cartContext.Provider>
  )
}

export default CartContextProvider;
