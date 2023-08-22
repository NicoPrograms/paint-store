import CartWidget from "./CartWidget"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex, Box, Spacer, Center,
  
} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <Flex>
          <Box p='4'>
            <div className="navbar-title">Gallery Portal</div>
          </Box>
          <Spacer />
          <Box p='4'>
            <div className="navbar-menu">
                <Menu>
                  <MenuButton>
                    Sections
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>About Us</MenuItem>
                    <MenuItem>Gallery</MenuItem>
                    <MenuItem>Contact</MenuItem>
                  </MenuList>
                </Menu>
            </div>
          </Box>
          <Spacer />
          <Box p='4'>
            <CartWidget />
          </Box>
        </Flex> 
      </nav>
        
    </>
  )
}

export default NavBar