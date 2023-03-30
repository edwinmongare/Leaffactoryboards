(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888,2690,1137];
exports.modules = {

/***/ 2911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_layoutcontext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(389);




const AppFooter = ()=>{
    const { layoutConfig  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_layoutcontext__WEBPACK_IMPORTED_MODULE_3__/* .LayoutContext */ .V);
    const contextPath = next_config__WEBPACK_IMPORTED_MODULE_1___default()().publicRuntimeConfig.contextPath;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "layout-footer",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "font-medium ml-2",
            children: "Leaf Kenya 2023"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppFooter);


/***/ }),

/***/ 822:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_menucontext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4640);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6952);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const AppMenu = ()=>{
    const contextPath = next_config__WEBPACK_IMPORTED_MODULE_5___default()().publicRuntimeConfig.contextPath;
    const { 0: combinedData , 1: setCombinedData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: dailyData , 1: setDailyData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: meanData , 1: setMeanData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: lastUpdate , 1: setLastUpdate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Date.now());
    const { 0: triggerStatus , 1: setTriggerStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: safetyTriggerStatus , 1: setSafetyTriggerStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const interval = setInterval(()=>{
            setLastUpdate(Date.now());
        }, 3000);
        return ()=>clearInterval(interval);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`${_apiConfig__WEBPACK_IMPORTED_MODULE_7__/* .apiDevUrl */ .f}getDailyProcessData`, {
            params: {
                lastUpdate
            }
        }).then((response)=>{
            setDailyData(response.data);
        }).catch((error)=>{
            console.log(error);
        });
        axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`${_apiConfig__WEBPACK_IMPORTED_MODULE_7__/* .apiDevUrl */ .f}getMeanAndSD`, {
            params: {
                lastUpdate
            }
        }).then((response)=>{
            setMeanData(response.data);
        }).catch((error)=>{
            console.log(error);
        });
    }, [
        lastUpdate
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const combined = dailyData.map((dailyItem, index)=>({
                ...dailyItem,
                ...meanData[index]
            }));
        setCombinedData(combined);
    }, [
        dailyData,
        meanData
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`${_apiConfig__WEBPACK_IMPORTED_MODULE_7__/* .apiDevUrl */ .f}getQualityTrigger`, {
            params: {
                lastUpdate
            }
        }).then((response)=>{
            setTriggerStatus(response.data);
        }).catch((error)=>{
            console.log(error);
        });
    }, [
        lastUpdate
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`${_apiConfig__WEBPACK_IMPORTED_MODULE_7__/* .apiDevUrl */ .f}getSafetyTrigger`, {
            params: {
                lastUpdate
            }
        }).then((response)=>{
            setSafetyTriggerStatus(response.data);
        }).catch((error)=>{
            console.log(error);
        });
    }, [
        lastUpdate
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_context_menucontext__WEBPACK_IMPORTED_MODULE_6__/* .MenuProvider */ .K, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 xl:col-12 mt-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "card shadow-3",
                            children: combinedData.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 50
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 2.5
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "p-0 mx-0 mt-0 mb-1 list-none",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "flex align-items-center py-0 border-bottom-1 surface-border",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-1rem h-1rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "pi pi-clock text-xl text-blue-500"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "text-900 font-bold line-height-3",
                                                        children: [
                                                            "Date: ",
                                                            (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(new Date(item.DATE), "dd MMM yyyy")
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "flex align-items-center py-1 border-bottom-1 surface-border",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-1rem h-1rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "pi pi-box text-xl text-blue-500"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-900 font-bold line-height-3",
                                                        children: "Grade:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-900 font-bold line-height-3",
                                                        children: item.RUNNING_GRADE
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }))
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 xl:col-12 mt-0 mb-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "card shadow-3 mb-0",
                            children: combinedData.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 50
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 2.5
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "p-0 mx-0 mt-0 mb-0 list-none",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "flex align-items-center py-1 border-bottom-1 surface-border",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `w-1rem h-1rem flex align-items-center justify-content-center bg-${item.mean >= 13.2 && item.mean <= 13.8 ? "" : item.mean < 13.2 ? "green" : "red"}700 border-circle mr-3 flex-shrink-0`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: `pi pi-chart-line text-xl text-${item.mean >= 13.2 && item.mean <= 13.8 ? "" : item.mean < 13.2 ? "green" : "red"}-700`
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: `text-900 font-bold line-height-3 ${item.mean >= 13.2 && item.mean <= 13.8 ? "" : item.mean < 13.2 ? "text-green-700" : "text-red-700"}`,
                                                        children: [
                                                            "Moisture Mean: ",
                                                            item.mean?.toFixed(2)
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "flex align-items-center py-1 border-bottom-1 surface-border",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `w-1rem h-1rem flex align-items-center justify-content-center bg-${item.sd > 0.16 ? "text-red-500" : "text-green-500"}-100 border-circle mr-3 flex-shrink-0`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: `pi pi-chart-bar text-xl text-blue-500 ${item.sd > 0.16 ? "text-red-500" : "text-green-500"}`
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: `text-900 font-bold line-height-3 ${item.sd > 0.16 ? "text-red-500" : "text-green-500"}`,
                                                        children: [
                                                            "Moisture SD : ",
                                                            item.sd?.toFixed(2)
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid card shadow-3 p-2 mx-0 mt-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-6 xl:col-6 mb-0 max-h-0.5 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 xl:col-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-lg subpixel-antialiased font-bold",
                                    children: "Safety Trigger"
                                })
                            }),
                            safetyTriggerStatus.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "",
                                    children: [
                                        item.trigger_status === "Low" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "w-full mt-0",
                                            src: `${contextPath}/layout/images/traffic_lifghts/low quality.svg`,
                                            alt: "Low Quality"
                                        }),
                                        item.trigger_status === "Medium" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "w-full mt-0",
                                            src: `${contextPath}/layout/images/traffic_lifghts/mediuim_quality.svg`,
                                            alt: "Medium Quality"
                                        }),
                                        item.trigger_status === "High" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "w-full mt-0",
                                            src: `${contextPath}/layout/images/traffic_lifghts/high_quality.svg`,
                                            alt: "High Quality"
                                        })
                                    ]
                                }))
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-6 xl:col-6 mb-0 max-h-0.5 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 xl:col-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-lg subpixel-antialiased font-bold",
                                    children: "Quality Trigger"
                                })
                            }),
                            triggerStatus.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "",
                                    children: [
                                        item.safety_trigger === "Low" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "w-full mt-0",
                                            src: `${contextPath}/layout/images/traffic_lifghts/LowQuality.svg`,
                                            alt: "Low Safety Trigger"
                                        }),
                                        item.safety_trigger === "High" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "w-full mt-0",
                                            src: `${contextPath}/layout/images/traffic_lifghts/HighQuality.svg`,
                                            alt: "High Safety Trigger"
                                        })
                                    ]
                                }))
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 480:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(822);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AppMenu__WEBPACK_IMPORTED_MODULE_1__]);
_AppMenu__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const AppSidebar = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AppMenu__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        "shadow-2": true
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppSidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ MenuProvider)
/* harmony export */ });
/* unused harmony export MenuContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const MenuContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
const MenuProvider = (props)=>{
    const { 0: activeMenu , 1: setActiveMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const value = {
        activeMenu,
        setActiveMenu
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuContext.Provider, {
        value: value,
        children: props.children
    });
};


/***/ }),

