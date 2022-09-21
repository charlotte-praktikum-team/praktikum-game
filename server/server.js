module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/icons/arrowLeft.svg":
/*!************************************!*\
  !*** ./assets/icons/arrowLeft.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/icons/balls.svg":
/*!********************************!*\
  !*** ./assets/icons/balls.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/icons/cross.svg":
/*!********************************!*\
  !*** ./assets/icons/cross.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/icons/flask.svg":
/*!********************************!*\
  !*** ./assets/icons/flask.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/icons/forum.svg":
/*!********************************!*\
  !*** ./assets/icons/forum.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/icons/leaderboard.svg":
/*!**************************************!*\
  !*** ./assets/icons/leaderboard.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/icons/logout.svg":
/*!*********************************!*\
  !*** ./assets/icons/logout.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/icons/plus.svg":
/*!*******************************!*\
  !*** ./assets/icons/plus.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/icons/refresh.svg":
/*!**********************************!*\
  !*** ./assets/icons/refresh.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/icons/user.svg":
/*!*******************************!*\
  !*** ./assets/icons/user.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/sounds/clickSound.ogg":
/*!**************************************!*\
  !*** ./assets/sounds/clickSound.ogg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/App/App.tsx":
/*!************************************!*\
  !*** ./src/components/App/App.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const router_1 = __webpack_require__(/*! @/router/router */ "./src/router/router.tsx");
const errorBoundary_1 = __webpack_require__(/*! @/components/errorBoundary/errorBoundary */ "./src/components/errorBoundary/errorBoundary.tsx");
const providers_1 = __webpack_require__(/*! ./providers */ "./src/components/App/providers/index.ts");
const App = () => ((0, jsx_runtime_1.jsx)(errorBoundary_1.ErrorBoundary, { children: (0, jsx_runtime_1.jsx)(router_1.Router, {}) }));
exports.default = (0, providers_1.withProviders)(App);


/***/ }),

/***/ "./src/components/App/providers/index.ts":
/*!***********************************************!*\
  !*** ./src/components/App/providers/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.withProviders = void 0;
const compose_1 = __webpack_require__(/*! @/utils/compose */ "./src/utils/compose.ts");
const withAuth_1 = __webpack_require__(/*! ./withAuth */ "./src/components/App/providers/withAuth.tsx");
const withFullScreen_1 = __webpack_require__(/*! ./withFullScreen */ "./src/components/App/providers/withFullScreen.tsx");
exports.withProviders = (0, compose_1.compose)(withAuth_1.withAuth, withFullScreen_1.withFullScreen);


/***/ }),

/***/ "./src/components/App/providers/withAuth.tsx":
/*!***************************************************!*\
  !*** ./src/components/App/providers/withAuth.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.withAuth = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const useAuth_1 = __webpack_require__(/*! @/hooks/useAuth */ "./src/hooks/useAuth.ts");
const withAuth = (Component) => () => {
    const [isCheckingAuth, setIsCheckingAuth] = (0, react_1.useState)(true);
    const { getUser, clearErrorMessage } = (0, useAuth_1.useAuth)();
    (0, react_1.useEffect)(() => {
        getUser().finally(() => {
            clearErrorMessage();
            setIsCheckingAuth(false);
        });
    }, []);
    if (isCheckingAuth) {
        return (0, jsx_runtime_1.jsx)("p", { children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." });
    }
    return (0, jsx_runtime_1.jsx)(Component, {});
};
exports.withAuth = withAuth;


/***/ }),

/***/ "./src/components/App/providers/withFullScreen.tsx":
/*!*********************************************************!*\
  !*** ./src/components/App/providers/withFullScreen.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.withFullScreen = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const useFullScreen_1 = __webpack_require__(/*! @/hooks/useFullScreen */ "./src/hooks/useFullScreen.ts");
const withFullScreen = (Component) => () => {
    (0, useFullScreen_1.useFullScreen)();
    return (0, jsx_runtime_1.jsx)(Component, {});
};
exports.withFullScreen = withFullScreen;


/***/ }),

/***/ "./src/components/avatar/avatar.css":
/*!******************************************!*\
  !*** ./src/components/avatar/avatar.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/avatar/avatar.tsx":
/*!******************************************!*\
  !*** ./src/components/avatar/avatar.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
const constants_1 = __webpack_require__(/*! utils/constants */ "./src/utils/constants.ts");
__webpack_require__(/*! ./avatar.css */ "./src/components/avatar/avatar.css");
exports.Avatar = (0, react_1.memo)(({ src, size = 'm' }) => ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: (0, classnames_1.default)('avatar__wrapper', `avatar__wrapper_size-${size}`) }, { children: src && (0, jsx_runtime_1.jsx)("img", { src: `${constants_1.PRACTICUM_ORIGIN}/resources${src}`, alt: 'Avatar', className: 'avatar__image' }) }))));


/***/ }),

/***/ "./src/components/button/button.css":
/*!******************************************!*\
  !*** ./src/components/button/button.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/button/button.tsx":
/*!******************************************!*\
  !*** ./src/components/button/button.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
__webpack_require__(/*! ./button.css */ "./src/components/button/button.css");
exports.Button = (0, react_1.memo)(({ onClick, children, design = 'primary', width = 'm', disabled, type = 'button' }) => ((0, jsx_runtime_1.jsx)("button", Object.assign({ className: (0, classnames_1.default)('button', `button_${design}`, `button_width-${width}`), type: type, disabled: disabled, onClick: onClick }, { children: children }))));


/***/ }),

/***/ "./src/components/card/card.css":
/*!**************************************!*\
  !*** ./src/components/card/card.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/card/card.tsx":
/*!**************************************!*\
  !*** ./src/components/card/card.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
__webpack_require__(/*! ./card.css */ "./src/components/card/card.css");
exports.Card = (0, react_1.memo)(({ children, width = 'm', classes }) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)('card', `card_width-${width}`, classes) }, { children: children }))));


/***/ }),

/***/ "./src/components/errorBoundary/errorBoundary.tsx":
/*!********************************************************!*\
  !*** ./src/components/errorBoundary/errorBoundary.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const heading_1 = __webpack_require__(/*! ../heading/heading */ "./src/components/heading/heading.tsx");
const p_1 = __webpack_require__(/*! ../p/p */ "./src/components/p/p.tsx");
class ErrorBoundary extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
        };
    }
    static getDerivedStateFromError(error) {
        return { error };
    }
    render() {
        const { error } = this.state;
        const { children } = this.props;
        if (error) {
            return ((0, jsx_runtime_1.jsxs)("main", Object.assign({ className: 'content content_centered' }, { children: [(0, jsx_runtime_1.jsx)(heading_1.Heading, Object.assign({ type: 'h1', size: 'xl' }, { children: "Seems like an error occurred!" })), (0, jsx_runtime_1.jsx)(p_1.P, { children: error.message })] })));
        }
        return children;
    }
}
exports.ErrorBoundary = ErrorBoundary;


/***/ }),

/***/ "./src/components/heading/heading.css":
/*!********************************************!*\
  !*** ./src/components/heading/heading.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/heading/heading.tsx":
/*!********************************************!*\
  !*** ./src/components/heading/heading.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heading = void 0;
const react_1 = __webpack_require__(/*! react */ "react");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
__webpack_require__(/*! ./heading.css */ "./src/components/heading/heading.css");
exports.Heading = (0, react_1.memo)(({ children, type, size, align = 'center', classes }) => (0, react_1.createElement)(type, {
    className: (0, classnames_1.default)('heading', `heading_align-${align}`, `heading_size-${size}`, classes),
}, children));


/***/ }),

/***/ "./src/components/icon/icon.css":
/*!**************************************!*\
  !*** ./src/components/icon/icon.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/icon/icon.tsx":
/*!**************************************!*\
  !*** ./src/components/icon/icon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
__webpack_require__(/*! ./icon.css */ "./src/components/icon/icon.css");
const arrowLeft_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/icons/arrowLeft.svg */ "./assets/icons/arrowLeft.svg"));
const balls_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/icons/balls.svg */ "./assets/icons/balls.svg"));
const cross_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/icons/cross.svg */ "./assets/icons/cross.svg"));
const flask_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/icons/flask.svg */ "./assets/icons/flask.svg"));
const forum_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/icons/forum.svg */ "./assets/icons/forum.svg"));
const leaderboard_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/icons/leaderboard.svg */ "./assets/icons/leaderboard.svg"));
const logout_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/icons/logout.svg */ "./assets/icons/logout.svg"));
const plus_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/icons/plus.svg */ "./assets/icons/plus.svg"));
const refresh_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/icons/refresh.svg */ "./assets/icons/refresh.svg"));
const user_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/icons/user.svg */ "./assets/icons/user.svg"));
const defaultAttributes = {
    preserveAspectRatio: 'xMidYMid meet',
    fill: 'currentColor',
};
exports.Icon = (0, react_1.memo)(({ name, size = 'm' }) => {
    const classNames = (0, classnames_1.default)('icon', `icon_size-${size}`);
    switch (name) {
        case 'arrow-left': {
            return (0, jsx_runtime_1.jsx)(arrowLeft_svg_1.default, Object.assign({ className: classNames }, defaultAttributes));
        }
        case 'balls': {
            return (0, jsx_runtime_1.jsx)(balls_svg_1.default, Object.assign({ className: classNames }, defaultAttributes, { fill: 'none' }));
        }
        case 'cross': {
            return (0, jsx_runtime_1.jsx)(cross_svg_1.default, Object.assign({ className: classNames }, defaultAttributes));
        }
        case 'flask': {
            return (0, jsx_runtime_1.jsx)(flask_svg_1.default, Object.assign({ className: classNames }, defaultAttributes));
        }
        case 'forum': {
            return (0, jsx_runtime_1.jsx)(forum_svg_1.default, Object.assign({ className: classNames }, defaultAttributes));
        }
        case 'leaderboard': {
            return (0, jsx_runtime_1.jsx)(leaderboard_svg_1.default, Object.assign({ className: classNames }, defaultAttributes));
        }
        case 'logout': {
            return (0, jsx_runtime_1.jsx)(logout_svg_1.default, Object.assign({ className: classNames }, defaultAttributes));
        }
        case 'plus': {
            return (0, jsx_runtime_1.jsx)(plus_svg_1.default, Object.assign({ className: classNames }, defaultAttributes));
        }
        case 'refresh': {
            return (0, jsx_runtime_1.jsx)(refresh_svg_1.default, Object.assign({ className: classNames }, defaultAttributes));
        }
        case 'user': {
            return (0, jsx_runtime_1.jsx)(user_svg_1.default, Object.assign({ className: classNames }, defaultAttributes));
        }
        default: {
            return null;
        }
    }
});


/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PageMeta = exports.ErrorBoundary = exports.Modal = exports.Card = exports.Avatar = exports.SmallText = exports.Textarea = exports.P = exports.Icon = exports.Heading = exports.Link = exports.Button = exports.Input = void 0;
var input_1 = __webpack_require__(/*! ./input/input */ "./src/components/input/input.tsx");
Object.defineProperty(exports, "Input", { enumerable: true, get: function () { return input_1.Input; } });
var button_1 = __webpack_require__(/*! ./button/button */ "./src/components/button/button.tsx");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return button_1.Button; } });
var link_1 = __webpack_require__(/*! ./link/link */ "./src/components/link/link.tsx");
Object.defineProperty(exports, "Link", { enumerable: true, get: function () { return link_1.StyledLink; } });
var heading_1 = __webpack_require__(/*! ./heading/heading */ "./src/components/heading/heading.tsx");
Object.defineProperty(exports, "Heading", { enumerable: true, get: function () { return heading_1.Heading; } });
var icon_1 = __webpack_require__(/*! ./icon/icon */ "./src/components/icon/icon.tsx");
Object.defineProperty(exports, "Icon", { enumerable: true, get: function () { return icon_1.Icon; } });
var p_1 = __webpack_require__(/*! ./p/p */ "./src/components/p/p.tsx");
Object.defineProperty(exports, "P", { enumerable: true, get: function () { return p_1.P; } });
var textarea_1 = __webpack_require__(/*! ./textatea/textarea */ "./src/components/textatea/textarea.tsx");
Object.defineProperty(exports, "Textarea", { enumerable: true, get: function () { return textarea_1.Textarea; } });
var smallText_1 = __webpack_require__(/*! ./smallText/smallText */ "./src/components/smallText/smallText.tsx");
Object.defineProperty(exports, "SmallText", { enumerable: true, get: function () { return smallText_1.SmallText; } });
var avatar_1 = __webpack_require__(/*! ./avatar/avatar */ "./src/components/avatar/avatar.tsx");
Object.defineProperty(exports, "Avatar", { enumerable: true, get: function () { return avatar_1.Avatar; } });
var card_1 = __webpack_require__(/*! ./card/card */ "./src/components/card/card.tsx");
Object.defineProperty(exports, "Card", { enumerable: true, get: function () { return card_1.Card; } });
var modal_1 = __webpack_require__(/*! ./modal/modal */ "./src/components/modal/modal.tsx");
Object.defineProperty(exports, "Modal", { enumerable: true, get: function () { return modal_1.Modal; } });
var errorBoundary_1 = __webpack_require__(/*! ./errorBoundary/errorBoundary */ "./src/components/errorBoundary/errorBoundary.tsx");
Object.defineProperty(exports, "ErrorBoundary", { enumerable: true, get: function () { return errorBoundary_1.ErrorBoundary; } });
var pageMeta_1 = __webpack_require__(/*! ./pageMeta/pageMeta */ "./src/components/pageMeta/pageMeta.tsx");
Object.defineProperty(exports, "PageMeta", { enumerable: true, get: function () { return pageMeta_1.PageMeta; } });


/***/ }),

/***/ "./src/components/input/input.css":
/*!****************************************!*\
  !*** ./src/components/input/input.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/input/input.tsx":
/*!****************************************!*\
  !*** ./src/components/input/input.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
__webpack_require__(/*! ./input.css */ "./src/components/input/input.css");
exports.Input = (0, react_1.memo)(({ name, value = '', type = 'text', label, placeholder = ' ', design, errorMessage, invalid, disabled, onChange, onBlur }) => {
    if (design === 'rounded') {
        return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'rounded-field__wrapper' }, { children: (0, jsx_runtime_1.jsx)("input", { name: name, value: value, type: type, placeholder: placeholder, disabled: disabled, className: (0, classnames_1.default)('rounded-field__input', { 'rounded-field__input_invalid': invalid }), onChange: onChange, onBlur: onBlur }) })));
    }
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'field__wrapper' }, { children: [(0, jsx_runtime_1.jsx)("input", { id: name, name: name, type: type, value: value, placeholder: placeholder, className: (0, classnames_1.default)('field__input', { field__input_invalid: invalid }), onChange: onChange, onBlur: onBlur }), (0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: name, className: 'field__label' }, { children: label })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'field__error' }, { children: errorMessage }))] })));
});


/***/ }),

/***/ "./src/components/link/link.css":
/*!**************************************!*\
  !*** ./src/components/link/link.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/link/link.tsx":
/*!**************************************!*\
  !*** ./src/components/link/link.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledLink = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
__webpack_require__(/*! ./link.css */ "./src/components/link/link.css");
exports.StyledLink = (0, react_1.memo)(({ children, href, replace, classes }) => ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: href, replace: replace, className: (0, classnames_1.default)('link', classes) }, { children: children }))));


/***/ }),

/***/ "./src/components/modal/modal.css":
/*!****************************************!*\
  !*** ./src/components/modal/modal.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/modal/modal.tsx":
/*!****************************************!*\
  !*** ./src/components/modal/modal.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const react_dom_1 = __webpack_require__(/*! react-dom */ "react-dom");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
