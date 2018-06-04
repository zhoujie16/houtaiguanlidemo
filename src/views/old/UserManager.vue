<!--用户管理-->
<template>
	<div class="container">
		<el-header>用户管理</el-header>
		<el-main>
			<el-form label-width="50px" :inline="true" size="small">
				<el-form-item label="账号">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="昵称">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="邮箱">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="手机">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="电话">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="姓名">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="机构">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="公司">
					<el-input></el-input>
				</el-form-item>
				<!--<el-form-item label="岗位">
					<el-select>
						<el-option label="选项1"></el-option>
						<el-option label="选项1"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="状态">
					<el-select>
						<el-option label="选项1"></el-option>
						<el-option label="选项1"></el-option>
					</el-select>
				</el-form-item>-->
				<el-form-item>
					<el-button type="primary">查询</el-button>
					<el-button>重置</el-button>
				</el-form-item>
			</el-form>
			
			<el-table :data="tableData" border stripe size="small">
				<el-table-column type="index"></el-table-column>
				<el-table-column type="selection" width="40"></el-table-column>
				<el-table-column prop="zhanghao" label="账号" width=""></el-table-column>
				<el-table-column prop="nicheng" label="昵称" width=""></el-table-column>
				<el-table-column prop="xingming" label="姓名" width=""></el-table-column>
				<el-table-column prop="jigou" label="机构" width=""></el-table-column>
			</el-table>
			<el-row type="flex" justify="end">
				<el-pagination small background layout="prev, pager, next" :total="50"></el-pagination>
			</el-row>
		</el-main>
	</div>
</template>

<script>
	export default {
		data() {
			var arr = [];
			for(let i = 0; i < 10; i++) {
				arr.push({
					index: i,
					zhanghao: '账号' + i,
					nicheng: '昵称' + i,
					xingming: '姓名' + i,
					jigou: '机构' + i
				});
			}
			return {
				tableData: arr
			}
		}
	}
</script>

<style>
	.el-header {
		line-height: 60px;
	}
	
	.el-form-item .el-input,
	.el-form .el-select {
		width: 135px;
	}
</style>