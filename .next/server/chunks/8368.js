"use strict";
exports.id = 8368;
exports.ids = [8368];
exports.modules = {

/***/ 8368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_menubar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4130);
/* harmony import */ var primereact_menubar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_menubar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9093);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5640);
/* harmony import */ var primereact_breadcrumb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_breadcrumb__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_steps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5335);
/* harmony import */ var primereact_steps__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_steps__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_tabmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5826);
/* harmony import */ var primereact_tabmenu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_tabmenu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_tieredmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2667);
/* harmony import */ var primereact_tieredmenu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_tieredmenu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8104);
/* harmony import */ var primereact_menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primereact_contextmenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3570);
/* harmony import */ var primereact_contextmenu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primereact_contextmenu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primereact_megamenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7990);
/* harmony import */ var primereact_megamenu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primereact_megamenu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primereact_panelmenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4449);
/* harmony import */ var primereact_panelmenu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primereact_panelmenu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);














const MenuDemo = ({ children  })=>{
    const { 0: activeIndex , 1: setActiveIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const menu = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const contextMenu = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    const checkActiveIndex = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const paths = router.pathname.split("/");
        const currentPath = paths[paths.length - 1];
        switch(currentPath){
            case "seat":
                setActiveIndex(1);
                break;
            case "payment":
                setActiveIndex(2);
                break;
            case "confirmation":
                setActiveIndex(3);
                break;
            default:
                break;
        }
    }, [
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        checkActiveIndex();
    }, [
        checkActiveIndex
    ]);
    const nestedMenuitems = [
        {
            label: "Customers",
            icon: "pi pi-fw pi-table",
            items: [
                {
                    label: "New",
                    icon: "pi pi-fw pi-user-plus",
                    items: [
                        {
                            label: "Customer",
                            icon: "pi pi-fw pi-plus"
                        },
                        {
                            label: "Duplicate",
                            icon: "pi pi-fw pi-copy"
                        }
                    ]
                },
                {
                    label: "Edit",
                    icon: "pi pi-fw pi-user-edit"
                }
            ]
        },
        {
            label: "Orders",
            icon: "pi pi-fw pi-shopping-cart",
            items: [
                {
                    label: "View",
                    icon: "pi pi-fw pi-list"
                },
                {
                    label: "Search",
                    icon: "pi pi-fw pi-search"
                }
            ]
        },
        {
            label: "Shipments",
            icon: "pi pi-fw pi-envelope",
            items: [
                {
                    label: "Tracker",
                    icon: "pi pi-fw pi-compass"
                },
                {
                    label: "Map",
                    icon: "pi pi-fw pi-map-marker"
                },
                {
                    label: "Manage",
                    icon: "pi pi-fw pi-pencil"
                }
            ]
        },
        {
            label: "Profile",
            icon: "pi pi-fw pi-user",
            items: [
                {
                    label: "Settings",
                    icon: "pi pi-fw pi-cog"
                },
                {
                    label: "Billing",
                    icon: "pi pi-fw pi-file"
                }
            ]
        },
        {
            label: "Quit",
            icon: "pi pi-fw pi-sign-out"
        }
    ];
    const breadcrumbHome = {
        icon: "pi pi-home",
        to: "/"
    };
    const breadcrumbItems = [
        {
            label: "Computer"
        },
        {
            label: "Notebook"
        },
        {
            label: "Accessories"
        },
        {
            label: "Backpacks"
        },
        {
            label: "Item"
        }
    ];
    const wizardItems = [
        {
            label: "Personal",
            command: ()=>router.push("/uikit/menu")
        },
        {
            label: "Seat",
            command: ()=>router.push("/uikit/menu/seat")
        },
        {
            label: "Payment",
            command: ()=>router.push("/uikit/menu/payment")
        },
        {
            label: "Confirmation",
            command: ()=>router.push("/uikit/menu/confirmation")
        }
    ];
    const tieredMenuItems = [
        {
            label: "Customers",
            icon: "pi pi-fw pi-table",
            items: [
                {
                    label: "New",
                    icon: "pi pi-fw pi-user-plus",
                    items: [
                        {
                            label: "Customer",
                            icon: "pi pi-fw pi-plus"
                        },
                        {
                            label: "Duplicate",
                            icon: "pi pi-fw pi-copy"
                        }
                    ]
                },
                {
                    label: "Edit",
                    icon: "pi pi-fw pi-user-edit"
                }
            ]
        },
        {
            label: "Orders",
            icon: "pi pi-fw pi-shopping-cart",
            items: [
                {
                    label: "View",
                    icon: "pi pi-fw pi-list"
                },
                {
                    label: "Search",
                    icon: "pi pi-fw pi-search"
                }
            ]
        },
        {
            label: "Shipments",
            icon: "pi pi-fw pi-envelope",
            items: [
                {
                    label: "Tracker",
                    icon: "pi pi-fw pi-compass"
                },
                {
                    label: "Map",
                    icon: "pi pi-fw pi-map-marker"
                },
                {
                    label: "Manage",
                    icon: "pi pi-fw pi-pencil"
                }
            ]
        },
        {
            label: "Profile",
            icon: "pi pi-fw pi-user",
            items: [
                {
                    label: "Settings",
                    icon: "pi pi-fw pi-cog"
                },
                {
                    label: "Billing",
                    icon: "pi pi-fw pi-file"
                }
            ]
        },
        {
            separator: true
        },
        {
            label: "Quit",
            icon: "pi pi-fw pi-sign-out"
        }
    ];
    const overlayMenuItems = [
        {
            label: "Save",
            icon: "pi pi-save"
        },
        {
            label: "Update",
            icon: "pi pi-refresh"
        },
        {
            label: "Delete",
            icon: "pi pi-trash"
        },
        {
            separator: true
        },
        {
            label: "Home",
            icon: "pi pi-home"
        }
    ];
    const menuitems = [
        {
            label: "Customers",
            items: [
                {
                    label: "New",
                    icon: "pi pi-fw pi-plus"
                },
                {
                    label: "Edit",
                    icon: "pi pi-fw pi-user-edit"
                }
            ]
        },
        {
            label: "Orders",
            items: [
                {
                    label: "View",
                    icon: "pi pi-fw pi-list"
                },
                {
                    label: "Search",
                    icon: "pi pi-fw pi-search"
                }
            ]
        }
    ];
    const contextMenuItems = [
        {
            label: "Save",
            icon: "pi pi-save"
        },
        {
            label: "Update",
            icon: "pi pi-refresh"
        },
        {
            label: "Delete",
            icon: "pi pi-trash"
        },
        {
            separator: true
        },
        {
            label: "Options",
            icon: "pi pi-cog"
        }
    ];
    const megamenuItems = [
        {
            label: "Fashion",
            icon: "pi pi-fw pi-tag",
            items: [
                [
                    {
                        label: "Woman",
                        items: [
                            {
                                label: "Woman Item"
                            },
                            {
                                label: "Woman Item"
                            },
                            {
                                label: "Woman Item"
                            }
                        ]
                    },
                    {
                        label: "Men",
                        items: [
                            {
                                label: "Men Item"
                            },
                            {
                                label: "Men Item"
                            },
                            {
                                label: "Men Item"
                            }
                        ]
                    }
                ],
                [
                    {
                        label: "Kids",
                        items: [
                            {
                                label: "Kids Item"
                            },
                            {
                                label: "Kids Item"
                            }
                        ]
                    },
                    {
                        label: "Luggage",
                        items: [
                            {
                                label: "Luggage Item"
                            },
                            {
                                label: "Luggage Item"
                            },
                            {
                                label: "Luggage Item"
                            }
                        ]
                    }
                ]
            ]
        },
        {
            label: "Electronics",
            icon: "pi pi-fw pi-desktop",
            items: [
                [
                    {
                        label: "Computer",
                        items: [
                            {
                                label: "Computer Item"
                            },
                            {
                                label: "Computer Item"
                            }
                        ]
                    },
                    {
                        label: "Camcorder",
                        items: [
                            {
                                label: "Camcorder Item"
                            },
                            {
                                label: "Camcorder Item"
                            },
                            {
                                label: "Camcorder Item"
                            }
                        ]
                    }
                ],
                [
                    {
                        label: "TV",
                        items: [
                            {
                                label: "TV Item"
                            },
                            {
                                label: "TV Item"
                            }
                        ]
                    },
                    {
                        label: "Audio",
                        items: [
                            {
                                label: "Audio Item"
                            },
                            {
                                label: "Audio Item"
                            },
                            {
                                label: "Audio Item"
                            }
                        ]
                    }
                ],
                [
                    {
                        label: "Sports.7",
                        items: [
                            {
                                label: "Sports.7.1"
                            },
                            {
                                label: "Sports.7.2"
                            }
                        ]
                    }
                ]
            ]
        },
        {
            label: "Furniture",
            icon: "pi pi-fw pi-image",
            items: [
                [
                    {
                        label: "Living Room",
                        items: [
                            {
                                label: "Living Room Item"
                            },
                            {
                                label: "Living Room Item"
                            }
                        ]
                    },
                    {
                        label: "Kitchen",
                        items: [
                            {
                                label: "Kitchen Item"
                            },
                            {
                                label: "Kitchen Item"
                            },
                            {
                                label: "Kitchen Item"
                            }
                        ]
                    }
                ],
                [
                    {
                        label: "Bedroom",
                        items: [
                            {
                                label: "Bedroom Item"
                            },
                            {
                                label: "Bedroom Item"
                            }
                        ]
                    },
                    {
                        label: "Outdoor",
                        items: [
                            {
                                label: "Outdoor Item"
                            },
                            {
                                label: "Outdoor Item"
                            },
                            {
                                label: "Outdoor Item"
                            }
                        ]
                    }
                ]
            ]
        },
        {
            label: "Sports",
            icon: "pi pi-fw pi-star",
            items: [
                [
                    {
                        label: "Basketball",
                        items: [
                            {
                                label: "Basketball Item"
                            },
                            {
                                label: "Basketball Item"
                            }
                        ]
                    },
                    {
                        label: "Football",
                        items: [
                            {
                                label: "Football Item"
                            },
                            {
                                label: "Football Item"
                            },
                            {
                                label: "Football Item"
                            }
                        ]
                    }
                ],
                [
                    {
                        label: "Tennis",
                        items: [
                            {
                                label: "Tennis Item"
                            },
                            {
                                label: "Tennis Item"
                            }
                        ]
                    }
                ]
            ]
        }
    ];
    const panelMenuitems = [
        {
            label: "Customers",
            icon: "pi pi-fw pi-table",
            items: [
                {
                    label: "New",
                    icon: "pi pi-fw pi-user-plus",
                    items: [
                        {
                            label: "Customer",
                            icon: "pi pi-fw pi-plus"
                        },
                        {
                            label: "Duplicate",
                            icon: "pi pi-fw pi-copy"
                        }
                    ]
                },
                {
                    label: "Edit",
                    icon: "pi pi-fw pi-user-edit"
                }
            ]
        },
        {
            label: "Orders",
            icon: "pi pi-fw pi-shopping-cart",
            items: [
                {
                    label: "View",
                    icon: "pi pi-fw pi-list"
                },
                {
                    label: "Search",
                    icon: "pi pi-fw pi-search"
                }
            ]
        },
        {
            label: "Shipments",
            icon: "pi pi-fw pi-envelope",
            items: [
                {
                    label: "Tracker",
                    icon: "pi pi-fw pi-compass"
                },
                {
                    label: "Map",
                    icon: "pi pi-fw pi-map-marker"
                },
                {
                    label: "Manage",
                    icon: "pi pi-fw pi-pencil"
                }
            ]
        },
        {
            label: "Profile",
            icon: "pi pi-fw pi-user",
            items: [
                {
                    label: "Settings",
                    icon: "pi pi-fw pi-cog"
                },
                {
                    label: "Billing",
                    icon: "pi pi-fw pi-file"
                }
            ]
        }
    ];
    const toggleMenu = (event)=>{
        menu.current.toggle(event);
    };
    const onContextRightClick = (event)=>{
        contextMenu.current.show(event);
    };
    const menubarEndTemplate = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            className: "p-input-icon-left",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "pi pi-search"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_3__.InputText, {
                    type: "text",
                    placeholder: "Search"
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid p-fluid",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            children: "Menubar"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_menubar__WEBPACK_IMPORTED_MODULE_2__.Menubar, {
                            model: nestedMenuitems,
                            end: menubarEndTemplate
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            children: "Breadcrumb"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_breadcrumb__WEBPACK_IMPORTED_MODULE_4__.BreadCrumb, {
                            home: breadcrumbHome,
                            model: breadcrumbItems
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 md:col-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            children: "Steps"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_steps__WEBPACK_IMPORTED_MODULE_5__.Steps, {
                            model: wizardItems,
                            activeIndex: activeIndex,
                            onSelect: (e)=>setActiveIndex(e.index),
                            readOnly: false
                        }),
                        router.pathname === "/uikit/menu" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex align-items-center py-5 px-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "pi pi-fw pi-user mr-2 text-2xl"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "m-0 text-lg",
                                    children: "Personal Component Content via Child Route"
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: children
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 md:col-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            children: "TabMenu"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_tabmenu__WEBPACK_IMPORTED_MODULE_6__.TabMenu, {
                            model: wizardItems,
                            activeIndex: activeIndex,
                            onTabChange: (e)=>setActiveIndex(e.index)
                        }),
                        router.pathname === "/uikit/menu" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex align-items-center py-5 px-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "pi pi-fw pi-user mr-2 text-2xl"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "m-0 text-lg",
                                    children: "Personal Component Content via Child Route"
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: children
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 md:col-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            children: "Tiered Menu"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_tieredmenu__WEBPACK_IMPORTED_MODULE_7__.TieredMenu, {
                            model: tieredMenuItems
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 md:col-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            children: "Plain Menu"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_menu__WEBPACK_IMPORTED_MODULE_8__.Menu, {
                            model: menuitems
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 md:col-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "Overlay Menu"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_menu__WEBPACK_IMPORTED_MODULE_8__.Menu, {
                                ref: menu,
                                model: overlayMenuItems,
                                popup: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_9__.Button, {
                                type: "button",
                                label: "Options",
                                icon: "pi pi-angle-down",
                                onClick: toggleMenu,
                                style: {
                                    width: "auto"
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "card",
                        onContextMenu: onContextRightClick,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "ContextMenu"
                            }),
                            "Right click to display.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_contextmenu__WEBPACK_IMPORTED_MODULE_10__.ContextMenu, {
                                ref: contextMenu,
                                model: contextMenuItems
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 md:col-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            children: "MegaMenu - Horizontal"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_megamenu__WEBPACK_IMPORTED_MODULE_11__.MegaMenu, {
                            model: megamenuItems
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            style: {
                                marginTop: "1.55em"
                            },
                            children: "MegaMenu - Vertical"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_megamenu__WEBPACK_IMPORTED_MODULE_11__.MegaMenu, {
                            model: megamenuItems,
                            orientation: "vertical"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 md:col-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            children: "PanelMenu"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panelmenu__WEBPACK_IMPORTED_MODULE_12__.PanelMenu, {
                            model: panelMenuitems
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuDemo);


/***/ })

};
;