const constants_1 = __webpack_require__(/*! utils/constants */ "./src/utils/constants.ts");
const card_1 = __webpack_require__(/*! ../card/card */ "./src/components/card/card.tsx");
const heading_1 = __webpack_require__(/*! ../heading/heading */ "./src/components/heading/heading.tsx");
__webpack_require__(/*! ./modal.css */ "./src/components/modal/modal.css");
const icon_1 = __webpack_require__(/*! ../icon/icon */ "./src/components/icon/icon.tsx");
exports.Modal = (0, react_1.memo)(({ isOpen, onClose, title, children }) => {
    const modalRef = (0, react_1.useRef)(null);
    const handleOverflowClick = (e) => {
        if (e.target === modalRef.current && onClose) {
            onClose();
        }
    };
    const handleCloseIconKeyDown = (e) => {
        if (e.key === 'Enter' && onClose) {
            onClose();
        }
    };
    return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)("div", Object.assign({ ref: modalRef, className: (0, classnames_1.default)('modal__overflow', { modal__overflow_open: isOpen }), onClick: handleOverflowClick }, { children: (0, jsx_runtime_1.jsxs)(card_1.Card, Object.assign({ classes: 'modal__wrapper' }, { children: [(0, jsx_runtime_1.jsx)(heading_1.Heading, Object.assign({ type: 'h2', size: 'l', align: 'start' }, { children: title })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'modal__close-icon', role: 'button', tabIndex: 0, onClick: onClose, onKeyDown: handleCloseIconKeyDown }, { children: (0, jsx_runtime_1.jsx)(icon_1.Icon, { name: 'cross', size: 'l' }) })), children] })) })), 
    // Container is the app root. So it will be in the dom for sure
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById(constants_1.APP_ROOT_ID));
});


/***/ }),

/***/ "./src/components/p/p.css":
/*!********************************!*\
  !*** ./src/components/p/p.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/p/p.tsx":
/*!********************************!*\
  !*** ./src/components/p/p.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.P = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
__webpack_require__(/*! ./p.css */ "./src/components/p/p.css");
exports.P = (0, react_1.memo)(({ children, classes }) => (0, jsx_runtime_1.jsx)("p", Object.assign({ className: (0, classnames_1.default)('p', classes) }, { children: children })));


/***/ }),

/***/ "./src/components/pageMeta/pageMeta.tsx":
/*!**********************************************!*\
  !*** ./src/components/pageMeta/pageMeta.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageMeta = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_helmet_1 = __importDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));
const PageMeta = ({ title }) => {
    const titleText = title.replace(/<\/?.+?>/gi, '');
    return ((0, jsx_runtime_1.jsx)(react_helmet_1.default, { children: (0, jsx_runtime_1.jsx)("title", { children: titleText }) }));
};
exports.PageMeta = PageMeta;


/***/ }),

/***/ "./src/components/smallText/smallText.css":
/*!************************************************!*\
  !*** ./src/components/smallText/smallText.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/smallText/smallText.tsx":
/*!************************************************!*\
  !*** ./src/components/smallText/smallText.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallText = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
__webpack_require__(/*! ./smallText.css */ "./src/components/smallText/smallText.css");
exports.SmallText = (0, react_1.memo)(({ children, size = 's', classes, danger }) => ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: (0, classnames_1.default)('small-text', `small-text_size-${size}`, { 'small-text_danger': danger }, classes) }, { children: children }))));


/***/ }),

/***/ "./src/components/textatea/textarea.css":
/*!**********************************************!*\
  !*** ./src/components/textatea/textarea.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/textatea/textarea.tsx":
/*!**********************************************!*\
  !*** ./src/components/textatea/textarea.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Textarea = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
__webpack_require__(/*! ./textarea.css */ "./src/components/textatea/textarea.css");
exports.Textarea = (0, react_1.memo)(({ name, value, placeholder, errorMessage, invalid, onChange }) => {
    const handleChange = (e) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'textarea__wrapper' }, { children: [(0, jsx_runtime_1.jsx)("textarea", { name: name, value: value, placeholder: placeholder, className: (0, classnames_1.default)('textarea__textarea', { textarea__textarea_invalid: invalid }), onChange: handleChange }), errorMessage && (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'textarea__error' }, { children: errorMessage }))] })));
});


/***/ }),

/***/ "./src/hooks/useAuth.ts":
/*!******************************!*\
  !*** ./src/hooks/useAuth.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = void 0;
const react_1 = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const react_router_1 = __webpack_require__(/*! react-router */ "react-router");
const store_1 = __webpack_require__(/*! @/store */ "./src/store/index.ts");
const selectors_1 = __webpack_require__(/*! @/store/user/selectors */ "./src/store/user/selectors.ts");
const thunk_1 = __webpack_require__(/*! @/store/user/thunk */ "./src/store/user/thunk.ts");
const routes_1 = __webpack_require__(/*! @/router/routes */ "./src/router/routes.ts");
const slice_1 = __webpack_require__(/*! @/store/user/slice */ "./src/store/user/slice.ts");
const useAuth = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { pathname } = (0, react_router_1.useLocation)();
    const dispatch = (0, store_1.useAppDispatch)();
    const isLoading = (0, store_1.useAppSelector)(selectors_1.selectIsLoading);
    const isAuth = (0, store_1.useAppSelector)(selectors_1.selectIsAuth);
    const errorMessage = (0, store_1.useAppSelector)(selectors_1.selectErrorMessage);
    const getUser = (0, react_1.useCallback)(async () => {
        await dispatch((0, thunk_1.getUserData)());
        if (pathname === routes_1.routes.login.path || pathname === routes_1.routes.register.path) {
            navigate(routes_1.routes.game.path, { replace: true });
        }
    }, []);
    const handleLogin = (0, react_1.useCallback)(async (data) => {
        await dispatch((0, thunk_1.signIn)(data));
        if (!errorMessage) {
            await getUser();
        }
    }, []);
    const handleRegister = (0, react_1.useCallback)(async (data) => {
        await dispatch((0, thunk_1.signUp)(data));
        if (!errorMessage) {
            await getUser();
        }
    }, []);
    const handleLogout = (0, react_1.useCallback)(async () => {
        await dispatch((0, thunk_1.logout)());
        navigate(routes_1.routes.login.path);
    }, []);
    const clearErrorMessage = (0, react_1.useCallback)(() => {
        dispatch((0, slice_1.setErrorMessage)(''));
    }, []);
    return {
        isLoading,
        isAuth,
        handleLogin,
        handleRegister,
        handleLogout,
        getUser,
        clearErrorMessage,
    };
};
exports.useAuth = useAuth;


/***/ }),

/***/ "./src/hooks/useFullScreen.ts":
/*!************************************!*\
  !*** ./src/hooks/useFullScreen.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useFullScreen = void 0;
const react_1 = __webpack_require__(/*! react */ "react");
const useFullScreen = (key = 'f') => {
    (0, react_1.useEffect)(() => {
        const listener = (e) => {
            if (e.key.toLocaleLowerCase() === key) {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen();
                }
                else {
                    document.exitFullscreen();
                }
            }
        };
        document.addEventListener('keydown', listener);
        return () => document.removeEventListener('keydown', listener);
    }, []);
};
exports.useFullScreen = useFullScreen;


/***/ }),

/***/ "./src/layouts/baseLayout/baseLayout.tsx":
/*!***********************************************!*\
  !*** ./src/layouts/baseLayout/baseLayout.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseLayout = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const mainHeader_1 = __webpack_require__(/*! @/pages/components/mainHeader/mainHeader */ "./src/pages/components/mainHeader/mainHeader.tsx");
/**
 * Main layout for page with header.
 * */
const BaseLayout = () => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(mainHeader_1.MainHeader, {}), (0, jsx_runtime_1.jsx)("main", Object.assign({ className: 'content' }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}) }))] }));
exports.BaseLayout = BaseLayout;


/***/ }),

/***/ "./src/layouts/centeredLayout/centeredLayout.tsx":
/*!*******************************************************!*\
  !*** ./src/layouts/centeredLayout/centeredLayout.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CenteredLayout = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/**
 * Layout for page without header and footer. All contents centered on a page.
 * */
const CenteredLayout = () => ((0, jsx_runtime_1.jsx)("main", Object.assign({ className: 'content content_centered' }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}) })));
exports.CenteredLayout = CenteredLayout;


/***/ }),

/***/ "./src/pages/components/authForm/authForm.css":
/*!****************************************************!*\
  !*** ./src/pages/components/authForm/authForm.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/components/authForm/authForm.tsx":
/*!****************************************************!*\
  !*** ./src/pages/components/authForm/authForm.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthForm = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
const formik_1 = __webpack_require__(/*! formik */ "formik");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
__webpack_require__(/*! ./authForm.css */ "./src/pages/components/authForm/authForm.css");
const AuthForm = ({ inputs, formTitle, formName, initialValues, submitButtonText, onSubmit, validationSchema, link, children = null, isLoading, classes, }) => {
    const { errors, touched, handleSubmit, getFieldProps } = (0, formik_1.useFormik)({
        initialValues,
        onSubmit,
        validationSchema,
    });
    return ((0, jsx_runtime_1.jsxs)(components_1.Card, Object.assign({ width: 's', classes: (0, classnames_1.default)('auth-form', classes) }, { children: [(0, jsx_runtime_1.jsx)(components_1.Heading, Object.assign({ type: 'h2', size: 'xl' }, { children: formTitle })), (0, jsx_runtime_1.jsxs)("form", Object.assign({ className: 'auth-form__form', name: formName, onSubmit: handleSubmit }, { children: [react_1.Children.toArray(inputs.map((_a) => {
                        var _b;
                        var { name } = _a, input = __rest(_a, ["name"]);
                        return ((0, jsx_runtime_1.jsx)(components_1.Input, Object.assign({}, input, getFieldProps(name), { errorMessage: touched[name] && ((_b = errors[name]) !== null && _b !== void 0 ? _b : ''), invalid: touched[name] && !!errors[name] })));
                    })), (0, jsx_runtime_1.jsx)(components_1.Link, Object.assign({ href: link.href, replace: true, classes: 'auth-form__link' }, { children: link.children })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'auth-form__submit-zone' }, { children: [(0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ type: 'submit', disabled: isLoading }, { children: isLoading ? 'Подождите...' : submitButtonText })), children] }))] }))] })));
};
exports.AuthForm = AuthForm;


/***/ }),

/***/ "./src/pages/components/authPageTemplate/authPageTemplate.css":
/*!********************************************************************!*\
  !*** ./src/pages/components/authPageTemplate/authPageTemplate.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/components/authPageTemplate/authPageTemplate.tsx":
/*!********************************************************************!*\
  !*** ./src/pages/components/authPageTemplate/authPageTemplate.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthPageTemplate = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
const routes_1 = __webpack_require__(/*! @/router/routes */ "./src/router/routes.ts");
__webpack_require__(/*! ./authPageTemplate.css */ "./src/pages/components/authPageTemplate/authPageTemplate.css");
const AuthPageTemplate = ({ children, isReversed = false }) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)('auth-page-template', { 'auth-page-template_reversed': isReversed }) }, { children: [children, (0, jsx_runtime_1.jsx)(components_1.Heading, Object.assign({ type: 'h1', size: 'xxl', classes: 'auth-page-template__heading', align: isReversed ? 'end' : 'start' }, { children: routes_1.routes.landing.title }))] })));
exports.AuthPageTemplate = AuthPageTemplate;


/***/ }),

/***/ "./src/pages/components/forumBackLink/forumBackLink.css":
/*!**************************************************************!*\
  !*** ./src/pages/components/forumBackLink/forumBackLink.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/components/forumBackLink/forumBackLink.tsx":
/*!**************************************************************!*\
  !*** ./src/pages/components/forumBackLink/forumBackLink.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumBackLink = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_router_1 = __webpack_require__(/*! react-router */ "react-router");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
__webpack_require__(/*! ./forumBackLink.css */ "./src/pages/components/forumBackLink/forumBackLink.css");
const ForumBackLink = ({ title }) => {
    const navigate = (0, react_router_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: 'forum-back-link', onClick: () => navigate(-1) }, { children: [(0, jsx_runtime_1.jsx)(components_1.Icon, { name: 'arrow-left' }), title] })));
};
exports.ForumBackLink = ForumBackLink;


/***/ }),

/***/ "./src/pages/components/forumPageWrapper/forumPageWrapper.css":
/*!********************************************************************!*\
  !*** ./src/pages/components/forumPageWrapper/forumPageWrapper.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/components/forumPageWrapper/forumPageWrapper.tsx":
/*!********************************************************************!*\
  !*** ./src/pages/components/forumPageWrapper/forumPageWrapper.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumPageWrapper = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
__webpack_require__(/*! ./forumPageWrapper.css */ "./src/pages/components/forumPageWrapper/forumPageWrapper.css");
const ForumPageWrapper = ({ children }) => (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'forum-page-wrapper' }, { children: children }));
exports.ForumPageWrapper = ForumPageWrapper;


/***/ }),

/***/ "./src/pages/components/header/header.css":
/*!************************************************!*\
  !*** ./src/pages/components/header/header.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/components/header/header.tsx":
/*!************************************************!*\
  !*** ./src/pages/components/header/header.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
const react_1 = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./header.css */ "./src/pages/components/header/header.css");
exports.Header = (0, react_1.memo)(({ children, classes }) => (0, jsx_runtime_1.jsx)("header", Object.assign({ className: (0, classnames_1.default)('header', classes) }, { children: children })));


/***/ }),

/***/ "./src/pages/components/mainHeader/components/headerLink/headerLink.css":
/*!******************************************************************************!*\
  !*** ./src/pages/components/mainHeader/components/headerLink/headerLink.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/components/mainHeader/components/headerLink/headerLink.tsx":
/*!******************************************************************************!*\
  !*** ./src/pages/components/mainHeader/components/headerLink/headerLink.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderLink = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
__webpack_require__(/*! ./headerLink.css */ "./src/pages/components/mainHeader/components/headerLink/headerLink.css");
const HeaderLink = ({ routeData }) => {
    const { path, title, headerIcon } = routeData;
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: path, className: 'header-link' }, { children: ({ isActive }) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)('header-link__wrapper', { 'header-link__wrapper_active': isActive }) }, { children: [(0, jsx_runtime_1.jsx)(components_1.Icon, { name: headerIcon }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'header-link__title' }, { children: title }))] }))) })));
};
exports.HeaderLink = HeaderLink;


/***/ }),

/***/ "./src/pages/components/mainHeader/mainHeader.css":
/*!********************************************************!*\
  !*** ./src/pages/components/mainHeader/mainHeader.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/components/mainHeader/mainHeader.tsx":
/*!********************************************************!*\
  !*** ./src/pages/components/mainHeader/mainHeader.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MainHeader = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const headerLink_1 = __webpack_require__(/*! ./components/headerLink/headerLink */ "./src/pages/components/mainHeader/components/headerLink/headerLink.tsx");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
const header_1 = __webpack_require__(/*! ../header/header */ "./src/pages/components/header/header.tsx");
__webpack_require__(/*! ./mainHeader.css */ "./src/pages/components/mainHeader/mainHeader.css");
const useAuth_1 = __webpack_require__(/*! @/hooks/useAuth */ "./src/hooks/useAuth.ts");
const routes_1 = __webpack_require__(/*! @/router/routes */ "./src/router/routes.ts");
exports.MainHeader = (0, react_1.memo)(() => {
    const headerRoutes = [routes_1.routes.game, routes_1.routes.leaderboard, routes_1.routes.forum, routes_1.routes.profile];
    const { handleLogout } = (0, useAuth_1.useAuth)();
    return ((0, jsx_runtime_1.jsxs)(header_1.Header, Object.assign({ classes: 'header-main' }, { children: [(0, jsx_runtime_1.jsx)(components_1.Heading, Object.assign({ type: 'h1', size: 'l' }, { children: routes_1.routes.landing.title })), (0, jsx_runtime_1.jsx)("nav", Object.assign({ className: 'header-main__link-wrapper' }, { children: react_1.Children.toArray(headerRoutes.map((route) => (0, jsx_runtime_1.jsx)(headerLink_1.HeaderLink, { routeData: route }))) })), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: 'header-main__exit-button', onClick: handleLogout, title: '\u0412\u044B\u0439\u0442\u0438' }, { children: (0, jsx_runtime_1.jsx)(components_1.Icon, { name: 'logout' }) }))] })));
});


/***/ }),

/***/ "./src/pages/components/profileForm/profileForm.css":
/*!**********************************************************!*\
  !*** ./src/pages/components/profileForm/profileForm.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/components/profileForm/profileForm.tsx":
/*!**********************************************************!*\
  !*** ./src/pages/components/profileForm/profileForm.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileForm = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const formik_1 = __webpack_require__(/*! formik */ "formik");
