import { useEffect, useState, useContext } from "react"
import {Center, Text, Stack, Button} from "@chakra-ui/react";
import { CartContext } from "../../context/ShoppingCartContext";

const ItemCount = ({ filteredProducts }) => {

    const [count, setCount] = useState(0)

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

    const { cart, setCart} = useContext(CartContext)


    const onAdd = () => {
        if (count > 0) {
            const productToAdd = {
                product: filteredProducts,
                quantity: count
            };
    
            setCart([...cart, productToAdd]);
        }
        alert(count)
        
    }

  return (
    <>
        <div className="count">

                <Stack direction='row' spacing={4} align='center'>
                    <Button colorScheme='black' variant='outline' onClick={res}><Text fontSize="2xl">-</Text></Button>
                    <Text fontSize="2xl"  mx="1">{count}</Text>
                    <Button colorScheme='black' variant='outline' onClick={sum}><Text fontSize="2xl">+</Text></Button>          
                    <Button colorScheme='black' variant='outline' onClick={onAdd}><Text fontSize="2xl">BUY</Text></Button>
                </Stack>

            
        </div>
    </>
  )
}

export default ItemCount