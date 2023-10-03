import React from 'react'
import { Center, Text, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faEnvelope, faSignature } from "@fortawesome/free-solid-svg-icons";


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
                <Text color='black' marginTop='200' display='block' fontSize='2xl' fontWeight='bold'><FontAwesomeIcon icon={faSignature} style={{ fontSize: '24px' }} /> {pageName}</Text>
              </Center>
              <Center>
                <Text color='black' marginTop='10' display='block' fontWeight='bold'>{name}</Text>
              </Center>
              <Center>
                <Text color='black' marginTop='10' display='block' fontWeight='bold'><FontAwesomeIcon icon={faMobile} style={{ fontSize: '24px' }} /> {phone}</Text>
              </Center>
              <Center>
                <Text color='black' marginTop='10' display='block' fontWeight='bold'><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '24px' }} />  {email}</Text>
              </Center>
            </div>
      </Box>
    </div>
  )
}

export default Contact