import { useState } from "react"



const CartWidget = () => {

    const [cartCount, setCartCount] = useState(0);

  return (

    <div className="cart-count">
        {cartCount}
    </div>
  )
}

export default CartWidget