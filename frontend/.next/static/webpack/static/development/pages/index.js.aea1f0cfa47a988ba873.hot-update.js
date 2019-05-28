webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Todo.js":
/*!****************************!*\
  !*** ./components/Todo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Todo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tomi/Documents/projects/todo/frontend/components/Todo.js";


/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-static-element-interactions */

function Todo(note) {
  function underLine(e) {
    if (e.target.classList.contains('line')) {
      e.target.classList.remove('line');
    }

    console.log(e.target.classList);
    e.target.className = 'line';
  }

  return (// eslint-disable-next-line react/style-prop-object
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: note.value.id,
      onClick: function onClick(e) {
        return underLine(e);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, note.value.note, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "X"))
  );
}

/***/ })

})
//# sourceMappingURL=index.js.aea1f0cfa47a988ba873.hot-update.js.map