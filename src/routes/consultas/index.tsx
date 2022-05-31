import * as React from 'react';
import Nav from "../../components/Nav";
import Box from "../../components/Box";
import Column from "../../graphics/Column";




const navbar:object = {
  color: "#444444"
};

function Consultas() {

	return(
	<>	
    <Nav {...navbar} />	
    <Box column height="100vh">
     <Column  spread center>
       <h1>Consultas</h1>
     </Column>  
    </Box>
  </> 
		);
}

export default Consultas;

