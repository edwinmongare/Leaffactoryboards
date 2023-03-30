"use strict";
exports.id = 150;
exports.ids = [150];
exports.modules = {

/***/ 150:
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
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6952);
/* harmony import */ var _safetyTrigger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97);
/* harmony import */ var _TodaysData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6338);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_10__, _QualityTrigger__WEBPACK_IMPORTED_MODULE_11__, _safetyTrigger__WEBPACK_IMPORTED_MODULE_13__, _TodaysData__WEBPACK_IMPORTED_MODULE_14__]);
([axios__WEBPACK_IMPORTED_MODULE_10__, _QualityTrigger__WEBPACK_IMPORTED_MODULE_11__, _safetyTrigger__WEBPACK_IMPORTED_MODULE_13__, _TodaysData__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const MoisturesData = ()=>{
    const { 0: displayBasic2 , 1: setDisplayBasic2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: dropdownItem , 1: setDropdownItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const toast = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_10__["default"].get(`${_apiConfig__WEBPACK_IMPORTED_MODULE_15__/* .apiDevUrl */ .f}getGrades`);
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
    const validationSchemaMoistures = yup__WEBPACK_IMPORTED_MODULE_9__.object().shape({
        CASE_NO: yup__WEBPACK_IMPORTED_MODULE_9__.number().required("Case Number is required"),
        MOISTURE: yup__WEBPACK_IMPORTED_MODULE_9__.number().required("Moisture data is required"),
        TEMPERATURE: yup__WEBPACK_IMPORTED_MODULE_9__.number().required("Temperature data is required"),
        TIME_INSERTED: yup__WEBPACK_IMPORTED_MODULE_9__.date().required("Time is required")
    });
    const formikMoistures = (0,formik__WEBPACK_IMPORTED_MODULE_8__.useFormik)({
        initialValues: {
            CASE_NO: "",
            MOISTURE: "",
            TEMPERATURE: "",
            TIME_INSERTED: new Date()
        },
        validationSchema: validationSchemaMoistures,
        onSubmit: async (values, { setSubmitting , resetForm  })=>{
            try {
                values.DATE = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(), "yyyy-MM-dd HH:mm:ss");
                values.TIME_INSERTED = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(), "yyyy-MM-dd HH:mm:ss"); // Set the current date and time
                const response = await axios__WEBPACK_IMPORTED_MODULE_10__["default"].post(`${_apiConfig__WEBPACK_IMPORTED_MODULE_15__/* .apiDevUrl */ .f}addMoistureData`, values);
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
                setDisplayBasic2(false);
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
                        children: "Moistures Data"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                        header: "Moistures Data",
                        visible: displayBasic2,
                        style: {
                            width: "60vw"
                        },
                        modal: true,
                        onHide: ()=>setDisplayBasic2(false),
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
                                                            htmlFor: "TIME_INSERTED",
                                                            children: "Time"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, {
                                                            id: "TIME_INSERTED",
                                                            name: "TIME_INSERTED",
                                                            disabled: true,
                                                            placeholder: formattedDate,
                                                            type: "text"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    htmlFor: "CASE_NO",
                                                    children: "Case Number"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "field",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, {
                                                        id: "CASE_NO",
                                                        name: "CASE_NO",
                                                        value: formikMoistures.values.CASE_NO,
                                                        onChange: formikMoistures.handleChange,
                                                        placeholder: "Enter the case number",
                                                        type: "text"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "TEMPARTURE",
                                                            children: "Temparture"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, {
                                                            id: "TEMPERATURE",
                                                            name: "TEMPERATURE",
                                                            placeholder: "Enter the temparture data ",
                                                            className: "field",
                                                            value: formikMoistures.values.TEMPERATURE,
                                                            onChange: formikMoistures.handleChange,
                                                            type: "text"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "MOISTURE",
                                                            children: "Moisture"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, {
                                                            id: "MOISTURE",
                                                            name: "MOISTURE",
                                                            placeholder: "Enter the moisture data",
                                                            className: "field",
                                                            value: formikMoistures.values.MOISTURE,
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
                                onClick: ()=>setDisplayBasic2(true)
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoisturesData);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;