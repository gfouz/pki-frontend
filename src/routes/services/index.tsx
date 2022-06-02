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
          <Button
            m="1em"
            ref={btnRef}
            variant="ghost"
            onClick={onOpen}
            className="toggle-button"
            >
            <strong style={{ ...toggleButton }}>{isOpen ? "CERRAR" : "ABRIR"}</strong>
          </Button>
          <Heading color="#e1cf62" m="2em">Servicios</Heading>
          <Glider />


        {/*THIS IS THE LATERAL MENU AND IS ABSOLUTE TO THE BODY*/}

        <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
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
background-color: #222222;
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.toggle-button {
  position: absolute;
  top: 20px;
  left: 20px;
}
`;