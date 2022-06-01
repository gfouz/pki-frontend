import{u as s,r as o,j as e,F as c,a as t,s as d}from"./index.7bea87ca.js";import{H as m}from"./Header.07b7e8c0.js";import{B as a,D as h,M as f,a as u,b as p,c as x,d as g,e as _}from"./chakra-ui-modal.esm.3dd48341.js";function b(){const{isOpen:i,onOpen:n,onClose:l}=s(),r=o.exports.useRef(null);return e(c,{children:t(C,{children:[t("div",{className:"l-main",children:[e(a,{m:"1em",ref:r,variant:"ghost",onClick:n,children:e("strong",{style:{color:"#ff0000"},children:i?"cerrar":"abrir"})}),e("article",{className:"l-main__title",children:t("div",{className:"textstack",children:[e("h1",{className:"textstack__title",children:"Consultas"}),e("h3",{className:"textstack__subtitle",children:"Servicio de Consultas"})]})})]}),t(h,{isOpen:i,placement:"right",onClose:l,children:[e(f,{}),t(u,{children:[e(p,{}),e(x,{style:{color:"#DC143C"},children:"PKI-SEGURMATICA"}),e(g,{children:e(m,{color:"#800080",column:!0})}),t(_,{children:[e(a,{variant:"outline",mr:3,onClick:l,children:"Cancel"}),e(a,{colorScheme:"purple",children:"Save"})]})]})]})]})})}const C=d.div`
  height: 100%;
  .l-main {   
  min-height: 100vh;  
  
}
  .l-main__title { 
  min-height: calc(100vh - 72px);  
  display: flex;
  flex-direction: column;
  justify-content: center; 
  }
  .textstack {
    padding: 2em;
    @media (min-width: 750px) {
      padding: 4em;
     }  
  }
  .textstack__title {
    color: #ffffff;
    display: inline;
    padding: 0 10px;
    font-family: orangina;
    letter-spacing: 5px;
    border-radius: 15px;
    background-color: #222222;
    @media (min-width: 510px) {
      font-size: 2.5em;
     }
    @media (min-width: 750px) {
      font-size: 3.5em; 
     }  
  }
  .textstack__subtitle {
    color: #ffffff;
     width: fit-content;
     background-color: #22222285;
  }
  
`;export{b as default};
