import { Center, Text, Divider, Box, VStack, StackDivider} from "@chakra-ui/react";

const ItemListContainer = ({greeting, welcome, about, shipping, security, quality}) => {
  return (
    <>

        <div className="home">
          <Center h='120px' color='black'>
            <Text fontSize="2xl">{greeting}</Text>
          </Center>
          <Center color='black'>
            <h2>{welcome}</h2>
          </Center>
        </div>
        <Divider py="3" borderColor='grey.200' />
        <div className="about-us">
          <Text m="4" p="3">{about}</Text>
        </div>
        <Divider borderColor='grey.200' />
        <div className="about-us-list">
          <ul className="list">
            <VStack
              divider={<StackDivider borderColor='grey.200' />}
              spacing={4}
              align='stretch'
            >
              <Box h='40px'>
                <Text p="4" className="item-list">{shipping}</Text>
              </Box>
              <Box h='40px' bg='tomato'>
                <Text p="3" className="item-list">{quality}</Text>
              </Box>
              <Box h='40px' bg='pink.100'>
                <Text p="3" className="item-list">{security}</Text>
              </Box>
            </VStack>
            <Divider p="3" borderColor='grey.200' />
          </ul>
        </div>

      
    </>
  )
}

export default ItemListContainer