(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(8),r=n.n(o),l=n(10),i=n(3),s=(n(15),n(0));var b=function(){return Object(s.jsx)("footer",{children:Object(s.jsx)("p",{children:"This is Aj "})})},d=n(9);var j=function(e){return Object(s.jsxs)("div",{className:"note",children:[Object(s.jsx)("h1",{children:e.title}),Object(s.jsx)("p",{children:e.content}),Object(s.jsx)("div",{className:"container",style:{backgroundColor:"white",size:200},children:Object(s.jsx)("button",{style:{backgroundColor:"white",color:"black",size:200},onClick:function(t){e.ondelete(e.id)},children:Object(s.jsx)(d.a,{})})})]})},u=n(5),g=n(7);var h=function(e){var t=c.a.useState({title:"",content:" "}),n=Object(i.a)(t,2),a=n[0],o=n[1];function r(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(u.a)({},n,a))}))}return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{name:"title",onChange:r,placeholder:"Title",value:a.title}),Object(s.jsx)("textarea",{name:"content",onChange:r,placeholder:"Take a note...",rows:"3",value:a.content}),Object(s.jsx)("button",{onClick:function(t){e.onadd(a),o({title:"",content:""}),t.preventDefault()},children:"Add"})]})})};function x(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("nav",{className:"navbar navbar-expand-lg  navbar-".concat(e.mode," bg-").concat(e.mode),style:{padding:0},children:[Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(s.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"})})]}),Object(s.jsxs)("div",{className:" form-check form-switch text-".concat("light"===e.mode?"Dark":"light"),children:[Object(s.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Mode"})]})]})})}x.defaultProps={title:"Set title",aboutText:"Set about"};var O=function(){var e=Object(a.useState)("light"),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),r=Object(i.a)(o,2),d=r[0],u=r[1];function g(e){console.log("value triggered "),u((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(x,{title:"Todo List",aboutText:"About",mode:n,toggleMode:function(){"dark"===n?(c("light"),document.body.style.background="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(19,121,9,1) 23%, rgba(0,212,255,1) 100%)"):(c("dark"),document.body.style.background="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,118,0.8046568969384629) 1%, rgba(138,255,0,1) 97%)")}}),Object(s.jsxs)("div",{style:{padding:0,margin:0},children:[Object(s.jsx)(h,{onadd:function(e){console.log(e),u((function(t){return[].concat(Object(l.a)(t),[e])}))}}),d.map((function(e,t){return Object(s.jsx)(j,{id:t,title:e.title,content:e.content,ondelete:g},t)})),Object(s.jsx)(b,{})]})]})};r.a.render(Object(s.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d9c1b1c4.chunk.js.map