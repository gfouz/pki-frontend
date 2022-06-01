import * as React from 'react';
import styled from 'styled-components';
import Header from "../../components/header/Header";
import Footer from "../../components/Footer";
import Test from '../../patterns/testing';


function Services() {
	return(
    <>
     <StyledService>		
       <div className="request">
          <Header  padding="1em" color="#ffffff" bg="#555555"/>
           <Test />
          <Footer simple bg="#444444" p="1em" c="#ffffff"> 
            <h3>
               Seguridad informática {new Date().getFullYear()}
            </h3>
          </Footer>
       </div>
     </StyledService> 
    </>  
    );
}

export default Services;

const StyledService = styled.div`
width: 100%;
min-height: 100vh;
h1{
  padding: 0 0.2em;
}
.request {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1f1;
}
`;