<template>
	<el-row class="container">
		<el-col :span="24" class="header">
			<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">Demo</el-col>
			<el-col :span="10">
				<div class="tools"  @click.prevent="collapse">
					<i class="fa fa-align-justify"></i>
				</div></el-col>
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=724912374,744172563&fm=27&gp=0.jpg"/></span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>菜单1</el-dropdown-item>
						<el-dropdown-item>菜单2</el-dropdown-item>
						<el-dropdown-item>菜单3</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
		<el-col :span="24" class="main">
			<aside :class="collapsed?'menu-collapsed':'menu-expanded'">
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo" :collapse="collapsed" router>
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.lead">
							<template slot="title">
								<i class="fa fa-id-card-o"></i>   {{item.name}}
							</template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
						</el-submenu>
						<!--<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i class="fa fa-align-justify"></i>{{item.children[0].name}}</el-menu-item>-->
					</template>
				</el-menu>
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
						<!--<template is="Form"></template>-->
					</el-col>
				</div>
				
			</section>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		data(){
			return {
				collapsed :false,
			}
		},
		mounted:function(){
			console.log(Vue)
		},
		methods:{
			//折叠导航栏
			collapse:function(){ 
				return;
				this.collapsed=!this.collapsed;
			},
			showMenu(i,status){
				//this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			},
			pushTest(child){
				console.log(child)
				this.$router.push(child.path)
			}
		}
	}
</script>

<style>
	.container {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
	}
	
	.container .header {
		height: 60px;
		line-height: 60px;
		background-color: cornflowerblue;
		color: #fff;
	}
	
	.container .header .userinfo {
		text-align: right;
		padding-right: 35px;
		float: right;
	}
	
	.container .header .userinfo .userinfo-inner {
		cursor: pointer;
		color: #fff;
	}
	
	.container .header .userinfo .userinfo-inner img {
		width: 40px;
		height: 40px;
		border-radius: 20px;
		margin: 10px 0px 10px 10px;
		float: right
	}
	
	.container .header .logo {
		//width:230px;
		height: 60px;
		font-size: 22px;
		padding-left: 20px;
		padding-right: 20px;
		border-color: rgba(238, 241, 146, 0.3);
		border-right-width: 1px;
		border-right-style: solid;
	}
	
	.container .header .logo img {
		width: 40px;
		float: left;
		margin: 10px 10px 10px 18px;
	}
	
	.container .header .logo .txt {
		color: #fff;
	}
	
	.container .header .logo-width {
		width: 230px;
	}
	
	.container .header .logo-collapse-width {
		width: 60px
	}
	
	.container .header .tools {
		padding: 0px 23px;
		width: 14px;
		height: 60px;
		line-height: 60px;
		cursor: pointer;
	}
	/**/
	
	.main {
		display: flex;
		/*background: #324057;*/
		position: absolute;
		top: 60px;
		bottom: 0px;
		overflow: hidden;
	}
	
	.main aside {
		flex: 0 0 230px;
		width: 230px;
		/*// position: absolute;*/
		/*// top: 0px;*/
		/*// bottom: 0px;*/
	}
	
	.main aside .el-menu {
		height: 100%;
	}
	
	.main aside .el-menu .collapsed {
		width: 60px;
	}
	
	.main aside .el-menu .collapsed .item {
		position: relative;
	}
	
	.main aside .el-menu .collapsed .submenu {
		position: absolute;
		top: 0px;
		left: 60px;
		z-index: 99999;
		height: auto;
		display: none;
	}
	
	.main .menu-collapsed {
		flex: 0 0 60px;
		width: 60px;
	}
	
	.main .menu-expanded {
		flex: 0 0 230px;
		width: 230px;
	}
	
	.main .content-container {
		/*// background: #f1f2f7;*/
		flex: 1;
		/*// position: absolute;*/
		/*// right: 0px;*/
		/*// top: 0px;*/
		/*// bottom: 0px;*/
		/*// left: 230px;*/
		overflow-y: scroll;
		padding: 20px;
	}
	
	.main .content-container .breadcrumb-container {
		/*//margin-bottom: 15px;*/
	}
	
	.main .content-container .breadcrumb-container .title {
		width: 200px;
		float: left;
		color: #475669;
	}
	
	.main .content-container .breadcrumb-container .breadcrumb-inner {
		float: right;
	}
	
	.main .content-container .content-wrapper {
		background-color: #fff;
		box-sizing: border-box;
	}
</style>