const profileFormItem_1 = __webpack_require__(/*! ../profileFormItem/profileFormItem */ "./src/pages/components/profileFormItem/profileFormItem.tsx");
const profileList_1 = __webpack_require__(/*! ../profileList/profileList */ "./src/pages/components/profileList/profileList.tsx");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
__webpack_require__(/*! ./profileForm.css */ "./src/pages/components/profileForm/profileForm.css");
const ProfileForm = ({ inputs, formName, initialValues, onSubmit, validationSchema, isLoading, }) => {
    const { errors, touched, handleSubmit, getFieldProps } = (0, formik_1.useFormik)({
        initialValues,
        onSubmit,
        validationSchema,
    });
    return ((0, jsx_runtime_1.jsxs)("form", Object.assign({ className: 'profile-form', name: formName, onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)(profileList_1.ProfileList, { children: react_1.Children.toArray(inputs.map((_a) => {
                    var _b;
                    var { name } = _a, input = __rest(_a, ["name"]);
                    return ((0, jsx_runtime_1.jsx)(profileFormItem_1.ProfileFormItem, Object.assign({}, input, getFieldProps(name), { errorMessage: touched[name] && ((_b = errors[name]) !== null && _b !== void 0 ? _b : ''), invalid: touched[name] && !!errors[name] })));
                })) }), (0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ type: 'submit', disabled: isLoading }, { children: isLoading ? 'Подождите...' : 'Сохранить' }))] })));
};
exports.ProfileForm = ProfileForm;


/***/ }),

/***/ "./src/pages/components/profileFormItem/profileFormItem.css":
/*!******************************************************************!*\
  !*** ./src/pages/components/profileFormItem/profileFormItem.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/components/profileFormItem/profileFormItem.tsx":
/*!******************************************************************!*\
  !*** ./src/pages/components/profileFormItem/profileFormItem.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileFormItem = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
__webpack_require__(/*! ./profileFormItem.css */ "./src/pages/components/profileFormItem/profileFormItem.css");
const profileListItem_1 = __webpack_require__(/*! ../profileListItem/profileListItem */ "./src/pages/components/profileListItem/profileListItem.tsx");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
exports.ProfileFormItem = (0, react_1.memo)(({ name, errorMessage, label, onBlur, onChange, type = 'text', value, invalid }) => {
    const inputRef = (0, react_1.useRef)(null);
    return ((0, jsx_runtime_1.jsxs)(profileListItem_1.ProfileListItem, { children: [(0, jsx_runtime_1.jsx)(components_1.SmallText, Object.assign({ danger: true }, { children: errorMessage })), (0, jsx_runtime_1.jsxs)("label", Object.assign({ htmlFor: name, className: 'profile-form-item', onClick: () => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); } }, { children: [(0, jsx_runtime_1.jsx)("span", { children: label }), (0, jsx_runtime_1.jsx)("input", { ref: inputRef, className: (0, classnames_1.default)('profile-form-item__input', { 'profile-form-item__input_error': invalid }), type: type, name: name, value: value, onChange: onChange, onBlur: onBlur })] }))] }));
});


/***/ }),

/***/ "./src/pages/components/profileList/profileList.css":
/*!**********************************************************!*\
  !*** ./src/pages/components/profileList/profileList.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/components/profileList/profileList.tsx":
/*!**********************************************************!*\
  !*** ./src/pages/components/profileList/profileList.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileList = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
__webpack_require__(/*! ./profileList.css */ "./src/pages/components/profileList/profileList.css");
const ProfileList = ({ children }) => (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'profile-list' }, { children: children }));
exports.ProfileList = ProfileList;


/***/ }),

/***/ "./src/pages/components/profileListItem/profileListItem.css":
/*!******************************************************************!*\
  !*** ./src/pages/components/profileListItem/profileListItem.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/components/profileListItem/profileListItem.tsx":
/*!******************************************************************!*\
  !*** ./src/pages/components/profileListItem/profileListItem.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileListItem = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
__webpack_require__(/*! ./profileListItem.css */ "./src/pages/components/profileListItem/profileListItem.css");
const ProfileListItem = ({ children }) => (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'profile-list-item' }, { children: children }));
exports.ProfileListItem = ProfileListItem;


/***/ }),

/***/ "./src/pages/components/profilePageTemplate/constants.ts":
/*!***************************************************************!*\
  !*** ./src/pages/components/profilePageTemplate/constants.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.validationSchema = exports.initialValues = void 0;
const yup_1 = __webpack_require__(/*! yup */ "yup");
exports.initialValues = {
    avatar: null,
};
exports.validationSchema = (0, yup_1.object)().shape({
    avatar: (0, yup_1.mixed)()
        .test('required', 'Файл не выбран', (value) => value)
        .test('type', 'Допустимый формат файла: jpg, jpeg, png, gif', (value) => value && value.type.match(/.(jpg|jpeg|png|gif)$/i)),
});


/***/ }),

/***/ "./src/pages/components/profilePageTemplate/profilePageTemplate.css":
/*!**************************************************************************!*\
  !*** ./src/pages/components/profilePageTemplate/profilePageTemplate.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/components/profilePageTemplate/profilePageTemplate.tsx":
/*!**************************************************************************!*\
  !*** ./src/pages/components/profilePageTemplate/profilePageTemplate.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilePageTemplate = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
const formik_1 = __webpack_require__(/*! formik */ "formik");
const react_1 = __webpack_require__(/*! react */ "react");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
__webpack_require__(/*! ./profilePageTemplate.css */ "./src/pages/components/profilePageTemplate/profilePageTemplate.css");
const constants_1 = __webpack_require__(/*! ./constants */ "./src/pages/components/profilePageTemplate/constants.ts");
const selectors_1 = __webpack_require__(/*! @/store/user/selectors */ "./src/store/user/selectors.ts");
const constants_2 = __webpack_require__(/*! @/utils/constants */ "./src/utils/constants.ts");
const thunk_1 = __webpack_require__(/*! @/store/user/thunk */ "./src/store/user/thunk.ts");
const store_1 = __webpack_require__(/*! @/store */ "./src/store/index.ts");
const ProfilePageTemplate = ({ children, title }) => {
    const dispatch = (0, store_1.useAppDispatch)();
    const { avatar } = (0, store_1.useAppSelector)(selectors_1.selectUser);
    const isLoading = (0, store_1.useAppSelector)(selectors_1.selectIsLoading);
    const { errorMessage } = (0, store_1.useAppSelector)((state) => state.user);
    const [openModal, setOpenModal] = (0, react_1.useState)(false);
    const [inputText, setInputText] = (0, react_1.useState)('Выбрать файл на компьютере');
    const { errors, handleSubmit, setFieldValue, values, resetForm } = (0, formik_1.useFormik)({
        initialValues: constants_1.initialValues,
        validationSchema: constants_1.validationSchema,
        onSubmit: (formValues) => {
            dispatch((0, thunk_1.changeAvatar)(formValues.avatar));
            onCloseModal();
            handleSubmit();
        },
    });
    const onToggleModal = () => setOpenModal(!openModal);
    const onCloseModal = () => {
        setInputText('Выбрать файл на компьютере');
        resetForm();
        onToggleModal();
    };
    const onChangeInput = (e) => {
        const file = e.currentTarget.files[0];
        setFieldValue('avatar', file);
        setInputText(file.name);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'profile-page-template' }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'profile-page-template__top' }, { children: [(0, jsx_runtime_1.jsx)(components_1.SmallText, Object.assign({ danger: true }, { children: errorMessage })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'profile-avatar', onClick: onToggleModal }, { children: !isLoading ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [avatar && (0, jsx_runtime_1.jsx)("img", { src: constants_2.PRACTICUM_ORIGIN_AVATAR + avatar, alt: '\u0410\u0432\u0430\u0442\u0430\u0440', className: 'profile-avatar__image' }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'profile-avatar__cover' }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'profile-avatar__cover-text' }, { children: "\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440" })) }))] })) : ((0, jsx_runtime_1.jsx)(components_1.SmallText, { children: "\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." })) })), title && ((0, jsx_runtime_1.jsx)(components_1.Heading, Object.assign({ type: 'h1', size: 'm' }, { children: title })))] })), children] })), (0, jsx_runtime_1.jsx)(components_1.Modal, Object.assign({ isOpen: openModal, onClose: onCloseModal, title: '\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u0430\u0439\u043B' }, { children: (0, jsx_runtime_1.jsxs)("form", Object.assign({ encType: 'multipart/form-data', className: 'profile-modal', onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsxs)("label", Object.assign({ htmlFor: 'avatar', className: 'profile-modal__label' }, { children: [(0, jsx_runtime_1.jsx)(components_1.SmallText, Object.assign({ classes: (0, classnames_1.default)('profile-modal__input-text', { 'profile-modal__input-text_file': values.avatar }) }, { children: inputText })), (0, jsx_runtime_1.jsx)("input", { type: 'file', name: 'avatar', id: 'avatar', className: 'profile-modal__input', accept: '.png, .jpg, .jpeg, .gif', onChange: onChangeInput })] })), (0, jsx_runtime_1.jsx)(components_1.SmallText, Object.assign({ classes: 'profile-modal__error' }, { children: errors.avatar })), (0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ type: 'submit' }, { children: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C" }))] })) }))] }));
};
exports.ProfilePageTemplate = ProfilePageTemplate;


/***/ }),

/***/ "./src/pages/dashboard/components/levelOverview.css":
/*!**********************************************************!*\
  !*** ./src/pages/dashboard/components/levelOverview.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/dashboard/components/levelOverview.tsx":
/*!**********************************************************!*\
  !*** ./src/pages/dashboard/components/levelOverview.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelOverview = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
__webpack_require__(/*! ./levelOverview.css */ "./src/pages/dashboard/components/levelOverview.css");
exports.LevelOverview = (0, react_1.memo)(({ number, disabled, points, onClick }) => {
    const handleClick = () => {
        if (!disabled) {
            onClick(number);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)('level-overview', { 'level-overview_disabled': disabled }), onClick: handleClick }, { children: [(0, jsx_runtime_1.jsxs)(components_1.SmallText, { children: ["\u0423\u0440\u043E\u0432\u0435\u043D\u044C ", number] }), points && (0, jsx_runtime_1.jsxs)(components_1.SmallText, Object.assign({ size: 'xs' }, { children: ["\u041E\u0447\u043A\u0438: ", points] }))] })));
});


/***/ }),

/***/ "./src/pages/dashboard/dashboard.css":
/*!*******************************************!*\
  !*** ./src/pages/dashboard/dashboard.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/dashboard/dashboard.tsx":
/*!*******************************************!*\
  !*** ./src/pages/dashboard/dashboard.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
const levelOverview_1 = __webpack_require__(/*! ./components/levelOverview */ "./src/pages/dashboard/components/levelOverview.tsx");
const constants_1 = __webpack_require__(/*! @/utils/constants */ "./src/utils/constants.ts");
const mock_1 = __webpack_require__(/*! ./mock */ "./src/pages/dashboard/mock.ts");
__webpack_require__(/*! ./dashboard.css */ "./src/pages/dashboard/dashboard.css");
const Dashboard = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const currentLevelNumber = (0, react_1.useMemo)(() => { var _a, _b; return (_b = (_a = mock_1.LEVELS_STUB.find((level) => !level.isComplete)) === null || _a === void 0 ? void 0 : _a.number) !== null && _b !== void 0 ? _b : 1; }, [mock_1.LEVELS_STUB]);
    const handleLevelClick = (number) => {
        localStorage.setItem(constants_1.ACTIVE_LEVEL_NUMBER, number.toString());
        navigate('run');
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'dashboard__wrapper' }, { children: [(0, jsx_runtime_1.jsx)(components_1.PageMeta, { title: '\u0413\u043B\u0430\u0432\u043D\u0430\u044F' }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'dashboard__description' }, { children: [(0, jsx_runtime_1.jsx)(components_1.P, { children: "Ball Sort Puzzle - \u0438\u0433\u0440\u0430-\u0433\u043E\u043B\u043E\u0432\u043E\u043B\u043E\u043C\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u043E\u0434\u043E\u0439\u0434\u0435\u0442 \u0434\u043B\u044F \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438 \u043C\u043E\u0437\u0433\u0430 \u0438 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0441\u043A\u043E\u0440\u043E\u0442\u0430\u0442\u044C \u0432\u0440\u0435\u043C\u044F. \u0426\u0435\u043B\u044C \u0438\u0433\u0440\u044B - \u043A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u043E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0430\u0437\u043D\u043E\u0446\u0432\u0435\u0442\u043D\u044B\u0435 \u0448\u0430\u0440\u0438\u043A\u0438 \u0432 \u043F\u0440\u043E\u0431\u0438\u0440\u043A\u0430\u0445. \u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0430\u0442\u044C \u0448\u0430\u0440\u0438\u043A\u0438 \u043C\u043E\u0436\u043D\u043E \u0432 \u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u043E\u043D\u0438 \u0438\u043C\u0435\u044E\u0442 \u043E\u0434\u0438\u043D \u0446\u0432\u0435\u0442 \u0438 \u0432 \u043F\u0440\u043E\u0431\u0438\u0440\u043A\u0435 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043C\u0435\u0441\u0442\u0430. \u0415\u0441\u043B\u0438 \u0432\u044B \u0437\u0430\u0441\u0442\u0440\u044F\u043B\u0438, \u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u043E\u0439 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u043E\u0431\u0438\u0440\u043A\u043E\u0439, \u043D\u043E, \u0432 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435, \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 \u043E\u0447\u043A\u043E\u0432." }), (0, jsx_runtime_1.jsx)(components_1.SmallText, Object.assign({ classes: 'dashboard__hint' }, { children: "\u0427\u0442\u043E\u0431\u044B \u0432\u043E\u0439\u0442\u0438 \u0432 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \"F\". \u0427\u0442\u043E\u0431\u044B \u0432\u044B\u0439\u0442\u0438 - \"F\" \u0438\u043B\u0438 \"Esc\"." }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'dashboard__levels-wrapper' }, { children: react_1.Children.toArray(mock_1.LEVELS_STUB.map((level) => ((0, jsx_runtime_1.jsx)(levelOverview_1.LevelOverview, { number: level.number, points: level.points, disabled: !level.isComplete && level.number !== currentLevelNumber, onClick: handleLevelClick })))) }))] })));
};
exports.default = Dashboard;


/***/ }),

/***/ "./src/pages/dashboard/mock.ts":
/*!*************************************!*\
  !*** ./src/pages/dashboard/mock.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LEVELS_STUB = void 0;
exports.LEVELS_STUB = [
    {
        number: 1,
        isComplete: true,
        points: 2048,
    },
    {
        number: 2,
        isComplete: false,
        points: null,
    },
    {
        number: 3,
        isComplete: false,
        points: null,
    },
    {
        number: 4,
        isComplete: false,
        points: null,
    },
    {
        number: 5,
        isComplete: false,
        points: null,
    },
    {
        number: 6,
        isComplete: false,
        points: null,
    },
    {
        number: 7,
        isComplete: false,
        points: null,
    },
    {
        number: 8,
        isComplete: false,
        points: null,
    },
    {
        number: 9,
        isComplete: false,
        points: null,
    },
    {
        number: 10,
        isComplete: false,
        points: null,
    },
];


/***/ }),

/***/ "./src/pages/error/error.css":
/*!***********************************!*\
  !*** ./src/pages/error/error.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/error/error.tsx":
/*!***********************************!*\
  !*** ./src/pages/error/error.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
__webpack_require__(/*! ./error.css */ "./src/pages/error/error.css");
const routes_1 = __webpack_require__(/*! @/router/routes */ "./src/router/routes.ts");
const ErrorPage = ({ title, description }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'error-page bounce-top' }, { children: [(0, jsx_runtime_1.jsx)(components_1.PageMeta, { title: '\u041E\u0448\u0438\u0431\u043A\u0430' }), (0, jsx_runtime_1.jsx)(components_1.Heading, Object.assign({ type: 'h1', size: 'xxl', classes: 'error-page__text' }, { children: title })), (0, jsx_runtime_1.jsx)(components_1.P, Object.assign({ classes: 'error-page__text' }, { children: description })), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: 'error-page__button', onClick: () => navigate(routes_1.routes.game.path, { replace: true }) }, { children: "\u0432 \u0438\u0433\u0440\u0443" }))] })), (0, jsx_runtime_1.jsx)("div", { className: 'shadow' })] }));
};
exports.default = ErrorPage;


/***/ }),

