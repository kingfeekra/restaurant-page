/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(630), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(737), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n@font-face {\n    font-family: customFont;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n    font-family: customFont;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: fixed;\n}\n\n#container {\n    display:flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n.header {\n    height: 75px;\n    width: auto;\n    background-color: azure;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.navList {\n    display: flex;\n    font-size: 1.3rem;\n}\n\n.navList > li {\n    margin: 20px;\n    cursor: pointer;\n}\n\nmain {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n}\n\n.contentDiv {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 1000px;\n    height: auto;\n    background-color: rgb(0, 0, 0, 0.7);\n    color: white;\n    line-height: 1.2;\n}\n\n.contentDiv > * {\n    margin-bottom: 20px;\n    font-size: 1.2rem;\n}\n\n.contentDiv > h1 {\n    margin-top: 20px;\n    font-size: 2.5rem;\n    border-bottom: 3px solid white;\n}\n\nh2 {\n    font-style: italic;\n    font-size: 1.5rem;\n}\n\n.menuItem, .contactUsItem {\n    text-align: center;\n}\n\n.introDiv {\n    width: 70%;\n}\n\n.hoursDiv {\n    text-align:center;\n}\n\n.infoDiv {\n    text-align: center;\n}\n\n.poop {\n    color: red;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 667:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 81:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 379:
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 737:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55814bcc09e26d757fb4.jpg";

/***/ }),

