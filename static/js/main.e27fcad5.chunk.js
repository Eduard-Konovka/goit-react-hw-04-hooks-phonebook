(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={section:"Section_section__2vKNa",title:"Section_title__a_j79"}},11:function(t,e,n){t.exports={filter:"Filter_filter__3b0Di",input:"Filter_input__2SFZ0"}},12:function(t,e,n){t.exports={list:"ContactList_list__1CzjH",item:"ContactList_item__4OSoF"}},2:function(t,e,n){t.exports={form:"ContactForm_form__2qqte",label:"ContactForm_label__3sXO0",title:"ContactForm_title__1Jqco",input:"ContactForm_input__3rNJj",btn:"ContactForm_btn__1f81n"}},21:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(13),i=n.n(c),s=(n(21),n(16)),o=n(4),l=n(5),u=n(7),m=n(6),b=n(14),j=n.n(b),d=n(9),h=n.n(d),f=n(0);var p=function(t){var e=t.title,n=t.children;return Object(f.jsxs)("div",{className:h.a.container,children:[e&&Object(f.jsx)("h1",{className:h.a.title,children:e}),n]})},_=n(10),O=n.n(_);var v=function(t){var e=t.title,n=t.children;return Object(f.jsxs)("section",{className:O.a.section,children:[e&&Object(f.jsx)("h2",{className:O.a.title,children:e}),n]})},x=n(15),C=n(2),g=n.n(C),N=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.hendleChenge=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(x.a)({},a,r))},t.hendleSubmite=function(e){e.preventDefault(),t.props.forSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=this.hendleChenge,r=this.hendleSubmite;return Object(f.jsx)("form",{onSubmit:r,className:g.a.form,children:Object(f.jsxs)("label",{className:g.a.label,children:[Object(f.jsx)("p",{className:g.a.title,children:"Name"}),Object(f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:a,className:g.a.input}),Object(f.jsx)("p",{className:g.a.title,children:"Number"}),Object(f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:a,className:g.a.input}),Object(f.jsx)("button",{className:g.a.btn,children:"Add contact"})]})})}}]),n}(a.Component),S=N,y=n(11),F=n.n(y),A=function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{className:F.a.filter,children:["Find contacts by name:",Object(f.jsx)("input",{type:"text",value:e,className:F.a.input,onChange:n})]})},w=n(12),k=n.n(w),q=function(t){var e=t.contacts;return Object(f.jsx)("ul",{className:k.a.list,children:e.map((function(t){return Object(f.jsx)("li",{className:k.a.item,children:"".concat(t.name,": ").concat(t.number)},t.id)}))})},z=(n(31),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){var n=e.name,a=e.number,r=t.state.contacts,c={id:j.a.generate(),name:n,number:a};t.setState({contacts:[].concat(Object(s.a)(r),[c])})},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.formSubmitHandler,n=this.changeFilter,a=this.getVisibleContacts();return Object(f.jsxs)(p,{title:"Phonebook",children:[Object(f.jsx)(v,{children:Object(f.jsx)(S,{forSubmit:e})}),Object(f.jsxs)(v,{title:"Contacts",children:[Object(f.jsx)(A,{value:t,onChange:n}),Object(f.jsx)(q,{contacts:a})]})]})}}]),n}(a.Component)),J=z;i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(J,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={container:"Container_container__3ZByP",title:"Container_title__2_0ED"}}},[[32,1,2]]]);
//# sourceMappingURL=main.e27fcad5.chunk.js.map