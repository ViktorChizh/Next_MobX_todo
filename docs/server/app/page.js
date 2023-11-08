(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 4760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6278)), "D:\\Node__React_Redux__Next_MobX\\Next_MobX_todo_in_GitHub\\src\\app\\page.tsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4053)), "D:\\Node__React_Redux__Next_MobX\\Next_MobX_todo_in_GitHub\\src\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["D:\\Node__React_Redux__Next_MobX\\Next_MobX_todo_in_GitHub\\src\\app\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 3445:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 3155:
/***/ (() => {



/***/ }),

/***/ 4716:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8502));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7930));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9127))

/***/ }),

/***/ 8502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  RootProvider: () => (/* binding */ RootProvider),
  RootStoreContext: () => (/* binding */ RootStoreContext)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/mobx/dist/mobx.cjs.production.min.js
var mobx_cjs_production_min = __webpack_require__(3417);
;// CONCATENATED MODULE: ./src/api.ts
const API_URL = "http://localhost:3001/tasks";
const getAllTasks = async ()=>{
    const res = await fetch(API_URL);
    const tasks = await res.json();
    return tasks;
};
const addTask = async (title)=>{
    const res = await fetch(API_URL, {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        method: "post",
        body: JSON.stringify({
            title: title,
            completed: false
        })
    });
    const newTask = await res.json();
    return newTask;
};
const editTask = async (task)=>{
    const res = await fetch(`${API_URL}/${task.id}`, {
        headers: {
            "Content-type": "application/json; charset = UTF-8"
        },
        method: "PUT",
        body: JSON.stringify(task)
    });
    const editingTask = await res.json();
    return editingTask;
};
const deleteTask = async (id)=>{
    const res = await fetch(`${API_URL}/${id}`, {
        method: "delete"
    });
};

;// CONCATENATED MODULE: ./src/TaskStore.ts


class TaskStore {
    constructor(){
        this.taskList = [];
        this.getAllTaskAction = async ()=>{
            try {
                const tasks = await getAllTasks();
                (0,mobx_cjs_production_min.runInAction)(()=>{
                    this.taskList = tasks;
                });
            } catch (e) {
                console.log("getAllTaskAction" + e);
            }
        };
        this.addTaskAction = async (title)=>{
            try {
                const newTask = await addTask(title);
                (0,mobx_cjs_production_min.runInAction)(()=>{
                    this.taskList.push(newTask);
                });
            } catch (e) {
                console.log("addTask:" + e);
            }
        };
        this.editTaskAction = async (task)=>{
            try {
                const editingTask = await editTask(task);
                (0,mobx_cjs_production_min.runInAction)(()=>{
                    const index = this.taskList.findIndex((task)=>task.id === editingTask.id);
                    if (index !== -1) {
                        this.taskList[index] = editingTask;
                    }
                });
            } catch (e) {
                console.log("editTaskAction" + e);
            }
        };
        this.deleteTaskAction = async (id)=>{
            try {
                await deleteTask(id);
            } catch (e) {
                console.log("deleteTaskAction" + e);
            }
        };
        (0,mobx_cjs_production_min.makeAutoObservable)(this);
    }
}

;// CONCATENATED MODULE: ./src/RootStore.ts


class RootStore {
    constructor(){
        this.taskStore = new TaskStore();
        (0,mobx_cjs_production_min.makeAutoObservable)(this);
    }
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/app/RootProvider.tsx
/* __next_internal_client_entry_do_not_use__ RootStoreContext,RootProvider auto */ 


const RootStoreContext = /*#__PURE__*/ (0,react_.createContext)({});
const RootProvider = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(RootStoreContext.Provider, {
        value: new RootStore,
        children: children
    });
};


/***/ }),

/***/ 1897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9367);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


const Button = ({ typeBtn = "button", classBtn, onClick, children })=>{
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(classBtn);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: typeBtn,
        className: classes,
        onClick: onClick ? (e)=>onClick(e) : undefined,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 6998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1897);
/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1034);
/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Form_module_css__WEBPACK_IMPORTED_MODULE_2__);



const Form = ({ children, nameBtn, onSubmit })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),
        onSubmit: (e)=>onSubmit(e),
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                typeBtn: "submit",
                classBtn: (_Form_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn),
                children: nameBtn
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ }),

