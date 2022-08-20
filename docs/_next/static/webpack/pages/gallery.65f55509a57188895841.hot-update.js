webpackHotUpdate_N_E("pages/gallery",{

/***/ "./src/pages/gallery/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/gallery/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/constants/role */ \"./src/shared/constants/role.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Layout */ \"./src/components/Layout/index.jsx\");\n/* harmony import */ var src_components_Directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/Directory */ \"./src/components/Directory/index.jsx\");\n/* harmony import */ var src_components_Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Filter */ \"./src/components/Filter/index.jsx\");\n/* harmony import */ var src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/RepoList */ \"./src/components/RepoList/index.jsx\");\n/* harmony import */ var src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/data/gallery.json */ \"./src/data/gallery.json\");\nvar src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/data/gallery.json */ \"./src/data/gallery.json\", 1);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.module.css */ \"./src/pages/gallery/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/lillydev/lilly.art/src/pages/gallery/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconsole.log(src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"][0].tech); // console.log('Thanks for visiting!');\n\nvar GalleryPage = function GalleryPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      currentRole = _useState[0],\n      setCurrentRole = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setCurrentRole(localStorage.getItem('role', currentRole) || src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__[\"DEVELOPER\"]);\n  }, [currentRole, setCurrentRole]);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      keyword = _useState2[0],\n      setKeyword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      pageNumber = _useState3[0],\n      setPageNumber = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      projectLanguage = _useState4[0],\n      setLanguage = _useState4[1];\n\n  var onPageSelect = function onPageSelect(event) {\n    setPageNumber(parseInt(event.target.value, 10));\n  };\n\n  var articleSearch = function articleSearch(event) {\n    setKeyword(event.target.value);\n    setPageNumber(0);\n  };\n\n  var selectLanguage = function selectLanguage(event) {\n    setLanguage(event.target.value);\n    setPageNumber(0);\n  };\n\n  var techArray = [].concat.apply([], src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].map(function (data) {\n    return data.tech;\n  })).reduce(function (categoryArray, currentCategory) {// console.log({categoryArray, currentCategory})\n    // const newArray = categoryArray;\n    // newArray[currentCategory] = (newArray[currentCategory] || 0) + 1;\n    // // console.log(newArray);\n    // return newArray;\n  });\n  console.log(techArray); // const techList = Object.keys(techArray)\n  // .map((key) => ({ optionLabel: key, optionCount: techArray[key] }))\n  // .sort((a, b) => ((b.optionLabel < a.optionLabel) ? 1 : -1));\n  // console.log({techArray, techList});\n\n  var filteredList = src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].filter(function (data) {\n    if (keyword && projectLanguage) {\n      return data.node.languages.edges.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true) && data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (keyword && !projectLanguage) {\n      return data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (!keyword && projectLanguage) {\n      return data.tech.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true);\n    }\n\n    return data;\n  }).sort(function (a, b) {\n    return new Date(b.date) - new Date(a.date);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"N.E.Lilly: Gallery\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: 'title'\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1.0, minimum-scale=1.0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      role: currentRole,\n      setRole: setCurrentRole,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Gallery\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          data: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"],\n          itemType: ['work', 'works'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage // categoryList={techList}\n\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Directory__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          works: filteredList.slice(pageNumber * 10, pageNumber * 10 + 10)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          data: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"],\n          itemType: ['work', 'works'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          works: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"repositories\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(GalleryPage, \"Fc6+9UFYZWs9vrdVrIWcnaFcFY0=\");\n\n_c = GalleryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"GalleryPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dhbGxlcnkvaW5kZXguanN4PzViYjMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImdhbGxlcnkiLCJ0ZWNoIiwiR2FsbGVyeVBhZ2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRSb2xlIiwic2V0Q3VycmVudFJvbGUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiREVWRUxPUEVSIiwia2V5d29yZCIsInNldEtleXdvcmQiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInByb2plY3RMYW5ndWFnZSIsInNldExhbmd1YWdlIiwib25QYWdlU2VsZWN0IiwiZXZlbnQiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwiYXJ0aWNsZVNlYXJjaCIsInNlbGVjdExhbmd1YWdlIiwidGVjaEFycmF5IiwiY29uY2F0IiwiYXBwbHkiLCJtYXAiLCJkYXRhIiwicmVkdWNlIiwiY2F0ZWdvcnlBcnJheSIsImN1cnJlbnRDYXRlZ29yeSIsImZpbHRlcmVkTGlzdCIsImZpbHRlciIsIm5vZGUiLCJsYW5ndWFnZXMiLCJlZGdlcyIsImxhbmd1YWdlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInRpdGxlIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsImRhdGUiLCJnYWxsZXJ5U3R5bGUiLCJzbGljZSIsInJlcG9zaXRvcmllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLDZEQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQXZCLEUsQ0FFQTs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsRUFBRCxDQUR0QjtBQUFBLE1BQ2pCQyxXQURpQjtBQUFBLE1BQ0pDLGNBREk7O0FBRXhCQyx5REFBUyxDQUFDLFlBQU07QUFDZEQsa0JBQWMsQ0FBQ0UsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCSixXQUE3QixLQUE2Q0ssbUVBQTlDLENBQWQ7QUFDRCxHQUZRLEVBRU4sQ0FBQ0wsV0FBRCxFQUFjQyxjQUFkLENBRk0sQ0FBVDs7QUFGd0IsbUJBTU1GLHNEQUFRLENBQUMsSUFBRCxDQU5kO0FBQUEsTUFNakJPLE9BTmlCO0FBQUEsTUFNUkMsVUFOUTs7QUFBQSxtQkFPWVIsc0RBQVEsQ0FBQyxDQUFELENBUHBCO0FBQUEsTUFPakJTLFVBUGlCO0FBQUEsTUFPTEMsYUFQSzs7QUFBQSxtQkFRZVYsc0RBQVEsQ0FBQyxJQUFELENBUnZCO0FBQUEsTUFRakJXLGVBUmlCO0FBQUEsTUFRQUMsV0FSQTs7QUFVeEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlCSixpQkFBYSxDQUFDSyxRQUFRLENBQUNELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFkLEVBQXFCLEVBQXJCLENBQVQsQ0FBYjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDSixLQUFELEVBQVc7QUFDL0JOLGNBQVUsQ0FBQ00sS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQWQsQ0FBVjtBQUNBUCxpQkFBYSxDQUFDLENBQUQsQ0FBYjtBQUNELEdBSEQ7O0FBS0EsTUFBTVMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDTCxLQUFELEVBQVc7QUFDaENGLGVBQVcsQ0FBQ0UsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQWQsQ0FBWDtBQUNBUCxpQkFBYSxDQUFDLENBQUQsQ0FBYjtBQUNELEdBSEQ7O0FBS0QsTUFBTVUsU0FBUyxHQUFHLEdBQUdDLE1BQUgsQ0FBVUMsS0FBVixDQUFnQixFQUFoQixFQUFvQnpCLDZEQUFPLENBQUMwQixHQUFSLENBQVksVUFBQ0MsSUFBRDtBQUFBLFdBQVVBLElBQUksQ0FBQzFCLElBQWY7QUFBQSxHQUFaLENBQXBCLEVBQ2QyQixNQURjLENBQ1AsVUFBQ0MsYUFBRCxFQUFnQkMsZUFBaEIsRUFBb0MsQ0FDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBUGMsQ0FBbEI7QUFRQ2hDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZd0IsU0FBWixFQWhDd0IsQ0FrQ3hCO0FBQ0E7QUFDQTtBQUVFOztBQUVGLE1BQU1RLFlBQVksR0FBRy9CLDZEQUFPLENBQ3pCZ0MsTUFEa0IsQ0FDWCxVQUFDTCxJQUFELEVBQVU7QUFDaEIsUUFBSWpCLE9BQU8sSUFBSUksZUFBZixFQUFnQztBQUM5QixhQUFPYSxJQUFJLENBQUNNLElBQUwsQ0FBVUMsU0FBVixDQUFvQkMsS0FBcEIsQ0FDTlQsR0FETSxDQUNGLFVBQUNVLFFBQUQ7QUFBQSxlQUFjQSxRQUFRLENBQUNDLFdBQVQsUUFDYnZCLGVBRGEsYUFDYkEsZUFEYSx1QkFDYkEsZUFBZSxDQUFFdUIsV0FBakIsRUFEYSxDQUFkO0FBQUEsT0FERSxFQUUrQkMsUUFGL0IsQ0FFd0MsSUFGeEMsS0FHRlgsSUFBSSxDQUFDWSxLQUFMLENBQVdGLFdBQVgsR0FBeUJDLFFBQXpCLENBQWtDNUIsT0FBbEMsYUFBa0NBLE9BQWxDLHVCQUFrQ0EsT0FBTyxDQUFFMkIsV0FBVCxFQUFsQyxDQUhMLENBRDhCLENBSzlCO0FBQ0Q7O0FBQ0QsUUFBSTNCLE9BQU8sSUFBSSxDQUFDSSxlQUFoQixFQUFpQztBQUMvQixhQUFPYSxJQUFJLENBQUNZLEtBQUwsQ0FBV0YsV0FBWCxHQUF5QkMsUUFBekIsQ0FBa0M1QixPQUFsQyxhQUFrQ0EsT0FBbEMsdUJBQWtDQSxPQUFPLENBQUUyQixXQUFULEVBQWxDLENBQVAsQ0FEK0IsQ0FFL0I7QUFDRDs7QUFDRCxRQUFJLENBQUMzQixPQUFELElBQVlJLGVBQWhCLEVBQWlDO0FBQy9CLGFBQU9hLElBQUksQ0FBQzFCLElBQUwsQ0FDSnlCLEdBREksQ0FDQSxVQUFDVSxRQUFEO0FBQUEsZUFBY0EsUUFBUSxDQUFDQyxXQUFULFFBQ2J2QixlQURhLGFBQ2JBLGVBRGEsdUJBQ2JBLGVBQWUsQ0FBRXVCLFdBQWpCLEVBRGEsQ0FBZDtBQUFBLE9BREEsRUFFaUNDLFFBRmpDLENBRTBDLElBRjFDLENBQVA7QUFHRDs7QUFFRCxXQUFPWCxJQUFQO0FBQ0QsR0FwQmtCLEVBcUJsQmEsSUFyQmtCLENBcUJiLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVUsSUFBSUMsSUFBSixDQUFTRCxDQUFDLENBQUNFLElBQVgsSUFBbUIsSUFBSUQsSUFBSixDQUFTRixDQUFDLENBQUNHLElBQVgsQ0FBN0I7QUFBQSxHQXJCYSxDQUFyQjtBQXVCQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU0sZ0JBQVEsRUFBQyxVQUFmO0FBQTBCLGVBQU8sRUFBRTtBQUFuQyxTQUFnRCxPQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRSxxRUFBQyw2REFBRDtBQUFRLFVBQUksRUFBRXhDLFdBQWQ7QUFBMkIsYUFBTyxFQUFFQyxjQUFwQztBQUFBLDZCQUNFO0FBQVMsaUJBQVMsRUFBRXdDLHlEQUFwQjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsNkRBQUQ7QUFDRSxjQUFJLEVBQUU3Qyw2REFEUjtBQUVFLGtCQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUZaO0FBR0UscUJBQVcsRUFBRVksVUFIZjtBQUlFLHNCQUFZLEVBQUVJLFlBSmhCO0FBS0Usa0JBQVEsRUFBRUssYUFMWjtBQU1FLGtCQUFRLEVBQUVDLGNBTlosQ0FPRTs7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBV0UscUVBQUMsZ0VBQUQ7QUFBVyxlQUFLLEVBQUVTLFlBQVksQ0FBQ2UsS0FBYixDQUFtQmxDLFVBQVUsR0FBRyxFQUFoQyxFQUFxQ0EsVUFBVSxHQUFHLEVBQWQsR0FBb0IsRUFBeEQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRixlQVlFLHFFQUFDLDZEQUFEO0FBQ0UsY0FBSSxFQUFFWiw2REFEUjtBQUVFLGtCQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUZaO0FBR0UscUJBQVcsRUFBRVksVUFIZjtBQUlFLHNCQUFZLEVBQUVJLFlBSmhCO0FBS0Usa0JBQVEsRUFBRUssYUFMWjtBQU1FLGtCQUFRLEVBQUVDO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRixlQW9CRSxxRUFBQywrREFBRDtBQUFVLGVBQUssRUFBRXlCLGtFQUFZQTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQSxrQkFERjtBQWlDRCxDQWhHRDs7R0FBTTdDLFc7O0tBQUFBLFc7QUFrR1NBLDBFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2dhbGxlcnkvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERFVkVMT1BFUiB9IGZyb20gJ3NyYy9zaGFyZWQvY29uc3RhbnRzL3JvbGUnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnc3JjL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBEaXJlY3RvcnkgZnJvbSAnc3JjL2NvbXBvbmVudHMvRGlyZWN0b3J5JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvRmlsdGVyJztcbmltcG9ydCBSZXBvTGlzdCBmcm9tICdzcmMvY29tcG9uZW50cy9SZXBvTGlzdCc7XG5cbmltcG9ydCB7IGdhbGxlcnksIHJlcG9zaXRvcmllcyB9IGZyb20gJ3NyYy9kYXRhL2dhbGxlcnkuanNvbic7XG5cbmltcG9ydCB7XG4gIGdhbGxlcnkgYXMgZ2FsbGVyeVN0eWxlLFxufSBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnO1xuXG5jb25zb2xlLmxvZyhnYWxsZXJ5WzBdLnRlY2gpXG5cbi8vIGNvbnNvbGUubG9nKCdUaGFua3MgZm9yIHZpc2l0aW5nIScpO1xuXG5jb25zdCBHYWxsZXJ5UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRSb2xlLCBzZXRDdXJyZW50Um9sZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q3VycmVudFJvbGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvbGUnLCBjdXJyZW50Um9sZSkgfHwgREVWRUxPUEVSKTtcbiAgfSwgW2N1cnJlbnRSb2xlLCBzZXRDdXJyZW50Um9sZV0pO1xuXG4gIGNvbnN0IFtrZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Byb2plY3RMYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgb25QYWdlU2VsZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0UGFnZU51bWJlcihwYXJzZUludChldmVudC50YXJnZXQudmFsdWUsIDEwKSk7XG4gIH07XG5cbiAgY29uc3QgYXJ0aWNsZVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgIHNldEtleXdvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRQYWdlTnVtYmVyKDApO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdExhbmd1YWdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0TGFuZ3VhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRQYWdlTnVtYmVyKDApO1xuICB9O1xuXG4gY29uc3QgdGVjaEFycmF5ID0gW10uY29uY2F0LmFwcGx5KFtdLCBnYWxsZXJ5Lm1hcCgoZGF0YSkgPT4gZGF0YS50ZWNoKSlcbiAgICAucmVkdWNlKChjYXRlZ29yeUFycmF5LCBjdXJyZW50Q2F0ZWdvcnkpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHtjYXRlZ29yeUFycmF5LCBjdXJyZW50Q2F0ZWdvcnl9KVxuICAgICAgLy8gY29uc3QgbmV3QXJyYXkgPSBjYXRlZ29yeUFycmF5O1xuICAgICAgLy8gbmV3QXJyYXlbY3VycmVudENhdGVnb3J5XSA9IChuZXdBcnJheVtjdXJyZW50Q2F0ZWdvcnldIHx8IDApICsgMTtcbiAgICAgIC8vIC8vIGNvbnNvbGUubG9nKG5ld0FycmF5KTtcbiAgICAgIC8vIHJldHVybiBuZXdBcnJheTtcbiAgICB9KTtcbiAgY29uc29sZS5sb2codGVjaEFycmF5KTtcblxuICAvLyBjb25zdCB0ZWNoTGlzdCA9IE9iamVjdC5rZXlzKHRlY2hBcnJheSlcbiAgLy8gLm1hcCgoa2V5KSA9PiAoeyBvcHRpb25MYWJlbDoga2V5LCBvcHRpb25Db3VudDogdGVjaEFycmF5W2tleV0gfSkpXG4gIC8vIC5zb3J0KChhLCBiKSA9PiAoKGIub3B0aW9uTGFiZWwgPCBhLm9wdGlvbkxhYmVsKSA/IDEgOiAtMSkpO1xuXG4gICAgLy8gY29uc29sZS5sb2coe3RlY2hBcnJheSwgdGVjaExpc3R9KTtcblxuICBjb25zdCBmaWx0ZXJlZExpc3QgPSBnYWxsZXJ5XG4gICAgLmZpbHRlcigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGtleXdvcmQgJiYgcHJvamVjdExhbmd1YWdlKSB7XG4gICAgICAgIHJldHVybiBkYXRhLm5vZGUubGFuZ3VhZ2VzLmVkZ2VzXG4gICAgICAgIC5tYXAoKGxhbmd1YWdlKSA9PiBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgPT09IHByb2plY3RMYW5ndWFnZT8udG9Mb3dlckNhc2UoKSkuaW5jbHVkZXModHJ1ZSlcbiAgICAgICAgICAmJiBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZD8udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIC8vIHx8IGRhdGEuYXV0aG9yLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZD8udG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgICBpZiAoa2V5d29yZCAmJiAhcHJvamVjdExhbmd1YWdlKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZD8udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIC8vIHx8IGRhdGEuYXV0aG9yLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZD8udG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgICBpZiAoIWtleXdvcmQgJiYgcHJvamVjdExhbmd1YWdlKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnRlY2hcbiAgICAgICAgICAubWFwKChsYW5ndWFnZSkgPT4gbGFuZ3VhZ2UudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgPT09IHByb2plY3RMYW5ndWFnZT8udG9Mb3dlckNhc2UoKSkuaW5jbHVkZXModHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pXG4gICAgLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGIuZGF0ZSkgLSBuZXcgRGF0ZShhLmRhdGUpKTtcbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Ti5FLkxpbGx5OiBHYWxsZXJ5PC90aXRsZT5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9eyd0aXRsZSd9IGtleT1cInRpdGxlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1pbmltdW0tc2NhbGU9MS4wXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQgcm9sZT17Y3VycmVudFJvbGV9IHNldFJvbGU9e3NldEN1cnJlbnRSb2xlfT5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtnYWxsZXJ5U3R5bGV9PlxuICAgICAgICAgIDxoMT5HYWxsZXJ5PC9oMT5cbiAgICAgICAgICA8RmlsdGVyXG4gICAgICAgICAgICBkYXRhPXtnYWxsZXJ5fVxuICAgICAgICAgICAgaXRlbVR5cGU9e1snd29yaycsICd3b3JrcyddfVxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e3BhZ2VOdW1iZXJ9XG4gICAgICAgICAgICBvblBhZ2VTZWxlY3Q9e29uUGFnZVNlbGVjdH1cbiAgICAgICAgICAgIG9uU2VhcmNoPXthcnRpY2xlU2VhcmNofVxuICAgICAgICAgICAgb25TZWxlY3Q9e3NlbGVjdExhbmd1YWdlfVxuICAgICAgICAgICAgLy8gY2F0ZWdvcnlMaXN0PXt0ZWNoTGlzdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxEaXJlY3Rvcnkgd29ya3M9e2ZpbHRlcmVkTGlzdC5zbGljZShwYWdlTnVtYmVyICogMTAsIChwYWdlTnVtYmVyICogMTApICsgMTApfSAvPlxuICAgICAgICAgIDxGaWx0ZXJcbiAgICAgICAgICAgIGRhdGE9e2dhbGxlcnl9XG4gICAgICAgICAgICBpdGVtVHlwZT17Wyd3b3JrJywgJ3dvcmtzJ119XG4gICAgICAgICAgICBjdXJyZW50UGFnZT17cGFnZU51bWJlcn1cbiAgICAgICAgICAgIG9uUGFnZVNlbGVjdD17b25QYWdlU2VsZWN0fVxuICAgICAgICAgICAgb25TZWFyY2g9e2FydGljbGVTZWFyY2h9XG4gICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0TGFuZ3VhZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UmVwb0xpc3Qgd29ya3M9e3JlcG9zaXRvcmllc30gLz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnlQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/gallery/index.jsx\n");

/***/ })

})