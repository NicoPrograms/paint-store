import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Box, Divider, Flex, Spacer } from "@chakra-ui/react";



const CartWidget = () => {

    const [cartCount, setCartCount] = useState(0);

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