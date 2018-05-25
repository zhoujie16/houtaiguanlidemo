import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Table from '@/views/Table'
import Form from '@/views/Form'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/login',
		name: 'Login',
		component: Login
	}, {
		path: '/',
		component: Home,
		name: '导航1',
		children: [{
			path: '/form',
			component: Form,
			name: 'form'
		},{
			path: '/table',
			component: Table,
			name: 'table'
		}]
	}]
})