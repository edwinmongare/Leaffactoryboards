"use strict";
exports.id = 7849;
exports.ids = [7849];
exports.modules = {

/***/ 6952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ apiDevUrl)
/* harmony export */ });
/* unused harmony export apiProductionUrl */
const apiProductionUrl = "https://10.16.9.2/api/getData/";
const apiDevUrl = "http://localhost:8080/api/getData/";



/***/ }),

/***/ 1417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_layoutcontext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(389);





const AppTopbar = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)((props, ref)=>{
    const { showProfileSidebar  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_layoutcontext__WEBPACK_IMPORTED_MODULE_4__/* .LayoutContext */ .V);
    const menubuttonRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const topbarmenuRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const topbarmenubuttonRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const contextPath = next_config__WEBPACK_IMPORTED_MODULE_1___default()().publicRuntimeConfig.contextPath;
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useImperativeHandle)(ref, ()=>({
            menubutton: menubuttonRef.current,
            topbarmenu: topbarmenuRef.current,
            topbarmenubutton: topbarmenubuttonRef.current
        }));
    const pageTitle = props.pageTitle || "";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "layout-topbar",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "layout-topbar-logo",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `${contextPath}/layout/images/logo.png`,
                            height: "95px",
                            widt: "true",
                            alt: "logo"
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                ref: topbarmenubuttonRef,
                type: "button",
                className: "p-link layout-topbar-menu-button layout-topbar-button",
                onClick: showProfileSidebar
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12 xl:col-12 mt-3 col-md-12 text-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                        className: "text-900 ml-5 text-black font-semibold",
                        children: [
                            "Leaf Boards -",
                            pageTitle
                        ]
                    })
                })
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppTopbar);


/***/ })

};
;