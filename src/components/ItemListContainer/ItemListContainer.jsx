import { Center, Text, Box, Divider} from "@chakra-ui/react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Loader from "../Loader";

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore()

        const itemCollection = collection(db, "paints")
        getDocs(itemCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data())
            setProducts(docs)
        })
        .finally(() => {
          setLoading(false)
        })
    },[])

  const {category} = useParams()

  const filteredProducts = category ? products.filter((product) => product.category === category) : products;

  return (
    <>
      <Box bg='#fdecda' minHeight='100vh'>
        {
          loading ? ( <Loader /> ) : (
            <>
              <Center><Text marginTop='120' mb='5' fontSize='2xl'>You can find all available products here. Enjoy your search and don't hesitate to contact us for anything!</Text></Center>
              <Divider borderColor='grey.200' />
              <ItemList products={filteredProducts} />
            </>
          )
        }
        
      </Box>
    </>
  )
}

export default ItemListContainer