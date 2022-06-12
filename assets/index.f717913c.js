var W=Object.defineProperty,Y=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var H=(o,r,t)=>r in o?W(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,n=(o,r)=>{for(var t in r||(r={}))J.call(r,t)&&H(o,t,r[t]);if(O)for(var t of O(r))Q.call(r,t)&&H(o,t,r[t]);return o},m=(o,r)=>Y(o,$(r));import{f as T,v as U,o as X,E as Z,e as ee,r as s,g as F,k as re,c as oe,G as le,j as e,F as E,R as te,s as q,a,I as A,H as z,T as ne,J as ae,K as w,M as f,N as x,u as ie}from"./index.921d58c2.js";import{u as ce,a as se,I as v,O as S,b as de,E as he,R as me,c as D,d as ue,e as pe,T as M,f as ge,C as fe}from"./index.esm.46b4a253.js";import{B as I,D as xe,M as ve,a as ye,b as Ce,c as _e,d as be,H as Se,e as Ee}from"./Header.5ba3a0ff.js";function p(){return p=Object.assign||function(o){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(o[l]=t[l])}return o},p.apply(this,arguments)}function k(o,r){if(o==null)return{};var t={},l=Object.keys(o),i,d;for(d=0;d<l.length;d++)i=l[d],!(r.indexOf(i)>=0)&&(t[i]=o[i]);return t}var we=["children","placeholder","className"],Re=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize"],je=["children"],Ie=T(function(o,r){var t=o.children,l=o.placeholder,i=o.className,d=k(o,we);return s.exports.createElement(F.select,p({},d,{ref:r,className:oe("chakra-select",i)}),l&&s.exports.createElement("option",{value:""},l),t)}),R=T(function(o,r){var t=U("Select",o),l=X(o),i=l.rootProps,d=l.placeholder,h=l.icon,y=l.color,c=l.height,C=l.h,_=l.minH,g=l.minHeight,b=l.iconColor,u=l.iconSize,B=k(l,Re),N=Z(B,le),G=N[0],K=N[1],P=ce(K),L={width:"100%",height:"fit-content",position:"relative",color:y},V=ee({paddingEnd:"2rem"},t.field,{_focus:{zIndex:"unset"}});return s.exports.createElement(F.div,p({className:"chakra-select__wrapper",__css:L},G,i),s.exports.createElement(Ie,p({ref:r,height:C!=null?C:c,minH:_!=null?_:g,placeholder:d},P,{__css:V}),o.children),s.exports.createElement(Ne,p({"data-disabled":re(P.disabled)},(b||y)&&{color:b||y},{__css:t.icon},u&&{fontSize:u}),h))}),Fe=function(r){return s.exports.createElement("svg",p({viewBox:"0 0 24 24"},r),s.exports.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},ke=F("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),Ne=function(r){var t=r.children,l=t===void 0?s.exports.createElement(Fe,null):t,i=k(r,je),d=s.exports.cloneElement(l,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return s.exports.createElement(ke,p({},i,{className:"chakra-select__icon-wrapper"}),s.exports.isValidElement(l)?d:null)};function j({data:o}){return e(E,{children:o?o.map(r=>e("option",{value:r,children:r},te.useId())):e("option",{})})}const Pe=q.div`
  background-color: #fefefe;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  @media (min-width: 800px){
    padding: 0.5em 0;
  }
`;function Oe(){const[o,r]=s.exports.useState("#666666"),[t,l]=s.exports.useState(""),[i,d]=s.exports.useState("juridica"),{register:h,handleSubmit:y,formState:{errors:c}}=se(),C=g=>console.log(g);function _(g){let{value:b}=g.target,u=b.length;u&&u===11?r("#66CC00"):l("Validos 11 n\xFAmeros"),u&&u>11?r("#ff0000"):l("Complete 11 numeros"),u&&u<11?r("#CCCCCC"):l("N\xFAmero excedido de 11")}return e(E,{children:e(Pe,{children:a("form",{onSubmit:y(C),children:[e(A,{w:"100%",p:"1.5em",children:e(z,{as:"h3",size:"lg",color:"#B22222",children:"Solicitud de Generaci\xF3n"})}),e(A,{w:"100%",p:"0.3em 0",children:e(ne,{color:"#666666",children:"Escriba sus datos correspondientes:"})}),a(ae,{spacing:2,p:"0.7em",children:[a(w,{children:[e("label",{style:{color:`${o}`},children:e("strong",{children:"ID"})}),e(v,n(m(n({},S),{_placeholder:{color:c.id?"red.400":"#666666"},placeholder:c.id?"Valido 11 d\xEDgitos":" "}),h("id",m(n({},de),{onChange:g=>_(g)}))))]}),a(w,{children:[e("label",{children:"Tomo"}),e(v,n(m(n({},S),{_placeholder:{color:c.tomo?"red.400":"gray.500"},placeholder:c.tomo?"Olvido su Tomo!":""}),h("tomo",{required:!0})))]}),a(w,{children:[e("label",{children:"Folio"}),e(v,n(m(n({},S),{_placeholder:{color:c.folio?"red.400":"gray.500"},placeholder:c.folio?"Olvido su Folio!":""}),h("folio",{required:!0})))]})]}),e(f,{p:"2em 0.7em",w:"100%",children:a(x,{justifyContent:"space-evenly",children:[e(v,n(m(n({},he),{m:"0 0.7em",_placeholder:{color:c.email?"red.400":"gray.500"},placeholder:c.email?"Email requerido!":"Correo Electr\xF3nico"}),h("email",{required:!0}))),e(v,n(m(n({m:"0 0.7em"},S),{_placeholder:{color:c.tel?"red.400":"gray.500"},placeholder:c.tel?"Tel\xE9fono requerido!":"Nro de Tel\xE9fono"}),h("tel",{required:!0})))]})}),e(me,{onChange:d,value:i,w:"100%",children:e(f,{p:"0 0.7em",w:"100%",children:a(x,{justifyContent:"flex-start",children:[e(D,{m:"0 1em",value:"juridica",colorScheme:"red",isChecked:i=="juridica",children:"Persona jur\xEDdica"}),e(D,{m:"0 1em",value:"natural",colorScheme:"red",isChecked:i=="natural",children:"Persona Natural"})]})})}),i=="juridica"&&a(E,{children:[e(f,{p:"2em 0.7em",w:"100%",children:a(x,{justifyContent:"space-evenly",children:[e(R,m(n({m:"0 0.7em",placeholder:"Organismos"},h("organismos")),{children:e(j,{data:ue})})),e(R,m(n({m:"0 0.7em",placeholder:"Empresa o Instituci\xF3n"},h("empresas")),{children:e(j,{data:pe})}))]})}),e(f,{p:"2em 0.7em",w:"100%",children:a(x,{justifyContent:"space-evenly",children:[e(v,n(m(n({m:"0 0.7em"},M),{_placeholder:{color:c.cargo?"red.400":"gray.500"},placeholder:c.cargo?"Olvido su Cargo!":"Escribe tu cargo"}),h("cargo",{required:!0}))),e(v,n(m(n({m:"0 0.7em"},M),{_placeholder:{color:c.representante?"red.400":"gray.500"},placeholder:c.representante?"Representante requerido!":"Representante"}),h("representante",{required:!0})))]})})]}),i=="natural"&&e(f,{p:"2em 0.7em",w:"100%",children:e(x,{justifyContent:"space-evenly",children:e(R,m(n({placeholder:"Entidad relacionada"},h("entidades")),{children:e(j,{data:ge})}))})}),e(f,{p:"0 1em",w:"100%",children:e(x,{justifyContent:"flex-start",children:e(fe,{m:"0 0.7em",colorScheme:"red",children:"Acepto los terminos y condiciones."})})}),e(f,{p:"2em 0.7em",w:"100%",children:a(x,{justifyContent:"space-evenly",children:[e(I,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Continuar"}),e(I,{colorScheme:"red",variant:"solid",children:"Cancelar"})]})})]})})})}const He={backgroundImage:"url('./images/aside.jpg')",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"200px"},Ae={color:"#f8f8f8"};function Be(){const{isOpen:o,onOpen:r,onClose:t}=ie(),l=s.exports.useRef(null);return e(E,{children:a(De,{children:[e("header",{children:e(I,{m:"1em",ref:l,variant:"ghost",onClick:r,className:"toggle-button",children:e("strong",{style:n({},Ae),children:o?"CERRAR":"ABRIR"})})}),a("section",{className:"login",children:[a("div",{className:"login__divider",children:[a("div",{className:"login__logo",children:[e("img",{src:"./images/segurmatica.jpg"}),e("p",{children:"PKI Servicio de llave p\xFAblica."}),e("p",{children:"Formulario de solicitud."})]}),e("img",{className:"login__image",src:"./images/generate.jpg"})]}),e("div",{className:"login__divider",children:e(Oe,{})})]}),e("footer",{children:a(z,{size:"sm",children:["Segurm\xE1tica \xA9 ",new Date().getFullYear()]})}),a(xe,{isOpen:o,placement:"left",onClose:t,children:[e(ve,{}),a(ye,{style:n({},He),children:[e(Ce,{style:{color:"#222222"}}),e(_e,{style:{color:"#CC3333"},children:"PKI-REGISTROS"}),e(be,{children:e(Se,{color:"#800080",column:!0})}),e(Ee,{})]})]})]})})}const De=q.div`
    width: 100%;
    background-color: #f8f8f8;
    header {
      background-color: #777777;
    }
    .login { 
    position: relative;
    display: flex;
    @media (max-width: 800px){
      flex-direction: column;
      align-items: center;
    }
    }
    .login__divider {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .login__logo {
      position: absolute;
      top: 50%;
      left: 50%;
      color: #888888;
      font-weight: bolder;
      font-family: calibri;
      text-align: center;
      transform: translate(-50%, -50%);
    }
    .login__image {
      max-width: 100%;
      height: 100%;
      object-fit: fill;
    }
    footer {
      color: #FFFFFF;
      padding: 1.5em 0;
      text-align: center;
      background-color: #777777;
    }
`;export{Be as default};
