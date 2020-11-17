(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),i=c.n(s),a=c(17),l=c.n(a),o=(c(25),c(26),c(3)),r=c(2),j=c(5),b=c.n(j),d=function(e){var t=Object(s.useState)(e.pets),c=Object(r.a)(t,2),i=c[0];c[1];return console.log(e.pets),Object(n.jsxs)("table",{className:"table table-striped mt-4",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Name"}),Object(n.jsx)("th",{scope:"col",children:"Type"}),Object(n.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(n.jsx)("tbody",{children:i.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{scope:"row",children:e.name}),Object(n.jsx)("td",{children:e.type}),Object(n.jsxs)("td",{children:[Object(n.jsx)(o.a,{to:"/pets/".concat(e._id),children:"Detail"})," |"," ",Object(n.jsx)(o.a,{to:"/pets/".concat(e._id,"/edit"),children:"Edit"})]})]},t)}))})]})},h=function(e){var t=Object(s.useState)([]),c=Object(r.a)(t,2),i=c[0],a=c[1],l=Object(s.useState)(!1),j=Object(r.a)(l,2),h=j[0],u=j[1];return Object(s.useEffect)((function(){b.a.get("http://localhost:8000/api/pets").then((function(e){a(e.data),u(!0)})).catch((function(e){return console.log(e)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(n.jsx)("h1",{children:"Pet Shelter"}),Object(n.jsx)(o.a,{to:"/pets/new",children:"Add a pet to shelter"})]}),Object(n.jsx)("h3",{children:"These pets are looking for a good home"}),h&&Object(n.jsx)(d,{pets:i})]})},u=function(e){var t=e.initialName,c=e.initialType,i=e.initialDescription,a=e.initialSkillOne,l=e.initialSkillTwo,o=e.initialSkillThree,j=e.err,b=Object(s.useState)(t),d=Object(r.a)(b,2),h=d[0],u=d[1],O=Object(s.useState)(c),p=Object(r.a)(O,2),m=p[0],x=p[1],f=Object(s.useState)(i),g=Object(r.a)(f,2),k=g[0],N=g[1],v=Object(s.useState)(a),S=Object(r.a)(v,2),y=S[0],w=S[1],T=Object(s.useState)(l),P=Object(r.a)(T,2),C=P[0],D=P[1],E=Object(s.useState)(o),L=Object(r.a)(E,2),A=L[0],F=L[1];return Object(n.jsxs)("form",{className:"container mt-4",onSubmit:function(t){t.preventDefault(),e.onSubmitProp({name:h,type:m,description:k,skillOne:y,skillTwo:C,skillThree:A})},children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col",children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Pet Name"})," ",j.name?Object(n.jsx)("span",{className:"small text-danger",children:j.name.message}):null,Object(n.jsx)("input",{className:"form-control",type:"text",value:h,onChange:function(e){return u(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Pet Type"})," ",j.type?Object(n.jsx)("span",{className:"small text-danger",children:j.type.message}):null,Object(n.jsx)("input",{className:"form-control",type:"text",value:m,onChange:function(e){return x(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Pet Description"})," ",j.description?Object(n.jsx)("span",{className:"small text-danger",children:j.description.message}):null,Object(n.jsx)("input",{className:"form-control",type:"text",value:k,onChange:function(e){return N(e.target.value)}})]})]}),Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("h3",{children:"Skills (Optional)"}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Skill One"}),Object(n.jsx)("input",{className:"form-control",type:"text",value:y,onChange:function(e){return w(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Skill Two"}),Object(n.jsx)("input",{className:"form-control",type:"text",value:C,onChange:function(e){return D(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Skill Three"}),Object(n.jsx)("input",{className:"form-control",type:"text",value:A,onChange:function(e){return F(e.target.value)}})]})]})]}),Object(n.jsx)("input",{className:"btn btn-md btn-success",type:"submit",value:e.submitName})]})},O=function(e){var t=Object(s.useState)({}),c=Object(r.a)(t,2),i=c[0],a=c[1];return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(n.jsx)("h1",{children:"Pet Shelter"}),Object(n.jsx)(o.a,{to:"/",children:"back to home"})]}),Object(n.jsx)("h3",{children:"Know a pet needing a home?"}),Object(n.jsx)(u,{onSubmitProp:function(e){var t=e.name,c=e.type,n=e.description,s=e.skillOne,l=e.skillTwo,r=e.skillThree;b.a.post("http://localhost:8000/api/pets/new",{name:t,type:c,description:n,skills:[s,l,r],likes:0}).then((function(e){e.data.errors?(a(e.data.errors),console.log(i)):Object(o.c)("/"),console.log(e.data)})).catch((function(e){return console.log(e)}))},submitName:"Add Pet",err:i,initialName:"",initialType:"",initialDescription:"",initialSkillOne:"",initialSkillTwo:"",initialSkillThree:""})]})},p=c(19),m=function(e){var t=Object(s.useState)({}),c=Object(r.a)(t,2),i=c[0],a=c[1],l=Object(s.useState)(),j=Object(r.a)(l,2),d=j[0],h=j[1],u=Object(s.useState)(!1),O=Object(r.a)(u,2),m=O[0],x=O[1];Object(s.useEffect)((function(){b.a.get("http://localhost:8000/api/pets/".concat(e.id)).then((function(e){h(e.data[0].likes),a(Object(p.a)({},e.data[0]))})).catch((function(e){return console.log(e)}))}),[]);return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(n.jsx)("h1",{children:"Pet Shelter"}),Object(n.jsx)(o.a,{to:"/",children:"back to home"})]}),Object(n.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(n.jsx)("h3",{className:"mt-4",children:i.name?"Details about ".concat(i.name):"Loading Name"}),Object(n.jsxs)("button",{className:"btn btn-sm btn-danger",onClick:function(){b.a.delete("http://localhost:8000/api/pets/".concat(i._id)).then((function(){return Object(o.c)("/")})).catch((function(e){return console.log("Error deleting pet",e)}))},children:["Adopt ",i.name]})]}),Object(n.jsx)("div",{className:"card mt-4",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsxs)("h5",{children:[Object(n.jsx)("b",{children:"Pet Type: "})," ",i.type?"".concat(i.type):"Loading Type"," "]}),Object(n.jsxs)("h5",{children:[Object(n.jsx)("b",{children:"Description: "}),i.description?i.description:"Loading Description"]}),Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsx)("h5",{className:"font-weight-bold d-inline",children:"Skills: "}),Object(n.jsx)("ul",{className:"list-group",children:i.skills?i.skills.map((function(e,t){return Object(n.jsx)("li",{className:"list-group-item border-0 pt-0",children:Object(n.jsx)("h5",{children:e})},t)})):""})]})]})}),Object(n.jsxs)("div",{className:"d-flex align-items-center justify-content-between w-25",children:[Object(n.jsxs)("button",{disabled:m,onClick:function(){h(d+1),b.a.put("http://localhost:8000/api/pets/".concat(i._id),{likes:d+1}).then((function(e){x(!0)})).catch((function(e){return console.log(e)}))},className:"btn btn-lg btn-success mt-4",children:["Like ",i.name]}),Object(n.jsxs)("p",{className:"d-inline-block font-weight-bold m-0",children:[d," likes"]})]})]})},x=function(e){var t=Object(s.useState)(),c=Object(r.a)(t,2),i=c[0],a=c[1],l=e.id,j=Object(s.useState)(""),d=Object(r.a)(j,2),h=d[0],O=d[1],p=Object(s.useState)(""),m=Object(r.a)(p,2),x=(m[0],m[1]),f=Object(s.useState)(""),g=Object(r.a)(f,2),k=(g[0],g[1]),N=Object(s.useState)(""),v=Object(r.a)(N,2),S=(v[0],v[1]),y=Object(s.useState)(""),w=Object(r.a)(y,2),T=(w[0],w[1]),P=Object(s.useState)(""),C=Object(r.a)(P,2),D=(C[0],C[1]),E=Object(s.useState)(!1),L=Object(r.a)(E,2),A=L[0],F=L[1],_=Object(s.useState)({}),B=Object(r.a)(_,2),I=B[0],J=B[1];Object(s.useEffect)((function(){b.a.get("http://localhost:8000/api/pets/".concat(l)).then((function(e){console.log(e.data),a(e.data[0]),O(e.data[0].name),x("".concat(e.data[0].type)),k(e.data[0].description),S(e.data[0].skills[0]),T(e.data[0].skills[1]),D(e.data[0].skills[2]),F(!0)})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}),[]);return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(n.jsx)("h1",{children:"Pet Shelter"}),Object(n.jsx)(o.a,{to:"/",children:"back to home"})]}),Object(n.jsxs)("h3",{children:["Edit ",h]}),A&&Object(n.jsx)(u,{onSubmitProp:function(e){var t=e.name,c=e.type,n=e.description,s=e.skillOne,a=e.skillTwo,r=e.skillThree;b.a.put("http://localhost:8000/api/pets/".concat(l),{name:t,type:c,description:n,skills:[s,a,r]}).then((function(e){e.data.errors?(J(e.data.errors),O(i.name),x("".concat(i.type)),k(i.description),S(i.skills[0]),T(i.skills[1]),D(i.skills[2])):Object(o.c)("/"),console.log(e.data)})).catch((function(e){return console.log(e)}))},submitName:"Edit Pet",err:I,initialName:i.name,initialType:i.type,initialDescription:i.description,initialSkillOne:i.skills[0],initialSkillTwo:i.skills[1],initialSkillThree:i.skills[2]})]})};var f=function(){return Object(n.jsx)("div",{className:"container mt-4",children:Object(n.jsxs)(o.b,{children:[Object(n.jsx)(h,{default:!0,path:"/"}),Object(n.jsx)(O,{path:"/pets/new"}),Object(n.jsx)(m,{path:"/pets/:id"}),Object(n.jsx)(x,{path:"/pets/:id/edit"})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};l.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),g()}},[[50,1,2]]]);
//# sourceMappingURL=main.0f498d7d.chunk.js.map