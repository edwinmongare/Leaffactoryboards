"use strict";
exports.id = 5000;
exports.ids = [5000];
exports.modules = {

/***/ 5000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Greetings = ({ initialTime  })=>{
    const { 0: time , 1: setTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date(initialTime));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timerID = setInterval(()=>tick(), 1000);
        return ()=>clearInterval(timerID);
    });
    const tick = ()=>{
        setTime(new Date());
    };
    const formatTime = (time)=>{
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const amOrPm = hours < 12 ? "AM" : "PM";
        const formattedHours = hours % 12 || 12;
        return `${formattedHours < 10 ? "0" + formattedHours : formattedHours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds} ${amOrPm}`;
    };
    const getGreeting = ()=>{
        const hour = time.getHours();
        if (hour < 12) {
            return "Good Morning,";
        } else if (hour < 18) {
            return "Good Afternoon,";
        } else {
            return "Good Evening,";
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "card shadow-3 col-12 flex flex-row items-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "mb-0 text-xl text-blue-700 font-bold ",
                        children: getGreeting()
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "mb-0 text-xl text-black-700 font-bold ",
                        children: "What would you like to do today?"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex-1",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                    className: "mb-0 text-right text-lg text-black-700 mb-0",
                    children: [
                        "Time:",
                        formatTime(time)
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Greetings);


/***/ })

};
;