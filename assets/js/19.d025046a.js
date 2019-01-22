(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{169:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("相信状态管理大家都已经不陌生了，不过在这里也再简单聊聊：")]),t._v(" "),e("p",[t._v("不管是框架开发（Vue，React）下的应用，还是无框架开发，都需要将我们各种状态更好的管理以便于状态不会变得混乱不可预测以至于整个应用难以维护。\n所以状态管理的注意思路就是：把组件之间需要共享的状态抽取出来，遵循特定的约定，统一来管理，让状态的变化可以预测。根据这个思路，产生了很多的模式和库：Flux，Redux，Vuex 等")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("只需要像下面一样注册"),e("code",[t._v("State")]),t._v("和"),e("code",[t._v("Reducer")]),t._v("即可使用，"),e("router-link",{attrs:{to:"/zh/reducer.html"}},[t._v("更多详情")])],1),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),e("p",[e("strong",[t._v("Slim")]),t._v("提供了"),e("router-link",{attrs:{to:"/zh/plugin.html"}},[t._v("Plugin")]),t._v("机制, 这为slim集成到现有流行框架提供了非常方便的操作。")],1),t._v(" "),t._m(17),t._v(" "),e("p",[t._v("Slim的产生就是为了解决以下三种状态管理中的常见问题：")]),t._v(" "),t._m(18),t._v(" "),e("p",[t._v("当我们需要维护较少状态的时候往往会通过一些简单的全局变量方式就处理好了，但是实际工作情况下，业务发展往往是不会按照你的预期进行，状态随时都有变得更大的可能，等到状态变得庞大甚至已经难以维护的时候再引入状态管理框架似乎已经错过了最佳时期，重构大量的状态可不是一件轻松的事。\n也正是业务发展不可预期，状态什么时候会变得庞大其实也是一个未知数，在项目初期直接引入一些状态管理框架似乎也不是一个非常明智的决定，还相反会降低开发效率和开发体验。")]),t._v(" "),t._m(19),t._v(" "),e("p",[t._v("大型状态管理框架已经提供了一种既定的状态管理模型，往往会有一些中间层，不太好直接进行精简，所以往往会把一些很简单的操作变得非常复杂。而简单的状态管理框架虽然提供了简单的操作但又无法保证大型应用场景下的状态控制。")]),t._v(" "),t._m(20),t._v(" "),e("p",[t._v("大多数状态管理库并不能完全做到数据控制，以下两种特定的操作下状态变化依然不可控，而它们正好又是极其容易导致状态不可预测的典型例子。")]),t._v(" "),t._m(21),e("p",[t._v("Slim拥有非常强的状态控制，不管是小型应用还是大型应用，都保证了都可以保证状态操作的简便性和状态变化的可控性。并且因为简化了状态操作，在项目初期引入Slim也不会造成负面影响。")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/zh/vslim.html"}},[t._v("如何在Vue中使用Slim")])],1),t._v(" "),t._m(25)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" 介绍")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"slim是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slim是什么","aria-hidden":"true"}},[this._v("#")]),this._v(" Slim是什么")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Slim")]),this._v(" 是一个前端用于集中式简单状态管理框架。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"状态管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 状态管理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"slim的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slim的特点","aria-hidden":"true"}},[this._v("#")]),this._v(" Slim的特点")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("strong",[t._v("使用Proxy进行数据劫持使其拥有极强的状态更新限制")])]),t._v(" "),e("li",[e("strong",[t._v("友好的API")])]),t._v(" "),e("li",[e("strong",[t._v("简便的使用步骤")])]),t._v(" "),e("li",[e("strong",[t._v("更小的体积")])]),t._v(" "),e("li",[e("strong",[t._v("易于被集成到各个业务场景或框架")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"使用简单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用简单","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用简单")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" state "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world1'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reducers "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  changeName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" state "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello everyone!'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reducers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nstore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'changeName'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"强限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强限制","aria-hidden":"true"}},[this._v("#")]),this._v(" 强限制")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("在"),e("strong",[t._v("Slim")]),t._v("中如果开启"),e("code",[t._v("strict")]),t._v("模式以后，状态修改限制将变得异常的严格，任何在"),e("strong",[t._v("Reducer")]),t._v("（"),e("strong",[t._v("Slim")]),t._v("中状态变化的管理区域）以外的状态修改都将不被允许。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"小尺寸"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小尺寸","aria-hidden":"true"}},[this._v("#")]),this._v(" 小尺寸")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("整个"),s("strong",[this._v("Slim")]),this._v("库的体积大小为 "),s("code",[this._v("5kb")]),this._v(" 不到")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"轻量级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#轻量级","aria-hidden":"true"}},[this._v("#")]),this._v(" 轻量级")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("和名字一样，"),s("strong",[this._v("Slim")]),this._v("是一个轻量级状态管理工具，用更少的操作去管理状态，将变化控制在更集中的地方，不管是小型项目的快速管理还是大型项目的复杂管理都可以使用"),s("strong",[this._v("Slim")]),this._v("来完成。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"更灵活"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更灵活","aria-hidden":"true"}},[this._v("#")]),this._v(" 更灵活")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Slim")]),this._v("提供了两种约束模式，"),s("code",[this._v("strict")]),this._v("，"),s("code",[this._v("loose")]),this._v("，可以根据不同的需求进行切换。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"易于集成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#易于集成","aria-hidden":"true"}},[this._v("#")]),this._v(" 易于集成")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"slim解决什么问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slim解决什么问题","aria-hidden":"true"}},[this._v("#")]),this._v(" Slim解决什么问题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("1. 状态管理引入时机不好确定")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("2. 状态管理操作繁琐")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("3. 状态管理不够严格")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("newIndex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xxx\nobj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("newKey "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xxx\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"slim应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slim应用场景","aria-hidden":"true"}},[this._v("#")]),this._v(" Slim应用场景")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("只要你需要状态管理，你就可以用到Slim，虽然Slim是一个"),s("strong",[this._v("简单状态管理框架")]),this._v("，但是在"),s("strong",[this._v("超强的状态更新限制机制")]),this._v("的保护下，加入任何中间层都是非常容易和安全的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"slim的拓展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slim的拓展","aria-hidden":"true"}},[this._v("#")]),this._v(" Slim的拓展")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("a",{attrs:{href:""}},[this._v("如何在React中使用Slim")])])}],!1,null,null,null);r.options.__file="intro.md";s.default=r.exports}}]);