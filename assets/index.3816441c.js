var f=Object.defineProperty,p=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var c=(i,o,t)=>o in i?f(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t,e=(i,o)=>{for(var t in o||(o={}))h.call(o,t)&&c(i,t,o[t]);if(s)for(var t of s(o))u.call(o,t)&&c(i,t,o[t]);return i},r=(i,o)=>p(i,g(o));import{j as a,s as d,a as m,H as n}from"./index.35023516.js";import{L as y,l as x,s as l}from"./Layout.489ca6a1.js";import"./Header.18e054c9.js";function w(i){return a(b,r(e({},i),{children:a("div",{className:"line"})}))}const b=d.div`
  width: 100%;
   .line {
   	 position: relative;
   	 left: 5%;
     right: 5%;
     height: 5px;
     border-radius: 2px;
     animation: line 2s;
     animation-fill-mode: forwards;
     background-color: ${i=>i.color};
   }
   @keyframes line {
   	 from {
   	 	width: 0;
   	 	background-color: #ffffff;
   	 }
   	 to {
   	 	width: 90%;
   	 	background-color: ${i=>i.color};
   	 }
   }
`;function Y(){return a(y,{children:a(k,{children:m("section",{children:[m("article",{children:[a("img",{style:e({},x),src:"./images/segurmatica.jpg",alt:"Segurm\xE1tica"}),a("p",{className:"article__pki",children:"PKI"}),a(w,{color:"#1799ff"}),a(n,r(e({},l),{children:"25 a\xF1os de experincia en seguridad."})),a(n,r(e({},l),{children:"Servicio de llave p\xFAblica."})),a(n,r(e({},l),{children:new Date().getFullYear()}))]}),a("img",{src:"./images/robot.jpg",alt:"robot"})]})})})}const k=d.div`
  width: 100%;
 
  section {
   width: 100%; 
   display: flex;
   flex-direction: column;
   justify-content: center; 
   align-items: center;

   img {
     max-width: 100%;
     height: auto;
   }
   article {
    position: relative;
    top: 3em;
    width: 100%;
    text-align: center;
    img {
    margin: 0 2em;  
    opacity: 0;  
    animation: logo;
    animation-delay: 0.2s;
    animation-duration: 1s;
    animation-direction: normal;
    animation-fill-mode: forwards;
    }
    .article__pki {
      opacity: 0;
      color: #0099FF;
      font-size: 3.2em;
      font-weight: bolder;
      font-family: calibri;
      animation: pki;
      animation-delay: 0.2s;
      animation-duration: 1.5s;
      animation-direction: normal;
      animation-fill-mode: forwards;
    }
  }
  }
  
@keyframes logo {
  from {
   opacity: 0; 
   transform: translateY(20px);
  }
  to {
   opacity: 1; 
   transform: translateY(0);
  }
}
@keyframes pki {
  from {
   opacity: 0; 
   transform: rotateY(180deg);
  }
  to {
   opacity: 1; 
   transform: rotateY(0);
  }
}
`;export{Y as default};
