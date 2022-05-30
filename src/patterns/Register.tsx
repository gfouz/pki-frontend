import * as React from "react";
import { ORGANISMOS, EMPRESAS, ENTIDADES } from "./constants";
import Option from '../components/Option';
import {
  Box,
  Flex,
  Text,
  Radio,
  Input,
  HStack,
  Button,
  Center,
  Select,
  Checkbox,
  Heading,
  RadioGroup,
  ChakraProvider,
} from "@chakra-ui/react";
import styled from "styled-components";

export default function Resgister() {
  const [radio, setRadio] = React.useState("juridica");
  return (
    <>
      <ChakraProvider>
        <StyledRegister>
          <Center w="100%" p="1.5em">
            <Heading as="h3" size="lg" color="#e53e3e">
              Solicitud de Generación
            </Heading>
          </Center>
          <Center w="100%" p="0.3em 0">
            <Text color="#ff0000">Escriba sus datos correspondientes:</Text>
          </Center>
          <HStack spacing={2} p="0.7em">
            <Input
              placeholder="Nro de ID"
              size="sm"
              type="number"
              variant="flushed"
            />
            <Input
              placeholder="Nro de Tomo"
              size="sm"
              type="number"
              variant="flushed"
            />
            <Input
              placeholder="Nro de Folio"
              size="sm"
              type="number"
              variant="flushed"
            />
          </HStack>
          <Box p="2em 0.7em" w="100%">
            <Flex justifyContent="space-evenly">
              <Input
                placeholder="Correo Electrónico"
                m="0 0.7em"
                size="sm"
                type="email"
                variant="flushed"
              />
              <Input
                placeholder="Nro de Teléfono"
                m="0 0.7em"
                size="sm"
                type="number"
                variant="flushed"
              />
            </Flex>
          </Box>
          <RadioGroup onChange={setRadio} value={radio} w="100%">
            <Box p="0 0.7em" w="100%">
              <Flex justifyContent="flex-start">
                <Radio
                  m="0 1em"
                  value="juridica"
                  isChecked={radio == "juridica" ? true : false}
                >
                  Persona jurídica
                </Radio>
                <Radio
                  m="0 1em"
                  value="natural"
                  isChecked={radio == "natural" ? true : false}
                >
                  Persona Natural
                </Radio>
              </Flex>
            </Box>
          </RadioGroup>
          {radio == "juridica" && (
            <>
              <Box p="2em 0.7em" w="100%">
                <Flex justifyContent="space-evenly">
                  <Select placeholder='Organismos' m="0 0.7em">
                    <Option data={ORGANISMOS} />
                  </Select>
                  <Select placeholder='Empresa o Institución' m="0 0.7em">
                    <Option data={EMPRESAS} />
                  </Select>
                </Flex>
              </Box>
              <Box p="2em 0.7em" w="100%">
                <Flex justifyContent="space-evenly">
                <Input
                  m="0 0.7em"
                  type="text"
                  variant="flushed"
                  placeholder="Escribe tu cargo"
                />
                <Input 
                  m="0 0.7em"
                  type="text" 
                  variant="flushed"
                  placeholder="Representante" 
                  />
              </Flex>
            </Box>  
            </>
          )}
          {radio == "natural" && (
            <Box p="2em 0.7em" w="100%">
              <Flex justifyContent="space-evenly">
                <Select placeholder='Entidades' >
                  <Option data={ENTIDADES} />
                </Select>
              </Flex>
            </Box>
          )}
         <Box p="0 1em" w="100%">
              <Flex justifyContent="flex-start">
                <Checkbox m="0 0.7em">
                    Acepto los terminos y condiciones.
                </Checkbox>
              </Flex>
         </Box> 
         <Box p="2em 0.7em" w="100%">
            <Flex justifyContent="space-evenly">
                <Button colorScheme='blue' variant='solid'>
                   Continuar
                </Button>
                <Button colorScheme='red' variant='solid'>
                   Cancelar
                </Button>
            </Flex>
         </Box>   
        </StyledRegister>
      </ChakraProvider>
    </>
  );
}

const StyledRegister = styled.div`
  max-width: 450px;
  min-width: 320px;
  margin: 5px;
  max-height: 650px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 15px;
  box-shadow: 1px 1px 10px #000000;
`;
//Posible themes: teal,