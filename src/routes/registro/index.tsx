import * as React from "react";
import styled from "styled-components";
import Register from '../../patterns/Register';
import Header from '../../components/header/Header';
import {drawerStyle} from "./property";
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


function Login() {


  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef: React.LegacyRef<HTMLButtonElement> = React.useRef(null)

  return (
    <>
      <StyledResgister> 
        <div className="main">
          <div className="btn-container">
          <Button
            m="1em"
            ref={btnRef}
            variant='ghost'
            onClick={onOpen}>
            <strong style={{ color: "#222222" }}>{isOpen ? "cerrar" : "abrir"}</strong>
          </Button>
         </div> 
            <h2 className="main__title">PKI-SEGURMATICA</h2>
            <img className="main__image" src="./images/register.jpg" />
            <h2 className="main__subtitle">Servicio de llave pública.</h2>
         </div>
         <div className="login">
             <Register />
         </div>


         <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent style={{...drawerStyle}}>
            <DrawerCloseButton style={{color:"#ffffff"}}/>
            <DrawerHeader style={{ color: "#f1f1f1" }}>PKI-SEGURMATICA</DrawerHeader>
            <DrawerBody>
              <Header color="#f1f1f1" column />
            </DrawerBody>
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='purple'>Save</Button>
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
    display: flex;
    justify-content: center;
    @media (max-width: 750px) {
      flex-direction: column;
    }   
    .btn-container {
      margin: 0.3em;
    }
    .main {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
  
      width: 100%;
      background-color: #F5F5F5;
      
    .main__image {
        max-width: 100%;
        height: auto;

      }
      &__title {
        position: absolute;
        top: 140px;
        left: 0;
        right: 0;
        text-align: center;
        color: #1f2956;
        font-size: 1.3em;
        letter-spacing: 5px;
        font-weight: bolder;
        font-family: orangina;
        text-transform: uppercase;
        @media (min-width: 500px){
          font-size:2em;
        }
      } 
      &__subtitle {
        position: absolute;
        text-align: center;
        font-weight: bolder;
        bottom: 10%;
        left: 0;
        right: 0;
        
      }
    }

    .login {
      background-color: #F5F5F5;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      width: 100%;
      padding: 4.7em 0 0 0;
    } 
`;