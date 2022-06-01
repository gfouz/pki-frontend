import * as React from "react";
import styled from "styled-components";
import Register from '../../patterns/Register';
import Header from '../../components/header/Header';


function Login() {

  return (
    <>
      <StyledResgister>
         <div className="main">
            <Header  color="#0091b8" bg="#eff9fb" padding="0.2em 0"/>
            <img src="./images/key2.jpg" />
         </div>
         <div className="login">
             <Register />
         </div>
      </StyledResgister>
    </>
  );
}
export default Login;
const StyledResgister = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 750px) {
      flex-direction: column;
    }
    .main {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      background-color: #eff9fb;
      
      img {
        max-width: 100%;
        height: auto;
      }
      &__title {
        text-align: center;
        color: #ffffff;
        margin: 5em 0 0 0;
        font-size: 1.5em;
        letter-spacing: 5px;
        font-weight: bolder;
        font-family: orangina;
        text-transform: uppercase;
        text-shadow: 1px 1px 10px #000000;
        @media (min-width: 500px){
          font-size:2.5em;
        }
      } 
      &__subtitle {
        margin: 0 0 2em 0;
        border-radius: 5px;
        text-align: center;
        color: #ffffff;
        font-weight: bolder;
        text-transform: uppercase;
        text-shadow: 1px 1px 10px #000000;
      }
    }

    .login {
      background-color: #eff9fb;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      width: 100%;
    } 
`;


