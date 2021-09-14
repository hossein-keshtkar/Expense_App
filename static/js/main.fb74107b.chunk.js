(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(9),l=n.n(s),i=(n(15),n(5)),r=n(2),u=(n(16),n(8),n(17),n(18),n(0)),j=function(e){var t="card "+e.className;return Object(u.jsx)("div",{className:t,children:e.children})},o=(n(20),function(e){return Object(u.jsx)("div",{className:"expenses-filter",children:Object(u.jsxs)("div",{className:"expenses-filter__control",children:[Object(u.jsx)("span",{children:"Filter by year"}),Object(u.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(u.jsx)("option",{value:"2022",children:"2022"}),Object(u.jsx)("option",{value:"2021",children:"2021"}),Object(u.jsx)("option",{value:"2020",children:"2020"}),Object(u.jsx)("option",{value:"2019",children:"2019"})]})]})})}),d=(n(21),n(22),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(u.jsxs)("div",{className:"expense-date",children:[Object(u.jsx)("div",{className:"expense-date__month",children:t}),Object(u.jsx)("div",{className:"expense-date__day",children:n}),Object(u.jsx)("div",{className:"expense-date__year",children:a})]})}),b=function(e){return Object(u.jsxs)("div",{className:"expense-item",children:[Object(u.jsx)(d,{date:e.date}),Object(u.jsxs)("div",{className:"expense-item__description",children:[Object(u.jsx)("h2",{children:e.title}),Object(u.jsxs)("div",{className:"expense-item__price",children:["$",e.price]})]})]})},x=(n(23),function(e){return 0===e.items.length?Object(u.jsx)("h2",{className:"expenses-list__fallback",children:"No Expenses Found!"}):Object(u.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(u.jsx)(b,{title:e.title,date:e.date,price:e.amount},e.id)}))})}),v=n(10),O=(n(24),n(25),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(u.jsxs)("div",{className:"chart-bar",children:[Object(u.jsx)("div",{className:"chart-bar__inner",children:Object(u.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(u.jsx)("div",{className:"chart-bar__lable",children:e.lable})]})}),h=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(i.a)(t));return Object(u.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(u.jsx)(O,{maxValue:n,lable:e.lable,value:e.value},e.id)}))})},m=function(e){var t,n=[{lable:"Jan",value:0},{lable:"Feb",value:0},{lable:"Mar",value:0},{lable:"Apr",value:0},{lable:"May",value:0},{lable:"Jun",value:0},{lable:"Jul",value:0},{lable:"Aug",value:0},{lable:"Sep",value:0},{lable:"Oct",value:0},{lable:"Nov",value:0},{lable:"Dec",value:0}],a=Object(v.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(u.jsx)(h,{dataPoints:n})},p=function(e){var t=Object(a.useState)("2021"),n=Object(r.a)(t,2),c=n[0],s=n[1],l=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(u.jsx)("div",{children:Object(u.jsxs)(j,{className:"expenses",children:[Object(u.jsx)(o,{selected:c,onChangeFilter:function(e){s(e)}}),Object(u.jsx)(m,{expenses:l}),Object(u.jsx)(x,{items:l})]})})},f=n(7),_=(n(26),n(27),function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],l=Object(a.useState)(""),i=Object(r.a)(l,2),j=i[0],o=i[1],d=Object(a.useState)(""),b=Object(r.a)(d,2),x=b[0],v=b[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:j,date:new Date(x)};e.onSaveExpenseData(n),s(""),o(""),v("")},children:Object(u.jsxs)("div",{className:"new-expense__controls",children:[Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("span",{children:"Title"}),Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value)}})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("span",{children:"Amount"}),Object(u.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,onChange:function(e){o(e.target.value)}})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("span",{children:"Date"}),Object(u.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){v(e.target.value)}})]}),Object(u.jsx)("div",{className:"new-expense__actions",children:Object(u.jsx)("button",{type:"submit",children:"Add Expense"})})]})})}),N=function(e){return Object(u.jsx)("div",{className:"new-expense",children:Object(u.jsx)(_,{onSaveExpenseData:function(t){var n=Object(f.a)(Object(f.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n)}})})},g=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],y=function(){var e=Object(a.useState)(g),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(N,{onAddExpense:function(e){c((function(t){return[e].concat(Object(i.a)(t))}))}}),Object(u.jsx)(p,{items:n})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),s(e),l(e)}))};l.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),S()}],[[28,1,2]]]);
//# sourceMappingURL=main.fb74107b.chunk.js.map