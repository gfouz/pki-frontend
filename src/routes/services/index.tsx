import * as React from "react";
import styled from "styled-components";
import { footerProps, toggleButton } from './constants'
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
          <DrawerContent >
            <DrawerCloseButton style={{color:"crimson"}}/>
            <DrawerHeader>
               <img 
                 style={{width:"120px"}}
                 src="./images/segurmatica.jpg" 
                 alt="Segurmática" />
            </DrawerHeader>
            <DrawerBody>
              <Header color="#805ad5" column />
            </DrawerBody>
            <DrawerFooter>
             <div style={{...footerProps}}></div>
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
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: url('./images/xx.jpg');
background-position: top;
background-size: cover;
background-repeat: no-repeat;
width: 100%;
min-height: 100vh;

header {
  width: 100%;
  padding: 0.1em 0;
  background-color: #333333;
}
footer {
  width: 100%;
color: #e1cf62;
padding: 1.5em 0;
text-align: center;
background-color: #333333;
}
`;