(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{183:function(t,a,s){"use strict";s.r(a);var e=s(6),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-面试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-面试"}},[t._v("#")]),t._v(" Vue 面试")]),t._v(" "),s("h2",{attrs:{id:"双向绑定数据原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双向绑定数据原理"}},[t._v("#")]),t._v(" 双向绑定数据原理")]),t._v(" "),s("ol",[s("li",[t._v("采用数据劫持结合发布者-阅读者模式的方式")]),t._v(" "),s("li",[t._v("通过"),s("code",[t._v("Object,defineProperty()")]),t._v(" 来劫持各个属性的"),s("code",[t._v("setter")]),t._v(" ，"),s("code",[t._v("getter")])]),t._v(" "),s("li",[t._v("在数据发生变动时发布信息给阅读者，触发相应监听回调")])]),t._v(" "),s("h2",{attrs:{id:"单向数据流和双向数据绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单向数据流和双向数据绑定"}},[t._v("#")]),t._v(" 单向数据流和双向数据绑定")]),t._v(" "),s("ul",[s("li",[t._v("单向数据流：数据流向是单向的。\n"),s("ul",[s("li",[t._v("优：数据流动的方向可以跟踪，流向单一，追查问题时可以更加快捷。")]),t._v(" "),s("li",[t._v("缺：写起来不太方便，要使"),s("code",[t._v("UI")]),t._v("发生变化需要创建各种 方法 来维护 对应的 属性")]),t._v(" "),s("li",[t._v("例： 父级 prop 的更新会向下流动到子组件中，但是反过来则不行")])])]),t._v(" "),s("li",[t._v("双向数据绑定：数据之间是相通的，将数据变更的操作隐藏在框架内部\n"),s("ul",[s("li",[t._v("优：表单交互较多的场景下，会简化大量与业务无关的代码")]),t._v(" "),s("li",[t._v("缺：无法追踪局部状态的变化，增加了出错时 debug 的难度")])])])]),t._v(" "),s("h2",{attrs:{id:"vue-如何去除-url-中的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-如何去除-url-中的"}},[t._v("#")]),t._v(" vue "),s("strong",[t._v("如何去除")]),t._v(" url 中的 "),s("code",[t._v("#")])]),t._v(" "),s("ul",[s("li",[t._v("vue-router 中存在两个模式\n"),s("ul",[s("li",[s("p",[t._v("hash 模式，带 #")])]),t._v(" "),s("li",[s("p",[t._v("history 模式，")])]),t._v(" "),s("li",[s("p",[t._v("方法")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'history'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  routes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])])]),t._v(" "),s("h2",{attrs:{id:"对-mvc-、mvvm-的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对-mvc-、mvvm-的理解"}},[t._v("#")]),t._v(" 对 "),s("code",[t._v("MVC")]),t._v(" 、"),s("code",[t._v("MVVM")]),t._v(" 的理解")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("MVC")]),t._v("： 所有通信都是单向的\n"),s("ol",[s("li",[t._v("视图层：")]),t._v(" "),s("li",[t._v("控制器：")]),t._v(" "),s("li",[t._v("模型层：")])])]),t._v(" "),s("li",[s("code",[t._v("MVVM")]),t._v("： 各部分之间的通信，都是双向的\n"),s("ol",[s("li",[t._v("数据模型")]),t._v(" "),s("li",[t._v("视图模型")]),t._v(" "),s("li",[t._v("视图层")])])])]),t._v(" "),s("h2",{attrs:{id:"介绍虚拟dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍虚拟dom"}},[t._v("#")]),t._v(" 介绍虚拟DOM")]),t._v(" "),s("ul",[s("li",[t._v("减少 JavaScript 操作真实 DOM 的带来的性能消耗")])]),t._v(" "),s("h2",{attrs:{id:"vue-生命周期的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-生命周期的理解"}},[t._v("#")]),t._v(" "),s("code",[t._v("Vue")]),t._v(" 生命周期的理解")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Vue")]),t._v(" 实例从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 "),s("code",[t._v("Vue")]),t._v(" 的生命周期，各个阶段有相对应的事件钩子")]),t._v(" "),s("li",[t._v("生命周期钩子函数\n"),s("ol",[s("li",[s("code",[t._v("beforeCreate()")])]),t._v(" "),s("li",[s("code",[t._v("created()")])]),t._v(" "),s("li",[s("code",[t._v("beforeMount()")])]),t._v(" "),s("li",[s("code",[t._v("mounted()")])]),t._v(" "),s("li",[s("code",[t._v("beforeupdate()")])]),t._v(" "),s("li",[s("code",[t._v("updated()")])]),t._v(" "),s("li",[s("code",[t._v("beforeDestroy()")])]),t._v(" "),s("li",[s("code",[t._v("destroyed()")])]),t._v(" "),s("li",[s("code",[t._v("vm.$nextTick")])])])])]),t._v(" "),s("h2",{attrs:{id:"组件通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件通信"}},[t._v("#")]),t._v(" 组件通信")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("父向子通信")]),t._v(" "),s("ul",[s("li",[t._v("通过 props")])])]),t._v(" "),s("li",[s("p",[t._v("子向父通信")]),t._v(" "),s("ul",[s("li",[t._v("通过 $emit")])])]),t._v(" "),s("li",[s("p",[t._v("非父子通信")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$EventBus "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或初始化2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" EventBus "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送事件")]),t._v("\nEventBus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'emit事件名'")]),t._v("，数据"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接受事件")]),t._v("\nEventBus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"emit事件名"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payload1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("…"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移除")]),t._v("\nEventBus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$off")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'事件名'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只移除这个回调的监听器")]),t._v("\nEventBus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$off")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'事件名'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移除该事件所有的监听器")]),t._v("\nEventBus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$off")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移除所有的事件监听器")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"vue-router-路由实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-路由实现"}},[t._v("#")]),t._v(" vue-router 路由实现")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导入路由插件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VueRouter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-router'")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueRouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义路由组件")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建路由实例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'history'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义路由映射表")]),t._v("\n  routes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 挂载根实例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  router\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"v-if-和-v-show-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-if-和-v-show-区别"}},[t._v("#")]),t._v(" v-if 和 v-show 区别")]),t._v(" "),s("ul",[s("li",[t._v("同： "),s("code",[t._v("v-if")]),t._v(" 和 "),s("code",[t._v("v-show")]),t._v(" 都能够对元素进行显示与隐藏")]),t._v(" "),s("li",[t._v("异：\n"),s("ul",[s("li",[s("code",[t._v("v-if")]),t._v(" 是通过 "),s("code",[t._v("DOM")]),t._v(" 的创建和销毁这样一个过程")]),t._v(" "),s("li",[s("code",[t._v("v-show")]),t._v(" 仅仅是通过 "),s("code",[t._v("CSS")]),t._v(" 的"),s("code",[t._v("display:none")]),t._v(" --- "),s("code",[t._v("display:block")])])])])]),t._v(" "),s("h2",{attrs:{id:"route-和-router-的路由区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#route-和-router-的路由区别"}},[t._v("#")]),t._v(" $route 和 $router 的路由区别")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("router")]),t._v(" 是 "),s("code",[t._v("Vue")]),t._v(" 的一个实例")]),t._v(" "),s("li",[s("code",[t._v("route")]),t._v(" 是一个跳转路由的对象，当前的路由信息")])]),t._v(" "),s("h2",{attrs:{id:"nexttick-是做什么的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nexttick-是做什么的"}},[t._v("#")]),t._v(" "),s("code",[t._v("NextTick")]),t._v(" 是做什么的")]),t._v(" "),s("ol",[s("li",[t._v("将回调延迟到下次 DOM 更新循环之后执行。")]),t._v(" "),s("li",[t._v("在修改数据之后立即使用它，然后等待 DOM 更新。")])]),t._v(" "),s("h2",{attrs:{id:"vue-组件-data-为什么必须函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件-data-为什么必须函数"}},[t._v("#")]),t._v(" "),s("code",[t._v("Vue")]),t._v(" 组件 data 为什么必须函数")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("一个组件组件可能存在多个实例")])]),t._v(" "),s("li",[s("p",[t._v("若 data 是 一个对象，对象属于引用类型，则该组件的所有实例共享data对象的所有属性")])]),t._v(" "),s("li",[s("p",[t._v("当 data 是 一个函数时， 函数具有独立作用域快，则每个实例都有自己的作用域空间")])])]),t._v(" "),s("h2",{attrs:{id:"computed-和-methods-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#computed-和-methods-的区别"}},[t._v("#")]),t._v(" computed 和 methods 的区别")]),t._v(" "),s("ul",[s("li",[t._v("同：都能返回一个值")]),t._v(" "),s("li",[t._v("异：\n"),s("ul",[s("li",[t._v("computed：基于它们的依赖属性进行缓存的，当依赖发生改变时，重新求值。")]),t._v(" "),s("li",[t._v("method：只要被触发重新渲染， method 调用总会执行该函数。")])])])]),t._v(" "),s("h2",{attrs:{id:"对比-jquery-，vue-有什么不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对比-jquery-，vue-有什么不同"}},[t._v("#")]),t._v(" 对比 "),s("code",[t._v("JQuery")]),t._v(" ，"),s("code",[t._v("Vue")]),t._v(" 有什么不同")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("jQuery")]),t._v(" 专注视图层，通过操作 DOM 去实现页面的一些逻辑渲染")]),t._v(" "),s("li",[s("code",[t._v("Vue")]),t._v(" 专注于数据层，通过数据的双向绑定，最终表现在 DOM 层面，减少了 DOM 操作")])]),t._v(" "),s("h2",{attrs:{id:"vue-中怎么自定义指定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-中怎么自定义指定"}},[t._v("#")]),t._v(" Vue 中怎么自定义指定")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("全局注册")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("directive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'directiveName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inserted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("局部注册")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("directives"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  directiveName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inserted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("使用")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Tag")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-directiveName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Tag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"vue-中怎么自定义过滤器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-中怎么自定义过滤器"}},[t._v("#")]),t._v(" Vue 中怎么自定义过滤器")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("全局定义")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'filtersName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("局部定义")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("filters"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("filtersName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("使用")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("{{ message | filtersName }}\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Tag")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":arrt")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("message | filtersName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Tag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"对-keep-alive-的了解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对-keep-alive-的了解"}},[t._v("#")]),t._v(" 对 keep-alive 的了解")]),t._v(" "),s("ul",[s("li",[t._v("保留被包含的组件状态，或避免重新渲染")])]),t._v(" "),s("h2",{attrs:{id:"vue-中-key-的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-中-key-的作用"}},[t._v("#")]),t._v(" "),s("code",[t._v("Vue")]),t._v(" 中 key 的作用")]),t._v(" "),s("ul",[s("li",[t._v("不使用：  就地复用")]),t._v(" "),s("li",[t._v("使用：相同复用")]),t._v(" "),s("li",[t._v("注意：不推荐index")])]),t._v(" "),s("h2",{attrs:{id:"vue-和核心是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-和核心是什么"}},[t._v("#")]),t._v(" "),s("code",[t._v("Vue")]),t._v(" 和核心是什么")]),t._v(" "),s("ul",[s("li",[t._v("数据驱动 组件系统")])]),t._v(" "),s("h2",{attrs:{id:"vue-等单页面的优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-等单页面的优缺点"}},[t._v("#")]),t._v(" "),s("code",[t._v("Vue")]),t._v(" 等单页面的优缺点")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("优：")]),t._v(" "),s("ul",[s("li",[t._v("良好的交互体验")]),t._v(" "),s("li",[t._v("良好的前后端工作分离模式")]),t._v(" "),s("li",[t._v("减轻服务器压力")])])]),t._v(" "),s("li",[s("p",[t._v("缺：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("SEO")]),t._v(" 难度较高")]),t._v(" "),s("li",[t._v("前进、后退管理")]),t._v(" "),s("li",[t._v("初次加载耗时多")])])])]),t._v(" "),s("h2",{attrs:{id:"vue-router-使用-params-与-query-传参有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-使用-params-与-query-传参有什么区别"}},[t._v("#")]),t._v(" "),s("code",[t._v("vue-router")]),t._v(" 使用 "),s("code",[t._v("params")]),t._v(" 与 "),s("code",[t._v("query")]),t._v(" 传参有什么区别")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("params")]),t._v("： 路由的一部分,必须要有\n"),s("ul",[s("li",[s("code",[t._v("/router1/:id,/router1/123")])])])]),t._v(" "),s("li",[s("code",[t._v("query")]),t._v("： 拼接在路径后面的参数，可有可无\n"),s("ul",[s("li",[s("code",[t._v("/router1?id=123")])])])])]),t._v(" "),s("h2",{attrs:{id:"vue-生命周期的作用是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-生命周期的作用是什么"}},[t._v("#")]),t._v(" Vue 生命周期的作用是什么")]),t._v(" "),s("h2",{attrs:{id:"vue-生命周期总共有几个阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-生命周期总共有几个阶段"}},[t._v("#")]),t._v(" Vue 生命周期总共有几个阶段")]),t._v(" "),s("h2",{attrs:{id:"第一次页面加载页面会触及那几个钩子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一次页面加载页面会触及那几个钩子"}},[t._v("#")]),t._v(" 第一次页面加载页面会触及那几个钩子")]),t._v(" "),s("h2",{attrs:{id:"dom-渲染在哪个周期中就已经完成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-渲染在哪个周期中就已经完成"}},[t._v("#")]),t._v(" DOM 渲染在哪个周期中就已经完成")]),t._v(" "),s("h2",{attrs:{id:"生命周期钩子的-一些使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期钩子的-一些使用方法"}},[t._v("#")]),t._v(" 生命周期钩子的 一些使用方法")]),t._v(" "),s("h2",{attrs:{id:"v-show-和-v-if-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-show-和-v-if-的区别"}},[t._v("#")]),t._v(" v-show 和 v-if 的区别")]),t._v(" "),s("h2",{attrs:{id:"开发中常用的指令有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发中常用的指令有哪些"}},[t._v("#")]),t._v(" 开发中常用的指令有哪些")]),t._v(" "),s("h2",{attrs:{id:"绑定-class-的数组用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绑定-class-的数组用法"}},[t._v("#")]),t._v(" 绑定 class 的数组用法")]),t._v(" "),s("h2",{attrs:{id:"路由跳转方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由跳转方式"}},[t._v("#")]),t._v(" 路由跳转方式")]),t._v(" "),s("h2",{attrs:{id:"mvvm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvvm"}},[t._v("#")]),t._v(" MVVM")]),t._v(" "),s("h2",{attrs:{id:"computed-和-watch-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#computed-和-watch-的区别"}},[t._v("#")]),t._v(" computed 和 watch 的区别")]),t._v(" "),s("h2",{attrs:{id:"vue-组件的scoped-属性的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件的scoped-属性的作用"}},[t._v("#")]),t._v(" Vue 组件的scoped 属性的作用")]),t._v(" "),s("h2",{attrs:{id:"vue-是渐进式-的-框架的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-是渐进式-的-框架的理解"}},[t._v("#")]),t._v(" Vue 是渐进式 的 框架的理解")]),t._v(" "),s("h2",{attrs:{id:"vue-js-两个核心是什么（数据驱动、组件系统）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-两个核心是什么（数据驱动、组件系统）"}},[t._v("#")]),t._v(" Vue.js 两个核心是什么（数据驱动、组件系统）")]),t._v(" "),s("h2",{attrs:{id:"vue-常用修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-常用修饰符"}},[t._v("#")]),t._v(" Vue 常用修饰符")]),t._v(" "),s("h2",{attrs:{id:"v-on-可以监听多个方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-on-可以监听多个方法"}},[t._v("#")]),t._v(" v-on 可以监听多个方法")]),t._v(" "),s("h2",{attrs:{id:"vue-事件中如何使用-event-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-事件中如何使用-event-对象"}},[t._v("#")]),t._v(" Vue 事件中如何使用 event 对象")])])}),[],!1,null,null,null);a.default=r.exports}}]);