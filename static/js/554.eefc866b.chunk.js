"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[554],{6554:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r,i,a,o,p,d,l,c,s,u=t(1413),m=t(5861),x=t(9439),h=t(4687),f=t.n(h),g=t(8627),y=t(3602),b=t(1134),w=t(4695),Z=t(5655),v=t(8007),j=v.Ry().shape({name:v.Z_().required("This field is required").matches(Z.cS,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").max(16,"Name may contain only 16 characters"),phone:v.Z_().matches(Z.Oj,{message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",excludeEmptyString:!0}),birthday:v.hT("Invalid date format"),skype:v.Z_().max(16,"Skype may contain only 16 characters"),email:v.Z_().email("Invalid email format").required("This field is required"),userImgUrl:v.nK()}),k=function(n){var e=n.getFullYear(),t=n.getMonth(),r=n.getDate();return"".concat(e,"-").concat((t+1).toString().padStart(2,"0"),"-").concat(r.toString().padStart(2,"0"))},S=t(5273),z=[{inputName:"name",type:"text",id:(0,S.x0)(),label:"User Name",required:!0,placeholder:"Enter your name"},{inputName:"phone",type:"tel",id:(0,S.x0)(),label:"Phone",required:!1,placeholder:"Enter phone"},{inputName:"birthday",type:"date",id:(0,S.x0)(),label:"Birthday",required:!1,placeholder:"DD/MM/YYYY"},{inputName:"skype",type:"string",id:(0,S.x0)(),label:"Skype",required:!1,placeholder:"Enter skype"},{inputName:"email",type:"email",id:(0,S.x0)(),label:"Email",required:!0,placeholder:"Enter email"}],I={inputName:"userImgUrl",type:"file",id:(0,S.x0)(),label:"",required:!1,placeholder:""},N=t(885),A=t(168),U=t(4709),q=U.Z.svg(r||(r=(0,A.Z)(["\n  fill: transparent;\n  stroke: var(--main-blue-color);\n"]))),C=U.Z.div(i||(i=(0,A.Z)(["\n  position: relative;\n\n  text-align: center;\n\n  > h3 {\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 18px;\n    color: ",";\n\n    margin-bottom: 0.25rem;\n\n    @media (min-width: 768px) {\n      font-size: 18px;\n      margin-bottom: 0.5rem;\n    }\n  }\n\n  > p {\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 14px;\n    color: ",";\n\n    @media (min-width: 768px) {\n      font-size: 14px;\n      line-height: 18px;\n    }\n  }\n"])),(function(n){return n.theme.text}),(function(n){return n.theme.textSecondary})),M=U.Z.label(a||(a=(0,A.Z)(["\n  position: relative;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 72px;\n  height: 72px;\n\n  margin-bottom: 1.125rem;\n  margin-top: -37px;\n\n  border-radius: 50%;\n  border: 2px solid #3e85f3;\n  background-color: #ffffff;\n  overflow: hidden;\n\n  & > img {\n    object-fit: contain;\n  }\n\n  @media (min-width: 768px) {\n    margin-top: 40px;\n    width: 124px;\n    height: 124px;\n  }\n\n  @media (min-width: 1087px) {\n    margin-top: 60px;\n  }\n"]))),_=U.Z.input(o||(o=(0,A.Z)(["\n  position: absolute;\n  top: 1.4375rem;\n  right: 0.875rem;\n\n  display: flex;\n  justify-content: center;\n  aling-itms: center;\n\n  width: 14px;\n  height: 14px;\n  // margin: -1px;\n  border: 0;\n  padding: 0;\n\n  border-radius: 50%;\n  background-color: ",";\n\n  @media (min-width: 768px) {\n    width: 24px;\n    height: 24px;\n\n    top: 9.0625rem;\n    right: 1.5rem;\n  }\n\n  @media (min-width: 1087px) {\n    top: 10.3125rem;\n  }\n\n  // white-space: nowrap;\n  // clip-path: inset(100%);\n  // clip: rect(0 0 0 0);\n  // overflow: hidden;\n"])),(function(n){return n.theme.componentAccent})),B=t(5970),E=t(184),F=function(n){var e=n.inputName,t=n.id,r=n.type,i=n.userName,a=n.register,o=n.currentAvatarUrl,p=n.setCurrentAvatarUrl,d=n.errors;return(0,E.jsxs)(C,{children:[(0,E.jsx)(M,{htmlFor:t,children:o?(0,E.jsx)("img",{src:o,alt:"user_photo"}):(0,E.jsx)("p",{children:(0,E.jsx)(q,{children:(0,E.jsx)("use",{href:"".concat(N.Z,"#icon-user-check-01")})})})}),(0,E.jsx)(_,(0,u.Z)((0,u.Z)({id:t},a(e)),{},{type:r,onChange:function(n){return function(n,e){var t=new FileReader;t.readAsDataURL(n),t.onload=function(){e(t.result)}}(n.target.files[0],p),n}})),(0,E.jsx)(B.B,{errors:d,name:"userImgUrl"}),(0,E.jsx)("h3",{children:i}),(0,E.jsx)("p",{children:"User"})]})},T=t(5541),D=t(2791),X=t(9513),Y=t.n(X),P=(t(8639),(0,U.Z)(Y())(p||(p=(0,A.Z)([""])))),R=U.Z.label(d||(d=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0.5rem;\n\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n\n  color: ",";\n"])),(function(n){return n.theme.textSecondary})),$=U.Z.input(l||(l=(0,A.Z)(["\n  background-color: ",";\n  border: 1px solid ",";\n  outline: none;\n  border-radius: 8px;\n\n  padding: 0.875rem;\n\n  width: 100%;\n\n  &::placeholder {\n    font-family: 'Inter';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 18px;\n\n    color: ",";\n  }\n"])),(function(n){return n.theme.bcgTernary}),(function(n){return n.theme.disabled}),(function(n){return n.theme.text})),L=function(n){var e=n.control,t=n.inputName,r=n.label,i=n.id,a=n.placeholder,o=n.errors;return(0,E.jsxs)("div",{children:[(0,E.jsx)(R,{htmlFor:i,children:r}),(0,E.jsx)(b.Qr,{control:e,name:t,render:function(n){var e=n.field,t=e.onChange,r=e.onBlur,o=e.value;return(0,E.jsx)(P,{id:i,placeholderText:a,onChange:t,onBlur:r,selected:o,dateFormat:"dd/MM/yyyy",customInput:(0,E.jsx)($,{})})}}),(0,E.jsx)(B.B,{errors:o,name:t})]})},O=t(4814),J=t(3216),K=U.Z.form(c||(c=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 16px;\n  background-color: ",";\n\n  // ----------------\n  margin: 20px;\n  // -----------------\n\n  & > button {\n    padding: 14px 50px;\n    margin-top: 0px;\n    margin-bottom: 40px;\n\n    @media (min-width: 768px) {\n      padding: 15px 84px;\n    }\n\n    @media (min-width: 1087px) {\n      margin-bottom: 60px;\n    }\n  }\n"])),(function(n){return n.theme.bcgTernary})),Q=U.Z.div(s||(s=(0,A.Z)(["\n  width: 100%;\n  display: grid;\n  padding: 40px 18px;\n  gap: 18px;\n\n  @media (min-width: 768px) {\n    padding: 40px 0px;\n    max-width: 354px;\n  }\n\n  @media (min-width: 1078px) {\n    padding: 40px 0px;\n    max-width: 758px;\n\n    grid-template-columns: 1fr 1fr;\n    column-gap: 50px;\n    row-gap: 24px;\n  }\n\n  @media (min-width: 1440px) {\n    max-width: 1080px;\n  }\n\n  @media (min-width: 1600px) {\n    max-width: 1440px;\n    padding: 50px;\n    grid-template-columns: repeat(auto-fit, minmax(345px, 1fr));\n  }\n"]))),V=new Date,G=function(){var n=(0,g.a)(),e=n.name,t=n.email,r=n.phone,i=n.skype,a=n.birthday,o=n.userImgUrl,p=(0,D.useState)(o),d=(0,x.Z)(p,2),l=d[0],c=d[1],s=(0,y.ec)(),h=(0,x.Z)(s,2),Z=h[0],v=h[1].isLoading,S=(0,b.cI)({resolver:(0,w.X)(j),defaultValues:{name:e,email:t,phone:r||"",birthday:a?(0,J.default)("2023-04-15","yyyy-MM-dd",V):V,skype:i||"",userImgUrl:o||""}}),N=S.register,A=S.control,U=S.handleSubmit,q=S.formState,C=q.errors,M=q.isDirty,_=function(){var n=(0,m.Z)(f().mark((function n(e){var t,r,i,a,o;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=k(e.birthday)===k(V)?null:k(e.birthday),r=""===e.userImgUrl?null:l,i=""===e.phone?null:Number(e.phone),a=""===e.skype?null:e.skype,o=(0,u.Z)((0,u.Z)({},e),{},{phone:i,skype:a,birthday:t,userImgUrl:r}),n.prev=5,n.next=8,Z(o).unwrap();case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(5),413===n.t0.status&&alert("the image is too large");case 13:case"end":return n.stop()}}),n,null,[[5,10]])})));return function(e){return n.apply(this,arguments)}}();return(0,E.jsxs)(K,{onSubmit:U(_),autoComplete:"false",children:[(0,E.jsx)(F,(0,u.Z)({userName:e,errors:C,register:N,currentAvatarUrl:l,setCurrentAvatarUrl:c},I)),(0,E.jsx)(Q,{children:z.map((function(n){return"date"!==n.type?(0,E.jsx)(T.M,(0,u.Z)((0,u.Z)({},n),{},{register:N,errors:C}),n.id):(0,E.jsx)(L,(0,u.Z)((0,u.Z)({},n),{},{control:A,errors:C}),n.id)}))}),(0,E.jsx)(O.zx,{type:"submit",function:"save",disabled:v||o===l&&!M,children:"Save changes"})]})},H=t(4270);function W(){return(0,E.jsxs)("div",{children:[(0,E.jsx)(H.q,{children:(0,E.jsx)("title",{children:"Account"})}),(0,E.jsx)(G,{})]})}},5541:function(n,e,t){t.d(e,{M:function(){return u}});var r,i,a=t(1413),o=t(5970),p=t(168),d=t(4709),l=d.Z.label(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0.5rem;\n\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n\n  color: ",";\n"])),(function(n){return n.theme.textSecondary})),c=d.Z.input(i||(i=(0,p.Z)(["\n  background-color: ",";\n  outline: none;\n  border: 1px solid ",";\n  border-radius: 8px;\n\n  padding: 0.875rem;\n\n  width: 100%;\n\n  &::placeholder {\n    font-family: 'Inter';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 18px;\n\n    color: ",";\n  }\n"])),(function(n){return n.theme.bcgTernary}),(function(n){return n.theme.disabled}),(function(n){return n.theme.text})),s=t(184),u=function(n){var e=n.id,t=n.inputName,r=n.type,i=n.placeholder,p=n.label,d=n.register,u=n.required,m=n.errors;return(0,s.jsxs)("div",{children:[(0,s.jsx)(l,{htmlFor:e,children:p}),(0,s.jsx)(c,(0,a.Z)({id:e,type:r,placeholder:i},d(t,{required:u}))),(0,s.jsx)(o.B,{errors:m,name:t})]})}},4814:function(n,e,t){t.d(e,{ny:function(){return p},rS:function(){return l},zx:function(){return d}});var r=t(340),i=t(2239),a=t(5906),o=(0,i.Z)(a.j$.map((function(n){return"@media (min-width: ".concat(n,"px)")}))),p=(0,r.Z)("svg",{target:"eoy81hv2"})("fill:transparent;stroke:",(function(n){return n.theme.componentPrimary}),";@keyframes scale-up-hor-left{0%{-webkit-transform:scaleX(0.4);transform:scaleX(0.4);-webkit-transform-origin:0% 0%;transform-origin:0% 0%;}100%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:0% 0%;transform-origin:0% 0%;}}",o({width:["18px","18px","20px","20px"],height:["18px","18px","20px","20px"]}),";"),d=(0,r.Z)("button",{target:"eoy81hv1"})("display:flex;align-items:center;justify-content:center;column-gap:0.8125rem;width:",(function(n){return n.width||""}),";margin-top:0.5rem;background-color:",(function(n){return n.theme.componentAccent}),";box-shadow:4px 2px 16px ",(function(n){return n.theme.btnShadow}),";border-radius:16px;border:none;font-family:'Inter';font-style:normal;font-weight:600;font-size:0.875rem;line-height:1.125rem;letter-spacing:-0.02em;color:",(function(n){return n.theme.componentPrimary}),";&:hover ",p,"{animation:scale-up-hor-left 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;}function:",(function(n){return n.function||!1}),";padding:",(function(n){return n.padding?n.padding:o({padding:["add"===n.function?"16px 62px":"save"===n.function?"14px 50px":"14px 28px","add"===n.function?"16px 62px":"save"===n.function?"14px 50px":"14px 28px","add"===n.function?"16px 62px":"save"===n.function?"14px 84px":"16px 24px","add"===n.function?"16px 62px":"save"===n.function?"14px 84px":"16px 23px"]})}),";"),l=(0,r.Z)("div",{target:"eoy81hv0"})("background-color:",(function(n){return n.theme.bcgSecondary}),";",o({padding:["24px 20px 40px","24px 20px 40px","24px 32px 42px","40px 32px 32px"]}),";")},5655:function(n,e,t){t.d(e,{Oj:function(){return a},cS:function(){return r},hS:function(){return i}});var r=new RegExp("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"),i=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,a=/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/}}]);
//# sourceMappingURL=554.eefc866b.chunk.js.map