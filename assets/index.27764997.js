var s=Object.defineProperty;var i=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var c=(t,a,e)=>a in t?s(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,l=(t,a)=>{for(var e in a||(a={}))m.call(a,e)&&c(t,e,a[e]);if(i)for(var e of i(a))f.call(a,e)&&c(t,e,a[e]);return t};import{u as p,r as u,j as n,F as g,a as r,s as h}from"./index.c49b2943.js";import{B as o,D as x,M as b,a as k,b as y,c as v,d as C,H as M,e as j}from"./Header.1603638e.js";const w={backgroundImage:"url('./images/aside.jpg')",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"200px"};function B(){const{isOpen:t,onOpen:a,onClose:e}=p(),d=u.exports.useRef(null);return n(g,{children:r(_,{children:[n("div",{className:"main",children:n(o,{m:"1em",ref:d,variant:"ghost",onClick:a,children:n("strong",{style:{color:"#ffffff"},children:t?"cerrar":"abrir"})})}),r(x,{isOpen:t,placement:"left",onClose:e,children:[n(b,{}),r(k,{style:l({},w),children:[n(y,{}),n(v,{style:{color:"#222222"},children:"PKI-INICIO"}),n(C,{children:n(M,{color:"#800080",column:!0})}),r(j,{children:[n(o,{variant:"outline",mr:3,onClick:e,children:"Cancel"}),n(o,{colorScheme:"purple",children:"Save"})]})]})]})]})})}const _=h.div`
  height: 100%;
  .main {   
  min-height: 100vh;  
  background-image: url(./images/home7.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
  .main__title { 
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
  
`;export{B as default};
