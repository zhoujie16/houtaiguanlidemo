// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/color-dark.css'
import '../static/css/main.css'

import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
	//NProgress.start();
	console.log('router.beforeEach')
	if(!window.isLogin && to.path != '/login') {
		next({
			path: '/login'
		})
	} else {
		next()
	}
})

window._log = console.log;
window.Vue = new Vue();

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})