var g=Object.defineProperty,x=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var m=(t,i,n)=>i in t?g(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,r=(t,i)=>{for(var n in i||(i={}))b.call(i,n)&&m(t,n,i[n]);if(d)for(var n of d(i))C.call(i,n)&&m(t,n,i[n]);return t},c=(t,i)=>x(t,y(i));import{s as f,j as e,F as v,a as l,T as w,H as S,V as o,W as a,X as h,Y as p}from"./index.35023516.js";import{L as _}from"./Layout.489ca6a1.js";import{b as j,I as s,C as N}from"./index.esm.bfc8a2a6.js";import{B as q}from"./Header.18e054c9.js";const A={headerbg:"#385898",footerbg:"#385898"};function F(){const{register:t,handleSubmit:i,formState:{errors:n}}=j();return e(v,{children:e(k,{children:l("form",{onSubmit:i(u=>console.log(u)),children:[e(w,{w:"100%",p:"1.5em",children:e(S,{as:"h3",size:"lg",color:"#385898",children:"CONTACTO"})}),e(o,{spacing:2,p:"0.7em",children:l(a,{textAlign:"left",children:[e("label",{style:{color:"#888888"},children:e("strong",{children:"Nombre"})}),e(s,r({type:"email",variant:"outline"},t("name",{required:!0})))]})}),e(o,{spacing:2,p:"0.7em",children:l(a,{textAlign:"left",children:[e("label",{style:{color:"#888888"},children:e("strong",{children:"Email"})}),e(s,r({type:"email",variant:"outline"},t("email",{required:!0})))]})}),e(o,{spacing:2,p:"0.7em",children:l(a,{textAlign:"left",children:[e("label",{style:{color:"#888888"},children:e("strong",{children:"Message"})}),e(s,r({type:"text",variant:"outline"},t("message",{required:!0})))]})}),e(o,{spacing:2,p:"0.7em",children:e(a,{children:e(h,{p:"0 1em",w:"100%",children:e(p,{justifyContent:"flex-start",children:e(N,c(r({m:"0 0.7em",colorScheme:"red"},t("policy",{required:!0})),{children:"Acepto los terminos y condiciones."}))})})})}),e(h,{p:"2em 0.7em",w:"100%",children:e(p,{justifyContent:"space-evenly",children:e(q,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Enviar"})})})]})})})}const k=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em 0;
`;function O(){return e(_,c(r({},A),{children:e(B,{children:l("section",{className:"contact",children:[l("article",{className:"contact__divider",children:[e("h2",{className:"contact__title",children:" Contacte nos aqu\xED!"}),e("img",{src:"./images/habana.jpg"})]}),e("article",{className:"contact__divider",children:e(F,{})})]})})}))}const B=f.div`
   width: 100%;
   height: 100%;
   .contact {
    display: flex;
    @media (max-width: 800px){
      flex-direction: column;
      align-items: center;
    }
    }
   .contact__title {
    color: #222222;
    position: absolute;
    top: 40%;
    left:50%;
    white-space: nowrap;
    font-size: 1.6em;
    font-weight: bolder;
    text-transform: uppercase;
    text-shadow: 1px 1px 10px #ffffff;
    transform: translate(-50%, -50%);
   } 
   .contact__divider {
    display: flex;
    flex-direction: column;
  
    align-items: center;
    text-align: center;
    width: 100%;
    position:relative;
   }
`;export{O as default};
