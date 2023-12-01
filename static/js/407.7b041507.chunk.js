"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[407],{9407:function(n,e,t){t.r(e),t.d(e,{default:function(){return dn}});var r,a,i,o,s,c,l,u,d,p,m,x,f,b,h,g,v,j,Z=t(2791),w=t(9434),y=t(3634),C=t(6916),_=function(n){return n.contacts.items},k=function(n){return n.contacts.isLoading},L=function(n){return n.contacts.error},E=function(n){return n.filters},N=(0,C.P1)([_,E],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),F=t(168),Y=t(7686),z=Y.Z.section(r||(r=(0,F.Z)(["\n  margin: auto;\n  margin-bottom: 15px;\n  padding: 20px;\n  display: grid;\n  justify-content: center;\n  justify-items: center;\n  gap: 14px;\n  background: rgba(138, 43, 226, 0.8);\n  max-width: 500px;\n  border-radius: 2%;\n"]))),A=Y.Z.h2(a||(a=(0,F.Z)(["\n  margin: 0;\n"]))),q=t(184),I=function(n){var e=n.title,t=n.children;return(0,q.jsxs)(z,{children:[(0,q.jsx)(A,{children:e}),t]})},D=Y.Z.form(i||(i=(0,F.Z)([""]))),P=Y.Z.label(o||(o=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 0.25em;\n"]))),B=Y.Z.input(s||(s=(0,F.Z)(["\n  width: 250px;\n  padding: 5px;\n  border-radius: 5px;\n"]))),H=Y.Z.button(c||(c=(0,F.Z)(["\n  border-radius: 5px;\n  margin-top: 0.5em;\n  padding: 0.25em 1em;\n  cursor: pointer;\n"]))),J=function(){var n=(0,w.I0)(),e=(0,w.v9)(_);return(0,q.jsxs)(D,{onSubmit:function(t){t.preventDefault();var r=t.target,a=t.target.elements.name.value,i=t.target.elements.number.value;return e.some((function(n){return n.name.toLowerCase()===a.toLowerCase()}))?alert("".concat(a," is already in contacts")):e.some((function(n){return n.number===i}))?alert("".concat(i," is already in contacts")):(n((0,y.uK)({name:a,number:i})),void r.reset())},autoComplete:"off",children:[(0,q.jsxs)(P,{children:["Name",(0,q.jsx)(B,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name",value:e.name})]}),(0,q.jsxs)(P,{children:["Number",(0,q.jsx)(B,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter number",value:e.number})]}),(0,q.jsx)(H,{type:"submit",children:"Add contact"})]})},K=t(3165),M=Y.Z.label(l||(l=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 16px;\n  font-weight: 500;\n"]))),S=Y.Z.input(u||(u=(0,F.Z)(["\n  width: 250px;\n  padding: 5px;\n  border-radius: 5px;\n"]))),T=function(){var n=(0,w.v9)(E),e=(0,w.I0)();return(0,q.jsxs)("div",{children:[(0,q.jsx)(M,{children:"Find contacts by name"}),(0,q.jsx)(S,{type:"text",value:n,onChange:function(n){var t=n.target.value.toLowerCase().trim();e((0,K.p)(t))}})]})},V=t(6172),G="EditContactForm_formstyle__9XZ9v",R="EditContactForm_inputstyle__DH66l",X="EditContactForm_inputname__kuY0g",$="EditContactForm_button__6oq3H",O=function(){var n=(0,w.v9)(_),e=(0,w.v9)(V.rC),t=e.name,r=e.number,a=e.id,i=n.filter((function(n){return n.name!==t})),o=n.filter((function(n){return n.number!==r})),s=(0,w.I0)();return(0,q.jsxs)("form",{className:G,onSubmit:function(n){n.preventDefault();var e=n.currentTarget,t=e.elements.name.value,r=e.elements.number.value;i.some((function(n){return n.name.toLocaleLowerCase()===t.toLocaleLowerCase()}))?alert("".concat(t," is already in contacts")):o.some((function(n){return n.number===r}))?alert("".concat(r," is already used")):(s((0,y.mP)({id:a,newContactData:{name:t,number:r}})),s((0,V.tY)(!1)),s((0,V.sp)(null))),e.reset()},children:[(0,q.jsx)("label",{className:X,htmlFor:a,children:"New Name"}),(0,q.jsx)("input",{type:"text",name:"name",defaultValue:t,className:R,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",id:a,required:!0}),(0,q.jsx)("label",{className:X,htmlFor:a,children:"New Number"}),(0,q.jsx)("input",{type:"tel",name:"number",defaultValue:r,className:R,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",id:a,required:!0}),(0,q.jsx)("button",{className:$,type:"submit",children:"Edit contact"})]})},Q=Y.Z.div(d||(d=(0,F.Z)(["\nposition: fixed;\nleft: 0;\nright: 0;\ntop: 0;\nbottom: 0;\nbackground-color: rgba(0, 0, 0, 0.4);\ntransition: opacity 300ms linear, visibility 300ms linear;\nz-index: 1;\n"]))),U=Y.Z.div(p||(p=(0,F.Z)(["\nposition: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scaleY(1);\n\n    height: 420px;\n    width: 380px;\n    background: #FFC0CB;\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 2px 1px rgba(0, 0, 0, 0.2);\n    border-radius: 4px;\n    transition: transform 300ms linear;\n    padding: 24px;\n"]))),W=Y.Z.p(m||(m=(0,F.Z)(["\ncolor: rgb(0, 0, 0);\nfont-size: larger;\nfont-weight: 700;\npadding-bottom: 15px;\npadding-top: 25px;\ntext-align: center;\n"]))),nn=Y.Z.button(x||(x=(0,F.Z)(["\nposition: absolute;\n    top: 24px;\n    right: 24px;\n    cursor: pointer;\n"]))),en=function(){var n=(0,w.I0)();return(0,Z.useEffect)((function(){var e=function(e){"Escape"===e.code&&(n((0,V.tY)(!1)),n((0,V.sp)(null)))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}})),(0,q.jsx)(Q,{onClick:function(e){e.currentTarget===e.target&&(n((0,V.tY)(!1)),n((0,V.sp)(null)))},children:(0,q.jsxs)(U,{children:[(0,q.jsx)(W,{children:"You are trying to change the next contact:"}),(0,q.jsx)(nn,{onClick:function(){n((0,V.tY)(!1)),n((0,V.sp)(null))},children:"\xd7"}),(0,q.jsx)(O,{})]})})},tn=Y.Z.li(f||(f=(0,F.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid black;\n  padding: 7px;\n"]))),rn=Y.Z.p(b||(b=(0,F.Z)(["\n  margin: 0;\n  font-weight: 500;\n  text-align: start;\n"]))),an=Y.Z.span(h||(h=(0,F.Z)(["\n  margin-left: 10px;\n  text-align: end;\n"]))),on=Y.Z.button(g||(g=(0,F.Z)(["\n  margin: 5px;\n  padding: 4px 14px;\n  border-radius: 5px;\n  cursor: pointer;\n"]))),sn=Y.Z.div(v||(v=(0,F.Z)(["\n display: flex;\nflex-wrap: wrap;\n align-items: center;\n   justify-content: center;\n //justify-content: space-between;\n// gap: 5px;\n"]))),cn=function(n){var e=n.name,t=n.number,r=n.id,a=(0,w.I0)(),i=(0,w.v9)(V.Yh),o=document.body;i?o.classList.add("disable-scroll"):o.classList.remove("disable-scroll");(0,Z.useEffect)((function(){}),[]);return(0,q.jsxs)("div",{children:[i&&(0,q.jsx)(en,{}),(0,q.jsxs)(tn,{children:[(0,q.jsxs)(sn,{children:[(0,q.jsxs)(rn,{children:[e,":"]}),(0,q.jsx)(an,{children:t})]}),(0,q.jsxs)(sn,{children:[(0,q.jsx)(on,{onClick:function(){return n=r,void a((0,y.GK)(n));var n},children:"Delete"}),(0,q.jsx)(on,{type:"button",onClick:function(){a((0,V.tY)(!0)),a((0,V.sp)({name:e,number:t,id:r}))},children:"Edit"})]})]},r)]})},ln=Y.Z.ul(j||(j=(0,F.Z)(["\n  padding: 0;\n  margin: 0;\n"]))),un=function(){var n=(0,w.v9)(N).sort((function(n,e){return n.name.toLowerCase()>e.name.toLowerCase()?1:-1}));return(0,q.jsx)(ln,{children:n.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,q.jsx)(cn,{id:r,name:e,number:t},r)}))})};function dn(){var n=(0,w.I0)(),e=(0,w.v9)(k),t=(0,w.v9)(L);return(0,Z.useEffect)((function(){n((0,y.yF)())}),[n]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(I,{title:"Phonebook",children:(0,q.jsx)(J,{})}),(0,q.jsxs)(I,{title:"Contacts",children:[(0,q.jsx)(T,{}),e&&!t&&(0,q.jsx)("b",{children:"Request in progress"}),(0,q.jsx)(un,{})]})]})}}}]);
//# sourceMappingURL=407.7b041507.chunk.js.map