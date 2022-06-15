var Ge=Object.defineProperty,Ke=Object.defineProperties;var Ue=Object.getOwnPropertyDescriptors;var Ce=Object.getOwnPropertySymbols;var Ve=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable;var xe=(e,a,n)=>a in e?Ge(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,h=(e,a)=>{for(var n in a||(a={}))Ve.call(a,n)&&xe(e,n,a[n]);if(Ce)for(var n of Ce(a))We.call(a,n)&&xe(e,n,a[n]);return e},y=(e,a)=>Ke(e,Ue(a));import{b as Ye,f as re,r as t,c as Ie,e as G,t as Ee,o as Fe,E as Je,G as we,I as De,J as Qe,y as Xe,K as ne,h as k,p as j,M as te,N as Ze,O as Ne,Q as je,d as ea,j as o,F as ce,R as aa,s as Me,a as R,T as ye,H as ra,U as oa,V as na,W as ie,X as L,Y as z}from"./index.387b7adb.js";import{B as Pe,L as ta}from"./Layout.ba29727e.js";import{u as ia,a as la,b as sa,I as $,C as ca}from"./index.esm.b75afd77.js";function oe(e,a){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(a.indexOf(i)>=0)&&(n[i]=e[i]);return n}function x(){return x=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}var da=["onChange","value","defaultValue","name","isDisabled","isFocusable","isNative"];function ua(e){e===void 0&&(e={});var a=e,n=a.onChange,r=a.value,i=a.defaultValue,s=a.name,u=a.isDisabled,p=a.isFocusable,l=a.isNative,I=oe(a,da),f=t.exports.useState(i||""),b=f[0],P=f[1],_=je(r,b),g=_[0],E=_[1],D=t.exports.useRef(null),v=t.exports.useCallback(function(){var c=D.current;if(!!c){var m="input:not(:disabled):checked",C=c.querySelector(m);if(C){C.focus();return}m="input:not(:disabled)";var M=c.querySelector(m);M==null||M.focus()}},[]),N=De(void 0,"radio"),A=s||N,F=t.exports.useCallback(function(c){var m=Qe(c)?c.target.value:c;g||P(m),n==null||n(String(m))},[n,g]),B=t.exports.useCallback(function(c,m){return c===void 0&&(c={}),m===void 0&&(m=null),x({},c,{ref:Xe(m,D),role:"radiogroup"})},[]),w=t.exports.useCallback(function(c,m){var C;c===void 0&&(c={}),m===void 0&&(m=null);var M=l?"checked":"isChecked";return x({},c,(C={ref:m,name:A},C[M]=E!=null?c.value===E:void 0,C.onChange=F,C["data-radiogroup"]=!0,C))},[l,A,F,E]);return{getRootProps:B,getRadioProps:w,name:A,ref:D,focus:v,setValue:P,value:E,onChange:F,isDisabled:u,isFocusable:p,htmlProps:I}}var ha=["colorScheme","size","variant","children","className","isDisabled","isFocusable"],Oe=Ye({name:"RadioGroupContext",strict:!1}),va=Oe[0],qe=Oe[1],ma=re(function(e,a){var n=e.colorScheme,r=e.size,i=e.variant,s=e.children,u=e.className,p=e.isDisabled,l=e.isFocusable,I=oe(e,ha),f=ua(I),b=f.value,P=f.onChange,_=f.getRootProps,g=f.name,E=f.htmlProps,D=t.exports.useMemo(function(){return{name:g,size:r,onChange:P,colorScheme:n,value:b,variant:i,isDisabled:p,isFocusable:l}},[g,r,P,n,b,i,p,l]),v=_(E,a),N=Ie("chakra-radio-group",u);return t.exports.createElement(va,{value:D},t.exports.createElement(G.div,x({},v,{className:N}),s))}),pa=["defaultChecked","isChecked","isFocusable","isDisabled","isReadOnly","isRequired","onChange","isInvalid","name","value","id","data-radiogroup","aria-describedby"];function ga(e){e===void 0&&(e={});var a=e,n=a.defaultChecked,r=a.isChecked,i=a.isFocusable,s=a.isDisabled,u=a.isReadOnly,p=a.isRequired,l=a.onChange,I=a.isInvalid,f=a.name,b=a.value,P=a.id,_=a["data-radiogroup"],g=a["aria-describedby"],E=oe(a,pa),D=De(void 0,"radio"),v=ia(),N=qe(),A=!!N||!!_,F=!!v,B=F&&!A?v.id:D;B=P!=null?P:B;var w=s!=null?s:v==null?void 0:v.isDisabled,c=u!=null?u:v==null?void 0:v.isReadOnly,m=p!=null?p:v==null?void 0:v.isRequired,C=I!=null?I:v==null?void 0:v.isInvalid,M=ne(),V=M[0],W=M[1],X=ne(),Y=X[0],K=X[1],Z=ne(),J=Z[0],O=Z[1],ee=t.exports.useState(Boolean(n)),Ae=ee[0],Be=ee[1],ue=je(r,Ae),he=ue[0],H=ue[1],ve=t.exports.useCallback(function(d){if(c||w){d.preventDefault();return}he||Be(d.target.checked),l==null||l(d)},[he,w,c,l]),me=t.exports.useCallback(function(d){d.key===" "&&O.on()},[O]),pe=t.exports.useCallback(function(d){d.key===" "&&O.off()},[O]),Te=t.exports.useCallback(function(d,S){return d===void 0&&(d={}),S===void 0&&(S=null),x({},d,{ref:S,"data-active":k(J),"data-hover":k(Y),"data-disabled":k(w),"data-invalid":k(C),"data-checked":k(H),"data-focus":k(V),"data-readonly":k(c),"aria-hidden":!0,onMouseDown:j(d.onMouseDown,O.on),onMouseUp:j(d.onMouseUp,O.off),onMouseEnter:j(d.onMouseEnter,K.on),onMouseLeave:j(d.onMouseLeave,K.off)})},[J,Y,w,C,H,V,c,O.on,O.off,K.on,K.off]),ge=v!=null?v:{},fe=ge.onFocus,be=ge.onBlur,He=t.exports.useCallback(function(d,S){d===void 0&&(d={}),S===void 0&&(S=null);var q=w&&!i;return x({},d,{id:B,ref:S,type:"radio",name:f,value:b,onChange:j(d.onChange,ve),onBlur:j(be,d.onBlur,W.off),onFocus:j(fe,d.onFocus,W.on),onKeyDown:j(d.onKeyDown,me),onKeyUp:j(d.onKeyUp,pe),checked:H,disabled:q,readOnly:c,required:m,"aria-invalid":te(C),"aria-disabled":te(q),"aria-required":te(m),"data-readonly":k(c),"aria-describedby":g,style:Ze})},[w,i,B,f,b,ve,be,W,fe,me,pe,H,c,m,C,g]),Le=function(S,q){return S===void 0&&(S={}),q===void 0&&(q=null),x({},S,{ref:q,onMouseDown:j(S.onMouseDown,_e),onTouchStart:j(S.onTouchStart,_e),"data-disabled":k(w),"data-checked":k(H),"data-invalid":k(C)})},ze=function(S,q){return q===void 0&&(q=null),x({},S,{ref:q,"data-disabled":k(w),"data-checked":k(H),"data-invalid":k(C)})},$e={isInvalid:C,isFocused:V,isChecked:H,isActive:J,isHovered:Y,isDisabled:w,isReadOnly:c,isRequired:m};return{state:$e,getCheckboxProps:Te,getInputProps:He,getLabelProps:Le,getRootProps:ze,htmlProps:E}}function _e(e){e.preventDefault(),e.stopPropagation()}var fa=["spacing","children","isDisabled","isFocusable","inputProps"],Se=re(function(e,a){var n,r=qe(),i=e.onChange,s=e.value,u=Ee("Radio",x({},r,e)),p=Fe(e),l=p.spacing,I=l===void 0?"0.5rem":l,f=p.children,b=p.isDisabled,P=b===void 0?r==null?void 0:r.isDisabled:b,_=p.isFocusable,g=_===void 0?r==null?void 0:r.isFocusable:_,E=p.inputProps,D=oe(p,fa),v=e.isChecked;(r==null?void 0:r.value)!=null&&s!=null&&(v=r.value===s);var N=i;r!=null&&r.onChange&&s!=null&&(N=Je(r.onChange,i));var A=(n=e==null?void 0:e.name)!=null?n:r==null?void 0:r.name,F=ga(x({},D,{isChecked:v,isFocusable:g,isDisabled:P,onChange:N,name:A})),B=F.getInputProps,w=F.getCheckboxProps,c=F.getLabelProps,m=F.getRootProps,C=F.htmlProps,M=we(C,Ne),V=M[0],W=M[1],X=w(W),Y=B(E,a),K=c(),Z=Object.assign({},V,m()),J=x({display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer"},u.container),O=x({display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},u.control),ee=x({userSelect:"none",marginStart:I},u.label);return t.exports.createElement(G.label,x({className:"chakra-radio"},Z,{__css:J}),t.exports.createElement("input",x({className:"chakra-radio__input"},Y)),t.exports.createElement(G.span,x({className:"chakra-radio__control"},X,{__css:O})),f&&t.exports.createElement(G.span,x({className:"chakra-radio__label"},K,{__css:ee}),f))});function T(){return T=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}function de(e,a){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(a.indexOf(i)>=0)&&(n[i]=e[i]);return n}var ba=["children","placeholder","className"],Ca=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize"],xa=["children"],ya=re(function(e,a){var n=e.children,r=e.placeholder,i=e.className,s=de(e,ba);return t.exports.createElement(G.select,T({},s,{ref:a,className:Ie("chakra-select",i)}),r&&t.exports.createElement("option",{value:""},r),n)}),le=re(function(e,a){var n=Ee("Select",e),r=Fe(e),i=r.rootProps,s=r.placeholder,u=r.icon,p=r.color,l=r.height,I=r.h,f=r.minH,b=r.minHeight,P=r.iconColor,_=r.iconSize,g=de(r,Ca),E=we(g,Ne),D=E[0],v=E[1],N=la(v),A={width:"100%",height:"fit-content",position:"relative",color:p},F=ea({paddingEnd:"2rem"},n.field,{_focus:{zIndex:"unset"}});return t.exports.createElement(G.div,T({className:"chakra-select__wrapper",__css:A},D,i),t.exports.createElement(ya,T({ref:a,height:I!=null?I:l,minH:f!=null?f:b,placeholder:s},N,{__css:F}),e.children),t.exports.createElement(Sa,T({"data-disabled":k(N.disabled)},(P||p)&&{color:P||p},{__css:n.icon},_&&{fontSize:_}),u))}),Pa=function(a){return t.exports.createElement("svg",T({viewBox:"0 0 24 24"},a),t.exports.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},_a=G("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),Sa=function(a){var n=a.children,r=n===void 0?t.exports.createElement(Pa,null):n,i=de(a,xa),s=t.exports.cloneElement(r,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return t.exports.createElement(_a,T({},i,{className:"chakra-select__icon-wrapper"}),t.exports.isValidElement(r)?s:null)};function se({data:e}){return o(ce,{children:e?e.map(a=>o("option",{value:a,children:a},aa.useId())):o("option",{})})}const ka=Me.div`
  background-color: #fefefe;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  @media (min-width: 800px){
    padding: 0.5em 0;
  }
`,Ra=["PCC","MININT","FAR","MTSS","MINCIN","MEP"],Ia=["ETECSA","UNE","DPT","FCBC","UMCC","ITH"],Ea=["BANDEC","BPA"],ae={size:"sm",type:"number",variant:"flushed"},Fa={size:"sm",type:"email",variant:"flushed"},ke={size:"sm",type:"text",variant:"flushed"};function U(e,a,n){return parseInt(e.toString().substring(a,n))}let Q=new Date().getFullYear(),Re=new Date().getMonth()+1;Q=U(Q,2,4);Re=U(Re,2,4);const wa={required:!0,maxLength:11,minLength:11,validate:{isGrownUp:e=>Q>U(e,0,2)&&Q-U(e,0,2)>18||Q<U(e,0,2)&&U(e,0,2)<99,monthMin:e=>parseInt(e.substring(2,4))>=1,monthMax:e=>parseInt(e.substring(2,4))<=12,dayMin:e=>parseInt(e.substring(4,6))>=1,dayMax:e=>parseInt(e.substring(4,6))<=31}},Da={id:"",tel:"",tomo:"",color:"#000000",cargo:"",folio:"",email:"",warning:"",empresas:"",entidades:"",organismos:"",representante:"",condiciones:!1},Na=e=>y(h({},e),{color:"#00FF00"}),ja=e=>y(h({},e),{color:"#FF0000"}),Ma=e=>y(h({},e),{color:"#CCCCCC"});function Oa(){const[e,a]=t.exports.useState(Da),[n,r]=t.exports.useState(""),[i,s]=t.exports.useState("juridica"),{register:u,handleSubmit:p,formState:{errors:l}}=sa(),I=b=>console.log(b);function f(b){let{value:P}=b.target,_=P.length;a(g=>y(h({},g),{id:P})),_===11?a(g=>Na(g)):r("warning"),_>11?a(g=>ja(g)):r("warning"),_<11?a(g=>Ma(g)):r("warning")}return o(ce,{children:o(ka,{children:R("form",{onSubmit:p(I),children:[o(ye,{w:"100%",p:"1.5em",children:o(ra,{as:"h3",size:"lg",color:"#B22222",children:"Solicitud de Generaci\xF3n"})}),o(ye,{w:"100%",p:"0.3em 0",children:o(oa,{color:"#666666",children:"Escriba sus datos correspondientes:"})}),R(na,{spacing:2,p:"0.7em",children:[R(ie,{children:[o("label",{style:{color:`${e.color}`},children:o("strong",{children:"ID"})}),o($,h(y(h({},ae),{_placeholder:{color:l.id?"red.400":"#666666"},placeholder:l.id?"Valido 11 d\xEDgitos":" "}),u("id",y(h({},wa),{onChange:b=>f(b)}))))]}),R(ie,{children:[o("label",{children:"Tomo"}),o($,h(y(h({},ae),{_placeholder:{color:l.tomo?"red.400":"gray.500"},placeholder:l.tomo?"Olvido su Tomo!":""}),u("tomo",{required:!0})))]}),R(ie,{children:[o("label",{children:"Folio"}),o($,h(y(h({},ae),{_placeholder:{color:l.folio?"red.400":"gray.500"},placeholder:l.folio?"Olvido su Folio!":""}),u("folio",{required:!0})))]})]}),o(L,{p:"2em 0.7em",w:"100%",children:R(z,{justifyContent:"space-evenly",children:[o($,h(y(h({},Fa),{m:"0 0.7em",_placeholder:{color:l.email?"red.400":"gray.500"},placeholder:l.email?"Email requerido!":"Correo Electr\xF3nico"}),u("email",{required:!0}))),o($,h(y(h({m:"0 0.7em"},ae),{_placeholder:{color:l.tel?"red.400":"gray.500"},placeholder:l.tel?"Tel\xE9fono requerido!":"Nro de Tel\xE9fono"}),u("tel",{required:!0})))]})}),o(ma,{onChange:s,value:i,w:"100%",children:o(L,{p:"0 0.7em",w:"100%",children:R(z,{justifyContent:"flex-start",children:[o(Se,{m:"0 1em",value:"juridica",colorScheme:"red",isChecked:i=="juridica",children:"Persona jur\xEDdica"}),o(Se,{m:"0 1em",value:"natural",colorScheme:"red",isChecked:i=="natural",children:"Persona Natural"})]})})}),i=="juridica"&&R(ce,{children:[o(L,{p:"2em 0.7em",w:"100%",children:R(z,{justifyContent:"space-evenly",children:[o(le,y(h({m:"0 0.7em",placeholder:"Organismos"},u("organismos")),{children:o(se,{data:Ra})})),o(le,y(h({m:"0 0.7em",placeholder:"Empresa o Instituci\xF3n"},u("empresas")),{children:o(se,{data:Ia})}))]})}),o(L,{p:"2em 0.7em",w:"100%",children:R(z,{justifyContent:"space-evenly",children:[o($,h(y(h({m:"0 0.7em"},ke),{_placeholder:{color:l.cargo?"red.400":"gray.500"},placeholder:l.cargo?"Olvido su Cargo!":"Escribe tu cargo"}),u("cargo",{required:!0}))),o($,h(y(h({m:"0 0.7em"},ke),{_placeholder:{color:l.representante?"red.400":"gray.500"},placeholder:l.representante?"Representante requerido!":"Representante"}),u("representante",{required:!0})))]})})]}),i=="natural"&&o(L,{p:"2em 0.7em",w:"100%",children:o(z,{justifyContent:"space-evenly",children:o(le,y(h({placeholder:"Entidad relacionada"},u("entidades")),{children:o(se,{data:Ea})}))})}),o(L,{p:"0 1em",w:"100%",children:o(z,{justifyContent:"flex-start",children:o(ca,y(h({m:"0 0.7em",colorScheme:"red"},u("condiciones")),{children:"Acepto los terminos y condiciones."}))})}),o(L,{p:"2em 0.7em",w:"100%",children:R(z,{justifyContent:"space-evenly",children:[o(Pe,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Continuar"}),o(Pe,{colorScheme:"red",variant:"solid",children:"Cancelar"})]})})]})})})}function La(){return o(ta,{children:o(qa,{children:R("section",{className:"login",children:[R("div",{className:"login__divider",children:[R("div",{className:"login__logo",children:[o("img",{src:"./images/segurmatica.jpg"}),o("p",{children:"PKI Servicio de llave p\xFAblica."}),o("p",{children:"Formulario de solicitud."})]}),o("img",{className:"login__image",src:"./images/generate.jpg"})]}),o("div",{className:"login__divider",children:o(Oa,{})})]})})})}const qa=Me.div`
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
    height: auto;
  }
`;export{La as default};
