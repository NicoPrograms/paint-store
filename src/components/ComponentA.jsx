import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const ComponentA = () => {

    const {cart, setCart, comision} = useContext(CartContext)
    console.log(cart)

  return (
    <>
        <h1>{comision}</h1>
    </>
  )
}

export default ComponentA