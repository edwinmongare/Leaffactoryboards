(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7383],{5647:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uikit/overlay/DegredationV1",function(){return n(6050)}])},6050:function(e,t,n){"use strict";n.r(t);var r=n(7568),a=n(655),i=n(5893),s=n(7294),l=n(3861),o=n(9403),u=n(2167),d=n(4420),c=n(6094),m=n(2175),f=n(6310),p=n(8433),h=n(1417),y=n(6952);t.default=function(){var e=(0,s.useState)(!1),t=e[0],n=e[1],v=(0,s.useRef)(null),b=new Date,g=(0,u.Z)(b,"yyyy-MM-dd HH:mm:ss"),x=f.Ry().shape({Q1:f.nK().required("Case Number is required"),Q2:f.nK().required("Moisture data is required"),Q3:f.nK().required("Temperature data is required"),Q4:f.nK().required("Temperature data is required"),time_inserted:f.hT().required("Time is required")}),_=(0,m.TA)({initialValues:{Q1:"",Q2:"",Q3:"",Q4:"",time_inserted:new Date},validationSchema:x,onSubmit:function(){var e=(0,r.Z)((function(e,t){var r,i,s,l;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:r=t.setSubmitting,i=t.resetForm,a.label=1;case 1:return a.trys.push([1,3,4,5]),e.DATE=(0,u.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),e.time_inserted=(0,u.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),[4,p.Z.post("".concat(y.f,"postDegredationv1"),e)];case 2:return s=a.sent(),console.log(s,"response from api"),200===s.status&&(v.current.show({severity:"success",summary:"Data succesfully submited",detail:"The form data has been posted successfully",life:1e4}),i()),[3,5];case 3:return l=a.sent(),console.log(l),v.current.show({severity:"error",summary:"Error",detail:"There was an error posting the data. Please try again",life:1e4}),console.log(l,"error"),[3,5];case 4:return r(!1),n(!1),[7];case 5:return[2]}}))}));return function(t,n){return e.apply(this,arguments)}}()});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.Z,{pageTitle:" Data Entry Page"}),(0,i.jsx)(d.F,{ref:v}),(0,i.jsxs)("div",{className:"card shadow-3",children:[(0,i.jsx)("h6",{className:"font-bold",children:"Conditioning Moistures "}),(0,i.jsx)(l.V,{header:"Conditioning Moistures and Temperatures",visible:t,style:{width:"60vw"},modal:!0,onHide:function(){return n(!1)},children:(0,i.jsxs)("form",{onSubmit:_.handleSubmit,children:[(0,i.jsx)("div",{className:"grid",children:(0,i.jsx)("div",{className:"col-12 md:col-12",children:(0,i.jsxs)("div",{className:"card p-fluid",children:[(0,i.jsxs)("div",{className:"field",children:[(0,i.jsx)("label",{htmlFor:"time_inserted",children:"Time"}),(0,i.jsx)(c.o,{id:"time_inserted",name:"time_inserted",disabled:!0,placeholder:g,type:"text"})]}),(0,i.jsx)("label",{htmlFor:"Q1",children:"EXIT 1st CC"}),(0,i.jsx)("div",{className:"field",children:(0,i.jsx)(c.o,{id:"Q1",name:"Q1",value:_.values.Q1,onChange:_.handleChange,placeholder:"Enter the EXIT 1st CC Number",type:"text"})}),(0,i.jsxs)("div",{className:"field",children:[(0,i.jsx)("label",{htmlFor:"Q2",children:"TEMP_1st_CC"}),(0,i.jsx)(c.o,{id:"Q2",name:"Q2",placeholder:"Enter the TEMP_1st_CC< Number",className:"field",value:_.values.Q2,onChange:_.handleChange,type:"text"})]}),(0,i.jsxs)("div",{className:"field",children:[(0,i.jsx)("label",{htmlFor:"Q3",children:"EXIT_2nd_CC"}),(0,i.jsx)(c.o,{id:"Q3",name:"Q3",placeholder:"Enter the EXIT_2nd_CC Data",className:"field",value:_.values.Q3,onChange:_.handleChange,type:"text"})]}),(0,i.jsxs)("div",{className:"field",children:[(0,i.jsx)("label",{htmlFor:"Q4",children:"TEMP_2nd_CC"}),(0,i.jsx)(c.o,{id:"Q4",name:"Q4",placeholder:"Enter the TEMP_2nd_CC Number",className:"field",value:_.values.Q4,onChange:_.handleChange,type:"text"})]})]})})}),(0,i.jsx)(o.z,{className:"border-double mt-4 border-4 border-sky-500 col-12 p-mt-2 p-button-primary",onClick:function(){return _.handleSubmit()},icon:"pi pi-check",disabled:_.isSubmitting||!_.isValid,type:"submit",label:"Submit"})]})}),console.log(_.errors,"jd2"),(0,i.jsx)("div",{className:"grid",children:(0,i.jsx)("div",{className:"col-12",children:(0,i.jsx)(o.z,{type:"submit",label:"Enter Data",icon:"pi pi-external-link",onClick:function(){return n(!0)}})})})]})]})}},6094:function(e,t,n){"use strict";n.d(t,{o:function(){return o}});var r=n(7294),a=n(411),i=n(7074),s=n(3643);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var o=r.memo(r.forwardRef((function(e,t){var n=r.useRef(t),u=n.current&&n.current.value,d=r.useMemo((function(){return s.gb.isNotEmpty(e.value)||s.gb.isNotEmpty(e.defaultValue)||s.gb.isNotEmpty(u)}),[e.value,e.defaultValue,u]);r.useEffect((function(){s.gb.combinedRefs(n,t)}),[n,t]);var c=s.gb.isNotEmpty(e.tooltip),m=s.gb.findDiffKeys(e,o.defaultProps),f=(0,s.AK)("p-inputtext p-component",{"p-disabled":e.disabled,"p-filled":d},e.className);return r.createElement(r.Fragment,null,r.createElement("input",l({ref:n},m,{className:f,onInput:function(t){var n=!0;if(e.keyfilter&&e.validateOnly&&(n=a.F.validate(t,e.keyfilter)),e.onInput&&e.onInput(t,n),!e.onChange){var r=t.target;s.gb.isNotEmpty(r.value)?s.p7.addClass(r,"p-filled"):s.p7.removeClass(r,"p-filled")}},onKeyDown:function(t){e.onKeyDown&&e.onKeyDown(t),e.keyfilter&&a.F.onKeyPress(t,e.keyfilter,e.validateOnly)},onPaste:function(t){e.onPaste&&e.onPaste(t),e.keyfilter&&a.F.onPaste(t,e.keyfilter,e.validateOnly)}})),c&&r.createElement(i.u,l({target:n,content:e.tooltip},e.tooltipOptions)))})));o.displayName="InputText",o.defaultProps={__TYPE:"InputText",keyfilter:null,validateOnly:!1,tooltip:null,tooltipOptions:null,onInput:null,onKeyDown:null,onPaste:null}},411:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{F:function(){return i}});var i={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:function(e){return i.DEFAULT_MASKS[e]?i.DEFAULT_MASKS[e]:e},onKeyPress:function(e,t,n){n||(e.ctrlKey||e.altKey||1===e.key.length&&(this.getRegex(t).test(e.key)||e.preventDefault()))},onPaste:function(e,t,n){if(!n){var r=this.getRegex(t);a(e.clipboardData.getData("text")).forEach((function(t){if(!r.test(t))return e.preventDefault(),!1}))}},validate:function(e,t){var n=e.target.value,r=!0,a=this.getRegex(t);return n&&!a.test(n)&&(r=!1),r}}}},function(e){e.O(0,[4420,3861,508,9774,2888,179],(function(){return t=5647,e(e.s=t);var t}));var t=e.O();_N_E=t}]);