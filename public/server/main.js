require("source-map-support").install();
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
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/html");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/components/renderer");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/helpers/load-tag");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/helpers/dynamic-tag");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/core-tags/components/init-components-tag");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.46 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_classValue = __webpack_require__(12),
    marko_componentType = "/marko-webpack$1.0.0/src/components/Layout/index.marko",
    marko_renderer = __webpack_require__(1),
    module_logo = __webpack_require__(33),
    logo = module_logo.default || module_logo,
    module_favicon = __webpack_require__(34),
    favicon = module_favicon.default || module_favicon,
    marko_attr = __webpack_require__(13),
    marko_dynamicTag = __webpack_require__(3),
    marko_loadTag = __webpack_require__(2),
    component_globals_tag = marko_loadTag(__webpack_require__(35)),
    marko_classAttr = __webpack_require__(14),
    init_components_tag = marko_loadTag(__webpack_require__(4)),
    await_reorderer_tag = marko_loadTag(__webpack_require__(36));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width\"><link rel=\"icon\"" +
    marko_attr("href", favicon) +
    "><title>");

  if (input.title) {
    marko_dynamicTag(out, input.title, null, null, null, null, __component, "6");

    out.w(" | Gavin McFarland");
  } else {
    out.w("Gavin McFarland");
  }

  out.w("</title>");

  marko_dynamicTag(out, input.styles, null, null, null, null, __component, "7");

  out.w("<link href=\"https://fonts.googleapis.com/css?family=Fira+Code|Fira+Mono|Fira+Sans&amp;display=swap\" rel=\"stylesheet\"><link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/default.min.css\"><script async defer data-domain=\"gavinmcfarland.co.uk\" src=\"https://plausible.io/js/plausible.js\"></script>");

  out.___renderAssets && out.___renderAssets()

  out.w("</head><body" +
    marko_classAttr(input.class) +
    ">");

  component_globals_tag({}, out);

  out.w("<header><a href=\"/\"><img" +
    marko_attr("src", logo) +
    "></a></header><main><div" +
    marko_classAttr(marko_classValue([
    "wrapper",
    input.body.class ? input.body.class : "max-w-6xl"
  ])) +
    ">");

  marko_dynamicTag(out, input.body, null, null, null, null, __component, "16");

  out.w("</div></main><footer layout=\"flex\"><p>Limitless Loop &copy; 2019</p><nav width=\"shrink\"><a href=\"https://twitter.com/gavinmcfarland\">Twitter</a><a href=\"https://dribbble.com/limitlessloop\">Dribbble</a><a href=\"https://www.figma.com/@limitlessloop\">Figma</a><a href=\"https://github.com/limitlessloop\">Github</a></nav>");

  marko_dynamicTag(out, input.footer, null, null, null, null, __component, "24");

  out.w("</footer>");

  marko_dynamicTag(out, input.scripts, null, null, null, null, __component, "25");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "26");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    deps: [
      "./style.css"
    ],
    id: "/marko-webpack$1.0.0/src/components/Layout/index.marko",
    tags: [
      "marko/dist/core-tags/components/component-globals-tag",
      "marko/dist/core-tags/components/init-components-tag",
      "marko/dist/core-tags/core/await/reorderer-renderer"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  getBundleName: function(){return "Client"},
  entries: {"404_78An":{"Client":{"css":["404_78An.253abdc2.css"],"js":["404_78An.a8418dfd.js"],"map":["404_78An.a8418dfd.js.map"]}},"about_kzxx":{"Client":{"css":["about_kzxx.79a71901.css"],"js":["about_kzxx.2f4dd259.js"],"map":["about_kzxx.2f4dd259.js.map"]}},"cv_tq48":{"Client":{"css":["cv_tq48.91fd9a3c.css"],"js":["cv_tq48.a4fb997d.js"],"map":["cv_tq48.a4fb997d.js.map"]}},"post_ffL2":{"Client":{"css":["post_ffL2.253abdc2.css"],"js":["post_ffL2.d2359392.js"],"map":["post_ffL2.d2359392.js.map"]}},"project_Qgdo":{"Client":{"css":["project_Qgdo.8737b697.css"],"js":["project_Qgdo.fd59905a.js"],"map":["project_Qgdo.fd59905a.js.map"]}},"projects_3eZ0":{"Client":{"css":["projects_3eZ0.b472457f.css"],"js":["projects_3eZ0.82ef4eee.js"],"map":["projects_3eZ0.82ef4eee.js.map"]}},"templates_IwU3":{"Client":{"css":["templates_IwU3.470acecb.css"],"js":["vendors~templates_IwU3.476f2e24.js","templates_IwU3.b9804db9.js"],"map":["vendors~templates_IwU3.476f2e24.js.map","templates_IwU3.b9804db9.js.map"]}}}
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var MarkdownIt = __webpack_require__(38)

var md = new MarkdownIt({ html: true })
md.use(__webpack_require__(39));
// md.use(require('markdown-it-implicit-figures'), {
// 	figcaption: true, // <figcaption>alternative text</figcaption>, default: false
// });

function removeIndentation(str) {
	// remove the shortest leading indentation from each line (credit: https://github.com/declandewet/common-tags/blob/master/src/stripIndentTransformer/stripIndentTransformer.js)
	const match = str.match(/^[^\S\n]*(?=\S)/gm);
	const indent = match && Math.min(...match.map(el => el.length));
	if (indent) {
		const regexp = new RegExp(`^.{${indent}}`, 'gm');
		return str.replace(regexp, '');
	}

	return str;
}

module.exports = function(string) {
	var bodyText = removeIndentation(string);
	var html = md.render(bodyText);
	return html;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/html/helpers/escape-xml");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/helpers/to-string");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.46 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_classValue = __webpack_require__(12),
    marko_componentType = "/marko-webpack$1.0.0/src/components/Section/index.marko",
    marko_renderer = __webpack_require__(1),
    marko_dynamicTag = __webpack_require__(3),
    marko_classAttr = __webpack_require__(14);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<section layout=\"grid^1\"" +
    marko_classAttr(marko_classValue([
    "Section",
    input.class
  ])) +
    ">");

  marko_dynamicTag(out, input, null, null, null, null, __component, "1");

  out.w("</section>");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    deps: [
      "./style.css"
    ],
    id: "/marko-webpack$1.0.0/src/components/Section/index.marko"
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.46 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/404.marko",
    marko_renderer = __webpack_require__(1),
    template = __webpack_require__(32),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_dynamicTag = __webpack_require__(3),
    marko_loadTag = __webpack_require__(2),
    init_components_tag = marko_loadTag(__webpack_require__(4));

