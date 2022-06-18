var z=Object.defineProperty,A=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var b=(r,i,o)=>i in r?z(r,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[i]=o,n=(r,i)=>{for(var o in i||(i={}))H.call(i,o)&&b(r,o,i[o]);if(y)for(var o of y(i))L.call(i,o)&&b(r,o,i[o]);return r},s=(r,i)=>A(r,B(i));import{s as N,r as x,j as e,F as C,a as t,J as w,H as T,T as O,N as p,O as g,K as E,M as S}from"./index.ed9630f1.js";import{B as F,L as G}from"./Layout.1634c3dd.js";import{a as P,I as v,C as V}from"./index.esm.cd4022e7.js";import{R as Y,a as _}from"./chakra-ui-radio.esm.d884b431.js";const J=N.div`
  background-color: #F8F8F8;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  @media (min-width: 800px){
    padding: 0.5em 0;
  }
`,R={size:"sm",type:"number",variant:"flushed"},K={size:"sm",type:"text",variant:"flushed"};function d(r,i,o){return parseInt(r.toString().substring(i,o))}let m=new Date().getFullYear(),I=new Date().getMonth()+1;m=d(m,2,4);I=d(I,2,4);const U={required:!0,maxLength:11,minLength:11,validate:{isGrownUp:r=>m>d(r,0,2)&&m-d(r,0,2)>18||m<d(r,0,2)&&d(r,0,2)<99,monthMin:r=>parseInt(r.substring(2,4))>=1,monthMax:r=>parseInt(r.substring(2,4))<=12,dayMin:r=>parseInt(r.substring(4,6))>=1,dayMax:r=>parseInt(r.substring(4,6))<=31}};function $(){const[r,i]=x.exports.useState("#666666"),[o,f]=x.exports.useState(""),[h,M]=x.exports.useState("renewal"),{register:u,handleSubmit:j,formState:{errors:l}}=P(),k=c=>console.log(c);function D(c){let{value:q}=c.target,a=q.length;a&&a===11?i("#66CC00"):f("Validos 11 n\xFAmeros"),a&&a>11?i("#ff0000"):f("Complete 11 numeros"),a&&a<11?i("#CCCCCC"):f("N\xFAmero excedido de 11")}return e(C,{children:e(J,{children:t("form",{onSubmit:j(k),children:[e(w,{w:"100%",p:"1.5em",children:e(T,{as:"h3",size:"lg",color:"#B22222",children:"Solicitud:"})}),e(w,{w:"100%",p:"0.3em 0",children:e(O,{color:"#666666",children:"Tipo de solicitud:"})}),e(Y,{onChange:M,value:h,w:"100%",children:e(p,{p:"0 0.7em",w:"100%",children:t(g,{justifyContent:"space-evenly",children:[e(_,{m:"0 1em",value:"renewal",colorScheme:"red",isChecked:h=="renewal",children:"Renovaci\xF3n"}),e(_,{m:"0 1em",value:"revocation",colorScheme:"red",isChecked:h=="natural",children:"Revocaci\xF3n"})]})})}),t(E,{spacing:2,p:"0.7em",children:[t(S,{children:[e("label",{style:{color:`${r}`},children:e("strong",{children:"Nro de ID"})}),e(v,n(s(n({},R),{_placeholder:{color:l.id?"red.400":"#666666"},placeholder:l.id?"Valido 11 d\xEDgitos":" "}),u("id",s(n({},U),{onChange:c=>D(c)}))))]}),t(S,{children:[e("label",{children:"Nro de Serie o DN"}),e(v,n(s(n({},R),{_placeholder:{color:l.dn?"red.400":"gray.500"},placeholder:l.dn?"Olvido su DN!":""}),u("dn",{required:!0})))]})]}),h=="revocation"&&e(C,{children:e(p,{p:"2em 0.7em",w:"100%",children:e(g,{justifyContent:"space-evenly",children:e(v,n(s(n({m:"0 0.7em"},K),{_placeholder:{color:l.motive?"red.400":"gray.500"},placeholder:l.motive?"Motivo de Revocaci\xF3n!":"Escriba Motivo de Revocaci\xF3n"}),u("motive",{required:!0})))})})}),e(p,{p:"0 1em",w:"100%",children:e(g,{justifyContent:"flex-start",children:e(V,s(n({m:"0 0.7em",colorScheme:"red"},u("policy",{required:!0})),{children:"Acepto los terminos y condiciones."}))})}),e(p,{p:"2em 0.7em",w:"100%",children:t(g,{justifyContent:"space-evenly",children:[e(F,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Continuar"}),e(F,{colorScheme:"red",variant:"solid",children:"Cancelar"})]})})]})})})}function ie(){return e(G,{children:e(Q,{children:t("section",{className:"login",children:[e("div",{className:"login__divider",children:e("img",{className:"login__image",src:"./images/forms.png"})}),e("div",{className:"login__divider",children:e($,{})})]})})})}const Q=N.div`
  width: 100%;
  background-color: #f8f8f8;
  .login {
    position: relative;
    display: flex;
    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .login__divider {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login__logo {
    width: 300px;
    border-radius: 10px;
    background-color:#00000099;
    position: absolute;
    top: 50%;
    left: 50%;
    color: #ffffff;
    font-size: 1.7em;
    font-weight: bolder;
    font-family: calibri;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  .login__image {
    max-width: 100%;
    height: auto;
  }
`;export{ie as default};
