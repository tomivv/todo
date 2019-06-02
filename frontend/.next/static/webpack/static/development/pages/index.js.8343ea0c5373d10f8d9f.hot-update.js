webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Data.js":
/*!****************************!*\
  !*** ./components/Data.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Data; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TodoContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoContext */ "./components/TodoContext.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo */ "./components/Todo.js");
var _jsxFileName = "/Users/tomi/Documents/projects/todo/frontend/components/Data.js";

 // eslint-disable-next-line import/no-cycle



function Data(_ref) {
  var data = _ref.data;
  console.log(data);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, data.map(function (note) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Todo__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: note,
      key: note.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.8343ea0c5373d10f8d9f.hot-update.js.map