var f=Object.defineProperty,g=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var s=(i,t,a)=>t in i?f(i,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[t]=a,r=(i,t)=>{for(var a in t||(t={}))p.call(t,a)&&s(i,a,t[a]);if(l)for(var a of l(t))u.call(t,a)&&s(i,a,t[a]);return i},n=(i,t)=>g(i,h(t));import{j as e,s as d,u as y,r as x,F as b,a as o,H as c}from"./index.921d58c2.js";import{B as w,D as k,M as v,a as j,b as H,c as R,d as S,H as F,e as M}from"./Header.5ba3a0ff.js";function z(i){return e(A,n(r({},i),{children:e("div",{className:"line"})}))}const A=d.div`
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
`,B={backgroundImage:"url('./images/aside.jpg')",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"200px"},C={size:"sm",m:"0.5em 0",color:"#666666",fontFamily:"calibri"},D={width:"300px",height:"auto"};function O(){const{isOpen:i,onOpen:t,onClose:a}=y(),m=x.exports.useRef(null);return e(b,{children:o(E,{children:[e("header",{children:e(w,{m:"1em",ref:m,variant:"ghost",onClick:t,children:e("strong",{style:{color:"#ffffff"},children:i?"CERRAR":"ABRIR"})})}),o("section",{children:[o("article",{children:[e("img",{style:r({},D),src:"./images/segurmatica.jpg",alt:"Segurm\xE1tica"}),e("p",{className:"article__pki",children:"PKI"}),e(z,{color:"#f12d39"}),e(c,n(r({},C),{children:"Servicio de llave p\xFAblica."}))]}),e("img",{src:"./images/robot.jpg",alt:"robot"})]}),e("footer",{children:o(c,{size:"sm",children:["Segurm\xE1tica \xA9 ",new Date().getFullYear()]})}),o(k,{isOpen:i,placement:"left",onClose:a,children:[e(v,{}),o(j,{style:r({},B),children:[e(H,{}),e(R,{children:e("img",{style:{width:"150px"},src:"./images/segurmatica.jpg",alt:"Segurm\xE1tica"})}),e(S,{children:e(F,{color:"#1a2253",column:!0})}),e(M,{})]})]})]})})}const E=d.div`
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
      color: crimson;
      font-size: 2em;
      font-weight: bolder;
      font-family: calibri;
      animation: pki;
      animation-delay: 0.2s;
      animation-duration: 1s;
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
   transform: translateX(100px);
  }
  to {
   opacity: 1; 
   transform: translateX(0);
  }
}
`;export{O as default};
