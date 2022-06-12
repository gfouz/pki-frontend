var k=Object.defineProperty,A=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var g=(o,r,n)=>r in o?k(o,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[r]=n,l=(o,r)=>{for(var n in r||(r={}))H.call(r,n)&&g(o,n,r[n]);if(y)for(var n of y(r))O.call(r,n)&&g(o,n,r[n]);return o},a=(o,r)=>A(o,B(r));import{s as F,r as f,j as e,F as C,a as t,I as R,H as T,T as q,M as u,N as p,J as E,K as S,u as P}from"./index.921d58c2.js";import{B as v,D as _,M as K,a as V,b as z,c as G,d as J,H as L,e as U}from"./Header.5ba3a0ff.js";import{a as $,R as Q,c as b,I as x,O as w,b as W,T as X,C as Y}from"./index.esm.46b4a253.js";const Z=F.div`
  background-color: #F8F8F8;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  @media (min-width: 800px){
    padding: 0.5em 0;
  }
`;function ee(){const[o,r]=f.exports.useState("#666666"),[n,d]=f.exports.useState(""),[h,j]=f.exports.useState("renewal"),{register:m,handleSubmit:D,formState:{errors:i}}=$(),I=s=>console.log(s);function M(s){let{value:N}=s.target,c=N.length;c&&c===11?r("#66CC00"):d("Validos 11 n\xFAmeros"),c&&c>11?r("#ff0000"):d("Complete 11 numeros"),c&&c<11?r("#CCCCCC"):d("N\xFAmero excedido de 11")}return e(C,{children:e(Z,{children:t("form",{onSubmit:D(I),children:[e(R,{w:"100%",p:"1.5em",children:e(T,{as:"h3",size:"lg",color:"#B22222",children:"Solicitud:"})}),e(R,{w:"100%",p:"0.3em 0",children:e(q,{color:"#666666",children:"Tipo de solicitud:"})}),e(Q,{onChange:j,value:h,w:"100%",children:e(u,{p:"0 0.7em",w:"100%",children:t(p,{justifyContent:"space-evenly",children:[e(b,{m:"0 1em",value:"renewal",colorScheme:"red",isChecked:h=="renewal",children:"Renovaci\xF3n"}),e(b,{m:"0 1em",value:"revocation",colorScheme:"red",isChecked:h=="natural",children:"Revocaci\xF3n"})]})})}),t(E,{spacing:2,p:"0.7em",children:[t(S,{children:[e("label",{style:{color:`${o}`},children:e("strong",{children:"Nro de ID"})}),e(x,l(a(l({},w),{_placeholder:{color:i.id?"red.400":"#666666"},placeholder:i.id?"Valido 11 d\xEDgitos":" "}),m("id",a(l({},W),{onChange:s=>M(s)}))))]}),t(S,{children:[e("label",{children:"Nro de Serie o DN"}),e(x,l(a(l({},w),{_placeholder:{color:i.dn?"red.400":"gray.500"},placeholder:i.dn?"Olvido su DN!":""}),m("dn",{required:!0})))]})]}),h=="revocation"&&e(C,{children:e(u,{p:"2em 0.7em",w:"100%",children:e(p,{justifyContent:"space-evenly",children:e(x,l(a(l({m:"0 0.7em"},X),{_placeholder:{color:i.motive?"red.400":"gray.500"},placeholder:i.motive?"Motivo de Revocaci\xF3n!":"Escriba Motivo de Revocaci\xF3n"}),m("motive",{required:!0})))})})}),e(u,{p:"0 1em",w:"100%",children:e(p,{justifyContent:"flex-start",children:e(Y,a(l({m:"0 0.7em",colorScheme:"red"},m("policy",{required:!0})),{children:"Acepto los terminos y condiciones."}))})}),e(u,{p:"2em 0.7em",w:"100%",children:t(p,{justifyContent:"space-evenly",children:[e(v,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Continuar"}),e(v,{colorScheme:"red",variant:"solid",children:"Cancelar"})]})})]})})})}function ie(){const{isOpen:o,onOpen:r,onClose:n}=P(),d=f.exports.useRef(null);return e(C,{children:t(re,{children:[e("header",{children:e(v,{m:"1em",ref:d,variant:"ghost",onClick:r,children:e("strong",{style:{color:"#ff0000"},children:o?"CERRAR":"ABRIR"})})}),e("div",{className:"container",children:e("section",{children:e(ee,{})})}),t(_,{isOpen:o,placement:"left",onClose:n,children:[e(K,{}),t(V,{children:[e(z,{}),e(G,{style:{color:"#DC143C"},children:"PKI-CONSULTAS"}),e(J,{children:e(L,{color:"#800080",column:!0})}),e(U,{})]})]})]})})}const re=F.div`

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
  
  
`;export{ie as default};
