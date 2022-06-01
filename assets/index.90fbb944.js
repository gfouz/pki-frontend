var u=Object.defineProperty,p=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var o=(e,i,t)=>i in e?u(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,h=(e,i)=>{for(var t in i||(i={}))v.call(i,t)&&o(e,t,i[t]);if(l)for(var t of l(i))S.call(i,t)&&o(e,t,i[t]);return e},a=(e,i)=>p(e,m(i));import{s as f,C as $,j as n,F as g,Z as b,a as r}from"./index.7bea87ca.js";import{H as x}from"./Header.07b7e8c0.js";import{S as y,e as c,f as d,I as s}from"./chakra-ui-layout.esm.15c07163.js";function w(e){return n(g,{children:n(E,a(h({},e),{children:e.children}))})}const E=f.footer`
  position: relative;
  width: 100%;
  height: ${e=>e.h};
  padding: ${e=>e.p};
  color: ${e=>e.c};
  background-color: ${e=>e.bg};
  ${e=>e.simple&&$`
      --full-height: ${i=>i.h};
      width: 100%;
      position: relative;
      height: var(--full-height);
      line-height: var(--full-height);
      text-align: ${i=>i.align||"center"};
    `};
`;function F(){return n(b,{children:r(y,{spacing:4,children:[r(c,{children:[n(d,{pointerEvents:"none",children:n("h4",{children:"giovani"})}),n(s,{type:"tel",placeholder:"Phone number"})]}),r(c,{children:[n(d,{pointerEvents:"none",color:"gray.300",fontSize:"1.2em",children:"$"}),n(s,{placeholder:"Enter amount"})]})]})})}function H(){return n(g,{children:n(j,{children:r("div",{className:"request",children:[n(x,{padding:"1em",color:"#ffffff",bg:"#555555"}),n(F,{}),n(w,{simple:!0,bg:"#444444",p:"1em",c:"#ffffff",children:r("h3",{children:["Seguridad inform\xE1tica ",new Date().getFullYear()]})})]})})})}const j=f.div`
width: 100%;
min-height: 100vh;
h1{
  padding: 0 0.2em;
}
.request {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1f1;
}
`;export{H as default};
