import * as React from 'react'
import {drawerProps} from './constant';
import styled from "styled-components";
import Header from '../../components/header/Header'
import ContactForm from '../../components/ContactForm'

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

function Contacts() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef: React.LegacyRef<HTMLButtonElement> = React.useRef(null)


  return (
    <>
      <StyledContact>

        <header className="c-header">
          <Button
            m="1em"
            ref={btnRef}
            variant='ghost'
            onClick={onOpen}>
            <strong style={{ color: "#ffffff" }}>{isOpen ? "CERRAR" : "ABRIR"}</strong>
          </Button>
        </header>
        <section className="cmain">
          <article className="cmain__divider">
              <h2 className="cmain__title"> Contacte nos aquí!</h2>
              <img src="./images/habana.jpg"  />
          </article>
          <article className="cmain__divider">
            <ContactForm />
          </article>
        </section>
        <footer>
           <Heading size="sm">Segurmática &copy; {new Date().getFullYear()}</Heading>
        </footer>



        {/* This is the absolute sliding sidebar related to the body*/} 
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
               <img 
                 style={{width:"120px"}}
                 src="./images/segurmatica.jpg" 
                 alt="Segurmática" />
            </DrawerHeader>
            <DrawerBody >
              <Header color="#1a2253" column />
            </DrawerBody>
            <DrawerFooter>
            </DrawerFooter>
              <div style={{...drawerProps}}></div>
          </DrawerContent>
        </Drawer>
      </StyledContact>  
    </>
  );
}

export default Contacts;

const StyledContact = styled.div`
   width: 100%;
   min-height: 100vh;
   .cmain {
    display: flex;
    @media (max-width: 800px){
      flex-direction: column;
      align-items: center;
    }
    }
    header {
      background-color: #282c37;
    }
   .cmain__title {
    color: #F8F8FF;
    position: absolute;
    top: 40%;
    left:50%;
    white-space: nowrap;
    font-size: 1.6em;
    font-weight: bolder;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
   } 
   .cmain__divider {
    display: flex;
    flex-direction: column;
  
    align-items: center;
    text-align: center;
    width: 100%;
    position:relative;
   }
   footer {
    width: 100%;
    padding: 1.5em;
    color: #ffffff;
    text-align: center;
    background-color: #0f0d18;
   }
`;