/***/ "./src/pages/forum/components/forumCard/forumCard.css":
/*!************************************************************!*\
  !*** ./src/pages/forum/components/forumCard/forumCard.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/forum/components/forumCard/forumCard.tsx":
/*!************************************************************!*\
  !*** ./src/pages/forum/components/forumCard/forumCard.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumCard = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
__webpack_require__(/*! ./forumCard.css */ "./src/pages/forum/components/forumCard/forumCard.css");
const ForumCard = ({ cardData }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)("article", Object.assign({ className: 'forum-card', onClick: () => navigate(`/forum/${cardData.id}`) }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'forum-card__left-part' }, { children: [(0, jsx_runtime_1.jsx)(components_1.Heading, Object.assign({ type: 'h2', size: 'm', align: 'start' }, { children: cardData.name })), (0, jsx_runtime_1.jsx)(components_1.SmallText, { children: cardData.description })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'forum-card__right-part' }, { children: [(0, jsx_runtime_1.jsxs)(components_1.SmallText, { children: ["\u0422\u0435\u043C: ", cardData.topicsCount] }), (0, jsx_runtime_1.jsxs)(components_1.SmallText, { children: ["\u041E\u0442\u0432\u0435\u0442\u043E\u0432: ", cardData.postsCount] })] }))] })));
};
exports.ForumCard = ForumCard;


/***/ }),

/***/ "./src/pages/forum/forum.css":
/*!***********************************!*\
  !*** ./src/pages/forum/forum.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/forum/forum.tsx":
/*!***********************************!*\
  !*** ./src/pages/forum/forum.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const forumPageWrapper_1 = __webpack_require__(/*! ../components/forumPageWrapper/forumPageWrapper */ "./src/pages/components/forumPageWrapper/forumPageWrapper.tsx");
const forumCard_1 = __webpack_require__(/*! ./components/forumCard/forumCard */ "./src/pages/forum/components/forumCard/forumCard.tsx");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
__webpack_require__(/*! ./forum.css */ "./src/pages/forum/forum.css");
const mock_1 = __webpack_require__(/*! ./mock */ "./src/pages/forum/mock.ts");
const Forum = () => ((0, jsx_runtime_1.jsxs)(forumPageWrapper_1.ForumPageWrapper, { children: [(0, jsx_runtime_1.jsx)(components_1.PageMeta, { title: '\u0424\u043E\u0440\u0443\u043C' }), (0, jsx_runtime_1.jsx)("section", Object.assign({ className: 'forum-card-list' }, { children: react_1.Children.toArray(mock_1.FORUMS_LIST.map((listItem) => (0, jsx_runtime_1.jsx)(forumCard_1.ForumCard, { cardData: listItem }))) }))] }));
exports.default = Forum;


/***/ }),

/***/ "./src/pages/forum/mock.ts":
/*!*********************************!*\
  !*** ./src/pages/forum/mock.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FORUMS_LIST = void 0;
exports.FORUMS_LIST = [
    {
        id: 0,
        name: 'Заголовок раздела',
        description: 'Описание раздела в две строки в две строки в две строки в две строки в две строки',
        topicsCount: 42,
        postsCount: 1024,
    },
    {
        id: 1,
        name: 'Заголовок раздела',
        description: 'Описание раздела в две строки в две строки в две строки в две строки в две строки',
        topicsCount: 42,
        postsCount: 1024,
    },
    {
        id: 2,
        name: 'Заголовок раздела',
        description: 'Описание раздела в две строки в две строки в две строки в две строки в две строки',
        topicsCount: 42,
        postsCount: 1024,
    },
    {
        id: 3,
        name: 'Заголовок раздела',
        description: 'Описание раздела в две строки в две строки в две строки в две строки в две строки',
        topicsCount: 42,
        postsCount: 1024,
    },
    {
        id: 4,
        name: 'Заголовок раздела',
        description: 'Описание раздела в две строки в две строки в две строки в две строки в две строки',
        topicsCount: 42,
        postsCount: 1024,
    },
    {
        id: 5,
        name: 'Заголовок раздела',
        description: 'Описание раздела в две строки в две строки в две строки в две строки в две строки',
        topicsCount: 42,
        postsCount: 1024,
    },
    {
        id: 6,
        name: 'Заголовок раздела',
        description: 'Описание раздела в две строки в две строки в две строки в две строки в две строки',
        topicsCount: 42,
        postsCount: 1024,
    },
    {
        id: 7,
        name: 'Заголовок раздела',
        description: 'Описание раздела в две строки в две строки в две строки в две строки в две строки',
        topicsCount: 42,
        postsCount: 1024,
    },
];


/***/ }),

/***/ "./src/pages/forumTopic/components/forumPost/forumPost.css":
/*!*****************************************************************!*\
  !*** ./src/pages/forumTopic/components/forumPost/forumPost.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/forumTopic/components/forumPost/forumPost.tsx":
/*!*****************************************************************!*\
  !*** ./src/pages/forumTopic/components/forumPost/forumPost.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumPost = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./forumPost.css */ "./src/pages/forumTopic/components/forumPost/forumPost.css");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
const ForumPost = ({ postData }) => ((0, jsx_runtime_1.jsxs)("article", Object.assign({ className: 'forum-post' }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'forum-post__header' }, { children: [(0, jsx_runtime_1.jsx)(components_1.Avatar, { src: postData.avatar }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'forum-post__user' }, { children: [(0, jsx_runtime_1.jsx)(components_1.Heading, Object.assign({ type: 'h3', size: 'm' }, { children: postData.username })), (0, jsx_runtime_1.jsx)(components_1.SmallText, Object.assign({ classes: 'forum-post__user-date' }, { children: postData.date }))] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'forum-post__message' }, { children: [(0, jsx_runtime_1.jsx)(components_1.P, { children: postData.message }), (0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ design: 'secondary', onClick: () => { } }, { children: "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C" }))] }))] })));
exports.ForumPost = ForumPost;


/***/ }),

/***/ "./src/pages/forumTopic/forumTopic.css":
/*!*********************************************!*\
  !*** ./src/pages/forumTopic/forumTopic.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/forumTopic/forumTopic.tsx":
/*!*********************************************!*\
  !*** ./src/pages/forumTopic/forumTopic.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const forumPageWrapper_1 = __webpack_require__(/*! ../components/forumPageWrapper/forumPageWrapper */ "./src/pages/components/forumPageWrapper/forumPageWrapper.tsx");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
const forumBackLink_1 = __webpack_require__(/*! ../components/forumBackLink/forumBackLink */ "./src/pages/components/forumBackLink/forumBackLink.tsx");
const forumPost_1 = __webpack_require__(/*! ./components/forumPost/forumPost */ "./src/pages/forumTopic/components/forumPost/forumPost.tsx");
__webpack_require__(/*! ./forumTopic.css */ "./src/pages/forumTopic/forumTopic.css");
const mock_1 = __webpack_require__(/*! ./mock */ "./src/pages/forumTopic/mock.ts");
const ForumTopic = () => {
    const [openModal, setOpenModal] = (0, react_1.useState)(false);
    const onToggleModal = () => setOpenModal(!openModal);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(forumPageWrapper_1.ForumPageWrapper, { children: [(0, jsx_runtime_1.jsx)(components_1.PageMeta, { title: '\u0422\u0435\u043C\u0430 \u0444\u043E\u0440\u0443\u043C\u0430' }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'forum-topic' }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'forum-topic__back-button' }, { children: (0, jsx_runtime_1.jsx)(forumBackLink_1.ForumBackLink, { title: '\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0440\u0430\u0437\u0434\u0435\u043B\u0430\u043C' }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'forum-topic__header' }, { children: (0, jsx_runtime_1.jsx)(components_1.Heading, Object.assign({ type: 'h2', size: 'l' }, { children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043C\u044B \u0444\u043E\u0440\u0443\u043C\u0430 \u0432 \u043E\u0434\u043D\u0443 \u0441\u0442\u0440\u043E\u043A\u0443" })) })), (0, jsx_runtime_1.jsx)("section", Object.assign({ className: 'forum-topic__posts' }, { children: react_1.Children.toArray(mock_1.POSTS_LIST.map((post) => (0, jsx_runtime_1.jsx)(forumPost_1.ForumPost, { postData: post }))) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'forum-topic__new-message-button' }, { children: (0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ onClick: onToggleModal }, { children: "\u041D\u043E\u0432\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435" })) }))] }))] }), (0, jsx_runtime_1.jsx)(components_1.Modal, Object.assign({ isOpen: openModal, title: '\u041D\u043E\u0432\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435', onClose: onToggleModal }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'forum-topic__modal' }, { children: [(0, jsx_runtime_1.jsx)(components_1.Textarea, { name: 'topicMessage', placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F', onChange: () => { } }), (0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ onClick: onToggleModal }, { children: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C" }))] })) }))] }));
};
exports.default = ForumTopic;


/***/ }),

/***/ "./src/pages/forumTopic/mock.ts":
/*!**************************************!*\
  !*** ./src/pages/forumTopic/mock.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.POSTS_LIST = void 0;
exports.POSTS_LIST = [
    {
        id: 0,
        username: 'Username',
        avatar: null,
        date: '01.01.2023',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 1,
        username: 'Username',
        avatar: null,
        date: '01.01.2023',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
];


/***/ }),

/***/ "./src/pages/forumTopicsList/components/forumTopicItem/forumTopicItem.css":
/*!********************************************************************************!*\
  !*** ./src/pages/forumTopicsList/components/forumTopicItem/forumTopicItem.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/forumTopicsList/components/forumTopicItem/forumTopicItem.tsx":
/*!********************************************************************************!*\
  !*** ./src/pages/forumTopicsList/components/forumTopicItem/forumTopicItem.tsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumTopicItem = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
__webpack_require__(/*! ./forumTopicItem.css */ "./src/pages/forumTopicsList/components/forumTopicItem/forumTopicItem.css");
const ForumTopicItem = ({ topicItemData }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { sectionId } = (0, react_router_dom_1.useParams)();
    return ((0, jsx_runtime_1.jsxs)("article", Object.assign({ className: 'forum-topic-item', onClick: () => navigate(`/forum/${sectionId}/${topicItemData.id}`) }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: 'forum-topic-item__title' }, { children: topicItemData.name })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'forum-topic-item__data' }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'forum-topic-item__data-left-part' }, { children: [(0, jsx_runtime_1.jsxs)(components_1.SmallText, { children: ["\u041E\u0442\u0432\u0435\u0442\u043E\u0432: ", topicItemData.postsCount] }), (0, jsx_runtime_1.jsxs)(components_1.SmallText, { children: ["\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u043E\u0432: ", topicItemData.viewsCount] })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'forum-topic-item__data-right-part' }, { children: [(0, jsx_runtime_1.jsx)(components_1.Avatar, { size: 's', src: topicItemData.avatar }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'forum-topic-item__user' }, { children: [(0, jsx_runtime_1.jsx)(components_1.SmallText, { children: topicItemData.username }), (0, jsx_runtime_1.jsx)(components_1.SmallText, Object.assign({ classes: 'forum-topic-item__user-date' }, { children: topicItemData.date }))] }))] }))] }))] })));
};
exports.ForumTopicItem = ForumTopicItem;


/***/ }),

/***/ "./src/pages/forumTopicsList/forumTopicsList.css":
/*!*******************************************************!*\
  !*** ./src/pages/forumTopicsList/forumTopicsList.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/forumTopicsList/forumTopicsList.tsx":
/*!*******************************************************!*\
  !*** ./src/pages/forumTopicsList/forumTopicsList.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const forumPageWrapper_1 = __webpack_require__(/*! ../components/forumPageWrapper/forumPageWrapper */ "./src/pages/components/forumPageWrapper/forumPageWrapper.tsx");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
const forumBackLink_1 = __webpack_require__(/*! ../components/forumBackLink/forumBackLink */ "./src/pages/components/forumBackLink/forumBackLink.tsx");
const forumTopicItem_1 = __webpack_require__(/*! ./components/forumTopicItem/forumTopicItem */ "./src/pages/forumTopicsList/components/forumTopicItem/forumTopicItem.tsx");
__webpack_require__(/*! ./forumTopicsList.css */ "./src/pages/forumTopicsList/forumTopicsList.css");
const mock_1 = __webpack_require__(/*! ./mock */ "./src/pages/forumTopicsList/mock.ts");
const ForumTopicsList = () => {
    const [openModal, setOpenModal] = (0, react_1.useState)(false);
    const onToggleModal = () => setOpenModal(!openModal);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(forumPageWrapper_1.ForumPageWrapper, { children: [(0, jsx_runtime_1.jsx)(components_1.PageMeta, { title: '\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0435\u043C' }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'forum-topics-list' }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'forum-topics-list__header' }, { children: [(0, jsx_runtime_1.jsx)(forumBackLink_1.ForumBackLink, { title: '\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0440\u0430\u0437\u0434\u0435\u043B\u0430\u043C' }), (0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ design: 'secondary', onClick: onToggleModal }, { children: "\u041D\u043E\u0432\u0430\u044F \u0442\u0435\u043C\u0430" }))] })), (0, jsx_runtime_1.jsx)("section", Object.assign({ className: 'forum-topics-list__list' }, { children: react_1.Children.toArray(mock_1.TOPICS_LIST.map((topic) => (0, jsx_runtime_1.jsx)(forumTopicItem_1.ForumTopicItem, { topicItemData: topic }))) }))] }))] }), (0, jsx_runtime_1.jsx)(components_1.Modal, Object.assign({ isOpen: openModal, title: '\u041D\u043E\u0432\u0430\u044F \u0442\u0435\u043C\u0430', onClose: onToggleModal }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'forum-topics-list__modal' }, { children: [(0, jsx_runtime_1.jsx)(components_1.Input, { name: 'topicName', design: 'rounded', placeholder: '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043C\u044B', onChange: () => { } }), (0, jsx_runtime_1.jsx)(components_1.Textarea, { name: 'topicMessage', placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F', onChange: () => { } }), (0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ onClick: onToggleModal }, { children: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C" }))] })) }))] }));
};
exports.default = ForumTopicsList;


/***/ }),

/***/ "./src/pages/forumTopicsList/mock.ts":
/*!*******************************************!*\
  !*** ./src/pages/forumTopicsList/mock.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TOPICS_LIST = void 0;
exports.TOPICS_LIST = [
    {
        id: 0,
        name: 'Тема форума в одну строку',
        postsCount: 1024,
        viewsCount: 2048,
        username: 'Username',
        avatar: null,
        date: '01.01.2023',
    },
    {
        id: 1,
        name: 'Тема форума в одну строку',
        postsCount: 1024,
        viewsCount: 2048,
        username: 'Username',
        avatar: null,
        date: '01.01.2023',
    },
    {
        id: 2,
        name: 'Тема форума в одну строку',
        postsCount: 1024,
        viewsCount: 2048,
        username: 'Username',
        avatar: null,
        date: '01.01.2023',
    },
    {
        id: 3,
        name: 'Тема форума в одну строку',
        postsCount: 1024,
        viewsCount: 2048,
        username: 'Username',
        avatar: null,
        date: '01.01.2023',
    },
    {
        id: 4,
        name: 'Тема форума в одну строку',
        postsCount: 1024,
        viewsCount: 2048,
        username: 'Username',
        avatar: null,
        date: '01.01.2023',
    },
    {
        id: 5,
        name: 'Тема форума в одну строку',
        postsCount: 1024,
        viewsCount: 2048,
        username: 'Username',
        avatar: null,
        date: '01.01.2023',
    },
    {
        id: 6,
        name: 'Тема форума в одну строку',
        postsCount: 1024,
        viewsCount: 2048,
        username: 'Username',
        avatar: null,
        date: '01.01.2023',
    },
    {
        id: 7,
        name: 'Тема форума в одну строку',
        postsCount: 1024,
        viewsCount: 2048,
        username: 'Username',
        avatar: null,
        date: '01.01.2023',
    },
];


/***/ }),

/***/ "./src/pages/game/components/gameHeader/gameHeader.css":
/*!*************************************************************!*\
  !*** ./src/pages/game/components/gameHeader/gameHeader.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/game/components/gameHeader/gameHeader.tsx":
/*!*************************************************************!*\
  !*** ./src/pages/game/components/gameHeader/gameHeader.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameHeader = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const header_1 = __webpack_require__(/*! @/pages/components/header/header */ "./src/pages/components/header/header.tsx");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
