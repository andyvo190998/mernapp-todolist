(this.webpackJsonpcrudoperation=this.webpackJsonpcrudoperation||[]).push([[0],{40:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),o=n(16),r=n.n(o),a=n(4),d=n(3),s=n(5),l=n(6),u=n.n(l),j=n(0),p=function(){var t=Object(c.useState)({activity:"",description:""}),e=Object(s.a)(t,2),n=e[0],i=e[1],o=Object(c.useState)([{activity:"",description:"",_id:""}]),r=Object(s.a)(o,2),l=r[0],p=r[1];Object(c.useEffect)((function(){fetch("/todos").then((function(t){return t.json()})).then((function(t){return p(t)})).catch((function(t){return console.log(t)}))}),[l]);var b=Object(c.useState)(!1),v=Object(s.a)(b,2),O=v[0],h=v[1],x=Object(c.useState)({activity:"",description:"",id:""}),y=Object(s.a)(x,2),f=y[0],g=y[1],m=function(t){var e=t.target,c=e.name,o=e.value;i((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(a.a)({},c,o))})),console.log(n)},C=function(t){var e=t.target,n=e.name,c=e.value;g((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(a.a)({},n,c))})),console.log(f)};return Object(j.jsxs)("div",{children:[O?Object(j.jsxs)("div",{style:{textAlign:"center"},children:[Object(j.jsx)("input",{onChange:C,value:f.activity,type:"text",name:"activity",placeholder:"activity"}),Object(j.jsx)("input",{onChange:C,value:f.description,type:"text",name:"description",placeholder:"description"}),Object(j.jsx)("button",{onClick:function(){return t=f.id,u.a.put("/put/"+t,f),alert("todo updated"),console.log("item updated with id: ".concat(t)),g({activity:"",description:""}),void h(!1);var t},children:"update todo"})]}):Object(j.jsxs)("div",{style:{textAlign:"center"},children:[Object(j.jsx)("input",{onChange:m,value:n.activity,type:"text",name:"activity",placeholder:"activity"}),Object(j.jsx)("input",{onChange:m,value:n.description,type:"text",name:"description",placeholder:"description"}),Object(j.jsx)("button",{onClick:function(t){t.preventDefault();var e={activity:n.activity,description:n.description};u.a.post("/newtodo",e),i({activity:"",description:""})},children:"add todo"})]}),Object(j.jsx)("div",{style:{paddingBottom:"40px"}}),l.map((function(t){return Object(j.jsxs)("div",{style:{border:"solid black 1px",textAlign:"center",justifyContent:"center"},children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{style:{color:"red"},children:"ACTIVITY: "}),t.activity]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{style:{color:"red"},children:"DESCRIPTION: "}),t.description]}),Object(j.jsx)("button",{onClick:function(){return e=t._id,u.a.delete("/delete/"+e),alert("todo deleted"),void console.log("deleted todo with ".concat(e));var e},children:"delete"}),Object(j.jsx)("button",{onClick:function(){return e=t._id,h(!0),void g((function(t){return Object(d.a)(Object(d.a)({},t),{},{id:e})}));var e},children:"update"})]},t._id)}))]})};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.5aa88074.chunk.js.map