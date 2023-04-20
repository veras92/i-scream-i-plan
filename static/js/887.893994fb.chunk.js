"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[887],{4887:function(n,e,t){t.r(e),t.d(e,{default:function(){return J}});var r=t(9439),i=t(2791),a=t(5048),o=t(7689),d=t(3216),c=t(1951),s=t(2274),u=t(9778),l=t(1541),f=t(958),y=t(6753),p=t(8030),h=t(4522),x=t(9297);function m(n){return m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},m(n)}function g(n,e){if((0,h.Z)(2,arguments),!e||"object"!==m(e))return new Date(NaN);var t=e.years?(0,x.Z)(e.years):0,r=e.months?(0,x.Z)(e.months):0,i=e.weeks?(0,x.Z)(e.weeks):0,a=e.days?(0,x.Z)(e.days):0,o=e.hours?(0,x.Z)(e.hours):0,d=e.minutes?(0,x.Z)(e.minutes):0,c=e.seconds?(0,x.Z)(e.seconds):0,s=(0,p.default)(n,r+12*t),u=(0,y.default)(s,a+7*i),l=d+60*o,f=c+60*l,g=1e3*f,b=new Date(u.getTime()-g);return b}var b,v,Z,j,w,k,M,D,S=t(8897),T=t(885),C=t(168),z=t(4709),N=z.Z.div(b||(b=(0,C.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  @media (min-width: 768px) {\n    justify-content: flex-start;\n    gap: 8px;\n  }\n"]))),_=z.Z.li(v||(v=(0,C.Z)(["\n  display: flex;\n\n  height: 30px;\n\n  @media (min-width: 768px) {\n    height: 36px;\n  }\n"]))),E=z.Z.button(Z||(Z=(0,C.Z)(["\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  background-color: ",";\n  &:disabled {\n    background-color: ",";\n\n    & svg {\n      stroke: ",";\n    }\n  }\n\n  &:first-of-type {\n    border-radius: 8px 0 0 8px;\n  }\n\n  &:last-child {\n    border-radius: 0 8px 8px 0;\n  }\n\n  & svg {\n    fill: transparent;\n    stroke: ",";\n  }\n  @media (min-width: 768px) {\n    width: 38px;\n  }\n"])),(function(n){return n.theme.bcgTernary}),(function(n){return n.theme.bcgTernary}),(function(n){return n.theme.SvgDisabled}),(function(n){return n.theme.SvgArowSecondary})),H=z.Z.p(j||(j=(0,C.Z)(["\n  display: inline-block;\n\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 18px;\n\n  padding: 6px 12px;\n\n  border-radius: 8px;\n\n  background-color: #3e85f3;\n  color: #ffffff;\n\n  text-transform: uppercase;\n  text-align: center;\n  @media (min-width: 768px) {\n    font-size: 16px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]))),I=t(184),O=function(n){var e=n.type,t=(0,o.UO)(),r=(0,a.I0)(),s=(0,o.s0)(),u=(0,a.v9)(l.i);(0,i.useEffect)((function(){t.currentDay&&u!==t.currentDay&&r((0,S.r)(t.currentDay))}),[r,u,t.currentDay]);var y=(0,d.default)(u,"yyyy-MM-dd",Date.now()),p=function(n){if("addition"===n.currentTarget.name){if("day"===e){var t=(0,f.Z)(y,{days:1}),i=(0,c.default)(t,"yyyy-MM-dd");return r((0,S.r)(i)),void s("".concat(e,"/").concat(i))}var a=(0,f.Z)(y,{months:1}),o=(0,c.default)(a,"yyyy-MM-dd");return r((0,S.r)(o)),void s("".concat(e,"/").concat(o))}if("day"===e){var d=g(y,{days:1}),u=(0,c.default)(d,"yyyy-MM-dd");return r((0,S.r)(u)),void s("".concat(e,"/").concat(u))}var l=g(y,{months:1}),p=(0,c.default)(l,"yyyy-MM-dd");r((0,S.r)(p)),s("".concat(e,"/").concat(p))},h=(0,c.default)(y,"dd MMMM yyyy"),x=y<Date.now();return(0,I.jsxs)(N,{children:[(0,I.jsx)(H,{children:"month"===e?h.slice(3):h}),(0,I.jsx)("ul",{children:(0,I.jsxs)(_,{children:[(0,I.jsx)(E,{type:"button",name:"subtraction",onClick:p,disabled:x,children:(0,I.jsx)("svg",{height:"10px",width:"8px",children:(0,I.jsx)("use",{href:"".concat(T.Z,"#icon-arrow-left-small")})})}),(0,I.jsx)(E,{type:"button",name:"addition",onClick:p,children:(0,I.jsx)("svg",{height:"10px",width:"8px",children:(0,I.jsx)("use",{href:"".concat(T.Z,"#icon-arrow-right-small")})})})]})})]})},P=t(1087),q=z.Z.ul(w||(w=(0,C.Z)(["\n  display: flex;\n  margin-top: 18px;\n\n  @media (min-width: 768px) {\n    margin-top: 0;\n  }\n"]))),A=z.Z.li(k||(k=(0,C.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n\n  display: flex;\n"]))),L=(0,z.Z)(P.OL)(M||(M=(0,C.Z)(["\n  color: ",";\n\n  background-color: ",";\n\n  &.active {\n    background-color: ",";\n  }\n  &.month {\n    padding: 8px 16px;\n    border-radius: 8px 0 0 8px;\n  }\n  &.day {\n    padding: 8px 25px;\n    border-radius: 0 8px 8px 0;\n  }\n\n  @media (min-width: 768px) {\n    &.day {\n      padding: 8px 26px;\n    }\n  }\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n  }\n"])),(function(n){return n.theme.activeText}),(function(n){return n.theme.PeriodTypeSelect}),(function(n){return n.theme.PeriodTypeSelectDisabled})),U=function(n){var e=n.onChangeType,t=(0,a.v9)(l.i),r=(0,o.TH)(),i=r.pathname.includes("month"),d=r.pathname.includes("day");return(0,I.jsxs)(q,{children:[(0,I.jsx)(A,{children:(0,I.jsx)(L,{className:"".concat(i?"active":""," month"),to:"month/".concat(t),onClick:function(){return e("month")},children:"Month"})}),(0,I.jsx)(A,{children:(0,I.jsx)(L,{className:"".concat(d?"active":""," day"),to:"day/".concat(t),onClick:function(){return e("day")},children:"Day"})})]})},W=z.Z.div(D||(D=(0,C.Z)(["\n  margin-bottom: 24px;\n\n  @media (min-width: 768px) {\n    margin-bottom: 32px;\n\n    display: flex;\n    justify-content: space-between;\n  }\n"]))),B=function(){var n=(0,i.useState)("month"),e=(0,r.Z)(n,2),t=e[0],f=e[1],y=(0,o.TH)().pathname.slice(0,-11);(0,i.useEffect)((function(){f("/calendar/day"!==y?"month":"day")}),[y]);var p=(0,a.v9)(l.i),h=(0,d.default)(p,"yyyy-MM-dd",Date.now()),x=(0,a.I0)(),m=(0,s.uW)({year:(0,c.default)(h,"yyyy"),month:(0,c.default)(h,"MM")}).data;return(0,i.useEffect)((function(){x((0,u.rh)(m))}),[x,m]),(0,I.jsxs)(W,{children:[(0,I.jsx)(O,{type:t}),(0,I.jsx)(U,{onChangeType:f})]})},F=t(6907),G=t(8710);function J(){return(0,I.jsxs)("div",{children:[(0,I.jsx)(F.ql,{children:(0,I.jsx)("title",{children:"Calendar"})}),(0,I.jsx)(B,{}),(0,I.jsx)(i.Suspense,{fallback:(0,I.jsx)(G.a,{}),children:(0,I.jsx)(o.j3,{})})]})}},6753:function(n,e,t){t.r(e),t.d(e,{default:function(){return o}});var r=t(9040),i=t(4522),a=t(9297);function o(n,e){(0,i.Z)(2,arguments);var t=(0,a.Z)(e);return(0,r.default)(n,-t)}},8030:function(n,e,t){t.r(e),t.d(e,{default:function(){return o}});var r=t(9297),i=t(1104),a=t(4522);function o(n,e){(0,a.Z)(2,arguments);var t=(0,r.Z)(e);return(0,i.default)(n,-t)}}}]);
//# sourceMappingURL=887.893994fb.chunk.js.map