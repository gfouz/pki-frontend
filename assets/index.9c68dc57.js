var d=Object.defineProperty;var o=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var l=(i,t,e)=>t in i?d(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,c=(i,t)=>{for(var e in t||(t={}))m.call(t,e)&&l(i,e,t[e]);if(o)for(var e of o(t))f.call(t,e)&&l(i,e,t[e]);return i};import{u as h,r as p,j as a,F as u,a as n,s as g}from"./index.7bea87ca.js";import{H as x}from"./Header.07b7e8c0.js";import{B as r,D as k,M as b,a as v,b as y,c as _,d as M,e as C}from"./chakra-ui-modal.esm.3dd48341.js";const S={backgroundImage:"url('./images/aside.jpg')",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"200px"};function R(){const{isOpen:i,onOpen:t,onClose:e}=h(),s=p.exports.useRef(null);return a(u,{children:n(j,{children:[n("div",{className:"l-main",children:[a(r,{m:"1em",ref:s,variant:"ghost",onClick:t,children:a("strong",{style:{color:"#ffffff"},children:i?"cerrar":"abrir"})}),a("article",{className:"l-main__title",children:n("div",{className:"textstack",children:[a("h1",{className:"textstack__title",children:"PKI-SEGURMATICA"}),a("h3",{className:"textstack__subtitle",children:"Servicio de llave publica"})]})})]}),n(k,{isOpen:i,placement:"right",onClose:e,children:[a(b,{}),n(v,{style:c({},S),children:[a(y,{}),a(_,{style:{color:"#222222"},children:"PKI-SEGURMATICA"}),a(M,{children:a(x,{color:"#800080",column:!0})}),n(C,{children:[a(r,{variant:"outline",mr:3,onClick:e,children:"Cancel"}),a(r,{colorScheme:"purple",children:"Save"})]})]})]})]})})}const j=g.div`
  height: 100%;
  .l-main {   
  min-height: 100vh;  
  background-image: url(./images/home.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
    background-color: #22222285;
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
  
`;export{R as default};
