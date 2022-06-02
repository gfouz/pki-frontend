import * as React from "react";
import styled from 'styled-components';
import Header from '../../components/header/Header'
import Renewal from '../../patterns/Renewal'

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
            <strong style={{ color: "#ff0000" }}>{isOpen ? "cerrar" : "abrir"}</strong>
          </Button>
        </header>
        <div className="container">
         <section>
          <Renewal />
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
            <DrawerHeader style={{ color: "#DC143C" }}>PKI-CONSULTAS</DrawerHeader>
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
      </StyledRequest>
    </>
  )
}

const StyledRequest = styled.div`

  .container {
    width: 100%;
    display: flex;
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