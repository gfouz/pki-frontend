import * as React from "react";
import styled from 'styled-components';
import Header from '../../components/header/Header';
import {asideStyle} from './constant';


import {
  Button,
  Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
} from '@chakra-ui/react'

export default function Homepage() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef: React.LegacyRef<HTMLButtonElement> = React.useRef(null)

  return (
    <>
      <StyledMain>

        <header>
          <Button
            m="1em"
            ref={btnRef}
            variant='ghost'
            onClick={onOpen}>
            <strong style={{ color: "#ffffff" }}>{isOpen ? "CERRAR" : "ABRIR"}</strong>
          </Button>
        </header>
        <section>
              <img src="./images/homex.jpg" alt="Homepage" />
        </section>
        <footer>
           <Heading  size='sm'>Segurmática &copy; {new Date().getFullYear()}</Heading>
        </footer>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent style={{...asideStyle}}>
            <DrawerCloseButton />
            <DrawerHeader style={{ color: "#222222" }}>PKI-INICIO</DrawerHeader>
            <DrawerBody>
              <Header color="#800080" column />
            </DrawerBody>
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='purple'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </StyledMain>
    </>
  )
}

const StyledMain = styled.div`
  width: 100%;
  height: 100%;
  background-color: #7eeee0;
  header {
    background-color:#3d6d67;
  }
  section {
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 100vh;  
  background-color: #7eeee0;
   img {
    max-width: 100%;
    height: auto;
    margin: 3em 0 3em 0;
   }
  }
footer {
  margin: 2em 0 0 0;
  padding: 2em 0;
  color: #f8f8f8;
  text-align: center;
  background-color:#3d6d67;
}
  
  
`;