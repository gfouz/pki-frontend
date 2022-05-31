import * as React from "react";
import styled from 'styled-components';
import Header from '../../components/header/Header'
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
	ChakraProvider
} from '@chakra-ui/react'

export default function Homepage() {

	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef: React.LegacyRef<HTMLButtonElement> = React.useRef(null)

	return (
		<>
			<ChakraProvider>
       <StyledMain>
        <div className="main">
         <Button 
            m="1em"
            ref={btnRef} 
            colorScheme='transparent' 
            onClick={onOpen}>
            <strong style={{color:"#ffffff"}}>ABRIR</strong>
        </Button>
        <h1 className="main__title">PKI-SEGURMATICA</h1>
        <h3>Servicio de llave publica</h3>
        </div>
				<Drawer
					isOpen={isOpen}
					placement='right'
					onClose={onClose}
				>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader style={{color:"red"}}>PKI-SEGURMATICA</DrawerHeader>

						<DrawerBody>
							<Header color="red" column/>
						</DrawerBody>
                
						<DrawerFooter>
							<Button variant='outline' mr={3} onClick={onClose}>
								Cancel
							</Button>
							<Button colorScheme='blue'>Save</Button>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
       </StyledMain> 
			</ChakraProvider>
		</>
	)
}

const StyledMain = styled.div`
  height: 100%;
  .main { 
  min-height: 100vh;  
  background-image: url(./images/home.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &__title {
    color: #ffffff;
    margin: 2em;
    font-family: orangina;
    letter-spacing: 5px;
    @media (min-width: 500px) {
      font-size: 2em;
     
    }
  }
  h3 {
    color: #ffffff;
    margin: 2em;
     @media (min-width: 500px) {
       margin: 4em;
     }
  }
}
`;