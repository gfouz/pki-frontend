var m=Object.defineProperty,g=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var s=(e,n,i)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,c=(e,n)=>{for(var i in n||(n={}))v.call(n,i)&&s(e,i,n[i]);if(r)for(var i of r(n))h.call(n,i)&&s(e,i,n[i]);return e},l=(e,n)=>g(e,u(n));import{s as p,C as o,u as _,j as t,F as x,L as y}from"./index.b393fa9d.js";const $=p.div`
  width: 100%;
  background-color: ${e=>e.bg};
  margin: ${e=>e.margin};
  padding: ${e=>e.padding||"1em 0"};
  .nav {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    &__list {
       padding: 1em 0;
    }
    &__item {
      color: ${e=>e.color};
      text-decoration: none;
      text-transform: uppercase;
      transition: all 0.4s;
    }
    &__item:hover {
      color: #0099FF;
    }
  }
  .hidden {
    display: none;
  }
  .visible {
    font-family: inherit;
  }

  ${e=>e.mixed&&o`
      background-image: linear-gradient(#808080, #000000);
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}

  ${e=>e.dark&&o`
      background-color: #666666;
      .nav__item {
        color: #ffffff;
      }
    `}

  ${e=>e.column&&o`
      .nav { 
       height: 100%;
       flex-direction: column;
       justify-content: space-evenly;
       align-items: flex-start;
     }
    `}  
`;function F(e){const n=["/registro","/consultas","/servicios","/"],i=_(),{pathname:d}=i,f=n.filter(a=>a!==d);return t(x,{children:t($,l(c({},e),{children:t("div",{className:"nav",children:f.map((a,b)=>t("div",{className:"nav__list",children:t(y,{className:"nav__item",to:`${a}`,children:a==="/"?"inicio":a.slice(1)})},a))})}))})}export{F as H};
