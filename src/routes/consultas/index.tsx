import * as React from "react";
import styled from 'styled-components';
import Header from '../../components/header/Header'
import ErrorMessage from '../../components/ErrorMessage'

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

export default function Request() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef: React.LegacyRef<HTMLButtonElement> = React.useRef(null)

  return (
    <>
      <StyledRequest>
        <header>
          <Button
            m="1em"
            ref={btnRef}
            variant='ghost'
            onClick={onOpen}>
            <strong style={{ color: "#ff0000" }}>{isOpen ? "CERRAR" : "ABRIR"}</strong>
          </Button>
        </header>
        <div className="container">
         <section>
            <ErrorMessage msg="errror" />
         </section>
        </div>

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
            <DrawerBody>
              <Header color="#800080" column />
            </DrawerBody>
            <DrawerFooter>
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </StyledRequest>
    </>
  )
}

const StyledRequest = styled.div`

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid red;
  border-radius: 5px;
  max-width: 500px;
}
}
  
  
`;