var f=Object.defineProperty,m=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var l=(e,r,o)=>r in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,i=(e,r)=>{for(var o in r||(r={}))h.call(r,o)&&l(e,o,r[o]);if(n)for(var o of n(r))u.call(r,o)&&l(e,o,r[o]);return e},s=(e,r)=>m(e,g(r));import{j as a,F as p,a as t,u as x,r as y,s as b}from"./index.35023516.js";import{D as w,M as k,a as R,b as v,c as j,d as C,H as D,e as M,B}from"./Header.18e054c9.js";const F={height:"150px",backgroundImage:"url('./images/aside.jpg')",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"70px"},L={size:"sm",m:"0.5em 0",color:"#666666",fontFamily:"calibri"},O={width:"150px",height:"auto",margin:"0 3.5em"};function P({isOpen:e,onClose:r}){return a(p,{children:t(w,{isOpen:e,placement:"left",onClose:r,children:[a(k,{}),t(R,{children:[a(v,{}),a(j,{children:a("img",{style:{width:"120px"},src:"./images/segurmatica.jpg",alt:"Segurm\xE1tica"})}),a(C,{children:a(D,{color:"#1a2253",column:!0})}),a(M,{}),a("div",{style:i({},F)})]})]})})}function z(e){const{isOpen:r,onOpen:o,onClose:d}=x(),c=y.exports.useRef(null);return a(S,s(i({},e),{children:t("div",{className:"layout",children:[a("header",{children:a(B,{m:"1em",ref:c,variant:"ghost",onClick:o,children:a("strong",{style:{color:e.btncolor||"#ffffff"},children:r?"CERRAR":"ABRIR"})})}),a("div",{className:"main",children:e.children}),t("footer",{children:["Segurm\xE1tica ",new Date().getFullYear()]}),a(P,{isOpen:r,onClose:d})]})}))}const S=b.div`
   .layout {
    display: grid;
    min-height: 100vh;
    grid-template-areas: "header header"
                         "main  main"
                         "footer  footer";
    grid-template-rows:  70px 1fr 70px;
    grid-template-columns: 1fr;
    @media (max-width: 500px) {
      grid-template-rows: 65px 1fr 65px;
    }
}

header{
  grid-area: header;
  color: ${e=>e.headercolor||"#ffffff"};
  background-color: ${e=>e.headerbg||"#333333"};
}

.main{
  grid-area: main;
}

footer{
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  color: ${e=>e.footercolor||"#ffffff"};
  background-color: ${e=>e.footerbg||"#333333"};
}


`;export{z as L,O as l,L as s};
