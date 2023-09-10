import React from 'react'
import Item from './Item'
import {
    Grid, Center
  } from "@chakra-ui/react";

const ItemList = ({products}) => {
  return (
    <>
        <div>
            <Center>
                <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(3, 1fr)']} gap={14} mt='40'>
                    {products.map((product) => (
                        <Item
                            key={product.id}
                            title={product.title}
                            image={product.image}
                        />
                    ))}
                </Grid>
            </Center>
        </div>
    </>
  )
}

export default ItemList