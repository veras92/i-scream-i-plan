"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[546],{5546:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var i,r,a,d,c,o,s,l,u=t(9439),p=t(2791),x=t(5048),h=t(7689),y=t(5231),f=t(2222),m=t(2274),g=t(9778),j=t(1541),b=t(958),v=t(8592),w=t(8897),Z=t(885),k=t(168),M=t(4709),T=M.Z.div(i||(i=(0,k.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  @media (min-width: 768px) {\n    justify-content: flex-start;\n    gap: 8px;\n  }\n"]))),C=M.Z.li(r||(r=(0,k.Z)(["\n  display: flex;\n\n  height: 30px;\n\n  @media (min-width: 768px) {\n    height: 36px;\n  }\n"]))),D=M.Z.button(a||(a=(0,k.Z)(["\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  background-color: ",";\n  &:disabled {\n    background-color: ",";\n\n    & svg {\n      stroke: ",";\n    }\n  }\n\n  &:first-of-type {\n    border-radius: 8px 0 0 8px;\n  }\n\n  &:last-child {\n    border-radius: 0 8px 8px 0;\n  }\n\n  & svg {\n    fill: transparent;\n    stroke: ",";\n  }\n  @media (min-width: 768px) {\n    width: 38px;\n  }\n"])),(function(n){return n.theme.bcgTernary}),(function(n){return n.theme.bcgTernary}),(function(n){return n.theme.SvgDisabled}),(function(n){return n.theme.SvgArowSecondary})),S=M.Z.p(d||(d=(0,k.Z)(["\n  display: inline-block;\n\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 18px;\n\n  padding: 6px 12px;\n\n  border-radius: 8px;\n\n  background-color: #3e85f3;\n  color: #ffffff;\n\n  text-transform: uppercase;\n  text-align: center;\n  @media (min-width: 768px) {\n    font-size: 16px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]))),z=t(184),_=function(n){var e=n.type,t=(0,h.UO)(),i=(0,x.I0)(),r=(0,h.s0)(),a=(0,x.v9)(j.i);(0,p.useEffect)((function(){t.currentDay&&a!==t.currentDay&&i((0,w.r)(t.currentDay))}),[i,a,t.currentDay]);var d=(0,y.default)(a,"yyyy-MM-dd",Date.now()),c=function(n){if("addition"===n.currentTarget.name){if("day"===e){var t=(0,b.Z)(d,{days:1}),a=(0,f.default)(t,"yyyy-MM-dd");return i((0,w.r)(a)),void r("".concat(e,"/").concat(a))}var c=(0,b.Z)(d,{months:1}),o=(0,f.default)(c,"yyyy-MM-dd");return i((0,w.r)(o)),void r("".concat(e,"/").concat(o))}if("day"===e){var s=(0,v.Z)(d,{days:1}),l=(0,f.default)(s,"yyyy-MM-dd");return i((0,w.r)(l)),void r("".concat(e,"/").concat(l))}var u=(0,v.Z)(d,{months:1}),p=(0,f.default)(u,"yyyy-MM-dd");i((0,w.r)(p)),r("".concat(e,"/").concat(p))},o=(0,f.default)(d,"dd MMMM yyyy");return(0,z.jsxs)(T,{children:[(0,z.jsx)(S,{children:"month"===e?o.slice(3):o}),(0,z.jsx)("ul",{children:(0,z.jsxs)(C,{children:[(0,z.jsx)(D,{type:"button",name:"subtraction",onClick:c,children:(0,z.jsx)("svg",{height:"10px",width:"8px",children:(0,z.jsx)("use",{href:"".concat(Z.Z,"#icon-arrow-left-small")})})}),(0,z.jsx)(D,{type:"button",name:"addition",onClick:c,children:(0,z.jsx)("svg",{height:"10px",width:"8px",children:(0,z.jsx)("use",{href:"".concat(Z.Z,"#icon-arrow-right-small")})})})]})})]})},E=t(1087),H=M.Z.ul(c||(c=(0,k.Z)(["\n  display: flex;\n  margin-top: 18px;\n\n  @media (min-width: 768px) {\n    margin-top: 0;\n  }\n"]))),I=M.Z.li(o||(o=(0,k.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n\n  display: flex;\n"]))),N=(0,M.Z)(E.OL)(s||(s=(0,k.Z)(["\n  color: ",";\n\n  background-color: ",";\n\n  &.active {\n    background-color: ",";\n  }\n  &.month {\n    padding: 8px 16px;\n    border-radius: 8px 0 0 8px;\n  }\n  &.day {\n    padding: 8px 25px;\n    border-radius: 0 8px 8px 0;\n  }\n\n  @media (min-width: 768px) {\n    &.day {\n      padding: 8px 26px;\n    }\n  }\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n  }\n"])),(function(n){return n.theme.activeText}),(function(n){return n.theme.PeriodTypeSelect}),(function(n){return n.theme.PeriodTypeSelectDisabled})),O=function(n){var e=n.onChangeType,t=(0,x.v9)(j.i),i=(0,h.TH)(),r=i.pathname.includes("month"),a=i.pathname.includes("day");return(0,z.jsxs)(H,{children:[(0,z.jsx)(I,{children:(0,z.jsx)(N,{className:"".concat(r?"active":""," month"),to:"month/".concat(t),onClick:function(){return e("month")},children:"Month"})}),(0,z.jsx)(I,{children:(0,z.jsx)(N,{className:"".concat(a?"active":""," day"),to:"day/".concat(t),onClick:function(){return e("day")},children:"Day"})})]})},P=M.Z.div(l||(l=(0,k.Z)(["\n  margin-bottom: 24px;\n\n  @media (min-width: 768px) {\n    margin-bottom: 32px;\n\n    display: flex;\n    justify-content: space-between;\n  }\n"]))),q=function(){var n=(0,p.useState)("month"),e=(0,u.Z)(n,2),t=e[0],i=e[1],r=(0,h.TH)().pathname.slice(0,-11);(0,p.useEffect)((function(){i("/calendar/day"!==r?"month":"day")}),[r]);var a=(0,x.v9)(j.i),d=(0,y.default)(a,"yyyy-MM-dd",Date.now()),c=(0,x.I0)(),o=(0,m.uW)({year:(0,f.default)(d,"yyyy"),month:(0,f.default)(d,"MM")}).data;return(0,p.useEffect)((function(){c((0,g.r)(o))}),[c,o]),(0,z.jsxs)(P,{children:[(0,z.jsx)(_,{type:t}),(0,z.jsx)(O,{onChangeType:i})]})},A=t(6907),L=t(4648);function U(){return(0,z.jsxs)("div",{children:[(0,z.jsx)(A.ql,{children:(0,z.jsx)("title",{children:"Calendar"})}),(0,z.jsx)(q,{}),(0,z.jsx)(p.Suspense,{fallback:(0,z.jsx)(L.a,{}),children:(0,z.jsx)(h.j3,{})})]})}}}]);
//# sourceMappingURL=546.9409daec.chunk.js.map