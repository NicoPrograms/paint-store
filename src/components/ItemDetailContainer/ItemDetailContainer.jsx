import React from 'react'
import ItemDetail from "./ItemDetail";

import {
    Grid, Center
  } from "@chakra-ui/react";

const ItemDetailContainer = ({products}) => {

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


  return (
    <>
        <div>
            <Center>
                <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(3, 1fr)']} gap={14} mt='40'>
                    <ItemDetail products={products} />
                </Grid>
            </Center>
        </div>
    </>
  )
}

export default ItemDetailContainer