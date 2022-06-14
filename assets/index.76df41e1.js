var g=Object.defineProperty,h=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var d=(i,o,a)=>o in i?g(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[o]=a,t=(i,o)=>{for(var a in o||(o={}))u.call(o,a)&&d(i,a,o[a]);if(c)for(var a of c(o))y.call(o,a)&&d(i,a,o[a]);return i},n=(i,o)=>h(i,p(o));import{j as e,s as m,u as x,r as w,F as b,a as r,H as l}from"./index.3fe97b77.js";import{B as k,D as v,M as j,a as F,b as H,c as R,d as S,H as D,e as M}from"./Header.e4fdbbc3.js";function Y(i){return e(z,n(t({},i),{children:e("div",{className:"line"})}))}const z=m.div`
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
`,B={height:"150px",backgroundImage:"url('./images/aside.jpg')",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"70px"},s={size:"sm",m:"0.5em 0",color:"#666666",fontFamily:"calibri"},C={width:"150px",height:"auto",margin:"0 3.5em"};function I(){const{isOpen:i,onOpen:o,onClose:a}=x(),f=w.exports.useRef(null);return e(b,{children:r(P,{children:[e("header",{children:e(k,{m:"1em",ref:f,variant:"ghost",onClick:o,children:e("strong",{style:{color:"#ffffff"},children:i?"CERRAR":"ABRIR"})})}),r("section",{children:[r("article",{children:[e("img",{style:t({},C),src:"./images/segurmatica.jpg",alt:"Segurm\xE1tica"}),e("p",{className:"article__pki",children:"PKI"}),e(Y,{color:"#1799ff"}),e(l,n(t({},s),{children:"25 a\xF1os de experincia en seguridad."})),e(l,n(t({},s),{children:"Servicio de llave p\xFAblica."})),e(l,n(t({},s),{children:new Date().getFullYear()}))]}),e("img",{src:"./images/robot.jpg",alt:"robot"})]}),e("footer",{children:r(l,{size:"sm",children:["Segurm\xE1tica \xA9 ",new Date().getFullYear()]})}),r(v,{isOpen:i,placement:"left",onClose:a,children:[e(j,{}),r(F,{children:[e(H,{}),e(R,{children:e("img",{style:{width:"120px"},src:"./images/segurmatica.jpg",alt:"Segurm\xE1tica"})}),e(S,{children:e(D,{color:"#1a2253",column:!0})}),e(M,{}),e("div",{style:t({},B)})]})]})]})})}const P=m.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  header {
    background-color:#444444;
    width: 100%;
  }
  section {
   display: flex;
   flex-direction: column;
   justify-content: center; 
   align-items: center;
   width: 100%;
   min-height: 100%;
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
footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5em;
  color: #f8f8f8;
  background-color: #444444;
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
`;export{I as default};
