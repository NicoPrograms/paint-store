import React from 'react'
import { Text, Divider, Box, Center } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFront, faCheck, faShieldHalved } from "@fortawesome/free-solid-svg-icons";


const About = () => {

  const about = "We are the first online store that offers shipping, security and speed in your purchase. Giving you the confidence that the paint will arrive at your home in perfect condition."
  const shipping = "Worldwide shipping"
  const quality = "100% authentic painting"
  const security = "We guarantee a perfect shipment of the painting. With all the care"

  return (
    <>
      <Box bg='#fdecda' minHeight='100vh'>
        <div className='about'>
          <Center>
            <Text p="3" marginTop='100' mb='-20'>{about}</Text>
          </Center>
        </div>
        <div className='content'></div>
        <Divider borderColor='grey.200' />
        <div className="about-us-list">
          <ul className="list">
            <Text p="4" className="item-list"><FontAwesomeIcon icon={faTruckFront} style={{ fontSize: '24px' }} />   {shipping}</Text>
            <Text p="3" className="item-list"><FontAwesomeIcon icon={faCheck} style={{ fontSize: '24px' }} />   {quality}</Text>
            <Text p="3" className="item-list"><FontAwesomeIcon icon={faShieldHalved} style={{ fontSize: '24px' }} />   {security}</Text>
            <Divider p="3" borderColor='grey.200'/>
          </ul>
        </div>

        
      </Box>
    </>
  )
}

export default About