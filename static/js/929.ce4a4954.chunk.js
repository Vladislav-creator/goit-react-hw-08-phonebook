"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[929],{3929:function(n,e,t){t.r(e),t.d(e,{default:function(){return bn}});var r,a,i,o,s,c,l,d,u,p,m,x,b,f,g,h,v,Z,j,w,y,C,k=t(2791),F=t(9434),L=t(3634),z=t(6916),E=function(n){return n.contacts.items},A=function(n){return n.contacts.isLoading},N=function(n){return n.contacts.error},Y=function(n){return n.filters},_=(0,z.P1)([E,Y],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),q=t(168),I=t(7686),D=I.Z.section(r||(r=(0,q.Z)(["\n  margin: auto;\n  margin-bottom: 15px;\n  padding: 20px;\n  display: grid;\n  justify-content: center;\n  justify-items: center;\n  gap: 14px;\n  background: rgba(138, 43, 226, 0.8);\n  max-width: 500px;\n  border-radius: 2%;\n"]))),P=I.Z.h2(a||(a=(0,q.Z)(["\n  margin: 0;\n"]))),B=t(184),J=function(n){var e=n.title,t=n.children;return(0,B.jsxs)(D,{children:[(0,B.jsx)(P,{children:e}),t]})},K=I.Z.form(i||(i=(0,q.Z)([""]))),M=I.Z.label(o||(o=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 0.25em;\n"]))),S=I.Z.input(s||(s=(0,q.Z)(["\n  width: 250px;\n  padding: 5px;\n  border-radius: 5px;\n"]))),T=I.Z.button(c||(c=(0,q.Z)(["\n  border-radius: 5px;\n  margin-top: 0.5em;\n  padding: 0.25em 1em;\n  cursor: pointer;\n"]))),V=function(){var n=(0,F.I0)(),e=(0,F.v9)(E);return(0,B.jsxs)(K,{onSubmit:function(t){t.preventDefault();var r=t.target,a=t.target.elements.name.value,i=t.target.elements.number.value;return e.some((function(n){return n.name.toLowerCase()===a.toLowerCase()}))?alert("".concat(a," is already in contacts")):e.some((function(n){return n.number===i}))?alert("".concat(i," is already in contacts")):(n((0,L.uK)({name:a,number:i})),void r.reset())},autoComplete:"off",children:[(0,B.jsxs)(M,{children:["Name",(0,B.jsx)(S,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name",value:e.name})]}),(0,B.jsxs)(M,{children:["Number",(0,B.jsx)(S,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter number",value:e.number})]}),(0,B.jsx)(T,{type:"submit",children:"Add contact"})]})},G=t(3165),R=I.Z.label(l||(l=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 16px;\n  font-weight: 500;\n"]))),$=I.Z.input(d||(d=(0,q.Z)(["\n  width: 250px;\n  padding: 5px;\n  border-radius: 5px;\n"]))),H=function(){var n=(0,F.v9)(Y),e=(0,F.I0)();return(0,B.jsxs)("div",{children:[(0,B.jsx)(R,{children:"Find contacts by name"}),(0,B.jsx)($,{type:"text",value:n,onChange:function(n){var t=n.target.value.toLowerCase().trim();e((0,G.p)(t))}})]})},O=t(6172),Q=I.Z.form(u||(u=(0,q.Z)(["\nwidth: 300px;\njustify-content: center;\nalign-items: center;\npadding: 25px;\n\nmargin-left: auto;\nmargin-right: auto;\nbackground-color: burlywood;\nborder: 2px solid black;\nborder-radius: 15px;\n"]))),U=I.Z.input(p||(p=(0,q.Z)(["\nwidth: 100%;\npadding: 5px;\nmargin-top: 10px;\nmargin-bottom: 10px;\n"]))),W=I.Z.label(m||(m=(0,q.Z)(["\nfont-size: large;\n    font-weight: bold;\n    color: #000000;\n"]))),X=I.Z.button(x||(x=(0,q.Z)(["\nappearance: none;\nbackground-color: #FFFFFF;\nborder-radius: 40em;\nborder-style: none;\nbox-shadow: #BA55D3 0 -12px 6px inset;\nbox-sizing: border-box;\ncolor: #000000;\ncursor: pointer;\ndisplay: inline-block;\nfont-family: -apple-system, sans-serif;\nfont-size: 1.2rem;\nfont-weight: 700;\nletter-spacing: -.24px;\nmargin-top: 15px;\noutline: none;\npadding: 1rem 1.3rem;\nquotes: auto;\ntext-align: center;\ntext-decoration: none;\ntransition: all .15s;\nuser-select: none;\n-webkit-user-select: none;\ntouch-action: manipulation;\n}\n\n.button:hover {\nbackground-color: #FFC229;\nbox-shadow: #FF6314 0 -6px 8px inset;\ntransform: scale(1.125);\n}\n\n.button:active {\ntransform: scale(1.025);\n"]))),nn=function(){var n=(0,F.v9)(E),e=(0,F.v9)(O.rC),t=e.name,r=e.number,a=e.id,i=n.filter((function(n){return n.name!==t})),o=n.filter((function(n){return n.number!==r})),s=(0,F.I0)();return(0,B.jsxs)(Q,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget,t=e.elements.name.value,r=e.elements.number.value;i.some((function(n){return n.name.toLocaleLowerCase()===t.toLocaleLowerCase()}))?alert("".concat(t," is already in contacts")):o.some((function(n){return n.number===r}))?alert("".concat(r," is already used")):(s((0,L.mP)({id:a,newContactData:{name:t,number:r}})),s((0,O.tY)(!1)),s((0,O.sp)(null))),e.reset()},children:[(0,B.jsx)(W,{htmlFor:a,children:"New Name"}),(0,B.jsx)(U,{type:"text",name:"name",defaultValue:t,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",id:a,required:!0}),(0,B.jsx)(W,{htmlFor:a,children:"New Number"}),(0,B.jsx)(U,{type:"tel",name:"number",defaultValue:r,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",id:a,required:!0}),(0,B.jsx)(X,{type:"submit",children:"Edit contact"})]})},en=I.Z.div(b||(b=(0,q.Z)(["\nposition: fixed;\nleft: 0;\nright: 0;\ntop: 0;\nbottom: 0;\nbackground-color: rgba(0, 0, 0, 0.4);\ntransition: opacity 300ms linear, visibility 300ms linear;\nz-index: 1;\n"]))),tn=I.Z.div(f||(f=(0,q.Z)(["\nposition: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scaleY(1);\n\n    height: 420px;\n    width: 380px;\n    background: #FCFCFC;\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 2px 1px rgba(0, 0, 0, 0.2);\n    border-radius: 4px;\n    transition: transform 300ms linear;\n    padding: 24px;\n"]))),rn=I.Z.p(g||(g=(0,q.Z)(["\ncolor: rgb(0, 0, 0);\nfont-size: larger;\nfont-weight: 700;\npadding-bottom: 15px;\npadding-top: 25px;\ntext-align: center;\n"]))),an=I.Z.button(h||(h=(0,q.Z)(["\nposition: absolute;\n    top: 24px;\n    right: 24px;\n    cursor: pointer;\n"]))),on=function(){var n=(0,F.I0)();return(0,k.useEffect)((function(){var e=function(e){"Escape"===e.code&&(n((0,O.tY)(!1)),n((0,O.sp)(null)))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}})),(0,B.jsx)(en,{onClick:function(e){e.currentTarget===e.target&&(n((0,O.tY)(!1)),n((0,O.sp)(null)))},children:(0,B.jsxs)(tn,{children:[(0,B.jsx)(rn,{children:"You are trying to change the next contact:"}),(0,B.jsx)(an,{onClick:function(){n((0,O.tY)(!1)),n((0,O.sp)(null))},children:"\xd7"}),(0,B.jsx)(nn,{})]})})},sn=I.Z.li(v||(v=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid black;\n  padding: 7px;\n"]))),cn=I.Z.p(Z||(Z=(0,q.Z)(["\n  margin: 0;\n  font-weight: 500;\n  text-align: start;\n"]))),ln=I.Z.span(j||(j=(0,q.Z)(["\n  margin-left: 10px;\n  text-align: end;\n"]))),dn=I.Z.button(w||(w=(0,q.Z)(["\n  margin: 5px;\n  padding: 4px 14px;\n  border-radius: 5px;\n  cursor: pointer;\n"]))),un=I.Z.div(y||(y=(0,q.Z)(["\n display: flex;\nflex-wrap: wrap;\n align-items: center;\n   justify-content: center;\n //justify-content: space-between;\n// gap: 5px;\n"]))),pn=function(n){var e=n.name,t=n.number,r=n.id,a=(0,F.I0)(),i=(0,F.v9)(O.Yh),o=document.body;i?o.classList.add("disable-scroll"):o.classList.remove("disable-scroll");(0,k.useEffect)((function(){}),[]);return(0,B.jsxs)("div",{children:[i&&(0,B.jsx)(on,{}),(0,B.jsxs)(sn,{children:[(0,B.jsxs)(un,{children:[(0,B.jsxs)(cn,{children:[e,":"]}),(0,B.jsx)(ln,{children:t})]}),(0,B.jsxs)(un,{children:[(0,B.jsx)(dn,{onClick:function(){return n=r,void a((0,L.GK)(n));var n},children:"Delete"}),(0,B.jsx)(dn,{type:"button",onClick:function(){a((0,O.tY)(!0)),a((0,O.sp)({name:e,number:t,id:r}))},children:"Edit"})]})]},r)]})},mn=I.Z.ul(C||(C=(0,q.Z)(["\n  padding: 0;\n  margin: 0;\n"]))),xn=function(){var n=(0,F.v9)(_).sort((function(n,e){return n.name.toLowerCase()>e.name.toLowerCase()?1:-1}));return(0,B.jsx)(mn,{children:n.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,B.jsx)(pn,{id:r,name:e,number:t},r)}))})};function bn(){var n=(0,F.I0)(),e=(0,F.v9)(A),t=(0,F.v9)(N);return(0,k.useEffect)((function(){n((0,L.yF)())}),[n]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(J,{title:"Phonebook",children:(0,B.jsx)(V,{})}),(0,B.jsxs)(J,{title:"Contacts",children:[(0,B.jsx)(H,{}),e&&!t&&(0,B.jsx)("b",{children:"Request in progress"}),(0,B.jsx)(xn,{})]})]})}}}]);
//# sourceMappingURL=929.ce4a4954.chunk.js.map