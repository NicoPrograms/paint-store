import { Center, Text, Divider, Box, Flex, StackDivider} from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";

const ItemListContainer = ({products}) => {

const showProducts = new Promise((resolve, reject) => {
  if(products.length > 0){
    setTimeout(() => {
      resolve(products)
    }, 3000);
  }
  else {
    reject("Not products found")
  }
})

  return (
    <>
      <Box bg='#fdecda' minHeight='100vh'>
        <ItemList products={products}/>
      </Box>
      
    </>
  )
}

export default ItemListContainer