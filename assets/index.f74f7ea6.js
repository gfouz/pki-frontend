var be=Object.defineProperty,Ce=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var le=(e,t,s)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,y=(e,t)=>{for(var s in t||(t={}))ue.call(t,s)&&le(e,s,t[s]);if(K)for(var s of K(t))de.call(t,s)&&le(e,s,t[s]);return e},k=(e,t)=>Ce(e,Ie(t));var ne=(e,t)=>{var s={};for(var r in e)ue.call(e,r)&&t.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&K)for(var r of K(e))t.indexOf(r)<0&&de.call(e,r)&&(s[r]=e[r]);return s};import{r as g,R as v,a as Oe,j as U,s as xe}from"./index.387b7adb.js";import{L as Le}from"./Layout.ba29727e.js";function ge(e){var t,s,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(s=ge(e[t]))&&(r&&(r+=" "),r+=s);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function H(){for(var e=0,t,s,r="";e<arguments.length;)(t=arguments[e++])&&(s=ge(t))&&(r&&(r+=" "),r+=s);return r}function X(e){return typeof e=="number"&&!isNaN(e)}function W(e){return typeof e=="boolean"}function Q(e){return typeof e=="string"}function N(e){return typeof e=="function"}function $(e){return Q(e)||N(e)?e:null}function oe(e){return e===0||e}function se(e){return g.exports.isValidElement(e)||Q(e)||N(e)||X(e)}const he={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},A={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function _e(e,t,s){s===void 0&&(s=300);const{scrollHeight:r,style:u}=e;requestAnimationFrame(()=>{u.minHeight="initial",u.height=r+"px",u.transition="all "+s+"ms",requestAnimationFrame(()=>{u.height="0",u.padding="0",u.margin="0",setTimeout(t,s)})})}function Ne(e){let{enter:t,exit:s,appendPosition:r=!1,collapse:u=!0,collapseDuration:l=300}=e;return function(o){let{children:a,position:O,preventExitTransition:C,done:E,nodeRef:h,isIn:x}=o;const i=r?t+"--"+O:t,d=r?s+"--"+O:s,f=g.exports.useRef(),p=g.exports.useRef(0);function n(T){if(T.target!==h.current)return;const m=h.current;m.dispatchEvent(new Event("d")),m.removeEventListener("animationend",n),m.removeEventListener("animationcancel",n),p.current===0&&T.type!=="animationcancel"&&(m.className=f.current)}function I(){const T=h.current;T.removeEventListener("animationend",I),u?_e(T,E,l):E()}return g.exports.useLayoutEffect(()=>{(function(){const T=h.current;f.current=T.className,T.className+=" "+i,T.addEventListener("animationend",n),T.addEventListener("animationcancel",n)})()},[]),g.exports.useEffect(()=>{x||(C?I():function(){p.current=1;const T=h.current;T.className+=" "+d,T.addEventListener("animationend",I)}())},[x]),v.createElement(v.Fragment,null,a)}}function pe(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const R={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const s=this.list.get(e).filter(r=>r!==t);return this.list.set(e,s),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const s=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(s)})}},J=e=>{let u=e,{theme:t,type:s}=u,r=ne(u,["theme","type"]);return v.createElement("svg",y({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-"+s+")"},r))},re={info:function(e){return v.createElement(J,y({},e),v.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return v.createElement(J,y({},e),v.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return v.createElement(J,y({},e),v.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return v.createElement(J,y({},e),v.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return v.createElement("div",{className:"Toastify__spinner"})}};function Re(e){const[,t]=g.exports.useReducer(i=>i+1,0),[s,r]=g.exports.useState([]),u=g.exports.useRef(null),l=g.exports.useRef(new Map).current,o=i=>s.indexOf(i)!==-1,a=g.exports.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:o,getToast:i=>l.get(i)}).current;function O(i){let{containerId:d}=i;const{limit:f}=a.props;!f||d&&a.containerId!==d||(a.count-=a.queue.length,a.queue=[])}function C(i){r(d=>oe(i)?d.filter(f=>f!==i):[])}function E(){const{toastContent:i,toastProps:d,staleId:f}=a.queue.shift();x(i,d,f)}function h(i,d){let G=d,{delay:f,staleId:p}=G,n=ne(G,["delay","staleId"]);if(!se(i)||function(P){return!u.current||a.props.enableMultiContainer&&P.containerId!==a.props.containerId||l.has(P.toastId)&&P.updateId==null}(n))return;const{toastId:I,updateId:T,data:m}=n,{props:c}=a,D=()=>C(I),S=T==null;S&&a.count++;const _={toastId:I,updateId:T,data:m,containerId:n.containerId,isLoading:n.isLoading,theme:n.theme||c.theme,icon:n.icon!=null?n.icon:c.icon,isIn:!1,key:n.key||a.toastKey++,type:n.type,closeToast:D,closeButton:n.closeButton,rtl:c.rtl,position:n.position||c.position,transition:n.transition||c.transition,className:$(n.className||c.toastClassName),bodyClassName:$(n.bodyClassName||c.bodyClassName),style:n.style||c.toastStyle,bodyStyle:n.bodyStyle||c.bodyStyle,onClick:n.onClick||c.onClick,pauseOnHover:W(n.pauseOnHover)?n.pauseOnHover:c.pauseOnHover,pauseOnFocusLoss:W(n.pauseOnFocusLoss)?n.pauseOnFocusLoss:c.pauseOnFocusLoss,draggable:W(n.draggable)?n.draggable:c.draggable,draggablePercent:n.draggablePercent||c.draggablePercent,draggableDirection:n.draggableDirection||c.draggableDirection,closeOnClick:W(n.closeOnClick)?n.closeOnClick:c.closeOnClick,progressClassName:$(n.progressClassName||c.progressClassName),progressStyle:n.progressStyle||c.progressStyle,autoClose:!n.isLoading&&(z=n.autoClose,V=c.autoClose,z===!1||X(z)&&z>0?z:V),hideProgressBar:W(n.hideProgressBar)?n.hideProgressBar:c.hideProgressBar,progress:n.progress,role:n.role||c.role,deleteToast(){const P=pe(l.get(I),"removed");l.delete(I),R.emit(4,P);const B=a.queue.length;if(a.count=oe(I)?a.count-1:a.count-a.displayedToast,a.count<0&&(a.count=0),B>0){const w=oe(I)?1:a.props.limit;if(B===1||w===1)a.displayedToast++,E();else{const F=w>B?B:w;a.displayedToast=F;for(let L=0;L<F;L++)E()}}else t()}};var z,V;_.iconOut=function(P){let{theme:B,type:w,isLoading:F,icon:L}=P,M=null;const te={theme:B,type:w};return L===!1||(N(L)?M=L(te):g.exports.isValidElement(L)?M=g.exports.cloneElement(L,te):Q(L)||X(L)?M=L:F?M=re.spinner():(Ee=>Ee in re)(w)&&(M=re[w](te))),M}(_),N(n.onOpen)&&(_.onOpen=n.onOpen),N(n.onClose)&&(_.onClose=n.onClose),_.closeButton=c.closeButton,n.closeButton===!1||se(n.closeButton)?_.closeButton=n.closeButton:n.closeButton===!0&&(_.closeButton=!se(c.closeButton)||c.closeButton);let q=i;g.exports.isValidElement(i)&&!Q(i.type)?q=g.exports.cloneElement(i,{closeToast:D,toastProps:_,data:m}):N(i)&&(q=i({closeToast:D,toastProps:_,data:m})),c.limit&&c.limit>0&&a.count>c.limit&&S?a.queue.push({toastContent:q,toastProps:_,staleId:p}):X(f)?setTimeout(()=>{x(q,_,p)},f):x(q,_,p)}function x(i,d,f){const{toastId:p}=d;f&&l.delete(f);const n={content:i,props:d};l.set(p,n),r(I=>[...I,p].filter(T=>T!==f)),R.emit(4,pe(n,n.props.updateId==null?"added":"updated"))}return g.exports.useEffect(()=>(a.containerId=e.containerId,R.cancelEmit(3).on(0,h).on(1,i=>u.current&&C(i)).on(5,O).emit(2,a),()=>R.emit(3,a)),[]),g.exports.useEffect(()=>{a.props=e,a.isToastActive=o,a.displayedToast=s.length}),{getToastToRender:function(i){const d=new Map,f=Array.from(l.values());return e.newestOnTop&&f.reverse(),f.forEach(p=>{const{position:n}=p.props;d.has(n)||d.set(n,[]),d.get(n).push(p)}),Array.from(d,p=>i(p[0],p[1]))},containerRef:u,isToastActive:o}}function fe(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function me(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Pe(e){const[t,s]=g.exports.useState(!1),[r,u]=g.exports.useState(!1),l=g.exports.useRef(null),o=g.exports.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=g.exports.useRef(e),{autoClose:O,pauseOnHover:C,closeToast:E,onClick:h,closeOnClick:x}=e;function i(m){if(e.draggable){o.didMove=!1,document.addEventListener("mousemove",n),document.addEventListener("mouseup",I),document.addEventListener("touchmove",n),document.addEventListener("touchend",I);const c=l.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=c.getBoundingClientRect(),c.style.transition="",o.x=fe(m.nativeEvent),o.y=me(m.nativeEvent),e.draggableDirection==="x"?(o.start=o.x,o.removalDistance=c.offsetWidth*(e.draggablePercent/100)):(o.start=o.y,o.removalDistance=c.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function d(){if(o.boundingRect){const{top:m,bottom:c,left:D,right:S}=o.boundingRect;e.pauseOnHover&&o.x>=D&&o.x<=S&&o.y>=m&&o.y<=c?p():f()}}function f(){s(!0)}function p(){s(!1)}function n(m){const c=l.current;o.canDrag&&c&&(o.didMove=!0,t&&p(),o.x=fe(m),o.y=me(m),o.delta=e.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),c.style.transform="translate"+e.draggableDirection+"("+o.delta+"px)",c.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function I(){document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",I);const m=l.current;if(o.canDrag&&o.didMove&&m){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return u(!0),void e.closeToast();m.style.transition="transform 0.2s, opacity 0.2s",m.style.transform="translate"+e.draggableDirection+"(0)",m.style.opacity="1"}}g.exports.useEffect(()=>{a.current=e}),g.exports.useEffect(()=>(l.current&&l.current.addEventListener("d",f,{once:!0}),N(e.onOpen)&&e.onOpen(g.exports.isValidElement(e.children)&&e.children.props),()=>{const m=a.current;N(m.onClose)&&m.onClose(g.exports.isValidElement(m.children)&&m.children.props)}),[]),g.exports.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||p(),window.addEventListener("focus",f),window.addEventListener("blur",p)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",f),window.removeEventListener("blur",p))}),[e.pauseOnFocusLoss]);const T={onMouseDown:i,onTouchStart:i,onMouseUp:d,onTouchEnd:d};return O&&C&&(T.onMouseEnter=p,T.onMouseLeave=f),x&&(T.onClick=m=>{h&&h(m),o.canCloseOnClick&&E()}),{playToast:f,pauseToast:p,isRunning:t,preventExitTransition:r,toastRef:l,eventHandlers:T}}function ye(e){let{closeToast:t,theme:s,ariaLabel:r="close"}=e;return v.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+s,type:"button",onClick:u=>{u.stopPropagation(),t(u)},"aria-label":r},v.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},v.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function ve(e){let{delay:t,isRunning:s,closeToast:r,type:u,hide:l,className:o,style:a,controlledProgress:O,progress:C,rtl:E,isIn:h,theme:x}=e;const i=k(y({},a),{animationDuration:t+"ms",animationPlayState:s?"running":"paused",opacity:l?0:1});O&&(i.transform="scaleX("+C+")");const d=H("Toastify__progress-bar",O?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+x,"Toastify__progress-bar--"+u,{"Toastify__progress-bar--rtl":E}),f=N(o)?o({rtl:E,type:u,defaultClassName:d}):H(d,o);return v.createElement("div",{role:"progressbar","aria-hidden":l?"true":"false","aria-label":"notification timer",className:f,style:i,[O&&C>=1?"onTransitionEnd":"onAnimationEnd"]:O&&C<1?null:()=>{h&&r()}})}ve.defaultProps={type:A.DEFAULT,hide:!1};const ke=e=>{const{isRunning:t,preventExitTransition:s,toastRef:r,eventHandlers:u}=Pe(e),{closeButton:l,children:o,autoClose:a,onClick:O,type:C,hideProgressBar:E,closeToast:h,transition:x,position:i,className:d,style:f,bodyClassName:p,bodyStyle:n,progressClassName:I,progressStyle:T,updateId:m,role:c,progress:D,rtl:S,toastId:_,deleteToast:z,isIn:V,isLoading:q,iconOut:G,theme:P}=e,B=H("Toastify__toast","Toastify__toast-theme--"+P,"Toastify__toast--"+C,{"Toastify__toast--rtl":S}),w=N(d)?d({rtl:S,position:i,type:C,defaultClassName:B}):H(B,d),F=!!D,L={closeToast:h,type:C,theme:P};let M=null;return l===!1||(M=N(l)?l(L):v.isValidElement(l)?v.cloneElement(l,L):ye(L)),v.createElement(x,{isIn:V,done:z,position:i,preventExitTransition:s,nodeRef:r},v.createElement("div",k(y({id:_,onClick:O,className:w},u),{style:f,ref:r}),v.createElement("div",k(y({},V&&{role:c}),{className:N(p)?p({type:C}):H("Toastify__toast-body",p),style:n}),G!=null&&v.createElement("div",{className:H("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!q})},G),v.createElement("div",null,o)),M,(a||F)&&v.createElement(ve,k(y({},m&&!F?{key:"pb-"+m}:{}),{rtl:S,theme:P,delay:a,isRunning:t,isIn:V,closeToast:h,hide:E,type:C,style:T,className:I,controlledProgress:F,progress:D}))))},Be=Ne({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),ie=g.exports.forwardRef((e,t)=>{const{getToastToRender:s,containerRef:r,isToastActive:u}=Re(e),{className:l,style:o,rtl:a,containerId:O}=e;function C(E){const h=H("Toastify__toast-container","Toastify__toast-container--"+E,{"Toastify__toast-container--rtl":a});return N(l)?l({position:E,rtl:a,defaultClassName:h}):H(h,$(l))}return g.exports.useEffect(()=>{t&&(t.current=r.current)},[]),v.createElement("div",{ref:r,className:"Toastify",id:O},s((E,h)=>{const x=h.length?y({},o):k(y({},o),{pointerEvents:"none"});return v.createElement("div",{className:C(E),style:x,key:"container-"+E},h.map((i,d)=>{let{content:f,props:p}=i;return v.createElement(ke,k(y({},p),{isIn:u(p.toastId),style:k(y({},p.style),{"--nth":d+1,"--len":h.length}),key:"toast-"+p.key}),f)}))}))});ie.displayName="ToastContainer",ie.defaultProps={position:he.TOP_RIGHT,transition:Be,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:ye,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let ae,j=new Map,ce=[];function Te(){return Math.random().toString(36).substring(2,9)}function we(e){return e&&(Q(e.toastId)||X(e.toastId))?e.toastId:Te()}function Y(e,t){return j.size>0?R.emit(0,e,t):ce.push({content:e,options:t}),t.toastId}function ee(e,t){return k(y({},t),{type:t&&t.type||e,toastId:we(t)})}function Z(e){return(t,s)=>Y(t,ee(e,s))}function b(e,t){return Y(e,ee(A.DEFAULT,t))}b.loading=(e,t)=>Y(e,ee(A.DEFAULT,y({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t))),b.promise=function(e,t,s){let r,{pending:u,error:l,success:o}=t;u&&(r=Q(u)?b.loading(u,s):b.loading(u.render,y(y({},s),u)));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},O=(E,h,x)=>{if(h==null)return void b.dismiss(r);const i=k(y(y({type:E},a),s),{data:x}),d=Q(h)?{render:h}:h;return r?b.update(r,y(y({},i),d)):b(d.render,y(y({},i),d)),x},C=N(e)?e():e;return C.then(E=>O("success",o,E)).catch(E=>O("error",l,E)),C},b.success=Z(A.SUCCESS),b.info=Z(A.INFO),b.error=Z(A.ERROR),b.warning=Z(A.WARNING),b.warn=b.warning,b.dark=(e,t)=>Y(e,ee(A.DEFAULT,y({theme:"dark"},t))),b.dismiss=e=>R.emit(1,e),b.clearWaitingQueue=function(e){return e===void 0&&(e={}),R.emit(5,e)},b.isActive=e=>{let t=!1;return j.forEach(s=>{s.isToastActive&&s.isToastActive(e)&&(t=!0)}),t},b.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const s=function(r,u){let{containerId:l}=u;const o=j.get(l||ae);return o?o.getToast(r):null}(e,t);if(s){const{props:r,content:u}=s,l=k(y(y({},r),t),{toastId:t.toastId||e,updateId:Te()});l.toastId!==e&&(l.staleId=e);const o=l.render||u;delete l.render,Y(o,l)}},0)},b.done=e=>{b.update(e,{progress:1})},b.onChange=e=>(R.on(4,e),()=>{R.off(4,e)}),b.POSITION=he,b.TYPE=A,R.on(2,e=>{ae=e.containerId||e,j.set(ae,e),ce.forEach(t=>{R.emit(0,t.content,t.options)}),ce=[]}).on(3,e=>{j.delete(e.containerId||e),j.size===0&&R.off(0).off(1).off(5)});function Me(e){return Oe("div",{children:[U("button",{onClick:()=>b(e.msg,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),children:"Notify!"}),U(ie,{})]})}function He(){return U(Le,{children:U(Ae,{children:U("div",{className:"container",children:U("section",{children:U(Me,{msg:"errror"})})})})})}const Ae=xe.div`

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid red;
  border-radius: 5px;
  max-width: 500px;
}
}
  
  
`;export{He as default};