__webpack_require__(/*! ./gameHeader.css */ "./src/pages/game/components/gameHeader/gameHeader.css");
exports.GameHeader = (0, react_1.memo)(({ timer, onBack, onRefresh, onAddFlask }) => ((0, jsx_runtime_1.jsxs)(header_1.Header, Object.assign({ classes: 'game-header' }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'game-header__actions-wrapper' }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ className: 'game-header__button', onClick: onBack }, { children: (0, jsx_runtime_1.jsx)(components_1.Icon, { name: 'arrow-left' }) })), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: 'game-header__button', onClick: onRefresh }, { children: (0, jsx_runtime_1.jsx)(components_1.Icon, { name: 'refresh' }) }))] })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'game-header__timer' }, { children: timer })), (0, jsx_runtime_1.jsxs)("button", Object.assign({ className: 'game-header__button game-header__button_add-flask', onClick: onAddFlask }, { children: [(0, jsx_runtime_1.jsx)(components_1.Icon, { name: 'plus', size: 's' }), (0, jsx_runtime_1.jsx)(components_1.Icon, { name: 'flask' })] }))] }))));


/***/ }),

/***/ "./src/pages/game/components/levelCompleteModal/levelCompleteModal.css":
/*!*****************************************************************************!*\
  !*** ./src/pages/game/components/levelCompleteModal/levelCompleteModal.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/game/components/levelCompleteModal/levelCompleteModal.tsx":
/*!*****************************************************************************!*\
  !*** ./src/pages/game/components/levelCompleteModal/levelCompleteModal.tsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelCompleteModal = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
__webpack_require__(/*! ./levelCompleteModal.css */ "./src/pages/game/components/levelCompleteModal/levelCompleteModal.css");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
const LevelCompleteModal = ({ isOpen, isLastLevel, timer, points, onBack, onRefresh, onNext }) => ((0, jsx_runtime_1.jsx)(components_1.Modal, Object.assign({ isOpen: isOpen, title: '\u041F\u043E\u0431\u0435\u0434\u0430!' }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'level-complete-modal__wrapper' }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'level-complete-modal__text-wrapper' }, { children: (0, jsx_runtime_1.jsxs)(components_1.P, { children: ["\u0412\u044B \u043F\u0440\u043E\u0448\u043B\u0438 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0437\u0430 ", timer, ". \u0417\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0435 \u043E\u0447\u043A\u0438 - ", points, "."] }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'level-complete-modal__actions-wrapper' }, { children: [(0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ width: 's', design: 'secondary', onClick: onRefresh }, { children: "\u0417\u0430\u043D\u043E\u0432\u043E" })), (0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ width: 's', design: isLastLevel ? 'primary' : 'secondary', onClick: onBack }, { children: "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E" })), !isLastLevel && ((0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ width: 's', onClick: onNext }, { children: "\u0414\u0430\u043B\u044C\u0448\u0435" })))] }))] })) })));
exports.LevelCompleteModal = LevelCompleteModal;


/***/ }),

/***/ "./src/pages/game/game.css":
/*!*********************************!*\
  !*** ./src/pages/game/game.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/game/game.tsx":
/*!*********************************!*\
  !*** ./src/pages/game/game.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const react_timer_hook_1 = __webpack_require__(/*! react-timer-hook */ "react-timer-hook");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const flask_1 = __webpack_require__(/*! ./gameEntities/flask */ "./src/pages/game/gameEntities/flask.ts");
const gameHeader_1 = __webpack_require__(/*! ./components/gameHeader/gameHeader */ "./src/pages/game/components/gameHeader/gameHeader.tsx");
const levelCompleteModal_1 = __webpack_require__(/*! ./components/levelCompleteModal/levelCompleteModal */ "./src/pages/game/components/levelCompleteModal/levelCompleteModal.tsx");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
__webpack_require__(/*! ./game.css */ "./src/pages/game/game.css");
const clickSound_ogg_1 = __importDefault(__webpack_require__(/*! ../../../assets/sounds/clickSound.ogg */ "./assets/sounds/clickSound.ogg"));
const getCursorPosition_1 = __webpack_require__(/*! ./utils/getCursorPosition */ "./src/pages/game/utils/getCursorPosition.ts");
const routes_1 = __webpack_require__(/*! @/router/routes */ "./src/router/routes.ts");
const constants_1 = __webpack_require__(/*! @/utils/constants */ "./src/utils/constants.ts");
const useGameLoop_1 = __webpack_require__(/*! ./hooks/useGameLoop */ "./src/pages/game/hooks/useGameLoop.ts");
const initLevel_1 = __webpack_require__(/*! ./utils/initLevel */ "./src/pages/game/utils/initLevel.ts");
const config_1 = __webpack_require__(/*! ./utils/config */ "./src/pages/game/utils/config.ts");
const Game = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const canvasRef = (0, react_1.useRef)(null);
    const clickSoundRef = (0, react_1.useRef)(null);
    const [level, setLevel] = (0, react_1.useState)(Number(localStorage.getItem(constants_1.ACTIVE_LEVEL_NUMBER)) || 0);
    const isLastLevel = Object.keys(config_1.gameConfig.levels).length === level;
    const [flaskList, setFlaskList] = (0, react_1.useState)((0, initLevel_1.initLevel)(level));
    const [isNewFlaskAdded, setIsNewFlaskAdded] = (0, react_1.useState)(false);
    const [activeFlaskId, setActiveFlaskId] = (0, react_1.useState)();
    const [isCompleteModalOpen, setIsCompleteModalOpen] = (0, react_1.useState)(false);
    const [points, setPoints] = (0, react_1.useState)(0);
    const { minutes, seconds, reset, pause } = (0, react_timer_hook_1.useStopwatch)({ autoStart: true });
    const timer = `${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`;
    const handleRefresh = () => {
        reset();
        setFlaskList((0, initLevel_1.initLevel)(level));
        setPoints(0);
        setIsCompleteModalOpen(false);
        setIsNewFlaskAdded(false);
    };
    (0, react_1.useEffect)(() => {
        if (!level) {
            navigate(routes_1.routes.game.path);
        }
        if (level !== Number(localStorage.getItem(constants_1.ACTIVE_LEVEL_NUMBER))) {
            localStorage.setItem(constants_1.ACTIVE_LEVEL_NUMBER, level.toString());
            handleRefresh();
        }
    }, [level]);
    const handleBack = () => {
        navigate(routes_1.routes.game.path);
    };
    const handleNext = () => {
        setLevel(level + 1);
    };
    const checkLevelComplete = () => {
        const isComplete = flaskList.every((flask) => !flask.balls.length ||
            (flask.balls.length === config_1.gameConfig.flask.maxBalls && flask.balls.every((ball) => ball.color === flask.balls[0].color)));
        if (isComplete) {
            pause();
            const earnedPoints = Math.round(config_1.gameConfig.maxPoints / (minutes * 60 + seconds) / (isNewFlaskAdded ? 2 : 1));
            setPoints(earnedPoints);
            setIsCompleteModalOpen(true);
            // save points and time in the db
        }
    };
    const handleAddFlask = () => {
        if (isNewFlaskAdded) {
            return;
        }
        const lastFlask = flaskList[flaskList.length - 1];
        const emptyFlask = new flask_1.Flask(lastFlask.x + config_1.gameConfig.flask.width + config_1.gameConfig.grid.flasksGap, lastFlask.y);
        setIsNewFlaskAdded(true);
        setFlaskList([...flaskList, emptyFlask]);
    };
    const playClickSound = () => {
        const clickSound = clickSoundRef.current;
        if (clickSound) {
            clickSound.pause();
            clickSound.currentTime = 0;
            clickSound.play();
        }
    };
    const handleCanvasClick = (e) => {
        var _a, _b;
        const canvas = canvasRef.current;
        const cursorPosition = (0, getCursorPosition_1.getCursorPosition)(canvas, e);
        const clickedFlask = flaskList.find((flask) => cursorPosition.x >= flask.x - config_1.gameConfig.flask.lineWidth / 2 &&
            cursorPosition.x <= flask.x + config_1.gameConfig.flask.width + config_1.gameConfig.flask.lineWidth / 2 &&
            cursorPosition.y >= flask.y &&
            cursorPosition.y <= flask.y + config_1.gameConfig.flask.height + config_1.gameConfig.flask.lineWidth / 2);
        if (!clickedFlask) {
            return;
        }
        if (activeFlaskId === clickedFlask.id) {
            clickedFlask.dropBall();
            setActiveFlaskId(undefined);
        }
        else if (activeFlaskId) {
            const activeFlask = flaskList.find((flask) => flask.id === activeFlaskId);
            if ((((_a = activeFlask === null || activeFlask === void 0 ? void 0 : activeFlask.getUpperBall()) === null || _a === void 0 ? void 0 : _a.color) === ((_b = clickedFlask.getUpperBall()) === null || _b === void 0 ? void 0 : _b.color) && clickedFlask.hasSpace) ||
                !clickedFlask.getUpperBall()) {
                playClickSound();
                clickedFlask.addBall(activeFlask === null || activeFlask === void 0 ? void 0 : activeFlask.popBall());
                setActiveFlaskId(undefined);
                checkLevelComplete();
            }
            else {
                playClickSound();
                activeFlask === null || activeFlask === void 0 ? void 0 : activeFlask.dropBall();
                clickedFlask.select();
                setActiveFlaskId(clickedFlask.id);
            }
        }
        else if (clickedFlask.getUpperBall()) {
            playClickSound();
            clickedFlask.select();
            setActiveFlaskId(clickedFlask.id);
        }
    };
    const render = (0, react_1.useCallback)((dt) => {
        const canvas = canvasRef.current;
        const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
        if (canvas && ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            flaskList.forEach((flask) => flask.render(ctx, dt));
        }
    }, [flaskList]);
    (0, useGameLoop_1.useGameLoop)(render);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(components_1.PageMeta, { title: '\u0418\u0433\u0440\u0430' }), (0, jsx_runtime_1.jsx)(gameHeader_1.GameHeader, { timer: timer, onBack: handleBack, onRefresh: handleRefresh, onAddFlask: handleAddFlask }), (0, jsx_runtime_1.jsxs)("main", Object.assign({ className: 'game__wrapper' }, { children: [(0, jsx_runtime_1.jsx)("canvas", { width: '800', height: '700', ref: canvasRef, onClick: handleCanvasClick }), (0, jsx_runtime_1.jsx)("audio", { ref: clickSoundRef, src: clickSound_ogg_1.default }), (0, jsx_runtime_1.jsx)(levelCompleteModal_1.LevelCompleteModal, { isOpen: isCompleteModalOpen, points: points, timer: timer, isLastLevel: isLastLevel, onBack: handleBack, onNext: handleNext, onRefresh: handleRefresh })] }))] }));
};
exports.default = Game;


/***/ }),

/***/ "./src/pages/game/gameEntities/ball.ts":
/*!*********************************************!*\
  !*** ./src/pages/game/gameEntities/ball.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Ball = void 0;
const config_1 = __webpack_require__(/*! ../utils/config */ "./src/pages/game/utils/config.ts");
class Ball {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.yVel = 0;
        this.yVelDirection = 'up';
        this.xVel = 0;
        this.xVelDirection = 'right';
        this.movePosList = [];
        this.curMovePos = null;
        this.initMovePosData = () => {
            if (!this.curMovePos) {
                return;
            }
            const pos = this.curMovePos;
            if (this.x !== pos.x) {
                this.xVelDirection = this.x < pos.x ? 'right' : 'left';
                this.xVel = config_1.gameConfig.ball.vel;
            }
            if (this.y !== pos.y) {
                this.yVelDirection = this.y < pos.y ? 'down' : 'up';
                this.yVel = config_1.gameConfig.ball.vel;
            }
        };
        this.update = (dt) => {
            var _a, _b;
            if (!this.curMovePos && this.movePosList.length) {
                this.curMovePos = this.movePosList.shift();
                this.initMovePosData();
            }
            if (!this.curMovePos) {
                return;
            }
            const isLeftDir = this.xVelDirection === 'left';
            const xDirection = isLeftDir ? -1 : 1;
            const isHorizontalMoving = isLeftDir ? this.x > ((_a = this.curMovePos) === null || _a === void 0 ? void 0 : _a.x) : this.x < ((_b = this.curMovePos) === null || _b === void 0 ? void 0 : _b.x);
            const isUpDir = this.yVelDirection === 'up';
            const yDirection = isUpDir ? -1 : 1;
            const isVerticalMoving = isUpDir ? this.y > this.curMovePos.y : this.y < this.curMovePos.y;
            this.y += yDirection * this.yVel * dt * config_1.gameConfig.ball.velRatio;
            this.x += xDirection * this.xVel * dt * config_1.gameConfig.ball.velRatio;
            if (!isVerticalMoving && this.curMovePos.y) {
                this.y = this.curMovePos.y;
                this.yVel = 0;
                this.curMovePos.y = 0;
            }
            if (!isHorizontalMoving && this.curMovePos.x) {
                this.x = this.curMovePos.x;
                this.xVel = 0;
                this.curMovePos.x = 0;
            }
            if (this.curMovePos && !this.curMovePos.x && !this.curMovePos.y) {
                this.curMovePos = null;
            }
        };
        this.render = (ctx, dt) => {
            const { borderColor, borderWidth, radius } = config_1.gameConfig.ball;
            this.update(dt);
            const gradient = ctx.createLinearGradient(this.x - radius, this.y - radius / 2, this.x + radius, this.y + radius / 2);
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(0.8, config_1.mapColorToGradientTone[this.color]);
            ctx.fillStyle = gradient;
            ctx.strokeStyle = borderColor;
            ctx.lineWidth = borderWidth;
            ctx.beginPath();
            ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        };
        this.moveTo = (pos) => {
            this.movePosList.push(pos);
        };
    }
}
exports.Ball = Ball;


/***/ }),

/***/ "./src/pages/game/gameEntities/flask.ts":
/*!**********************************************!*\
  !*** ./src/pages/game/gameEntities/flask.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Flask = void 0;
const nanoid_1 = __webpack_require__(/*! nanoid */ "nanoid");
const config_1 = __webpack_require__(/*! ../utils/config */ "./src/pages/game/utils/config.ts");
const ball_1 = __webpack_require__(/*! ./ball */ "./src/pages/game/gameEntities/ball.ts");
class Flask {
    constructor(x, y, ballsColors) {
        this.balls = [];
        this.render = (ctx, dt) => {
            ctx.strokeStyle = config_1.gameConfig.flask.color;
            ctx.lineWidth = config_1.gameConfig.flask.lineWidth;
            this.strokeFlask(ctx);
            this.balls.forEach((ball) => ball.render(ctx, dt));
        };
        this.strokeFlask = (ctx) => {
            const { width, height, radius, neckSize } = config_1.gameConfig.flask;
            ctx.beginPath();
            ctx.moveTo(this.x - neckSize + radius.topLeft, this.y);
            ctx.lineTo(this.x + width + neckSize - radius.topRight, this.y);
            ctx.quadraticCurveTo(this.x + width, this.y, this.x + width, this.y + radius.topRight);
            ctx.lineTo(this.x + width, this.y + height - radius.bottomRight);
            ctx.quadraticCurveTo(this.x + width, this.y + height, this.x + width - radius.bottomRight, this.y + height);
            ctx.lineTo(this.x + radius.bottomLeft, this.y + height);
            ctx.quadraticCurveTo(this.x, this.y + height, this.x, this.y + height - radius.bottomLeft);
            ctx.lineTo(this.x, this.y + radius.topLeft);
            ctx.quadraticCurveTo(this.x, this.y, this.x + radius.topLeft - neckSize, this.y);
            ctx.closePath();
            ctx.stroke();
        };
        this.getUpperBall = () => {
            if (this.balls.length) {
                return this.balls[this.balls.length - 1];
            }
            return null;
        };
        this.select = () => {
            if (!this.balls.length) {
                return;
            }
            const upperBall = this.balls[this.balls.length - 1];
            upperBall.moveTo({
                x: this.ballXPos,
                y: this.y - config_1.gameConfig.ball.radius - config_1.gameConfig.flask.padding,
            });
        };
        this.dropBall = () => {
            if (!this.balls.length) {
                return;
            }
            const upperBall = this.balls[this.balls.length - 1];
            const secondBall = this.balls.length > 1 ? this.balls[this.balls.length - 2] : null;
            upperBall.moveTo({
                x: this.ballXPos,
                y: secondBall ? secondBall.y - config_1.gameConfig.ball.radius * 2 - config_1.gameConfig.flask.ballsGap : this.ballYBottomPos,
            });
        };
        this.moveBall = (pos) => {
            const upperBall = this.balls[this.balls.length - 1];
            upperBall.moveTo(pos);
        };
        this.popBall = () => this.balls.pop();
        this.addBall = (ball) => {
            this.balls.push(ball);
            this.moveBall(this.upperFlaskPos);
            this.dropBall();
        };
        this.id = (0, nanoid_1.nanoid)(6);
        this.x = x;
        this.y = y;
        if (ballsColors) {
            const ballX = this.ballXPos;
            let ballY = this.ballYBottomPos;
            ballsColors.forEach((color) => {
                this.balls.push(new ball_1.Ball(ballX, ballY, color));
                ballY = ballY - config_1.gameConfig.flask.ballsGap - config_1.gameConfig.ball.radius * 2;
            });
        }
    }
    get ballXPos() {
        return this.x + config_1.gameConfig.flask.width / 2;
    }
    get ballYBottomPos() {
        return this.y + config_1.gameConfig.flask.height - config_1.gameConfig.flask.lineWidth - config_1.gameConfig.flask.padding - config_1.gameConfig.ball.radius;
    }
    get hasSpace() {
        return this.balls.length < config_1.gameConfig.flask.maxBalls;
    }
    get upperFlaskPos() {
        return {
            x: this.ballXPos,
            y: this.y - config_1.gameConfig.ball.radius - config_1.gameConfig.flask.padding,
        };
    }
}
exports.Flask = Flask;


