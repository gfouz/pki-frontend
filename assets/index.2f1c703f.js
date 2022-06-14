var c=Object.defineProperty;var n=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var s=(o,a,r)=>a in o?c(o,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[a]=r,l=(o,a)=>{for(var r in a||(a={}))d.call(a,r)&&s(o,r,a[r]);if(n)for(var r of n(a))g.call(a,r)&&s(o,r,a[r]);return o};import{u,r as f,j as e,F as h,a as t,H as m,s as p}from"./index.3fe97b77.js";import{B as x,D as b,M as y,a as w,b as R,c as k,d as H,H as j,e as M}from"./Header.e4fdbbc3.js";const v={height:"150px",backgroundImage:"url('./images/aside.jpg')",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"70px"};function S(){const{isOpen:o,onOpen:a,onClose:r}=u(),i=f.exports.useRef(null);return e(h,{children:t(B,{children:[e("header",{children:e(x,{m:"1em",ref:i,variant:"ghost",onClick:a,children:e("strong",{style:{color:"#555555"},children:o?"CERRAR":"ABRIR"})})}),e("footer",{children:t(m,{size:"sm",children:["Segurm\xE1tica \xA9 ",new Date().getFullYear()]})}),t(b,{isOpen:o,placement:"left",onClose:r,children:[e(y,{}),t(w,{children:[e(R,{}),e(k,{children:e("img",{style:{width:"120px"},src:"./images/segurmatica.jpg",alt:"Segurm\xE1tica"})}),e(H,{children:e(j,{color:"#1a2253",column:!0})}),e(M,{}),e("div",{style:l({},v)})]})]})]})})}const B=p.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  header {
    width: 100%;
    background-color: #9f0bfe;
  }
  footer {
    width: 100%;
    color: #ffffff;
    padding: 2em;
    text-align: center;
    background-color: #9f0bfe;
  }
`;export{S as default};
