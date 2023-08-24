import { Center, Text, Divider, Box, VStack, StackDivider} from "@chakra-ui/react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting, welcome, about, shipping, security, quality}) => {
  return (
    <>

        <div className="home" id="home">
          <Center h='120px' color='black'>
            <Text fontSize="2xl">{greeting}</Text>
          </Center>
          <Center color='black'>
            <h2>{welcome}</h2>
          </Center>
        </div>
        <Divider py="3" borderColor='grey.200' />
        <div className="about-us" id="about">
          <Text m="4" p="3">{about}</Text>
        </div>
        <Divider borderColor='grey.200' />
        <div className="about-us-list">
          <ul className="list">
            <Text p="4" className="item-list">{shipping}</Text>
            <Text p="3" className="item-list">{quality}</Text>
            <Text p="3" className="item-list">{security}</Text>
            <Divider p="3" borderColor='grey.200' />
          </ul>
        </div>
        <ItemCount />
      
    </>
  )
}

export default ItemListContainer