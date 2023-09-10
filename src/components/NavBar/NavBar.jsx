import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import {
  BreadcrumbItem,
  Breadcrumb,
  BreadcrumbLink,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Button,
  Flex,
  Box,
  Spacer,
  Text,
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Flex alignItems="center">
        <Box p="4">
          <div className="navbar-title">
            <Link to={'/'}>
              <Text fontSize="2xl">Gallery Portal</Text>
            </Link>           
          </div>
        </Box>
        <Box p="4">
          <div className="navbar-menu">
            <Breadcrumb separator="-">
            <BreadcrumbItem>
                <Link to={'/home'}>
                  <BreadcrumbLink>Home</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <Link to={'/about'}>
                  <BreadcrumbLink>About</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <Link to={'/contact'}>
                  <BreadcrumbLink>Contact</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Menu>
                  <MenuButton>Categories</MenuButton>
                  <MenuList>
                    <Link to={`/category/${"Forests"}`}><MenuItem>Forests</MenuItem></Link>
                    <Link to={`/category/${"Landscapes"}`}><MenuItem>Landscapes</MenuItem></Link>
                    <Link to={`/category/${"Others"}`}><MenuItem>Others</MenuItem></Link>
                  </MenuList>
                </Menu>
              </BreadcrumbItem>
              
            </Breadcrumb>
          </div>
        </Box>
        <Spacer />
        <Box p="4">
          <Link to={'/cart'}>
            <CartWidget />
          </Link>
        </Box>
      </Flex>
    </nav>
  );
};

export default NavBar;
