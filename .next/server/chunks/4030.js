"use strict";
exports.id = 4030;
exports.ids = [4030];
exports.modules = {

/***/ 4030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);

class ProductService {
    constructor(){
        this.contextPath = next_config__WEBPACK_IMPORTED_MODULE_0___default()().publicRuntimeConfig.contextPath;
    }
    getProductsSmall() {
        return fetch(this.contextPath + "/demo/data/products-small.json", {
            headers: {
                "Cache-Control": "no-cache"
            }
        }).then((res)=>res.json()).then((d)=>d.data);
    }
    getProducts() {
        return fetch(this.contextPath + "/demo/data/products.json", {
            headers: {
                "Cache-Control": "no-cache"
            }
        }).then((res)=>res.json()).then((d)=>d.data);
    }
    getProductsWithOrdersSmall() {
        return fetch(this.contextPath + "/demo/data/products-orders-small.json", {
            headers: {
                "Cache-Control": "no-cache"
            }
        }).then((res)=>res.json()).then((d)=>d.data);
    }
}


/***/ })

};
;