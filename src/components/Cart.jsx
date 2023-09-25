import React, { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import { Box, Button, Text } from '@chakra-ui/react';


const Cart = () => {
    const { cart, cleanCart } = useContext(CartContext);

    return (
        <>
          <Box mt='200'>
            <h1>Shopping Cart</h1>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        Product: {item.product.title}, Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
            <Button colorScheme='black' variant='outline' onClick={cleanCart}><Text fontSize="2xl">Clean Cart</Text></Button>
          </Box>
        </>
    );
}

export default Cart