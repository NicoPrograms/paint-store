import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import {
  BreadcrumbItem,
  Breadcrumb,
  BreadcrumbLink,
  MenuItem,
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
                <Link to={'/about'}>
                  <BreadcrumbLink>About</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <Link to={'/gallery'}>
                  <BreadcrumbLink>Gallery</BreadcrumbLink>
                </Link>  
              </BreadcrumbItem>

              <BreadcrumbItem>
                <Link to={'/contact'}>
                  <BreadcrumbLink>Contact</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </Box>
        <Spacer />
        <Box p="4">
          <CartWidget />
        </Box>
      </Flex>
    </nav>
  );
};

export default NavBar;
