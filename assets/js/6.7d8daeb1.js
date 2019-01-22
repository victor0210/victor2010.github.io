(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{160:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"eventcenter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eventcenter","aria-hidden":"true"}},[t._v("#")]),t._v(" EventCenter")]),t._v(" "),e("p",[t._v("State management and event management are indispensable in the project. Slim not only provides a good state management mechanism, but also integrates an event management center. There is no need to introduce event management separately.")]),t._v(" "),e("h2",{attrs:{id:"why-do-that"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why-do-that","aria-hidden":"true"}},[t._v("#")]),t._v(" Why do that")]),t._v(" "),e("ul",[e("li",[t._v("Increase the functionality of the overall framework, not limited to state management, but more like global (state and event) management.")]),t._v(" "),e("li",[t._v("Prepare for the state execution process to provide slices for external access to personalized code (for example, in the Slim business scenario, you want to do some special checks for each proxy change), but this feature also Stay tuned during the experimental phase.")])]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("p",[t._v("The event center provides three APIs "),e("code",[t._v("on")]),t._v(", "),e("code",[t._v("off")]),t._v(" and "),e("code",[t._v("emit")]),t._v(". The usage is very simple. Let us introduce each one separately.")]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("You can listen to add multiple event callbacks after an event name. When you remove an event, pass the callback function entity.")])]),t._v(" "),e("h3",{attrs:{id:"on-eventname-listener"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#on-eventname-listener","aria-hidden":"true"}},[t._v("#")]),t._v(" on(eventName[, listener])")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("listener")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`hello ")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v(", I'm ")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("age"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("-years-old.`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nstore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eventName'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listener"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"emit-eventname-args"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#emit-eventname-args","aria-hidden":"true"}},[t._v("#")]),t._v(" emit(eventName[, ...args])")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("listener"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'victor'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output: hello victor, I'm 18-years-old.")]),t._v("\n")])])]),e("h3",{attrs:{id:"off-listener"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#off-listener","aria-hidden":"true"}},[t._v("#")]),t._v(" off(listener)")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("off")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("listener"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}],!1,null,null,null);n.options.__file="event.md";a.default=n.exports}}]);