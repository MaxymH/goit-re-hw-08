"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[583],{8583:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(9358),r=n(2791),s=n(5048),c="filter_container__PmTHW",i="filter_input__vjfXX",l=n(184);var u=function(e){var t=e.onChange,n=e.filter;return(0,l.jsxs)("div",{className:c,children:[(0,l.jsxs)("label",{htmlFor:"filter",children:[" ","Find contact"]}),(0,l.jsx)("input",{className:i,value:n,id:"filter",type:"text",name:"filter",onChange:t})]})},o=function(e){var t=e.title;return(0,l.jsx)("h2",{children:t})},d=n(885),m="form_form__vOz1-",f="form_title__PJs+X",h="form_input__NlTMx",_="form_button__vcM7R",v=function(e){var t=e.onSubmit,n=(0,r.useState)(""),a=(0,d.Z)(n,2),s=a[0],c=a[1],i=(0,r.useState)(""),u=(0,d.Z)(i,2),o=u[0],v=u[1],x=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":v(a);break;default:return}};return(0,l.jsxs)("form",{className:m,onSubmit:function(e){e.preventDefault(),t({name:s,number:o}),c(""),v("")},children:[(0,l.jsx)("h3",{className:f,children:"Name"}),(0,l.jsx)("label",{children:(0,l.jsx)("input",{className:h,onChange:x,value:s,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,l.jsx)("h3",{className:f,children:"Number"}),(0,l.jsx)("label",{children:(0,l.jsx)("input",{className:h,onChange:x,value:o,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,l.jsx)("button",{className:_,type:"submit",children:"Add contact"})]})},x="contactListItem_button__bf3vy",p="contactListItem_item__J87JM",b=function(e){var t=e.options,n=e.deleted,a=(0,d.Z)(t,3),r=a[0],s=a[1],c=a[2];return(0,l.jsxs)("li",{className:p,children:[r,": ",s,(0,l.jsx)("button",{className:x,type:"button",onClick:function(){return n(c)},children:"Delete"})]})},j=function(e){var t=e.contacts,n=e.deleted,a=t.map((function(e){var t=e.id,a=e.name,r=e.number;return(0,l.jsx)(b,{options:[a,r,t],deleted:n},t)}));return(0,l.jsx)("ul",{children:a})};j.defaultProps={contacts:[]};var N=j,C=function(e){return e.contacts.items},k=function(e){return e.contacts.loading},g=function(e){return e.contacts.error},w=function(e){return e.filter},y=n(1246),P=function(){var e=(0,s.I0)(),t=(0,s.v9)(C,s.wU),n=(0,s.v9)(k,s.wU),a=(0,s.v9)(g,s.wU),c=(0,s.v9)(w,s.wU);(0,r.useEffect)((function(){e((0,y.sb)())}),[e]);var i=(0,r.useCallback)((function(t){return e((0,y.uK)(t))}),[e]),d=(0,r.useCallback)((function(t){return e((0,y.zY)(t))}),[e]),m=(0,r.useCallback)((function(t){e(y.hX(t.target.value))}),[e]);return(0,l.jsxs)("div",{children:[(0,l.jsx)(o,{title:"Phonebook"}),(0,l.jsx)(v,{onSubmit:i}),(0,l.jsx)(o,{title:"Contacts"}),(0,l.jsx)(u,{onChange:m,filter:c||""}),(0,l.jsx)(N,{contacts:function(){if(!c)return t;var e=c.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),deleted:d}),!n||(0,l.jsx)("p",{children:"loading...."}),!a||(0,l.jsx)("p",{children:a.massage})]})},Z=function(){return(0,l.jsx)(a.Z,{title:"PhoneBook",children:(0,l.jsx)(P,{})})}},9358:function(e,t,n){n.d(t,{Z:function(){return i}});var a="section_section__QWjNu",r="section_title__PalJW",s=n(184);function c(e){var t=e.title,n=e.children;return(0,s.jsxs)("div",{className:a,children:[(0,s.jsx)("h2",{className:r,children:t}),n]})}c.defaultProps={title:""};var i=c}}]);
//# sourceMappingURL=583.f2c59011.chunk.js.map