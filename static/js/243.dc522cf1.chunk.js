"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[243],{3243:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,a,i,s,o,c,u,d,l,p,m,x,f,h=t(2791),g=t(9434),b=t(3634),Z=t(6916),j=function(n){return n.contacts.items},v=function(n){return n.contacts.isLoading},y=function(n){return n.contacts.error},w=function(n){return n.filters},C=(0,Z.P1)([j,w],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),k=t(168),_=t(7686),A=_.Z.section(r||(r=(0,k.Z)(["\n  margin: auto;\n  padding: 20px;\n  display: grid;\n  justify-content: center;\n  justify-items: center;\n  gap: 14px;\n"]))),L=_.Z.h2(a||(a=(0,k.Z)(["\n  margin: 0;\n"]))),z=t(184),F=function(n){var e=n.title,t=n.children;return(0,z.jsxs)(A,{children:[(0,z.jsx)(L,{children:e}),t]})},I=_.Z.form(i||(i=(0,k.Z)([""]))),q=_.Z.label(s||(s=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 0.25em;\n"]))),E=_.Z.input(o||(o=(0,k.Z)(["\n  width: 250px;\n  padding: 5px;\n  border-radius: 5px;\n"]))),N=_.Z.button(c||(c=(0,k.Z)(["\n  border-radius: 5px;\n  margin-top: 0.5em;\n  padding: 0.25em 1em;\n  cursor: pointer;\n"]))),P=function(){var n=(0,g.I0)(),e=(0,g.v9)(j);return(0,z.jsxs)(I,{onSubmit:function(t){t.preventDefault();var r=t.target,a=t.target.elements.name.value.toLowerCase(),i=t.target.elements.number.value;return e.some((function(n){return n.name.toLowerCase()===a}))?alert("".concat(a," is already in contacts")):e.some((function(n){return n.number===i}))?alert("".concat(i," is already in contacts")):(n((0,b.uK)({name:a,number:i})),void r.reset())},autoComplete:"off",children:[(0,z.jsxs)(q,{children:["Name",(0,z.jsx)(E,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name",value:e.name})]}),(0,z.jsxs)(q,{children:["Number",(0,z.jsx)(E,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter number",value:e.number})]}),(0,z.jsx)(N,{type:"submit",children:"Add contact"})]})},D=t(3165),K=_.Z.label(u||(u=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 16px;\n  font-weight: 500;\n"]))),B=_.Z.input(d||(d=(0,k.Z)(["\n  width: 250px;\n  padding: 5px;\n  border-radius: 5px;\n"]))),G=t(5984),J=function(){var n=(0,g.v9)(w),e=(0,g.I0)(),t=(0,G.x0)();return(0,z.jsxs)("div",{children:[(0,z.jsx)(K,{htmlFor:t,children:"Find contacts by name"}),(0,z.jsx)(B,{type:"text",id:t,value:n,onChange:function(n){var t=n.target.value.toLowerCase().trim();e((0,D.p)(t))}})]})},M=_.Z.li(l||(l=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),R=_.Z.p(p||(p=(0,k.Z)(["\n  margin: 0;\n  font-weight: 500;\n"]))),S=_.Z.span(m||(m=(0,k.Z)(["\n  margin-left: 10px;\n"]))),$=_.Z.button(x||(x=(0,k.Z)(["\n  margin: 8px;\n  padding: 4px 14px;\n  border-radius: 5px;\n  cursor: pointer;\n"]))),H=function(n){var e=(0,g.I0)();return(0,z.jsxs)(M,{children:[(0,z.jsxs)(R,{children:[n.name,":",(0,z.jsx)(S,{children:n.number})]}),(0,z.jsx)($,{onClick:function(){return t=n.id,void e((0,b.GK)(t));var t},children:"Delete"})]},n.id)},O=_.Z.ul(f||(f=(0,k.Z)(["\n  padding: 0;\n  margin: 0;\n"]))),Q=function(){var n=(0,g.v9)(C);return(0,z.jsx)(O,{children:n.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,z.jsx)(H,{id:r,name:e,number:t},r)}))})};function T(){var n=(0,g.I0)(),e=(0,g.v9)(v),t=(0,g.v9)(y);return(0,h.useEffect)((function(){n((0,b.yF)())}),[n]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(F,{title:"Phonebook",children:(0,z.jsx)(P,{})}),(0,z.jsxs)(F,{title:"Contacts",children:[(0,z.jsx)(J,{}),e&&!t&&(0,z.jsx)("b",{children:"Request in progress"}),(0,z.jsx)(Q,{})]})]})}}}]);
//# sourceMappingURL=243.dc522cf1.chunk.js.map