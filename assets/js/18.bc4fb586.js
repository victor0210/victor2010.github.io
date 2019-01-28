(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{174:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("ol",[e("li",[t._v("开启开发模式（开发环境默认开启）")]),t._v(" "),e("li",[t._v("在Chrome Store中下载"),e("a",{attrs:{href:"https://chrome.google.com/webstore/detail/slimpanel/hpociphbnifckigemlmlohmnkglehfhj",target:"_blank",rel:"noopener noreferrer"}},[t._v("slim插件"),e("OutboundLink")],1)]),t._v(" "),t._m(4)]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("我们推荐使用插件的形式进行集成，在"),e("router-link",{attrs:{to:"/zh/plugin.html"}},[t._v("Plugin")]),t._v("的"),e("code",[t._v("init hook")]),t._v("中监听"),e("code",[t._v("__SLIM_DEVTOOL_ANSWER__")]),t._v("，然后触发"),e("strong",[t._v("Reducer")]),t._v("："),e("code",[t._v("__SLIM_DEVTOOL_SET__")]),t._v("更新"),e("strong",[t._v("State")])],1),t._v(" "),t._m(9),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/victor0210/slim/blob/master/src/vslim/index.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSlim集成代码"),e("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"状态回溯工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态回溯工具","aria-hidden":"true"}},[this._v("#")]),this._v(" 状态回溯工具")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Slim")]),this._v("提供了状态更新记录工具，主要功能如下")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("更方便的查看状态的的改变和对应的"),s("strong",[this._v("Action")])]),this._v(" "),s("li",[this._v("快速的切换到某一时刻的状态")]),this._v(" "),s("li",[this._v("下载某一时刻的状态值")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装和使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装和使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装和使用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("打开控制台切换到slim tab页，在有"),s("strong",[this._v("Slim")]),this._v("运行的开发环境下，"),s("strong",[this._v("Devtool")]),this._v("将会自动记录您的状态变化。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),s("p",[s("strong",[this._v("Devtool")]),this._v("集成在"),s("strong",[this._v("Slim")]),this._v("中，如需配合Vue或者React等框架中使用还需要进行特殊处理，下面是一个集成在vue中的展示例子")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("video",{attrs:{width:"100%",controls:""}},[s("source",{attrs:{src:"/slimdocs/devtool.webm",type:"video/webm"}}),this._v("\n  Your browser does not support the video tag.\n")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"集成方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集成方式","aria-hidden":"true"}},[this._v("#")]),this._v(" 集成方式")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("在"),e("strong",[t._v("Slim")]),t._v("中会暴露出一个内置事件"),e("code",[t._v("__SLIM_DEVTOOL_ANSWER__")]),t._v("，在点击"),e("code",[t._v("Revert")]),t._v("时触发，接收对应时刻的"),e("code",[t._v("State")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Slim "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slim-store'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" devPlugin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__SLIM_DEVTOOL_ANSWER__'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__SLIM_DEVTOOL_SET__'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nSlim"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("devPlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);a.options.__file="devtool.md";s.default=a.exports}}]);