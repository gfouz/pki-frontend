var d=Object.defineProperty,h=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var c=(e,t,i)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,r=(e,t)=>{for(var i in t||(t={}))$.call(t,i)&&c(e,i,t[i]);if(s)for(var i of s(t))f.call(t,i)&&c(e,i,t[i]);return e},a=(e,t)=>h(e,u(t));import{H as g}from"./Nav.020b7e61.js";import{s as o,C as n,j as l,a as m,F as x}from"./index.3949fc38.js";function w(e,t){return`display: flex; 
    flex-direction: row; 
    justify-content:${e};
    align-items: ${t};`}function y(e,t){return`display: flex; 
    flex-direction: column; 
    justify-content:${e};
    align-items: ${t};`}function j(e){return l(v,a(r({},e),{children:e.children}))}const v=o.div`
  position: relative;
  height: ${e=>e.height};
  width: ${e=>e.width||"100%"};
  max-width: ${e=>e.max};
  min-width: ${e=>e.min};
  margin: ${e=>e.margin};
  padding: ${e=>e.padding};
  background-color: ${e=>e.bg};
  text-align: ${e=>e.textalign};

  ${e=>e.row&&n`
      ${w(e.justify,e.align)};
      height: ${t=>t.height||"100%"};
    `};

  ${e=>e.column&&n`
      ${y(e.justify,e.align)};
      height: ${t=>t.height||"100%"};
    `};

  ${e=>e.boxProps};
`,b=e=>l(p,a(r({},e),{children:e.children})),p=o.div`
   display: flex;
   flex-direction: column;
   align-items: center;
  ${e=>e.center&&n`
      justify-content: center;
    `};
  ${e=>e.up&&n`
      justify-content: flex-start;
    `}; 
  ${e=>e.down&&n`
      justify-content: flex-end;
    `};  
  ${e=>e.evenly&&n`
      justify-content: space-evenly;
    `};
  ${e=>e.between&&n`
      justify-content: space-between;
    `};
  ${e=>e.wrap&&n`
      flex-wrap: wrap;
    `};   
  ${e=>e.spread&&n`
       width: 100%;
       height: 100%;
    `};
  ${e=>e.full&&n`
       width: 100%;
       height: 100vh;
    `};  
  ${e=>e.left&&n`
       align-items: flex-start;
    `};  
  ${e=>e.right&&n`
       align-items: flex-end;
    `};    
  @media (max-width: ${e=>e.rezise}){
     max-width: 100%;
  }  
  ${e=>e.css};  
`,C={color:"#444444"};function S(){return m(x,{children:[l(g,r({},C)),l(j,{column:!0,height:"100vh",children:l(b,{spread:!0,center:!0,children:l("h1",{children:"Consultas"})})})]})}export{S as default};
