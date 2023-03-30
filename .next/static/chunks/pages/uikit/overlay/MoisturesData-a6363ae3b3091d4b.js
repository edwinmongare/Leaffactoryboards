(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4313],{342:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uikit/overlay/MoisturesData",function(){return a(150)}])},150:function(e,r,a){"use strict";a.r(r);var s=a(7568),t=a(655),n=a(5893),i=a(7294),l=a(3861),u=a(9403),c=a(2167),d=a(4420),o=a(6094),h=(a(1202),a(2175)),m=a(6310),E=a(8433),f=(a(5024),a(1417)),T=a(6952);a(97),a(6338);r.default=function(){var e=(0,i.useState)(!1),r=e[0],a=e[1],p=(0,i.useState)(null),b=(p[0],p[1]),y=(0,i.useRef)(null);(0,i.useEffect)((function(){var e=function(){var e=(0,s.Z)((function(){var e,r,a;return(0,t.__generator)(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,E.Z.get("".concat(T.f,"getGrades"))];case 1:return e=s.sent(),r=e.data.map((function(e){return{label:e.Grade}})),b(r),[3,3];case 2:return a=s.sent(),console.log(a),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[]);var x=new Date,N=(0,c.Z)(x,"yyyy-MM-dd HH:mm:ss"),v=m.Ry().shape({CASE_NO:m.Rx().required("Case Number is required"),MOISTURE:m.Rx().required("Moisture data is required"),TEMPERATURE:m.Rx().required("Temperature data is required"),TIME_INSERTED:m.hT().required("Time is required")}),M=(0,h.TA)({initialValues:{CASE_NO:"",MOISTURE:"",TEMPERATURE:"",TIME_INSERTED:new Date},validationSchema:v,onSubmit:function(){var e=(0,s.Z)((function(e,r){var s,n,i,l;return(0,t.__generator)(this,(function(t){switch(t.label){case 0:s=r.setSubmitting,n=r.resetForm,t.label=1;case 1:return t.trys.push([1,3,4,5]),e.DATE=(0,c.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),e.TIME_INSERTED=(0,c.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),[4,E.Z.post("".concat(T.f,"addMoistureData"),e)];case 2:return i=t.sent(),console.log(i,"response from api"),200===i.status&&(y.current.show({severity:"success",summary:"Data succesfully submited",detail:"The form data has been posted successfully",life:1e4}),n()),[3,5];case 3:return l=t.sent(),console.log(l),y.current.show({severity:"error",summary:"Error",detail:"There was an error posting the data. Please try again",life:1e4}),console.log(l,"error"),[3,5];case 4:return s(!1),a(!1),[7];case 5:return[2]}}))}));return function(r,a){return e.apply(this,arguments)}}()});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.Z,{pageTitle:"Data Entry Page"}),(0,n.jsx)(d.F,{ref:y}),(0,n.jsxs)("div",{className:"card shadow-3",children:[(0,n.jsx)("h6",{className:"font-bold",children:"Moistures Data"}),(0,n.jsx)(l.V,{header:"Moistures Data",visible:r,style:{width:"60vw"},modal:!0,onHide:function(){return a(!1)},children:(0,n.jsxs)("form",{onSubmit:M.handleSubmit,children:[(0,n.jsx)("div",{className:"grid",children:(0,n.jsx)("div",{className:"col-12 md:col-12",children:(0,n.jsxs)("div",{className:"card p-fluid",children:[(0,n.jsxs)("div",{className:"field",children:[(0,n.jsx)("label",{htmlFor:"TIME_INSERTED",children:"Time"}),(0,n.jsx)(o.o,{id:"TIME_INSERTED",name:"TIME_INSERTED",disabled:!0,placeholder:N,type:"text"})]}),(0,n.jsx)("label",{htmlFor:"CASE_NO",children:"Case Number"}),(0,n.jsx)("div",{className:"field",children:(0,n.jsx)(o.o,{id:"CASE_NO",name:"CASE_NO",value:M.values.CASE_NO,onChange:M.handleChange,placeholder:"Enter the case number",type:"text"})}),(0,n.jsxs)("div",{className:"field",children:[(0,n.jsx)("label",{htmlFor:"TEMPARTURE",children:"Temparture"}),(0,n.jsx)(o.o,{id:"TEMPERATURE",name:"TEMPERATURE",placeholder:"Enter the temparture data ",className:"field",value:M.values.TEMPERATURE,onChange:M.handleChange,type:"text"})]}),(0,n.jsxs)("div",{className:"field",children:[(0,n.jsx)("label",{htmlFor:"MOISTURE",children:"Moisture"}),(0,n.jsx)(o.o,{id:"MOISTURE",name:"MOISTURE",placeholder:"Enter the moisture data",className:"field",value:M.values.MOISTURE,onChange:M.handleChange,type:"text"})]})]})})}),(0,n.jsx)(u.z,{className:"border-double mt-4 border-4 border-sky-500 col-12 p-mt-2 p-button-primary",onClick:function(){return M.handleSubmit()},icon:"pi pi-check",disabled:M.isSubmitting||!M.isValid,type:"submit",label:"Submit"})]})}),console.log(M.errors,"jd2"),(0,n.jsx)("div",{className:"grid",children:(0,n.jsx)("div",{className:"col-12",children:(0,n.jsx)(u.z,{type:"submit",label:"Enter Data",icon:"pi pi-external-link",onClick:function(){return a(!0)}})})})]})]})}}},function(e){e.O(0,[8725,4420,3861,508,5024,6338,9774,2888,179],(function(){return r=342,e(e.s=r);var r}));var r=e.O();_N_E=r}]);