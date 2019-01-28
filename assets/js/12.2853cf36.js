(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{157:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Apply plugin, receive a plugin object, only add one plugin at a time")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[a("strong",[t._v("state")]),t._v(" is a single object stored in one state. See "),a("router-link",{attrs:{to:"/state.html"}},[t._v("State")]),t._v(" for details.")],1),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[a("strong",[t._v("getters")]),t._v(" is a more convenient way to construct state-specific data fetches provided by "),a("strong",[t._v("Slim")]),t._v(". Used with "),a("code",[t._v("store.getState('getterKey')")]),t._v(", each getter must be a function that accepts unique parameters. State`,\nSee "),a("router-link",{attrs:{to:"/state.html#getters"}},[t._v("Getters")]),t._v(" for details.")],1),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),a("p",[a("router-link",{attrs:{to:"/event.html"}},[t._v("EventCenter")])],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"slim-use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slim-use","aria-hidden":"true"}},[this._v("#")]),this._v(" Slim.use")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[this._v("Slim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),this._v("slimPlugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"slim-createstore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slim-createstore","aria-hidden":"true"}},[this._v("#")]),this._v(" Slim.createStore")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Slim")]),this._v(" currently exposes only one interface: "),s("code",[this._v("createStore")]),this._v(", passing in a parameter "),s("code",[this._v("conf")]),this._v(" object")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Slim"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    reducers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default {}")]),t._v("\n    state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default {}")]),t._v("\n    plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    getters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default {}")]),t._v("\n    mode                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default 'strict'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"reducers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reducers","aria-hidden":"true"}},[this._v("#")]),this._v(" reducers")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("reducers")]),this._v(" is a series of methods that will receive a default parameter "),s("strong",[this._v("state")]),this._v(" and the rest of the custom parameters. The parameters passed in "),s("strong",[this._v("dispatch")]),this._v(" will be received via args. See [Reducer](/reducer for details) .html)")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reducers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    reducerKeyForDispatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state","aria-hidden":"true"}},[this._v("#")]),this._v(" state")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'victor'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    todos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'one'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'done'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin","aria-hidden":"true"}},[this._v("#")]),this._v(" plugin")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("strong",[t._v("plugin")]),t._v(" is a simple object that provides "),a("code",[t._v("before")]),t._v(" and "),a("code",[t._v("after")]),t._v(" execution cycle hooks to access two parameters "),a("code",[t._v("state")]),t._v(" and "),a("code",[t._v("action")]),t._v(". See [Plugin] for details (/plugin.html )")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" slimPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("after")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"getters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getters","aria-hidden":"true"}},[this._v("#")]),this._v(" getters")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" getters "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mode","aria-hidden":"true"}},[this._v("#")]),this._v(" mode")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("strong",[t._v("mode")]),t._v(" determines the limit level of "),a("strong",[t._v("Slim")]),t._v(", optional two values ​​"),a("code",[t._v("strict")]),t._v(" and "),a("code",[t._v("loose")]),t._v(", default: "),a("code",[t._v("strict")]),t._v(", what is the difference between the two values?")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("strict")]),this._v(": Use Proxy to listen to the data, the limit is very strong, and it is not allowed to modify any data anywhere the reducer accidentally")]),this._v(" "),s("li",[s("strong",[this._v("loose")]),this._v(": Unlimited, it is recommended to use in production environment")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#store","aria-hidden":"true"}},[this._v("#")]),this._v(" Store")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("store")]),this._v(" is an overall control instance created and returned by "),s("strong",[this._v("createStore")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Slim "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slim-store'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Slim"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// store: {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     dispatch,                    emit reducer")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     getState,                    get the newest state or getter")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     state,                       state")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     on                           EventCenter.on")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     off                          EventCenter.off")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     emit                         EventCenter.emit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"dispatch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dispatch","aria-hidden":"true"}},[this._v("#")]),this._v(" dispatch")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("dispatch")]),this._v(" triggers the reducer to execute. The first parameter is the key corresponding to the reducer. You can add multiple custom parameters later.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'sayHello' should receive custom parameters like this")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reducers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sayHello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nstore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sayHello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// with chain")]),t._v("\nstore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'one'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'two'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'three'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"getstate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getstate","aria-hidden":"true"}},[this._v("#")]),this._v(" getState")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Get the latest state, fill in the parameter "),s("code",[this._v("getterKey")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get all state")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                  \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// To get the state value corresponding to the getter, you need to register the getter in advance, and return undefined if the getter does not exist.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" username "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'username'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"on-off-emit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-off-emit","aria-hidden":"true"}},[this._v("#")]),this._v(" on / off / emit")])}],!1,null,null,null);n.options.__file="slimApi.md";s.default=n.exports}}]);