var f=Object.defineProperty,g=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var s=(i,e,n)=>e in i?f(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n,l=(i,e)=>{for(var n in e||(e={}))p.call(e,n)&&s(i,n,e[n]);if(o)for(var n of o(e))u.call(e,n)&&s(i,n,e[n]);return i},r=(i,e)=>g(i,m(e));import{s as v,C as $,u as y,j as a,F as k,L as x}from"./index.3949fc38.js";function L(i){const e=["/contactos","/consultas","/servicios","/"],n=y(),{pathname:c}=n,h=e.filter(t=>t!==c);return a(k,{children:a(b,r(l({},i),{children:a("div",{className:"links",children:h.map((t,d)=>a("div",{children:a(x,{className:"links__item",to:`${t}`,children:a("h4",{className:"",children:t==="/"?"inicio":t.slice(1)})})},t+d))})}))})}const b=v.div`
  --fullheight: ${i=>i.height};

  width: 100%;
  height: var(--fullheight);
  line-height: var(--fullheight);
  top: ${i=>i.top||"0"};
  left: ${i=>i.left||"0"};
  position: ${i=>i.position};
  background-color: ${i=>i.bg};
  margin: ${i=>i.margin||"0"};
  padding: ${i=>i.padding||"0"};
  .links {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    a {
      color: ${i=>i.color||"#ffffff"};
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

  ${i=>i.mixed&&$`
      background-image: linear-gradient(#808080, #000000);
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}
`;export{L as H};
