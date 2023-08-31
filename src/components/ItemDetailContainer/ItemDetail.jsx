import React from 'react'
import {
    Box, Image, Card, CardBody, CardFooter, Button, ButtonGroup, Text, Stack, Heading, Divider
  } from "@chakra-ui/react";

const ItemDetail = ({image, description, price, title}) => {
  return (
    <>
        <div>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Card maxW='sm' style={{backgroundColor: '#f4e0c9'}}>
                    <CardBody>
                        <Image
                        src={image}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>{title}</Heading>
                        <Text>
                            {description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            ${price}
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' style={{ backgroundColor: '#e1cfbc', color: 'black' }}>
                                Details
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Box>
        </div>
    </>
  )
}

export default ItemDetail