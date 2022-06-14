var V=Object.defineProperty,Y=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var D=(o,r,l)=>r in o?V(o,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[r]=l,n=(o,r)=>{for(var l in r||(r={}))J.call(r,l)&&D(o,l,r[l]);if(H)for(var l of H(r))Q.call(r,l)&&D(o,l,r[l]);return o},d=(o,r)=>Y(o,$(r));import{f as q,v as U,o as X,E as Z,e as ee,r as s,g as F,k as re,c as oe,G as te,j as e,F as C,I as le,s as z,a,J as M,H as B,T as ne,K as ae,M as j,N as f,O as x,u as ie}from"./index.0a2f5e54.js";import{u as ce,w as se,a as de,I as v,O as E,b as he,E as me,R as ue,c as T,d as pe,e as ge,T as A,f as fe,C as xe,g as ve,r as ye,h as _e}from"./index.esm.d2a2e985.js";import{B as k,D as be,M as Se,a as we,b as Ee,c as Ce,d as je,H as Ie,e as Re}from"./Header.685a1c5e.js";function p(){return p=Object.assign||function(o){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(o[t]=l[t])}return o},p.apply(this,arguments)}function N(o,r){if(o==null)return{};var l={},t=Object.keys(o),i,m;for(m=0;m<t.length;m++)i=t[m],!(r.indexOf(i)>=0)&&(l[i]=o[i]);return l}var ke=["children","placeholder","className"],Fe=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize"],Ne=["children"],Pe=q(function(o,r){var l=o.children,t=o.placeholder,i=o.className,m=N(o,ke);return s.exports.createElement(F.select,p({},m,{ref:r,className:oe("chakra-select",i)}),t&&s.exports.createElement("option",{value:""},t),l)}),I=q(function(o,r){var l=U("Select",o),t=X(o),i=t.rootProps,m=t.placeholder,h=t.icon,_=t.color,c=t.height,S=t.h,w=t.minH,g=t.minHeight,b=t.iconColor,y=t.iconSize,u=N(t,Fe),P=Z(u,te),G=P[0],K=P[1],O=ce(K),L={width:"100%",height:"fit-content",position:"relative",color:_},W=ee({paddingEnd:"2rem"},l.field,{_focus:{zIndex:"unset"}});return s.exports.createElement(F.div,p({className:"chakra-select__wrapper",__css:L},G,i),s.exports.createElement(Pe,p({ref:r,height:S!=null?S:c,minH:w!=null?w:g,placeholder:m},O,{__css:W}),o.children),s.exports.createElement(De,p({"data-disabled":re(O.disabled)},(b||_)&&{color:b||_},{__css:l.icon},y&&{fontSize:y}),h))}),Oe=function(r){return s.exports.createElement("svg",p({viewBox:"0 0 24 24"},r),s.exports.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},He=F("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),De=function(r){var l=r.children,t=l===void 0?s.exports.createElement(Oe,null):l,i=N(r,Ne),m=s.exports.cloneElement(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return s.exports.createElement(He,p({},i,{className:"chakra-select__icon-wrapper"}),s.exports.isValidElement(t)?m:null)};function R({data:o}){return e(C,{children:o?o.map(r=>e("option",{value:r,children:r},le.useId())):e("option",{})})}const Me=z.div`
  background-color: #fefefe;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  @media (min-width: 800px){
    padding: 0.5em 0;
  }
`;function Te(){const[o,r]=s.exports.useState(se),[l,t]=s.exports.useState(""),[i,m]=s.exports.useState("juridica"),{register:h,handleSubmit:_,formState:{errors:c}}=de(),S=g=>console.log(g);function w(g){let{value:b}=g.target,y=b.length;r(u=>d(n({},u),{id:b})),y===11?r(u=>ve(u)):t("warning"),y>11?r(u=>ye(u)):t("warning"),y<11?r(u=>_e(u)):t("warning")}return e(C,{children:e(Me,{children:a("form",{onSubmit:_(S),children:[e(M,{w:"100%",p:"1.5em",children:e(B,{as:"h3",size:"lg",color:"#B22222",children:"Solicitud de Generaci\xF3n"})}),e(M,{w:"100%",p:"0.3em 0",children:e(ne,{color:"#666666",children:"Escriba sus datos correspondientes:"})}),a(ae,{spacing:2,p:"0.7em",children:[a(j,{children:[e("label",{style:{color:`${o.color}`},children:e("strong",{children:"ID"})}),e(v,n(d(n({},E),{_placeholder:{color:c.id?"red.400":"#666666"},placeholder:c.id?"Valido 11 d\xEDgitos":" "}),h("id",d(n({},he),{onChange:g=>w(g)}))))]}),a(j,{children:[e("label",{children:"Tomo"}),e(v,n(d(n({},E),{_placeholder:{color:c.tomo?"red.400":"gray.500"},placeholder:c.tomo?"Olvido su Tomo!":""}),h("tomo",{required:!0})))]}),a(j,{children:[e("label",{children:"Folio"}),e(v,n(d(n({},E),{_placeholder:{color:c.folio?"red.400":"gray.500"},placeholder:c.folio?"Olvido su Folio!":""}),h("folio",{required:!0})))]})]}),e(f,{p:"2em 0.7em",w:"100%",children:a(x,{justifyContent:"space-evenly",children:[e(v,n(d(n({},me),{m:"0 0.7em",_placeholder:{color:c.email?"red.400":"gray.500"},placeholder:c.email?"Email requerido!":"Correo Electr\xF3nico"}),h("email",{required:!0}))),e(v,n(d(n({m:"0 0.7em"},E),{_placeholder:{color:c.tel?"red.400":"gray.500"},placeholder:c.tel?"Tel\xE9fono requerido!":"Nro de Tel\xE9fono"}),h("tel",{required:!0})))]})}),e(ue,{onChange:m,value:i,w:"100%",children:e(f,{p:"0 0.7em",w:"100%",children:a(x,{justifyContent:"flex-start",children:[e(T,{m:"0 1em",value:"juridica",colorScheme:"red",isChecked:i=="juridica",children:"Persona jur\xEDdica"}),e(T,{m:"0 1em",value:"natural",colorScheme:"red",isChecked:i=="natural",children:"Persona Natural"})]})})}),i=="juridica"&&a(C,{children:[e(f,{p:"2em 0.7em",w:"100%",children:a(x,{justifyContent:"space-evenly",children:[e(I,d(n({m:"0 0.7em",placeholder:"Organismos"},h("organismos")),{children:e(R,{data:pe})})),e(I,d(n({m:"0 0.7em",placeholder:"Empresa o Instituci\xF3n"},h("empresas")),{children:e(R,{data:ge})}))]})}),e(f,{p:"2em 0.7em",w:"100%",children:a(x,{justifyContent:"space-evenly",children:[e(v,n(d(n({m:"0 0.7em"},A),{_placeholder:{color:c.cargo?"red.400":"gray.500"},placeholder:c.cargo?"Olvido su Cargo!":"Escribe tu cargo"}),h("cargo",{required:!0}))),e(v,n(d(n({m:"0 0.7em"},A),{_placeholder:{color:c.representante?"red.400":"gray.500"},placeholder:c.representante?"Representante requerido!":"Representante"}),h("representante",{required:!0})))]})})]}),i=="natural"&&e(f,{p:"2em 0.7em",w:"100%",children:e(x,{justifyContent:"space-evenly",children:e(I,d(n({placeholder:"Entidad relacionada"},h("entidades")),{children:e(R,{data:fe})}))})}),e(f,{p:"0 1em",w:"100%",children:e(x,{justifyContent:"flex-start",children:e(xe,d(n({m:"0 0.7em",colorScheme:"red"},h("condiciones")),{children:"Acepto los terminos y condiciones."}))})}),e(f,{p:"2em 0.7em",w:"100%",children:a(x,{justifyContent:"space-evenly",children:[e(k,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Continuar"}),e(k,{colorScheme:"red",variant:"solid",children:"Cancelar"})]})})]})})})}const Ae={backgroundImage:"url('./images/aside.jpg')",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"200px"},qe={color:"#f8f8f8"};function We(){const{isOpen:o,onOpen:r,onClose:l}=ie(),t=s.exports.useRef(null);return e(C,{children:a(ze,{children:[e("header",{children:e(k,{m:"1em",ref:t,variant:"ghost",onClick:r,className:"toggle-button",children:e("strong",{style:n({},qe),children:o?"CERRAR":"ABRIR"})})}),a("section",{className:"login",children:[a("div",{className:"login__divider",children:[a("div",{className:"login__logo",children:[e("img",{src:"./images/segurmatica.jpg"}),e("p",{children:"PKI Servicio de llave p\xFAblica."}),e("p",{children:"Formulario de solicitud."})]}),e("img",{className:"login__image",src:"./images/generate.jpg"})]}),e("div",{className:"login__divider",children:e(Te,{})})]}),e("footer",{children:a(B,{size:"sm",children:["Segurm\xE1tica \xA9 ",new Date().getFullYear()]})}),a(be,{isOpen:o,placement:"left",onClose:l,children:[e(Se,{}),a(we,{style:n({},Ae),children:[e(Ee,{style:{color:"#222222"}}),e(Ce,{children:e("img",{style:{width:"150px"},src:"./images/segurmatica.jpg",alt:"Segurm\xE1tica"})}),e(je,{children:e(Ie,{color:"#800080",column:!0})}),e(Re,{})]})]})]})})}const ze=z.div`
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
`;export{We as default};
