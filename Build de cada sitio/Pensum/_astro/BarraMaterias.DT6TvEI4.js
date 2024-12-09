import{r as l}from"./index.DhYZZe0J.js";/* empty css                       */var p={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=l,_=Symbol.for("react.element"),d=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,v=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function m(o,t,a){var r,e={},n=null,s=null;a!==void 0&&(n=""+a),t.key!==void 0&&(n=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)y.call(t,r)&&!b.hasOwnProperty(r)&&(e[r]=t[r]);if(o&&o.defaultProps)for(r in t=o.defaultProps,t)e[r]===void 0&&(e[r]=t[r]);return{$$typeof:_,type:o,key:n,ref:s,props:e,_owner:v.current}}i.Fragment=d;i.jsx=m;i.jsxs=m;p.exports=i;var c=p.exports;const A=()=>{const[o,t]=l.useState(null),a=e=>{t(o===e?null:e),document.querySelectorAll(".materia").forEach(s=>{const u=s.getAttribute("data-tipo");o===e?(s.style.opacity="1",s.removeAttribute("style")):s.setAttribute("style",u===e?"":"pointer-events: none; opacity: 0.3")})},r=[{tipo:"CB",nombre:"Ciencias Básicas"},{tipo:"BI",nombre:"Básicas de Ingeniería"},{tipo:"AI",nombre:"Aplicadas de Ingeniería"},{tipo:"CO",nombre:"Complementario"},{tipo:"EX",nombre:"Extrínsecas"}];return c.jsx("div",{className:"barra-categorias",children:r.map(({tipo:e,nombre:n})=>c.jsxs("button",{onClick:()=>a(e),className:`categoria ${e} ${o===e?"activo":""}`,children:[n," "]},e))})};export{A as default};