function renderAssets() {
  const assets = this.___assets;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    this.write(`<script>window.$mwp=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      this.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    this.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  this.___renderAssets();
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  this.___renderAssets();
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.___renderAssets = renderAssets;

  out.___assets = entries["404_78An"][getBundleName(out.global)];

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/404.marko",
    tags: [
      "./404.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/helpers/class-value");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/html/helpers/attr");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/html/helpers/class-attr");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/helpers/for-of");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/helpers/for-in");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("express-slash");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

const v = __webpack_require__(29);

// const sanity = require("./sanity");

const toMarkdown = __webpack_require__(30)

// const imageUrlBuilder = require('@sanity/image-url')
// const builder = imageUrlBuilder(myConfiguredSanityClient)

const sanityClient = __webpack_require__(31)
const client = sanityClient({
  projectId: 'kvqmg9w0',
  dataset: 'production',
  useCdn: true // `false` if you want to ensure fresh data
})

const serializers = {
	types: {
	  code: props => '```' + props.node.language + '\n' + props.node.code + '\n```'
	}
  }

async function getContent() {
	var content = {}
	content.home = {}
	content.resume = {}
	content.resume.sections = {}
	content.home.intro = {}
	content.home.sections = {}
		
	await client.fetch('*[_type == "post"]').then(posts => {

		posts.forEach(post => {
			post.body = toMarkdown(post.body, {
				serializers,
				projectId: 'kvqmg9w0',
				dataset: 'production'
			  })
			post.url = '/work/' + post.slug.current
		})

		return content.posts = posts
	})

	await client.fetch(`*[_type == "page" && title == "Site"][0].sections`).then(sections => {
		sections.forEach(section => {
			var name = v.lowerCase(section.value)
			content.home.sections[name] = section.content
		})

	})

	await client.fetch(`*[_type == "page" && title == "Resume"][0].sections`).then(sections => {
		sections.forEach(section => {
			var name = v.kebabCase(section.value)
			content.resume.sections[name] = section.content
		})

	})

	await client.fetch(`*[_type == "page" && title == "Site"][0].intro`).then(intro => {
		content.home.intro = intro
	})



	return content
}

const api = getContent()

// module.exports = {
// 	api: function() {
// 		return api
// 	},
// 	getContent: function() {
// 		return getContent()
// 	}
// }

const myModule = module.exports = api;
myModule.getContent = function() {
	return getContent()
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("serve-static");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.46 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/post.marko",
    marko_renderer = __webpack_require__(1),
    template = __webpack_require__(37),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_dynamicTag = __webpack_require__(3),
    marko_loadTag = __webpack_require__(2),
    init_components_tag = marko_loadTag(__webpack_require__(4));

function renderAssets() {
  const assets = this.___assets;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    this.write(`<script>window.$mwp=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      this.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    this.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  this.___renderAssets();
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  this.___renderAssets();
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.___renderAssets = renderAssets;

  out.___assets = entries["post_ffL2"][getBundleName(out.global)];

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/post.marko",
    tags: [
      "./post.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.46 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/project.marko",
    marko_renderer = __webpack_require__(1),
    template = __webpack_require__(40),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_dynamicTag = __webpack_require__(3),
    marko_loadTag = __webpack_require__(2),
    init_components_tag = marko_loadTag(__webpack_require__(4));

function renderAssets() {
  const assets = this.___assets;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    this.write(`<script>window.$mwp=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      this.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    this.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  this.___renderAssets();
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  this.___renderAssets();
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.___renderAssets = renderAssets;

  out.___assets = entries["project_Qgdo"][getBundleName(out.global)];

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/project.marko",
    tags: [
      "./project.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.46 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/about.marko",
    marko_renderer = __webpack_require__(1),
    template = __webpack_require__(41),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_dynamicTag = __webpack_require__(3),
    marko_loadTag = __webpack_require__(2),
    init_components_tag = marko_loadTag(__webpack_require__(4));

function renderAssets() {
  const assets = this.___assets;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    this.write(`<script>window.$mwp=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      this.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    this.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  this.___renderAssets();
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  this.___renderAssets();
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.___renderAssets = renderAssets;

  out.___assets = entries["about_kzxx"][getBundleName(out.global)];

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/about.marko",
    tags: [
      "./about.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.46 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/projects.marko",
    marko_renderer = __webpack_require__(1),
    template = __webpack_require__(42),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_dynamicTag = __webpack_require__(3),
    marko_loadTag = __webpack_require__(2),
    init_components_tag = marko_loadTag(__webpack_require__(4));

function renderAssets() {
  const assets = this.___assets;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    this.write(`<script>window.$mwp=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      this.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    this.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  this.___renderAssets();
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  this.___renderAssets();
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.___renderAssets = renderAssets;

  out.___assets = entries["projects_3eZ0"][getBundleName(out.global)];

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/projects.marko",
    tags: [
      "./projects.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.46 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/cv.marko",
    marko_renderer = __webpack_require__(1),
    template = __webpack_require__(43),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_dynamicTag = __webpack_require__(3),
    marko_loadTag = __webpack_require__(2),
    init_components_tag = marko_loadTag(__webpack_require__(4));

function renderAssets() {
  const assets = this.___assets;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    this.write(`<script>window.$mwp=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      this.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    this.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  this.___renderAssets();
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  this.___renderAssets();
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.___renderAssets = renderAssets;

  out.___assets = entries["cv_tq48"][getBundleName(out.global)];

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/cv.marko",
    tags: [
      "./cv.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.46 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/index.marko",
    marko_renderer = __webpack_require__(1),
    template = __webpack_require__(44),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_dynamicTag = __webpack_require__(3),
    marko_loadTag = __webpack_require__(2),
    init_components_tag = marko_loadTag(__webpack_require__(4));

function renderAssets() {
  const assets = this.___assets;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    this.write(`<script>window.$mwp=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      this.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    this.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  this.___renderAssets();
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  this.___renderAssets();
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.___renderAssets = renderAssets;

  out.___assets = entries["templates_IwU3"][getBundleName(out.global)];

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/index.marko",
    tags: [
      "./index.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express_slash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var express_slash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_slash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var serve_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var serve_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(serve_static__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _templates_404_marko__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _templates_404_marko__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_templates_404_marko__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _templates_post_marko__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);
/* harmony import */ var _templates_post_marko__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_templates_post_marko__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _templates_project_marko__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23);
/* harmony import */ var _templates_project_marko__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_templates_project_marko__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _templates_about_marko__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24);
/* harmony import */ var _templates_about_marko__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_templates_about_marko__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _templates_projects_marko__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25);
/* harmony import */ var _templates_projects_marko__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_templates_projects_marko__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _templates_cv_marko__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26);
/* harmony import */ var _templates_cv_marko__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_templates_cv_marko__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _templates_index_marko__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(27);
/* harmony import */ var _templates_index_marko__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_templates_index_marko__WEBPACK_IMPORTED_MODULE_11__);



// Enable gzip compression for all HTTP responses

// Allow all of the generated files to be served up by Express


// const sanity = require("./sanity");

// const sanityClient = require('@sanity/client')
// const client = sanityClient({
//   projectId: 'kvqmg9w0',
//   dataset: 'production',
//   useCdn: false // `false` if you want to ensure fresh data
// })

// const query = '*[_type == "post"]'

// client.fetch(query).then(posts => {
//   posts.forEach(post => {
//     console.log(`${post.title}`)
//   })
// })









const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const port = process.env.PORT || 8080;

app.enable('strict routing');
app.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());
app.use(express_slash__WEBPACK_IMPORTED_MODULE_1___default()());
app.use("/static", serve_static__WEBPACK_IMPORTED_MODULE_4___default()("dist/client"));

_api__WEBPACK_IMPORTED_MODULE_2___default.a.then(content => {

	app.get("/", (req, res) => {
		_templates_index_marko__WEBPACK_IMPORTED_MODULE_11___default.a.render({ posts: content.posts, ...content.home, work: content.posts }, res);
	});

	app.get("/cv", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		_templates_cv_marko__WEBPACK_IMPORTED_MODULE_10___default.a.render({ ...content.resume }, res);
	});

	app.get("/projects", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		_templates_projects_marko__WEBPACK_IMPORTED_MODULE_9___default.a.render({}, res);
	});

	app.get("/about", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		_templates_about_marko__WEBPACK_IMPORTED_MODULE_8___default.a.render({}, res);
	});

	app.get("/posts/:post", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");

		let err = true;

		for (let post of content.posts) {

			// If page exists then render page
			if (req.params.post === post.slug) {
				_templates_post_marko__WEBPACK_IMPORTED_MODULE_6___default.a.render(post, res);
				err = false
			}
		}

		// If page doesn't exist then render 404
		if (err) {
			_templates_404_marko__WEBPACK_IMPORTED_MODULE_5___default.a.render({}, res.status(404));
		}

	});

	app.get("/work/:post", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");

		let err = true;

		for (let post of content.posts) {
			// If page exists then render page
			if (req.params.post === post.slug.current) {
				_templates_project_marko__WEBPACK_IMPORTED_MODULE_7___default.a.render(post, res);
				err = false
			}
		}

		// If page doesn't exist then render 404
		if (err) {
			_templates_404_marko__WEBPACK_IMPORTED_MODULE_5___default.a.render({}, res.status(404));
		}

	});

	// Render 404 for any unkown routes
	app.use(function(req, res) {
		_templates_404_marko__WEBPACK_IMPORTED_MODULE_5___default.a.render({}, res.status(404));
	});

	// Start the server
	app.listen(port, err => {
		if (err) {
			throw err;
		}

		if (port !== "0") {
			console.log(`Listening on port ${port}`);
		}
	});
})


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("voca");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@sanity/block-content-to-markdown");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@sanity/client");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.46 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/404.marko",
    marko_renderer = __webpack_require__(1),
    Layout_template = __webpack_require__(5),
    marko_loadTag = __webpack_require__(2),
    Layout_tag = marko_loadTag(Layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  Layout_tag({
      title: {
          renderBody: function(out) {
            out.w("404");
          }
        },
      body: {
          renderBody: function(out) {
            out.w("<div><h1>404 Page not found</h1>\n</div>");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/404.marko",
    tags: [
      "../components/Layout/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "/static/82b22a8115fd8c5bdb93cdb78e081c34.svg";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "/static/878a3ba1dc79cbe5e83e8d367d49fabe.png";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/core-tags/components/component-globals-tag");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/core-tags/core/await/reorderer-renderer");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.46 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/post.marko",
    marko_renderer = __webpack_require__(1),
    module_markdown = __webpack_require__(7),
    markdown = module_markdown.default || module_markdown,
    helpers_escape_xml = __webpack_require__(8),
    marko_escapeXml = helpers_escape_xml.x,
    marko_str = __webpack_require__(9),
    Layout_template = __webpack_require__(5),
    marko_loadTag = __webpack_require__(2),
    Layout_tag = marko_loadTag(Layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  Layout_tag({
      class: "page__cv",
      title: {
          renderBody: function(out) {
            out.w(marko_escapeXml(input.title));
          }
        },
      body: {
          renderBody: function(out) {
            out.w("<h1>" +
              marko_escapeXml(input.title) +
              "</h1>" +
              marko_str(markdown(input.contents)));
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/post.marko",
    tags: [
      "../components/Layout/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("markdown-it");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("markdown-it-attrs");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.46 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/project.marko",
    marko_renderer = __webpack_require__(1),
    module_markdown = __webpack_require__(7),
    markdown = module_markdown.default || module_markdown,
    helpers_escape_xml = __webpack_require__(8),
    marko_escapeXml = helpers_escape_xml.x,
    marko_str = __webpack_require__(9),
    Section_template = __webpack_require__(10),
    marko_loadTag = __webpack_require__(2),
    Section_tag = marko_loadTag(Section_template),
    marko_forOf = __webpack_require__(15),
    Layout_template = __webpack_require__(5),
    Layout_tag = marko_loadTag(Layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  Layout_tag({
      class: "page__cv",
      body: {
          renderBody: function(out) {
            Section_tag({
                renderBody: function(out) {
                  out.w("<h1 class=\"mb-8 mt-0\">" +
                    marko_escapeXml(input.title) +
                    "</h1><div class=\"excerpt f-4\"><p>" +
                    marko_str(markdown(input.excerpt)) +
                    "</p></div>");
                }
              }, out, __component, "2");

            if (input.image) {
              Section_tag({
                  class: "hero w-viewport"
                }, out, __component, "6");
            }

            if (input.goal || input.role) {
              Section_tag({
                  class: "details",
                  renderBody: function(out) {
                    if (input.goal) {
                      out.w("<div class=\"span-4\"><h5>Goals</h5>" +
                        marko_str(markdown(input.goal)) +
                        "</div>");
                    }

                    if (input.role) {
                      out.w("<div class=\"span-4\"><h5>My Role</h5>" +
                        marko_str(markdown(input.role)) +
                        "</div>");
                    }
                  }
                }, out, __component, "7");
            }

            if (input.sections) {
              var $for$0 = 0;

              marko_forOf(input.sections, function(section) {
                var $keyScope$0 = "[" + (($for$0++) + "]");

                Section_tag({
                    renderBody: function(out) {
                      out.w("<h2>" +
                        marko_escapeXml(section.value) +
                        "</h2><div>" +
                        marko_str(markdown(section.content)) +
                        "</div>");
                    }
                  }, out, __component, "12" + $keyScope$0);
              });
            }

            Section_tag({
                renderBody: function(out) {
                  out.w("<div>" +
                    marko_str(markdown(input.body)) +
                    "</div>");
                }
              }, out, __component, "15");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: "@import \"../styles\";\n\n\tsection h2 {\n\t\tgrid-column: span 3;\n\t}\n\n\t.span-4 {\n\t\tgrid-column: span 4 !important;\n\t}\n\n\t.hero {\n\t\tborder: 0;\n\t\tdisplay: none !important;\n\t\tmargin-bottom: 4em;\n\t\tpadding: 0 !important;\n\t\tmargin-top: -2em;\n\t\tbackground: #f0f0f0;\n\t\t> * {\n\t\t\tflex-grow: 0 !important;\n\t\t}\n\t\t> img {\n\t\t\twidth: 100%;\n\t\t\tmax-width: 1400px;\n\t\t\tdisplay: none;\n\t\t\tmargin: 0 auto;\n\n\t\t\t@media (max-width: 900px) {\n\t\t\t\t&.small {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media (min-width: 901px) {\n\t\t\t\t&.medium {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
          virtualPath: "./project.marko.css",
          path: "./project.marko"
        }
    ],
    id: "/marko-webpack$1.0.0/src/templates/project.marko",
    tags: [
      "../components/Section/index.marko",
      "../components/Layout/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.46 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/about.marko",
    marko_renderer = __webpack_require__(1),
    Section_template = __webpack_require__(10),
    marko_loadTag = __webpack_require__(2),
    Section_tag = marko_loadTag(Section_template),
    Layout_template = __webpack_require__(5),
    Layout_tag = marko_loadTag(Layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  Layout_tag({
      title: {
          renderBody: function(out) {
            out.w("About me");
          }
        },
      body: {
          renderBody: function(out) {
            Section_tag({
                renderBody: function(out) {
                  out.w("<p>I work with companies to improve their digital products and services. I focus primarily on product design and user research. I devote a lot of my spare time to exploring how design decisions can be automated. When I’m not creating things, I like to cook, indulge in retro gaming and feed my lego obsession.</p>\n<p><a href=\"/cv\">View CV</a></p>\n");
                }
              }, out, __component, "3");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/about.marko",
    tags: [
      "../components/Section/index.marko",
      "../components/Layout/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.46 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/projects.marko",
    marko_renderer = __webpack_require__(1),
    Layout_template = __webpack_require__(5),
    marko_loadTag = __webpack_require__(2),
    Layout_tag = marko_loadTag(Layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  Layout_tag({
      title: {
          renderBody: function(out) {
            out.w("Projects");
          }
        },
      body: {
          renderBody: function(out) {
            out.w("<div class=\"w-viewport hero\">Projects</div><div><p>## An example of a heading</p>\n<p>The designers job it's not seeing you be the Gatekeeper of your product full stop and the gate the designer becomes the Gatekeeper when all the decisions around the products are seen through the eyes of the designers visuals and cups and prototypes. I wonder if this is because many people see the relationship with the designer as a one dimensional relationship where the clients tells the designer what they want and expects the designer to be a person who was someone who can use the tools they cant.</p>\n<h2>What dreams may come</h2>\n<p>When your faced with deadlines and you Need to build the  right product.   when you build the product from decisions alone and you have several other decisions you could have made how do you know you've made the right decision? [ it's not enough to think you Are successful from some an uplift in engagement,   increase in conversion, increase in revenue because. This doesn't answer whether you are meeting the needs of users it also doesn't tell you ] If something is unsuccessful either from tracking the conversion or a b testing and finding significant decrease in Analytics where do you look to to understand how to better your product if the only thing you have to go bye is an absolute conclusion.  we can of course try to find the data behind these conversions through the weeds of documentation and by talking but this puts the needs of the user or the learning further away from ourselves to be able to insure the building  the right product.</p>\n<h2>Something else</h2>\n<p>Secondly the needs of the user often only change gradually where us the why don't you see those needs on map could change many times. if you don't capture the user's needs then how can you accurately assess whether your meeting them.</p>\n<p>Often people won't realise they're giving their design A specification rather than requirements or resources to do their job. I don't really know why this is however I have a French that it has something to do with the way that we imagine the solution to problems or the way we perceive how to achieve things.  perhaps when we solving a problem we don't always know what the problem is just that something isn't right therefore it's much easier to explain a problem in the shape of a solution there must be some reason why people do this so regularly. Perhaps it's a feature of our brains to save time. [ there must be some psychology to it]</p>\n</div>");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: ".hero {\n\t\theight: 30vw;\n\t}",
          virtualPath: "./projects.marko.css",
          path: "./projects.marko"
        }
    ],
    id: "/marko-webpack$1.0.0/src/templates/projects.marko",
    tags: [
      "../components/Layout/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.46 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/cv.marko",
    marko_renderer = __webpack_require__(1),
    module_markdown = __webpack_require__(7),
    markdown = module_markdown.default || module_markdown,
    marko_forIn = __webpack_require__(16),
    helpers_escape_xml = __webpack_require__(8),
    marko_escapeXml = helpers_escape_xml.x,
    marko_str = __webpack_require__(9),
    Section_template = __webpack_require__(10),
    marko_loadTag = __webpack_require__(2),
    Section_tag = marko_loadTag(Section_template),
    Layout_template = __webpack_require__(5),
    Layout_tag = marko_loadTag(Layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  Layout_tag({
      class: "page__cv",
      title: {
          renderBody: function(out) {
            out.w("CV");
          }
        },
      body: {
          renderBody: function(out) {
            var $for$0 = 0;

            marko_forIn(input.sections, function(heading, content) {
              var $keyScope$0 = "[" + (($for$0++) + "]");

              Section_tag({
                  renderBody: function(out) {
                    out.w("<h2>" +
                      marko_escapeXml(heading) +
                      "</h2><div>" +
                      marko_str(markdown(content)) +
                      "</div>");
                  }
                }, out, __component, "3" + $keyScope$0);
            });

            Section_tag({
                renderBody: function(out) {
                  out.w(marko_escapeXml(input.body));
                }
              }, out, __component, "6");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: "@import \"../styles\";\n\n\t.page__cv {\n\t\t& h2 {\n\t\t\t@extend .f-caps, .f-1, .md\\:w-200;\n\t\t}\n\t\t& section {\n\t\t\t@extend .md\\:flex;\n\t\t}\n\t}\n\n\t.page__cv table th {\n\t\tdisplay: none;\n\t}",
          virtualPath: "./cv.marko.css",
          path: "./cv.marko"
        }
    ],
    id: "/marko-webpack$1.0.0/src/templates/cv.marko",
    tags: [
      "../components/Section/index.marko",
      "../components/Layout/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.46 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/index.marko",
    marko_renderer = __webpack_require__(1),
    module_markdown = __webpack_require__(7),
    markdown = module_markdown.default || module_markdown,
    marko_str = __webpack_require__(9),
    Ticker_template = __webpack_require__(45),
    marko_loadTag = __webpack_require__(2),
    Ticker_tag = marko_loadTag(Ticker_template),
    Section_template = __webpack_require__(10),
    Section_tag = marko_loadTag(Section_template),
    marko_forOf = __webpack_require__(15),
    helpers_escape_xml = __webpack_require__(8),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = __webpack_require__(13),
    marko_forIn = __webpack_require__(16),
    Layout_template = __webpack_require__(5),
    Layout_tag = marko_loadTag(Layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  Layout_tag({
      class: "page_home",
      body: {
          renderBody: function(out) {
            Section_tag({
                renderBody: function(out) {
                  out.w("<h1>" +
                    marko_str(input.intro));

                  Ticker_tag({
                      sections: [
                          {
                              renderBody: function(out) {
                                out.w(" using good old fashioned problem-solving.");
                              }
                            },
                          {
                              renderBody: function(out) {
                                out.w(" using the right methods and techniques.");
                              }
                            },
                          {
                              renderBody: function(out) {
                                out.w(" by not settling for anything less.");
                              }
                            }
                        ]
                    }, out, __component, "4");

                  out.w("</h1>");
                }
              }, out, __component, "2");

            Section_tag({
                renderBody: function(out) {
                  out.w("<h2>Work</h2><div><ul>");

                  var $for$0 = 0;

                  marko_forOf(input.work, function(project, index) {
                    var $keyScope$0 = "[" + (($for$0++) + "]");

                    out.w("<li><a" +
                      marko_attr("href", project.url) +
                      ">" +
                      marko_escapeXml(project.title) +
                      "</a><span class=\"client-name\">" +
                      marko_escapeXml(project.client) +
                      "</span></li>");
                  });

                  out.w("</ul></div>");
                }
              }, out, __component, "8");

            var $for$1 = 0;

            marko_forIn(input.sections, function(heading, content) {
              var $keyScope$1 = "[" + (($for$1++) + "]");

              Section_tag({
                  renderBody: function(out) {
                    out.w("<h2>" +
                      marko_escapeXml(heading) +
                      "</h2><div>" +
                      marko_str(markdown(content)) +
                      "</div>");
                  }
                }, out, __component, "15" + $keyScope$1);
            });
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: ".client-name {\n\t\tmargin-left: var(--margin-6);\n\t\tcolor: #808080;\n\t}\n\n\t.page_home .Section[layout^=\"grid\"] {\n\t\th2 {\n\t\t\tgrid-column: span 3;\n\t\t\ttext-transform: capitalize;\n\t\t}\n\n\t\tdiv {\n\t\t\tgrid-column: 4 / -1;\n\t\t}\n\t}",
          virtualPath: "./index.marko.css",
          path: "./index.marko"
        }
    ],
    id: "/marko-webpack$1.0.0/src/templates/index.marko",
    tags: [
      "../components/Ticker/index.marko",
      "../components/Section/index.marko",
      "../components/Layout/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.46 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_classValue = __webpack_require__(12),
    marko_component = {
    onCreate: function () {
        this.state = { showingIndex: 0 };
    },
    onMount: function () {
        this.showNextSectionAfterDelay();
    },
    showNextSectionAfterDelay: function () {
        this.showTimeout = setTimeout(() => {
            if (this.state.showingIndex < this.input.sections.length) {
                this.showNextSectionAfterDelay();
                this.state.showingIndex++;
                if (this.state.showingIndex === this.input.sections.length) {
                    this.state.showingIndex = 0;
                }
            }
        }, 6000);
    },
    onDestroy: function () {
        clearTimeout(this.showTimeout);
    }
},
    marko_componentType = "/marko-webpack$1.0.0/src/components/Ticker/index.marko",
    marko_renderer = __webpack_require__(1),
    marko_forOf = __webpack_require__(15),
    marko_dynamicTag = __webpack_require__(3),
    marko_attr = __webpack_require__(13),
    marko_classAttr = __webpack_require__(14);

function render(input, out, __component, component, state) {
  var data = input;

  var $for$0 = 0;

  marko_forOf(input.sections, function(section, index) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<span" +
      marko_attr("data-key", index) +
      marko_classAttr(marko_classValue([
      "Ticker",
      state.showingIndex === index ? "show" : "hide"
    ])) +
      ">");

    marko_dynamicTag(out, section, null, null, null, null, __component, "1" + $keyScope$0);

    out.w("</span>");
  });
}

marko_template._ = marko_renderer(render, {
    e_: marko_componentType
  }, marko_component);

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: ".Ticker {\n\t\tdisplay: none;\n\t}\n\n\t.Ticker.show {\n\t\tdisplay: inline;\n\t}",
          virtualPath: "./index.marko.css",
          path: "./index.marko"
        }
    ],
    id: "/marko-webpack$1.0.0/src/components/Ticker/index.marko",
    component: "./index.marko"
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map