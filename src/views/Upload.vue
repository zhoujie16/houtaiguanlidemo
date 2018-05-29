<template>
	<section class="container">
		<div class="handle-box">
			<el-row :gutter="20">
				<el-col :span="6">
					<el-input placeholder="搜索" size="small"></el-input>
				</el-col>
				<el-col :span="12" :offset="6" style="text-align: right;">
					<el-button type="primary" size="small">上传</el-button>
					<el-button type="primary" size="small">下载</el-button>
					<el-button type="primary" size="small">删除</el-button>
				</el-col>
			</el-row>

		</div>
		<div class="">
			<el-table :data="fileList" style="width: 100%" size="small" stripe border>
				<el-table-column type="selection" width="40">
				</el-table-column>
				<el-table-column prop="name" label="文件名">
				</el-table-column>
				<el-table-column prop="name" label="大小" width="100">
				</el-table-column>
				<el-table-column prop="name" label="类型" width="100">
				</el-table-column>
				<el-table-column prop="name" label="上传日期" width="200">
				</el-table-column>
				<el-table-column label="操作" width="160">
					<template slot-scope="scope">
						<el-button size="mini">重命名</el-button>
						<el-button size="mini" type="danger">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="pagination">
				<el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
				</el-pagination>
			</div>
		</div>
	</section>
</template>

<script>
	import FileIcon from './../components/FileIcon';
	export default {
		data() {
			return {
				fileList: [{
					name: 'food.jpeg'
				}, {
					name: 'food.jpeg',
				}, {
					name: 'food.jpeg'
				}, {
					name: 'food.jpeg'
				}, {
					name: 'food.jpeg'
				}, {
					name: 'food.jpeg'
				}, {
					name: 'food.jpeg'
				}, {
					name: 'food.jpeg'
				}, {
					name: 'food.jpeg'
				}, {
					name: 'food.jpeg'
				}]
			};
		},
		methods: {

		},
		components: {
			FileIcon
		}
	}
</script>

<style scoped>
	.file-list {
		display: flex;
		flex-wrap: wrap;
	}
	
	.handle-box {
		margin-bottom: 20px;
	}
</style>