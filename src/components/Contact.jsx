import React from 'react'
import { Center, Text, Box } from "@chakra-ui/react";

const Contact = () => {

  const email = 'nicolasseia0@gmail.com'
  const phone = '+54 9 353 476-5452'
  const name = 'Nicolas Seia'
  const pageName = 'Gallery Portal'

  return (
    <div className="contact" id="contact">
      <Box bg='#fdecda' minHeight='100vh'>
            <div>
              <Center>
                <Text color='black' marginTop='200' display='block' fontSize='2xl' fontWeight='bold'>{pageName}</Text>
              </Center>
              <Center>
                <Text color='black' marginTop='10' display='block' fontWeight='bold'>{name}</Text>
              </Center>
              <Center>
                <Text color='black' marginTop='10' display='block' fontWeight='bold'>{phone}</Text>
              </Center>
              <Center>
                <Text color='black' marginTop='10' display='block' fontWeight='bold'>{email}</Text>
              </Center>
            </div>
      </Box>
    </div>
  )
}

export default Contact