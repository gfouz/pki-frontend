import * as React from "react";
import styled from "styled-components";
import Register from '../../patterns/Register';
import Header from '../../components/header/Header';
import {sidebarStyles} from "./constants";
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
            className="login__open-btn">
            <strong style={{ color: "#385898" }}>{isOpen ? "cerrar" : "abrir"}</strong>
           </Button>
        </header>
        <section className="login">
         <div className="login__container">
          <img className="login__image" src="./images/login2.jpg" />
         </div>
         <div className="login__container"> 
          <Register />
         </div> 
      </section> 
      <footer>
        <Heading  size='sm'>Sergurmática &copy; {new Date().getFullYear()}</Heading>
      </footer>
         <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent style={{...sidebarStyles}}>
            <DrawerCloseButton style={{color:"#222222"}}/>
            <DrawerHeader style={{ color: "#CC3333" }}>PKI-REGISTROS</DrawerHeader>
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
      </StyledResgister>
    </>
  );
}
export default Login;
const StyledResgister = styled.div`
    width: 100%;
    background-color: #eff9fb;
    .login { 
    position: relative;
    display: flex;
    @media (max-width: 800px){
      flex-direction: column;
      align-items: center;
    }
    }
    .login__container {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .login__image {
      max-width: 100%;
      height: 100%;
      object-fit: fill;
    }
    footer {
      color: #385898;
      padding: 2em 0;
      text-align: center;
      background-color: #eff9fb;
    }
`;