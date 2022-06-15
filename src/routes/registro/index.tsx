import * as React from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import Register from "../../patterns/Register";

function Login() {
  return (
    <Layout>
      <StyledResgister>
        <section className="login">
          <div className="login__divider">
            <div className="login__logo">
              <img src="./images/segurmatica.jpg" />
              <p>PKI Servicio de llave pública.</p>
              <p>Formulario de solicitud.</p>
            </div>
            <img className="login__image" src="./images/generate.jpg" />
          </div>
          <div className="login__divider">
            <Register />
          </div>
        </section>
      </StyledResgister>
    </Layout>
  );
}
export default Login;
const StyledResgister = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  .login {
    position: relative;
    display: flex;
    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .login__divider {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .login__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #888888;
    font-weight: bolder;
    font-family: calibri;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  .login__image {
    max-width: 100%;
    height: auto;
  }
`;
