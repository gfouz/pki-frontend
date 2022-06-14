import * as React from "react";
import styled from "styled-components";
import Register from '../../patterns/Register';
import Header from '../../components/header/Header';
import { lateralMenu, toggleButton} from "./constants";
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


function Login() {


  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef: React.LegacyRef<HTMLButtonElement> = React.useRef(null)

  return (
    <>
      <StyledResgister> 
        <header>
            <Button
            m="1em"
            ref={btnRef}
            variant="ghost"
            onClick={onOpen}
            className="toggle-button">
            <strong style={{ ...toggleButton }}>{isOpen ? "CERRAR" : "ABRIR"}</strong>
           </Button>
        </header>
        <section className="login">
         <div className="login__divider">
         <div className="login__logo">
          <img src="./images/segurmatica.jpg" /> 
          <p>PKI Servicio de llave pública.</p>
          <p>Formulario de solicitud.</p>
         </div> 
          <img className="login__image" src="./images/generate.jpg" />
         </div>
         <div className="login__divider"> 
          <Register />
         </div> 
      </section> 
      <footer>
        <Heading  size='sm'>Segurmática &copy; {new Date().getFullYear()}</Heading>
      </footer>

        {/* This is the sliding sidebar absolute related to the body*/} 
        
         <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton style={{color:"#222222"}}/>
            <DrawerHeader>
                <img 
                 style={{width:"150px"}}
                 src="./images/segurmatica.jpg" 
                 alt="Segurmática" />
            </DrawerHeader>
            <DrawerBody>
              <Header color="#800080" column />
            </DrawerBody>
            <DrawerFooter>
               <div style={{...lateralMenu}}></div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </StyledResgister>
    </>
  );
}
export default Login;
const StyledResgister = styled.div`
    width: 100%;
    background-color: #f8f8f8;
    header {
      background-color: #777777;
    }
    .login { 
    position: relative;
    display: flex;
    @media (max-width: 800px){
      flex-direction: column;
      align-items: center;
    }
    }
    .login__divider {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .login__logo {
      position: absolute;
      top: 50%;
      left: 50%;
      color: #888888;
      font-weight: bolder;
      font-family: calibri;
      text-align: center;
      transform: translate(-50%, -50%);
    }
    .login__image {
      max-width: 100%;
      height: 100%;
      object-fit: fill;
    }
    footer {
      color: #FFFFFF;
      padding: 1.5em 0;
      text-align: center;
      background-color: #777777;
    }
`;