import * as React from "react";
import styled from 'styled-components';
import Header from '../../components/header/Header';
import {asideStyle} from './constant';

import {
  Button,
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
        <div className="l-main">
          <Button
            m="1em"
            ref={btnRef}
            variant='ghost'
            onClick={onOpen}>
            <strong style={{ color: "#ffffff" }}>{isOpen ? "cerrar" : "abrir"}</strong>
          </Button>
          <article className="l-main__title">
            <div className="textstack">
              <h1 className="textstack__title">PKI-SEGURMATICA</h1>
              <h3 className="textstack__subtitle">Servicio de llave publica</h3>
            </div>
          </article>
        </div>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent style={{...asideStyle}}>
            <DrawerCloseButton />
            <DrawerHeader style={{ color: "#222222" }}>PKI-SEGURMATICA</DrawerHeader>
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
  height: 100%;
  .l-main {   
  min-height: 100vh;  
  background-image: url(./images/home.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
  .l-main__title { 
  min-height: calc(100vh - 72px);  
  display: flex;
  flex-direction: column;
  justify-content: center; 
  }
  .textstack {
    padding: 2em;
    @media (min-width: 750px) {
      padding: 4em;
     }  
  }
  .textstack__title {
    color: #ffffff;
    display: inline;
    padding: 0 10px;
    font-family: orangina;
    letter-spacing: 5px;
    border-radius: 15px;
    background-color: #22222285;
    @media (min-width: 510px) {
      font-size: 2.5em;
     }
    @media (min-width: 750px) {
      font-size: 3.5em; 
     }  
  }
  .textstack__subtitle {
    color: #ffffff;
     width: fit-content;
     background-color: #22222285;
  }
  
`;