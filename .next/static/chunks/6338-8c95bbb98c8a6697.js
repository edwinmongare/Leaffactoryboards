"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6338],{6338:function(e,a,s){s.r(a);var l=s(7568),r=s(655),t=s(5893),i=s(7294),n=s(3861),o=s(9403),d=s(2167),c=s(4420),u=s(6094),m=s(1202),h=s(2175),v=s(6310),f=s(8433),x=(s(5024),s(1417)),p=s(6952);s(97);a.default=function(){var e=(0,i.useState)(!1),a=e[0],s=e[1],N=(0,i.useState)(!1),Q=(N[0],N[1],(0,i.useState)(null)),b=Q[0],g=Q[1],y=(0,i.useRef)(null);(0,i.useEffect)((function(){var e=function(){var e=(0,l.Z)((function(){var e,a,s;return(0,r.__generator)(this,(function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),[4,f.Z.get("".concat(p.f,"getGrades"))];case 1:return e=l.sent(),a=e.data.map((function(e){return{label:e.Grade}})),g(a),[3,3];case 2:return s=l.sent(),console.log(s),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[]);var j=new Date,w=(0,d.Z)(j,"yyyy-MM-dd HH:mm:ss"),S=v.Ry().shape({RUNNING_GRADE:v.Z_().required("Grade is required"),PROCESS_CODE:v.nK().required("Process code is required")}),F=(0,h.TA)({initialValues:{DATE:"".concat(w),RUNNING_GRADE:"",PROCESS_CODE:""},validationSchema:S,onSubmit:function(){var e=(0,l.Z)((function(e,a){var l,t,i,n;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:l=a.setSubmitting,t=a.resetForm,r.label=1;case 1:return r.trys.push([1,3,4,5]),e.DATE=(0,d.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),[4,f.Z.post("".concat(p.f,"postDailyProcessData"),e)];case 2:return i=r.sent(),console.log(i,"response from api"),200===i.status&&(y.current.show({severity:"success",summary:"Data succesfully submited",detail:"The form data has been posted successfully",life:1e4}),t()),[3,5];case 3:return n=r.sent(),console.log(n),y.current.show({severity:"error",summary:"Error",detail:"There was an error posting the data. Please try again",life:5e3}),console.log(n,"error"),[3,5];case 4:return l(!1),s(!1),[7];case 5:return[2]}}))}));return function(a,s){return e.apply(this,arguments)}}()});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x.Z,{pageTitle:"Data Entry Page"}),(0,t.jsx)(c.F,{ref:y}),(0,t.jsxs)("div",{className:"card shadow-3",children:[(0,t.jsx)("h6",{className:"font-bold",children:"Today's Data"}),(0,t.jsx)(n.V,{header:"Todays Data",visible:a,style:{width:"60vw"},modal:!0,onHide:function(){return s(!1)},children:(0,t.jsxs)("form",{onSubmit:F.handleSubmit,children:[(0,t.jsx)("div",{className:"grid",children:(0,t.jsx)("div",{className:"col-12 md:col-12",children:(0,t.jsxs)("div",{className:"card p-fluid",children:[(0,t.jsxs)("div",{className:"field",children:[(0,t.jsx)("label",{htmlFor:"name1",children:"Date"}),(0,t.jsx)(u.o,{id:"name1",disabled:!0,placeholder:w,type:"text"})]}),(0,t.jsx)("label",{htmlFor:"name1",children:"Grade"}),(0,t.jsx)(m.L,{id:"RUNNING_GRADE",className:"field",value:F.values.RUNNING_GRADE,onChange:function(e){F.setFieldValue("RUNNING_GRADE",e.value.label),console.log(e.value.label,"selected value")},options:b,optionLabel:"label",placeholder:F.values.RUNNING_GRADE}),(0,t.jsxs)("div",{className:"field",children:[(0,t.jsx)("label",{htmlFor:"age1",children:"Process Code"}),(0,t.jsx)(u.o,{id:"PROCESS_CODE",className:"field",value:F.values.PROCESS_CODE,onChange:F.handleChange,type:"text"})]})]})})}),(0,t.jsx)(o.z,{className:"border-double mt-4 border-4 border-sky-500 col-12 p-mt-2 p-button-primary",onClick:function(){return F.handleSubmit()},icon:"pi pi-check",disabled:F.isSubmitting||!F.isValid,type:"submit",label:"Submit"})]})}),console.log(F.errors,"jd"),(0,t.jsx)("div",{className:"grid",children:(0,t.jsx)("div",{className:"col-12",children:(0,t.jsx)(o.z,{type:"submit",label:"Enter Data",icon:"pi pi-external-link",onClick:function(){return s(!0)}})})})]})]})}},97:function(e,a,s){var l=s(7568),r=s(655),t=s(5893),i=s(7294),n=s(3861),o=s(9403),d=s(2167),c=s(4420),u=s(6094),m=s(1202),h=s(2175),v=s(6310),f=s(8433),x=s(6952);a.Z=function(){var e=(0,i.useRef)(null),a=(0,i.useState)(!1),s=a[0],p=a[1],N=v.Ry().shape({Q1:v.Z_().required("yes or No answer required"),Q2:v.Z_().required("yes or No answer required"),Q3:v.Z_().required("yes or No answer required"),Q4:v.Z_().required("yes or No answer required"),Q5:v.Z_().required("yes or No answer required"),Q6:v.Z_().required("yes or No answer required"),Q7:v.Z_().required("yes or No answer required"),Q8:v.Z_().required("yes or No answer required"),Q9:v.Z_().required("yes or No answer required"),Q10:v.Z_().required("yes or No answer required"),Q11:v.Z_(),Q12:v.hT().required("Date and time required"),Q13:v.Z_().required("yes or No answer required")}),Q=(0,h.TA)({initialValues:{Q1:"",Q2:"",Q3:"",Q4:"",Q5:"",Q6:"",Q7:"",Q9:"",Q10:"",Q11:"",Q12:new Date,Q13:""},validationSchema:N,onSubmit:function(){var a=(0,l.Z)((function(a,s){var l,t,i,n;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:l=s.setSubmitting,t=s.resetForm,r.label=1;case 1:return r.trys.push([1,3,4,5]),a.Q13=j(),a.Q9=(0,d.Z)(new Date,"yyyy-MM-dd HH:mm"),[4,f.Z.post("".concat(x.f,"safetyTrigger"),a)];case 2:return i=r.sent(),console.log(i.data,"response from api"),200===i.status&&(e.current.show({severity:"success",summary:"Data succesfully submited",detail:"The form data has been posted successfully",life:1e4}),t()),[3,5];case 3:return n=r.sent(),console.log(n),e.current.show({severity:"error",summary:"Error",detail:"There was an error posting the data. Please try again",life:5e3}),console.log(n,"error"),[3,5];case 4:return l(!1),p(!1),[7];case 5:return[2]}}))}));return function(e,s){return a.apply(this,arguments)}}()}),b=[{id:"Yes",Name:"1"},{id:"No",Name:"0"}],g=new Date,y=(0,d.Z)(g,"yyyy-MM-dd HH:mm:ss"),j=function(){var e=Q.values,a=e.Q1,s=e.Q2,l=e.Q3,r=e.Q4,t=e.Q5,i=e.Q6,n=e.Q7,o=e.Q8,d=e.Q9,c=e.Q10,u="",m=parseInt(a)+parseInt(s)+parseInt(l)+parseInt(r)+parseInt(t)+parseInt(i)+parseInt(n)+parseInt(o)+parseInt(d)+parseInt(c);return u=m<=3?"Low":m>=4&&m<=6?"Medium":"High",Q.setFieldValue("Q13",u),u};return(0,i.useEffect)((function(){j()}),[Q.values.Q1,Q.values.Q2,Q.values.Q3,Q.values.Q4,Q.values.Q5,Q.values.Q6,Q.values.Q7,Q.values.Q8,Q.values.Q9,Q.values.Q10]),console.log(Q.values.Q1,"q1"),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.F,{ref:e}),(0,t.jsxs)("div",{className:"card shadow-3",children:[(0,t.jsx)("h6",{className:"font-bold",children:"Safety Trigger"}),(0,t.jsx)(n.V,{header:"Safety Trigger  (".concat(Q.values.Q13,")"),visible:s,style:{width:"80vw"},modal:!0,onHide:function(){return p(!1)},children:(0,t.jsxs)("form",{onSubmit:Q.handleSubmit,children:[(0,t.jsx)("div",{className:"grid",children:(0,t.jsx)("div",{className:"col-12 md:col-12",children:(0,t.jsxs)("div",{className:"card mb-3 p-fluid",children:[(0,t.jsxs)("div",{className:"field grid",children:[(0,t.jsxs)("div",{className:"col-12 md:col-12",children:[(0,t.jsx)("label",{htmlFor:"Q12",children:"Date"}),(0,t.jsx)(u.o,{className:"field",id:"Q12",readOnly:!0,placeholder:y,type:"text"})]}),(0,t.jsxs)("div",{className:"col-6 md:col-6",children:[(0,t.jsx)("label",{className:"mb-5",htmlFor:"Q12",children:"Safety Trigger Status"}),(0,t.jsx)(u.o,{id:"Q13",hidden:!0,className:"field",value:Q.values.Q13,type:"text"})]})]}),(0,t.jsxs)("div",{className:"field",children:[(0,t.jsx)("label",{htmlFor:"Q1",children:"1. Are Routine operations ongoing, proper working tools, adequate PPE and qualified/adequate staffing?"}),(0,t.jsx)(m.L,{id:"Q1",className:"field",value:Q.values.Q1,onChange:function(e){Q.setFieldValue("Q1",e.value.Name),console.log(Q.values.Q1,"selectedxxx value")},options:b,optionLabel:"Name",placeholder:Q.values.Q1})]}),(0,t.jsxs)("div",{className:"field",children:[(0,t.jsxs)("label",{htmlFor:"Q2",children:["2. Are there Non routine operations eg maintenance, deep cleaning, breakdown",(0,t.jsx)("h3",{className:"text-sm ml-2subpixel-antialiased text-red-400 font-regular",children:"Complete the QRP form before commencement of the activity"})]}),(0,t.jsx)(m.L,{id:"Q2",className:"field",value:Q.values.Q2,onChange:function(e){Q.setFieldValue("Q2",e.value.Name),console.log(e.value.Name,"selectedxxx value")},options:b,optionLabel:"Name",placeholder:Q.values.Q2})]}),(0,t.jsxs)("div",{className:"field",children:[(0,t.jsxs)("label",{htmlFor:"Q3",children:["3. NPI running with non factory staff on the floor",(0,t.jsx)("h3",{className:"text-sm ml-2subpixel-antialiased text-red-400 font-regular",children:"Conduct safety induction and team to be accompanied always by GLT Staff"})]}),(0,t.jsx)(m.L,{id:"Q3",className:"field",value:Q.values.Q3,onChange:function(e){Q.setFieldValue("Q3",e.value.Name),console.log(e.value.Name,"selectedxxx value")},options:b,optionLabel:"Name",placeholder:Q.values.Q3})]}),(0,t.jsxs)("div",{className:"field",children:[(0,t.jsxs)("label",{htmlFor:"Q4",children:["4. Team staffing less than set standard or there is new staff on the line",(0,t.jsx)("h3",{className:"text-sm ml-2subpixel-antialiased text-red-400 font-regular",children:"Reallocation of the staff members to cover high risk areas New staff to shadow and be attached to the experienced staff members"})]}),(0,t.jsx)(m.L,{id:"Q4",className:"field",value:Q.values.Q4,onChange:function(e){Q.setFieldValue("Q4",e.value.Name),console.log(e.value.Name,"selectedxxx value")},options:b,optionLabel:"Name",placeholder:Q.values.Q4})]}),(0,t.jsxs)("div",{className:"field",children:[(0,t.jsxs)("label",{htmlFor:"Q5",children:["5. Visitors in the factory area",(0,t.jsx)("h3",{className:"text-sm ml-2subpixel-antialiased text-red-400 font-regular",children:"Conduct safety induction and team to be accompanied always by GLT Staff"})]}),(0,t.jsx)(m.L,{id:"Q5",className:"field",value:Q.values.Q5,onChange:function(e){Q.setFieldValue("Q5",e.value.Name),console.log(e.value.Name,"selectedxxx value")},options:b,optionLabel:"Name",placeholder:Q.values.Q5})]}),(0,t.jsxs)("div",{className:"field",children:[(0,t.jsxs)("label",{htmlFor:"Q6",children:["6. Machine start up",(0,t.jsx)("h3",{className:"text-sm ml-2subpixel-antialiased text-red-400 font-regular",children:"Follow start up procedure"})]}),(0,t.jsx)(m.L,{id:"Q6",className:"field",value:Q.values.Q6,onChange:function(e){Q.setFieldValue("Q6",e.value.Name),console.log(e.value.Name,"selectedxxx value")},options:b,optionLabel:"Name",placeholder:Q.values.Q6})]}),(0,t.jsxs)("div",{className:"field",children:[(0,t.jsxs)("label",{htmlFor:"Q7",children:["7. Near miss reported in the previous shift",(0,t.jsx)("h3",{className:"text-sm ml-2subpixel-antialiased text-red-400 font-regular",children:"Ensure effective communication to the line structure Implement corrective and preventive actions"})]}),(0,t.jsx)(m.L,{id:"Q7",className:"field",value:Q.values.Q7,onChange:function(e){Q.setFieldValue("Q7",e.value.Name),console.log(e.value.Name,"selectedxxx value")},options:b,optionLabel:"Name",placeholder:Q.values.Q7})]}),(0,t.jsxs)("div",{className:"field",children:[(0,t.jsxs)("label",{htmlFor:"Q8",children:["8. Accident/First aid injury reported in previous shift",(0,t.jsx)("h3",{className:"text-sm ml-2subpixel-antialiased text-red-400 font-regular",children:"Stop all activities and only start after corrective/preventive actions have been implemented Plan for BOS to verify countermeasures remain in place"})]}),(0,t.jsx)(m.L,{id:"Q8",className:"field",value:Q.values.Q8,onChange:function(e){Q.setFieldValue("Q8",e.value.Name),console.log(e.value.Name,"selectedxxx value")},options:b,optionLabel:"Name",placeholder:Q.values.Q8})]}),(0,t.jsxs)("div",{className:"field",children:[(0,t.jsxs)("label",{htmlFor:"Q9",children:["9. Safety interlock/guarding missing/failure",(0,t.jsx)("h3",{className:"text-sm ml-2subpixel-antialiased text-red-400 font-regular",children:"Stop all activities and only start after corrective/preventive actions have been implemented Plan for BOS to verify countermeasures remain in place"})]}),(0,t.jsx)(m.L,{id:"Q9",className:"field",value:Q.values.Q9,onChange:function(e){Q.setFieldValue("Q9",e.value.Name),console.log(e.value.Name,"selectedxxx value")},options:b,optionLabel:"Name",placeholder:Q.values.Q9})]}),(0,t.jsxs)("div",{className:"field",children:[(0,t.jsxs)("label",{htmlFor:"Q10",children:["10. Environmental hazards e.g., smoke, fumes, oil spillage",(0,t.jsx)("h3",{className:"text-sm ml-2subpixel-antialiased text-red-400 font-regular",children:"Stop all activities and only start after corrective/preventive actions have been implemented Plan for BOS to verify countermeasures remain in place"})]}),(0,t.jsx)(m.L,{id:"Q10",className:"field",value:Q.values.Q10,onChange:function(e){Q.setFieldValue("Q10",e.value.Name),console.log(e.value.Name,"selectedxxx value")},options:b,optionLabel:"Name",placeholder:Q.values.Q10})]}),"High"===Q.values.Q13?(0,t.jsxs)("div",{className:"field",children:[(0,t.jsx)("label",{className:"mt-0",htmlFor:"Q10",children:"11. Kindly enter the reason for the setting a high safety trigger"}),(0,t.jsx)(u.o,{className:"field",id:"Q11",name:"Q11",value:Q.values.Q11,onChange:Q.handleChange})]}):null]})})}),(0,t.jsx)(o.z,{className:"border-double mt-4 border-4 border-sky-500 col-12 p-mt-2 p-button-primary",onClick:function(){return Q.handleSubmit()},icon:"pi pi-check",disabled:Q.isSubmitting||!Q.isValid,type:"submit",label:"Submit"})]})}),console.log(Q.errors,"qa errors"),(0,t.jsx)("div",{className:"grid",children:(0,t.jsx)("div",{className:"col-12",children:(0,t.jsx)(o.z,{type:"submit",label:"Enter Data",icon:"pi pi-external-link",onClick:function(){return p(!0)}})})})]})]})}}}]);