/***/ }),

/***/ "./src/pages/game/hooks/useGameLoop.ts":
/*!*********************************************!*\
  !*** ./src/pages/game/hooks/useGameLoop.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useGameLoop = void 0;
const react_1 = __webpack_require__(/*! react */ "react");
const useGameLoop = (cb) => {
    const requestId = (0, react_1.useRef)();
    const prevTime = (0, react_1.useRef)();
    const loop = (time) => {
        if (prevTime.current !== undefined) {
            const dt = time - prevTime.current;
            cb(dt);
        }
        prevTime.current = time;
        requestId.current = requestAnimationFrame(loop);
    };
    (0, react_1.useEffect)(() => {
        requestId.current = requestAnimationFrame(loop);
        return () => {
            if (requestId.current) {
                cancelAnimationFrame(requestId.current);
            }
        };
    }, [cb]);
};
exports.useGameLoop = useGameLoop;


/***/ }),

/***/ "./src/pages/game/utils/config.ts":
/*!****************************************!*\
  !*** ./src/pages/game/utils/config.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.gameConfig = exports.mapColorToGradientTone = void 0;
const colors = {
    black: '#212329',
    red: '#c42c1e',
    green: '#0d6731',
    lightGreen: '#60d67c',
    blue: '#3b2fc0',
    lightBlue: '#54a1e5',
    orange: '#eb8b3f',
    purple: '#6d2d8e',
    yellow: '#f1d85b',
    pink: '#e3637c',
    khaki: '#769707',
    grey: '#636461',
};
exports.mapColorToGradientTone = {
    [colors.red]: '#62160f',
    [colors.green]: '#06401f',
    [colors.lightGreen]: '#103e1b',
    [colors.blue]: '#161248',
    [colors.lightBlue]: '#155288',
    [colors.orange]: '#a95412',
    [colors.purple]: '#441c59',
    [colors.yellow]: '#bfa210',
    [colors.pink]: '#ad1f3b',
    [colors.khaki]: '#4a5e04',
    [colors.grey]: '#252624',
};
exports.gameConfig = {
    maxPoints: 100000,
    grid: {
        baseGap: 6,
        flasksGap: 110,
        rowsGap: 126,
        filledFlasks: 7,
        emptyFlasks: 2,
        flasksPerRow: 5,
    },
    flask: {
        width: 62,
        height: 230,
        radius: {
            topLeft: 10,
            topRight: 10,
            bottomLeft: 25,
            bottomRight: 25,
        },
        neckSize: 15,
        lineWidth: 2,
        color: colors.grey,
        ballsGap: 1,
        maxBalls: 4,
        padding: 2,
    },
    ball: {
        radius: 26,
        borderColor: colors.grey,
        borderWidth: 1,
        velRatio: 0.05,
        vel: 15,
    },
    levels: {
        1: [
            [colors.blue, colors.blue, colors.grey, colors.pink],
            [colors.lightBlue, colors.red, colors.grey, colors.pink],
            [colors.red, colors.red, colors.lightGreen, colors.blue],
            [colors.lightGreen, colors.lightBlue, colors.lightBlue, colors.orange],
            [colors.lightGreen, colors.orange, colors.grey, colors.orange],
            [colors.orange, colors.pink, colors.grey, colors.red],
            [colors.blue, colors.lightBlue, colors.pink, colors.lightGreen],
        ],
    },
};


/***/ }),

/***/ "./src/pages/game/utils/getCursorPosition.ts":
/*!***************************************************!*\
  !*** ./src/pages/game/utils/getCursorPosition.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCursorPosition = void 0;
const getCursorPosition = (canvas, event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return { x, y };
};
exports.getCursorPosition = getCursorPosition;


/***/ }),

/***/ "./src/pages/game/utils/initLevel.ts":
/*!*******************************************!*\
  !*** ./src/pages/game/utils/initLevel.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initLevel = void 0;
const flask_1 = __webpack_require__(/*! ../gameEntities/flask */ "./src/pages/game/gameEntities/flask.ts");
const config_1 = __webpack_require__(/*! ./config */ "./src/pages/game/utils/config.ts");
const initLevel = (levelNumber) => {
    if (!levelNumber || !config_1.gameConfig.levels[levelNumber]) {
        return [];
    }
    const levelConfig = config_1.gameConfig.levels[levelNumber];
    const list = [];
    let y = config_1.gameConfig.grid.baseGap + config_1.gameConfig.ball.radius * 2;
    let x = config_1.gameConfig.grid.baseGap;
    for (let i = 0; i < config_1.gameConfig.grid.filledFlasks; i++) {
        if (i === config_1.gameConfig.grid.flasksPerRow) {
            y += config_1.gameConfig.flask.height + config_1.gameConfig.grid.rowsGap;
            x = config_1.gameConfig.grid.baseGap;
        }
        const flaskBalls = levelConfig[i];
        const flask = new flask_1.Flask(x, y, flaskBalls);
        list.push(flask);
        x += config_1.gameConfig.flask.width + config_1.gameConfig.grid.flasksGap;
    }
    for (let i = 0; i < config_1.gameConfig.grid.emptyFlasks; i++) {
        list.push(new flask_1.Flask(x, y));
        x += config_1.gameConfig.flask.width + config_1.gameConfig.grid.flasksGap;
    }
    return list;
};
exports.initLevel = initLevel;


/***/ }),

/***/ "./src/pages/leaderboard/components/leaderboardRow/leaderboardRow.css":
/*!****************************************************************************!*\
  !*** ./src/pages/leaderboard/components/leaderboardRow/leaderboardRow.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/leaderboard/components/leaderboardRow/leaderboardRow.tsx":
/*!****************************************************************************!*\
  !*** ./src/pages/leaderboard/components/leaderboardRow/leaderboardRow.tsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaderboardRow = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
__webpack_require__(/*! ./leaderboardRow.css */ "./src/pages/leaderboard/components/leaderboardRow/leaderboardRow.css");
const LeaderboardRow = ({ leaderItem }) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'leaderboard-row' }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'leaderboard-row-cell leaderboard-row-cell_aside' }, { children: (0, jsx_runtime_1.jsx)(components_1.P, { children: leaderItem.place }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'leaderboard-row-cell leaderboard-row-cell_center' }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'leaderboard-row-cell__block' }, { children: [(0, jsx_runtime_1.jsx)(components_1.Avatar, { size: 's', src: leaderItem.avatar }), (0, jsx_runtime_1.jsx)(components_1.P, { children: leaderItem.name })] })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'leaderboard-row-cell leaderboard-row-cell_aside' }, { children: (0, jsx_runtime_1.jsx)(components_1.P, { children: leaderItem.points }) }))] })));
exports.LeaderboardRow = LeaderboardRow;


/***/ }),

/***/ "./src/pages/leaderboard/leaderboard.css":
/*!***********************************************!*\
  !*** ./src/pages/leaderboard/leaderboard.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/leaderboard/leaderboard.tsx":
/*!***********************************************!*\
  !*** ./src/pages/leaderboard/leaderboard.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_1 = __webpack_require__(/*! react */ "react");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
const leaderboardRow_1 = __webpack_require__(/*! ./components/leaderboardRow/leaderboardRow */ "./src/pages/leaderboard/components/leaderboardRow/leaderboardRow.tsx");
__webpack_require__(/*! ./leaderboard.css */ "./src/pages/leaderboard/leaderboard.css");
const mock_1 = __webpack_require__(/*! ./mock */ "./src/pages/leaderboard/mock.ts");
const Leaderboard = () => {
    const [activeColumn, setActiveColumn] = (0, react_1.useState)('points');
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'leaderboard' }, { children: [(0, jsx_runtime_1.jsx)(components_1.PageMeta, { title: '\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u043B\u0438\u0434\u0435\u0440\u043E\u0432' }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'leaderboard__wrapper leaderboard__wrapper_dark' }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'leaderboard__heading' }, { children: (0, jsx_runtime_1.jsx)(components_1.Heading, Object.assign({ size: 'xl', type: 'h1' }, { children: "\u041B\u0438\u0434\u0435\u0440\u044B" })) })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'leaderboard__wrapper leaderboard__wrapper_dark' }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'leaderboard__table-header' }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)('leaderboard__table-header-cell', 'leaderboard__table-header-cell_aside', {
                                'leaderboard__table-header-cell_active': activeColumn === 'place',
                            }), onClick: () => setActiveColumn('place') }, { children: (0, jsx_runtime_1.jsx)(components_1.Heading, Object.assign({ size: 'm', type: 'h3' }, { children: "\u041C\u0435\u0441\u0442\u043E" })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)('leaderboard__table-header-cell', 'leaderboard__table-header-cell_center', {
                                'leaderboard__table-header-cell_active': activeColumn === 'player',
                            }), onClick: () => setActiveColumn('player') }, { children: (0, jsx_runtime_1.jsx)(components_1.Heading, Object.assign({ size: 'm', type: 'h3' }, { children: "\u0418\u0433\u0440\u043E\u043A" })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)('leaderboard__table-header-cell', 'leaderboard__table-header-cell_aside', {
                                'leaderboard__table-header-cell_active': activeColumn === 'points',
                            }), onClick: () => setActiveColumn('points') }, { children: (0, jsx_runtime_1.jsx)(components_1.Heading, Object.assign({ size: 'm', type: 'h3' }, { children: "\u041E\u0447\u043A\u0438" })) }))] })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'leaderboard__wrapper' }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'leaderboard__table' }, { children: react_1.Children.toArray(mock_1.LEADERS_LIST.map((leader) => (0, jsx_runtime_1.jsx)(leaderboardRow_1.LeaderboardRow, { leaderItem: leader }))) })) }))] })));
};
exports.default = Leaderboard;


/***/ }),

/***/ "./src/pages/leaderboard/mock.ts":
/*!***************************************!*\
  !*** ./src/pages/leaderboard/mock.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LEADERS_LIST = void 0;
exports.LEADERS_LIST = [
    {
        id: 0,
        place: 1,
        name: 'dominator',
        avatar: null,
        points: 2048,
    },
    {
        id: 1,
        place: 2,
        name: 'super mario',
        avatar: null,
        points: 1024,
    },
    {
        id: 2,
        place: 3,
        name: 'nancy',
        avatar: null,
        points: 512,
    },
    {
        id: 3,
        place: 4,
        name: 'zzz',
        avatar: null,
        points: 256,
    },
    {
        id: 4,
        place: 5,
        name: 'ooo',
        avatar: null,
        points: 128,
    },
];


/***/ }),

/***/ "./src/pages/login/constants.ts":
/*!**************************************!*\
  !*** ./src/pages/login/constants.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.validationSchema = exports.initialValues = exports.inputs = void 0;
const validation_1 = __webpack_require__(/*! @/utils/validation */ "./src/utils/validation.ts");
exports.inputs = [
    {
        name: 'login',
        label: 'Логин',
    },
    {
        name: 'password',
        label: 'Пароль',
        type: 'password',
    },
];
exports.initialValues = {
    login: '',
    password: '',
};
exports.validationSchema = (0, validation_1.createValidationSchema)('login', 'password');


/***/ }),

/***/ "./src/pages/login/login.tsx":
/*!***********************************!*\
  !*** ./src/pages/login/login.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const authPageTemplate_1 = __webpack_require__(/*! @/pages/components/authPageTemplate/authPageTemplate */ "./src/pages/components/authPageTemplate/authPageTemplate.tsx");
const authForm_1 = __webpack_require__(/*! @/pages/components/authForm/authForm */ "./src/pages/components/authForm/authForm.tsx");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
const useAuth_1 = __webpack_require__(/*! @/hooks/useAuth */ "./src/hooks/useAuth.ts");
const routes_1 = __webpack_require__(/*! @/router/routes */ "./src/router/routes.ts");
const constants_1 = __webpack_require__(/*! ./constants */ "./src/pages/login/constants.ts");
const Login = () => {
    const { isLoading, handleLogin } = (0, useAuth_1.useAuth)();
    return ((0, jsx_runtime_1.jsxs)(authPageTemplate_1.AuthPageTemplate, { children: [(0, jsx_runtime_1.jsx)(components_1.PageMeta, { title: '\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F' }), (0, jsx_runtime_1.jsx)(authForm_1.AuthForm, { isLoading: isLoading, formTitle: '\u0412\u0445\u043E\u0434', formName: 'loginForm', onSubmit: handleLogin, submitButtonText: '\u0412\u043E\u0439\u0442\u0438', inputs: constants_1.inputs, initialValues: constants_1.initialValues, validationSchema: constants_1.validationSchema, link: { href: routes_1.routes.register.path, children: 'Нет аккаунта?' }, classes: 'slide-in-from-left' })] }));
};
exports.default = Login;


/***/ }),

/***/ "./src/pages/profile/components/profileDataItem/profileDataItem.css":
/*!**************************************************************************!*\
  !*** ./src/pages/profile/components/profileDataItem/profileDataItem.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/profile/components/profileDataItem/profileDataItem.tsx":
/*!**************************************************************************!*\
  !*** ./src/pages/profile/components/profileDataItem/profileDataItem.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileDataItem = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const profileListItem_1 = __webpack_require__(/*! @/pages/components/profileListItem/profileListItem */ "./src/pages/components/profileListItem/profileListItem.tsx");
__webpack_require__(/*! ./profileDataItem.css */ "./src/pages/profile/components/profileDataItem/profileDataItem.css");
const ProfileDataItem = ({ title, text }) => ((0, jsx_runtime_1.jsx)(profileListItem_1.ProfileListItem, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'profile-data-item' }, { children: [(0, jsx_runtime_1.jsx)("span", { children: title }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'profile-data-item__info' }, { children: text }))] })) }));
exports.ProfileDataItem = ProfileDataItem;


/***/ }),

/***/ "./src/pages/profile/profile.css":
/*!***************************************!*\
  !*** ./src/pages/profile/profile.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/profile/profile.tsx":
/*!***************************************!*\
  !*** ./src/pages/profile/profile.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const profilePageTemplate_1 = __webpack_require__(/*! ../components/profilePageTemplate/profilePageTemplate */ "./src/pages/components/profilePageTemplate/profilePageTemplate.tsx");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
