var Xt=Object.defineProperty,Qt=Object.defineProperties;var Yt=Object.getOwnPropertyDescriptors;var Be=Object.getOwnPropertySymbols;var gt=Object.prototype.hasOwnProperty,bt=Object.prototype.propertyIsEnumerable;var yt=(e,r,t)=>r in e?Xt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,F=(e,r)=>{for(var t in r||(r={}))gt.call(r,t)&&yt(e,t,r[t]);if(Be)for(var t of Be(r))bt.call(r,t)&&yt(e,t,r[t]);return e},ge=(e,r)=>Qt(e,Yt(r));var Me=(e,r)=>{var t={};for(var a in e)gt.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&Be)for(var a of Be(e))r.indexOf(a)<0&&bt.call(e,a)&&(t[a]=e[a]);return t};import{b as it,q as T,O as Ae,g as ce,f as he,v as nt,o as lt,Q as At,r as b,c as Ce,U as Zt,V as Ge,W as Ee,X as Xe,Y as Jt,k as N,z as tt,n as er,Z as Et,m as Rt,A as tr,$ as ot,p as wt,E as rr,a0 as Ot,a1 as sr,G as ar,R as xe}from"./index.05b3c654.js";function qe(){return qe=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},qe.apply(this,arguments)}function Nt(e,r){if(e==null)return{};var t={},a=Object.keys(e),s,n;for(n=0;n<a.length;n++)s=a[n],!(r.indexOf(s)>=0)&&(t[s]=e[s]);return t}var ir=it({strict:!1,name:"FormControlContext"}),Vt=ir[1],nr=["isDisabled","isInvalid","isReadOnly","isRequired"],lr=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function or(e){var r=Lt(e),t=r.isDisabled,a=r.isInvalid,s=r.isReadOnly,n=r.isRequired,d=Nt(r,nr);return qe({},d,{disabled:t,readOnly:s,required:n,"aria-invalid":Ae(a),"aria-required":Ae(n),"aria-readonly":Ae(s)})}function Lt(e){var r,t,a,s=Vt(),n=e.id,d=e.disabled,v=e.readOnly,S=e.required,D=e.isRequired,x=e.isInvalid,C=e.isReadOnly,g=e.isDisabled,V=e.onFocus,K=e.onBlur,O=Nt(e,lr),j=e["aria-describedby"]?[e["aria-describedby"]]:[];return s!=null&&s.hasFeedbackText&&s!=null&&s.isInvalid&&j.push(s.feedbackId),s!=null&&s.hasHelpText&&j.push(s.helpTextId),qe({},O,{"aria-describedby":j.join(" ")||void 0,id:n!=null?n:s==null?void 0:s.id,isDisabled:(r=d!=null?d:g)!=null?r:s==null?void 0:s.isDisabled,isReadOnly:(t=v!=null?v:C)!=null?t:s==null?void 0:s.isReadOnly,isRequired:(a=S!=null?S:D)!=null?a:s==null?void 0:s.isRequired,isInvalid:x!=null?x:s==null?void 0:s.isInvalid,onFocus:T(s==null?void 0:s.onFocus,V),onBlur:T(s==null?void 0:s.onBlur,K)})}function Y(){return Y=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Y.apply(this,arguments)}var ur=it({name:"CheckboxGroupContext",strict:!1}),cr=ur[1];function ut(e,r){if(e==null)return{};var t={},a=Object.keys(e),s,n;for(n=0;n<a.length;n++)s=a[n],!(r.indexOf(s)>=0)&&(t[s]=e[s]);return t}var dr=["isIndeterminate","isChecked"];function fr(e){var r=Rt;return"custom"in r&&typeof r.custom=="function"?r.custom(e):r(e)}var Bt=fr(ce.svg),vr=function(r){return b.exports.createElement(Bt,Y({width:"1.2em",viewBox:"0 0 12 10",variants:{unchecked:{opacity:0,strokeDashoffset:16},checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}}},style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16}},r),b.exports.createElement("polyline",{points:"1.5 6 4.5 9 10.5 1"}))},hr=function(r){return b.exports.createElement(Bt,Y({width:"1.2em",viewBox:"0 0 24 24",variants:{unchecked:{scaleX:.65,opacity:0},checked:{scaleX:1,opacity:1,transition:{scaleX:{duration:0},opacity:{duration:.02}}}},style:{stroke:"currentColor",strokeWidth:4}},r),b.exports.createElement("line",{x1:"21",x2:"3",y1:"12",y2:"12"}))},yr=function(r){var t=r.open,a=r.children;return b.exports.createElement(tr,{initial:!1},t&&b.exports.createElement(Rt.div,{variants:{unchecked:{scale:.5},checked:{scale:1}},initial:"unchecked",animate:"checked",exit:"unchecked",style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},a))},gr=function(r){var t=r.isIndeterminate,a=r.isChecked,s=ut(r,dr),n=t?hr:vr;return b.exports.createElement(yr,{open:a||t},b.exports.createElement(n,s))},br=["defaultChecked","isChecked","isFocusable","onChange","isIndeterminate","name","value","tabIndex","aria-label","aria-labelledby","aria-invalid"];function mr(e){e===void 0&&(e={});var r=Lt(e),t=r.isDisabled,a=r.isReadOnly,s=r.isRequired,n=r.isInvalid,d=r.id,v=r.onBlur,S=r.onFocus,D=r["aria-describedby"],x=e,C=x.defaultChecked,g=x.isChecked,V=x.isFocusable,K=x.onChange,O=x.isIndeterminate,j=x.name,I=x.value,q=x.tabIndex,R=q===void 0?void 0:q,$=x["aria-label"],H=x["aria-labelledby"],L=x["aria-invalid"],m=ut(x,br),A=Zt(m,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),E=Ge(K),p=Ge(v),_=Ge(S),w=Ee(),U=w[0],B=w[1],J=Ee(),se=J[0],ae=J[1],X=Ee(),oe=X[0],ne=X[1],te=b.exports.useRef(null),pe=b.exports.useState(!0),ke=pe[0],ie=pe[1],ye=b.exports.useState(!!C),Re=ye[0],me=ye[1],we=ot(g,Re),Pe=we[0],i=we[1],l=b.exports.useCallback(function(k){if(a||t){k.preventDefault();return}Pe||me(i?k.target.checked:O?!0:k.target.checked),E==null||E(k)},[a,t,i,Pe,O,E]);Xe(function(){te.current&&(te.current.indeterminate=Boolean(O))},[O]),Jt(function(){t&&B.off()},[t,B]),Xe(function(){var k=te.current;!(k!=null&&k.form)||(k.form.onreset=function(){me(!!C)})},[]);var o=t&&!V,f=b.exports.useCallback(function(k){k.key===" "&&ne.on()},[ne]),h=b.exports.useCallback(function(k){k.key===" "&&ne.off()},[ne]);Xe(function(){if(!!te.current){var k=te.current.checked!==i;k&&me(te.current.checked)}},[te.current]);var u=b.exports.useCallback(function(k,Q){k===void 0&&(k={}),Q===void 0&&(Q=null);var fe=function(Le){Le.preventDefault(),ne.on()};return Y({},k,{ref:Q,"data-active":N(oe),"data-hover":N(se),"data-checked":N(i),"data-focus":N(U),"data-indeterminate":N(O),"data-disabled":N(t),"data-invalid":N(n),"data-readonly":N(a),"aria-hidden":!0,onMouseDown:T(k.onMouseDown,fe),onMouseUp:T(k.onMouseUp,ne.off),onMouseEnter:T(k.onMouseEnter,ae.on),onMouseLeave:T(k.onMouseLeave,ae.off)})},[oe,i,t,U,se,O,n,a,ne,ae.off,ae.on]),c=b.exports.useCallback(function(k,Q){return k===void 0&&(k={}),Q===void 0&&(Q=null),Y({},A,k,{ref:tt(Q,function(fe){!fe||ie(fe.tagName==="LABEL")}),onClick:T(k.onClick,function(){if(!ke){var fe;(fe=te.current)==null||fe.click(),er(te.current,{nextTick:!0})}}),"data-disabled":N(t),"data-checked":N(i),"data-invalid":N(n)})},[A,t,i,n,ke]),P=b.exports.useCallback(function(k,Q){return k===void 0&&(k={}),Q===void 0&&(Q=null),Y({},k,{ref:tt(te,Q),type:"checkbox",name:j,value:I,id:d,tabIndex:R,onChange:T(k.onChange,l),onBlur:T(k.onBlur,p,B.off),onFocus:T(k.onFocus,_,B.on),onKeyDown:T(k.onKeyDown,f),onKeyUp:T(k.onKeyUp,h),required:s,checked:i,disabled:o,readOnly:a,"aria-label":$,"aria-labelledby":H,"aria-invalid":L?Boolean(L):n,"aria-describedby":D,"aria-disabled":t,style:Et})},[j,I,d,l,B.off,B.on,p,_,f,h,s,i,o,a,$,H,L,n,D,t,R]),M=b.exports.useCallback(function(k,Q){return k===void 0&&(k={}),Q===void 0&&(Q=null),Y({},k,{ref:Q,onMouseDown:T(k.onMouseDown,mt),onTouchStart:T(k.onTouchStart,mt),"data-disabled":N(t),"data-checked":N(i),"data-invalid":N(n)})},[i,t,n]),De={isInvalid:n,isFocused:U,isChecked:i,isActive:oe,isHovered:se,isIndeterminate:O,isDisabled:t,isReadOnly:a,isRequired:s};return{state:De,getRootProps:c,getCheckboxProps:u,getInputProps:P,getLabelProps:M,htmlProps:A}}function mt(e){e.preventDefault(),e.stopPropagation()}var xr=["spacing","className","children","iconColor","iconSize","icon","isChecked","isDisabled","onChange","inputProps"],pr=ce("span",{baseStyle:{display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0}}),kr=ce("label",{baseStyle:{cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"}}),ns=he(function(e,r){var t=cr(),a=Y({},t,e),s=nt("Checkbox",a),n=lt(e),d=n.spacing,v=d===void 0?"0.5rem":d,S=n.className,D=n.children,x=n.iconColor,C=n.iconSize,g=n.icon,V=g===void 0?b.exports.createElement(gr,null):g,K=n.isChecked,O=n.isDisabled,j=O===void 0?t==null?void 0:t.isDisabled:O,I=n.onChange,q=n.inputProps,R=ut(n,xr),$=K;t!=null&&t.value&&n.value&&($=t.value.includes(n.value));var H=I;t!=null&&t.onChange&&n.value&&(H=At(t.onChange,I));var L=mr(Y({},R,{isDisabled:j,isChecked:$,onChange:H})),m=L.state,A=L.getInputProps,E=L.getCheckboxProps,p=L.getLabelProps,_=L.getRootProps,w=b.exports.useMemo(function(){return Y({opacity:m.isChecked||m.isIndeterminate?1:0,transform:m.isChecked||m.isIndeterminate?"scale(1)":"scale(0.95)",fontSize:C,color:x},s.icon)},[x,C,m.isChecked,m.isIndeterminate,s.icon]),U=b.exports.cloneElement(V,{__css:w,isIndeterminate:m.isIndeterminate,isChecked:m.isChecked});return b.exports.createElement(kr,Y({__css:s.container,className:Ce("chakra-checkbox",S)},_()),b.exports.createElement("input",Y({className:"chakra-checkbox__input"},A(q,r))),b.exports.createElement(pr,Y({__css:s.control,className:"chakra-checkbox__control"},E()),U),D&&b.exports.createElement(ce.span,Y({className:"chakra-checkbox__label"},p(),{__css:Y({marginStart:v},s.label)}),D))});function de(){return de=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},de.apply(this,arguments)}function Ne(e,r){if(e==null)return{};var t={},a=Object.keys(e),s,n;for(n=0;n<a.length;n++)s=a[n],!(r.indexOf(s)>=0)&&(t[s]=e[s]);return t}var _r=["htmlSize"],Cr=he(function(e,r){var t=e.htmlSize,a=Ne(e,_r),s=nt("Input",a),n=lt(a),d=or(n),v=Ce("chakra-input",e.className);return b.exports.createElement(ce.input,de({size:t},d,{__css:s.field,ref:r,className:v}))});Cr.id="Input";var Pr=["placement"],Dr={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},Fr=ce("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),Mt=he(function(e,r){var t,a=e.placement,s=a===void 0?"left":a,n=Ne(e,Pr),d=(t=Dr[s])!=null?t:{},v=wt();return b.exports.createElement(Fr,de({ref:r},n,{__css:de({},v.addon,d)}))}),Sr=he(function(e,r){return b.exports.createElement(Mt,de({ref:r,placement:"left"},e,{className:Ce("chakra-input__left-addon",e.className)}))});Sr.id="InputLeftAddon";var Ir=he(function(e,r){return b.exports.createElement(Mt,de({ref:r,placement:"right"},e,{className:Ce("chakra-input__right-addon",e.className)}))});Ir.id="InputRightAddon";var Ar=["placement"],Er=["className"],Rr=["className"],wr=ce("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),ct=he(function(e,r){var t,a,s,n=e.placement,d=n===void 0?"left":n,v=Ne(e,Ar),S=wt(),D=S.field,x=d==="left"?"insetStart":"insetEnd",C=de((s={},s[x]="0",s.width=(t=D==null?void 0:D.height)!=null?t:D==null?void 0:D.h,s.height=(a=D==null?void 0:D.height)!=null?a:D==null?void 0:D.h,s.fontSize=D==null?void 0:D.fontSize,s),S.element);return b.exports.createElement(wr,de({ref:r,__css:C},v))});ct.id="InputElement";var Or=he(function(e,r){var t=e.className,a=Ne(e,Er),s=Ce("chakra-input__left-element",t);return b.exports.createElement(ct,de({ref:r,placement:"left",className:s},a))});Or.id="InputLeftElement";var Nr=he(function(e,r){var t=e.className,a=Ne(e,Rr),s=Ce("chakra-input__right-element",t);return b.exports.createElement(ct,de({ref:r,placement:"right",className:s},a))});Nr.id="InputRightElement";function Ke(e,r){if(e==null)return{};var t={},a=Object.keys(e),s,n;for(n=0;n<a.length;n++)s=a[n],!(r.indexOf(s)>=0)&&(t[s]=e[s]);return t}function G(){return G=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},G.apply(this,arguments)}var Vr=["onChange","value","defaultValue","name","isDisabled","isFocusable","isNative"];function Lr(e){e===void 0&&(e={});var r=e,t=r.onChange,a=r.value,s=r.defaultValue,n=r.name,d=r.isDisabled,v=r.isFocusable,S=r.isNative,D=Ke(r,Vr),x=b.exports.useState(s||""),C=x[0],g=x[1],V=ot(a,C),K=V[0],O=V[1],j=b.exports.useRef(null),I=b.exports.useCallback(function(){var m=j.current;if(!!m){var A="input:not(:disabled):checked",E=m.querySelector(A);if(E){E.focus();return}A="input:not(:disabled)";var p=m.querySelector(A);p==null||p.focus()}},[]),q=Ot(void 0,"radio"),R=n||q,$=b.exports.useCallback(function(m){var A=sr(m)?m.target.value:m;K||g(A),t==null||t(String(A))},[t,K]),H=b.exports.useCallback(function(m,A){return m===void 0&&(m={}),A===void 0&&(A=null),G({},m,{ref:tt(A,j),role:"radiogroup"})},[]),L=b.exports.useCallback(function(m,A){var E;m===void 0&&(m={}),A===void 0&&(A=null);var p=S?"checked":"isChecked";return G({},m,(E={ref:A,name:R},E[p]=O!=null?m.value===O:void 0,E.onChange=$,E["data-radiogroup"]=!0,E))},[S,R,$,O]);return{getRootProps:H,getRadioProps:L,name:R,ref:j,focus:I,setValue:g,value:O,onChange:$,isDisabled:d,isFocusable:v,htmlProps:D}}var Br=["colorScheme","size","variant","children","className","isDisabled","isFocusable"],Tt=it({name:"RadioGroupContext",strict:!1}),Mr=Tt[0],qt=Tt[1],ls=he(function(e,r){var t=e.colorScheme,a=e.size,s=e.variant,n=e.children,d=e.className,v=e.isDisabled,S=e.isFocusable,D=Ke(e,Br),x=Lr(D),C=x.value,g=x.onChange,V=x.getRootProps,K=x.name,O=x.htmlProps,j=b.exports.useMemo(function(){return{name:K,size:a,onChange:g,colorScheme:t,value:C,variant:s,isDisabled:v,isFocusable:S}},[K,a,g,t,C,s,v,S]),I=V(O,r),q=Ce("chakra-radio-group",d);return b.exports.createElement(Mr,{value:j},b.exports.createElement(ce.div,G({},I,{className:q}),n))}),Tr=["defaultChecked","isChecked","isFocusable","isDisabled","isReadOnly","isRequired","onChange","isInvalid","name","value","id","data-radiogroup","aria-describedby"];function qr(e){e===void 0&&(e={});var r=e,t=r.defaultChecked,a=r.isChecked,s=r.isFocusable,n=r.isDisabled,d=r.isReadOnly,v=r.isRequired,S=r.onChange,D=r.isInvalid,x=r.name,C=r.value,g=r.id,V=r["data-radiogroup"],K=r["aria-describedby"],O=Ke(r,Tr),j=Ot(void 0,"radio"),I=Vt(),q=qt(),R=!!q||!!V,$=!!I,H=$&&!R?I.id:j;H=g!=null?g:H;var L=n!=null?n:I==null?void 0:I.isDisabled,m=d!=null?d:I==null?void 0:I.isReadOnly,A=v!=null?v:I==null?void 0:I.isRequired,E=D!=null?D:I==null?void 0:I.isInvalid,p=Ee(),_=p[0],w=p[1],U=Ee(),B=U[0],J=U[1],se=Ee(),ae=se[0],X=se[1],oe=b.exports.useState(Boolean(t)),ne=oe[0],te=oe[1],pe=ot(a,ne),ke=pe[0],ie=pe[1],ye=b.exports.useCallback(function(c){if(m||L){c.preventDefault();return}ke||te(c.target.checked),S==null||S(c)},[ke,L,m,S]),Re=b.exports.useCallback(function(c){c.key===" "&&X.on()},[X]),me=b.exports.useCallback(function(c){c.key===" "&&X.off()},[X]),we=b.exports.useCallback(function(c,P){return c===void 0&&(c={}),P===void 0&&(P=null),G({},c,{ref:P,"data-active":N(ae),"data-hover":N(B),"data-disabled":N(L),"data-invalid":N(E),"data-checked":N(ie),"data-focus":N(_),"data-readonly":N(m),"aria-hidden":!0,onMouseDown:T(c.onMouseDown,X.on),onMouseUp:T(c.onMouseUp,X.off),onMouseEnter:T(c.onMouseEnter,J.on),onMouseLeave:T(c.onMouseLeave,J.off)})},[ae,B,L,E,ie,_,m,X.on,X.off,J.on,J.off]),Pe=I!=null?I:{},i=Pe.onFocus,l=Pe.onBlur,o=b.exports.useCallback(function(c,P){c===void 0&&(c={}),P===void 0&&(P=null);var M=L&&!s;return G({},c,{id:H,ref:P,type:"radio",name:x,value:C,onChange:T(c.onChange,ye),onBlur:T(l,c.onBlur,w.off),onFocus:T(i,c.onFocus,w.on),onKeyDown:T(c.onKeyDown,Re),onKeyUp:T(c.onKeyUp,me),checked:ie,disabled:M,readOnly:m,required:A,"aria-invalid":Ae(E),"aria-disabled":Ae(M),"aria-required":Ae(A),"data-readonly":N(m),"aria-describedby":K,style:Et})},[L,s,H,x,C,ye,l,w,i,Re,me,ie,m,A,E,K]),f=function(P,M){return P===void 0&&(P={}),M===void 0&&(M=null),G({},P,{ref:M,onMouseDown:T(P.onMouseDown,xt),onTouchStart:T(P.onTouchStart,xt),"data-disabled":N(L),"data-checked":N(ie),"data-invalid":N(E)})},h=function(P,M){return M===void 0&&(M=null),G({},P,{ref:M,"data-disabled":N(L),"data-checked":N(ie),"data-invalid":N(E)})},u={isInvalid:E,isFocused:_,isChecked:ie,isActive:ae,isHovered:B,isDisabled:L,isReadOnly:m,isRequired:A};return{state:u,getCheckboxProps:we,getInputProps:o,getLabelProps:f,getRootProps:h,htmlProps:O}}function xt(e){e.preventDefault(),e.stopPropagation()}var $r=["spacing","children","isDisabled","isFocusable","inputProps"],os=he(function(e,r){var t,a=qt(),s=e.onChange,n=e.value,d=nt("Radio",G({},a,e)),v=lt(e),S=v.spacing,D=S===void 0?"0.5rem":S,x=v.children,C=v.isDisabled,g=C===void 0?a==null?void 0:a.isDisabled:C,V=v.isFocusable,K=V===void 0?a==null?void 0:a.isFocusable:V,O=v.inputProps,j=Ke(v,$r),I=e.isChecked;(a==null?void 0:a.value)!=null&&n!=null&&(I=a.value===n);var q=s;a!=null&&a.onChange&&n!=null&&(q=At(a.onChange,s));var R=(t=e==null?void 0:e.name)!=null?t:a==null?void 0:a.name,$=qr(G({},j,{isChecked:I,isFocusable:K,isDisabled:g,onChange:q,name:R})),H=$.getInputProps,L=$.getCheckboxProps,m=$.getLabelProps,A=$.getRootProps,E=$.htmlProps,p=rr(E,ar),_=p[0],w=p[1],U=L(w),B=H(O,r),J=m(),se=Object.assign({},_,A()),ae=G({display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer"},d.container),X=G({display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},d.control),oe=G({userSelect:"none",marginStart:D},d.label);return b.exports.createElement(ce.label,G({className:"chakra-radio"},se,{__css:ae}),b.exports.createElement("input",G({className:"chakra-radio__input"},B)),b.exports.createElement(ce.span,G({className:"chakra-radio__control"},U,{__css:X})),x&&b.exports.createElement(ce.span,G({className:"chakra-radio__label"},J,{__css:oe}),x))});const us=["PCC","MININT","FAR","MTSS","MINCIN","MEP"],cs=["ETECSA","UNE","DPT","FCBC","UMCC","ITH"],ds=["BANDEC","BPA"],fs={size:"sm",type:"number",variant:"flushed"},vs={size:"sm",type:"email",variant:"flushed"},hs={size:"sm",type:"text",variant:"flushed"},ys={required:!0,maxLength:11,minLength:11};var Ve=e=>e.type==="checkbox",Se=e=>e instanceof Date,re=e=>e==null;const $t=e=>typeof e=="object";var Z=e=>!re(e)&&!Array.isArray(e)&&$t(e)&&!Se(e),Ur=e=>Z(e)&&e.target?Ve(e.target)?e.target.checked:e.target.value:e,jr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,zr=(e,r)=>e.has(jr(r)),He=e=>Array.isArray(e)?e.filter(Boolean):[],W=e=>e===void 0,y=(e,r,t)=>{if(!r||!Z(e))return t;const a=He(r.split(/[,[\].]+?/)).reduce((s,n)=>re(s)?s:s[n],e);return W(a)||a===e?W(e[r])?t:e[r]:a};const pt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ue={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},be={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};xe.createContext(null);var Kr=(e,r,t,a=!0)=>{const s={};for(const n in e)Object.defineProperty(s,n,{get:()=>{const d=n;return r[d]!==ue.all&&(r[d]=!a||ue.all),t&&(t[d]=!0),e[d]}});return s},le=e=>Z(e)&&!Object.keys(e).length,Hr=(e,r,t)=>{const n=e,{name:a}=n,s=Me(n,["name"]);return le(s)||Object.keys(s).length>=Object.keys(r).length||Object.keys(s).find(d=>r[d]===(!t||ue.all))},Qe=e=>Array.isArray(e)?e:[e];function Wr(e){const r=xe.useRef(e);r.current=e,xe.useEffect(()=>{const t=s=>{s&&s.unsubscribe()},a=!e.disabled&&r.current.subject.subscribe({next:r.current.callback});return()=>t(a)},[e.disabled])}var ve=e=>typeof e=="string",Gr=(e,r,t,a)=>{const s=Array.isArray(e);return ve(e)?(a&&r.watch.add(e),y(t,e)):s?e.map(n=>(a&&r.watch.add(n),y(t,n))):(a&&(r.watchAll=!0),t)},We=e=>typeof e=="function",Ut=e=>{for(const r in e)if(We(e[r]))return!0;return!1},Xr=(e,r,t,a,s)=>r?ge(F({},t[e]),{types:ge(F({},t[e]&&t[e].types?t[e].types:{}),{[a]:s||!0})}):{},dt=e=>/^\w*$/.test(e),jt=e=>He(e.replace(/["|']|\]/g,"").split(/\.|\[/));function z(e,r,t){let a=-1;const s=dt(r)?[r]:jt(r),n=s.length,d=n-1;for(;++a<n;){const v=s[a];let S=t;if(a!==d){const D=e[v];S=Z(D)||Array.isArray(D)?D:isNaN(+s[a+1])?{}:[]}e[v]=S,e=e[v]}return e}const rt=(e,r,t)=>{for(const s of t||Object.keys(e)){const n=y(e,s);if(n){const a=n,{_f:d}=a,v=Me(a,["_f"]);if(d&&r(d.name)){if(d.ref.focus&&W(d.ref.focus()))break;if(d.refs){d.refs[0].focus();break}}else Z(v)&&rt(v,r)}}};var kt=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length)))),st=typeof window!="undefined"&&typeof window.HTMLElement!="undefined"&&typeof document!="undefined";function _e(e){let r;const t=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(st&&(e instanceof Blob||e instanceof FileList))&&(t||Z(e))){r=t?[]:{};for(const a in e)r[a]=We(e[a])?e[a]:_e(e[a])}else return e;return r}function Qr(e,r){const t=r.slice(0,-1).length;let a=0;for(;a<t;)e=W(e)?a++:e[r[a++]];return e}function ee(e,r){const t=dt(r)?[r]:jt(r),a=t.length==1?e:Qr(e,t),s=t[t.length-1];let n;a&&delete a[s];for(let d=0;d<t.slice(0,-1).length;d++){let v=-1,S;const D=t.slice(0,-(d+1)),x=D.length-1;for(d>0&&(n=e);++v<D.length;){const C=D[v];S=S?S[C]:e[C],x===v&&(Z(S)&&le(S)||Array.isArray(S)&&!S.filter(g=>!W(g)).length)&&(n?delete n[C]:delete e[C]),n=S}}return e}function Ye(){let e=[];return{get observers(){return e},next:s=>{for(const n of e)n.next(s)},subscribe:s=>(e.push(s),{unsubscribe:()=>{e=e.filter(n=>n!==s)}}),unsubscribe:()=>{e=[]}}}var $e=e=>re(e)||!$t(e);function Ie(e,r){if($e(e)||$e(r))return e===r;if(Se(e)&&Se(r))return e.getTime()===r.getTime();const t=Object.keys(e),a=Object.keys(r);if(t.length!==a.length)return!1;for(const s of t){const n=e[s];if(!a.includes(s))return!1;if(s!=="ref"){const d=r[s];if(Se(n)&&Se(d)||Z(n)&&Z(d)||Array.isArray(n)&&Array.isArray(d)?!Ie(n,d):n!==d)return!1}}return!0}var _t=e=>({isOnSubmit:!e||e===ue.onSubmit,isOnBlur:e===ue.onBlur,isOnChange:e===ue.onChange,isOnAll:e===ue.all,isOnTouch:e===ue.onTouched}),Ue=e=>typeof e=="boolean",ft=e=>e.type==="file",at=e=>e instanceof HTMLElement,zt=e=>e.type==="select-multiple",vt=e=>e.type==="radio",Yr=e=>vt(e)||Ve(e),Ze=e=>at(e)&&e.isConnected;function je(e,r={}){const t=Array.isArray(e);if(Z(e)||t)for(const a in e)Array.isArray(e[a])||Z(e[a])&&!Ut(e[a])?(r[a]=Array.isArray(e[a])?[]:{},je(e[a],r[a])):re(e[a])||(r[a]=!0);return r}function Kt(e,r,t){const a=Array.isArray(e);if(Z(e)||a)for(const s in e)Array.isArray(e[s])||Z(e[s])&&!Ut(e[s])?W(r)||$e(t[s])?t[s]=Array.isArray(e[s])?je(e[s],[]):F({},je(e[s])):Kt(e[s],re(r)?{}:r[s],t[s]):t[s]=!Ie(e[s],r[s]);return t}var Je=(e,r)=>Kt(e,r,je(r));const Ct={value:!1,isValid:!1},Pt={value:!0,isValid:!0};var Ht=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!W(e[0].attributes.value)?W(e[0].value)||e[0].value===""?Pt:{value:e[0].value,isValid:!0}:Pt:Ct}return Ct},Wt=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:a})=>W(e)?e:r?e===""?NaN:+e:t&&ve(e)?new Date(e):a?a(e):e;const Dt={isValid:!1,value:null};var Gt=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,Dt):Dt;function et(e){const r=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):r.disabled))return ft(r)?r.files:vt(r)?Gt(e.refs).value:zt(r)?[...r.selectedOptions].map(({value:t})=>t):Ve(r)?Ht(e.refs).value:Wt(W(r.value)?e.ref.value:r.value,e)}var Zr=(e,r,t,a)=>{const s={};for(const n of e){const d=y(r,n);d&&z(s,n,d._f)}return{criteriaMode:t,names:[...e],fields:s,shouldUseNativeValidation:a}},ze=e=>e instanceof RegExp,Oe=e=>W(e)?void 0:ze(e)?e.source:Z(e)?ze(e.value)?e.value.source:e.value:e,Jr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ft(e,r,t){const a=y(e,t);if(a||dt(t))return{error:a,name:t};const s=t.split(".");for(;s.length;){const n=s.join("."),d=y(r,n),v=y(e,n);if(d&&!Array.isArray(d)&&t!==n)return{name:t};if(v&&v.type)return{name:n,error:v};s.pop()}return{name:t}}var es=(e,r,t,a,s)=>s.isOnAll?!1:!t&&s.isOnTouch?!(r||e):(t?a.isOnBlur:s.isOnBlur)?!e:(t?a.isOnChange:s.isOnChange)?e:!0,ts=(e,r)=>!He(y(e,r)).length&&ee(e,r),Te=e=>ve(e)||xe.isValidElement(e);function St(e,r,t="validate"){if(Te(e)||Array.isArray(e)&&e.every(Te)||Ue(e)&&!e)return{type:t,message:Te(e)?e:"",ref:r}}var Fe=e=>Z(e)&&!ze(e)?e:{value:e,message:""},It=async(e,r,t,a)=>{const{ref:s,refs:n,required:d,maxLength:v,minLength:S,min:D,max:x,pattern:C,validate:g,name:V,valueAsNumber:K,mount:O,disabled:j}=e._f;if(!O||j)return{};const I=n?n[0]:s,q=p=>{a&&I.reportValidity&&(I.setCustomValidity(Ue(p)?"":p||" "),I.reportValidity())},R={},$=vt(s),H=Ve(s),L=$||H,m=(K||ft(s))&&!s.value||r===""||Array.isArray(r)&&!r.length,A=Xr.bind(null,V,t,R),E=(p,_,w,U=be.maxLength,B=be.minLength)=>{const J=p?_:w;R[V]=F({type:p?U:B,message:J,ref:s},A(p?U:B,J))};if(d&&(!L&&(m||re(r))||Ue(r)&&!r||H&&!Ht(n).isValid||$&&!Gt(n).isValid)){const{value:p,message:_}=Te(d)?{value:!!d,message:d}:Fe(d);if(p&&(R[V]=F({type:be.required,message:_,ref:I},A(be.required,_)),!t))return q(_),R}if(!m&&(!re(D)||!re(x))){let p,_;const w=Fe(x),U=Fe(D);if(isNaN(r)){const B=s.valueAsDate||new Date(r);ve(w.value)&&(p=B>new Date(w.value)),ve(U.value)&&(_=B<new Date(U.value))}else{const B=s.valueAsNumber||+r;re(w.value)||(p=B>w.value),re(U.value)||(_=B<U.value)}if((p||_)&&(E(!!p,w.message,U.message,be.max,be.min),!t))return q(R[V].message),R}if((v||S)&&!m&&ve(r)){const p=Fe(v),_=Fe(S),w=!re(p.value)&&r.length>p.value,U=!re(_.value)&&r.length<_.value;if((w||U)&&(E(w,p.message,_.message),!t))return q(R[V].message),R}if(C&&!m&&ve(r)){const{value:p,message:_}=Fe(C);if(ze(p)&&!r.match(p)&&(R[V]=F({type:be.pattern,message:_,ref:s},A(be.pattern,_)),!t))return q(_),R}if(g){if(We(g)){const p=await g(r),_=St(p,I);if(_&&(R[V]=F(F({},_),A(be.validate,_.message)),!t))return q(_.message),R}else if(Z(g)){let p={};for(const _ in g){if(!le(p)&&!t)break;const w=St(await g[_](r),I,_);w&&(p=F(F({},w),A(_,w.message)),q(w.message),t&&(R[V]=p))}if(!le(p)&&(R[V]=F({ref:I},p),!t))return R}}return q(!0),R};const rs={mode:ue.onSubmit,reValidateMode:ue.onChange,shouldFocusError:!0};function ss(e={}){let r=F(F({},rs),e),t={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},a={},s=_e(r.defaultValues)||{},n=r.shouldUnregister?{}:_e(s),d={action:!1,mount:!1,watch:!1},v={mount:new Set,unMount:new Set,array:new Set,watch:new Set},S,D=0,x={};const C={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={watch:Ye(),array:Ye(),state:Ye()},V=_t(r.mode),K=_t(r.reValidateMode),O=r.criteriaMode===ue.all,j=(i,l)=>(...o)=>{clearTimeout(D),D=window.setTimeout(()=>i(...o),l)},I=async i=>{let l=!1;return C.isValid&&(l=r.resolver?le((await m()).errors):await E(a,!0),!i&&l!==t.isValid&&(t.isValid=l,g.state.next({isValid:l}))),l},q=(i,l=[],o,f,h=!0,u=!0)=>{if(f&&o){if(d.action=!0,u&&Array.isArray(y(a,i))){const c=o(y(a,i),f.argA,f.argB);h&&z(a,i,c)}if(C.errors&&u&&Array.isArray(y(t.errors,i))){const c=o(y(t.errors,i),f.argA,f.argB);h&&z(t.errors,i,c),ts(t.errors,i)}if(C.touchedFields&&u&&Array.isArray(y(t.touchedFields,i))){const c=o(y(t.touchedFields,i),f.argA,f.argB);h&&z(t.touchedFields,i,c)}C.dirtyFields&&(t.dirtyFields=Je(s,n)),g.state.next({isDirty:_(i,l),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else z(n,i,l)},R=(i,l)=>(z(t.errors,i,l),g.state.next({errors:t.errors})),$=(i,l,o,f)=>{const h=y(a,i);if(h){const u=y(n,i,W(o)?y(s,i):o);W(u)||f&&f.defaultChecked||l?z(n,i,l?u:et(h._f)):B(i,u),d.mount&&I()}},H=(i,l,o,f,h)=>{let u=!1;const c={name:i},P=y(t.touchedFields,i);if(C.isDirty){const M=t.isDirty;t.isDirty=c.isDirty=_(),u=M!==c.isDirty}if(C.dirtyFields&&(!o||f)){const M=y(t.dirtyFields,i);Ie(y(s,i),l)?ee(t.dirtyFields,i):z(t.dirtyFields,i,!0),c.dirtyFields=t.dirtyFields,u=u||M!==y(t.dirtyFields,i)}return o&&!P&&(z(t.touchedFields,i,o),c.touchedFields=t.touchedFields,u=u||C.touchedFields&&P!==o),u&&h&&g.state.next(c),u?c:{}},L=async(i,l,o,f,h)=>{const u=y(t.errors,l),c=C.isValid&&t.isValid!==o;if(e.delayError&&f?(S=S||j(R,e.delayError),S(l,f)):(clearTimeout(D),f?z(t.errors,l,f):ee(t.errors,l)),((f?!Ie(u,f):u)||!le(h)||c)&&!i){const P=ge(F(F({},h),c?{isValid:o}:{}),{errors:t.errors,name:l});t=F(F({},t),P),g.state.next(P)}x[l]--,C.isValidating&&!Object.values(x).some(P=>P)&&(g.state.next({isValidating:!1}),x={})},m=async i=>r.resolver?await r.resolver(F({},n),r.context,Zr(i||v.mount,a,r.criteriaMode,r.shouldUseNativeValidation)):{},A=async i=>{const{errors:l}=await m();if(i)for(const o of i){const f=y(l,o);f?z(t.errors,o,f):ee(t.errors,o)}else t.errors=l;return l},E=async(i,l,o={valid:!0})=>{for(const h in i){const u=i[h];if(u){const f=u,{_f:c}=f,P=Me(f,["_f"]);if(c){const M=await It(u,y(n,c.name),O,r.shouldUseNativeValidation);if(M[c.name]&&(o.valid=!1,l))break;l||(M[c.name]?z(t.errors,c.name,M[c.name]):ee(t.errors,c.name))}P&&await E(P,l,o)}}return o.valid},p=()=>{for(const i of v.unMount){const l=y(a,i);l&&(l._f.refs?l._f.refs.every(o=>!Ze(o)):!Ze(l._f.ref))&&ie(i)}v.unMount=new Set},_=(i,l)=>(i&&l&&z(n,i,l),!Ie(oe(),s)),w=(i,l,o)=>{const f=F({},d.mount?n:W(l)?s:ve(i)?{[i]:l}:l);return Gr(i,v,f,o)},U=i=>He(y(d.mount?n:s,i,e.shouldUnregister?y(s,i,[]):[])),B=(i,l,o={})=>{const f=y(a,i);let h=l;if(f){const u=f._f;u&&(!u.disabled&&z(n,i,Wt(l,u)),h=st&&at(u.ref)&&re(l)?"":l,zt(u.ref)?[...u.ref.options].forEach(c=>c.selected=h.includes(c.value)):u.refs?Ve(u.ref)?u.refs.length>1?u.refs.forEach(c=>!c.disabled&&(c.checked=Array.isArray(h)?!!h.find(P=>P===c.value):h===c.value)):u.refs[0]&&(u.refs[0].checked=!!h):u.refs.forEach(c=>c.checked=c.value===h):ft(u.ref)?u.ref.value="":(u.ref.value=h,u.ref.type||g.watch.next({name:i})))}(o.shouldDirty||o.shouldTouch)&&H(i,h,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&X(i)},J=(i,l,o)=>{for(const f in l){const h=l[f],u=`${i}.${f}`,c=y(a,u);(v.array.has(i)||!$e(h)||c&&!c._f)&&!Se(h)?J(u,h,o):B(u,h,o)}},se=(i,l,o={})=>{const f=y(a,i),h=v.array.has(i),u=_e(l);z(n,i,u),h?(g.array.next({name:i,values:n}),(C.isDirty||C.dirtyFields)&&o.shouldDirty&&(t.dirtyFields=Je(s,n),g.state.next({name:i,dirtyFields:t.dirtyFields,isDirty:_(i,u)}))):f&&!f._f&&!re(u)?J(i,u,o):B(i,u,o),kt(i,v)&&g.state.next({}),g.watch.next({name:i})},ae=async i=>{const l=i.target;let o=l.name;const f=y(a,o);if(f){let h,u;const c=l.type?et(f._f):Ur(i),P=i.type===pt.BLUR||i.type===pt.FOCUS_OUT,M=!Jr(f._f)&&!r.resolver&&!y(t.errors,o)&&!f._f.deps||es(P,y(t.touchedFields,o),t.isSubmitted,K,V),De=kt(o,v,P);z(n,o,c),P?f._f.onBlur&&f._f.onBlur(i):f._f.onChange&&f._f.onChange(i);const k=H(o,c,P,!1),Q=!le(k)||De;if(!P&&g.watch.next({name:o,type:i.type}),M)return Q&&g.state.next(F({name:o},De?{}:k));if(!P&&De&&g.state.next({}),x[o]=(x[o],1),g.state.next({isValidating:!0}),r.resolver){const{errors:fe}=await m([o]),ht=Ft(t.errors,a,o),Le=Ft(fe,a,ht.name||o);h=Le.error,o=Le.name,u=le(fe)}else h=(await It(f,y(n,o),O,r.shouldUseNativeValidation))[o],u=await I(!0);f._f.deps&&X(f._f.deps),L(!1,o,u,h,k)}},X=async(i,l={})=>{let o,f;const h=Qe(i);if(g.state.next({isValidating:!0}),r.resolver){const u=await A(W(i)?i:h);o=le(u),f=i?!h.some(c=>y(u,c)):o}else i?(f=(await Promise.all(h.map(async u=>{const c=y(a,u);return await E(c&&c._f?{[u]:c}:c)}))).every(Boolean),!(!f&&!t.isValid)&&I()):f=o=await E(a);return g.state.next(ge(F(F({},!ve(i)||C.isValid&&o!==t.isValid?{}:{name:i}),r.resolver?{isValid:o}:{}),{errors:t.errors,isValidating:!1})),l.shouldFocus&&!f&&rt(a,u=>y(t.errors,u),i?h:v.mount),f},oe=i=>{const l=F(F({},s),d.mount?n:{});return W(i)?l:ve(i)?y(l,i):i.map(o=>y(l,o))},ne=(i,l)=>({invalid:!!y((l||t).errors,i),isDirty:!!y((l||t).dirtyFields,i),isTouched:!!y((l||t).touchedFields,i),error:y((l||t).errors,i)}),te=i=>{i?Qe(i).forEach(l=>ee(t.errors,l)):t.errors={},g.state.next({errors:t.errors})},pe=(i,l,o)=>{const f=(y(a,i,{_f:{}})._f||{}).ref;z(t.errors,i,ge(F({},l),{ref:f})),g.state.next({name:i,errors:t.errors,isValid:!1}),o&&o.shouldFocus&&f&&f.focus&&f.focus()},ke=(i,l)=>We(i)?g.watch.subscribe({next:o=>i(w(void 0,l),o)}):w(i,l,!0),ie=(i,l={})=>{for(const o of i?Qe(i):v.mount)v.mount.delete(o),v.array.delete(o),y(a,o)&&(l.keepValue||(ee(a,o),ee(n,o)),!l.keepError&&ee(t.errors,o),!l.keepDirty&&ee(t.dirtyFields,o),!l.keepTouched&&ee(t.touchedFields,o),!r.shouldUnregister&&!l.keepDefaultValue&&ee(s,o));g.watch.next({}),g.state.next(F(F({},t),l.keepDirty?{isDirty:_()}:{})),!l.keepIsValid&&I()},ye=(i,l={})=>{let o=y(a,i);const f=Ue(l.disabled);return z(a,i,{_f:F(ge(F({},o&&o._f?o._f:{ref:{name:i}}),{name:i,mount:!0}),l)}),v.mount.add(i),o?f&&z(n,i,l.disabled?void 0:y(n,i,et(o._f))):$(i,!0,l.value),ge(F(F({},f?{disabled:l.disabled}:{}),r.shouldUseNativeValidation?{required:!!l.required,min:Oe(l.min),max:Oe(l.max),minLength:Oe(l.minLength),maxLength:Oe(l.maxLength),pattern:Oe(l.pattern)}:{}),{name:i,onChange:ae,onBlur:ae,ref:h=>{if(h){ye(i,l),o=y(a,i);const u=W(h.value)&&h.querySelectorAll&&h.querySelectorAll("input,select,textarea")[0]||h,c=Yr(u),P=o._f.refs||[];if(c?P.find(M=>M===u):u===o._f.ref)return;z(a,i,{_f:F(F({},o._f),c?{refs:[...P.filter(Ze),u,...Array.isArray(y(s,i))?[{}]:[]],ref:{type:u.type,name:i}}:{ref:u})}),$(i,!1,void 0,u)}else o=y(a,i,{}),o._f&&(o._f.mount=!1),(r.shouldUnregister||l.shouldUnregister)&&!(zr(v.array,i)&&d.action)&&v.unMount.add(i)}})};return{control:{register:ye,unregister:ie,getFieldState:ne,_executeSchema:m,_getWatch:w,_getDirty:_,_updateValid:I,_removeUnmounted:p,_updateFieldArray:q,_getFieldArray:U,_subjects:g,_proxyFormState:C,get _fields(){return a},get _formValues(){return n},get _stateFlags(){return d},set _stateFlags(i){d=i},get _defaultValues(){return s},get _names(){return v},set _names(i){v=i},get _formState(){return t},set _formState(i){t=i},get _options(){return r},set _options(i){r=F(F({},r),i)}},trigger:X,register:ye,handleSubmit:(i,l)=>async o=>{o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let f=!0,h=_e(n);g.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:u,values:c}=await m();t.errors=u,h=c}else await E(a);le(t.errors)?(g.state.next({errors:{},isSubmitting:!0}),await i(h,o)):(l&&await l(F({},t.errors),o),r.shouldFocusError&&rt(a,u=>y(t.errors,u),v.mount))}catch(u){throw f=!1,u}finally{t.isSubmitted=!0,g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:le(t.errors)&&f,submitCount:t.submitCount+1,errors:t.errors})}},watch:ke,setValue:se,getValues:oe,reset:(i,l={})=>{const o=i||s,f=_e(o),h=i&&!le(i)?f:s;if(l.keepDefaultValues||(s=o),!l.keepValues){if(l.keepDirtyValues)for(const u of v.mount)y(t.dirtyFields,u)?z(h,u,y(n,u)):se(u,y(h,u));else{if(st&&W(i))for(const u of v.mount){const c=y(a,u);if(c&&c._f){const P=Array.isArray(c._f.refs)?c._f.refs[0]:c._f.ref;try{at(P)&&P.closest("form").reset();break}catch{}}}a={}}n=e.shouldUnregister?l.keepDefaultValues?_e(s):{}:f,g.array.next({values:h}),g.watch.next({values:h})}v={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},d.mount=!C.isValid||!!l.keepIsValid,d.watch=!!e.shouldUnregister,g.state.next({submitCount:l.keepSubmitCount?t.submitCount:0,isDirty:l.keepDirty||l.keepDirtyValues?t.isDirty:!!(l.keepDefaultValues&&!Ie(i,s)),isSubmitted:l.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:l.keepDirty||l.keepDirtyValues?t.dirtyFields:l.keepDefaultValues&&i?Je(s,i):{},touchedFields:l.keepTouched?t.touchedFields:{},errors:l.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(i,l={})=>{y(a,i)&&(W(l.defaultValue)?se(i,y(s,i)):(se(i,l.defaultValue),z(s,i,l.defaultValue)),l.keepTouched||ee(t.touchedFields,i),l.keepDirty||(ee(t.dirtyFields,i),t.isDirty=l.defaultValue?_(i,y(s,i)):_()),l.keepError||(ee(t.errors,i),C.isValid&&I()),g.state.next(F({},t)))},clearErrors:te,unregister:ie,setError:pe,setFocus:(i,l={})=>{const o=y(a,i)._f,f=o.refs?o.refs[0]:o.ref;l.shouldSelect?f.select():f.focus()},getFieldState:ne}}function gs(e={}){const r=xe.useRef(),[t,a]=xe.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});r.current?r.current.control._options=e:r.current=ge(F({},ss(e)),{formState:t});const s=r.current.control,n=xe.useCallback(d=>{Hr(d,s._proxyFormState,!0)&&(s._formState=F(F({},s._formState),d),a(F({},s._formState)))},[s]);return Wr({subject:s._subjects.state,callback:n}),xe.useEffect(()=>{s._stateFlags.mount||(s._proxyFormState.isValid&&s._updateValid(),s._stateFlags.mount=!0),s._stateFlags.watch&&(s._stateFlags.watch=!1,s._subjects.state.next({})),s._removeUnmounted()}),r.current.formState=Kr(t,s._proxyFormState),r.current}export{ns as C,vs as E,Cr as I,fs as O,ls as R,hs as T,gs as a,ys as b,os as c,us as d,cs as e,ds as f,or as u};
