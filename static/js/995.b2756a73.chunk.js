"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[995],{9596:function(e,t,r){r.r(t),r.d(t,{default:function(){return X}});var n=r(1413),i=r(9439),a=r(2791),o=r(3602),s=r(1134),c=r(4695),l=r(5655),d=r(8007),m=d.Ry().shape({name:d.Z_().required("This field is required").matches(l.cS,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").max(16,"Name may contain only 16 characters"),email:d.Z_().email("Invalid email format").required("This field is required"),password:d.Z_().required("This field is required").matches(l.hS,"Password must contain minimum 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit")}),p=r(6866),f=r(5541),u=r(5273),x=[{inputName:"name",type:"text",id:(0,u.x0)(),label:"Name",placeholder:"Enter your name"},{inputName:"email",type:"email",id:(0,u.x0)(),label:"Email",placeholder:"Enter email"},{inputName:"password",type:"password",id:(0,u.x0)(),label:"Password",placeholder:"Enter password"}],g=r(4701),h=r(3909),b=r.p+"static/media/goose-register.1aedececc7c0f148895c.png",w=r.p+"static/media/goose-register@2x.b7b4cb66d9dbcb2d964e.png",k=r(885),y=r(340);var v=(0,y.Z)("div",{target:"e1pkkwcf6"})({name:"1aa6h7j",styles:"height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1.25rem;background-color:#dcebf7;@media screen and (min-width: 1200px){background:url(../../shared/images/GooseImg/goose-rocket/goose-rocket.png),url(),#dcebf7;background-repeat:no-repeat;background-position-x:calc(50% + (480px / 2) + (368px / 2) + 52px),calc(50% + (480px / 2) + (207px / 2) + 156px);background-position-y:calc(50% + 212px - 66px),calc(50% + 212px - 66px - (717px / 2) + (174px / 2) + 76px);}"}),j=(0,y.Z)("div",{target:"e1pkkwcf5"})({name:"12mffr2",styles:"display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:480px;&>a{position:relative;display:block;font-family:'Inter';font-style:normal;font-weight:600;font-size:0.75rem;line-height:0.875rem;color:var(--main-blue-color);&:before{position:absolute;bottom:0;left:0;content:'';width:100%;height:1px;background-color:var(--main-blue-color);}}"}),Z=(0,y.Z)("form",{target:"e1pkkwcf4"})({name:"vmmn7l",styles:"display:flex;flex-direction:column;gap:24px;width:100%;padding:40px 24px;margin-bottom:1.125rem;background-color:#fff;border-radius:8px;@media (min-width: 576px){padding:40px;}"}),S=(0,y.Z)("div",{target:"e1pkkwcf3"})({name:"1nbsytc",styles:"font-family:'Inter';font-style:normal;font-weight:600;font-size:1.125rem;line-height:1.5rem;color:#3e85f3;text-shadow:0px 47px 355px rgba(0, 0, 0, 0.07),0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);margin-bottom:0.5rem"}),z=(0,y.Z)("svg",{target:"e1pkkwcf2"})({name:"q8i0gf",styles:"fill:transparent;stroke:#ffffff;@keyframes scale-up-hor-left{0%{-webkit-transform:scaleX(0.4);transform:scaleX(0.4);-webkit-transform-origin:0% 0%;transform-origin:0% 0%;}100%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:0% 0%;transform-origin:0% 0%;}}"}),E=(0,y.Z)("button",{target:"e1pkkwcf1"})("display:flex;align-items:center;justify-content:center;column-gap:0.8125rem;padding:14px;margin-top:0.5rem;background:#3e85f3;box-shadow:4px 2px 16px rgba(136, 165, 191, 0.48);border-radius:16px;border:none;font-family:'Inter';font-style:normal;font-weight:600;font-size:0.875rem;line-height:1.125rem;letter-spacing:-0.02em;color:#fff;&:hover ",z,"{animation:scale-up-hor-left 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;}"),q=(0,y.Z)("img",{target:"e1pkkwcf0"})({name:"14lbjjg",styles:"display:none;@media (min-width: 1260px){position:fixed;width:400px;height:454px;left:10px;bottom:0;display:block;}@media (min-width: 1360px){left:50px;}"}),I=r(2941),N=r(184),_=(0,p.O)(x),A=function(){var e=(0,o.DW)(),t=(0,i.Z)(e,2),r=t[0],l=t[1],d=l.isError,p=l.error;(0,a.useEffect)((function(){var e;d&&(0,I.h)((null===p||void 0===p||null===(e=p.data)||void 0===e?void 0:e.message)||"Sorry, something went wrong")}),[p,d]);var u=(0,s.cI)({resolver:(0,c.X)(m),defaultValues:_}),y=u.register,A=u.handleSubmit,C=u.reset,X=u.formState.errors;return(0,N.jsx)(v,{children:(0,N.jsxs)(j,{children:[(0,N.jsxs)(Z,{onSubmit:A((function(e){r(e),C()})),autoComplete:"false",children:[(0,N.jsx)(S,{children:"Sign Up"}),x.map((function(e){return(0,N.jsx)(f.M,(0,n.Z)((0,n.Z)({},e),{},{register:y,errors:X}),e.id)})),(0,N.jsxs)(E,{type:"submit",children:[(0,N.jsx)("span",{children:"Sign up"}),(0,N.jsx)(z,{width:"20",height:"20",children:(0,N.jsx)("use",{href:"".concat(k.Z,"#icon-Log-in")})})]})]}),(0,N.jsx)(g.E,{route:h.Z6.login,content:"Log In"}),(0,N.jsx)(q,{srcset:"".concat(b," 1x, ").concat(w," 2x"),src:"".concat(b),alt:"goose"})]})})},C=r(6907);function X(){return(0,N.jsxs)("div",{children:[(0,N.jsx)(C.ql,{children:(0,N.jsx)("title",{children:"Sign Up"})}),(0,N.jsx)(A,{})]})}},4701:function(e,t,r){r.d(t,{E:function(){return a}});var n=r(1087),i=r(184),a=function(e){var t=e.route,r=e.content;return(0,i.jsx)(n.rU,{to:t,children:r})}},6866:function(e,t,r){r.d(t,{O:function(){return a}});var n=r(4942),i=r(1413),a=function(e){return e.reduce((function(e,t){return(0,i.Z)((0,i.Z)({},e),{},(0,n.Z)({},t.inputName,""))}),{})}},5655:function(e,t,r){r.d(t,{Oj:function(){return a},cS:function(){return n},hS:function(){return i}});var n=new RegExp("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"),i=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,a=/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/}}]);
//# sourceMappingURL=995.b2756a73.chunk.js.map