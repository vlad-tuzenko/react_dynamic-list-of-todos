(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){},21:function(e,t,s){},22:function(e,t,s){"use strict";s.r(t);var n=s(9),c=s.n(n),r=s(2),a=s(3),i=s(5),o=s(4),l=s(1),d=s.n(l),u=(s(16),s(17),s(7)),h=s.n(u),j=(s(18),s(0)),p=function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={titleQuery:"",selectedStatus:"all"},e.handleChange=function(t){var s=t.target,n=s.name,c=s.value;switch(n){case"titleQuery":e.setState({titleQuery:c});break;case"selectedStatus":e.setState({selectedStatus:c})}},e.filterTodo=function(){var t=e.props.todos,s=e.state,n=s.titleQuery;switch(s.selectedStatus){case"active":return t.filter((function(e){return!e.completed&&e.title.includes(n)}));case"completed":return t.filter((function(e){return e.completed&&e.title.includes(n)}));default:return t.filter((function(e){return e.title.includes(n)}))}},e}return Object(a.a)(s,[{key:"render",value:function(){var e=this.props,t=e.selectedUser,s=e.onSelectUser,n=this.state,c=n.titleQuery,r=n.selectedStatus,a=this.filterTodo();return Object(j.jsxs)("div",{className:"TodoList",children:[Object(j.jsx)("h2",{children:"Todos:"}),Object(j.jsxs)("form",{className:"TodoList__form",children:[Object(j.jsxs)("label",{htmlFor:"title-input",children:["Todo title:",Object(j.jsx)("input",{className:"TodoList__form-input",type:"text",name:"titleQuery",id:"title-input",placeholder:"type title here...",value:c,onChange:this.handleChange})]}),Object(j.jsxs)("label",{htmlFor:"select-status",children:["Todo status:",Object(j.jsxs)("select",{className:"TodoList__form-select",name:"selectedStatus",id:"select-status",value:r,onChange:this.handleChange,children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"active",children:"Active"}),Object(j.jsx)("option",{value:"completed",children:"Completed"})]})]})]}),Object(j.jsx)("div",{className:"TodoList__list-container",children:Object(j.jsx)("ul",{className:"TodoList__list",children:a.map((function(e){var n=e.completed,c=e.title,r=e.id,a=e.userId,i=e.userId===t;return Object(j.jsxs)("li",{className:h()("TodoList__item",{"TodoList__item--checked":n,"TodoList__item--unchecked":!n}),children:[Object(j.jsxs)("label",{htmlFor:"input-checkbox",children:[Object(j.jsx)("input",{type:"checkbox",checked:n,id:"input-checkbox",readOnly:!0}),Object(j.jsx)("p",{children:c})]}),Object(j.jsx)("button",{className:h()("button","TodoList__user-button",{"TodoList__user-button--selected":i}),type:"button",onClick:function(){return s(a)},children:"User #".concat(a)})]},r)}))})})]})}}]),s}(d.a.Component),b=s(11),m=s(8),f=s.n(m),O=function(){var e=Object(b.a)(f.a.mark((function e(t){var s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((s=e.sent).ok){e.next=5;break}throw new Error("HTTP error! status: ".concat(s.status));case 5:return e.abrupt("return",s.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t="https://mate.academy/students-api/users/".concat(e);return O(t)},x=(s(21),function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={id:0,name:"",email:"",phone:"",isLoading:!1},e.fetchUser=function(){e.setState({isLoading:!0}),v(e.props.userId).then((function(t){var s=t.id,n=t.name,c=t.email,r=t.phone;return e.setState({id:s,name:n,email:c,phone:r})})).finally((function(){return e.setState({isLoading:!1})}))},e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){this.fetchUser()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.fetchUser()}},{key:"render",value:function(){var e=this.state,t=e.id,s=e.name,n=e.email,c=e.phone,r=e.isLoading;return Object(j.jsx)("div",{className:"CurrentUser",children:r?"Loading user data... Please, wait":Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"CurrentUser__title",children:Object(j.jsx)("span",{children:"Selected user: ".concat(t)})}),Object(j.jsx)("h3",{className:"CurrentUser__name",children:s}),Object(j.jsx)("p",{className:"CurrentUser__email",children:n}),Object(j.jsx)("p",{className:"CurrentUser__phone",children:c}),Object(j.jsx)("button",{className:"button CurrentUser__clear",type:"button",onClick:this.props.clearUser,children:"Clear"})]})})}}]),s}(d.a.Component)),_=function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={selectedUserId:0,todos:[],isLoading:!1},e.onSelectUser=function(t){e.setState({selectedUserId:t})},e.clearSelectedUser=function(){e.setState({selectedUserId:0})},e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),O("https://mate.academy/students-api/todos").then((function(t){return e.setState({todos:t})})).finally((function(){return e.setState({isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.todos,s=e.selectedUserId,n=e.isLoading;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"App__sidebar",children:n?"Loading todos list... Please, wait":Object(j.jsx)(p,{todos:t,selectedUser:s,onSelectUser:this.onSelectUser})}),Object(j.jsx)("div",{className:"App__content",children:Object(j.jsx)("div",{className:"App__content-container",children:s?Object(j.jsx)(x,{userId:s,clearUser:this.clearSelectedUser}):"No user selected"})})]})}}]),s}(d.a.Component),y=_;c.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8a3cb8e4.chunk.js.map