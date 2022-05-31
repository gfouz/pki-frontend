var f=Object.defineProperty,s=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var l=(e,i,t)=>i in e?f(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,h=(e,i)=>{for(var t in i||(i={}))u.call(i,t)&&l(e,t,i[t]);if(n)for(var t of n(i))m.call(i,t)&&l(e,t,i[t]);return e},o=(e,i)=>s(e,g(i));import{s as d,C as p,j as r,F as c,a}from"./index.8482442f.js";import{H as v}from"./Header.599b06b9.js";function x(e){return r(c,{children:r($,o(h({},e),{children:e.children}))})}const $=d.footer`
  position: relative;
  width: 100%;
  height: ${e=>e.h};
  padding: ${e=>e.p};
  color: ${e=>e.c};
  background-color: ${e=>e.bg};
  ${e=>e.simple&&p`
      --full-height: ${i=>i.h};
      width: 100%;
      position: relative;
      height: var(--full-height);
      line-height: var(--full-height);
      text-align: ${i=>i.align||"center"};
    `};
`;function S(){return r(c,{children:r(b,{children:a("div",{className:"request",children:[r(v,{padding:"1em",color:"#ffffff",bg:"#555555"}),r(x,{simple:!0,bg:"#444444",p:"1em",c:"#ffffff",children:a("h3",{children:["Seguridad inform\xE1tica ",new Date().getFullYear()]})})]})})})}const b=d.div`
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
`;export{S as default};
