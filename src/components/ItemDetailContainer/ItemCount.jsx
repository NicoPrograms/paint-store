import { useEffect, useState, useContext } from "react"
import { Box, Text, Stack, Button, Alert, AlertIcon} from "@chakra-ui/react";
import { CartContext } from "../../context/ShoppingCartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ItemCount = ({ product }) => {

    const [count, setCount] = useState(0)
    const [isAddedToCart, setIsAddedToCart] = useState(false)

    const sum = () => {
        if(count >= 0 && count < 10){
            setCount(count + 1)
        }
        else if(count >= 10){
            return 10;
        }
    }

    const res = () => {
        if(count > 0 && count <= 10){
            setCount(count - 1)
        }
        else if(count <= 0){
            return 0;
        }
    }

    const { addItemToCart } = useContext(CartContext)

    const onAdd = () => {
        if (count > 0){
            addItemToCart(product, count)
            setIsAddedToCart(true)
        }
    }

  return (
    <>  
        {   isAddedToCart ? (<div></div>) : (
        <div className="count">

            <Stack direction='row' spacing={4} align='center'>
                <Button colorScheme='black' variant='outline' onClick={res}><Text fontSize="2xl">-</Text></Button>
                <Text fontSize="2xl"  mx="1">{count}</Text>
                <Button colorScheme='black' variant='outline' onClick={sum}><Text fontSize="2xl">+</Text></Button>          
                <Button colorScheme='black' variant='outline' onClick={onAdd}><Text><FontAwesomeIcon icon={faShoppingCart} /></Text></Button>
            </Stack>

        </div>) }
        
    </>
  )
}

export default ItemCount