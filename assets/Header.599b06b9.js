var v=Object.defineProperty,g=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var t=(e,n,a)=>n in e?v(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,s=(e,n)=>{for(var a in n||(n={}))h.call(n,a)&&t(e,a,n[a]);if(o)for(var a of o(n))p.call(n,a)&&t(e,a,n[a]);return e},c=(e,n)=>g(e,u(n));import{s as _,C as d,u as y,j as r,F as $,L as b}from"./index.8482442f.js";const x=_.div`
  width: 100%;
  background-color: ${e=>e.bg};
  margin: ${e=>e.margin};
  padding: ${e=>e.padding||"1em 0"};
  .nav {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .nav__item {
      color: ${e=>e.color};
      text-decoration: none;
      text-transform: uppercase;
      transition: all 0.4s;
    }
    .nav__item:hover {
      color: #0099FF;
    }
  }
  .hidden {
    display: none;
  }
  .visible {
    font-family: inherit;
  }

  ${e=>e.mixed&&d`
      background-image: linear-gradient(#808080, #000000);
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}
  ${e=>e.dark&&d`
      background-color: #666666;
      .nav__item {
        color: #ffffff;
      }
    `}
`;function j(e){const n=["/registro","/consultas","/servicios","/"],a=y(),{pathname:l}=a,f=n.filter(i=>i!==l);return r($,{children:r(x,c(s({},e),{children:r("div",{className:"nav",children:f.map((i,m)=>r("div",{children:r(b,{className:"nav__item",to:`${i}`,children:i==="/"?"inicio":i.slice(1)})},i+m))})}))})}export{j as H};
