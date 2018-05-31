import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Upload from '@/views/Upload'
import TableTree from '@/views/TableTree'
import UserManager from '@/views/UserManager'
//import Table from '@/views/Table'
//import Form from '@/views/Form'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/login',
		name: '登录',
		component: Login,
		hidden: true
	}, {
		path: '/',
		component: Home,
		name: '首页',
		icon: 'el-icon-setting',
	},{
		path:'/bd',
		name: '表单相关',
		component: Home,
		icon: 'el-icon-setting',
		children: [{
			path: '/upload',
			name: '文件上传',
			component: Upload,
			icon: 'el-icon-date',

		},{
			path: '/tabletree',
			name: '树形表格',
			component: TableTree,
			icon: 'el-icon-date',

		}],
	},{
		path: '/lz',
		component: Home,
		name: '例子',
		icon: 'el-icon-setting',
		children: [{
			path: '/UserManager',
			name: '用户管理',
			component: UserManager,
			icon: 'el-icon-date',

		}]
	}]
});