const profileList_1 = __webpack_require__(/*! ../components/profileList/profileList */ "./src/pages/components/profileList/profileList.tsx");
const profileListItem_1 = __webpack_require__(/*! ../components/profileListItem/profileListItem */ "./src/pages/components/profileListItem/profileListItem.tsx");
const profileDataItem_1 = __webpack_require__(/*! ./components/profileDataItem/profileDataItem */ "./src/pages/profile/components/profileDataItem/profileDataItem.tsx");
__webpack_require__(/*! ./profile.css */ "./src/pages/profile/profile.css");
const store_1 = __webpack_require__(/*! @/store */ "./src/store/index.ts");
const selectors_1 = __webpack_require__(/*! @/store/user/selectors */ "./src/store/user/selectors.ts");
const types_1 = __webpack_require__(/*! ./types */ "./src/pages/profile/types.ts");
const Profile = () => {
    const { email, login, display_name, first_name, second_name, phone } = (0, store_1.useAppSelector)(selectors_1.selectUser);
    return ((0, jsx_runtime_1.jsxs)(profilePageTemplate_1.ProfilePageTemplate, Object.assign({ title: `${first_name} ${second_name}` }, { children: [(0, jsx_runtime_1.jsx)(components_1.PageMeta, { title: '\u041F\u0440\u043E\u0444\u0438\u043B\u044C' }), (0, jsx_runtime_1.jsxs)(profileList_1.ProfileList, { children: [(0, jsx_runtime_1.jsx)(profileDataItem_1.ProfileDataItem, { title: types_1.Label.EMAIL, text: email }), (0, jsx_runtime_1.jsx)(profileDataItem_1.ProfileDataItem, { title: types_1.Label.LOGIN, text: login }), (0, jsx_runtime_1.jsx)(profileDataItem_1.ProfileDataItem, { title: types_1.Label.FIRST_NAME, text: first_name }), (0, jsx_runtime_1.jsx)(profileDataItem_1.ProfileDataItem, { title: types_1.Label.SECOND_NAME, text: second_name }), (0, jsx_runtime_1.jsx)(profileDataItem_1.ProfileDataItem, { title: types_1.Label.DISPLAY_NAME, text: display_name }), (0, jsx_runtime_1.jsx)(profileDataItem_1.ProfileDataItem, { title: types_1.Label.PHONE, text: phone })] }), (0, jsx_runtime_1.jsxs)(profileList_1.ProfileList, { children: [(0, jsx_runtime_1.jsx)(profileListItem_1.ProfileListItem, { children: (0, jsx_runtime_1.jsx)(components_1.Link, Object.assign({ href: '/profile/user' }, { children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435" })) }), (0, jsx_runtime_1.jsx)(profileListItem_1.ProfileListItem, { children: (0, jsx_runtime_1.jsx)(components_1.Link, Object.assign({ href: '/profile/password' }, { children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C" })) })] })] })));
};
exports.default = Profile;


/***/ }),

/***/ "./src/pages/profile/types.ts":
/*!************************************!*\
  !*** ./src/pages/profile/types.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
var Label;
(function (Label) {
    Label["EMAIL"] = "\u041F\u043E\u0447\u0442\u0430";
    Label["LOGIN"] = "\u041B\u043E\u0433\u0438\u043D";
    Label["FIRST_NAME"] = "\u0418\u043C\u044F";
    Label["SECOND_NAME"] = "\u0424\u0430\u043C\u0438\u043B\u0438\u044F";
    Label["DISPLAY_NAME"] = "\u0418\u043C\u044F \u0432 \u0447\u0430\u0442\u0435";
    Label["PHONE"] = "\u0422\u0435\u043B\u0435\u0444\u043E\u043D";
})(Label = exports.Label || (exports.Label = {}));


/***/ }),

/***/ "./src/pages/profilePassword/constants.ts":
/*!************************************************!*\
  !*** ./src/pages/profilePassword/constants.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.validationSchema = exports.initialValues = exports.inputs = void 0;
const validation_1 = __webpack_require__(/*! @/utils/validation */ "./src/utils/validation.ts");
exports.inputs = [
    {
        name: 'oldPassword',
        label: 'Старый пароль',
        type: 'password',
    },
    {
        name: 'newPassword',
        label: 'Новый пароль',
        type: 'password',
    },
    {
        name: 'repeatPassword',
        label: 'Повторите новый пароль',
        type: 'password',
    },
];
exports.initialValues = {
    oldPassword: '',
    newPassword: '',
    repeatPassword: '',
};
exports.validationSchema = (0, validation_1.createValidationSchema)('oldPassword', 'newPassword', 'repeatPassword');


/***/ }),

/***/ "./src/pages/profilePassword/profilePassword.tsx":
/*!*******************************************************!*\
  !*** ./src/pages/profilePassword/profilePassword.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const profilePageTemplate_1 = __webpack_require__(/*! ../components/profilePageTemplate/profilePageTemplate */ "./src/pages/components/profilePageTemplate/profilePageTemplate.tsx");
const profileForm_1 = __webpack_require__(/*! ../components/profileForm/profileForm */ "./src/pages/components/profileForm/profileForm.tsx");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
const constants_1 = __webpack_require__(/*! ./constants */ "./src/pages/profilePassword/constants.ts");
const store_1 = __webpack_require__(/*! @/store */ "./src/store/index.ts");
const selectors_1 = __webpack_require__(/*! @/store/user/selectors */ "./src/store/user/selectors.ts");
const thunk_1 = __webpack_require__(/*! @/store/user/thunk */ "./src/store/user/thunk.ts");
const ProfilePassword = () => {
    const dispatch = (0, store_1.useAppDispatch)();
    const isLoading = (0, store_1.useAppSelector)(selectors_1.selectIsLoading);
    return ((0, jsx_runtime_1.jsxs)(profilePageTemplate_1.ProfilePageTemplate, { children: [(0, jsx_runtime_1.jsx)(components_1.PageMeta, { title: '\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C' }), (0, jsx_runtime_1.jsx)(profileForm_1.ProfileForm, { isLoading: isLoading, formName: 'profileUserForm', onSubmit: (values) => dispatch((0, thunk_1.changePassword)(values)), inputs: constants_1.inputs, initialValues: constants_1.initialValues, validationSchema: constants_1.validationSchema })] }));
};
exports.default = ProfilePassword;


/***/ }),

/***/ "./src/pages/profileUser/constants.ts":
/*!********************************************!*\
  !*** ./src/pages/profileUser/constants.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.validationSchema = exports.inputs = void 0;
const validation_1 = __webpack_require__(/*! @/utils/validation */ "./src/utils/validation.ts");
exports.inputs = [
    {
        name: 'email',
        label: 'Email',
        type: 'email',
    },
    {
        name: 'login',
        label: 'Логин',
    },
    {
        name: 'first_name',
        label: 'Имя',
    },
    {
        name: 'second_name',
        label: 'Фамилия',
    },
    {
        name: 'display_name',
        label: 'Имя в чате',
    },
    {
        name: 'phone',
        label: 'Телефон',
        type: 'tel',
    },
];
exports.validationSchema = (0, validation_1.createValidationSchema)('email', 'login', 'first_name', 'second_name', 'display_name', 'phone');


/***/ }),

/***/ "./src/pages/profileUser/profileUser.tsx":
/*!***********************************************!*\
  !*** ./src/pages/profileUser/profileUser.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const profilePageTemplate_1 = __webpack_require__(/*! ../components/profilePageTemplate/profilePageTemplate */ "./src/pages/components/profilePageTemplate/profilePageTemplate.tsx");
const profileForm_1 = __webpack_require__(/*! ../components/profileForm/profileForm */ "./src/pages/components/profileForm/profileForm.tsx");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
const constants_1 = __webpack_require__(/*! ./constants */ "./src/pages/profileUser/constants.ts");
const store_1 = __webpack_require__(/*! @/store */ "./src/store/index.ts");
const thunk_1 = __webpack_require__(/*! @/store/user/thunk */ "./src/store/user/thunk.ts");
const selectors_1 = __webpack_require__(/*! @/store/user/selectors */ "./src/store/user/selectors.ts");
const ProfileUser = () => {
    const dispatch = (0, store_1.useAppDispatch)();
    const isLoading = (0, store_1.useAppSelector)(selectors_1.selectIsLoading);
    const _a = (0, store_1.useAppSelector)(selectors_1.selectUser), { id, display_name } = _a, initialValues = __rest(_a, ["id", "display_name"]);
    return ((0, jsx_runtime_1.jsxs)(profilePageTemplate_1.ProfilePageTemplate, { children: [(0, jsx_runtime_1.jsx)(components_1.PageMeta, { title: '\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435' }), (0, jsx_runtime_1.jsx)(profileForm_1.ProfileForm, { isLoading: isLoading, formName: 'profileUserForm', onSubmit: (values) => dispatch((0, thunk_1.changeUser)(values)), inputs: constants_1.inputs, initialValues: Object.assign(Object.assign({}, initialValues), { display_name: display_name }), validationSchema: constants_1.validationSchema })] }));
};
exports.default = ProfileUser;


/***/ }),

/***/ "./src/pages/register/constants.ts":
/*!*****************************************!*\
  !*** ./src/pages/register/constants.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.validationSchema = exports.initialValues = exports.inputs = void 0;
const validation_1 = __webpack_require__(/*! @/utils/validation */ "./src/utils/validation.ts");
exports.inputs = [
    {
        name: 'first_name',
        label: 'Имя',
    },
    {
        name: 'second_name',
        label: 'Фамилия',
    },
    {
        name: 'email',
        label: 'Email',
        type: 'email',
    },
    {
        name: 'phone',
        label: 'Телефон',
        type: 'tel',
    },
    {
        name: 'login',
        label: 'Логин',
    },
    {
        name: 'password',
        label: 'Пароль',
        type: 'password',
    },
];
exports.initialValues = {
    first_name: '',
    second_name: '',
    login: '',
    email: '',
    password: '',
    phone: '',
};
exports.validationSchema = (0, validation_1.createValidationSchema)('first_name', 'second_name', 'email', 'phone', 'login', 'password');


/***/ }),

/***/ "./src/pages/register/register.tsx":
/*!*****************************************!*\
  !*** ./src/pages/register/register.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const authPageTemplate_1 = __webpack_require__(/*! @/pages/components/authPageTemplate/authPageTemplate */ "./src/pages/components/authPageTemplate/authPageTemplate.tsx");
const authForm_1 = __webpack_require__(/*! @/pages/components/authForm/authForm */ "./src/pages/components/authForm/authForm.tsx");
const components_1 = __webpack_require__(/*! @/components */ "./src/components/index.ts");
const useAuth_1 = __webpack_require__(/*! @/hooks/useAuth */ "./src/hooks/useAuth.ts");
const routes_1 = __webpack_require__(/*! @/router/routes */ "./src/router/routes.ts");
const constants_1 = __webpack_require__(/*! ./constants */ "./src/pages/register/constants.ts");
const Register = () => {
    const { isLoading, handleRegister } = (0, useAuth_1.useAuth)();
    return ((0, jsx_runtime_1.jsxs)(authPageTemplate_1.AuthPageTemplate, Object.assign({ isReversed: true }, { children: [(0, jsx_runtime_1.jsx)(components_1.PageMeta, { title: '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F' }), (0, jsx_runtime_1.jsx)(authForm_1.AuthForm, { isLoading: isLoading, formTitle: '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F', formName: 'registerForm', onSubmit: handleRegister, submitButtonText: '\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F', inputs: constants_1.inputs, initialValues: constants_1.initialValues, validationSchema: constants_1.validationSchema, link: { href: routes_1.routes.login.path, children: 'Уже зарегистрированы?' }, classes: 'slide-in-from-right' })] })));
};
exports.default = Register;


/***/ }),

/***/ "./src/router/requireAuth.tsx":
/*!************************************!*\
  !*** ./src/router/requireAuth.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RequireAuth = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const useAuth_1 = __webpack_require__(/*! @/hooks/useAuth */ "./src/hooks/useAuth.ts");
const routes_1 = __webpack_require__(/*! @/router/routes */ "./src/router/routes.ts");
/**
 * Use this to protect private pages.
 * */
const RequireAuth = () => {
    const { isAuth } = (0, useAuth_1.useAuth)();
    if (!isAuth) {
        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: routes_1.routes.login.path });
    }
    return (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {});
};
exports.RequireAuth = RequireAuth;


/***/ }),

/***/ "./src/router/router.tsx":
/*!*******************************!*\
  !*** ./src/router/router.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const component_1 = __importDefault(__webpack_require__(/*! @loadable/component */ "@loadable/component"));
const routes_1 = __webpack_require__(/*! ./routes */ "./src/router/routes.ts");
const requireAuth_1 = __webpack_require__(/*! ./requireAuth */ "./src/router/requireAuth.tsx");
const centeredLayout_1 = __webpack_require__(/*! @/layouts/centeredLayout/centeredLayout */ "./src/layouts/centeredLayout/centeredLayout.tsx");
const baseLayout_1 = __webpack_require__(/*! @/layouts/baseLayout/baseLayout */ "./src/layouts/baseLayout/baseLayout.tsx");
const Forum = (0, component_1.default)(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! @/pages/forum/forum */ "./src/pages/forum/forum.tsx"))));
const ForumTopicsList = (0, component_1.default)(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! @/pages/forumTopicsList/forumTopicsList */ "./src/pages/forumTopicsList/forumTopicsList.tsx"))));
const ForumTopic = (0, component_1.default)(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! @/pages/forumTopic/forumTopic */ "./src/pages/forumTopic/forumTopic.tsx"))));
const Profile = (0, component_1.default)(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! @/pages/profile/profile */ "./src/pages/profile/profile.tsx"))));
const ProfileUser = (0, component_1.default)(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! @/pages/profileUser/profileUser */ "./src/pages/profileUser/profileUser.tsx"))));
const ProfilePassword = (0, component_1.default)(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! @/pages/profilePassword/profilePassword */ "./src/pages/profilePassword/profilePassword.tsx"))));
const Login = (0, component_1.default)(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! @/pages/login/login */ "./src/pages/login/login.tsx"))));
const Register = (0, component_1.default)(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! @/pages/register/register */ "./src/pages/register/register.tsx"))));
const Leaderboard = (0, component_1.default)(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! @/pages/leaderboard/leaderboard */ "./src/pages/leaderboard/leaderboard.tsx"))));
const Dashboard = (0, component_1.default)(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! @/pages/dashboard/dashboard */ "./src/pages/dashboard/dashboard.tsx"))));
const Game = (0, component_1.default)(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! @/pages/game/game */ "./src/pages/game/game.tsx"))));
const ErrorPage = (0, component_1.default)(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! @/pages/error/error */ "./src/pages/error/error.tsx"))));
const Router = () => ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, Object.assign({ element: (0, jsx_runtime_1.jsx)(centeredLayout_1.CenteredLayout, {}) }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: routes_1.routes.login.path, element: (0, jsx_runtime_1.jsx)(Login, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: routes_1.routes.register.path, element: (0, jsx_runtime_1.jsx)(Register, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: routes_1.routes.notFound.path, element: (0, jsx_runtime_1.jsx)(ErrorPage, { title: '404', description: '\u043D\u0435 \u0442\u0443\u0434\u0430 \u043F\u043E\u043F\u0430\u043B\u0438' }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: routes_1.routes.error.path, element: (0, jsx_runtime_1.jsx)(ErrorPage, { title: '500', description: '\u0443\u0436\u0435 \u0444\u0438\u043A\u0441\u0438\u043C' }) })] })), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, Object.assign({ element: (0, jsx_runtime_1.jsx)(requireAuth_1.RequireAuth, {}) }, { children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, Object.assign({ path: routes_1.routes.profile.path, element: (0, jsx_runtime_1.jsx)(baseLayout_1.BaseLayout, {}) }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(Profile, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: 'user', element: (0, jsx_runtime_1.jsx)(ProfileUser, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: 'password', element: (0, jsx_runtime_1.jsx)(ProfilePassword, {}) })] })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, Object.assign({ element: (0, jsx_runtime_1.jsx)(baseLayout_1.BaseLayout, {}) }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: routes_1.routes.leaderboard.path, element: (0, jsx_runtime_1.jsx)(Leaderboard, {}) }) })), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, Object.assign({ path: routes_1.routes.forum.path, element: (0, jsx_runtime_1.jsx)(baseLayout_1.BaseLayout, {}) }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(Forum, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: ':sectionId', element: (0, jsx_runtime_1.jsx)(ForumTopicsList, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: ':sectionId/:topicId', element: (0, jsx_runtime_1.jsx)(ForumTopic, {}) })] })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, Object.assign({ path: routes_1.routes.game.path, element: (0, jsx_runtime_1.jsx)(baseLayout_1.BaseLayout, {}) }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(Dashboard, {}) }) })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: routes_1.routes.gameRun.path, element: (0, jsx_runtime_1.jsx)(Game, {}) })] }))] }));
exports.Router = Router;


/***/ }),

