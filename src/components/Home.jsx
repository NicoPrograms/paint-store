import React from 'react'
import { Center, Text, Box } from "@chakra-ui/react";
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/Cave.jpg'
import image7 from '../assets/Dark-forest.jpg'
import image8 from '../assets/Parrots.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";




const Home = () => {

  const greeting = "Hi! Welcome to Gallery Portal"
  const welcome = "Here you can find your favorite painting. It's amazing, go ahead, enjoy the experience."

  return (
    <>
      <Box bg='#fdecda' minHeight='100vh'>
        <div className="home" id="home">
            <Center h='120px'>
              <Text fontSize="2xl" marginTop='150' ><FontAwesomeIcon icon={faHand} /> {greeting}</Text>
            </Center>
            <Center>
              <Text marginTop="70" mb='50'>{welcome}</Text>
            </Center>
        </div>
      
      <div className='slider'>
        <ul>
          <li>
            <img src={image1}></img>
          </li>
          <li>
            <img src={image2}></img>
          </li>
          <li>
            <img src={image3}></img>
          </li>
          <li>
            <img src={image4}></img>
          </li>
          <li>
            <img src={image5}></img>
          </li>
          <li>
            <img src={image6}></img>
          </li>
          <li>
            <img src={image7}></img>
          </li>
          <li>
            <img src={image8}></img>
          </li>
        </ul>
      </div>
      </Box>
    </>
  )
}

export default Home