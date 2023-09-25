import React from 'react'
import {
    Box, Image, Card, CardBody, CardFooter, Button, ButtonGroup, Text, Stack, Heading, Divider, Center
  } from "@chakra-ui/react";
  import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';


const ItemDetail = ({products}) => {

    const { id } = useParams()

    const filteredProducts = products.filter((product) => product.id == id)

  return (
    <>
        <div>
            <Box bg='#fdecda' minHeight='100vh'>
                <Center>
                {filteredProducts.map((p) => {
                    return(
                        <div key={p.id}>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                    <Card maxW='sm' style={{backgroundColor: '#f4e0c9'}}>
                                        <CardBody>
                                            <Image
                                            src={p.image}
                                            alt='Green double couch with wooden legs'
                                            borderRadius='lg'
                                            />
                                            <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{p.title}</Heading>
                                            <Text>
                                                {p.description}
                                            </Text>
                                            <Text color='blue.600' fontSize='2xl'>
                                                ${p.price}
                                            </Text>
                                            </Stack>
                                        </CardBody>
                                        <Divider />
                                        <CardFooter>
                                            <ItemCount filteredProducts={p} />
                                            {/* <ButtonGroup spacing='2'>
                                                <Button variant='solid' style={{ backgroundColor: '#e1cfbc', color: 'black' }}>
                                                    Details
                                                </Button>
                                            </ButtonGroup> */}
                                        </CardFooter>
                                    </Card>
                            </Box>
                        </div>
                    )
                })}
                </Center>
            </Box>
        </div>
    </>
  )
}

export default ItemDetail