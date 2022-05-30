import * as React from "react";
import styled from "styled-components";
import Register from '../../patterns/Register';
import Header from '../../components/header/Header';


function Contact() {

  return (
    <>
      <StyledContact>
         <div className="main">
            <Header  color="#ffffff" bg="#37566850"/>
            <h1>Registrese en el formulario adjunto.</h1>
         </div>
         <div className="login">
             <Register />
         </div>
      </StyledContact>
    </>
  );
}
export default Contact;
const StyledContact = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: tenorite;
    @media (max-width: 750px) {
      flex-direction: column;
    }
    .main {
      text-align: center;
      height: 100vh;
      width: 100%;
      background-image: url('./images/key.jpg');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
       h1 {
        position: relative;
        top: 13em;
        margin: 0 auto;
        border-radius: 5px;
        width: fit-content;
        color: #ff0000;
        font-size: 1.5em;
        background-color: #ffffff;
      }
    }

    .login {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100%;
    } 
`;


