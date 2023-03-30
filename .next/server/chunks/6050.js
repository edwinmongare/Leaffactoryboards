"use strict";
exports.id = 6050;
exports.ids = [6050];
exports.modules = {

/***/ 6050:
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
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9648);
/* harmony import */ var _layout_AppTopbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1417);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6952);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_9__]);
axios__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const DegredationV1 = ()=>{
    const { 0: displayDegred1 , 1: setDisplayDegred1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toast = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const today = new Date();
    const formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(today, "yyyy-MM-dd HH:mm:ss");
    const validationSchemaMoistures = yup__WEBPACK_IMPORTED_MODULE_8__.object().shape({
        Q1: yup__WEBPACK_IMPORTED_MODULE_8__.mixed().required("Case Number is required"),
        Q2: yup__WEBPACK_IMPORTED_MODULE_8__.mixed().required("Moisture data is required"),
        Q3: yup__WEBPACK_IMPORTED_MODULE_8__.mixed().required("Temperature data is required"),
        Q4: yup__WEBPACK_IMPORTED_MODULE_8__.mixed().required("Temperature data is required"),
        time_inserted: yup__WEBPACK_IMPORTED_MODULE_8__.date().required("Time is required")
    });
    const formikMoistures = (0,formik__WEBPACK_IMPORTED_MODULE_7__.useFormik)({
        initialValues: {
            Q1: "",
            Q2: "",
            Q3: "",
            Q4: "",
            time_inserted: new Date()
        },
        validationSchema: validationSchemaMoistures,
        onSubmit: async (values, { setSubmitting , resetForm  })=>{
            try {
                values.DATE = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(), "yyyy-MM-dd HH:mm:ss");
                values.time_inserted = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(), "yyyy-MM-dd HH:mm:ss"); // Set the current date and time
                const response = await axios__WEBPACK_IMPORTED_MODULE_9__["default"].post(`${_apiConfig__WEBPACK_IMPORTED_MODULE_11__/* .apiDevUrl */ .f}postDegredationv1`, values);
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
                    life: 10000
                });
                console.log(error, "error");
            } finally{
                setSubmitting(false);
                setDisplayDegred1(false);
            }
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_AppTopbar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                pageTitle: " Data Entry Page"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_toast__WEBPACK_IMPORTED_MODULE_5__.Toast, {
                ref: toast
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "card shadow-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        className: "font-bold",
                        children: "Conditioning Moistures "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                        header: "Conditioning Moistures and Temperatures",
                        visible: displayDegred1,
                        style: {
                            width: "60vw"
                        },
                        modal: true,
                        onHide: ()=>setDisplayDegred1(false),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: formikMoistures.handleSubmit,
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
                                                            htmlFor: "time_inserted",
                                                            children: "Time"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, {
                                                            id: "time_inserted",
                                                            name: "time_inserted",
                                                            disabled: true,
                                                            placeholder: formattedDate,
                                                            type: "text"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    htmlFor: "Q1",
                                                    children: "EXIT 1st CC"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "field",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, {
                                                        id: "Q1",
                                                        name: "Q1",
                                                        value: formikMoistures.values.Q1,
                                                        onChange: formikMoistures.handleChange,
                                                        placeholder: "Enter the EXIT 1st CC Number",
                                                        type: "text"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "Q2",
                                                            children: "TEMP_1st_CC"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, {
                                                            id: "Q2",
                                                            name: "Q2",
                                                            placeholder: "Enter the TEMP_1st_CC< Number",
                                                            className: "field",
                                                            value: formikMoistures.values.Q2,
                                                            onChange: formikMoistures.handleChange,
                                                            type: "text"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "Q3",
                                                            children: "EXIT_2nd_CC"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, {
                                                            id: "Q3",
                                                            name: "Q3",
                                                            placeholder: "Enter the EXIT_2nd_CC Data",
                                                            className: "field",
                                                            value: formikMoistures.values.Q3,
                                                            onChange: formikMoistures.handleChange,
                                                            type: "text"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "Q4",
                                                            children: "TEMP_2nd_CC"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, {
                                                            id: "Q4",
                                                            name: "Q4",
                                                            placeholder: "Enter the TEMP_2nd_CC Number",
                                                            className: "field",
                                                            value: formikMoistures.values.Q4,
                                                            onChange: formikMoistures.handleChange,
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
                                    onClick: ()=>formikMoistures.handleSubmit(),
                                    icon: "pi pi-check",
                                    disabled: formikMoistures.isSubmitting || !formikMoistures.isValid,
                                    type: "submit",
                                    label: "Submit"
                                })
                            ]
                        })
                    }),
                    console.log(formikMoistures.errors, "jd2"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                type: "submit",
                                label: "Enter Data",
                                icon: "pi pi-external-link",
                                onClick: ()=>setDisplayDegred1(true)
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DegredationV1);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;