"use strict";
exports.id = 6338;
exports.ids = [6338];
exports.modules = {

/***/ 6338:
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
/* harmony import */ var _QualityTrigger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5024);
/* harmony import */ var _layout_AppTopbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1417);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6952);
/* harmony import */ var _safetyTrigger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_10__, _QualityTrigger__WEBPACK_IMPORTED_MODULE_11__, _safetyTrigger__WEBPACK_IMPORTED_MODULE_13__]);
([axios__WEBPACK_IMPORTED_MODULE_10__, _QualityTrigger__WEBPACK_IMPORTED_MODULE_11__, _safetyTrigger__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const TodaysData = ()=>{
    const { 0: displayBasic , 1: setDisplayBasic  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: displayBasic2 , 1: setDisplayBasic2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: dropdownItem , 1: setDropdownItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const toast = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_10__["default"].get(`${_apiConfig__WEBPACK_IMPORTED_MODULE_14__/* .apiDevUrl */ .f}getGrades`);
                const options = response.data.map((item)=>({
                        label: item.Grade
                    }));
                setDropdownItems(options);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    //  console.log(dropdownItem, 'dropdown items');
    const today = new Date();
    const formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(today, "yyyy-MM-dd HH:mm:ss");
    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_9__.object().shape({
        RUNNING_GRADE: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("Grade is required"),
        PROCESS_CODE: yup__WEBPACK_IMPORTED_MODULE_9__.mixed().required("Process code is required")
    });
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_8__.useFormik)({
        initialValues: {
            DATE: `${formattedDate}`,
            RUNNING_GRADE: "",
            PROCESS_CODE: ""
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting , resetForm  })=>{
            try {
                values.DATE = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(), "yyyy-MM-dd HH:mm:ss");
                const response = await axios__WEBPACK_IMPORTED_MODULE_10__["default"].post(`${_apiConfig__WEBPACK_IMPORTED_MODULE_14__/* .apiDevUrl */ .f}postDailyProcessData`, values);
                console.log(response, "response from api");
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
                setDisplayBasic(false);
            }
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_AppTopbar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                pageTitle: "Data Entry Page"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_toast__WEBPACK_IMPORTED_MODULE_5__.Toast, {
                ref: toast
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "card shadow-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        className: "font-bold",
                        children: "Today's Data"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                        header: "Todays Data",
                        visible: displayBasic,
                        style: {
                            width: "60vw"
                        },
                        modal: true,
                        onHide: ()=>setDisplayBasic(false),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: formik.handleSubmit,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "grid",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 md:col-12",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "card p-fluid",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "name1",
                                                            children: "Date"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, {
                                                            id: "name1",
                                                            disabled: true,
                                                            placeholder: formattedDate,
                                                            type: "text"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    htmlFor: "name1",
                                                    children: "Grade"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {
                                                    id: "RUNNING_GRADE",
                                                    className: "field",
                                                    value: formik.values.RUNNING_GRADE,
                                                    onChange: (e)=>{
                                                        formik.setFieldValue("RUNNING_GRADE", e.value.label);
                                                        console.log(e.value.label, "selected value");
                                                    },
                                                    options: dropdownItem,
                                                    optionLabel: "label",
                                                    placeholder: formik.values.RUNNING_GRADE
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "age1",
                                                            children: "Process Code"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, {
                                                            id: "PROCESS_CODE",
                                                            className: "field",
                                                            value: formik.values.PROCESS_CODE,
                                                            onChange: formik.handleChange,
                                                            type: "text"
                                                        })
                                                    ]
                                                })
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
                    console.log(formik.errors, "jd"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                type: "submit",
                                label: "Enter Data",
                                icon: "pi pi-external-link",
                                onClick: ()=>setDisplayBasic(true)
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodaysData);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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












const SafetyTrigger = ()=>{
    const toast = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: safetyBasic , 1: setSafetyBasic  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_9__.object().shape({
        Q1: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("yes or No answer required"),
        Q2: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("yes or No answer required"),
        Q3: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("yes or No answer required"),
        Q4: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("yes or No answer required"),
        Q5: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("yes or No answer required"),
        Q6: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("yes or No answer required"),
        Q7: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("yes or No answer required"),
        Q8: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("yes or No answer required"),
        Q9: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("yes or No answer required"),
        Q10: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("yes or No answer required"),
        Q11: yup__WEBPACK_IMPORTED_MODULE_9__.string(),
        Q12: yup__WEBPACK_IMPORTED_MODULE_9__.date().required("Date and time required"),
        Q13: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("yes or No answer required")
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
            Q9: "",
            Q10: "",
            Q11: "",
            Q12: new Date(),
            Q13: ""
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting , resetForm  })=>{
            try {
                values.Q13 = updateQ13();
                values.Q9 = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(), "yyyy-MM-dd HH:mm");
                const response = await axios__WEBPACK_IMPORTED_MODULE_10__["default"].post(`${_apiConfig__WEBPACK_IMPORTED_MODULE_11__/* .apiDevUrl */ .f}safetyTrigger`, values);
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
                setSafetyBasic(false);
            }
        }
    });
    const QualityTriggerOptions = [
        {
            id: "Yes",
            Name: "1"
        },
        {
            id: "No",
            Name: "0"
        }
    ];
    const today = new Date();
    const formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(today, "yyyy-MM-dd HH:mm:ss");
    const updateQ13 = ()=>{
        const { Q1 , Q2 , Q3 , Q4 , Q5 , Q6 , Q7 , Q8 , Q9 , Q10  } = formik.values;
        let updatedValue = "";
        const sum = parseInt(Q1) + parseInt(Q2) + parseInt(Q3) + parseInt(Q4) + parseInt(Q5) + parseInt(Q6) + parseInt(Q7) + parseInt(Q8) + parseInt(Q9) + parseInt(Q10);
        if (sum <= 3) {
            updatedValue = "Low";
        } else if (sum >= 4 && sum <= 6) {
            updatedValue = "Medium";
        } else {
            updatedValue = "High";
        }
        formik.setFieldValue("Q13", updatedValue);
        return updatedValue;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        updateQ13();
    }, [
        formik.values.Q1,
        formik.values.Q2,
        formik.values.Q3,
        formik.values.Q4,
        formik.values.Q5,
        formik.values.Q6,
        formik.values.Q7,
        formik.values.Q8,
        formik.values.Q9,
        formik.values.Q10
    ]);
    console.log(formik.values.Q1, "q1");
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
                        children: "Safety Trigger"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                        header: `Safety Trigger  (${formik.values.Q13})`,
                        visible: safetyBasic,
                        style: {
                            width: "80vw"
                        },
                        modal: true,
                        onHide: ()=>setSafetyBasic(false),
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
                                                                    htmlFor: "Q12",
                                                                    children: "Date"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, {
                                                                    className: "field",
                                                                    id: "Q12",
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
                                                                    htmlFor: "Q12",
                                                                    children: "Safety Trigger Status"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, {
                                                                    id: "Q13",
                                                                    hidden: true,
                                                                    className: "field",
                                                                    value: formik.values.Q13,
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
                                                            children: "1. Are Routine operations ongoing, proper working tools, adequate PPE and qualified/adequate staffing?"
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
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            htmlFor: "Q2",
                                                            children: [
                                                                "2. Are there Non routine operations eg maintenance, deep cleaning, breakdown",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "text-sm ml-2subpixel-antialiased text-red-400 font-regular",
                                                                    children: "Complete the QRP form before commencement of the activity"
                                                                })
                                                            ]
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
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            htmlFor: "Q3",
                                                            children: [
                                                                "3. NPI running with non factory staff on the floor",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "text-sm ml-2subpixel-antialiased text-red-400 font-regular",
                                                                    children: "Conduct safety induction and team to be accompanied always by GLT Staff"
                                                                })
                                                            ]
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
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            htmlFor: "Q4",
                                                            children: [
                                                                "4. Team staffing less than set standard or there is new staff on the line",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "text-sm ml-2subpixel-antialiased text-red-400 font-regular",
                                                                    children: "Reallocation of the staff members to cover high risk areas New staff to shadow and be attached to the experienced staff members"
                                                                })
                                                            ]
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
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            htmlFor: "Q5",
                                                            children: [
                                                                "5. Visitors in the factory area",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "text-sm ml-2subpixel-antialiased text-red-400 font-regular",
                                                                    children: "Conduct safety induction and team to be accompanied always by GLT Staff"
                                                                })
                                                            ]
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
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            htmlFor: "Q6",
                                                            children: [
                                                                "6. Machine start up",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "text-sm ml-2subpixel-antialiased text-red-400 font-regular",
                                                                    children: "Follow start up procedure"
                                                                })
                                                            ]
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
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            htmlFor: "Q7",
                                                            children: [
                                                                "7. Near miss reported in the previous shift",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "text-sm ml-2subpixel-antialiased text-red-400 font-regular",
                                                                    children: "Ensure effective communication to the line structure Implement corrective and preventive actions"
                                                                })
                                                            ]
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
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            htmlFor: "Q8",
                                                            children: [
                                                                "8. Accident/First aid injury reported in previous shift",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "text-sm ml-2subpixel-antialiased text-red-400 font-regular",
                                                                    children: "Stop all activities and only start after corrective/preventive actions have been implemented Plan for BOS to verify countermeasures remain in place"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {
                                                            id: "Q8",
                                                            className: "field",
                                                            value: formik.values.Q8,
                                                            onChange: (e)=>{
                                                                formik.setFieldValue("Q8", e.value.Name);
                                                                console.log(e.value.Name, "selectedxxx value");
                                                            },
                                                            options: QualityTriggerOptions,
                                                            optionLabel: "Name",
                                                            placeholder: formik.values.Q8
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            htmlFor: "Q9",
                                                            children: [
                                                                "9. Safety interlock/guarding missing/failure",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "text-sm ml-2subpixel-antialiased text-red-400 font-regular",
                                                                    children: "Stop all activities and only start after corrective/preventive actions have been implemented Plan for BOS to verify countermeasures remain in place"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {
                                                            id: "Q9",
                                                            className: "field",
                                                            value: formik.values.Q9,
                                                            onChange: (e)=>{
                                                                formik.setFieldValue("Q9", e.value.Name);
                                                                console.log(e.value.Name, "selectedxxx value");
                                                            },
                                                            options: QualityTriggerOptions,
                                                            optionLabel: "Name",
                                                            placeholder: formik.values.Q9
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            htmlFor: "Q10",
                                                            children: [
                                                                "10. Environmental hazards e.g., smoke, fumes, oil spillage",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "text-sm ml-2subpixel-antialiased text-red-400 font-regular",
                                                                    children: "Stop all activities and only start after corrective/preventive actions have been implemented Plan for BOS to verify countermeasures remain in place"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {
                                                            id: "Q10",
                                                            className: "field",
                                                            value: formik.values.Q10,
                                                            onChange: (e)=>{
                                                                formik.setFieldValue("Q10", e.value.Name);
                                                                console.log(e.value.Name, "selectedxxx value");
                                                            },
                                                            options: QualityTriggerOptions,
                                                            optionLabel: "Name",
                                                            placeholder: formik.values.Q10
                                                        })
                                                    ]
                                                }),
                                                formik.values.Q13 === "High" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            className: "mt-0",
                                                            htmlFor: "Q10",
                                                            children: "11. Kindly enter the reason for the setting a high safety trigger"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, {
                                                            className: "field",
                                                            id: "Q11",
                                                            name: "Q11",
                                                            value: formik.values.Q11,
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
                                onClick: ()=>setSafetyBasic(true)
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SafetyTrigger);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;