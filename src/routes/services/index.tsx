import * as React from "react";
import styled from "styled-components";
import { sidebarContent, toggleButton } from './constants'
import Header from '../../components/header/Header';
import Glider from '../../components/slider/Slider'
import {
  Button,
  Drawer,
  Heading,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
} from '@chakra-ui/react'


function Services() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: React.LegacyRef<HTMLButtonElement> = React.useRef(null);


	return(
    <>
     <StyledService>		
         <header>
          <Button
            m="1em"
            ref={btnRef}
            variant="ghost"
            onClick={onOpen}
            className="toggle-button"
            >
            <strong style={{ ...toggleButton }}>{isOpen ? "CERRAR" : "ABRIR"}</strong>
          </Button>
         </header> 
          <Glider />
         <footer>
            <Heading  size='sm'>Segurmática &copy; {new Date().getFullYear()}</Heading>
        </footer>

        {/*THIS IS THE LATERAL MENU AND IS ABSOLUTE TO THE BODY*/}

        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent style={{...sidebarContent}}>
            <DrawerCloseButton style={{color:"crimson"}}/>
            <DrawerHeader style={{ color: "crimson" }}>PKI-SERVICIOS</DrawerHeader>
            <DrawerBody>
              <Header color="#805ad5" column />
            </DrawerBody>
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='purple'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
     </StyledService> 
    </>  
    );
}

export default Services;

const StyledService = styled.div`
position: relative;
background-image: linear-gradient(#ffffff, #ffffff, #0c303c);
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
header {
  width: 100%;
  padding: 1em 0;
}
.toggle-button {
  
}
footer {
  width: 100%;
color: #e1cf62;
padding: 1.5em 0;
text-align: center;
background-color: #333333;
}
`;