/***/ 5717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9367);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6507);
/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Input_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Input = ({ id, className, label, error, required, onChange, value })=>{
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Input_module_css__WEBPACK_IMPORTED_MODULE_2___default().input), className, {
        error
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Input_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: (_Input_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),
                htmlFor: id,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                name: id,
                id: id,
                className: classes,
                required: required ? required : false,
                value: value,
                onChange: onChange
            }),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_Input_module_css__WEBPACK_IMPORTED_MODULE_2___default().error),
                children: error
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ 9127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Main: () => (/* binding */ Main)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./src/app/RootProvider.tsx + 3 modules
var RootProvider = __webpack_require__(8502);
// EXTERNAL MODULE: ./node_modules/mobx-react-lite/dist/index.js
var dist = __webpack_require__(7757);
// EXTERNAL MODULE: ./src/components/Popup/Popup.tsx
var Popup = __webpack_require__(6103);
// EXTERNAL MODULE: ./src/components/Form/Form.tsx
var Form = __webpack_require__(6998);
// EXTERNAL MODULE: ./src/components/Input/Input.tsx
var Input = __webpack_require__(5717);
// EXTERNAL MODULE: ./src/components/Button/Button.tsx
var Button = __webpack_require__(1897);
// EXTERNAL MODULE: ./src/components/Task/Task.module.css
var Task_module = __webpack_require__(6070);
var Task_module_default = /*#__PURE__*/__webpack_require__.n(Task_module);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
;// CONCATENATED MODULE: ./src/components/Task/Task.tsx










const Task = (0,dist.observer)(({ task })=>{
    const { taskStore } = (0,react_.useContext)(RootProvider.RootStoreContext);
    const router = (0,navigation.useRouter)();
    const [openEdit, setOpenEdit] = (0,react_.useState)(false);
    const [openDelete, setOpenDelete] = (0,react_.useState)(false);
    const [editTask, setEditTask] = (0,react_.useState)(task.title);
    const EditTaskHandler = (e)=>{
        e.preventDefault();
        taskStore.editTaskAction({
            id: task.id,
            title: editTask,
            completed: task.completed
        });
        setOpenEdit(false);
        router.refresh();
    };
    const DeleteTaskHandler = (e)=>{
        e.preventDefault();
        taskStore.deleteTaskAction(task.id);
        setOpenDelete(false);
        router.refresh();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: (Task_module_default()).task,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Task_module_default()).wrapperBtn,
                children: task.title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Task_module_default()).wrapperBtn,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        typeBtn: "button",
                        classBtn: (Task_module_default()).btn,
                        onClick: ()=>setOpenEdit(true),
                        children: "EDIT"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Popup/* default */.Z, {
                        title: "Edit task",
                        open: openEdit,
                        setOpen: setOpenEdit,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Form/* default */.Z, {
                            nameBtn: "Save edited task",
                            onSubmit: EditTaskHandler,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                id: "input",
                                className: (Task_module_default()).input,
                                value: editTask,
                                onChange: (e)=>setEditTask(e.target.value)
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        typeBtn: "button",
                        classBtn: (Task_module_default()).btn,
                        onClick: ()=>setOpenDelete(true),
                        children: "DELETE"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Popup/* default */.Z, {
                        title: "Delete task",
                        open: openDelete,
                        setOpen: setOpenDelete,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Form/* default */.Z, {
                            nameBtn: "Delete task",
                            onSubmit: DeleteTaskHandler,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    'Are you sure, that want to delete "',
                                    task.title,
                                    '"?'
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
});

;// CONCATENATED MODULE: ./src/components/Task/TaskList.tsx



const TaskList = ({ tasks })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (Task_module_default()).list,
        children: tasks.length > 0 ? tasks.map((task)=>/*#__PURE__*/ jsx_runtime_.jsx(Task, {
                task: task
            }, task.id)) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
            className: (Task_module_default()).noTask,
            children: "You do not have any tasks yet"
        })
    });
};

// EXTERNAL MODULE: ./src/components/Main/Main.module.css
var Main_module = __webpack_require__(3767);
var Main_module_default = /*#__PURE__*/__webpack_require__.n(Main_module);
;// CONCATENATED MODULE: ./src/components/Main/Main.tsx
/* __next_internal_client_entry_do_not_use__ Main auto */ 





const Main = (0,dist.observer)(()=>{
    const { taskStore } = (0,react_.useContext)(RootProvider.RootStoreContext);
    (0,react_.useEffect)(()=>{
        taskStore.getAllTaskAction();
    }, [
        taskStore
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Main_module_default()).main,
        children: /*#__PURE__*/ jsx_runtime_.jsx(TaskList, {
            tasks: taskStore.taskList
        })
    });
});


/***/ }),

/***/ 6103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9367);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Popup_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8989);
/* harmony import */ var _Popup_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Popup_module_css__WEBPACK_IMPORTED_MODULE_2__);



const Popup = ({ children, title, open, setOpen })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Popup_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper), open ? (_Popup_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper_open) : ""),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Popup_module_css__WEBPACK_IMPORTED_MODULE_2___default().popup),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Popup_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn), (_Popup_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn)),
                    onClick: ()=>setOpen(false),
                    children: "x"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Popup_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: (_Popup_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),
                            children: title
                        }),
                        children
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);


