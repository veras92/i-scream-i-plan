"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[829],{5829:function(e,r,t){t.r(r),t.d(r,{default:function(){return y}});var n=t(1413),a=t(8776),i=t(4695),s=new RegExp("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"),o=t(6727),c=o.Ry().shape({name:o.Z_().required("This field is required").matches(s,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").max(16,"Name may contain only 16 characters"),email:o.Z_().email("Invalid email format").required(),password:o.Z_().required("This field is required").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,"Password must contain minimum 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit")}),d=t(4942);var l=t(5970),u=t(184),m=function(e){var r,t=e.id,a=e.inputName,i=e.type,s=e.placeholder,o=e.register,c=e.required,d=e.errors;return(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:t,children:(r=a,r.charAt(0).toUpperCase()+r.slice(1))}),(0,u.jsx)("input",(0,n.Z)({id:t,type:i,placeholder:s},o(a,{required:c}))),(0,u.jsx)(l.B,{errors:d,name:a})]})},p=t(8690),h=[{inputName:"name",type:"text",id:(0,p.x0)(),required:!0,placeholder:"Enter your name"},{inputName:"email",type:"email",id:(0,p.x0)(),required:!0,placeholder:"Enter email"},{inputName:"password",type:"password",id:(0,p.x0)(),required:!0,placeholder:"Enter password"}];t(2791);var f,x=t.p+"static/media/sprite.631e29e968f846b4a9018fa0b71a17d8.svg",j=t(168),g=t(4934).Z.svg(f||(f=(0,j.Z)(["\n  fill: transparent;\n  stroke: #ffffff;\n  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    stroke: rgba(17, 17, 17, 0.1);\n  }\n"]))),v=h.reduce((function(e,r){return(0,n.Z)((0,n.Z)({},e),{},(0,d.Z)({},r.inputName,""))}),{}),Z=function(){var e=(0,a.cI)({resolver:(0,i.X)(c),defaultValues:v}),r=e.register,t=e.handleSubmit,s=e.reset,o=e.formState.errors;return(0,u.jsxs)("form",{onSubmit:t((function(e){console.log(e),s()})),autoComplete:"false",children:[h.map((function(e){return(0,u.jsx)(m,(0,n.Z)((0,n.Z)({},e),{},{register:r,errors:o}),e.id)})),(0,u.jsxs)("button",{type:"submit",children:[(0,u.jsx)("span",{children:"Sign up"}),(0,u.jsx)(g,{width:"20",height:"20",children:(0,u.jsx)("use",{href:"".concat(x,"#icon-Log-in")})})]})]})},b=t(4701),w="/login";function y(){return(0,u.jsx)("div",{children:(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"Sign Up"}),(0,u.jsx)(Z,{})]}),(0,u.jsx)(b.E,{route:w,content:"Log In"})]})})}},4701:function(e,r,t){t.d(r,{E:function(){return i}});var n=t(1087),a=t(184),i=function(e){var r=e.route,t=e.content;return(0,a.jsx)(n.rU,{to:r,children:t})}}}]);
//# sourceMappingURL=829.07765136.chunk.js.map