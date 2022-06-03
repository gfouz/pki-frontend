import * as React from "react";
import styled from 'styled-components';
import Header from '../../components/header/Header';
import HorizonLine from '../../components/HorizonLine';
import {asideStyle, mainTitleProps, subTitleProps, logoProps} from './constant';


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
      <StyledHome>

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
             <article>
              <img 
                 style={{...logoProps}}
                 src="./images/segurmatica.jpg" 
                 alt="Segurmática" />
              <p className="article__pki">PKI</p>   
              <HorizonLine color="#f12d39"/> 
              <Heading  {...subTitleProps}>Servicio de llave pública.</Heading>
             </article>  
              <img src="./images/robot.jpg" alt="robot" />
             
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
            <DrawerHeader>
               <img 
                 style={{width:"150px"}}
                 src="./images/segurmatica.jpg" 
                 alt="Segurmática" />
            </DrawerHeader>
            <DrawerBody>
              <Header color="#1a2253" column />
            </DrawerBody>
            <DrawerFooter>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </StyledHome>
    </>
  )
}

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  header {
    background-color:#444444;
    width: 100%;
  }
  section {
   display: flex;
   flex-direction: column;
   justify-content: center; 
   align-items: center;
   width: 100%;
   min-height: 100%;
   img {
     max-width: 100%;
     height: auto;
   }
   article {
    position: relative;
    top: 3em;
    width: 100%;
    text-align: center;
    img {
    margin: 0 2em;  
    opacity: 0;  
    animation: title;
    animation-delay: 0.2s;
    animation-duration: 1s;
    animation-direction: normal;
    animation-fill-mode: forwards;
    }
    .article__pki {
      opacity: 0;
      color: crimson;
      font-size: 2em;
      font-weight: bolder;
      font-family: calibri;
      animation: pki;
      animation-delay: 0.2s;
      animation-duration: 1s;
      animation-direction: normal;
      animation-fill-mode: forwards;
    }
  }
  }
footer {
  width: 100%;
  padding: 1.5em 0;
  color: #f8f8f8;
  text-align: center;
  background-color: #444444;
}
  
@keyframes title {
  from {
   opacity: 0; 
   transform: translateY(20px);
  }
  to {
   opacity: 1; 
   transform: translateY(0);
  }
}
@keyframes pki {
  from {
   opacity: 0; 
   transform: translateX(100px);
  }
  to {
   opacity: 1; 
   transform: translateX(0);
  }
}
`;