import { useContext, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Box, Divider, Flex } from "@chakra-ui/react";
import { CartContext } from "../../context/ShoppingCartContext";



const CartWidget = () => {

  const { cartCount } = useContext(CartContext)


  return (
    <>
      <Flex>
        <Box>
          <div className="icon">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </Box>
        <Divider orientation="vertical" mx={1} />
        <Box>
          <div className="cart-count">
            {cartCount}
          </div>
        </Box>
      </Flex>
    </>
  )
}

export default CartWidget