/***/ "./src/router/routes.ts":
/*!******************************!*\
  !*** ./src/router/routes.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
exports.routes = {
    landing: {
        path: '/',
        title: 'Ball Sort Puzzle',
        headerIcon: null,
    },
    login: {
        path: '/',
        title: 'Вход',
        headerIcon: null,
    },
    register: {
        path: '/sign-up',
        title: 'Регистрация',
        headerIcon: null,
    },
    profile: {
        path: '/profile',
        title: 'Профиль',
        headerIcon: 'user',
    },
    forum: {
        path: '/forum',
        title: 'Форум',
        headerIcon: 'forum',
    },
    leaderboard: {
        path: '/leaderboard',
        title: 'Лидеры',
        headerIcon: 'leaderboard',
    },
    game: {
        path: '/game',
        title: 'Игра',
        headerIcon: 'balls',
    },
    gameRun: {
        path: '/game/run',
        title: 'Игра',
        headerIcon: null,
    },
    notFound: {
        path: '/*',
        title: 'Страница не найдена',
        headerIcon: null,
    },
    error: {
        path: '/error',
        title: 'Ошибка',
        headerIcon: null,
    },
};


/***/ }),

/***/ "./src/server-render-middleware.tsx":
/*!******************************************!*\
  !*** ./src/server-render-middleware.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const server_1 = __webpack_require__(/*! react-dom/server */ "react-dom/server");
const server_2 = __webpack_require__(/*! react-router-dom/server */ "react-router-dom/server");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const react_helmet_1 = __importDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
const server_3 = __webpack_require__(/*! @loadable/server */ "@loadable/server");
const App_1 = __importDefault(__webpack_require__(/*! ./components/App/App */ "./src/components/App/App.tsx"));
const store_1 = __webpack_require__(/*! @/store */ "./src/store/index.ts");
const thunk_1 = __webpack_require__(/*! @/store/user/thunk */ "./src/store/user/thunk.ts");
exports.default = (req, res) => {
    const location = req.url;
    const statsFile = path_1.default.resolve('./dist/loadable-stats.json');
    const chunkExtractor = new server_3.ChunkExtractor({ statsFile });
    const jsx = chunkExtractor.collectChunks((0, jsx_runtime_1.jsx)(react_redux_1.Provider, Object.assign({ store: store_1.store }, { children: (0, jsx_runtime_1.jsx)(server_2.StaticRouter, Object.assign({ location: location }, { children: (0, jsx_runtime_1.jsx)(App_1.default, {}) })) })));
    const reactHtml = (0, server_1.renderToString)(jsx);
    const helmetData = react_helmet_1.default.renderStatic();
    const dataRequirements = [store_1.store.dispatch((0, thunk_1.getUserData)())];
    if (req.url) {
        return res.redirect(req.url);
    }
    res.status(req.statusCode || 200).send(getHtml(reactHtml, helmetData, chunkExtractor, store_1.store));
    return Promise.all(dataRequirements);
};
function getHtml(reactHtml, helmetData, chunkExtractor, reduxStore = {}) {
    const scriptTags = chunkExtractor.getScriptTags();
    const linkTags = chunkExtractor.getLinkTags();
    const styleTags = chunkExtractor.getStyleTags();
    return `
    <!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link href="/main.css" rel="stylesheet">
        ${helmetData.title.toString()}
        ${linkTags}
        ${styleTags}
      </head>
      <body>
        <div class="root" id="root">${reactHtml}</div>
        <script>
          window.__INITIAL_STORE__ = ${JSON.stringify(reduxStore)}
        </script>
        ${scriptTags}
      </body>
    </html>
  `;
}


/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const compression_1 = __importDefault(__webpack_require__(/*! compression */ "compression"));
const server_render_middleware_1 = __importDefault(__webpack_require__(/*! ./server-render-middleware */ "./src/server-render-middleware.tsx"));
const app = (0, express_1.default)();
exports.app = app;
app
    .use((0, compression_1.default)())
    .use(express_1.default.static(path_1.default.resolve(__dirname, '../dist')))
    .use(express_1.default.static(path_1.default.resolve(__dirname, '../server')))
    .use(express_1.default.static(path_1.default.resolve(__dirname, '../assets')));
app.get('/*', server_render_middleware_1.default);


/***/ }),

/***/ "./src/services/auth/auth.ts":
/*!***********************************!*\
  !*** ./src/services/auth/auth.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const axios_1 = __importDefault(__webpack_require__(/*! axios */ "axios"));
const trimData_1 = __webpack_require__(/*! @/utils/trimData */ "./src/utils/trimData.ts");
exports.AuthService = {
    signIn: (payload) => {
        const data = (0, trimData_1.trimData)(payload);
        return axios_1.default.post('/auth/signin', data);
    },
    signUp: (payload) => {
        const data = (0, trimData_1.trimData)(payload);
        return axios_1.default.post('/auth/signup', data);
    },
    logout: () => axios_1.default.post('/auth/logout'),
    getUser: () => axios_1.default.get('/auth/user'),
};


/***/ }),

/***/ "./src/services/auth/index.ts":
/*!************************************!*\
  !*** ./src/services/auth/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var auth_1 = __webpack_require__(/*! ./auth */ "./src/services/auth/auth.ts");
Object.defineProperty(exports, "AuthService", { enumerable: true, get: function () { return auth_1.AuthService; } });


/***/ }),

/***/ "./src/services/profile/index.ts":
/*!***************************************!*\
  !*** ./src/services/profile/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
var profile_1 = __webpack_require__(/*! ./profile */ "./src/services/profile/profile.ts");
Object.defineProperty(exports, "ProfileService", { enumerable: true, get: function () { return profile_1.ProfileService; } });


/***/ }),

/***/ "./src/services/profile/profile.ts":
/*!*****************************************!*\
  !*** ./src/services/profile/profile.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const axios_1 = __importDefault(__webpack_require__(/*! axios */ "axios"));
exports.ProfileService = {
    changeProfile(data) {
        return axios_1.default.put('user/profile', data);
    },
    changePassword(data) {
        return axios_1.default.put('user/password', data);
    },
    changeAvatar(data) {
        const formData = new FormData();
        formData.append('avatar', data);
        return axios_1.default.put('user/profile/avatar', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
};


/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppSelector = exports.useAppDispatch = exports.store = exports.isServer = void 0;
const toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const slice_1 = __importDefault(__webpack_require__(/*! ./user/slice */ "./src/store/user/slice.ts"));
exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);
const appReducer = (0, toolkit_1.combineReducers)({
    user: slice_1.default,
});
exports.store = (0, toolkit_1.configureStore)({
    reducer: appReducer,
    devTools: process.env.NODE_ENV !== 'production' && !exports.isServer,
});
exports.useAppDispatch = react_redux_1.useDispatch;
exports.useAppSelector = react_redux_1.useSelector;


/***/ }),

/***/ "./src/store/user/selectors.ts":
/*!*************************************!*\
  !*** ./src/store/user/selectors.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.selectErrorMessage = exports.selectIsLoading = exports.selectIsAuth = exports.selectUser = void 0;
const selectUser = (state) => state.user.user;
exports.selectUser = selectUser;
const selectIsAuth = (state) => state.user.isAuth;
exports.selectIsAuth = selectIsAuth;
const selectIsLoading = (state) => state.user.isLoading;
exports.selectIsLoading = selectIsLoading;
const selectErrorMessage = (state) => state.user.errorMessage;
exports.selectErrorMessage = selectErrorMessage;


/***/ }),

/***/ "./src/store/user/slice.ts":
/*!*********************************!*\
  !*** ./src/store/user/slice.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setErrorMessage = exports.userSlice = void 0;
const toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
const thunk_1 = __webpack_require__(/*! ./thunk */ "./src/store/user/thunk.ts");
const initialState = {
    user: {
        id: null,
        first_name: '',
        second_name: '',
        display_name: null,
        login: '',
        email: '',
        phone: '',
        avatar: '',
    },
    isAuth: false,
    isLoading: false,
    errorMessage: '',
};
exports.userSlice = (0, toolkit_1.createSlice)({
    name: 'user',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(thunk_1.changeUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        });
        builder.addCase(thunk_1.changeAvatar.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        });
        builder.addCase(thunk_1.changePassword.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(thunk_1.getUserData.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isAuth = true;
            state.isLoading = false;
        });
        builder.addCase(thunk_1.logout.fulfilled, (state) => {
            state.user = initialState.user;
            state.isAuth = false;
            state.isLoading = false;
        });
        builder.addMatcher((0, toolkit_1.isPending)(thunk_1.changeUser, thunk_1.changePassword, thunk_1.changeAvatar, thunk_1.signIn, thunk_1.signUp, thunk_1.logout, thunk_1.getUserData), (state) => {
            state.isLoading = true;
            state.errorMessage = '';
        });
        builder.addMatcher((0, toolkit_1.isRejected)(thunk_1.changeUser, thunk_1.changePassword, thunk_1.changeAvatar, thunk_1.signIn, thunk_1.signUp, thunk_1.logout, thunk_1.getUserData), (state, action) => {
            var _a;
            state.isLoading = false;
            state.errorMessage = (_a = action.error.message) !== null && _a !== void 0 ? _a : 'Что-то пошло не так';
        });
    },
});
exports.setErrorMessage = exports.userSlice.actions.setErrorMessage;
exports.default = exports.userSlice.reducer;


/***/ }),

/***/ "./src/store/user/thunk.ts":
/*!*********************************!*\
  !*** ./src/store/user/thunk.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.getUserData = exports.signUp = exports.signIn = exports.changeAvatar = exports.changePassword = exports.changeUser = void 0;
const toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
const profile_1 = __webpack_require__(/*! @/services/profile */ "./src/services/profile/index.ts");
const auth_1 = __webpack_require__(/*! @/services/auth */ "./src/services/auth/index.ts");
exports.changeUser = (0, toolkit_1.createAsyncThunk)('profile/changeUser', (payload) => profile_1.ProfileService.changeProfile(payload));
exports.changePassword = (0, toolkit_1.createAsyncThunk)('profile/changePassword', (payload) => profile_1.ProfileService.changePassword(payload));
exports.changeAvatar = (0, toolkit_1.createAsyncThunk)('profile/changeAvatar', (payload) => profile_1.ProfileService.changeAvatar(payload));
exports.signIn = (0, toolkit_1.createAsyncThunk)('user/signIn', (payload) => auth_1.AuthService.signIn(payload));
exports.signUp = (0, toolkit_1.createAsyncThunk)('user/signUp', (payload) => auth_1.AuthService.signUp(payload));
exports.getUserData = (0, toolkit_1.createAsyncThunk)('user/getUser', () => auth_1.AuthService.getUser());
exports.logout = (0, toolkit_1.createAsyncThunk)('user/logout', () => auth_1.AuthService.logout());


/***/ }),

/***/ "./src/utils/compose.ts":
/*!******************************!*\
  !*** ./src/utils/compose.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
const compose = (...functions) => {
    if (functions.length === 0) {
        return (arg) => arg;
    }
    if (functions.length === 1) {
        return functions[0];
    }
    return functions.reduce((a, b) => (...args) => a(b(...args)));
};
exports.compose = compose;


/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACTIVE_LEVEL_NUMBER = exports.APP_ROOT_ID = exports.PRACTICUM_ORIGIN_AVATAR = exports.PRACTICUM_ORIGIN = void 0;
exports.PRACTICUM_ORIGIN = 'https://ya-praktikum.tech/api/v2';
exports.PRACTICUM_ORIGIN_AVATAR = 'https://ya-praktikum.tech/api/v2/resources';
exports.APP_ROOT_ID = 'root';
exports.ACTIVE_LEVEL_NUMBER = 'active level number';


/***/ }),

/***/ "./src/utils/trimData.ts":
/*!*******************************!*\
  !*** ./src/utils/trimData.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.trimData = void 0;
const trimData = (data) => {
    const trimmed = {};
    Object.keys(data).forEach((key) => {
        let value = data[key];
        if (typeof value === 'string') {
            value = value.trim();
        }
        trimmed[key] = value;
    });
    return trimmed;
};
exports.trimData = trimData;


/***/ }),

/***/ "./src/utils/validation.ts":
/*!*********************************!*\
  !*** ./src/utils/validation.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createValidationSchema = exports.validationSchema = void 0;
const Yup = __importStar(__webpack_require__(/*! yup */ "yup"));
const regExps = {
    hasNoSpecialCharsExHyphen: /^[а-яА-ЯёЁa-zA-Z-]+$/g,
    hasLatinCharsDigitsHyphens: /^[a-zA-Z][a-zA-Z-_\d]{3,20}$/g,
    hasUppercaseLatinChars: /[A-Z]+/g,
    hasUppercaseFirstChar: /^[А-ЯЁA-Z].+$/g,
    hasDigits: /\d+/g,
    phone: /^\+?[\d+]{10,15}$/g,
};
const messages = {
    required: 'Это поле обязательно',
    email: 'Введите действительный email адрес',
    min: (field, num) => `Длина ${field} должна быть не менее ${num} символов`,
    max: (field, num) => `Длина ${field} должна быть не более ${num} символов`,
    hasLatinCharsDigitsHyphens: 'Допускаются латинские буквы, цифры, символы "-" и "_", должен начинаться с буквы',
    hasUppercaseLatinChars: 'Обязательна хотя бы одна заглавная буква',
    hasUppercaseFirstChar: (field) => `${field} необходимо писать с большой буквы`,
    hasDigits: 'Обязательна хотя бы одна цифра',
    hasNoSpecialCharsExHyphen: 'Не допускаются пробелы, цифры и спецсимволы, кроме "-"',
    phone: 'Телефон должен состоять только из цифр, в начале допускается "+"',
    confirmPassword: 'Пароли должны совпадать',
};
exports.validationSchema = {
    login: Yup.string()
        .trim()
        .min(3, messages.min('логина', 3))
        .max(20, messages.max('логина', 20))
        .matches(regExps.hasLatinCharsDigitsHyphens, messages.hasLatinCharsDigitsHyphens)
        .required(messages.required),
    password: Yup.string()
        .trim()
        .min(8, messages.min('пароля', 8))
        .max(40, messages.min('пароля', 40))
        .matches(regExps.hasUppercaseLatinChars, messages.hasUppercaseLatinChars)
        .matches(regExps.hasDigits, messages.hasDigits)
        .required(messages.required),
    oldPassword: Yup.string()
        .trim()
        .min(8, messages.min('пароля', 8))
        .max(40, messages.min('пароля', 40))
        .matches(regExps.hasUppercaseLatinChars, messages.hasUppercaseLatinChars)
        .matches(regExps.hasDigits, messages.hasDigits)
        .required(messages.required),
    newPassword: Yup.string()
        .trim()
        .min(8, messages.min('пароля', 8))
        .max(40, messages.min('пароля', 40))
        .matches(regExps.hasUppercaseLatinChars, messages.hasUppercaseLatinChars)
        .matches(regExps.hasDigits, messages.hasDigits)
        .required(messages.required),
    repeatPassword: Yup.string()
        .trim()
        .min(8, messages.min('пароля', 8))
        .max(40, messages.min('пароля', 40))
        .matches(regExps.hasUppercaseLatinChars, messages.hasUppercaseLatinChars)
        .matches(regExps.hasDigits, messages.hasDigits)
        .oneOf([Yup.ref('newPassword'), null], messages.confirmPassword)
        .required(messages.required),
    first_name: Yup.string()
        .trim()
        .matches(regExps.hasNoSpecialCharsExHyphen, messages.hasNoSpecialCharsExHyphen)
        .matches(regExps.hasUppercaseFirstChar, messages.hasUppercaseFirstChar('Имя'))
        .required(messages.required),
    second_name: Yup.string()
        .trim()
        .matches(regExps.hasNoSpecialCharsExHyphen, messages.hasNoSpecialCharsExHyphen)
        .matches(regExps.hasUppercaseFirstChar, messages.hasUppercaseFirstChar('Фамилию'))
        .required(messages.required),
    email: Yup.string().trim().email(messages.email).required(messages.required),
    phone: Yup.string()
        .trim()
        .matches(regExps.phone, messages.phone)
        .min(10, messages.min('телефона', 10))
        .max(15, messages.max('телефона', 20))
        .required(messages.required),
};
const createValidationSchema = (...fields) => {
    const schema = {};
    fields.forEach((field) => {
        schema[field] = exports.validationSchema[field];
    });
    return Yup.object(schema);
};
exports.createValidationSchema = createValidationSchema;


/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@loadable/component");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@loadable/server");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "nanoid":
/*!*************************!*\
  !*** external "nanoid" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nanoid");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/server");

/***/ }),

/***/ "react-timer-hook":
/*!***********************************!*\
  !*** external "react-timer-hook" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-timer-hook");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map