/***/ 630:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73578b7f4da5af44c4fa.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(426);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);




       /* harmony default export */ const src_style = (style/* default */.Z && style/* default.locals */.Z.locals ? style/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/pizzaMenu.js
const menu = (() => {

    const createMenuDivs = function() {
        const contentDiv = document.querySelector(".contentDiv");
        contentDiv.textContent = "";

        const heading = document.createElement("h1");
        heading.textContent = "Menu";
        contentDiv.appendChild(heading);
        
        for(let i = 0; i < 6; i++) {
            const menuDiv = document.createElement("div");
            menuDiv.classList.add("menuItem");
            contentDiv.appendChild(menuDiv);
        }
    }
    const createMenuItems = function() {
        const menuItemSelect = document.querySelectorAll(".menuItem");
            for(let i = 0; i < 6; i++) {
                const pizzaName = document.createElement("h2");
                pizzaName.classList.add("pizzaName");
                menuItemSelect[i].appendChild(pizzaName);

                const ingredients = document.createElement("p");
                ingredients.classList.add("ingredients");
                menuItemSelect[i].appendChild(ingredients);

                const price = document.createElement("p");
                price.classList.add("price");
                menuItemSelect[i].appendChild(price);
            }
    }

    const setPizzaNames = function() {
        const pizzaList = document.querySelectorAll(".pizzaName");
        pizzaList[0].textContent = "Margherita";
        pizzaList[1].textContent = "Pepperoni";
        pizzaList[2].textContent = "Hawaiian";
        pizzaList[3].textContent = "Meat Feast";
        pizzaList[4].textContent = "Doner Pizza";
        pizzaList[5].textContent = "Vegetarian Delight";
    }
    const setIngredients = function() {
        const ingredientsList = document.querySelectorAll(".ingredients");
        ingredientsList[0].textContent = "Cheese & tomato.";
        ingredientsList[1].textContent = "Pepperoni, green peppers & Italian herbs.";
        ingredientsList[2].textContent = "Ham & pineapple.";
        ingredientsList[3].textContent = "Pepperoni, salami, ham & donner meat.";
        ingredientsList[4].textContent = "Donner meat & onions.";
        ingredientsList[5].textContent = "Mushroom, peppers, onion, sweetcorn & olives.";
    }
    const setPrice = function() {
        const priceList = document.querySelectorAll(".price");
        priceList[0].textContent = "$7";
        priceList[1].textContent = "$9";
        priceList[2].textContent = "$9";
        priceList[3].textContent = "$10";
        priceList[4].textContent = "$10";
        priceList[5].textContent = "$10";
    }
    return {
        createMenuDivs: function() {
            createMenuDivs();
        },
        createMenuItems: function() {
            createMenuItems();
        },
        setPizzaNames: function() {
            setPizzaNames();
        },
        setIngredients: function() {
            setIngredients();
        },
        setPrice: function() {
            setPrice();
        }
    }
})()

function menuLoad() {
    menu.createMenuDivs();
    menu.createMenuItems();
    menu.setPizzaNames();
    menu.setIngredients();
    menu.setPrice();
}


;// CONCATENATED MODULE: ./src/contact-us.js
const contact = (() => {

    const createDivs = function() {
        const contentDiv = document.querySelector(".contentDiv");
        contentDiv.textContent = "";

        const heading = document.createElement("h1");
        heading.textContent = "Contact Us";
        contentDiv.appendChild(heading);

        for(let i = 0; i < 3; i++) {
            const div = document.createElement("div");
            div.classList.add("contactUsItem");
            contentDiv.appendChild(div);
        }
    }
    const createItems = function() {
        const itemSelect = document.querySelectorAll(".contactUsItem");
            for(let i = 0; i < 3; i++) {
                const contactType = document.createElement("h2");
                itemSelect[i].appendChild(contactType);

                const contactDescription = document.createElement("p");
                itemSelect[i].appendChild(contactDescription);
            }
    }

    const setContact = function() {
        const contactList = document.querySelectorAll(".contactUsItem > h2");
        contactList[0].textContent = "Phone Number";
        contactList[1].textContent = "Email";
        contactList[2].textContent = "Location";
    }
    const setDescription = function() {
        const descriptionList = document.querySelectorAll(".contactUsItem > p");
        descriptionList[0].textContent = "0861234567";
        descriptionList[1].textContent = "info@feekraspizzaexpress.com";
        descriptionList[2].textContent = "123 Pizza Street, Galway, Ireland";
    }

    return {
        createDivs: function() {
            createDivs();
        },
        createItems: function() {
            createItems();
        },
        setContact: function() {
            setContact();
        },
        setDescription: function() {
            setDescription();
        },
    }
})()

function contactLoad() {
    contact.createDivs();
    contact.createItems();
    contact.setContact();
    contact.setDescription();
}


;// CONCATENATED MODULE: ./src/pageContent.js



const container = document.querySelector("#container");

const page = (() => {
    
    const clearPage = function() {
        if(container.textContent !== "") {
            container.textContent = "";
        }
    }

    const createHeader = function() {
        if(document.querySelector(".contentDiv")) {
            const contentDiv = document.querySelector(".contentDiv");
            contentDiv.textContent = "";
        }
        
        const header = document.createElement("div");
        header.classList.add("header");
        container.appendChild(header);
    }
    const createNavMenu = function() {
        const headerSelect = document.querySelector(".header");
        const nav = document.createElement("nav");
        nav.classList.add("navMenu");
        headerSelect.appendChild(nav);

        const navSelect = document.querySelector(".navMenu");
        const navList = document.createElement("ul");
        navList.classList.add("navList");
        navSelect.appendChild(navList);

        const navListSelect = document.querySelector(".navList");
        for(let i = 0; i < 3; i++) {
            const navItem = document.createElement("li");
            navListSelect.appendChild(navItem);
            if(i == 2) {
                const navItemSelect = document.querySelectorAll(".navList > li");
                navItemSelect[0].textContent = "Home";
                navItemSelect[1].textContent = "Menu";
                navItemSelect[2].textContent = "Contact Us";

                navItemSelect[0].onclick = function() {
                    pageLoad();
                };
                navItemSelect[1].onclick = function() {
                    menuLoad();
                };
                navItemSelect[2].onclick = function() {
                    contactLoad();
                };
                
            }
        }
    }
    const createContentSection = function() {
        const main = document.createElement("main"); 
        container.appendChild(main);

        const mainSelect = document.querySelector("main");
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("contentDiv");

        mainSelect.appendChild(contentDiv);

        const contentDivSelect = document.querySelector(".contentDiv");
        const restaurantTitle = document.createElement("h1");
        restaurantTitle.textContent = "Feekra's Pizza Express";
        restaurantTitle.classList.add("restaurantTitle");
        contentDivSelect.appendChild(restaurantTitle);
    }

    const createIntroSection = function() {
        const introDiv = document.createElement("div");
        introDiv.classList.add("introDiv");
        const contentDivSelect = document.querySelector(".contentDiv");
        contentDivSelect.appendChild(introDiv);

        const introDivSelect = document.querySelector(".introDiv");
        const introPara = document.createElement("p");
        introPara.textContent = "Feekra's Pizza Express has the best \
        pizza in the universe. Truly tremendous pizza, the cheese is \
        so succulent and glorious, the tomato sauce sublime, and every \
        topping tastes simply incredible. A marvellous pizza establishment.";
        introPara.classList.add("introPara");
        introDivSelect.appendChild(introPara);
    }
    const createOpeningHours = function() {
        const hoursDiv = document.createElement("div");
        hoursDiv.classList.add("hoursDiv");
        const contentDivSelect = document.querySelector(".contentDiv");
        contentDivSelect.appendChild(hoursDiv);

        const hoursDivSelect = document.querySelector(".hoursDiv");
        const hoursHeading = document.createElement("h2");
        hoursHeading.textContent = "Opening Hours";
        hoursDivSelect.appendChild(hoursHeading);

        const hoursList = document.createElement("ul");
        for(let i = 0; i < 7; i++) {
            const day = document.createElement("li");
            hoursList.appendChild(day);
        }
        hoursDivSelect.appendChild(hoursList);
        const listItems = document.querySelectorAll(".hoursDiv > ul > li");
        listItems[0].textContent = "Monday: 10am - 9pm";
        listItems[1].textContent = "Tuesday: 10am - 9pm";
        listItems[2].textContent = "Wednesday: 10am - 9pm";
        listItems[3].textContent = "Thursday: 10am - 9pm";
        listItems[4].textContent = "Friday: 10am - 11pm";
        listItems[5].textContent = "Saturday: 10am - 11pm";
        listItems[6].textContent = "Sunday: 10am - 10pm";
        }
    const createContactSection = function() {
        const infoDiv = document.createElement("div");
        infoDiv.classList.add("infoDiv");
        const contentDivSelect = document.querySelector(".contentDiv");
        contentDivSelect.appendChild(infoDiv);

        const infoDivSelect = document.querySelector(".infoDiv");
        const infoHeading = document.createElement("h2");
        infoHeading.textContent = "Contact Info";
        infoDivSelect.appendChild(infoHeading);

        for(let i = 0; i < 3; i++) {
            const div = document.createElement("div");
            infoDivSelect.appendChild(div);
            const heading = document.createElement("h3");
            if(i == 2) {
                const divSelect = document.querySelectorAll(".infoDiv > div");
                for (let i = 0; i < 3; i++) {
                    const heading = document.createElement("h3");
                    divSelect[i].appendChild(heading);
                }
                const headingSelect = document.querySelectorAll("h3");
                headingSelect[0].textContent = "Location";
                headingSelect[1].textContent = "Phone Number";
                headingSelect[2].textContent = "Email Address";

                const address = document.createElement("address");
                address.textContent = "123 Pizza Street, Galway, Ireland";
                divSelect[0].appendChild(address);

                const phoneNumber = document.createElement("p");
                phoneNumber.textContent = "0861234567";
                divSelect[1].appendChild(phoneNumber);

                const email = document.createElement("p");
                email.textContent = "info@feekraspizzaexpress.com";
                divSelect[2].appendChild(email);
            }
            
        }
    }
    return {
        clearPage : function() {
            clearPage();
        },
        createHeader: function() {
            createHeader();
        },
        createNavMenu: function() {
            createNavMenu();
        },
        createContentSection: function() {
            createContentSection();
        },
        createIntroSection: function() {
            createIntroSection();
        },
        createOpeningHours: function() {
            createOpeningHours();
        },
        createContactSection: function() {
            createContactSection();
        }
    }
})()

function pageLoad() {
    page.clearPage();
    page.createHeader();
    page.createNavMenu();
    page.createContentSection();
    page.createIntroSection();
    page.createOpeningHours();
    page.createContactSection();
}


;// CONCATENATED MODULE: ./src/index.js



pageLoad();



})();

/******/ })()
;