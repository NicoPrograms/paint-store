import { useState, createContext, useEffect} from 'react'

export const CartContext = createContext(null)

const ShoppingCartProvider = ({ children }) => {

    const [ cart, setCart ] = useState([])
    const [ cartCount, setCartCount ] = useState(0)
    const [ cartTotalPrice, setCartTotalPrice ] = useState(0)
    

    //Liampiamos el carrito completamente
    const cleanCart = () => {
        setCart([])
      }

    //Agregar al carrito y ver si esta ya antes o no
    const addItemToCart = (product, quantity) => {
      const isInCart = cart.findIndex((item) => item.product.id === product.id)

      if(isInCart !== -1){
        const updateCart = [...cart]
        updateCart[isInCart].quantity += quantity
        setCart(updateCart)
      }
      else {
        const newItem = { product, quantity }
        setCart([...cart, newItem])
        
      }
    }

    //Actualizar la cantidad de items en el carrito
    useEffect(() => {
      let total = 0
      for(const item of cart){
        total += item.quantity
      }
      setCartCount(total)
    }, [cart])

    //Remover del carrito el item
    const removeItemToCart = (product, quantity) => {
      const updatedCart = [...cart];
      const isInCart = updatedCart.findIndex((item) => item.product.id === product.id)

      if(isInCart !== -1){
        if(updatedCart[isInCart].quantity > quantity){
          updatedCart[isInCart].quantity -= quantity
        }
        else {
          updatedCart.splice(isInCart, 1);
        }
        setCart(updatedCart)
      }
    }

    //Precio total del carrito
    useEffect(() => {
      let total = 0
      for(const item of cart){
        total += item.product.price * item.quantity
      }
      setCartTotalPrice(total)
    }, [cart])

  return (
    <CartContext.Provider value={{
      cart, 
      setCart, 
      cleanCart,
      addItemToCart,
      removeItemToCart,
      cartTotalPrice,
      cartCount
      }}
      >
        {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartProvider