"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[345],{9345:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r,a,i,o,s,u,c,d,l,m,p,f,x,h=t(2791),b=t(9434),v=t(3634),g=t(6916),j=function(n){return n.contacts.items},w=function(n){return n.contacts.isLoading},Z=function(n){return n.contacts.error},y=function(n){return n.filters},C=(0,g.P1)([j,y],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),k=t(168),L=t(7686),E=L.Z.section(r||(r=(0,k.Z)(["\n  margin: auto;\n  margin-bottom: 15px;\n  padding: 20px;\n  display: grid;\n  justify-content: center;\n  justify-items: center;\n  gap: 14px;\n  background: #BA55D3;\n  width: 30%;\n  border-radius: 10%;\n"]))),A=L.Z.h2(a||(a=(0,k.Z)(["\n  margin: 0;\n"]))),N=t(184),_=function(n){var e=n.title,t=n.children;return(0,N.jsxs)(E,{children:[(0,N.jsx)(A,{children:e}),t]})},F=L.Z.form(i||(i=(0,k.Z)([""]))),Y=L.Z.label(o||(o=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 0.25em;\n"]))),z=L.Z.input(s||(s=(0,k.Z)(["\n  width: 250px;\n  padding: 5px;\n  border-radius: 5px;\n"]))),I=L.Z.button(u||(u=(0,k.Z)(["\n  border-radius: 5px;\n  margin-top: 0.5em;\n  padding: 0.25em 1em;\n  cursor: pointer;\n"]))),q=function(){var n=(0,b.I0)(),e=(0,b.v9)(j);return(0,N.jsxs)(F,{onSubmit:function(t){t.preventDefault();var r=t.target,a=t.target.elements.name.value,i=t.target.elements.number.value;return e.some((function(n){return n.name.toLowerCase()===a.toLowerCase()}))?alert("".concat(a," is already in contacts")):e.some((function(n){return n.number===i}))?alert("".concat(i," is already in contacts")):(n((0,v.uK)({name:a,number:i})),void r.reset())},autoComplete:"off",children:[(0,N.jsxs)(Y,{children:["Name",(0,N.jsx)(z,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name",value:e.name})]}),(0,N.jsxs)(Y,{children:["Number",(0,N.jsx)(z,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter number",value:e.number})]}),(0,N.jsx)(I,{type:"submit",children:"Add contact"})]})},D=t(3165),P=L.Z.label(c||(c=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 16px;\n  font-weight: 500;\n"]))),B=L.Z.input(d||(d=(0,k.Z)(["\n  width: 250px;\n  padding: 5px;\n  border-radius: 5px;\n"]))),J=function(){var n=(0,b.v9)(y),e=(0,b.I0)();return(0,N.jsxs)("div",{children:[(0,N.jsx)(P,{children:"Find contacts by name"}),(0,N.jsx)(B,{type:"text",value:n,onChange:function(n){var t=n.target.value.toLowerCase().trim();e((0,D.p)(t))}})]})},K=t(6172),M=function(){var n=(0,b.v9)(j),e=(0,b.v9)(K.rC),t=e.name,r=e.number,a=e.id,i=n.filter((function(n){return n.name!==t})),o=n.filter((function(n){return n.number!==r})),s=(0,b.I0)();return(0,N.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.currentTarget,t=e.elements.name.value,r=e.elements.number.value;i.some((function(n){return n.name.toLocaleLowerCase()===t.toLocaleLowerCase()}))?alert("".concat(t," is already in contacts")):o.some((function(n){return n.number===r}))?alert("".concat(r," is already used")):(s((0,v.mP)({id:a,newContactData:{name:t,number:r}})),s((0,K.tY)(!1)),s((0,K.sp)(null))),e.reset()},children:[(0,N.jsx)("label",{htmlFor:a,children:"New Name"}),(0,N.jsx)("input",{type:"text",name:"name",defaultValue:t,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",id:a,required:!0}),(0,N.jsx)("label",{htmlFor:a,children:"New Number"}),(0,N.jsx)("input",{type:"tel",name:"number",defaultValue:r,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",id:a,required:!0}),(0,N.jsx)("button",{type:"submit",children:"Edit contact"})]})},S=function(){var n=(0,b.I0)();return(0,h.useEffect)((function(){var e=function(e){"Escape"===e.code&&(n((0,K.tY)(!1)),n((0,K.sp)(null)))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}})),(0,N.jsx)("div",{onClick:function(e){e.currentTarget===e.target&&(n((0,K.tY)(!1)),n((0,K.sp)(null)))},children:(0,N.jsxs)("div",{children:[(0,N.jsx)("p",{children:"You are trying to change the next contact:"}),(0,N.jsx)("button",{onClick:function(){n((0,K.tY)(!1)),n((0,K.sp)(null))},children:"\xd7"}),(0,N.jsx)(M,{})]})})},T=L.Z.li(l||(l=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),V=L.Z.p(m||(m=(0,k.Z)(["\n  margin: 0;\n  font-weight: 500;\n"]))),G=L.Z.span(p||(p=(0,k.Z)(["\n  margin-left: 10px;\n"]))),R=L.Z.button(f||(f=(0,k.Z)(["\n  margin: 8px;\n  padding: 4px 14px;\n  border-radius: 5px;\n  cursor: pointer;\n"]))),$=function(n){var e=n.name,t=n.number,r=n.id,a=(0,b.I0)(),i=(0,b.v9)(K.Yh);(0,h.useEffect)((function(){}),[]);return(0,N.jsxs)("div",{children:[i&&(0,N.jsx)(S,{}),(0,N.jsxs)(T,{children:[(0,N.jsxs)(V,{children:[e,":",(0,N.jsx)(G,{children:t})]}),(0,N.jsx)(R,{onClick:function(){return n=r,void a((0,v.GK)(n));var n},children:"Delete"}),(0,N.jsx)(R,{type:"button",onClick:function(){a((0,K.tY)(!0)),a((0,K.sp)({name:e,number:t,id:r}))},children:"Edit"})]},r)]})},H=L.Z.ul(x||(x=(0,k.Z)(["\n  padding: 0;\n  margin: 0;\n"]))),O=function(){var n=(0,b.v9)(C).sort((function(n,e){return n.name.toLowerCase()>e.name.toLowerCase()?1:-1}));return(0,N.jsx)(H,{children:n.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,N.jsx)($,{id:r,name:e,number:t},r)}))})};function Q(){var n=(0,b.I0)(),e=(0,b.v9)(w),t=(0,b.v9)(Z);return(0,h.useEffect)((function(){n((0,v.yF)())}),[n]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(_,{title:"Phonebook",children:(0,N.jsx)(q,{})}),(0,N.jsxs)(_,{title:"Contacts",children:[(0,N.jsx)(J,{}),e&&!t&&(0,N.jsx)("b",{children:"Request in progress"}),(0,N.jsx)(O,{})]})]})}}}]);
//# sourceMappingURL=345.227fd7bb.chunk.js.map