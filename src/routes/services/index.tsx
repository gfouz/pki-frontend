import * as React from "react";
import styled from "styled-components";
import { drawerBackground } from './constants'
import Header from '../../components/header/Header';
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
            onClick={onOpen}>
            <strong style={{ color: "crimson" }}>{isOpen ? "cerrar" : "abrir"}</strong>
          </Button>

        <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent style={{...drawerBackground}}>
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
width: 100%;


`;