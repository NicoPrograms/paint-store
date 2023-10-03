import React from 'react'
import { Box, Image, Card, CardBody, CardFooter, Text, Stack, Heading, Divider, Center} from "@chakra-ui/react";
import ItemCount from './ItemCount';



const ItemDetail = ({product}) => {

  return (
    <>
        <div>
            <Box bg='#fdecda' minHeight='100vh' mt='100'>
                <Center>
                    <Box display="flex" alignItems="center">
                        <Card maxW='sm' style={{backgroundColor: '#f4e0c9'}}>
                            <CardBody>
                                <Image
                                    src={product.image}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                <Heading size='md'>{product.title}</Heading>
                                <Text>
                                    {product.description}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    ${product.price}
                                </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ItemCount product={product} />
                            </CardFooter>
                        </Card>
                    </Box>
                </Center>
            </Box>
        </div>
    </>
  )
}

export default ItemDetail