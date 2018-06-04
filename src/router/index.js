import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
// import Upload from '@/views/Upload'
// import TableTree from '@/views/TableTree'
// import UserManager from '@/views/UserManager'
//import Table from '@/views/Table'
//import Form from '@/views/Form'
import CampusManage from '@/views/CampusManage'
import GradeManage from '@/views/GradeManage'
import ClassManage from '@/views/ClassManage'
import StudentManage from '@/views/StudentManage'
import AuditManage from '@/views/AuditManage'

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
        name: '菜单',
        icon: 'el-icon-setting',
        children: [{
            path: '/CampusManage',
            name: '校区管理',
            component: CampusManage,
            icon: 'el-icon-date',

        },{
            path: '/GradeManage',
            name: '学届管理',
            component: GradeManage,
            icon: 'el-icon-date',

        },{
            path: '/ClassManage',
            name: '班级管理',
            component: ClassManage,
            icon: 'el-icon-date',

        },{
            path: '/StudentManage',
            name: '校友管理',
            component: StudentManage,
            icon: 'el-icon-date',

        },{
            path: '/AuditManage',
            name: '审核事项',
            component: AuditManage,
            icon: 'el-icon-date',

        }]
    }]
});
