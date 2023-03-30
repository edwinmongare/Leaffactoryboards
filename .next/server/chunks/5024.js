"use strict";
exports.id = 5024;
exports.ids = [5024];
exports.modules = {

/***/ 5024:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2222);
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(333);
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_toast__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9093);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1404);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_dropdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9648);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6952);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_10__]);
axios__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const QualityTrigger = ()=>{
    const toast = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: qaBasic , 1: setQaBasic  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_9__.object().shape({
        Q1: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("yes or No answer required"),
        Q2: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("yes or No answer required"),
        Q3: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("yes or No answer required"),
        Q4: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("yes or No answer required"),
        Q5: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("yes or No answer required"),
        Q6: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("yes or No answer required"),
        Q7: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("yes or No answer required"),
        Q8: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("yes or No answer required"),
        Q9: yup__WEBPACK_IMPORTED_MODULE_9__.date().required("Date and time required"),
        Q10: yup__WEBPACK_IMPORTED_MODULE_9__.string().notRequired()
    });
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_8__.useFormik)({
        initialValues: {
            Q1: "",
            Q2: "",
            Q3: "",
            Q4: "",
            Q5: "",
            Q6: "",
            Q7: "",
            Q8: "",
            Q9: new Date(),
            Q10: ""
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting , resetForm  })=>{
            try {
                values.Q8 = updateQ8();
                values.Q9 = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(), "yyyy-MM-dd HH:mm");
                const response = await axios__WEBPACK_IMPORTED_MODULE_10__["default"].post(`${_apiConfig__WEBPACK_IMPORTED_MODULE_11__/* .apiDevUrl */ .f}postQualityTrigger`, values);
                console.log(response.data, "response from api");
                if (response.status === 200) {
                    toast.current.show({
                        severity: "success",
                        summary: "Data succesfully submited",
                        detail: "The form data has been posted successfully",
                        life: 10000
                    });
                    resetForm();
                }
            } catch (error) {
                console.log(error);
                toast.current.show({
                    severity: "error",
                    summary: "Error",
                    detail: "There was an error posting the data. Please try again",
                    life: 5000
                });
                console.log(error, "error");
            } finally{
                setSubmitting(false);
                setQaBasic(false);
            }
        }
    });
    const QualityTriggerOptions = [
        {
            id: "1",
            Name: "Yes"
        },
        {
            id: "2",
            Name: "No"
        }
    ];
    const today = new Date();
    const formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(today, "yyyy-MM-dd HH:mm:ss");
    const updateQ8 = ()=>{
        const { Q1 , Q2 , Q3 , Q4 , Q5 , Q6 , Q7  } = formik.values;
        let updatedValue = "";
        if (Q1 === "No" && Q2 === "No" && Q3 === "No" && Q4 === "No" && Q5 === "No" && Q6 === "No" && Q7 === "Yes") {
            updatedValue = "Low";
        } else {
            updatedValue = "High";
        }
        formik.setFieldValue("Q8", updatedValue);
        return updatedValue;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        updateQ8();
    }, [
        formik.values.Q1,
        formik.values.Q2,
        formik.values.Q3,
        formik.values.Q4,
        formik.values.Q5,
        formik.values.Q6,
        formik.values.Q7
    ]);
    console.log(formik.values.Q10, "q10");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_toast__WEBPACK_IMPORTED_MODULE_5__.Toast, {
                ref: toast
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "card shadow-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        className: "font-bold",
                        children: "Quality Trigger"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                        header: `Quality Trigger  (${formik.values.Q8})`,
                        visible: qaBasic,
                        style: {
                            width: "70vw"
                        },
                        modal: true,
                        onHide: ()=>setQaBasic(false),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: formik.handleSubmit,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "grid",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 md:col-12",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "card mb-3 p-fluid",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field grid",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-12 md:col-12",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "Q9",
                                                                    children: "Date"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, {
                                                                    className: "field",
                                                                    id: "Q9",
                                                                    readOnly: true,
                                                                    placeholder: formattedDate,
                                                                    type: "text"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-6 md:col-6",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    className: "mb-5",
                                                                    htmlFor: "Q8",
                                                                    children: "Trigger Status"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, {
                                                                    id: "Q8",
                                                                    hidden: true,
                                                                    className: "field",
                                                                    value: formik.values.Q8,
                                                                    type: "text"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "Q1",
                                                            children: "1. Are we having a weekly startup/have we had any maintenance jobs?"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {
                                                            id: "Q1",
                                                            className: "field",
                                                            value: formik.values.Q1,
                                                            onChange: (e)=>{
                                                                formik.setFieldValue("Q1", e.value.Name);
                                                                console.log(formik.values.Q1, "selectedxxx value");
                                                            },
                                                            options: QualityTriggerOptions,
                                                            optionLabel: "Name",
                                                            placeholder: formik.values.Q1
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "Q2",
                                                            children: "2. Do we expect to have a sample run"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {
                                                            id: "Q2",
                                                            className: "field",
                                                            value: formik.values.Q2,
                                                            onChange: (e)=>{
                                                                formik.setFieldValue("Q2", e.value.Name);
                                                                console.log(e.value.Name, "selectedxxx value");
                                                            },
                                                            options: QualityTriggerOptions,
                                                            optionLabel: "Name",
                                                            placeholder: formik.values.Q2
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "Q3",
                                                            children: "3. Did we have a quality incident or NCP from previous shift"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {
                                                            id: "Q3",
                                                            className: "field",
                                                            value: formik.values.Q3,
                                                            onChange: (e)=>{
                                                                formik.setFieldValue("Q3", e.value.Name);
                                                                console.log(e.value.Name, "selectedxxx value");
                                                            },
                                                            options: QualityTriggerOptions,
                                                            optionLabel: "Name",
                                                            placeholder: formik.values.Q3
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "Q4",
                                                            children: "4. Do we have a new team member"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {
                                                            id: "Q4",
                                                            className: "field",
                                                            value: formik.values.Q4,
                                                            onChange: (e)=>{
                                                                formik.setFieldValue("Q4", e.value.Name);
                                                                console.log(e.value.Name, "selectedxxx value");
                                                            },
                                                            options: QualityTriggerOptions,
                                                            optionLabel: "Name",
                                                            placeholder: formik.values.Q4
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "Q5",
                                                            children: "5. Do we have a grade change/style change?"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {
                                                            id: "Q5",
                                                            className: "field",
                                                            value: formik.values.Q5,
                                                            onChange: (e)=>{
                                                                formik.setFieldValue("Q5", e.value.Name);
                                                                console.log(e.value.Name, "selectedxxx value");
                                                            },
                                                            options: QualityTriggerOptions,
                                                            optionLabel: "Name",
                                                            placeholder: formik.values.Q5
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "Q6",
                                                            children: "6. Are there any other activities going on that may impact QA process and product quality i.e. mop up, line optimization, high NTRM alert from farm, loose materials, wearing machine parts belts etc., infestation above threshold (>1.0 CPT), reefed or contamination"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {
                                                            id: "Q6",
                                                            className: "field",
                                                            value: formik.values.Q6,
                                                            onChange: (e)=>{
                                                                formik.setFieldValue("Q6", e.value.Name);
                                                                console.log(e.value.Name, "selectedxxx value");
                                                            },
                                                            options: QualityTriggerOptions,
                                                            optionLabel: "Name",
                                                            placeholder: formik.values.Q6
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "Q7",
                                                            children: "7. Are all moisture meters working OK"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {
                                                            id: "Q7",
                                                            className: "field",
                                                            value: formik.values.Q7,
                                                            onChange: (e)=>{
                                                                formik.setFieldValue("Q7", e.value.Name);
                                                                console.log(e.value.Name, "selectedxxx value");
                                                            },
                                                            options: QualityTriggerOptions,
                                                            optionLabel: "Name",
                                                            placeholder: formik.values.Q7
                                                        })
                                                    ]
                                                }),
                                                formik.values.Q8 === "High" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            className: "mt-0",
                                                            htmlFor: "Q10",
                                                            children: "8. Kindly enter the reason for the setting a high quality trigger"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, {
                                                            className: "field",
                                                            id: "Q10",
                                                            name: "Q10",
                                                            value: formik.values.Q10,
                                                            onChange: formik.handleChange
                                                        })
                                                    ]
                                                }) : null
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    className: "border-double mt-4 border-4 border-sky-500 col-12 p-mt-2 p-button-primary",
                                    onClick: ()=>formik.handleSubmit(),
                                    icon: "pi pi-check",
                                    disabled: formik.isSubmitting || !formik.isValid,
                                    type: "submit",
                                    label: "Submit"
                                })
                            ]
                        })
                    }),
                    console.log(formik.errors, "qa errors"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                type: "submit",
                                label: "Enter Data",
                                icon: "pi pi-external-link",
                                onClick: ()=>setQaBasic(true)
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QualityTrigger);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;