(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{190:function(t,s,a){t.exports=a.p+"assets/img/project-construction.6eb199fc.png"},206:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),n("p",[t._v("微前端的概念是从后端的微服务的迁移过来的。将 Web 应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。各个前端应用还可以独立运行、独立开发、独立部署。")]),t._v(" "),n("p",[t._v("微前端只在前后端分离的单页应用中讨论才有意义。单页应用的核心是：在特定的时刻将一段由js运行生成的html代码片段插入到一个特定的位置。微前端项目并没有改变这个核心。微前端的项目与单体项目的差别是：生成html片段的js代码可能位于不同的域名下，所以各个资源的路径最好不要使用相对路径。")]),t._v(" "),n("p",[t._v("微前端项目是由多个子项目组成的，所以需要在微前端项目中声明这个项目是由哪些子项目组成的，这个步骤称为子项目注册。子项目注册做的事情是：给这个项目命名，指定这个项目在什么情况下装载在html文档中，在什么情况从html文档中卸载,所以就会涉及到生命周期的钩子函数。")]),t._v(" "),n("h1",{attrs:{id:"项目结构图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目结构图","aria-hidden":"true"}},[t._v("#")]),t._v(" 项目结构图")]),t._v(" "),n("p",[n("img",{attrs:{src:a(190),alt:"基于single-spa的vue微前端项目结构"}})]),t._v(" "),n("h1",{attrs:{id:"在线访问地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在线访问地址","aria-hidden":"true"}},[t._v("#")]),t._v(" 在线访问地址")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://microfrontend.heyudesign.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线访问地址"),n("OutboundLink")],1)]),t._v(" "),n("h1",{attrs:{id:"需要解决的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#需要解决的问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 需要解决的问题")]),t._v(" "),n("ol",[n("li",[t._v("子项目的注册、异步加载和生命周期管理；")]),t._v(" "),n("li",[t._v("子项目之间、主从之间的消息机制；")]),t._v(" "),n("li",[t._v("子项目之间的安全隔离措施；")]),t._v(" "),n("li",[t._v("子项目的框架无关、版本无关；")]),t._v(" "),n("li",[t._v("子项目之间、主从之间的公共依赖的库、业务逻辑(utils)以及版本怎么管理；")]),t._v(" "),n("li",[t._v("子项目独立调试、和主应用联调的方式；")]),t._v(" "),n("li",[t._v("发布")])]),t._v(" "),n("h1",{attrs:{id:"demo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[t._v("#")]),t._v(" demo")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/QxQstar/single-spa-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("single-spa微前端方案"),n("OutboundLink")],1)]),t._v(" "),n("h1",{attrs:{id:"实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),n("blockquote",[n("p",[t._v("补充：在这个 demo 中是使用 webpack 打包项目")])]),t._v(" "),n("h3",{attrs:{id:"给各个应用注册生命周期函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#给各个应用注册生命周期函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 给各个应用注册生命周期函数")]),t._v(" "),n("blockquote",[n("p",[t._v("补充： 在这个 demo 中子项目都是 vue 项目")])]),t._v(" "),n("p",[t._v("安装single-spa-vue")]),t._v(" "),n("div",{staticClass:"language-cli extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("vue add single-spa\n\n// 或者\n\nnpm install --save single-spa-vue\n")])])]),n("p",[t._v("改写入口文件")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" vue "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App.vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" router "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./router'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" store "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./store/base'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" singleSpaVue "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'single-spa-vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" elementUI "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elementUI"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("productionTip "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vueLifecycles "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("singleSpaVue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  appOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#main'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    store\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bootstrap "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vueLifecycles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bootstrap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mount "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vueLifecycles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" unmount "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vueLifecycles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unmount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"抽离公共资源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#抽离公共资源","aria-hidden":"true"}},[t._v("#")]),t._v(" 抽离公共资源")]),t._v(" "),n("p",[t._v("配置"),n("code",[t._v("webpack")]),t._v("的 externals 字段使"),n("code",[t._v("webpack")]),t._v("在打包的时候不打包公共库如(vue, vue-router, 私有 npm 包等),如下：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    externals"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-router'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vueRouter'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'elementUI'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"设置项目打包格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置项目打包格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置项目打包格式")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("output: {\n    ...\n    libraryTarget: 'umd',\n    library: xxx,\n}\n")])])]),n("h2",{attrs:{id:"注册子项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注册子项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 注册子项目")]),t._v(" "),n("h3",{attrs:{id:"各子个项目的配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#各子个项目的配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 各子个项目的配置")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("{\n        name:'main-project',\n        base:true,\n        projectIndex:'http://localhost:9100',\n    },\n    {\n        name:'customers',\n        base:false,\n        path:'#/customers',\n        domID:'main',\n        projectIndex:'http://localhost:5100',\n    },\n    {\n        name:'goods',\n        base:false,\n        path:'#/goods',\n        domID:'main',\n        projectIndex:'http://localhost:9010',\n    }\n")])])]),n("h3",{attrs:{id:"hydesign-grape"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hydesign-grape","aria-hidden":"true"}},[t._v("#")]),t._v(" @hydesign/grape")]),t._v(" "),n("p",[t._v("使用"),n("a",{attrs:{href:"https://github.com/QxQstar/grape",target:"_blank",rel:"noopener noreferrer"}},[t._v("@hydesign/grape"),n("OutboundLink")],1),t._v("完成子项目的注册，异步加载和生命周期管理，并且子项目的框架无关，版本无关。"),n("a",{attrs:{href:"https://github.com/QxQstar/grape",target:"_blank",rel:"noopener noreferrer"}},[t._v("@hydesign/grape"),n("OutboundLink")],1),t._v("与"),n("code",[t._v("webpack")]),t._v("的 externals 配合使用，能够抽离出项目中不想打包的库，并且在项目运行当使用到这个库的时候在动态加载。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Grape "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@hydesign/grape'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Grape")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appsConf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImportMap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vueRouter"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/npm/vue-router@3.0.7/dist/vue-router.min.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"elementUI"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/npm/element-ui@2.12.0/lib/index.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vuex"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"axios"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hytools"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/npm/hytools@1.2.0/dist/index.js"')]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h2",{attrs:{id:"给子项目的入口js加标识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#给子项目的入口js加标识","aria-hidden":"true"}},[t._v("#")]),t._v(" 给子项目的入口js加标识")]),t._v(" "),n("p",[t._v("经过"),n("code",[t._v("webpack")]),t._v("打包之后一个项目在 index.html 中插入的 js 脚本可能不只一个，所以在为了确保"),n("a",{attrs:{href:"https://github.com/QxQstar/grape",target:"_blank",rel:"noopener noreferrer"}},[t._v("@hydesign/grape"),n("OutboundLink")],1),t._v("能够正确的从项目访问入口中解析要入口js，给入口 js 文件加上一个自定义属性")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')\nplugins:[\n    ...\n    new ScriptExtHtmlWebpackPlugin({\n      custom: {\n        test: /app.*\\.js$/,\n        attribute: 'entry',\n        value: true\n      }\n    })\n  ]\n")])])]),n("h2",{attrs:{id:"配置跨域访问"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置跨域访问","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置跨域访问")]),t._v(" "),n("div",{staticClass:"language-cli extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    devServer:{\n        ...\n        headers: {\n            "Access-Control-Allow-Origin": "*",\n        },\n    },\n')])])]),n("p",[t._v("由于子项目的资源需要在入口项目中访问，所以需要在子项目中配置跨域访问")]),t._v(" "),n("h2",{attrs:{id:"资源的访问路径"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#资源的访问路径","aria-hidden":"true"}},[t._v("#")]),t._v(" 资源的访问路径")]),t._v(" "),n("p",[t._v("由于子项目的资源是在入口项目(入口项目和子项目在不同的域)中访问，所以需要将子项目的 publicPath 设置为完整的路径（即：包括协议和域名），这样才能保证子项目的资源能够正确加载。"),n("a",{attrs:{href:"https://www.webpackjs.com/configuration/output/#output-publicpath",target:"_blank",rel:"noopener noreferrer"}},[t._v("output.publicPath"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"各个应用间进行通信"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#各个应用间进行通信","aria-hidden":"true"}},[t._v("#")]),t._v(" 各个应用间进行通信")]),t._v(" "),n("p",[t._v("使用浏览器自定义事件来实现各个应用间的通讯")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// customers")]),t._v("\nwindow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logout'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main-project")]),t._v("\n window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logout'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("handler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("注意：各个应用之间应该尽可能少的进行通信，如果两个应用之间频繁的进行通信，那么它们两个应该合并成一个")])]),t._v(" "),n("h2",{attrs:{id:"隔离css样式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#隔离css样式","aria-hidden":"true"}},[t._v("#")]),t._v(" 隔离css样式")]),t._v(" "),n("p",[t._v("使用"),n("code",[t._v("webpack")]),t._v("，"),n("code",[t._v("postcss")]),t._v("在构建阶段为业务的所有 CSS 都加上自己的作用域")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("postcss:{\n    plugins:[require('postcss-plugin-namespace')('.main-project',{ ignore: [ '*'] })]\n}\n")])])]),n("h2",{attrs:{id:"独立运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#独立运行","aria-hidden":"true"}},[t._v("#")]),t._v(" 独立运行")]),t._v(" "),n("p",[t._v("使用 cross-env 设置环境变量，在入口js文件中访问环境变量 process.env.VUE_APP_SINGLERUN 的值决定是否new 一个vue根实例")]),t._v(" "),n("h2",{attrs:{id:"参考文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://single-spa.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("single-spa"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/QxQstar/grape",target:"_blank",rel:"noopener noreferrer"}},[t._v("@hydesign/grape"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/phodal/microfrontends",target:"_blank",rel:"noopener noreferrer"}},[t._v("微前端那些事儿"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5d7f702ce51d4561f777e258",target:"_blank",rel:"noopener noreferrer"}},[t._v("每日优鲜供应链前端团队微前端改造"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000019957162",target:"_blank",rel:"noopener noreferrer"}},[t._v("微前端项目"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/x2N-Y5xZV-XbrqxDT_wLKA",target:"_blank",rel:"noopener noreferrer"}},[t._v("网易严选企业级微前端解决方案与落地实践"),n("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);