/***/ 3389:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1439);
/* harmony import */ var primereact_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4355);
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _AppFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2911);
/* harmony import */ var _AppSidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(480);
/* harmony import */ var _AppTopbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1417);
/* harmony import */ var _AppConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4442);
/* harmony import */ var _context_layoutcontext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(389);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2250);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primereact_api__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AppSidebar__WEBPACK_IMPORTED_MODULE_8__]);
_AppSidebar__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const Layout = (props)=>{
    const { layoutConfig , layoutState , setLayoutState  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_context_layoutcontext__WEBPACK_IMPORTED_MODULE_11__/* .LayoutContext */ .V);
    const topbarRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);
    const sidebarRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);
    const contextPath = next_config__WEBPACK_IMPORTED_MODULE_1___default()().publicRuntimeConfig.contextPath;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [bindMenuOutsideClickListener, unbindMenuOutsideClickListener] = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_4__.useEventListener)({
        type: "click",
        listener: (event)=>{
            const isOutsideClicked = !(sidebarRef.current.isSameNode(event.target) || sidebarRef.current.contains(event.target) || topbarRef.current.menubutton.isSameNode(event.target) || topbarRef.current.menubutton.contains(event.target));
            if (isOutsideClicked) {
                hideMenu();
            }
        }
    });
    const [bindProfileMenuOutsideClickListener, unbindProfileMenuOutsideClickListener] = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_4__.useEventListener)({
        type: "click",
        listener: (event)=>{
            const isOutsideClicked = !(topbarRef.current.topbarmenu.isSameNode(event.target) || topbarRef.current.topbarmenu.contains(event.target) || topbarRef.current.topbarmenubutton.isSameNode(event.target) || topbarRef.current.topbarmenubutton.contains(event.target));
            if (isOutsideClicked) {
                hideProfileMenu();
            }
        }
    });
    const hideMenu = ()=>{
        setLayoutState((prevLayoutState)=>({
                ...prevLayoutState,
                overlayMenuActive: false,
                staticMenuMobileActive: false,
                menuHoverActive: false
            }));
        unbindMenuOutsideClickListener();
        unblockBodyScroll();
    };
    const hideProfileMenu = ()=>{
        setLayoutState((prevLayoutState)=>({
                ...prevLayoutState,
                profileSidebarVisible: false
            }));
        unbindProfileMenuOutsideClickListener();
    };
    const blockBodyScroll = ()=>{
        primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.addClass("blocked-scroll");
    };
    const unblockBodyScroll = ()=>{
        primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.removeClass("blocked-scroll");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (layoutState.overlayMenuActive || layoutState.staticMenuMobileActive) {
            bindMenuOutsideClickListener();
        }
        layoutState.staticMenuMobileActive && blockBodyScroll();
    }, [
        layoutState.overlayMenuActive,
        layoutState.staticMenuMobileActive
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (layoutState.profileSidebarVisible) {
            bindProfileMenuOutsideClickListener();
        }
    }, [
        layoutState.profileSidebarVisible
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        router.events.on("routeChangeComplete", ()=>{
            hideMenu();
            hideProfileMenu();
        });
    }, []);
    (primereact_api__WEBPACK_IMPORTED_MODULE_12___default().ripple) = true;
    (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_4__.useUnmountEffect)(()=>{
        unbindMenuOutsideClickListener();
        unbindProfileMenuOutsideClickListener();
    });
    const containerClass = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_5__.classNames)("layout-wrapper", {
        "layout-theme-light": layoutConfig.colorScheme === "light",
        "layout-theme-dark": layoutConfig.colorScheme === "dark",
        "layout-overlay": layoutConfig.menuMode === "overlay",
        "layout-static": layoutConfig.menuMode === "static",
        "layout-static-inactive": layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === "static",
        "layout-overlay-active": layoutState.overlayMenuActive,
        "layout-mobile-active": layoutState.staticMenuMobileActive,
        "p-input-filled": layoutConfig.inputStyle === "filled",
        "p-ripple-disabled": !layoutConfig.ripple
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Leaf Factory Boards"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Leaf Factory Boards"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: "Leaf Boards"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:ttl",
                        content: "604800"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: `${contextPath}/Bat_favicon.ico`,
                        type: "image/x-icon"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: containerClass,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AppTopbar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        ref: topbarRef
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: sidebarRef,
                        className: "layout-sidebar",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AppSidebar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "layout-main-container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "layout-main",
                                children: props.children
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AppFooter__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "layout-mask"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_context_layoutcontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(389);
/* harmony import */ var _layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3389);
/* harmony import */ var primereact_resources_primereact_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1909);
/* harmony import */ var primereact_resources_primereact_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_primereact_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_layout__WEBPACK_IMPORTED_MODULE_3__]);
_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function MyApp({ Component , pageProps  }) {
    if (Component.getLayout) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_context_layoutcontext__WEBPACK_IMPORTED_MODULE_2__/* .LayoutProvider */ .a, {
            children: Component.getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }))
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_context_layoutcontext__WEBPACK_IMPORTED_MODULE_2__/* .LayoutProvider */ .a, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1909:
/***/ (() => {



/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 4558:
/***/ ((module) => {

"use strict";
module.exports = require("next/config");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 2250:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/api");

/***/ }),

/***/ 1088:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/button");

/***/ }),

/***/ 1439:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/hooks");

/***/ }),

/***/ 5452:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/inputswitch");

/***/ }),

/***/ 2948:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/radiobutton");

/***/ }),

/***/ 2720:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/sidebar");

/***/ }),

/***/ 4355:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/utils");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,389,7849,4442], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();