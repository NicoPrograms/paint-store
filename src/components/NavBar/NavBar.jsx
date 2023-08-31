import CartWidget from "./CartWidget";
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
            <Text fontSize="2xl">Gallery Portal</Text>
          </div>
        </Box>
        <Box p="4">
          <div className="navbar-menu">
            <Breadcrumb separator="-">
              <BreadcrumbItem>
                <BreadcrumbLink href="#home">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#about">About</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#gallery">Gallery</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#contact">Contact</BreadcrumbLink>
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
