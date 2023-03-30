"use strict";
exports.id = 4442;
exports.ids = [4442];
exports.modules = {

/***/ 4442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2250);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_inputswitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5452);
/* harmony import */ var primereact_inputswitch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_inputswitch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_radiobutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2948);
/* harmony import */ var primereact_radiobutton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_radiobutton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2720);
/* harmony import */ var primereact_sidebar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_sidebar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4355);
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_utils__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _context_layoutcontext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(389);










const AppConfig = (props)=>{
    const { 0: scales  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([
        12,
        13,
        14,
        15,
        16
    ]);
    const { layoutConfig , setLayoutConfig , layoutState , setLayoutState  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useContext)(_context_layoutcontext__WEBPACK_IMPORTED_MODULE_9__/* .LayoutContext */ .V);
    const contextPath = next_config__WEBPACK_IMPORTED_MODULE_1___default()().publicRuntimeConfig.contextPath;
    const onConfigButtonClick = ()=>{
        setLayoutState((prevState)=>({
                ...prevState,
                configSidebarVisible: true
            }));
    };
    const onConfigSidebarHide = ()=>{
        setLayoutState((prevState)=>({
                ...prevState,
                configSidebarVisible: false
            }));
    };
    const changeInputStyle = (e)=>{
        setLayoutConfig((prevState)=>({
                ...prevState,
                inputStyle: e.value
            }));
    };
    const changeRipple = (e)=>{
        (primereact_api__WEBPACK_IMPORTED_MODULE_2___default().ripple) = e.value;
        setLayoutConfig((prevState)=>({
                ...prevState,
                ripple: e.value
            }));
    };
    const changeMenuMode = (e)=>{
        setLayoutConfig((prevState)=>({
                ...prevState,
                menuMode: e.value
            }));
    };
    const changeTheme = (theme, colorScheme)=>{
        const themeLink = document.getElementById("theme-css");
        const themeHref = themeLink ? themeLink.getAttribute("href") : null;
        const newHref = themeHref ? themeHref.replace(layoutConfig.theme, theme) : null;
        replaceLink(themeLink, newHref, ()=>{
            setLayoutConfig((prevState)=>({
                    ...prevState,
                    theme,
                    colorScheme
                }));
        });
    };
    const replaceLink = (linkElement, href, onComplete)=>{
        if (!linkElement || !href) {
            return;
        }
        const id = linkElement.getAttribute("id");
        const cloneLinkElement = linkElement.cloneNode(true);
        cloneLinkElement.setAttribute("href", href);
        cloneLinkElement.setAttribute("id", id + "-clone");
        linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
        cloneLinkElement.addEventListener("load", ()=>{
            linkElement.remove();
            const element = document.getElementById(id); // re-check
            element && element.remove();
            cloneLinkElement.setAttribute("id", id);
            onComplete && onComplete();
        });
    };
    const decrementScale = ()=>{
        setLayoutConfig((prevState)=>({
                ...prevState,
                scale: prevState.scale - 1
            }));
    };
    const incrementScale = ()=>{
        setLayoutConfig((prevState)=>({
                ...prevState,
                scale: prevState.scale + 1
            }));
    };
    const applyScale = ()=>{
        document.documentElement.style.fontSize = layoutConfig.scale + "px";
    };
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        applyScale();
    }, [
        layoutConfig.scale
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "layout-config-button p-link",
                type: "button",
                onClick: onConfigButtonClick,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "pi pi-cog"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_sidebar__WEBPACK_IMPORTED_MODULE_6__.Sidebar, {
                visible: layoutState.configSidebarVisible,
                onHide: onConfigSidebarHide,
                position: "right",
                className: "layout-config-sidebar w-20rem",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "Scale"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex align-items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                icon: "pi pi-minus",
                                type: "button",
                                onClick: decrementScale,
                                className: "p-button-text p-button-rounded w-2rem h-2rem mr-2",
                                disabled: layoutConfig.scale === scales[0]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex gap-2 align-items-center",
                                children: scales.map((item)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_7__.classNames)("pi pi-circle-fill", {
                                            "text-primary-500": item === layoutConfig.scale,
                                            "text-300": item !== layoutConfig.scale
                                        })
                                    }, item);
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                icon: "pi pi-plus",
                                type: "button",
                                onClick: incrementScale,
                                className: "p-button-text p-button-rounded w-2rem h-2rem ml-2",
                                disabled: layoutConfig.scale === scales[scales.length - 1]
                            })
                        ]
                    }),
                    !props.simple && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "Menu Type"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                class: "flex",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "field-radiobutton flex-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_radiobutton__WEBPACK_IMPORTED_MODULE_5__.RadioButton, {
                                                name: "menuMode",
                                                value: "static",
                                                checked: layoutConfig.menuMode === "static",
                                                onChange: (e)=>changeMenuMode(e),
                                                inputId: "mode1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "mode1",
                                                children: "Static"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "field-radiobutton flex-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_radiobutton__WEBPACK_IMPORTED_MODULE_5__.RadioButton, {
                                                name: "menuMode",
                                                value: "overlay",
                                                checked: layoutConfig.menuMode === "overlay",
                                                onChange: (e)=>changeMenuMode(e),
                                                inputId: "mode2"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "mode2",
                                                children: "Overlay"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "Input Style"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "field-radiobutton flex-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_radiobutton__WEBPACK_IMPORTED_MODULE_5__.RadioButton, {
                                        name: "inputStyle",
                                        value: "outlined",
                                        checked: layoutConfig.inputStyle === "outlined",
                                        onChange: (e)=>changeInputStyle(e),
                                        inputId: "outlined_input"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "outlined_input",
                                        children: "Outlined"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "field-radiobutton flex-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_radiobutton__WEBPACK_IMPORTED_MODULE_5__.RadioButton, {
                                        name: "inputStyle",
                                        value: "filled",
                                        checked: layoutConfig.inputStyle === "filled",
                                        onChange: (e)=>changeInputStyle(e),
                                        inputId: "filled_input"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "filled_input",
                                        children: "Filled"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "Ripple Effect"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputswitch__WEBPACK_IMPORTED_MODULE_4__.InputSwitch, {
                        checked: layoutConfig.ripple,
                        onChange: (e)=>changeRipple(e)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "Bootstrap"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("bootstrap4-light-blue", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/bootstrap4-light-blue.svg`,
                                        className: "w-2rem h-2rem",
                                        alt: "Bootstrap Light Blue"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("bootstrap4-light-purple", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/bootstrap4-light-purple.svg`,
                                        className: "w-2rem h-2rem",
                                        alt: "Bootstrap Light Purple"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("bootstrap4-dark-blue", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/bootstrap4-dark-blue.svg`,
                                        className: "w-2rem h-2rem",
                                        alt: "Bootstrap Dark Blue"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("bootstrap4-dark-purple", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/bootstrap4-dark-purple.svg`,
                                        className: "w-2rem h-2rem",
                                        alt: "Bootstrap Dark Purple"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "Material Design"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("md-light-indigo", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/md-light-indigo.svg`,
                                        className: "w-2rem h-2rem",
                                        alt: "Material Light Indigo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("md-light-deeppurple", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/md-light-deeppurple.svg`,
                                        className: "w-2rem h-2rem",
                                        alt: "Material Light DeepPurple"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("md-dark-indigo", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/md-dark-indigo.svg`,
                                        className: "w-2rem h-2rem",
                                        alt: "Material Dark Indigo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("md-dark-deeppurple", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/md-dark-deeppurple.svg`,
                                        className: "w-2rem h-2rem",
                                        alt: "Material Dark DeepPurple"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "Material Design Compact"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("mdc-light-indigo", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/md-light-indigo.svg`,
                                        className: "w-2rem h-2rem",
                                        alt: "Material Light Indigo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("mdc-light-deeppurple", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/md-light-deeppurple.svg`,
                                        className: "w-2rem h-2rem",
                                        alt: "Material Light Deep Purple"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("mdc-dark-indigo", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/md-dark-indigo.svg`,
                                        className: "w-2rem h-2rem",
                                        alt: "Material Dark Indigo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("mdc-dark-deeppurple", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/md-dark-deeppurple.svg`,
                                        className: "w-2rem h-2rem",
                                        alt: "Material Dark Deep Purple"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "Tailwind"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>changeTheme("tailwind-light", "light"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: `${contextPath}/layout/images/themes/tailwind-light.png`,
                                    className: "w-2rem h-2rem",
                                    alt: "Tailwind Light"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "Fluent UI"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>changeTheme("fluent-light", "light"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: `${contextPath}/layout/images/themes/fluent-light.png`,
                                    className: "w-2rem h-2rem",
                                    alt: "Fluent Light"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "PrimeOne Design - 2022"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("lara-light-indigo", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/lara-light-indigo.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Lara Light Indigo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("lara-light-blue", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/lara-light-blue.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Lara Light Blue"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("lara-light-purple", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/lara-light-purple.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Lara Light Purple"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("lara-light-teal", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/lara-light-teal.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Lara Light Teal"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("lara-dark-indigo", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/lara-dark-indigo.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Lara Dark Indigo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("lara-dark-blue", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/lara-dark-blue.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Lara Dark Blue"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("lara-dark-purple", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/lara-dark-purple.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Lara Dark Purple"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("lara-dark-teal", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/lara-dark-teal.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Lara Dark Teal"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "PrimeOne Design - 2021"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("saga-blue", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/saga-blue.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Saga Blue"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("saga-green", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/saga-green.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Saga Green"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("saga-orange", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/saga-orange.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Saga Orange"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("saga-purple", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/saga-purple.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Saga Purple"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("vela-blue", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/vela-blue.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Vela Blue"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("vela-green", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/vela-green.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Vela Green"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("vela-orange", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/vela-orange.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Vela Orange"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("vela-purple", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/vela-purple.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Vela Purple"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("arya-blue", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/arya-blue.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Arya Blue"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("arya-green", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/arya-green.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Arya Green"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("arya-orange", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/arya-orange.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Arya Orange"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>changeTheme("arya-purple", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/arya-purple.png`,
                                        className: "w-2rem h-2rem",
                                        alt: "Arya Purple"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppConfig);


/***/ })

};
;