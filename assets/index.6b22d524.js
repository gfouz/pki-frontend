var s=Object.defineProperty;var c=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var l=(o,a,r)=>a in o?s(o,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[a]=r,i=(o,a)=>{for(var r in a||(a={}))g.call(a,r)&&l(o,r,a[r]);if(c)for(var r of c(a))h.call(a,r)&&l(o,r,a[r]);return o};import{u as m,r as u,j as e,F as f,a as n,H as p,s as x}from"./index.05b3c654.js";import{B as t,D as b,M as k,a as y,b as C,c as R,d as H,H as M,e as j}from"./Header.01256d6c.js";const v={backgroundImage:"url('./images/aside.jpg')",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"200px"};function D(){const{isOpen:o,onOpen:a,onClose:r}=m(),d=u.exports.useRef(null);return e(f,{children:n(I,{children:[e("header",{children:e(t,{m:"1em",ref:d,variant:"ghost",onClick:a,children:e("strong",{style:{color:"#ffffff"},children:o?"CERRAR":"ABRIR"})})}),e("section",{children:e("img",{src:"./images/homex.jpg",alt:"Homepage"})}),e("footer",{children:n(p,{size:"sm",children:["Segurm\xE1tica \xA9 ",new Date().getFullYear()]})}),n(b,{isOpen:o,placement:"left",onClose:r,children:[e(k,{}),n(y,{style:i({},v),children:[e(C,{}),e(R,{style:{color:"#222222"},children:"PKI-INICIO"}),e(H,{children:e(M,{color:"#800080",column:!0})}),n(j,{children:[e(t,{variant:"outline",mr:3,onClick:r,children:"Cancel"}),e(t,{colorScheme:"purple",children:"Save"})]})]})]})]})})}const I=x.div`
  width: 100%;
  height: 100%;
  background-color: #7eeee0;
  header {
    background-color:#3d6d67;
  }
  section {
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 100vh;  
  background-color: #7eeee0;
   img {
    max-width: 100%;
    height: auto;
    margin: 3em 0 3em 0;
   }
  }
footer {
  margin: 2em 0 0 0;
  padding: 2em 0;
  color: #f8f8f8;
  text-align: center;
  background-color:#3d6d67;
}
  
  
`;export{D as default};
