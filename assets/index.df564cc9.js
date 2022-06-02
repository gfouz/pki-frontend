var I=Object.defineProperty,H=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var g=(o,r,n)=>r in o?I(o,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[r]=n,i=(o,r)=>{for(var n in r||(r={}))B.call(r,n)&&g(o,n,r[n]);if(y)for(var n of y(r))T.call(r,n)&&g(o,n,r[n]);return o},a=(o,r)=>H(o,O(r));import{s as F,r as f,j as e,F as v,a as l,I as S,H as q,T as A,M as p,N as C,J as P,K as b,u as _}from"./index.05b3c654.js";import{B as h,D as E,M as K,a as V,b as z,c as G,d as J,H as L,e as U}from"./Header.01256d6c.js";import{a as $,R as Q,c as w,I as x,O as R,b as W,T as X,C as Y}from"./index.esm.64c12304.js";const Z=F.div`
  background-color: #F8F8F8;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  @media (min-width: 800px){
    padding: 0.5em 0;
  }
`;function ee(){const[o,r]=f.exports.useState("#666666"),[n,d]=f.exports.useState(""),[m,j]=f.exports.useState("renewal"),{register:u,handleSubmit:D,formState:{errors:t}}=$(),M=s=>console.log(s);function N(s){let{value:k}=s.target,c=k.length;c&&c===11?r("#66CC00"):d("Validos 11 n\xFAmeros"),c&&c>11?r("#ff0000"):d("Complete 11 numeros"),c&&c<11?r("#CCCCCC"):d("N\xFAmero excedido de 11")}return e(v,{children:e(Z,{children:l("form",{onSubmit:D(M),children:[e(S,{w:"100%",p:"1.5em",children:e(q,{as:"h3",size:"lg",color:"#B22222",children:"Solicitud:"})}),e(S,{w:"100%",p:"0.3em 0",children:e(A,{color:"#666666",children:"Tipo de solicitud:"})}),e(Q,{onChange:j,value:m,w:"100%",children:e(p,{p:"0 0.7em",w:"100%",children:l(C,{justifyContent:"space-evenly",children:[e(w,{m:"0 1em",value:"renewal",colorScheme:"red",isChecked:m=="renewal",children:"Renovaci\xF3n"}),e(w,{m:"0 1em",value:"revocation",colorScheme:"red",isChecked:m=="natural",children:"Revocaci\xF3n"})]})})}),l(P,{spacing:2,p:"0.7em",children:[l(b,{children:[e("label",{style:{color:`${o}`},children:e("strong",{children:"Nro de ID"})}),e(x,i(a(i({},R),{_placeholder:{color:t.id?"red.400":"#666666"},placeholder:t.id?"Valido 11 d\xEDgitos":" "}),u("id",a(i({},W),{onChange:s=>N(s)}))))]}),l(b,{children:[e("label",{children:"Nro de Serie o DN"}),e(x,i(a(i({},R),{_placeholder:{color:t.dn?"red.400":"gray.500"},placeholder:t.dn?"Olvido su DN!":""}),u("dn",{required:!0})))]})]}),m=="revocation"&&e(v,{children:e(p,{p:"2em 0.7em",w:"100%",children:e(C,{justifyContent:"space-evenly",children:e(x,i(a(i({m:"0 0.7em"},X),{_placeholder:{color:t.motive?"red.400":"gray.500"},placeholder:t.motive?"Motivo de Revocaci\xF3n!":"Escriba Motivo de Revocaci\xF3n"}),u("motive",{required:!0})))})})}),e(p,{p:"0 1em",w:"100%",children:e(C,{justifyContent:"flex-start",children:e(Y,a(i({m:"0 0.7em",colorScheme:"red"},u("policy",{required:!0})),{children:"Acepto los terminos y condiciones."}))})}),e(p,{p:"2em 0.7em",w:"100%",children:l(C,{justifyContent:"space-evenly",children:[e(h,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Continuar"}),e(h,{colorScheme:"red",variant:"solid",children:"Cancelar"})]})})]})})})}function te(){const{isOpen:o,onOpen:r,onClose:n}=_(),d=f.exports.useRef(null);return e(v,{children:l(re,{children:[e("header",{children:e(h,{m:"1em",ref:d,variant:"ghost",onClick:r,children:e("strong",{style:{color:"#ff0000"},children:o?"cerrar":"abrir"})})}),e("div",{className:"container",children:e("section",{children:e(ee,{})})}),l(E,{isOpen:o,placement:"left",onClose:n,children:[e(K,{}),l(V,{children:[e(z,{}),e(G,{style:{color:"#DC143C"},children:"PKI-CONSULTAS"}),e(J,{children:e(L,{color:"#800080",column:!0})}),l(U,{children:[e(h,{variant:"outline",mr:3,onClick:n,children:"Cancel"}),e(h,{colorScheme:"purple",children:"Save"})]})]})]})]})})}const re=F.div`

  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid red;
  border-radius: 5px;
  max-width: 500px;
}
}
  
  
`;export{te as default};
