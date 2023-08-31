import React from 'react'
import ItemDetail from "./ItemDetail";
import {
    Grid, Center
  } from "@chakra-ui/react";

const ItemDetailContainer = ({products}) => {
  return (
    <>
        <div>
            <Center>
                <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(3, 1fr)']} gap={14} mt='40'>
                    {products.map((product) => (
                        <ItemDetail
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            description={product.description}
                            price={product.price}
                        />
                    ))}
                </Grid>
            </Center>
        </div>
    </>
  )
}

export default ItemDetailContainer