/***/ }),

/***/ 7930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddTask: () => (/* binding */ AddTask)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7757);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_RootProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8502);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5717);
/* harmony import */ var _Form_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6998);
/* harmony import */ var _Popup_Popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6103);
/* harmony import */ var _Task_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6070);
/* harmony import */ var _Task_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Task_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* __next_internal_client_entry_do_not_use__ AddTask auto */ 








const AddTask = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { taskStore } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_app_RootProvider__WEBPACK_IMPORTED_MODULE_4__.RootStoreContext);
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [newTask, setNewTask] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const AddTaskHandler = (e)=>{
        e.preventDefault();
        taskStore.addTaskAction(newTask);
        setOpen(false);
        router.refresh();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: (_Task_module_css__WEBPACK_IMPORTED_MODULE_8___default().btn),
                onClick: ()=>{
                    setOpen(true);
                },
                children: "Add new Task   "
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Popup_Popup__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                title: "Add new task",
                open: open,
                setOpen: setOpen,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Form_Form__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    nameBtn: "Save task",
                    onSubmit: AddTaskHandler,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        id: "input",
                        className: "{ style.input}",
                        value: newTask,
                        onChange: (e)=>setNewTask(e.target.value)
                    })
                })
            })
        ]
    });
});


/***/ }),

/***/ 5806:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Container_container__Qfhlb"
};


/***/ }),

/***/ 1034:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "Form_btn__Y758R"
};


/***/ }),

/***/ 207:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__AF_3G",
	"h1": "Header_h1__m1_JT"
};


/***/ }),

/***/ 6507:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "Input_input__cDdvD"
};


/***/ }),

/***/ 3767:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Main_main__NTSgt"
};


/***/ }),

/***/ 8989:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Popup_wrapper__GDs5H",
	"wrapper_open": "Popup_wrapper_open__1XLad",
	"popup": "Popup_popup__cpqn3",
	"btn": "Popup_btn__Xltqx",
	"content": "Popup_content__juy_b",
	"title": "Popup_title__tgEK_"
};


/***/ }),

/***/ 6070:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "Task_btn__U8ry1",
	"task": "Task_task__LWqMO",
	"wrapperBtn": "Task_wrapperBtn__ETzc6",
	"list": "Task_list__hFsor",
	"main": "Task_main___qJQj",
	"noTask": "Task_noTask__8Z1Ss"
};


/***/ }),

/***/ 4053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4490);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5023);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2947);




const metadata = {
    title: "ToDo",
    description: "ToDo - your personal helpers"
};
const RootLayout = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className),
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootLayout);


/***/ }),

/***/ 6278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(8097);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/app/Container.module.css
var Container_module = __webpack_require__(5806);
var Container_module_default = /*#__PURE__*/__webpack_require__.n(Container_module);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
;// CONCATENATED MODULE: ./src/app/Container.tsx




const Container = ({ children, className })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classnames_default()((Container_module_default()).container, className),
        children: children
    });
};

// EXTERNAL MODULE: ./src/app/layout.tsx
var layout = __webpack_require__(4053);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/Task/AddTask.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\Node__React_Redux__Next_MobX\Next_MobX_todo_in_GitHub\src\components\Task\AddTask.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["AddTask"];

// EXTERNAL MODULE: ./src/components/Header/Header.module.css
var Header_module = __webpack_require__(207);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./src/components/Header/Header.tsx




const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (Header_module_default()).h1,
                children: layout.metadata.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(e0, {})
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Main/Main.tsx

const Main_proxy = (0,module_proxy.createProxy)(String.raw`D:\Node__React_Redux__Next_MobX\Next_MobX_todo_in_GitHub\src\components\Main\Main.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Main_esModule, $$typeof: Main_$$typeof } = Main_proxy;
const Main_default_ = Main_proxy.default;

const Main_e0 = Main_proxy["Main"];

;// CONCATENATED MODULE: ./src/app/RootProvider.tsx

const RootProvider_proxy = (0,module_proxy.createProxy)(String.raw`D:\Node__React_Redux__Next_MobX\Next_MobX_todo_in_GitHub\src\app\RootProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: RootProvider_esModule, $$typeof: RootProvider_$$typeof } = RootProvider_proxy;
const RootProvider_default_ = RootProvider_proxy.default;

const RootProvider_e0 = RootProvider_proxy["RootStoreContext"];

const e1 = RootProvider_proxy["RootProvider"];

;// CONCATENATED MODULE: ./src/app/page.tsx





const Home = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(e1, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Main_e0, {})
                ]
            })
        })
    });
};
/* harmony default export */ const page = (Home);


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,352], () => (__webpack_exec__(4760)));
module.exports = __webpack_exports__;

})();