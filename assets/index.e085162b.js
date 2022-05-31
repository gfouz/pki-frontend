var $=Object.defineProperty,m=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var h=(e,t,n)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,r=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&h(e,n,t[n]);if(c)for(var n of c(t))v.call(t,n)&&h(e,n,t[n]);return e},o=(e,t)=>m(e,x(t));import{s,C as i,u as w,j as l,F as d,L as p,a as j}from"./index.b393fa9d.js";function b(e){const t=["/contactos","/consultas","/servicios","/"],n=w(),{pathname:f}=n,u=t.filter(a=>a!==f);return l(d,{children:l(k,o(r({},e),{children:l("div",{className:"links",children:u.map((a,g)=>l("div",{children:l(p,{className:"links__item",to:`${a}`,children:l("h4",{className:"",children:a==="/"?"inicio":a.slice(1)})})},a+g))})}))})}const k=s.div`
  --fullheight: ${e=>e.height};

  width: 100%;
  height: var(--fullheight);
  line-height: var(--fullheight);
  top: ${e=>e.top||"0"};
  left: ${e=>e.left||"0"};
  position: ${e=>e.position};
  background-color: ${e=>e.bg};
  margin: ${e=>e.margin||"0"};
  padding: ${e=>e.padding||"0"};
  .links {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    a {
      color: ${e=>e.color||"#ffffff"};
      text-decoration: none;
      text-transform: uppercase;
      line-height: var(--fullheight);
      transition: all 0.4s;
    }  
    a:hover {
      color: #50a3c0;
    }
  }
  .hidden {
    display: none;
  }
  .visible {
    font-family: inherit;
  }

  ${e=>e.mixed&&i`
      background-image: linear-gradient(#808080, #000000);
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}
`;function C(e,t){return`display: flex; 
    flex-direction: row; 
    justify-content:${e};
    align-items: ${t};`}function L(e,t){return`display: flex; 
    flex-direction: column; 
    justify-content:${e};
    align-items: ${t};`}function N(e){return l(S,o(r({},e),{children:e.children}))}const S=s.div`
  position: relative;
  height: ${e=>e.height};
  width: ${e=>e.width||"100%"};
  max-width: ${e=>e.max};
  min-width: ${e=>e.min};
  margin: ${e=>e.margin};
  padding: ${e=>e.padding};
  background-color: ${e=>e.bg};
  text-align: ${e=>e.textalign};

  ${e=>e.row&&i`
      ${C(e.justify,e.align)};
      height: ${t=>t.height||"100%"};
    `};

  ${e=>e.column&&i`
      ${L(e.justify,e.align)};
      height: ${t=>t.height||"100%"};
    `};

  ${e=>e.boxProps};
`,B=e=>l(F,o(r({},e),{children:e.children})),F=s.div`
   display: flex;
   flex-direction: column;
   align-items: center;
  ${e=>e.center&&i`
      justify-content: center;
    `};
  ${e=>e.up&&i`
      justify-content: flex-start;
    `}; 
  ${e=>e.down&&i`
      justify-content: flex-end;
    `};  
  ${e=>e.evenly&&i`
      justify-content: space-evenly;
    `};
  ${e=>e.between&&i`
      justify-content: space-between;
    `};
  ${e=>e.wrap&&i`
      flex-wrap: wrap;
    `};   
  ${e=>e.spread&&i`
       width: 100%;
       height: 100%;
    `};
  ${e=>e.full&&i`
       width: 100%;
       height: 100vh;
    `};  
  ${e=>e.left&&i`
       align-items: flex-start;
    `};  
  ${e=>e.right&&i`
       align-items: flex-end;
    `};    
  @media (max-width: ${e=>e.rezise}){
     max-width: 100%;
  }  
  ${e=>e.css};  
`,H={color:"#444444"};function P(){return j(d,{children:[l(b,r({},H)),l(N,{column:!0,height:"100vh",children:l(B,{spread:!0,center:!0,children:l("h1",{children:"Consultas"})})})]})}export{P as default};
