import { Center, Text, Divider, Box, Flex, StackDivider} from "@chakra-ui/react";
import ItemCount from "../ItemDetailContainer/ItemCount";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";

const ItemListContainer = ({products}) => {

const showProducts = new Promise((resolve, reject) => {
  if(products.length > 0){
    setTimeout(() => {
      resolve(products)
    }, 2000);
  }
  else {
    reject("Not products found")
  }
})

showProducts
  .then((res) =>{})
  .catch((error) =>{
    console.log(error)
  })

  const {category} = useParams()

  const filteredProducts = category ? products.filter((product) => product.category === category) : products;

  return (
    <>
      <Box bg='#fdecda' minHeight='100vh'>
        <Center><Text marginTop='150' fontSize='2xl'>You can find all available products here. Enjoy your search and don't hesitate to contact us for anything!</Text></Center>
        <ItemList products={filteredProducts} />
      </Box>
    </>
  )
}

export default ItemListContainer