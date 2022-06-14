var g=Object.defineProperty,h=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var s=(i,t,a)=>t in i?g(i,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[t]=a,o=(i,t)=>{for(var a in t||(t={}))u.call(t,a)&&s(i,a,t[a]);if(c)for(var a of c(t))y.call(t,a)&&s(i,a,t[a]);return i},n=(i,t)=>h(i,p(t));import{j as e,s as m,u as x,r as b,F as w,a as r,H as l}from"./index.0a2f5e54.js";import{B as k,D as v,M as j,a as F,b as H,c as R,d as S,H as D,e as M}from"./Header.685a1c5e.js";function Y(i){return e(z,n(o({},i),{children:e("div",{className:"line"})}))}const z=m.div`
  width: 100%;
   .line {
   	 position: relative;
   	 left: 5%;
     right: 5%;
     height: 3px;
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
`,A={backgroundImage:"url('./images/aside.jpg')",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"200px"},d={size:"sm",m:"0.5em 0",color:"crimson",fontFamily:"calibri"},B={width:"250px",height:"auto"};function I(){const{isOpen:i,onOpen:t,onClose:a}=x(),f=b.exports.useRef(null);return e(w,{children:r(C,{children:[e("header",{children:e(k,{m:"1em",ref:f,variant:"ghost",onClick:t,children:e("strong",{style:{color:"#ffffff"},children:i?"CERRAR":"ABRIR"})})}),r("section",{children:[r("article",{children:[e("img",{style:o({},B),src:"./images/segurmatica.jpg",alt:"Segurm\xE1tica"}),e("p",{className:"article__pki",children:"PKI"}),e(Y,{color:"crimson"}),e(l,n(o({},d),{children:"Servicio de llave p\xFAblica."})),e(l,n(o({},d),{children:new Date().getFullYear()}))]}),e("img",{src:"./images/robot.jpg",alt:"robot"})]}),e("footer",{children:r(l,{size:"sm",children:["Segurm\xE1tica \xA9 ",new Date().getFullYear()]})}),r(v,{isOpen:i,placement:"left",onClose:a,children:[e(j,{}),r(F,{style:o({},A),children:[e(H,{}),e(R,{children:e("img",{style:{width:"150px"},src:"./images/segurmatica.jpg",alt:"Segurm\xE1tica"})}),e(S,{children:e(D,{color:"#1a2253",column:!0})}),e(M,{})]})]})]})})}const C=m.div`
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
    animation: title;
    animation-delay: 0.2s;
    animation-duration: 1s;
    animation-direction: normal;
    animation-fill-mode: forwards;
    }
    .article__pki {
      opacity: 0;
      color: #0099FF;
      font-size: 2.7em;
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
  padding: 1.5em 0;
  color: #f8f8f8;
  text-align: center;
  background-color: #444444;
}
  
@keyframes title {
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
   transform: translateY(-100px);
  }
  to {
   opacity: 1; 
   transform: translateY(0);
  }
}
`;export{I as default};
