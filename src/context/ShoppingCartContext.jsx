import { useState, createContext} from 'react'

export const CartContext = createContext(null)

const ShoppingCartProvider = ({ children }) => {

    const [ cart, setCart ] = useState([])

    const cleanCart = () => {
        setCart([])
      }

  return (
    <CartContext.Provider value={{cart, setCart, cleanCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartProvider