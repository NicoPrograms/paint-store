import React from 'react'
import ItemDetail from "./ItemDetail";
import Loader from '../Loader';
import {Grid, Center} from "@chakra-ui/react";
import {useEffect, useState} from 'react'
import { doc, collection, getDocs, getFirestore} from 'firebase/firestore'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const { id } = useParams()
  const [products, setProducts]= useState([])
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
  }, [])

  const filteredProducts = products.filter((p) => p.id == id)

  return (
    <>
        <div>
            {
              loading ? ( <Loader /> ) : (
                <>
                  <Center>
                        {filteredProducts.map(p =>{
                          return(
                            <ItemDetail product={p} key={p.id} />
                          )
                        })}
                  </Center>
                </>
              )
            }
            
        </div>
    </>
  )
}

export default ItemDetailContainer