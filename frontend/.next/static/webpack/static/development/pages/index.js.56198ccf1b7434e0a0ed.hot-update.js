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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/tomi/Documents/projects/todo/frontend/components/Todo.js";


/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-static-element-interactions */


function Todo(note) {
  function underLine(e) {
    if (e.target.classList.contains('line')) {
      e.target.classList.remove('line');
    } else {
      e.target.className = 'line';
    }

    console.log(e.target.classList);
  }

  function deleteNote(_x) {
    return _deleteNote.apply(this, arguments);
  }

  function _deleteNote() {
    _deleteNote = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
      var api;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              api = "http://localhost:3001/api/notes/".concat(id); // const resp = await axios.delete(api);

              console.log(id);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _deleteNote.apply(this, arguments);
  }

  return (// eslint-disable-next-line react/style-prop-object
    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: note.value.id,
      className: "note",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      onClick: function onClick(e) {
        return underLine(e);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, note.value.note), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      type: "button",
      className: "btn",
      onClick: function onClick(e) {
        return deleteNote(e);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "X"))
  );
}

/***/ })

})
//# sourceMappingURL=index.js.56198ccf1b7434e0a0ed.hot-update.js.map