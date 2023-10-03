import React, { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import { Box, Button, Center, Text, Flex, SimpleGrid, Image, Divider, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, AlertDialogCloseButton, useDisclosure } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cart, cleanCart, cartTotalPrice, removeItemToCart } = useContext(CartContext)
    const { isOpen, onOpen, onClose } = useDisclosure()

    // Función para limpiar el carrito con el AlertDialog
    const handleCleanCart = () => {
        onClose()
        cleanCart()
    }

    return (
        <>
            <Box bg='#fdecda' minHeight='100vh'>
                <Box mt='170'>
                    <Center><Text fontSize="2xl" mb='10'>Shopping Cart</Text></Center>
                    <Flex justifyContent="space-between">
                        <Box flex="1">
                            <ul>
                                {cart.map((item) => (
                                    <SimpleGrid columns={1} spacing={10} key={item.product.id}>
                                        <Divider borderColor="black" maxWidth="700px" ml='100'/>
                                        <li>
                                            <Box className='item-box'>
                                                <div className='item-style'>
                                                    <div className='item-style-img'>
                                                        <Image
                                                            src={item.product.image}
                                                            alt='Green double couch with wooden legs'
                                                            height='68'
                                                            width='120'
                                                        />
                                                    </div>
                                                    <div className='item-style-title'>
                                                        {item.product.title}
                                                    </div>
                                                    <div className='item-style-quantity'>
                                                        {item.quantity}
                                                        <Button border='none' variant='outline' ml='10' size='sm' onClick={() => removeItemToCart(item.product, 1)}><FontAwesomeIcon icon={faTrashCan} /></Button>
                                                    </div>
                                                </div>
                                            </Box>
                                        </li>
                                    </SimpleGrid>
                                ))}
                            </ul>
                        </Box>
                        <Box flex="0 0 auto" mr='40'>
                            <Text mb='15' fontWeight='bold' color='gray' ml='-55'>Total:</Text>
                            <Text fontSize='2xl' fontWeight='bold' mb='5' ml='-55'>$ {cartTotalPrice}</Text>
                            <Center>
                                <Link to={'/form'}>
                                    <button type="submit" className="submit-button-cart">Checkout</button>
                                </Link>
                            </Center>
                        </Box>
                    </Flex>
                    <Flex justifyContent="flex-start" ml='40' my='15'>
                        <AlertDialog
                            isOpen={isOpen}
                            leastDestructiveRef={null}
                            onClose={onClose}
                        >
                            <AlertDialogOverlay>
                                <AlertDialogContent>
                                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                        Clean Cart
                                    </AlertDialogHeader>
                                    <AlertDialogBody>
                                        Are you sure you want to clean your cart? This action cannot be undone.
                                    </AlertDialogBody>
                                    <AlertDialogFooter>
                                        <button type="submit" className="submit-button" onClick={onClose}>
                                            Cancel
                                        </button>
                                        <button type="submit" className="submit-button" onClick={handleCleanCart} ml={3}>
                                            Clean
                                        </button>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialogOverlay>
                        </AlertDialog>
                        <button type="submit" className="submit-button" onClick={onOpen}>
                            Clean Cart
                        </button>
                    </Flex>
                </Box>
            </Box>
        </>
    );
}

export default Cart;
