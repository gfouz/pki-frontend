var C=Object.defineProperty,v=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var m=(n,r,i)=>r in n?C(n,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[r]=i,a=(n,r)=>{for(var i in r||(r={}))S.call(r,i)&&m(n,i,r[i]);if(d)for(var i of d(r))F.call(r,i)&&m(n,i,r[i]);return n},h=(n,r)=>v(n,w(r));import{s as f,j as e,F as g,a as t,J as j,H as x,K as c,M as l,N as u,O as p,u as k,r as _}from"./index.4c46a31d.js";import{B as y,D as M,M as N,a as R,b as B,c as D,d as H,H as O,e as q}from"./Header.525f1001.js";import{a as A,I as o,C as E}from"./index.esm.2393af50.js";const z={height:"150px",backgroundImage:"url('./images/aside.jpg')",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"120px"};function I(){const{register:n,handleSubmit:r,formState:{errors:i}}=A();return e(g,{children:e(P,{children:t("form",{onSubmit:r(b=>console.log(b)),children:[e(j,{w:"100%",p:"1.5em",children:e(x,{as:"h3",size:"lg",color:"#810606",children:"CONTACTO"})}),e(c,{spacing:2,p:"0.7em",children:t(l,{children:[e("label",{style:{color:"#444444"},children:e("strong",{children:"Nombre"})}),e(o,a({type:"email",variant:"outline"},n("name",{required:!0})))]})}),e(c,{spacing:2,p:"0.7em",children:t(l,{children:[e("label",{children:e("strong",{children:"Email"})}),e(o,a({type:"email",variant:"outline"},n("email",{required:!0})))]})}),e(c,{spacing:2,p:"0.7em",children:t(l,{children:[e("label",{children:e("strong",{children:"Message"})}),e(o,a({type:"text",variant:"outline"},n("message",{required:!0})))]})}),e(c,{spacing:2,p:"0.7em",children:e(l,{children:e(u,{p:"0 1em",w:"100%",children:e(p,{justifyContent:"flex-start",children:e(E,h(a({m:"0 0.7em",colorScheme:"red"},n("policy",{required:!0})),{children:"Acepto los terminos y condiciones."}))})})})}),e(u,{p:"2em 0.7em",w:"100%",children:e(p,{justifyContent:"space-evenly",children:e(y,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Continuar"})})})]})})})}const P=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`;function G(){const{isOpen:n,onOpen:r,onClose:i}=k(),s=_.exports.useRef(null);return e(g,{children:t(T,{children:[e("header",{className:"c-header",children:e(y,{m:"1em",ref:s,variant:"ghost",onClick:r,children:e("strong",{style:{color:"#ffffff"},children:n?"CERRAR":"ABRIR"})})}),t("section",{className:"cmain",children:[t("article",{className:"cmain__divider",children:[e("h2",{className:"cmain__title",children:" Contacte nos aqu\xED!"}),e("img",{src:"./images/landscape.jpg"})]}),e("article",{className:"cmain__divider cmain-flex",children:e(I,{})})]}),e("footer",{children:t(x,{size:"sm",children:["Segurm\xE1tica \xA9 ",new Date().getFullYear()]})}),t(M,{isOpen:n,placement:"left",onClose:i,children:[e(N,{}),t(R,{children:[e(B,{}),e(D,{children:e("img",{style:{width:"120px"},src:"./images/segurmatica.jpg",alt:"Segurm\xE1tica"})}),e(H,{children:e(O,{color:"#1a2253",column:!0})}),e(q,{}),e("div",{style:a({},z)})]})]})]})})}const T=f.div`
   width: 100%;
   min-height: 100vh;
   .cmain {
    display: flex;
    @media (max-width: 800px){
      flex-direction: column;
      align-items: center;
    }
    }
    header {
      background-color: #282c37;
    }
   .cmain__title {
    color: #F8F8FF;
    position: absolute;
    top: 40%;
    left:50%;
    white-space: nowrap;
    font-size: 1.7em;
    font-weight: bolder;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
   } 
   .cmain__divider {
    text-align: center;
    width: 100%;
    position:relative;
   }
   footer {
    width: 100%;
    padding: 1.5em;
    color: #ffffff;
    text-align: center;
    background-color: #0f0d18;
   }
   .cmain-flex {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
   }
`;export{G as default};
