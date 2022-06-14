var C=Object.defineProperty,v=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var m=(t,r,n)=>r in t?C(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,a=(t,r)=>{for(var n in r||(r={}))S.call(r,n)&&m(t,n,r[n]);if(d)for(var n of d(r))F.call(r,n)&&m(t,n,r[n]);return t},h=(t,r)=>v(t,w(r));import{s as g,j as e,F as f,a as i,T as k,H as x,V as l,W as o,X as u,Y as p,u as _,r as j}from"./index.3fe97b77.js";import{B as y,D as A,M as R,a as M,b as N,c as B,d as D,H as E,e as H}from"./Header.e4fdbbc3.js";import{b as q,I as c,C as O}from"./index.esm.8f3b5bf0.js";const z={height:"150px",backgroundImage:"url('./images/aside.jpg')",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"70px"};function I(){const{register:t,handleSubmit:r,formState:{errors:n}}=q();return e(f,{children:e(T,{children:i("form",{onSubmit:r(b=>console.log(b)),children:[e(k,{w:"100%",p:"1.5em",children:e(x,{as:"h3",size:"lg",color:"#810606",children:"CONTACTO"})}),e(l,{spacing:2,p:"0.7em",children:i(o,{textAlign:"left",children:[e("label",{style:{color:"#888888"},children:e("strong",{children:"Nombre"})}),e(c,a({type:"email",variant:"outline"},t("name",{required:!0})))]})}),e(l,{spacing:2,p:"0.7em",children:i(o,{textAlign:"left",children:[e("label",{style:{color:"#888888"},children:e("strong",{children:"Email"})}),e(c,a({type:"email",variant:"outline"},t("email",{required:!0})))]})}),e(l,{spacing:2,p:"0.7em",children:i(o,{textAlign:"left",children:[e("label",{style:{color:"#888888"},children:e("strong",{children:"Message"})}),e(c,a({type:"text",variant:"outline"},t("message",{required:!0})))]})}),e(l,{spacing:2,p:"0.7em",children:e(o,{children:e(u,{p:"0 1em",w:"100%",children:e(p,{justifyContent:"flex-start",children:e(O,h(a({m:"0 0.7em",colorScheme:"red"},t("policy",{required:!0})),{children:"Acepto los terminos y condiciones."}))})})})}),e(u,{p:"2em 0.7em",w:"100%",children:e(p,{justifyContent:"space-evenly",children:e(y,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Enviar"})})})]})})})}const T=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em 0;
`;function $(){const{isOpen:t,onOpen:r,onClose:n}=_(),s=j.exports.useRef(null);return e(f,{children:i(P,{children:[e("header",{className:"c-header",children:e(y,{m:"1em",ref:s,variant:"ghost",onClick:r,children:e("strong",{style:{color:"#ffffff"},children:t?"CERRAR":"ABRIR"})})}),i("section",{className:"cmain",children:[i("article",{className:"cmain__divider",children:[e("h2",{className:"cmain__title",children:" Contacte nos aqu\xED!"}),e("img",{src:"./images/habana.jpg"})]}),e("article",{className:"cmain__divider",children:e(I,{})})]}),e("footer",{children:i(x,{size:"sm",children:["Segurm\xE1tica \xA9 ",new Date().getFullYear()]})}),i(A,{isOpen:t,placement:"left",onClose:n,children:[e(R,{}),i(M,{children:[e(N,{}),e(B,{children:e("img",{style:{width:"120px"},src:"./images/segurmatica.jpg",alt:"Segurm\xE1tica"})}),e(D,{children:e(E,{color:"#1a2253",column:!0})}),e(H,{}),e("div",{style:a({},z)})]})]})]})})}const P=g.div`
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
    font-size: 1.6em;
    font-weight: bolder;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
   } 
   .cmain__divider {
    display: flex;
    flex-direction: column;
  
    align-items: center;
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
`;export{$ as default};
