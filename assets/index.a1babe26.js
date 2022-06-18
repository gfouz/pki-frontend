var x=Object.defineProperty,f=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var d=(t,i,c)=>i in t?x(t,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[i]=c,a=(t,i)=>{for(var c in i||(i={}))_.call(i,c)&&d(t,c,i[c]);if(s)for(var c of s(i))C.call(i,c)&&d(t,c,i[c]);return t},m=(t,i)=>f(t,y(i));import{s as u,j as e,F as b,a as n,J as v,H as N,K as r,M as l,N as h,O as p}from"./index.ed9630f1.js";import{B as S,L as w}from"./Layout.1634c3dd.js";import{a as j,I as o,C as A}from"./index.esm.cd4022e7.js";function E(){const{register:t,handleSubmit:i,formState:{errors:c}}=j();return e(b,{children:e(F,{children:n("form",{onSubmit:i(g=>console.log(g)),children:[e(v,{w:"100%",p:"1.5em",children:e(N,{as:"h3",size:"lg",color:"#385898",children:"CONTACTO"})}),e(r,{spacing:2,p:"0.7em",children:n(l,{textAlign:"left",children:[e("label",{style:{color:"#888888"},children:e("strong",{children:"Nombre"})}),e(o,a({type:"email",variant:"outline"},t("name",{required:!0})))]})}),e(r,{spacing:2,p:"0.7em",children:n(l,{textAlign:"left",children:[e("label",{style:{color:"#888888"},children:e("strong",{children:"Email"})}),e(o,a({type:"email",variant:"outline"},t("email",{required:!0})))]})}),e(r,{spacing:2,p:"0.7em",children:n(l,{textAlign:"left",children:[e("label",{style:{color:"#888888"},children:e("strong",{children:"Message"})}),e(o,a({type:"text",variant:"outline"},t("message",{required:!0})))]})}),e(r,{spacing:2,p:"0.7em",children:e(l,{children:e(h,{p:"0 1em",w:"100%",children:e(p,{justifyContent:"flex-start",children:e(A,m(a({m:"0 0.7em",colorScheme:"red"},t("policy",{required:!0})),{children:"Acepto los terminos y condiciones."}))})})})}),e(h,{p:"2em 0.7em",w:"100%",children:e(p,{justifyContent:"space-evenly",children:e(S,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Enviar"})})})]})})})}const F=u.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em 0;
`;function z(){return e(w,{children:e(T,{children:n("section",{className:"contact",children:[n("article",{className:"contact__divider",children:[n("section",{className:"contact__information",children:[e("a",{href:"mailto: comercial@segurmatica.cu ",children:e("p",{className:"contact__text",children:"Email: comercial@segurmatica.cu"})}),e("a",{href:"mailto: soporte@segurmatica.cu ",children:e("p",{className:"contact__text",children:"Email: soporte@segurmatica.cu"})}),e("a",{href:"+5378703536",children:e("p",{className:"contact__text",children:"Tel: Comercial: 78703536 ext 133 y 134 ."})}),e("a",{href:"+5378703536",children:e("p",{className:"contact__text",children:"Tel: Soporte T\xE9cnico: +78703536 ext 135 y 136 ."})})]}),e("img",{src:"./images/contactos.png"})]}),e("article",{className:"contact__divider",children:e(E,{})})]})})})}const T=u.div`
   width: 100%;
   height: 100%;
   .contact {
    display: flex;
    @media (max-width: 800px){
      flex-direction: column;
      align-items: center;
    }
    }
   .contact__divider {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    width: 100%;
    position:relative;

    img {
      max-width: 100%;
      height: auto;
    }
   }
   .contact__information {
    position: absolute;
    top: 65%;
    left: 10%;
    color: #cccccc;
    max-width: 270px;
    text-align: left;
    font-size: 14px;
   }
`;export{z as default};
