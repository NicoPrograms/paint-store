import React from 'react'
import { Center, Text, Box } from "@chakra-ui/react";

const Home = ({greeting, welcome}) => {
  return (
    <>
      <Box bg='#fdecda' minHeight='100vh'>
        <div className="home" id="home">
            <Center h='120px'>
              <Text fontSize="2xl" marginTop='250' >{greeting}</Text>
            </Center>
            <Center>
              <Text marginTop="150">{welcome}</Text>
            </Center>
        </div>
      </Box>
    </>
  )
}

export default Home