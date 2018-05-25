<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-form :inline="true" ref="form" :model="form" label-width="80px" size="small ">
				<el-form-item label="角色名称">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="角色编码">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="角色类型">
					<el-select v-model="form.region" placeholder="请选择角色类型">
						<el-option label="类型1" value="shanghai"></el-option>
						<el-option label="类型2" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleAdd">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<el-table :data="tableData" size="small " border highlight-current-row stripe>
			<el-table-column type="selection" width="40">
			</el-table-column>
			<el-table-column type="index" width="40"></el-table-column>
			<el-table-column label="操作" width="60">
				<template scope="scope">
					<!--<el-button type="primary" icon="el-icon-edit" circle size="mini"></el-button>
					 <el-button type="danger" icon="el-icon-delete" circle size="mini"  @click="handleDel"></el-button>-->
					<i class="el-icon-edit" type="primary" style="color: cornflowerblue;"></i>
					<i class="el-icon-delete" type="danger" style="color: red;"></i>
				</template>
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="300"></el-table-column>
			<el-table-column prop="code" label="编码" width="100"></el-table-column>
			<el-table-column prop="name" label="姓名"></el-table-column>
			<el-table-column prop="code" label="编码"></el-table-column>
			<el-table-column prop="name" label="姓名"></el-table-column>
			<el-table-column prop="code" label="编码"></el-table-column>
			<el-table-column prop="name" label="姓名"></el-table-column>
			<el-table-column prop="code" label="编码"></el-table-column>
			<el-table-column prop="name" label="姓名"></el-table-column>

		</el-table>
		<el-col :span="24" class="toolbar">
			<el-pagination background layout="prev, pager, next" :total="1000">
			</el-pagination>
		</el-col>
		<!--新增界面-->
		<el-dialog title="新增" :visible="addFormVisible" :close-on-click-modal="false">

			<el-form :model="addForm" label-width="80px" ref="addForm" size="small">
				<el-col :span="24" class="">
					<h3>基本信息</h3>
				</el-col>
				<el-col :span="12" style="margin-bottom: 10px;">
					<el-form-item label="角色名称">
						<el-input></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12" style="margin-bottom: 10px;">
					<el-form-item label="角色编号">
						<el-input></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12" style="margin-bottom: 10px;">
					<el-form-item label="电子邮箱">
						<el-input></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12" style="margin-bottom: 10px;">
					<el-form-item label="电话">
						<el-input></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="24" style="margin-bottom: 10px;">
					<el-form-item label="角色类型">
						<el-checkbox-group>
							<el-checkbox label="角色类型1" name="type"></el-checkbox>
							<el-checkbox label="角色类型2" name="type"></el-checkbox>
							<el-checkbox label="角色类型3" name="type"></el-checkbox>
							<el-checkbox label="角色类型4" name="type"></el-checkbox>
						</el-checkbox-group>
					</el-form-item>
				</el-col>
				<el-col :span="24">
					<h3>详细信息</h3>
				</el-col>
				<el-form-item label="所在岗位" style="margin-bottom: 10px;">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="家庭地址" style="margin-bottom: 10px;">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="备注信息" style="margin-bottom: 10px;">
					<el-input type="textarea"></el-input>
				</el-form-item>
			</el-form>

			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false" size="small">取消</el-button>
				<el-button type="primary" size="small">提交</el-button>
			</div>
		</el-dialog>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				addFormVisible: false, //新增界面是否显示 
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				tableData: [{
					name: '王小虎',
					code: '001'
				}, {
					name: '王小虎',
					code: '001'
				}, {
					name: '王小虎',
					code: '001'
				}, {
					name: '王小虎',
					code: '001'
				}, {
					name: '王小虎',
					code: '001'
				}, {
					name: '王小虎',
					code: '001'
				}, {
					name: '王小虎',
					code: '001'
				}, {
					name: '王小虎',
					code: '001'
				}, {
					name: '王小虎',
					code: '001'
				}, {
					name: '王小虎',
					code: '001'
				}, {
					name: '王小虎',
					code: '001'
				}, {
					name: '王小虎',
					code: '001'
				}, {
					name: '王小虎',
					code: '001'
				}, {
					name: '王小虎',
					code: '001'
				}],
				//新增界面数据
				addForm: {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			//显示新增界面
			handleAdd: function() {
				console.log('点击新增')
				this.addFormVisible = true;
				this.addForm = {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				};
			},
			//删除
			handleDel: function(index, row) {
				console.log('点击删除')
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {

				}).catch(() => {

				});
			},
		}
	}
</script>

<style>
	.el-form-item--mini.el-form-item,
	.el-form-item--small.el-form-item {
		margin-bottom: 0px;
	}
	
	.toolbar {
		background: #f2f2f2;
		padding: 10px;
		margin: 10px 0px;
	}
</style>