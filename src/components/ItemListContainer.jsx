import { Center, Text, Divider, Box, Flex, StackDivider} from "@chakra-ui/react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting, welcome, about, shipping, security, quality, contact}) => {
  return (
    <>
      <Box bg='#fdecda' minHeight='100vh'>
        <div className="home" id="home">
          <Center h='120px'>
            <Text fontSize="2xl" marginTop="100">{greeting}</Text>
          </Center>
          <Center>
            <Text marginTop="50">{welcome}</Text>
          </Center>
        </div>
        <Divider py="3" borderColor='grey.200' marginTop="300"/>
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
        <div className="contact" id="contact" style={{ display: 'flex', justifyContent: 'center' }}>
            <Box bg='black' h='100' w='100%' p={4} color='white'>
              <Text color='white'>{contact}</Text>
            </Box>
        </div>
      </Box>
      
    </>
  )
}

export default ItemListContainer