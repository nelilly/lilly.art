webpackHotUpdate_N_E("pages/gallery",{

/***/ "./src/pages/gallery/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/gallery/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/constants/role */ \"./src/shared/constants/role.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Layout */ \"./src/components/Layout/index.jsx\");\n/* harmony import */ var src_components_Directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/Directory */ \"./src/components/Directory/index.jsx\");\n/* harmony import */ var src_components_Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Filter */ \"./src/components/Filter/index.jsx\");\n/* harmony import */ var src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/RepoList */ \"./src/components/RepoList/index.jsx\");\n/* harmony import */ var src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/data/gallery.json */ \"./src/data/gallery.json\");\nvar src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/data/gallery.json */ \"./src/data/gallery.json\", 1);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.module.css */ \"./src/pages/gallery/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/lillydev/lilly.art/src/pages/gallery/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconsole.log(src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"][0].tech); // console.log('Thanks for visiting!');\n\nvar GalleryPage = function GalleryPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      currentRole = _useState[0],\n      setCurrentRole = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setCurrentRole(localStorage.getItem('role', currentRole) || src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__[\"DEVELOPER\"]);\n  }, [currentRole, setCurrentRole]);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      keyword = _useState2[0],\n      setKeyword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      pageNumber = _useState3[0],\n      setPageNumber = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      projectLanguage = _useState4[0],\n      setLanguage = _useState4[1];\n\n  var onPageSelect = function onPageSelect(event) {\n    setPageNumber(parseInt(event.target.value, 10));\n  };\n\n  var articleSearch = function articleSearch(event) {\n    setKeyword(event.target.value);\n    setPageNumber(0);\n  };\n\n  var selectLanguage = function selectLanguage(event) {\n    setLanguage(event.target.value);\n    setPageNumber(0);\n  };\n\n  var techArray = [].concat.apply([], src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].map(function (data) {\n    return data.tech;\n  })); // .reduce((categoryArray, currentCategory, index) => {\n  //   const newArray = categoryArray;\n  //   newArray[index] = (newArray[currentCategory] || 0) + 1;\n  //   return newArray;\n  // });\n\n  console.log(techArray);\n  var techCount = {};\n  var techList = techArray.map(function (value) {\n    return {\n      optionLabel: value,\n      optionCount: function optionCount() {\n        return techCount[value] = techCount[value] + 1;\n      }\n    };\n  }).sort(function (a, b) {\n    return b.optionLabel < a.optionLabel ? 1 : -1;\n  });\n  console.log(techCount); // console.log({techArray, techList});\n\n  var filteredList = src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].filter(function (data) {\n    if (keyword && projectLanguage) {\n      return data.node.languages.edges.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true) && data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (keyword && !projectLanguage) {\n      return data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (!keyword && projectLanguage) {\n      return data.tech.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true);\n    }\n\n    return data;\n  }).sort(function (a, b) {\n    return new Date(b.date) - new Date(a.date);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"N.E.Lilly: Gallery\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: 'title'\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1.0, minimum-scale=1.0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      role: currentRole,\n      setRole: setCurrentRole,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Gallery\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          data: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"],\n          itemType: ['work', 'works'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage // categoryList={techList}\n\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Directory__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          works: filteredList.slice(pageNumber * 10, pageNumber * 10 + 10)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          data: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"],\n          itemType: ['work', 'works'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage,\n          categoryList: techList\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          works: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"repositories\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(GalleryPage, \"Fc6+9UFYZWs9vrdVrIWcnaFcFY0=\");\n\n_c = GalleryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"GalleryPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dhbGxlcnkvaW5kZXguanN4PzViYjMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImdhbGxlcnkiLCJ0ZWNoIiwiR2FsbGVyeVBhZ2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRSb2xlIiwic2V0Q3VycmVudFJvbGUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiREVWRUxPUEVSIiwia2V5d29yZCIsInNldEtleXdvcmQiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInByb2plY3RMYW5ndWFnZSIsInNldExhbmd1YWdlIiwib25QYWdlU2VsZWN0IiwiZXZlbnQiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwiYXJ0aWNsZVNlYXJjaCIsInNlbGVjdExhbmd1YWdlIiwidGVjaEFycmF5IiwiY29uY2F0IiwiYXBwbHkiLCJtYXAiLCJkYXRhIiwidGVjaENvdW50IiwidGVjaExpc3QiLCJvcHRpb25MYWJlbCIsIm9wdGlvbkNvdW50Iiwic29ydCIsImEiLCJiIiwiZmlsdGVyZWRMaXN0IiwiZmlsdGVyIiwibm9kZSIsImxhbmd1YWdlcyIsImVkZ2VzIiwibGFuZ3VhZ2UiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwidGl0bGUiLCJEYXRlIiwiZGF0ZSIsImdhbGxlcnlTdHlsZSIsInNsaWNlIiwicmVwb3NpdG9yaWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUlBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsNkRBQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0MsSUFBdkIsRSxDQUVBOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxFQUFELENBRHRCO0FBQUEsTUFDakJDLFdBRGlCO0FBQUEsTUFDSkMsY0FESTs7QUFFeEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxrQkFBYyxDQUFDRSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJKLFdBQTdCLEtBQTZDSyxtRUFBOUMsQ0FBZDtBQUNELEdBRlEsRUFFTixDQUFDTCxXQUFELEVBQWNDLGNBQWQsQ0FGTSxDQUFUOztBQUZ3QixtQkFNTUYsc0RBQVEsQ0FBQyxJQUFELENBTmQ7QUFBQSxNQU1qQk8sT0FOaUI7QUFBQSxNQU1SQyxVQU5ROztBQUFBLG1CQU9ZUixzREFBUSxDQUFDLENBQUQsQ0FQcEI7QUFBQSxNQU9qQlMsVUFQaUI7QUFBQSxNQU9MQyxhQVBLOztBQUFBLG1CQVFlVixzREFBUSxDQUFDLElBQUQsQ0FSdkI7QUFBQSxNQVFqQlcsZUFSaUI7QUFBQSxNQVFBQyxXQVJBOztBQVV4QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDOUJKLGlCQUFhLENBQUNLLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQWQsRUFBcUIsRUFBckIsQ0FBVCxDQUFiO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNKLEtBQUQsRUFBVztBQUMvQk4sY0FBVSxDQUFDTSxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBZCxDQUFWO0FBQ0FQLGlCQUFhLENBQUMsQ0FBRCxDQUFiO0FBQ0QsR0FIRDs7QUFLQSxNQUFNUyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNMLEtBQUQsRUFBVztBQUNoQ0YsZUFBVyxDQUFDRSxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBZCxDQUFYO0FBQ0FQLGlCQUFhLENBQUMsQ0FBRCxDQUFiO0FBQ0QsR0FIRDs7QUFLRCxNQUFNVSxTQUFTLEdBQUcsR0FBR0MsTUFBSCxDQUFVQyxLQUFWLENBQWdCLEVBQWhCLEVBQW9CekIsNkRBQU8sQ0FBQzBCLEdBQVIsQ0FBWSxVQUFDQyxJQUFEO0FBQUEsV0FBVUEsSUFBSSxDQUFDMUIsSUFBZjtBQUFBLEdBQVosQ0FBcEIsQ0FBbEIsQ0F4QnlCLENBeUJ0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNGSCxTQUFPLENBQUNDLEdBQVIsQ0FBWXdCLFNBQVo7QUFFQSxNQUFJSyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdOLFNBQVMsQ0FDekJHLEdBRGdCLENBQ1osVUFBQ04sS0FBRDtBQUFBLFdBQVk7QUFBRVUsaUJBQVcsRUFBRVYsS0FBZjtBQUFzQlcsaUJBQVcsRUFBRTtBQUFBLGVBQU1ILFNBQVMsQ0FBQ1IsS0FBRCxDQUFULEdBQW1CUSxTQUFTLENBQUNSLEtBQUQsQ0FBVCxHQUFpQixDQUExQztBQUFBO0FBQW5DLEtBQVo7QUFBQSxHQURZLEVBRWhCWSxJQUZnQixDQUVYLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVlBLENBQUMsQ0FBQ0osV0FBRixHQUFnQkcsQ0FBQyxDQUFDSCxXQUFuQixHQUFrQyxDQUFsQyxHQUFzQyxDQUFDLENBQWxEO0FBQUEsR0FGVyxDQUFqQjtBQUdBaEMsU0FBTyxDQUFDQyxHQUFSLENBQVk2QixTQUFaLEVBcEN3QixDQXNDdEI7O0FBRUYsTUFBTU8sWUFBWSxHQUFHbkMsNkRBQU8sQ0FDekJvQyxNQURrQixDQUNYLFVBQUNULElBQUQsRUFBVTtBQUNoQixRQUFJakIsT0FBTyxJQUFJSSxlQUFmLEVBQWdDO0FBQzlCLGFBQU9hLElBQUksQ0FBQ1UsSUFBTCxDQUFVQyxTQUFWLENBQW9CQyxLQUFwQixDQUNOYixHQURNLENBQ0YsVUFBQ2MsUUFBRDtBQUFBLGVBQWNBLFFBQVEsQ0FBQ0MsV0FBVCxRQUNiM0IsZUFEYSxhQUNiQSxlQURhLHVCQUNiQSxlQUFlLENBQUUyQixXQUFqQixFQURhLENBQWQ7QUFBQSxPQURFLEVBRStCQyxRQUYvQixDQUV3QyxJQUZ4QyxLQUdGZixJQUFJLENBQUNnQixLQUFMLENBQVdGLFdBQVgsR0FBeUJDLFFBQXpCLENBQWtDaEMsT0FBbEMsYUFBa0NBLE9BQWxDLHVCQUFrQ0EsT0FBTyxDQUFFK0IsV0FBVCxFQUFsQyxDQUhMLENBRDhCLENBSzlCO0FBQ0Q7O0FBQ0QsUUFBSS9CLE9BQU8sSUFBSSxDQUFDSSxlQUFoQixFQUFpQztBQUMvQixhQUFPYSxJQUFJLENBQUNnQixLQUFMLENBQVdGLFdBQVgsR0FBeUJDLFFBQXpCLENBQWtDaEMsT0FBbEMsYUFBa0NBLE9BQWxDLHVCQUFrQ0EsT0FBTyxDQUFFK0IsV0FBVCxFQUFsQyxDQUFQLENBRCtCLENBRS9CO0FBQ0Q7O0FBQ0QsUUFBSSxDQUFDL0IsT0FBRCxJQUFZSSxlQUFoQixFQUFpQztBQUMvQixhQUFPYSxJQUFJLENBQUMxQixJQUFMLENBQ0p5QixHQURJLENBQ0EsVUFBQ2MsUUFBRDtBQUFBLGVBQWNBLFFBQVEsQ0FBQ0MsV0FBVCxRQUNiM0IsZUFEYSxhQUNiQSxlQURhLHVCQUNiQSxlQUFlLENBQUUyQixXQUFqQixFQURhLENBQWQ7QUFBQSxPQURBLEVBRWlDQyxRQUZqQyxDQUUwQyxJQUYxQyxDQUFQO0FBR0Q7O0FBRUQsV0FBT2YsSUFBUDtBQUNELEdBcEJrQixFQXFCbEJLLElBckJrQixDQXFCYixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVLElBQUlVLElBQUosQ0FBU1YsQ0FBQyxDQUFDVyxJQUFYLElBQW1CLElBQUlELElBQUosQ0FBU1gsQ0FBQyxDQUFDWSxJQUFYLENBQTdCO0FBQUEsR0FyQmEsQ0FBckI7QUF1QkEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFNLGdCQUFRLEVBQUMsVUFBZjtBQUEwQixlQUFPLEVBQUU7QUFBbkMsU0FBZ0QsT0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBTUUscUVBQUMsNkRBQUQ7QUFBUSxVQUFJLEVBQUV6QyxXQUFkO0FBQTJCLGFBQU8sRUFBRUMsY0FBcEM7QUFBQSw2QkFDRTtBQUFTLGlCQUFTLEVBQUV5Qyx5REFBcEI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLDZEQUFEO0FBQ0UsY0FBSSxFQUFFOUMsNkRBRFI7QUFFRSxrQkFBUSxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FGWjtBQUdFLHFCQUFXLEVBQUVZLFVBSGY7QUFJRSxzQkFBWSxFQUFFSSxZQUpoQjtBQUtFLGtCQUFRLEVBQUVLLGFBTFo7QUFNRSxrQkFBUSxFQUFFQyxjQU5aLENBT0U7O0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQVdFLHFFQUFDLGdFQUFEO0FBQVcsZUFBSyxFQUFFYSxZQUFZLENBQUNZLEtBQWIsQ0FBbUJuQyxVQUFVLEdBQUcsRUFBaEMsRUFBcUNBLFVBQVUsR0FBRyxFQUFkLEdBQW9CLEVBQXhEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsZUFZRSxxRUFBQyw2REFBRDtBQUNFLGNBQUksRUFBRVosNkRBRFI7QUFFRSxrQkFBUSxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FGWjtBQUdFLHFCQUFXLEVBQUVZLFVBSGY7QUFJRSxzQkFBWSxFQUFFSSxZQUpoQjtBQUtFLGtCQUFRLEVBQUVLLGFBTFo7QUFNRSxrQkFBUSxFQUFFQyxjQU5aO0FBT0Usc0JBQVksRUFBRU87QUFQaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRixlQXFCRSxxRUFBQywrREFBRDtBQUFVLGVBQUssRUFBRW1CLGtFQUFZQTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQSxrQkFERjtBQWtDRCxDQWpHRDs7R0FBTTlDLFc7O0tBQUFBLFc7QUFtR1NBLDBFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2dhbGxlcnkvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERFVkVMT1BFUiB9IGZyb20gJ3NyYy9zaGFyZWQvY29uc3RhbnRzL3JvbGUnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnc3JjL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBEaXJlY3RvcnkgZnJvbSAnc3JjL2NvbXBvbmVudHMvRGlyZWN0b3J5JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvRmlsdGVyJztcbmltcG9ydCBSZXBvTGlzdCBmcm9tICdzcmMvY29tcG9uZW50cy9SZXBvTGlzdCc7XG5cbmltcG9ydCB7IGdhbGxlcnksIHJlcG9zaXRvcmllcyB9IGZyb20gJ3NyYy9kYXRhL2dhbGxlcnkuanNvbic7XG5cbmltcG9ydCB7XG4gIGdhbGxlcnkgYXMgZ2FsbGVyeVN0eWxlLFxufSBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnO1xuXG5jb25zb2xlLmxvZyhnYWxsZXJ5WzBdLnRlY2gpXG5cbi8vIGNvbnNvbGUubG9nKCdUaGFua3MgZm9yIHZpc2l0aW5nIScpO1xuXG5jb25zdCBHYWxsZXJ5UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRSb2xlLCBzZXRDdXJyZW50Um9sZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q3VycmVudFJvbGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvbGUnLCBjdXJyZW50Um9sZSkgfHwgREVWRUxPUEVSKTtcbiAgfSwgW2N1cnJlbnRSb2xlLCBzZXRDdXJyZW50Um9sZV0pO1xuXG4gIGNvbnN0IFtrZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Byb2plY3RMYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgb25QYWdlU2VsZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0UGFnZU51bWJlcihwYXJzZUludChldmVudC50YXJnZXQudmFsdWUsIDEwKSk7XG4gIH07XG5cbiAgY29uc3QgYXJ0aWNsZVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgIHNldEtleXdvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRQYWdlTnVtYmVyKDApO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdExhbmd1YWdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0TGFuZ3VhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRQYWdlTnVtYmVyKDApO1xuICB9O1xuXG4gY29uc3QgdGVjaEFycmF5ID0gW10uY29uY2F0LmFwcGx5KFtdLCBnYWxsZXJ5Lm1hcCgoZGF0YSkgPT4gZGF0YS50ZWNoKSlcbiAgICAvLyAucmVkdWNlKChjYXRlZ29yeUFycmF5LCBjdXJyZW50Q2F0ZWdvcnksIGluZGV4KSA9PiB7XG4gICAgLy8gICBjb25zdCBuZXdBcnJheSA9IGNhdGVnb3J5QXJyYXk7XG4gICAgLy8gICBuZXdBcnJheVtpbmRleF0gPSAobmV3QXJyYXlbY3VycmVudENhdGVnb3J5XSB8fCAwKSArIDE7XG4gICAgLy8gICByZXR1cm4gbmV3QXJyYXk7XG4gICAgLy8gfSk7XG4gIGNvbnNvbGUubG9nKHRlY2hBcnJheSk7XG5cbiAgbGV0IHRlY2hDb3VudCA9IHt9O1xuICBjb25zdCB0ZWNoTGlzdCA9IHRlY2hBcnJheVxuICAubWFwKCh2YWx1ZSkgPT4gKHsgb3B0aW9uTGFiZWw6IHZhbHVlLCBvcHRpb25Db3VudDogKCkgPT4gdGVjaENvdW50W3ZhbHVlXSA9IHRlY2hDb3VudFt2YWx1ZV0rMSB9KSlcbiAgLnNvcnQoKGEsIGIpID0+ICgoYi5vcHRpb25MYWJlbCA8IGEub3B0aW9uTGFiZWwpID8gMSA6IC0xKSk7XG4gIGNvbnNvbGUubG9nKHRlY2hDb3VudCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh7dGVjaEFycmF5LCB0ZWNoTGlzdH0pO1xuXG4gIGNvbnN0IGZpbHRlcmVkTGlzdCA9IGdhbGxlcnlcbiAgICAuZmlsdGVyKChkYXRhKSA9PiB7XG4gICAgICBpZiAoa2V5d29yZCAmJiBwcm9qZWN0TGFuZ3VhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEubm9kZS5sYW5ndWFnZXMuZWRnZXNcbiAgICAgICAgLm1hcCgobGFuZ3VhZ2UpID0+IGxhbmd1YWdlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICA9PT0gcHJvamVjdExhbmd1YWdlPy50b0xvd2VyQ2FzZSgpKS5pbmNsdWRlcyh0cnVlKVxuICAgICAgICAgICYmIGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgLy8gfHwgZGF0YS5hdXRob3IudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXl3b3JkICYmICFwcm9qZWN0TGFuZ3VhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgLy8gfHwgZGF0YS5hdXRob3IudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmICgha2V5d29yZCAmJiBwcm9qZWN0TGFuZ3VhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEudGVjaFxuICAgICAgICAgIC5tYXAoKGxhbmd1YWdlKSA9PiBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICA9PT0gcHJvamVjdExhbmd1YWdlPy50b0xvd2VyQ2FzZSgpKS5pbmNsdWRlcyh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSlcbiAgICAuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSkpO1xuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5OLkUuTGlsbHk6IEdhbGxlcnk8L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17J3RpdGxlJ30ga2V5PVwidGl0bGVcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWluaW11bS1zY2FsZT0xLjBcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExheW91dCByb2xlPXtjdXJyZW50Um9sZX0gc2V0Um9sZT17c2V0Q3VycmVudFJvbGV9PlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2dhbGxlcnlTdHlsZX0+XG4gICAgICAgICAgPGgxPkdhbGxlcnk8L2gxPlxuICAgICAgICAgIDxGaWx0ZXJcbiAgICAgICAgICAgIGRhdGE9e2dhbGxlcnl9XG4gICAgICAgICAgICBpdGVtVHlwZT17Wyd3b3JrJywgJ3dvcmtzJ119XG4gICAgICAgICAgICBjdXJyZW50UGFnZT17cGFnZU51bWJlcn1cbiAgICAgICAgICAgIG9uUGFnZVNlbGVjdD17b25QYWdlU2VsZWN0fVxuICAgICAgICAgICAgb25TZWFyY2g9e2FydGljbGVTZWFyY2h9XG4gICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0TGFuZ3VhZ2V9XG4gICAgICAgICAgICAvLyBjYXRlZ29yeUxpc3Q9e3RlY2hMaXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPERpcmVjdG9yeSB3b3Jrcz17ZmlsdGVyZWRMaXN0LnNsaWNlKHBhZ2VOdW1iZXIgKiAxMCwgKHBhZ2VOdW1iZXIgKiAxMCkgKyAxMCl9IC8+XG4gICAgICAgICAgPEZpbHRlclxuICAgICAgICAgICAgZGF0YT17Z2FsbGVyeX1cbiAgICAgICAgICAgIGl0ZW1UeXBlPXtbJ3dvcmsnLCAnd29ya3MnXX1cbiAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtwYWdlTnVtYmVyfVxuICAgICAgICAgICAgb25QYWdlU2VsZWN0PXtvblBhZ2VTZWxlY3R9XG4gICAgICAgICAgICBvblNlYXJjaD17YXJ0aWNsZVNlYXJjaH1cbiAgICAgICAgICAgIG9uU2VsZWN0PXtzZWxlY3RMYW5ndWFnZX1cbiAgICAgICAgICAgIGNhdGVnb3J5TGlzdD17dGVjaExpc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UmVwb0xpc3Qgd29ya3M9e3JlcG9zaXRvcmllc30gLz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnlQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/gallery/index.jsx\n");

/***/ })

})