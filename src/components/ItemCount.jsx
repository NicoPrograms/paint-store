import { useEffect, useState } from "react"
import {Center, Text, Spacer, Flex} from "@chakra-ui/react";

const ItemCount = () => {

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

    const onAdd = () => {
        alert(count)
    }

  return (
    <>
        <div className="count">
            <Center p="200">
                <Flex alignItems="center">
                    <button onClick={res}><Text fontSize="2xl">-</Text></button>
                    <Text fontSize="2xl"  mx="4">{count}</Text>
                    <button onClick={sum}><Text fontSize="2xl">+</Text></button>          
                    <button onClick={onAdd}><Text fontSize="2xl" marginLeft="4">BUY</Text></button>
                </Flex>
            </Center>
            
        </div>
    </>
  )
}

export default ItemCount